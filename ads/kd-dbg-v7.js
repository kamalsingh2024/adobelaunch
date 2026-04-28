// ============================================================
//  KD DBG - Ad Slot Debugger v7
//  Paste into DevTools console and run immediately.
//  NEW in v7:
//  - Tooltip now shows targeting pills (slot + page + response)
//    matching the same visual style as the overlay
//  - data-advert-name (e.g. 'billboard-advert') shown in overlay header + tooltip
// ============================================================

(function () {

  // ── Clean up any previous run ────────────────────────────────
  document.querySelectorAll(".__dbg__, .__dbg_tooltip__, #__dbg_panel__").forEach(function (n) { n.remove(); });
  var styleEl = document.getElementById("__dbg_styles__");
  if (styleEl) styleEl.remove();

  // ── Styles ────────────────────────────────────────────────────
  var style = document.createElement("style");
  style.id  = "__dbg_styles__";
  style.textContent = [
    ".__dbg_tooltip__ {",
    "  display:none; position:fixed; min-width:340px; max-width:480px;",
    "  background:rgba(10,10,10,0.98); color:#fff;",
    "  font:11px/1.6 monospace; padding:10px 14px;",
    "  border-radius:6px; box-shadow:0 4px 28px rgba(0,0,0,0.9);",
    "  z-index:2147483647; pointer-events:none;",
    "  border-left:4px solid #ff4444;",
    "}",
    ".__dbg_tooltip__.filled { border-left-color:#00ff88; }",
    ".__dbg_pill__ {",
    "  display:inline-block;",
    "  background:rgba(255,255,255,0.08);",
    "  border:1px solid rgba(255,255,255,0.15);",
    "  border-radius:3px;",
    "  padding:1px 6px;",
    "  margin:2px 3px 2px 0;",
    "  font:bold 10px/1.6 monospace;",
    "  color:#fff;",
    "  white-space:nowrap;",
    "}",
    ".__dbg_pill__ b { color:#ffcc44; }",
    ".__dbg_pill_row__ {",
    "  display:flex; flex-wrap:wrap; gap:3px;",
    "  margin:3px 0 6px 0;",
    "}",
    ".__dbg_section_label__ {",
    "  display:block;",
    "  font:bold 9px/1.8 monospace;",
    "  color:rgba(255,255,255,0.4);",
    "  text-transform:uppercase;",
    "  letter-spacing:0.8px;",
    "  margin-top:6px;",
    "}",
    ".__dbg_divider__ {",
    "  border:none; border-top:1px solid rgba(255,255,255,0.1);",
    "  margin:6px 0;",
    "}",
    ".__dbg_row__ {",
    "  display:flex; justify-content:space-between;",
    "  font:bold 11px/1.8 monospace;",
    "  white-space:nowrap; overflow:hidden;",
    "}",
    ".__dbg_row__ .k { color:rgba(255,255,255,0.5); min-width:100px; }",
    ".__dbg_row__ .v { color:#fff; overflow:hidden; text-overflow:ellipsis; }"
  ].join("\n");
  document.head.appendChild(style);

  // ── Shared floating tooltip ───────────────────────────────────
  var tooltip       = document.createElement("div");
  tooltip.className = "__dbg_tooltip__";
  document.body.appendChild(tooltip);

  function moveTooltip(e) {
    var x  = e.clientX + 16;
    var y  = e.clientY + 16;
    var tw = tooltip.offsetWidth  || 400;
    var th = tooltip.offsetHeight || 260;
    if (x + tw > window.innerWidth  - 10) x = e.clientX - tw - 16;
    if (y + th > window.innerHeight - 10) y = e.clientY - th - 16;
    tooltip.style.left = x + "px";
    tooltip.style.top  = y + "px";
  }

  // ── DOM helpers ───────────────────────────────────────────────
  function el(tag, css, html) {
    var e = document.createElement(tag);
    if (css)  e.style.cssText = css;
    if (html) e.innerHTML = html;
    return e;
  }

  function makePillRow(pairs) {
    var row = document.createElement("div");
    row.className = "__dbg_pill_row__";
    pairs.forEach(function (p) {
      if (!p || p[1] == null) return;
      var pill = document.createElement("span");
      pill.className = "__dbg_pill__";
      pill.innerHTML = "<b>" + p[0] + ":</b> " + p[1];
      row.appendChild(pill);
    });
    return row;
  }

  function makeSectionLabel(text) {
    var s = document.createElement("span");
    s.className   = "__dbg_section_label__";
    s.textContent = text;
    return s;
  }

  function makeRow(key, val) {
    var d = document.createElement("div");
    d.className = "__dbg_row__";
    d.innerHTML = "<span class='k'>" + key + "</span><span class='v'>" + val + "</span>";
    return d;
  }

  function makeDivider() {
    var hr = document.createElement("hr");
    hr.className = "__dbg_divider__";
    return hr;
  }

  // ── Pull GPT data ─────────────────────────────────────────────
  var gptSlots      = {};
  var pageTargeting = {};

  if (window.googletag && googletag.pubads) {
    try {
      googletag.pubads().getTargetingKeys().forEach(function (key) {
        pageTargeting[key] = googletag.pubads().getTargeting(key).join(", ");
      });
    } catch(e) {}

    googletag.pubads().getSlots().forEach(function (slot) {
      var id   = slot.getSlotElementId();
      var resp = slot.getResponseInformation();
      var tmap = {};
      try { tmap = slot.getTargetingMap(); } catch(e) {}
      gptSlots[id] = {
        unitPath:     slot.getAdUnitPath(),
        sizes:        slot.getSizes().map(function (s) {
                        return typeof s.getWidth === "function"
                          ? s.getWidth() + "x" + s.getHeight() : "fluid";
                      }).join(", "),
        oop:          slot.getOutOfPage(),
        advertiserId: resp ? resp.advertiserId : null,
        campaignId:   resp ? resp.campaignId   : null,
        lineItemId:   resp ? resp.lineItemId   : null,
        creativeId:   resp ? resp.creativeId   : null,
        position:     tmap.position ? [].concat(tmap.position)[0] : null,
        above:        tmap.above    ? [].concat(tmap.above)[0]    : null,
        slotIndex:    tmap.index    ? [].concat(tmap.index)[0]    : null,
        inView:       tmap.in_view  ? [].concat(tmap.in_view)[0]  : null
      };
    });
  }

  // _telstra fallback
  if (Object.keys(pageTargeting).length === 0) {
    try {
      var lib = (window._telstra && window._telstra.adlib) || (window.telstra && window.telstra.adlib);
      if (lib && typeof lib.targeting === "function") {
        var tvals = lib.targeting();
        if (Array.isArray(tvals)) {
          tvals.forEach(function (t) {
            pageTargeting[t.key] = Array.isArray(t.value) ? t.value.join(", ") : t.value;
          });
        }
      }
    } catch(e) {}
  }

  var divs = document.querySelectorAll("[id*=tmedia-ad]");
  if (divs.length === 0) { console.warn("KD DBG: No [id*=tmedia-ad] elements found."); return; }

  var summaryRows = [];
  var ptKeys      = Object.keys(pageTargeting);

  divs.forEach(function (el_slot, i) {
    var id   = el_slot.id;
    var data = gptSlots[id] || {};

    // Size parsing
    var sizeMatch = id.match(/tmedia-ad-(\d{1,4})-(\d{1,3})/);
    var declaredW = sizeMatch ? parseInt(sizeMatch[1]) : 0;
    var declaredH = sizeMatch ? parseInt(sizeMatch[2]) : 0;
    if ((!declaredW || !declaredH) && data.sizes) {
      var first = data.sizes.split(",")[0].trim().split("x");
      declaredW = parseInt(first[0]) || 0;
      declaredH = parseInt(first[1]) || 0;
    }
    var declaredLabel = (declaredW && declaredH) ? declaredW + "x" + declaredH + "px" : "unknown";

    // data-advert-name — check element, then walk up to nearest ancestor that has it
    var advertName = el_slot.getAttribute("data-advert-name") || null;
    if (!advertName) {
      var _an = el_slot.parentElement;
      while (_an && _an !== document.body) {
        if (_an.getAttribute("data-advert-name")) { advertName = _an.getAttribute("data-advert-name"); break; }
        _an = _an.parentElement;
      }
    }
    // Also check closest sibling containers (some implementations wrap in a div with data-advert-name)
    if (!advertName && el_slot.closest) {
      var _anc = el_slot.closest("[data-advert-name]");
      if (_anc) advertName = _anc.getAttribute("data-advert-name");
    }


    // Fill + iframe
    var iframe     = el_slot.querySelector("iframe");
    var isFilled   = !!(iframe && iframe.getAttribute("data-load-complete") === "true");
    var iframeW    = iframe ? iframe.getAttribute("width")  : null;
    var iframeH    = iframe ? iframe.getAttribute("height") : null;
    var iframeType = "none";
    if (iframe) {
      iframeType = (iframe.id && iframe.id.indexOf("_sf") !== -1) ? "SafeFrame" : "FriendlyIframe";
    }

    // Size classification
    var rect        = el_slot.getBoundingClientRect();
    var isCollapsed = (rect.width === 0 || rect.height === 0);
    var isTiny      = (declaredW > 0 && declaredW < 10) || (declaredH > 0 && declaredH < 10);
    var needsForce  = isCollapsed || isTiny;

    if (needsForce) {
      el_slot.style.setProperty("display",    "block",   "important");
      el_slot.style.setProperty("visibility", "visible", "important");
      el_slot.style.setProperty("overflow",   "visible", "important");
      el_slot._dbgForced = true;
      if (isTiny) {
        el_slot.style.setProperty("width",      "100%", "important");
        el_slot.style.setProperty("min-height", "50px", "important");
      }
      var parent = el_slot.parentElement;
      if (parent) {
        var pcs = window.getComputedStyle(parent);
        if (pcs.display    === "none")   { parent._dbgOrigDisplay    = true; parent.style.setProperty("display",    "block",   "important"); }
        if (pcs.visibility === "hidden") { parent._dbgOrigVisibility = true; parent.style.setProperty("visibility", "visible", "important"); }
        if (pcs.overflow   === "hidden") { parent._dbgOrigOverflow   = true; parent.style.setProperty("overflow",   "visible", "important"); }
      }
    }

    el_slot.style.setProperty("position",       "relative", "important");
    el_slot.style.setProperty("pointer-events", "all",      "important");

    var flagNote = needsForce
      ? (isTiny ? "\u26a0\ufe0f  TINY (" + declaredLabel + ") \u2014 forced 100% x 50px"
                : "\u26a0\ufe0f  COLLAPSED \u2014 label expanded, slot untouched")
      : null;

    // ── Always-on overlay ─────────────────────────────────────────
    var label       = document.createElement("div");
    label.className = "__dbg__";
    label.style.cssText = [
      "position:absolute", "inset:0",
      "background:" + (isFilled ? "rgba(0,80,0,0.88)" : "rgba(120,0,0,0.88)"),
      "border:2px dashed " + (isFilled ? "#00ff88" : "#ff4444"),
      "color:#fff", "font:bold 11px/1.5 monospace", "padding:6px 8px",
      "box-sizing:border-box", "z-index:2147483646",
      "pointer-events:none", "overflow:hidden"
    ].join(";");

    if (needsForce && !isTiny) {
      label.style.minWidth  = (declaredW >= 10) ? (declaredW || 320) + "px" : "100%";
      label.style.minHeight = (declaredH >= 10) ? (declaredH || 50)  + "px" : "80px";
    }

    var header = document.createElement("div");
    header.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:3px";
    header.innerHTML =
      "<span>" + (isFilled ? "\u2705 FILLED" : "\u274c NOT FILLED") + "  [Slot " + i + "]  " +
      "<span style='color:rgba(255,255,255,0.6);font-size:10px'>" + declaredLabel + "</span>" +
      (advertName ? "  <span style='background:#1a3a5c;border:1px solid #4488cc;border-radius:3px;padding:1px 5px;font-size:10px;color:#88ccff'>" + advertName + "</span>" : "") +
      "</span>" +
      "<span style='color:rgba(255,255,255,0.5);font-size:10px;max-width:55%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap'>" +
        (data.unitPath || id) +
      "</span>";
    label.appendChild(header);

    var slotPairs = [["position", data.position], ["above", data.above], ["index", data.slotIndex], ["in_view", data.inView]].filter(function (p) { return p[1] != null; });
    if (slotPairs.length > 0) { label.appendChild(makeSectionLabel("Slot Targeting")); label.appendChild(makePillRow(slotPairs)); }

    if (ptKeys.length > 0) { label.appendChild(makeSectionLabel("Page Targeting")); label.appendChild(makePillRow(ptKeys.map(function (k) { return [k, pageTargeting[k]]; }))); }

    var respPairs = [["line_item", data.lineItemId], ["creative", data.creativeId], ["advertiser", data.advertiserId]].filter(function (p) { return isFilled && p[1] != null; });
    if (respPairs.length > 0) { label.appendChild(makeSectionLabel("Ad Response")); label.appendChild(makePillRow(respPairs)); }

    if (flagNote) {
      var fn = document.createElement("div");
      fn.style.cssText = "margin-top:4px;font-size:10px;color:#ffcc44";
      fn.textContent = flagNote;
      label.appendChild(fn);
    }

    el_slot.appendChild(label);

    // ── Tooltip builder — HTML with pills ─────────────────────────
    function buildTooltip() {
      // Clear and rebuild
      while (tooltip.firstChild) tooltip.removeChild(tooltip.firstChild);
      tooltip.className = "__dbg_tooltip__" + (isFilled ? " filled" : "");

      // Status header
      var hdr = document.createElement("div");
      hdr.style.cssText = "font:bold 12px/1.8 monospace;margin-bottom:4px;display:flex;justify-content:space-between";
      hdr.innerHTML =
        "<span>" + (isFilled ? "\u2705 FILLED" : "\u274c NOT FILLED") + "  <span style='color:#888'>[Slot " + i + "]</span></span>" +
        "<span style='color:#ffcc44;font-size:10px'>" + declaredLabel + "</span>";
      tooltip.appendChild(hdr);
      tooltip.appendChild(makeDivider());

      // Core info rows
      var coreRows = [
        ["Div",       id],
        ["Advert",    advertName || "\u2014"],
        ["Unit",      data.unitPath || "\u2014"],
        ["GPT Sizes", data.sizes    || "\u2014"],
        ["Rendered",  iframeW && iframeH ? iframeW + "x" + iframeH + "px" : "\u2014"],
        ["OOP",       data.oop !== undefined ? String(data.oop) : "\u2014"],
        ["Iframe",    iframeType]
      ];
      coreRows.forEach(function (r) { tooltip.appendChild(makeRow(r[0], r[1])); });

      // Slot targeting
      var slotTip = [["position", data.position], ["above", data.above], ["index", data.slotIndex], ["in_view", data.inView]].filter(function (p) { return p[1] != null; });
      if (slotTip.length > 0) {
        tooltip.appendChild(makeDivider());
        tooltip.appendChild(makeSectionLabel("Slot Targeting"));
        tooltip.appendChild(makePillRow(slotTip));
      }

      // Page targeting
      if (ptKeys.length > 0) {
        tooltip.appendChild(makeSectionLabel("Page Targeting"));
        tooltip.appendChild(makePillRow(ptKeys.map(function (k) { return [k, pageTargeting[k]]; })));
      }

      // Ad response (filled only)
      var respTip = [
        ["line_item",   data.lineItemId],
        ["creative",    data.creativeId],
        ["advertiser",  data.advertiserId],
        ["campaign",    data.campaignId]
      ].filter(function (p) { return isFilled && p[1] != null; });
      if (respTip.length > 0) {
        tooltip.appendChild(makeDivider());
        tooltip.appendChild(makeSectionLabel("Ad Response"));
        tooltip.appendChild(makePillRow(respTip));
      }

      if (flagNote) {
        tooltip.appendChild(makeDivider());
        var fn = document.createElement("div");
        fn.style.cssText = "font-size:10px;color:#ffcc44";
        fn.textContent = flagNote;
        tooltip.appendChild(fn);
      }
    }

    el_slot.addEventListener("mouseenter", function (e) {
      buildTooltip();
      tooltip.style.display = "block";
      moveTooltip(e);
    });
    el_slot.addEventListener("mousemove",  moveTooltip);
    el_slot.addEventListener("mouseleave", function () { tooltip.style.display = "none"; });

    summaryRows.push({
      i: i, div: id,
      unit:       data.unitPath  || "\u2014",
      sizes:      data.sizes     || "\u2014",
      declared:   declaredLabel,
      filled:     isFilled,
      collapsed:  isCollapsed,
      tiny:       isTiny,
      iframeType: iframeType,
      position:   data.position  || "\u2014",
      lineItemId: data.lineItemId || null,
      creativeId: data.creativeId || null,
      advertName: advertName || null
    });
  });

  // ── Panel ─────────────────────────────────────────────────────
  var nFilled    = summaryRows.filter(function (r) { return  r.filled;               }).length;
  var nUnfilled  = summaryRows.filter(function (r) { return !r.filled;               }).length;
  var nCollapsed = summaryRows.filter(function (r) { return  r.collapsed && !r.tiny; }).length;
  var nTiny      = summaryRows.filter(function (r) { return  r.tiny;                 }).length;

  var tableRows = summaryRows.map(function (r, idx) {
    var bg   = idx % 2 === 0 ? "#1a1a1a" : "#222";
    var flag = r.tiny      ? "<span style='color:#ffaa00'>\u26a0\ufe0f Tiny</span>"
             : r.collapsed ? "<span style='color:#ff9900'>\u26a0\ufe0f Forced</span>"
             : "<span style='color:#555'>\u2014</span>";
    return "<tr style='background:" + bg + ";cursor:pointer'" +
      " onclick='(function(){var el=document.getElementById(\"" + r.div + "\");if(el)el.scrollIntoView({behavior:\"smooth\",block:\"center\"});})()'>" +
      "<td style='padding:3px 8px'>" + r.i + "</td>" +
      "<td style='padding:3px 8px;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap'>" + r.div + "</td>" +
      "<td style='padding:3px 8px;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap'>" + r.unit + "</td>" +
      "<td style='padding:3px 8px'>" + r.declared + "</td>" +
      "<td style='padding:3px 8px;color:" + (r.filled ? "#00ff88" : "#ff6666") + ";font-weight:bold'>" + (r.filled ? "\u2705 Filled" : "\u274c Empty") + "</td>" +
      "<td style='padding:3px 8px;color:#aaa'>" + r.iframeType + "</td>" +
      "<td style='padding:3px 8px;color:#ffcc44'>" + r.position + "</td>" +
      "<td style='padding:3px 8px;color:#aaa;font-size:10px'>" + (r.lineItemId || "\u2014") + "</td>" +
      "<td style='padding:3px 8px'>" + flag + "</td></tr>";
  }).join("");

  var ptHtml = ptKeys.length > 0
    ? ptKeys.map(function (k) {
        return "<span style='background:#222;border:1px solid #444;border-radius:3px;padding:1px 6px;margin-right:4px;'>" +
               "<b style='color:#ffcc44'>" + k + ":</b> " + pageTargeting[k] + "</span>";
      }).join("")
    : "<span style='color:#555'>No page targeting found</span>";

  var closeScript = "(function(){" +
    "document.querySelectorAll('[id*=tmedia-ad]').forEach(function(el){" +
      "if(el._dbgForced){el.style.removeProperty('display');el.style.removeProperty('visibility');el.style.removeProperty('overflow');el.style.removeProperty('width');el.style.removeProperty('min-height');delete el._dbgForced;}" +
      "el.style.removeProperty('position');el.style.removeProperty('pointer-events');" +
      "var p=el.parentElement;if(p){" +
        "if(p._dbgOrigDisplay){p.style.removeProperty('display');delete p._dbgOrigDisplay;}" +
        "if(p._dbgOrigVisibility){p.style.removeProperty('visibility');delete p._dbgOrigVisibility;}" +
        "if(p._dbgOrigOverflow){p.style.removeProperty('overflow');delete p._dbgOrigOverflow;}" +
      "}" +
    "});" +
    "document.querySelectorAll('.__dbg__,.__dbg_tooltip__,#__dbg_panel__,#__dbg_styles__').forEach(function(n){n.remove()});" +
  "})()";

  var panel = document.createElement("div");
  panel.id  = "__dbg_panel__";
  panel.innerHTML =
    "<div style='display:flex;justify-content:space-between;align-items:center;margin-bottom:8px'>" +
      "<b style='font-size:13px'>" +
        "<span style='background:#cc2222;color:#fff;padding:2px 7px;border-radius:3px;margin-right:7px;font-size:11px;letter-spacing:2px'>KD</span>" +
        "Ad Slot Debugger \u2014 " + summaryRows.length + " slots" +
      "</b>" +
      "<span style='font-size:11px'>" +
        "<span style='color:#00ff88'>\u2705 " + nFilled    + " filled</span>  " +
        "<span style='color:#ff6666'>\u274c " + nUnfilled  + " empty</span>  " +
        "<span style='color:#ff9900'>\u26a0\ufe0f " + nCollapsed + " forced</span>  " +
        "<span style='color:#ffaa00'>\u26a0\ufe0f " + nTiny + " tiny</span>" +
      "</span>" +
      "<button onclick=\"" + closeScript + "\" style='background:#444;color:#fff;border:none;padding:3px 10px;cursor:pointer;border-radius:3px;font-size:11px;margin-left:12px'>\u2715 Close</button>" +
    "</div>" +
    "<div style='overflow-y:auto;max-height:200px'>" +
      "<table style='width:100%;border-collapse:collapse;font-size:11px'>" +
        "<thead><tr style='background:#333;color:#aaa;text-align:left'>" +
          "<th style='padding:4px 8px'>#</th>" +
          "<th style='padding:4px 8px'>Div ID</th>" +
          "<th style='padding:4px 8px'>Unit Path</th>" +
          "<th style='padding:4px 8px'>Declared</th>" +
          "<th style='padding:4px 8px'>Status</th>" +
          "<th style='padding:4px 8px'>Iframe</th>" +
          "<th style='padding:4px 8px'>Position</th>" +
          "<th style='padding:4px 8px'>Line Item</th>" +
          "<th style='padding:4px 8px'>Flag</th>" +
        "</tr></thead>" +
        "<tbody>" + tableRows + "</tbody>" +
      "</table>" +
    "</div>" +
    "<div style='margin-top:8px;padding-top:6px;border-top:1px solid #2a2a2a;font-size:10px;line-height:2'>" +
      "<b style='color:#aaa;margin-right:8px'>Page Targeting:</b>" + ptHtml +
    "</div>" +
    "<div style='font-size:10px;color:#444;margin-top:3px'>" +
      "\ud83d\udca1 Hover any slot for full details  \u2022  Click a row to scroll" +
    "</div>";

  panel.style.cssText = "position:fixed;bottom:0;left:0;right:0;background:#111;color:#fff;" +
    "font:12px/1.5 monospace;padding:10px 14px;z-index:2147483647;" +
    "border-top:3px solid #cc2222;box-shadow:0 -4px 20px rgba(0,0,0,0.8);";

  document.body.appendChild(panel);
  console.table(summaryRows);
  console.log("\u2705 KD DBG v7: " + summaryRows.length + " slots | Page targeting: " + JSON.stringify(pageTargeting));

})();
