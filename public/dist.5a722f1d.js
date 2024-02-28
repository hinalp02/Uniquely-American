// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"g1TTm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0e4c40ea5a722f1d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7GSdX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>index);
parcelHelpers.export(exports, "layout", ()=>layout);
var _layoutJs = require("./layout.js");
var _layoutJsDefault = parcelHelpers.interopDefault(_layoutJs);
const layout = (0, _layoutJsDefault.default);
var index = {
    layout: (0, _layoutJsDefault.default)
};

},{"./layout.js":"doGwZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"doGwZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>layout);
var _mapValues = require("lodash-es/mapValues");
var _mapValuesDefault = parcelHelpers.interopDefault(_mapValues);
var _last = require("lodash-es/last");
var _lastDefault = parcelHelpers.interopDefault(_last);
var _defaults = require("lodash-es/defaults");
var _defaultsDefault = parcelHelpers.interopDefault(_defaults);
var _pick = require("lodash-es/pick");
var _pickDefault = parcelHelpers.interopDefault(_pick);
var _merge = require("lodash-es/merge");
var _mergeDefault = parcelHelpers.interopDefault(_merge);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _graphlibrary = require("@unovis/graphlibrary");
var _acyclicJs = require("./acyclic.js");
var _acyclicJsDefault = parcelHelpers.interopDefault(_acyclicJs);
var _normalizeJs = require("./normalize.js");
var _normalizeJsDefault = parcelHelpers.interopDefault(_normalizeJs);
var _indexJs = require("./rank/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _utilJs = require("./util.js");
var _utilJsDefault = parcelHelpers.interopDefault(_utilJs);
var _parentDummyChainsJs = require("./parent-dummy-chains.js");
var _parentDummyChainsJsDefault = parcelHelpers.interopDefault(_parentDummyChainsJs);
var _nestingGraphJs = require("./nesting-graph.js");
var _nestingGraphJsDefault = parcelHelpers.interopDefault(_nestingGraphJs);
var _addBorderSegmentsJs = require("./add-border-segments.js");
var _addBorderSegmentsJsDefault = parcelHelpers.interopDefault(_addBorderSegmentsJs);
var _coordinateSystemJs = require("./coordinate-system.js");
var _coordinateSystemJsDefault = parcelHelpers.interopDefault(_coordinateSystemJs);
var _indexJs1 = require("./order/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./position/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function layout(g, opts) {
    const time = opts && opts.debugTiming ? (0, _utilJsDefault.default).time : (0, _utilJsDefault.default).notime;
    time("layout", function() {
        const layoutGraph = time("  buildLayoutGraph", function() {
            return buildLayoutGraph(g);
        });
        time("  runLayout", function() {
            runLayout(layoutGraph, time);
        });
        time("  updateInputGraph", function() {
            updateInputGraph(g, layoutGraph);
        });
    });
}
function runLayout(g, time) {
    time("    makeSpaceForEdgeLabels", function() {
        makeSpaceForEdgeLabels(g);
    });
    time("    removeSelfEdges", function() {
        removeSelfEdges(g);
    });
    time("    acyclic", function() {
        (0, _acyclicJsDefault.default).run(g);
    });
    time("    nestingGraph.run", function() {
        (0, _nestingGraphJsDefault.default).run(g);
    });
    time("    rank", function() {
        (0, _indexJsDefault.default)((0, _utilJsDefault.default).asNonCompoundGraph(g));
    });
    time("    injectEdgeLabelProxies", function() {
        injectEdgeLabelProxies(g);
    });
    time("    removeEmptyRanks", function() {
        (0, _utilJs.removeEmptyRanks)(g);
    });
    time("    nestingGraph.cleanup", function() {
        (0, _nestingGraphJsDefault.default).cleanup(g);
    });
    time("    normalizeRanks", function() {
        (0, _utilJs.normalizeRanks)(g);
    });
    time("    assignRankMinMax", function() {
        assignRankMinMax(g);
    });
    time("    removeEdgeLabelProxies", function() {
        removeEdgeLabelProxies(g);
    });
    time("    normalize.run", function() {
        (0, _normalizeJsDefault.default).run(g);
    });
    time("    parentDummyChains", function() {
        (0, _parentDummyChainsJsDefault.default)(g);
    });
    time("    addBorderSegments", function() {
        (0, _addBorderSegmentsJsDefault.default)(g);
    });
    time("    order", function() {
        (0, _indexJsDefault1.default)(g);
    });
    time("    insertSelfEdges", function() {
        insertSelfEdges(g);
    });
    time("    adjustCoordinateSystem", function() {
        (0, _coordinateSystemJsDefault.default).adjust(g);
    });
    time("    position", function() {
        (0, _indexJsDefault2.default)(g);
    });
    time("    positionSelfEdges", function() {
        positionSelfEdges(g);
    });
    time("    removeBorderNodes", function() {
        removeBorderNodes(g);
    });
    time("    normalize.undo", function() {
        (0, _normalizeJsDefault.default).undo(g);
    });
    time("    fixupEdgeLabelCoords", function() {
        fixupEdgeLabelCoords(g);
    });
    time("    undoCoordinateSystem", function() {
        (0, _coordinateSystemJsDefault.default).undo(g);
    });
    time("    translateGraph", function() {
        translateGraph(g);
    });
    time("    assignNodeIntersects", function() {
        assignNodeIntersects(g);
    });
    time("    reversePoints", function() {
        reversePointsForReversedEdges(g);
    });
    time("    acyclic.undo", function() {
        (0, _acyclicJsDefault.default).undo(g);
    });
}
/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */ function updateInputGraph(inputGraph, layoutGraph) {
    (0, _forEachDefault.default)(inputGraph.nodes(), function(v) {
        const inputLabel = inputGraph.node(v);
        const layoutLabel = layoutGraph.node(v);
        if (inputLabel) {
            inputLabel.x = layoutLabel.x;
            inputLabel.y = layoutLabel.y;
            if (layoutGraph.children(v).length) {
                inputLabel.width = layoutLabel.width;
                inputLabel.height = layoutLabel.height;
            }
        }
    });
    (0, _forEachDefault.default)(inputGraph.edges(), function(e) {
        const inputLabel = inputGraph.edge(e);
        const layoutLabel = layoutGraph.edge(e);
        inputLabel.points = layoutLabel.points;
        if ((0, _hasDefault.default)(layoutLabel, "x")) {
            inputLabel.x = layoutLabel.x;
            inputLabel.y = layoutLabel.y;
        }
    });
    inputGraph.graph().width = layoutGraph.graph().width;
    inputGraph.graph().height = layoutGraph.graph().height;
}
const graphNumAttrs = [
    "nodesep",
    "edgesep",
    "ranksep",
    "marginx",
    "marginy"
];
const graphDefaults = {
    ranksep: 50,
    edgesep: 20,
    nodesep: 50,
    rankdir: "tb"
};
const graphAttrs = [
    "acyclicer",
    "ranker",
    "rankdir",
    "align"
];
const nodeNumAttrs = [
    "width",
    "height"
];
const nodeDefaults = {
    width: 0,
    height: 0
};
const edgeNumAttrs = [
    "minlen",
    "weight",
    "width",
    "height",
    "labeloffset"
];
const edgeDefaults = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
};
const edgeAttrs = [
    "labelpos"
];
/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */ function buildLayoutGraph(inputGraph) {
    const g = new (0, _graphlibrary.Graph)({
        multigraph: true,
        compound: true
    });
    const graph = canonicalize(inputGraph.graph());
    g.setGraph((0, _mergeDefault.default)({}, graphDefaults, selectNumberAttrs(graph, graphNumAttrs), (0, _pickDefault.default)(graph, graphAttrs)));
    (0, _forEachDefault.default)(inputGraph.nodes(), function(v) {
        const node = canonicalize(inputGraph.node(v));
        g.setNode(v, (0, _defaultsDefault.default)(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
        g.setParent(v, inputGraph.parent(v));
    });
    (0, _forEachDefault.default)(inputGraph.edges(), function(e) {
        const edge = canonicalize(inputGraph.edge(e));
        g.setEdge(e, (0, _mergeDefault.default)({}, edgeDefaults, selectNumberAttrs(edge, edgeNumAttrs), (0, _pickDefault.default)(edge, edgeAttrs)));
    });
    return g;
}
/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */ function makeSpaceForEdgeLabels(g) {
    const graph = g.graph();
    graph.ranksep /= 2;
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const edge = g.edge(e);
        edge.minlen *= 2;
        if (edge.labelpos.toLowerCase() !== "c") {
            if (graph.rankdir === "TB" || graph.rankdir === "BT") edge.width += edge.labeloffset;
            else edge.height += edge.labeloffset;
        }
    });
}
/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */ function injectEdgeLabelProxies(g) {
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const edge = g.edge(e);
        if (edge.width && edge.height) {
            const v = g.node(e.v);
            const w = g.node(e.w);
            const label = {
                rank: (w.rank - v.rank) / 2 + v.rank,
                e: e
            };
            (0, _utilJsDefault.default).addDummyNode(g, "edge-proxy", label, "_ep");
        }
    });
}
function assignRankMinMax(g) {
    let maxRank = 0;
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        const node = g.node(v);
        if (node.borderTop) {
            node.minRank = g.node(node.borderTop).rank;
            node.maxRank = g.node(node.borderBottom).rank;
            maxRank = Math.max(maxRank, node.maxRank);
        }
    });
    g.graph().maxRank = maxRank;
}
function removeEdgeLabelProxies(g) {
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        const node = g.node(v);
        if (node.dummy === "edge-proxy") {
            g.edge(node.e).labelRank = node.rank;
            g.removeNode(v);
        }
    });
}
function translateGraph(g) {
    let minX = Number.POSITIVE_INFINITY;
    let maxX = 0;
    let minY = Number.POSITIVE_INFINITY;
    let maxY = 0;
    const graphLabel = g.graph();
    const marginX = graphLabel.marginx || 0;
    const marginY = graphLabel.marginy || 0;
    function getExtremes(attrs) {
        const x = attrs.x;
        const y = attrs.y;
        const w = attrs.width;
        const h = attrs.height;
        minX = Math.min(minX, x - w / 2);
        maxX = Math.max(maxX, x + w / 2);
        minY = Math.min(minY, y - h / 2);
        maxY = Math.max(maxY, y + h / 2);
    }
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        getExtremes(g.node(v));
    });
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const edge = g.edge(e);
        if ((0, _hasDefault.default)(edge, "x")) getExtremes(edge);
    });
    minX -= marginX;
    minY -= marginY;
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        const node = g.node(v);
        node.x -= minX;
        node.y -= minY;
    });
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const edge = g.edge(e);
        (0, _forEachDefault.default)(edge.points, function(p) {
            p.x -= minX;
            p.y -= minY;
        });
        if ((0, _hasDefault.default)(edge, "x")) edge.x -= minX;
        if ((0, _hasDefault.default)(edge, "y")) edge.y -= minY;
    });
    graphLabel.width = maxX - minX + marginX;
    graphLabel.height = maxY - minY + marginY;
}
function assignNodeIntersects(g) {
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const edge = g.edge(e);
        const nodeV = g.node(e.v);
        const nodeW = g.node(e.w);
        let p1 = null;
        let p2 = null;
        if (!edge.points) {
            edge.points = [];
            p1 = nodeW;
            p2 = nodeV;
        } else {
            p1 = edge.points[0];
            p2 = edge.points[edge.points.length - 1];
        }
        edge.points.unshift((0, _utilJsDefault.default).intersectRect(nodeV, p1));
        edge.points.push((0, _utilJsDefault.default).intersectRect(nodeW, p2));
    });
}
function fixupEdgeLabelCoords(g) {
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const edge = g.edge(e);
        if ((0, _hasDefault.default)(edge, "x")) {
            if (edge.labelpos === "l" || edge.labelpos === "r") edge.width -= edge.labeloffset;
            switch(edge.labelpos){
                case "l":
                    edge.x -= edge.width / 2 + edge.labeloffset;
                    break;
                case "r":
                    edge.x += edge.width / 2 + edge.labeloffset;
                    break;
            }
        }
    });
}
function reversePointsForReversedEdges(g) {
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const edge = g.edge(e);
        if (edge.reversed) edge.points.reverse();
    });
}
function removeBorderNodes(g) {
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        if (g.children(v).length) {
            const node = g.node(v);
            const t = g.node(node.borderTop);
            const b = g.node(node.borderBottom);
            const l = g.node((0, _lastDefault.default)(node.borderLeft));
            const r = g.node((0, _lastDefault.default)(node.borderRight));
            node.width = Math.abs(r.x - l.x);
            node.height = Math.abs(b.y - t.y);
            node.x = l.x + node.width / 2;
            node.y = t.y + node.height / 2;
        }
    });
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        if (g.node(v).dummy === "border") g.removeNode(v);
    });
}
function removeSelfEdges(g) {
    (0, _forEachDefault.default)(g.edges(), function(e) {
        if (e.v === e.w) {
            const node = g.node(e.v);
            if (!node.selfEdges) node.selfEdges = [];
            node.selfEdges.push({
                e: e,
                label: g.edge(e)
            });
            g.removeEdge(e);
        }
    });
}
function insertSelfEdges(g) {
    const layers = (0, _utilJsDefault.default).buildLayerMatrix(g);
    (0, _forEachDefault.default)(layers, function(layer) {
        let orderShift = 0;
        (0, _forEachDefault.default)(layer, function(v, i) {
            const node = g.node(v);
            node.order = i + orderShift;
            (0, _forEachDefault.default)(node.selfEdges, function(selfEdge) {
                (0, _utilJsDefault.default).addDummyNode(g, "selfedge", {
                    width: selfEdge.label.width,
                    height: selfEdge.label.height,
                    rank: node.rank,
                    order: i + ++orderShift,
                    e: selfEdge.e,
                    label: selfEdge.label
                }, "_se");
            });
            delete node.selfEdges;
        });
    });
}
function positionSelfEdges(g) {
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        const node = g.node(v);
        if (node.dummy === "selfedge") {
            const selfNode = g.node(node.e.v);
            const x = selfNode.x + selfNode.width / 2;
            const y = selfNode.y;
            const dx = node.x - x;
            const dy = selfNode.height / 2;
            g.setEdge(node.e, node.label);
            g.removeNode(v);
            node.label.points = [
                {
                    x: x + 2 * dx / 3,
                    y: y - dy
                },
                {
                    x: x + 5 * dx / 6,
                    y: y - dy
                },
                {
                    x: x + dx,
                    y: y
                },
                {
                    x: x + 5 * dx / 6,
                    y: y + dy
                },
                {
                    x: x + 2 * dx / 3,
                    y: y + dy
                }
            ];
            node.label.x = node.x;
            node.label.y = node.y;
        }
    });
}
function selectNumberAttrs(obj, attrs) {
    return (0, _mapValuesDefault.default)((0, _pickDefault.default)(obj, attrs), Number);
}
function canonicalize(attrs) {
    const newAttrs = {};
    (0, _forEachDefault.default)(attrs, function(v, k) {
        newAttrs[k.toLowerCase()] = v;
    });
    return newAttrs;
}

},{"lodash-es/mapValues":"86blH","lodash-es/last":"3H5DF","lodash-es/defaults":"9AHLb","lodash-es/pick":"igMRV","lodash-es/merge":"hwXcM","lodash-es/has":"9ACAk","lodash-es/forEach":"jqAb8","@unovis/graphlibrary":"75K2w","./acyclic.js":"5IhVy","./normalize.js":"5GgCa","./rank/index.js":"dqcz7","./util.js":"g54fk","./parent-dummy-chains.js":"2hxMt","./nesting-graph.js":"gSEOi","./add-border-segments.js":"d0X72","./coordinate-system.js":"7af2B","./order/index.js":"bCWSx","./position/index.js":"7d9Q7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"86blH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseAssignValueJs = require("./_baseAssignValue.js");
var _baseAssignValueJsDefault = parcelHelpers.interopDefault(_baseAssignValueJs);
var _baseForOwnJs = require("./_baseForOwn.js");
var _baseForOwnJsDefault = parcelHelpers.interopDefault(_baseForOwnJs);
var _baseIterateeJs = require("./_baseIteratee.js");
var _baseIterateeJsDefault = parcelHelpers.interopDefault(_baseIterateeJs);
/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */ function mapValues(object, iteratee) {
    var result = {};
    iteratee = (0, _baseIterateeJsDefault.default)(iteratee, 3);
    (0, _baseForOwnJsDefault.default)(object, function(value, key, object) {
        (0, _baseAssignValueJsDefault.default)(result, key, iteratee(value, key, object));
    });
    return result;
}
exports.default = mapValues;

},{"./_baseAssignValue.js":"7kEZ2","./_baseForOwn.js":"bGCTn","./_baseIteratee.js":"48kCP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3H5DF":[function(require,module,exports) {
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
}
exports.default = last;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9AHLb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseRestJs = require("./_baseRest.js");
var _baseRestJsDefault = parcelHelpers.interopDefault(_baseRestJs);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
var _isIterateeCallJs = require("./_isIterateeCall.js");
var _isIterateeCallJsDefault = parcelHelpers.interopDefault(_isIterateeCallJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */ var defaults = (0, _baseRestJsDefault.default)(function(object, sources) {
    object = Object(object);
    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : undefined;
    if (guard && (0, _isIterateeCallJsDefault.default)(sources[0], sources[1], guard)) length = 1;
    while(++index < length){
        var source = sources[index];
        var props = (0, _keysInJsDefault.default)(source);
        var propsIndex = -1;
        var propsLength = props.length;
        while(++propsIndex < propsLength){
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined || (0, _eqJsDefault.default)(value, objectProto[key]) && !hasOwnProperty.call(object, key)) object[key] = source[key];
        }
    }
    return object;
});
exports.default = defaults;

},{"./_baseRest.js":"1fKJX","./eq.js":"7el3s","./_isIterateeCall.js":"1jM1r","./keysIn.js":"jms5f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1jM1r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
var _isArrayLikeJs = require("./isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
var _isIndexJs = require("./_isIndex.js");
var _isIndexJsDefault = parcelHelpers.interopDefault(_isIndexJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function isIterateeCall(value, index, object) {
    if (!(0, _isObjectJsDefault.default)(object)) return false;
    var type = typeof index;
    if (type == "number" ? (0, _isArrayLikeJsDefault.default)(object) && (0, _isIndexJsDefault.default)(index, object.length) : type == "string" && index in object) return (0, _eqJsDefault.default)(object[index], value);
    return false;
}
exports.default = isIterateeCall;

},{"./eq.js":"7el3s","./isArrayLike.js":"8SdiO","./_isIndex.js":"5DS1K","./isObject.js":"dHhyW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"igMRV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basePickJs = require("./_basePick.js");
var _basePickJsDefault = parcelHelpers.interopDefault(_basePickJs);
var _flatRestJs = require("./_flatRest.js");
var _flatRestJsDefault = parcelHelpers.interopDefault(_flatRestJs);
/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */ var pick = (0, _flatRestJsDefault.default)(function(object, paths) {
    return object == null ? {} : (0, _basePickJsDefault.default)(object, paths);
});
exports.default = pick;

},{"./_basePick.js":"hDNJk","./_flatRest.js":"iF6bf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hDNJk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basePickByJs = require("./_basePickBy.js");
var _basePickByJsDefault = parcelHelpers.interopDefault(_basePickByJs);
var _hasInJs = require("./hasIn.js");
var _hasInJsDefault = parcelHelpers.interopDefault(_hasInJs);
/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */ function basePick(object, paths) {
    return (0, _basePickByJsDefault.default)(object, paths, function(value, path) {
        return (0, _hasInJsDefault.default)(object, path);
    });
}
exports.default = basePick;

},{"./_basePickBy.js":"cMyET","./hasIn.js":"jfq4F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMyET":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetJs = require("./_baseGet.js");
var _baseGetJsDefault = parcelHelpers.interopDefault(_baseGetJs);
var _baseSetJs = require("./_baseSet.js");
var _baseSetJsDefault = parcelHelpers.interopDefault(_baseSetJs);
var _castPathJs = require("./_castPath.js");
var _castPathJsDefault = parcelHelpers.interopDefault(_castPathJs);
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */ function basePickBy(object, paths, predicate) {
    var index = -1, length = paths.length, result = {};
    while(++index < length){
        var path = paths[index], value = (0, _baseGetJsDefault.default)(object, path);
        if (predicate(value, path)) (0, _baseSetJsDefault.default)(result, (0, _castPathJsDefault.default)(path, object), value);
    }
    return result;
}
exports.default = basePickBy;

},{"./_baseGet.js":"3IUaj","./_baseSet.js":"dxAxu","./_castPath.js":"g21zK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxAxu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assignValueJs = require("./_assignValue.js");
var _assignValueJsDefault = parcelHelpers.interopDefault(_assignValueJs);
var _castPathJs = require("./_castPath.js");
var _castPathJsDefault = parcelHelpers.interopDefault(_castPathJs);
var _isIndexJs = require("./_isIndex.js");
var _isIndexJsDefault = parcelHelpers.interopDefault(_isIndexJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _toKeyJs = require("./_toKey.js");
var _toKeyJsDefault = parcelHelpers.interopDefault(_toKeyJs);
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */ function baseSet(object, path, value, customizer) {
    if (!(0, _isObjectJsDefault.default)(object)) return object;
    path = (0, _castPathJsDefault.default)(path, object);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object;
    while(nested != null && ++index < length){
        var key = (0, _toKeyJsDefault.default)(path[index]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
        if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;
            if (newValue === undefined) newValue = (0, _isObjectJsDefault.default)(objValue) ? objValue : (0, _isIndexJsDefault.default)(path[index + 1]) ? [] : {};
        }
        (0, _assignValueJsDefault.default)(nested, key, newValue);
        nested = nested[key];
    }
    return object;
}
exports.default = baseSet;

},{"./_assignValue.js":"lDCb2","./_castPath.js":"g21zK","./_isIndex.js":"5DS1K","./isObject.js":"dHhyW","./_toKey.js":"Zo68s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iF6bf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _flattenJs = require("./flatten.js");
var _flattenJsDefault = parcelHelpers.interopDefault(_flattenJs);
var _overRestJs = require("./_overRest.js");
var _overRestJsDefault = parcelHelpers.interopDefault(_overRestJs);
var _setToStringJs = require("./_setToString.js");
var _setToStringJsDefault = parcelHelpers.interopDefault(_setToStringJs);
/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */ function flatRest(func) {
    return (0, _setToStringJsDefault.default)((0, _overRestJsDefault.default)(func, undefined, (0, _flattenJsDefault.default)), func + "");
}
exports.default = flatRest;

},{"./flatten.js":"7cRZC","./_overRest.js":"d1Uaz","./_setToString.js":"3GXSg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7cRZC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseFlattenJs = require("./_baseFlatten.js");
var _baseFlattenJsDefault = parcelHelpers.interopDefault(_baseFlattenJs);
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */ function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? (0, _baseFlattenJsDefault.default)(array, 1) : [];
}
exports.default = flatten;

},{"./_baseFlatten.js":"92emb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwXcM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseMergeJs = require("./_baseMerge.js");
var _baseMergeJsDefault = parcelHelpers.interopDefault(_baseMergeJs);
var _createAssignerJs = require("./_createAssigner.js");
var _createAssignerJsDefault = parcelHelpers.interopDefault(_createAssignerJs);
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */ var merge = (0, _createAssignerJsDefault.default)(function(object, source, srcIndex) {
    (0, _baseMergeJsDefault.default)(object, source, srcIndex);
});
exports.default = merge;

},{"./_baseMerge.js":"gyMbG","./_createAssigner.js":"ED1h3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyMbG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stackJs = require("./_Stack.js");
var _stackJsDefault = parcelHelpers.interopDefault(_stackJs);
var _assignMergeValueJs = require("./_assignMergeValue.js");
var _assignMergeValueJsDefault = parcelHelpers.interopDefault(_assignMergeValueJs);
var _baseForJs = require("./_baseFor.js");
var _baseForJsDefault = parcelHelpers.interopDefault(_baseForJs);
var _baseMergeDeepJs = require("./_baseMergeDeep.js");
var _baseMergeDeepJsDefault = parcelHelpers.interopDefault(_baseMergeDeepJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
var _safeGetJs = require("./_safeGet.js");
var _safeGetJsDefault = parcelHelpers.interopDefault(_safeGetJs);
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */ function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) return;
    (0, _baseForJsDefault.default)(source, function(srcValue, key) {
        stack || (stack = new (0, _stackJsDefault.default));
        if ((0, _isObjectJsDefault.default)(srcValue)) (0, _baseMergeDeepJsDefault.default)(object, source, key, srcIndex, baseMerge, customizer, stack);
        else {
            var newValue = customizer ? customizer((0, _safeGetJsDefault.default)(object, key), srcValue, key + "", object, source, stack) : undefined;
            if (newValue === undefined) newValue = srcValue;
            (0, _assignMergeValueJsDefault.default)(object, key, newValue);
        }
    }, (0, _keysInJsDefault.default));
}
exports.default = baseMerge;

},{"./_Stack.js":"dCpM5","./_assignMergeValue.js":"gQcrW","./_baseFor.js":"1Zprl","./_baseMergeDeep.js":"cVDnk","./isObject.js":"dHhyW","./keysIn.js":"jms5f","./_safeGet.js":"SYKdD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQcrW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseAssignValueJs = require("./_baseAssignValue.js");
var _baseAssignValueJsDefault = parcelHelpers.interopDefault(_baseAssignValueJs);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignMergeValue(object, key, value) {
    if (value !== undefined && !(0, _eqJsDefault.default)(object[key], value) || value === undefined && !(key in object)) (0, _baseAssignValueJsDefault.default)(object, key, value);
}
exports.default = assignMergeValue;

},{"./_baseAssignValue.js":"7kEZ2","./eq.js":"7el3s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVDnk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assignMergeValueJs = require("./_assignMergeValue.js");
var _assignMergeValueJsDefault = parcelHelpers.interopDefault(_assignMergeValueJs);
var _cloneBufferJs = require("./_cloneBuffer.js");
var _cloneBufferJsDefault = parcelHelpers.interopDefault(_cloneBufferJs);
var _cloneTypedArrayJs = require("./_cloneTypedArray.js");
var _cloneTypedArrayJsDefault = parcelHelpers.interopDefault(_cloneTypedArrayJs);
var _copyArrayJs = require("./_copyArray.js");
var _copyArrayJsDefault = parcelHelpers.interopDefault(_copyArrayJs);
var _initCloneObjectJs = require("./_initCloneObject.js");
var _initCloneObjectJsDefault = parcelHelpers.interopDefault(_initCloneObjectJs);
var _isArgumentsJs = require("./isArguments.js");
var _isArgumentsJsDefault = parcelHelpers.interopDefault(_isArgumentsJs);
var _isArrayJs = require("./isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isArrayLikeObjectJs = require("./isArrayLikeObject.js");
var _isArrayLikeObjectJsDefault = parcelHelpers.interopDefault(_isArrayLikeObjectJs);
var _isBufferJs = require("./isBuffer.js");
var _isBufferJsDefault = parcelHelpers.interopDefault(_isBufferJs);
var _isFunctionJs = require("./isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _isPlainObjectJs = require("./isPlainObject.js");
var _isPlainObjectJsDefault = parcelHelpers.interopDefault(_isPlainObjectJs);
var _isTypedArrayJs = require("./isTypedArray.js");
var _isTypedArrayJsDefault = parcelHelpers.interopDefault(_isTypedArrayJs);
var _safeGetJs = require("./_safeGet.js");
var _safeGetJsDefault = parcelHelpers.interopDefault(_safeGetJs);
var _toPlainObjectJs = require("./toPlainObject.js");
var _toPlainObjectJsDefault = parcelHelpers.interopDefault(_toPlainObjectJs);
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */ function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = (0, _safeGetJsDefault.default)(object, key), srcValue = (0, _safeGetJsDefault.default)(source, key), stacked = stack.get(srcValue);
    if (stacked) {
        (0, _assignMergeValueJsDefault.default)(object, key, stacked);
        return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined;
    var isCommon = newValue === undefined;
    if (isCommon) {
        var isArr = (0, _isArrayJsDefault.default)(srcValue), isBuff = !isArr && (0, _isBufferJsDefault.default)(srcValue), isTyped = !isArr && !isBuff && (0, _isTypedArrayJsDefault.default)(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
            if ((0, _isArrayJsDefault.default)(objValue)) newValue = objValue;
            else if ((0, _isArrayLikeObjectJsDefault.default)(objValue)) newValue = (0, _copyArrayJsDefault.default)(objValue);
            else if (isBuff) {
                isCommon = false;
                newValue = (0, _cloneBufferJsDefault.default)(srcValue, true);
            } else if (isTyped) {
                isCommon = false;
                newValue = (0, _cloneTypedArrayJsDefault.default)(srcValue, true);
            } else newValue = [];
        } else if ((0, _isPlainObjectJsDefault.default)(srcValue) || (0, _isArgumentsJsDefault.default)(srcValue)) {
            newValue = objValue;
            if ((0, _isArgumentsJsDefault.default)(objValue)) newValue = (0, _toPlainObjectJsDefault.default)(objValue);
            else if (!(0, _isObjectJsDefault.default)(objValue) || (0, _isFunctionJsDefault.default)(objValue)) newValue = (0, _initCloneObjectJsDefault.default)(srcValue);
        } else isCommon = false;
    }
    if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
    }
    (0, _assignMergeValueJsDefault.default)(object, key, newValue);
}
exports.default = baseMergeDeep;

},{"./_assignMergeValue.js":"gQcrW","./_cloneBuffer.js":"kMJjN","./_cloneTypedArray.js":"f1GTJ","./_copyArray.js":"9islt","./_initCloneObject.js":"aoDIY","./isArguments.js":"9k91Y","./isArray.js":"ETPQ1","./isArrayLikeObject.js":"gArhC","./isBuffer.js":"llpEE","./isFunction.js":"e5kis","./isObject.js":"dHhyW","./isPlainObject.js":"dB5kc","./isTypedArray.js":"2LIMs","./_safeGet.js":"SYKdD","./toPlainObject.js":"VksIK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dB5kc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _getPrototypeJs = require("./_getPrototype.js");
var _getPrototypeJsDefault = parcelHelpers.interopDefault(_getPrototypeJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var objectTag = "[object Object]";
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!(0, _isObjectLikeJsDefault.default)(value) || (0, _baseGetTagJsDefault.default)(value) != objectTag) return false;
    var proto = (0, _getPrototypeJsDefault.default)(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
exports.default = isPlainObject;

},{"./_baseGetTag.js":"gVDfP","./_getPrototype.js":"b49GB","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SYKdD":[function(require,module,exports) {
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") return;
    if (key == "__proto__") return;
    return object[key];
}
exports.default = safeGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"VksIK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _copyObjectJs = require("./_copyObject.js");
var _copyObjectJsDefault = parcelHelpers.interopDefault(_copyObjectJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */ function toPlainObject(value) {
    return (0, _copyObjectJsDefault.default)(value, (0, _keysInJsDefault.default)(value));
}
exports.default = toPlainObject;

},{"./_copyObject.js":"hBRv5","./keysIn.js":"jms5f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ED1h3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseRestJs = require("./_baseRest.js");
var _baseRestJsDefault = parcelHelpers.interopDefault(_baseRestJs);
var _isIterateeCallJs = require("./_isIterateeCall.js");
var _isIterateeCallJsDefault = parcelHelpers.interopDefault(_isIterateeCallJs);
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */ function createAssigner(assigner) {
    return (0, _baseRestJsDefault.default)(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
        if (guard && (0, _isIterateeCallJsDefault.default)(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
        }
        object = Object(object);
        while(++index < length){
            var source = sources[index];
            if (source) assigner(object, source, index, customizer);
        }
        return object;
    });
}
exports.default = createAssigner;

},{"./_baseRest.js":"1fKJX","./_isIterateeCall.js":"1jM1r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IhVy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>acyclic);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _uniqueId = require("lodash-es/uniqueId");
var _uniqueIdDefault = parcelHelpers.interopDefault(_uniqueId);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _greedyFasJs = require("./greedy-fas.js");
var _greedyFasJsDefault = parcelHelpers.interopDefault(_greedyFasJs);
function run(g) {
    const fas = g.graph().acyclicer === "greedy" ? (0, _greedyFasJsDefault.default)(g, weightFn(g)) : dfsFAS(g);
    (0, _forEachDefault.default)(fas, function(e) {
        const label = g.edge(e);
        g.removeEdge(e);
        label.forwardName = e.name;
        label.reversed = true;
        g.setEdge(e.w, e.v, label, (0, _uniqueIdDefault.default)("rev"));
    });
    function weightFn(g) {
        return function(e) {
            return g.edge(e).weight;
        };
    }
}
function dfsFAS(g) {
    const fas = [];
    const stack = {};
    const visited = {};
    function dfs(v) {
        if ((0, _hasDefault.default)(visited, v)) return;
        visited[v] = true;
        stack[v] = true;
        (0, _forEachDefault.default)(g.outEdges(v), function(e) {
            if ((0, _hasDefault.default)(stack, e.w)) fas.push(e);
            else dfs(e.w);
        });
        delete stack[v];
    }
    (0, _forEachDefault.default)(g.nodes(), dfs);
    return fas;
}
function undo(g) {
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const label = g.edge(e);
        if (label.reversed) {
            g.removeEdge(e);
            const forwardName = label.forwardName;
            delete label.reversed;
            delete label.forwardName;
            g.setEdge(e.w, e.v, label, forwardName);
        }
    });
}
var acyclic = {
    run,
    undo
};

},{"lodash-es/has":"9ACAk","lodash-es/uniqueId":"bkAoC","lodash-es/forEach":"jqAb8","./greedy-fas.js":"49oTU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkAoC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/** Used to generate unique IDs. */ var idCounter = 0;
/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */ function uniqueId(prefix) {
    var id = ++idCounter;
    return (0, _toStringJsDefault.default)(prefix) + id;
}
exports.default = uniqueId;

},{"./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49oTU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>greedyFAS);
var _range = require("lodash-es/range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _map = require("lodash-es/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _flatten = require("lodash-es/flatten");
var _flattenDefault = parcelHelpers.interopDefault(_flatten);
var _constant = require("lodash-es/constant");
var _constantDefault = parcelHelpers.interopDefault(_constant);
var _graphlibrary = require("@unovis/graphlibrary");
var _listJs = require("./data/list.js");
var _listJsDefault = parcelHelpers.interopDefault(_listJs);
/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 */ const DEFAULT_WEIGHT_FN = (0, _constantDefault.default)(1);
function greedyFAS(g, weightFn) {
    if (g.nodeCount() <= 1) return [];
    const state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
    const results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx); // Expand multi-edges
    return (0, _flattenDefault.default)((0, _mapDefault.default)(results, function(e) {
        return g.outEdges(e.v, e.w);
    }), true);
}
function doGreedyFAS(g, buckets, zeroIdx) {
    let results = [];
    const sources = buckets[buckets.length - 1];
    const sinks = buckets[0];
    let entry;
    while(g.nodeCount()){
        while(entry = sinks.dequeue())removeNode(g, buckets, zeroIdx, entry);
        while(entry = sources.dequeue())removeNode(g, buckets, zeroIdx, entry);
        if (g.nodeCount()) for(let i = buckets.length - 2; i > 0; --i){
            entry = buckets[i].dequeue();
            if (entry) {
                results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
                break;
            }
        }
    }
    return results;
}
function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
    const results = collectPredecessors ? [] : undefined;
    (0, _forEachDefault.default)(g.inEdges(entry.v), function(edge) {
        const weight = g.edge(edge);
        const uEntry = g.node(edge.v);
        if (collectPredecessors) results.push({
            v: edge.v,
            w: edge.w
        });
        uEntry.out -= weight;
        assignBucket(buckets, zeroIdx, uEntry);
    });
    (0, _forEachDefault.default)(g.outEdges(entry.v), function(edge) {
        const weight = g.edge(edge);
        const w = edge.w;
        const wEntry = g.node(w);
        wEntry["in"] -= weight;
        assignBucket(buckets, zeroIdx, wEntry);
    });
    g.removeNode(entry.v);
    return results;
}
function buildState(g, weightFn) {
    const fasGraph = new (0, _graphlibrary.Graph)();
    let maxIn = 0;
    let maxOut = 0;
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        fasGraph.setNode(v, {
            v: v,
            "in": 0,
            out: 0
        });
    }); // Aggregate weights on nodes, but also sum the weights across multi-edges
    // into a single edge for the fasGraph.
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const prevWeight = fasGraph.edge(e.v, e.w) || 0;
        const weight = weightFn(e);
        const edgeWeight = prevWeight + weight;
        fasGraph.setEdge(e.v, e.w, edgeWeight);
        maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
        maxIn = Math.max(maxIn, fasGraph.node(e.w)["in"] += weight);
    });
    const buckets = (0, _rangeDefault.default)(maxOut + maxIn + 3).map(function() {
        return new (0, _listJsDefault.default)();
    });
    const zeroIdx = maxIn + 1;
    (0, _forEachDefault.default)(fasGraph.nodes(), function(v) {
        assignBucket(buckets, zeroIdx, fasGraph.node(v));
    });
    return {
        graph: fasGraph,
        buckets: buckets,
        zeroIdx: zeroIdx
    };
}
function assignBucket(buckets, zeroIdx, entry) {
    if (!entry.out) buckets[0].enqueue(entry);
    else if (!entry["in"]) buckets[buckets.length - 1].enqueue(entry);
    else buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
}

},{"lodash-es/range":"2xup9","lodash-es/forEach":"jqAb8","lodash-es/map":"2Rw7L","lodash-es/flatten":"7cRZC","lodash-es/constant":"a5s7V","@unovis/graphlibrary":"75K2w","./data/list.js":"kSjrY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2xup9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createRangeJs = require("./_createRange.js");
var _createRangeJsDefault = parcelHelpers.interopDefault(_createRangeJs);
/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */ var range = (0, _createRangeJsDefault.default)();
exports.default = range;

},{"./_createRange.js":"h5MaG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h5MaG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseRangeJs = require("./_baseRange.js");
var _baseRangeJsDefault = parcelHelpers.interopDefault(_baseRangeJs);
var _isIterateeCallJs = require("./_isIterateeCall.js");
var _isIterateeCallJsDefault = parcelHelpers.interopDefault(_isIterateeCallJs);
var _toFiniteJs = require("./toFinite.js");
var _toFiniteJsDefault = parcelHelpers.interopDefault(_toFiniteJs);
/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */ function createRange(fromRight) {
    return function(start, end, step) {
        if (step && typeof step != "number" && (0, _isIterateeCallJsDefault.default)(start, end, step)) end = step = undefined;
        // Ensure the sign of `-0` is preserved.
        start = (0, _toFiniteJsDefault.default)(start);
        if (end === undefined) {
            end = start;
            start = 0;
        } else end = (0, _toFiniteJsDefault.default)(end);
        step = step === undefined ? start < end ? 1 : -1 : (0, _toFiniteJsDefault.default)(step);
        return (0, _baseRangeJsDefault.default)(start, end, step, fromRight);
    };
}
exports.default = createRange;

},{"./_baseRange.js":"1twHx","./_isIterateeCall.js":"1jM1r","./toFinite.js":"FJR8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1twHx":[function(require,module,exports) {
/* Built-in method references for those with the same name as other `lodash` methods. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var nativeCeil = Math.ceil, nativeMax = Math.max;
/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */ function baseRange(start, end, step, fromRight) {
    var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
    while(length--){
        result[fromRight ? length : ++index] = start;
        start += step;
    }
    return result;
}
exports.default = baseRange;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"FJR8i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toNumberJs = require("./toNumber.js");
var _toNumberJsDefault = parcelHelpers.interopDefault(_toNumberJs);
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) return value === 0 ? value : 0;
    value = (0, _toNumberJsDefault.default)(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
exports.default = toFinite;

},{"./toNumber.js":"4CrK2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4CrK2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseTrimJs = require("./_baseTrim.js");
var _baseTrimJsDefault = parcelHelpers.interopDefault(_baseTrimJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _isSymbolJs = require("./isSymbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == "number") return value;
    if ((0, _isSymbolJsDefault.default)(value)) return NAN;
    if ((0, _isObjectJsDefault.default)(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = (0, _isObjectJsDefault.default)(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = (0, _baseTrimJsDefault.default)(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
exports.default = toNumber;

},{"./_baseTrim.js":"4X9xl","./isObject.js":"dHhyW","./isSymbol.js":"gCyRJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4X9xl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _trimmedEndIndexJs = require("./_trimmedEndIndex.js");
var _trimmedEndIndexJsDefault = parcelHelpers.interopDefault(_trimmedEndIndexJs);
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, (0, _trimmedEndIndexJsDefault.default)(string) + 1).replace(reTrimStart, "") : string;
}
exports.default = baseTrim;

},{"./_trimmedEndIndex.js":"lXShQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lXShQ":[function(require,module,exports) {
/** Used to match a single whitespace character. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index)));
    return index;
}
exports.default = trimmedEndIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kSjrY":[function(require,module,exports) {
/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>List);
function List() {
    const sentinel = {};
    sentinel._next = sentinel._prev = sentinel;
    this._sentinel = sentinel;
}
List.prototype.dequeue = function() {
    const sentinel = this._sentinel;
    const entry = sentinel._prev;
    if (entry !== sentinel) {
        unlink(entry);
        return entry;
    }
};
List.prototype.enqueue = function(entry) {
    const sentinel = this._sentinel;
    if (entry._prev && entry._next) unlink(entry);
    entry._next = sentinel._next;
    sentinel._next._prev = entry;
    sentinel._next = entry;
    entry._prev = sentinel;
};
List.prototype.toString = function() {
    const strs = [];
    const sentinel = this._sentinel;
    let curr = sentinel._prev;
    while(curr !== sentinel){
        strs.push(JSON.stringify(curr, filterOutLinks));
        curr = curr._prev;
    }
    return "[" + strs.join(", ") + "]";
};
function unlink(entry) {
    entry._prev._next = entry._next;
    entry._next._prev = entry._prev;
    delete entry._next;
    delete entry._prev;
}
function filterOutLinks(k, v) {
    if (k !== "_next" && k !== "_prev") return v;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5GgCa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>normalize);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _utilJs = require("./util.js");
var _utilJsDefault = parcelHelpers.interopDefault(_utilJs);
/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */ function run(g) {
    g.graph().dummyChains = [];
    (0, _forEachDefault.default)(g.edges(), function(edge) {
        normalizeEdge(g, edge);
    });
}
function normalizeEdge(g, e) {
    let v = e.v;
    let vRank = g.node(v).rank;
    const w = e.w;
    const wRank = g.node(w).rank;
    const name = e.name;
    const edgeLabel = g.edge(e);
    const labelRank = edgeLabel.labelRank;
    if (wRank === vRank + 1) return;
    g.removeEdge(e);
    let dummy;
    let attrs;
    let i;
    for(i = 0, ++vRank; vRank < wRank; ++i, ++vRank){
        edgeLabel.points = [];
        attrs = {
            width: 0,
            height: 0,
            edgeLabel: edgeLabel,
            edgeObj: e,
            rank: vRank
        };
        dummy = (0, _utilJsDefault.default).addDummyNode(g, "edge", attrs, "_d");
        if (vRank === labelRank) {
            attrs.width = edgeLabel.width;
            attrs.height = edgeLabel.height;
            attrs.dummy = "edge-label";
            attrs.labelpos = edgeLabel.labelpos;
        }
        g.setEdge(v, dummy, {
            weight: edgeLabel.weight
        }, name);
        if (i === 0) g.graph().dummyChains.push(dummy);
        v = dummy;
    }
    g.setEdge(v, w, {
        weight: edgeLabel.weight
    }, name);
}
function undo(g) {
    (0, _forEachDefault.default)(g.graph().dummyChains, function(v) {
        let node = g.node(v);
        const origLabel = node.edgeLabel;
        let w = null;
        g.setEdge(node.edgeObj, origLabel);
        while(node.dummy){
            w = g.successors(v)[0];
            g.removeNode(v);
            origLabel.points.push({
                x: node.x,
                y: node.y
            });
            if (node.dummy === "edge-label") {
                origLabel.x = node.x;
                origLabel.y = node.y;
                origLabel.width = node.width;
                origLabel.height = node.height;
            }
            v = w;
            node = g.node(v);
        }
    });
}
var normalize = {
    run,
    undo
};

},{"lodash-es/forEach":"jqAb8","./util.js":"g54fk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g54fk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addBorderNode", ()=>addBorderNode);
parcelHelpers.export(exports, "addDummyNode", ()=>addDummyNode);
parcelHelpers.export(exports, "asNonCompoundGraph", ()=>asNonCompoundGraph);
parcelHelpers.export(exports, "buildLayerMatrix", ()=>buildLayerMatrix);
parcelHelpers.export(exports, "default", ()=>util);
parcelHelpers.export(exports, "intersectRect", ()=>intersectRect);
parcelHelpers.export(exports, "maxRank", ()=>maxRank);
parcelHelpers.export(exports, "normalizeRanks", ()=>normalizeRanks);
parcelHelpers.export(exports, "notime", ()=>notime);
parcelHelpers.export(exports, "partition", ()=>partition);
parcelHelpers.export(exports, "predecessorWeights", ()=>predecessorWeights);
parcelHelpers.export(exports, "removeEmptyRanks", ()=>removeEmptyRanks);
parcelHelpers.export(exports, "simplify", ()=>simplify);
parcelHelpers.export(exports, "successorWeights", ()=>successorWeights);
parcelHelpers.export(exports, "time", ()=>time);
var _now = require("lodash-es/now");
var _nowDefault = parcelHelpers.interopDefault(_now);
var _max = require("lodash-es/max");
var _maxDefault = parcelHelpers.interopDefault(_max);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _min = require("lodash-es/min");
var _minDefault = parcelHelpers.interopDefault(_min);
var _isUndefined = require("lodash-es/isUndefined");
var _isUndefinedDefault = parcelHelpers.interopDefault(_isUndefined);
var _range = require("lodash-es/range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _zipObject = require("lodash-es/zipObject");
var _zipObjectDefault = parcelHelpers.interopDefault(_zipObject);
var _map = require("lodash-es/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _uniqueId = require("lodash-es/uniqueId");
var _uniqueIdDefault = parcelHelpers.interopDefault(_uniqueId);
var _graphlibrary = require("@unovis/graphlibrary");
/*
 * Adds a dummy node to the graph and return v.
 */ function addDummyNode(g, type, attrs, name) {
    let v;
    do v = (0, _uniqueIdDefault.default)(name);
    while (g.hasNode(v));
    attrs.dummy = type;
    g.setNode(v, attrs);
    return v;
}
/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */ function simplify(g) {
    const simplified = new (0, _graphlibrary.Graph)().setGraph(g.graph());
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        simplified.setNode(v, g.node(v));
    });
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const simpleLabel = simplified.edge(e.v, e.w) || {
            weight: 0,
            minlen: 1
        };
        const label = g.edge(e);
        simplified.setEdge(e.v, e.w, {
            weight: simpleLabel.weight + label.weight,
            minlen: Math.max(simpleLabel.minlen, label.minlen)
        });
    });
    return simplified;
}
function asNonCompoundGraph(g) {
    const simplified = new (0, _graphlibrary.Graph)({
        multigraph: g.isMultigraph()
    }).setGraph(g.graph());
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        if (!g.children(v).length) simplified.setNode(v, g.node(v));
    });
    (0, _forEachDefault.default)(g.edges(), function(e) {
        simplified.setEdge(e, g.edge(e));
    });
    return simplified;
}
function successorWeights(g) {
    const weightMap = (0, _mapDefault.default)(g.nodes(), function(v) {
        const sucs = {};
        (0, _forEachDefault.default)(g.outEdges(v), function(e) {
            sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
        });
        return sucs;
    });
    return (0, _zipObjectDefault.default)(g.nodes(), weightMap);
}
function predecessorWeights(g) {
    const weightMap = (0, _mapDefault.default)(g.nodes(), function(v) {
        const preds = {};
        (0, _forEachDefault.default)(g.inEdges(v), function(e) {
            preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
        });
        return preds;
    });
    return (0, _zipObjectDefault.default)(g.nodes(), weightMap);
}
/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */ function intersectRect(rect, point) {
    const x = rect.x;
    const y = rect.y; // Rectangle intersection algorithm from:
    // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
    const dx = point.x - x;
    const dy = point.y - y;
    let w = rect.width / 2;
    let h = rect.height / 2;
    if (!dx && !dy) throw new Error("Not possible to find intersection inside of the rectangle");
    let sx;
    let sy;
    if (Math.abs(dy) * w > Math.abs(dx) * h) {
        // Intersection is top or bottom of rect.
        if (dy < 0) h = -h;
        sx = h * dx / dy;
        sy = h;
    } else {
        // Intersection is left or right of rect.
        if (dx < 0) w = -w;
        sx = w;
        sy = w * dy / dx;
    }
    return {
        x: x + sx,
        y: y + sy
    };
}
/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */ function buildLayerMatrix(g) {
    const layering = (0, _mapDefault.default)((0, _rangeDefault.default)(maxRank(g) + 1), function() {
        return [];
    });
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        const node = g.node(v);
        const rank = node.rank;
        if (!(0, _isUndefinedDefault.default)(rank)) layering[rank][node.order] = v;
    });
    return layering;
}
/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */ function normalizeRanks(g) {
    const min = (0, _minDefault.default)((0, _mapDefault.default)(g.nodes(), function(v) {
        return g.node(v).rank;
    }));
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        const node = g.node(v);
        if ((0, _hasDefault.default)(node, "rank")) node.rank -= min;
    });
}
function removeEmptyRanks(g) {
    // Ranks may not start at 0, so we need to offset them
    const offset = (0, _minDefault.default)((0, _mapDefault.default)(g.nodes(), function(v) {
        return g.node(v).rank;
    }));
    const layers = [];
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        const rank = g.node(v).rank - offset;
        if (!layers[rank]) layers[rank] = [];
        layers[rank].push(v);
    });
    let delta = 0;
    const nodeRankFactor = g.graph().nodeRankFactor;
    (0, _forEachDefault.default)(layers, function(vs, i) {
        if ((0, _isUndefinedDefault.default)(vs) && i % nodeRankFactor !== 0) --delta;
        else if (delta) (0, _forEachDefault.default)(vs, function(v) {
            g.node(v).rank += delta;
        });
    });
}
function addBorderNode(g, prefix, rank, order) {
    const node = {
        width: 0,
        height: 0
    };
    if (arguments.length >= 4) {
        node.rank = rank;
        node.order = order;
    }
    return addDummyNode(g, "border", node, prefix);
}
function maxRank(g) {
    return (0, _maxDefault.default)((0, _mapDefault.default)(g.nodes(), function(v) {
        const rank = g.node(v).rank;
        if (!(0, _isUndefinedDefault.default)(rank)) return rank;
    }));
}
/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */ function partition(collection, fn) {
    const result = {
        lhs: [],
        rhs: []
    };
    (0, _forEachDefault.default)(collection, function(value) {
        if (fn(value)) result.lhs.push(value);
        else result.rhs.push(value);
    });
    return result;
}
/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */ function time(name, fn) {
    const start = (0, _nowDefault.default)();
    try {
        return fn();
    } finally{
        console.log(name + " time: " + ((0, _nowDefault.default)() - start) + "ms");
    }
}
function notime(name, fn) {
    return fn();
}
var util = {
    addDummyNode,
    simplify,
    asNonCompoundGraph,
    successorWeights,
    predecessorWeights,
    intersectRect,
    buildLayerMatrix,
    normalizeRanks,
    removeEmptyRanks,
    addBorderNode,
    maxRank,
    partition,
    time,
    notime
};

},{"lodash-es/now":"exZwe","lodash-es/max":"dyQk1","lodash-es/has":"9ACAk","lodash-es/min":"66uI7","lodash-es/isUndefined":"9662h","lodash-es/range":"2xup9","lodash-es/zipObject":"jxrSN","lodash-es/map":"2Rw7L","lodash-es/forEach":"jqAb8","lodash-es/uniqueId":"bkAoC","@unovis/graphlibrary":"75K2w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exZwe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return (0, _rootJsDefault.default).Date.now();
};
exports.default = now;

},{"./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyQk1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseExtremumJs = require("./_baseExtremum.js");
var _baseExtremumJsDefault = parcelHelpers.interopDefault(_baseExtremumJs);
var _baseGtJs = require("./_baseGt.js");
var _baseGtJsDefault = parcelHelpers.interopDefault(_baseGtJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */ function max(array) {
    return array && array.length ? (0, _baseExtremumJsDefault.default)(array, (0, _identityJsDefault.default), (0, _baseGtJsDefault.default)) : undefined;
}
exports.default = max;

},{"./_baseExtremum.js":"bIDjT","./_baseGt.js":"7JOym","./identity.js":"1Y0KA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIDjT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isSymbolJs = require("./isSymbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */ function baseExtremum(array, iteratee, comparator) {
    var index = -1, length = array.length;
    while(++index < length){
        var value = array[index], current = iteratee(value);
        if (current != null && (computed === undefined ? current === current && !(0, _isSymbolJsDefault.default)(current) : comparator(current, computed))) var computed = current, result = value;
    }
    return result;
}
exports.default = baseExtremum;

},{"./isSymbol.js":"gCyRJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7JOym":[function(require,module,exports) {
/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseGt(value, other) {
    return value > other;
}
exports.default = baseGt;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66uI7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseExtremumJs = require("./_baseExtremum.js");
var _baseExtremumJsDefault = parcelHelpers.interopDefault(_baseExtremumJs);
var _baseLtJs = require("./_baseLt.js");
var _baseLtJsDefault = parcelHelpers.interopDefault(_baseLtJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */ function min(array) {
    return array && array.length ? (0, _baseExtremumJsDefault.default)(array, (0, _identityJsDefault.default), (0, _baseLtJsDefault.default)) : undefined;
}
exports.default = min;

},{"./_baseExtremum.js":"bIDjT","./_baseLt.js":"9p0sD","./identity.js":"1Y0KA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9p0sD":[function(require,module,exports) {
/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseLt(value, other) {
    return value < other;
}
exports.default = baseLt;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jxrSN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assignValueJs = require("./_assignValue.js");
var _assignValueJsDefault = parcelHelpers.interopDefault(_assignValueJs);
var _baseZipObjectJs = require("./_baseZipObject.js");
var _baseZipObjectJsDefault = parcelHelpers.interopDefault(_baseZipObjectJs);
/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */ function zipObject(props, values) {
    return (0, _baseZipObjectJsDefault.default)(props || [], values || [], (0, _assignValueJsDefault.default));
}
exports.default = zipObject;

},{"./_assignValue.js":"lDCb2","./_baseZipObject.js":"l5v89","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l5v89":[function(require,module,exports) {
/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseZipObject(props, values, assignFunc) {
    var index = -1, length = props.length, valsLength = values.length, result = {};
    while(++index < length){
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
    }
    return result;
}
exports.default = baseZipObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqcz7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rank);
var _utilJs = require("./util.js");
var _feasibleTreeJs = require("./feasible-tree.js");
var _feasibleTreeJsDefault = parcelHelpers.interopDefault(_feasibleTreeJs);
var _networkSimplexJs = require("./network-simplex.js");
var _networkSimplexJsDefault = parcelHelpers.interopDefault(_networkSimplexJs);
/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */ function rank(g) {
    switch(g.graph().ranker){
        case "network-simplex":
            networkSimplexRanker(g);
            break;
        case "tight-tree":
            tightTreeRanker(g);
            break;
        case "longest-path":
            longestPathRanker(g);
            break;
        default:
            networkSimplexRanker(g);
    }
} // A fast and simple ranker, but results are far from optimal.
const longestPathRanker = (0, _utilJs.longestPath);
function tightTreeRanker(g) {
    (0, _utilJs.longestPath)(g);
    (0, _feasibleTreeJsDefault.default)(g);
}
function networkSimplexRanker(g) {
    (0, _networkSimplexJsDefault.default)(g);
}

},{"./util.js":"46jx1","./feasible-tree.js":"gCD8p","./network-simplex.js":"2UkrE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46jx1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "longestPath", ()=>longestPath);
parcelHelpers.export(exports, "slack", ()=>slack);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _map = require("lodash-es/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _min = require("lodash-es/min");
var _minDefault = parcelHelpers.interopDefault(_min);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */ function longestPath(g) {
    const visited = {};
    function dfs(v) {
        const label = g.node(v);
        if ((0, _hasDefault.default)(visited, v)) return label.rank;
        visited[v] = true;
        const rank = (0, _minDefault.default)((0, _mapDefault.default)(g.outEdges(v), function(e) {
            return dfs(e.w) - g.edge(e).minlen;
        })) || 0;
        return label.rank = rank;
    }
    (0, _forEachDefault.default)(g.sources(), dfs);
}
/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */ function slack(g, e) {
    return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
}

},{"lodash-es/forEach":"jqAb8","lodash-es/map":"2Rw7L","lodash-es/min":"66uI7","lodash-es/has":"9ACAk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gCD8p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>feasibleTree);
var _minBy = require("lodash-es/minBy");
var _minByDefault = parcelHelpers.interopDefault(_minBy);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _graphlibrary = require("@unovis/graphlibrary");
var _utilJs = require("./util.js");
/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */ function feasibleTree(g) {
    const t = new (0, _graphlibrary.Graph)({
        directed: false
    }); // Choose arbitrary node from which to start our tree
    const start = g.nodes()[0];
    const size = g.nodeCount();
    t.setNode(start, {});
    let edge;
    let delta;
    while(tightTree(t, g) < size){
        edge = findMinSlackEdge(t, g);
        delta = t.hasNode(edge.v) ? (0, _utilJs.slack)(g, edge) : -(0, _utilJs.slack)(g, edge);
        shiftRanks(t, g, delta);
    }
    return t;
}
/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */ function tightTree(t, g) {
    function dfs(v) {
        (0, _forEachDefault.default)(g.nodeEdges(v), function(e) {
            const edgeV = e.v;
            const w = v === edgeV ? e.w : edgeV;
            if (!t.hasNode(w) && !(0, _utilJs.slack)(g, e)) {
                t.setNode(w, {});
                t.setEdge(v, w, {});
                dfs(w);
            }
        });
    }
    (0, _forEachDefault.default)(t.nodes(), dfs);
    return t.nodeCount();
}
/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */ function findMinSlackEdge(t, g) {
    return (0, _minByDefault.default)(g.edges(), function(e) {
        if (t.hasNode(e.v) !== t.hasNode(e.w)) return (0, _utilJs.slack)(g, e);
    });
}
function shiftRanks(t, g, delta) {
    (0, _forEachDefault.default)(t.nodes(), function(v) {
        g.node(v).rank += delta;
    });
}

},{"lodash-es/minBy":"6tRmX","lodash-es/forEach":"jqAb8","@unovis/graphlibrary":"75K2w","./util.js":"46jx1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6tRmX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseExtremumJs = require("./_baseExtremum.js");
var _baseExtremumJsDefault = parcelHelpers.interopDefault(_baseExtremumJs);
var _baseIterateeJs = require("./_baseIteratee.js");
var _baseIterateeJsDefault = parcelHelpers.interopDefault(_baseIterateeJs);
var _baseLtJs = require("./_baseLt.js");
var _baseLtJsDefault = parcelHelpers.interopDefault(_baseLtJs);
/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */ function minBy(array, iteratee) {
    return array && array.length ? (0, _baseExtremumJsDefault.default)(array, (0, _baseIterateeJsDefault.default)(iteratee, 2), (0, _baseLtJsDefault.default)) : undefined;
}
exports.default = minBy;

},{"./_baseExtremum.js":"bIDjT","./_baseIteratee.js":"48kCP","./_baseLt.js":"9p0sD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2UkrE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>networkSimplex);
var _minBy = require("lodash-es/minBy");
var _minByDefault = parcelHelpers.interopDefault(_minBy);
var _filter = require("lodash-es/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
var _find = require("lodash-es/find");
var _findDefault = parcelHelpers.interopDefault(_find);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _graphlibrary = require("@unovis/graphlibrary");
var _feasibleTreeJs = require("./feasible-tree.js");
var _feasibleTreeJsDefault = parcelHelpers.interopDefault(_feasibleTreeJs);
var _utilJs = require("./util.js");
var _utilJs1 = require("../util.js");
const { preorder, postorder } = (0, _graphlibrary.alg); // Expose some internals for testing purposes
networkSimplex.initLowLimValues = initLowLimValues;
networkSimplex.initCutValues = initCutValues;
networkSimplex.calcCutValue = calcCutValue;
networkSimplex.leaveEdge = leaveEdge;
networkSimplex.enterEdge = enterEdge;
networkSimplex.exchangeEdges = exchangeEdges;
/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */ function networkSimplex(g) {
    g = (0, _utilJs1.simplify)(g);
    (0, _utilJs.longestPath)(g);
    const t = (0, _feasibleTreeJsDefault.default)(g);
    initLowLimValues(t);
    initCutValues(t, g);
    let e;
    let f;
    while(e = leaveEdge(t)){
        f = enterEdge(t, g, e);
        exchangeEdges(t, g, e, f);
    }
}
/*
 * Initializes cut values for all edges in the tree.
 */ function initCutValues(t, g) {
    let vs = postorder(t, t.nodes());
    vs = vs.slice(0, vs.length - 1);
    (0, _forEachDefault.default)(vs, function(v) {
        assignCutValue(t, g, v);
    });
}
function assignCutValue(t, g, child) {
    const childLab = t.node(child);
    const parent = childLab.parent;
    t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}
/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */ function calcCutValue(t, g, child) {
    const childLab = t.node(child);
    const parent = childLab.parent; // True if the child is on the tail end of the edge in the directed graph
    let childIsTail = true; // The graph's view of the tree edge we're inspecting
    let graphEdge = g.edge(child, parent); // The accumulated cut value for the edge between this node and its parent
    let cutValue = 0;
    if (!graphEdge) {
        childIsTail = false;
        graphEdge = g.edge(parent, child);
    }
    cutValue = graphEdge.weight;
    (0, _forEachDefault.default)(g.nodeEdges(child), function(e) {
        const isOutEdge = e.v === child;
        const other = isOutEdge ? e.w : e.v;
        if (other !== parent) {
            const pointsToHead = isOutEdge === childIsTail;
            const otherWeight = g.edge(e).weight;
            cutValue += pointsToHead ? otherWeight : -otherWeight;
            if (isTreeEdge(t, child, other)) {
                const otherCutValue = t.edge(child, other).cutvalue;
                cutValue += pointsToHead ? -otherCutValue : otherCutValue;
            }
        }
    });
    return cutValue;
}
function initLowLimValues(tree, root) {
    if (arguments.length < 2) root = tree.nodes()[0];
    dfsAssignLowLim(tree, {}, 1, root);
}
function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
    const low = nextLim;
    const label = tree.node(v);
    visited[v] = true;
    (0, _forEachDefault.default)(tree.neighbors(v), function(w) {
        if (!(0, _hasDefault.default)(visited, w)) nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
    });
    label.low = low;
    label.lim = nextLim++;
    if (parent) label.parent = parent;
    else // TODO should be able to remove this when we incrementally update low lim
    delete label.parent;
    return nextLim;
}
function leaveEdge(tree) {
    return (0, _findDefault.default)(tree.edges(), function(e) {
        return tree.edge(e).cutvalue < 0;
    });
}
function enterEdge(t, g, edge) {
    let v = edge.v;
    let w = edge.w; // For the rest of this function we assume that v is the tail and w is the
    // head, so if we don't have this edge in the graph we should flip it to
    // match the correct orientation.
    if (!g.hasEdge(v, w)) {
        v = edge.w;
        w = edge.v;
    }
    const vLabel = t.node(v);
    const wLabel = t.node(w);
    let tailLabel = vLabel;
    let flip = false; // If the root is in the tail of the edge then we need to flip the logic that
    // checks for the head and tail nodes in the candidates function below.
    if (vLabel.lim > wLabel.lim) {
        tailLabel = wLabel;
        flip = true;
    }
    const candidates = (0, _filterDefault.default)(g.edges(), function(edge) {
        return flip === isDescendant(t, t.node(edge.v), tailLabel) && flip !== isDescendant(t, t.node(edge.w), tailLabel);
    });
    return (0, _minByDefault.default)(candidates, function(edge) {
        return (0, _utilJs.slack)(g, edge);
    });
}
function exchangeEdges(t, g, e, f) {
    const v = e.v;
    const w = e.w;
    t.removeEdge(v, w);
    t.setEdge(f.v, f.w, {});
    initLowLimValues(t);
    initCutValues(t, g);
    updateRanks(t, g);
}
function updateRanks(t, g) {
    const root = (0, _findDefault.default)(t.nodes(), function(v) {
        return !g.node(v).parent;
    });
    let vs = preorder(t, root);
    vs = vs.slice(1);
    (0, _forEachDefault.default)(vs, function(v) {
        const parent = t.node(v).parent;
        let edge = g.edge(v, parent);
        let flipped = false;
        if (!edge) {
            edge = g.edge(parent, v);
            flipped = true;
        }
        g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
    });
}
/*
 * Returns true if the edge is in the tree.
 */ function isTreeEdge(tree, u, v) {
    return tree.hasEdge(u, v);
}
/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */ function isDescendant(tree, vLabel, rootLabel) {
    return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
}

},{"lodash-es/minBy":"6tRmX","lodash-es/filter":"9aJDm","lodash-es/find":"bRGId","lodash-es/has":"9ACAk","lodash-es/forEach":"jqAb8","@unovis/graphlibrary":"75K2w","./feasible-tree.js":"gCD8p","./util.js":"46jx1","../util.js":"g54fk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bRGId":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createFindJs = require("./_createFind.js");
var _createFindJsDefault = parcelHelpers.interopDefault(_createFindJs);
var _findIndexJs = require("./findIndex.js");
var _findIndexJsDefault = parcelHelpers.interopDefault(_findIndexJs);
/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */ var find = (0, _createFindJsDefault.default)((0, _findIndexJsDefault.default));
exports.default = find;

},{"./_createFind.js":"9urKE","./findIndex.js":"8xV73","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9urKE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIterateeJs = require("./_baseIteratee.js");
var _baseIterateeJsDefault = parcelHelpers.interopDefault(_baseIterateeJs);
var _isArrayLikeJs = require("./isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */ function createFind(findIndexFunc) {
    return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!(0, _isArrayLikeJsDefault.default)(collection)) {
            var iteratee = (0, _baseIterateeJsDefault.default)(predicate, 3);
            collection = (0, _keysJsDefault.default)(collection);
            predicate = function(key) {
                return iteratee(iterable[key], key, iterable);
            };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
    };
}
exports.default = createFind;

},{"./_baseIteratee.js":"48kCP","./isArrayLike.js":"8SdiO","./keys.js":"lbEZV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xV73":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseFindIndexJs = require("./_baseFindIndex.js");
var _baseFindIndexJsDefault = parcelHelpers.interopDefault(_baseFindIndexJs);
var _baseIterateeJs = require("./_baseIteratee.js");
var _baseIterateeJsDefault = parcelHelpers.interopDefault(_baseIterateeJs);
var _toIntegerJs = require("./toInteger.js");
var _toIntegerJsDefault = parcelHelpers.interopDefault(_toIntegerJs);
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */ function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) return -1;
    var index = fromIndex == null ? 0 : (0, _toIntegerJsDefault.default)(fromIndex);
    if (index < 0) index = nativeMax(length + index, 0);
    return (0, _baseFindIndexJsDefault.default)(array, (0, _baseIterateeJsDefault.default)(predicate, 3), index);
}
exports.default = findIndex;

},{"./_baseFindIndex.js":"12Lgh","./_baseIteratee.js":"48kCP","./toInteger.js":"1tdUD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1tdUD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFiniteJs = require("./toFinite.js");
var _toFiniteJsDefault = parcelHelpers.interopDefault(_toFiniteJs);
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = (0, _toFiniteJsDefault.default)(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
exports.default = toInteger;

},{"./toFinite.js":"FJR8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2hxMt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parentDummyChains);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
function parentDummyChains(g) {
    const postorderNums = postorder(g);
    (0, _forEachDefault.default)(g.graph().dummyChains, function(v) {
        let node = g.node(v);
        const edgeObj = node.edgeObj;
        const pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
        const path = pathData.path;
        const lca = pathData.lca;
        let pathIdx = 0;
        let pathV = path[pathIdx];
        let ascending = true;
        while(v !== edgeObj.w){
            node = g.node(v);
            if (ascending) {
                while((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node.rank)pathIdx++;
                if (pathV === lca) ascending = false;
            }
            if (!ascending) {
                while(pathIdx < path.length - 1 && g.node(pathV = path[pathIdx + 1]).minRank <= node.rank)pathIdx++;
                pathV = path[pathIdx];
            }
            g.setParent(v, pathV);
            v = g.successors(v)[0];
        }
    });
} // Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function findPath(g, postorderNums, v, w) {
    const vPath = [];
    const wPath = [];
    const low = Math.min(postorderNums[v].low, postorderNums[w].low);
    const lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
    let parent;
    let lca; // Traverse up from v to find the LCA
    parent = v;
    do {
        parent = g.parent(parent);
        vPath.push(parent);
    }while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
    lca = parent; // Traverse from w to LCA
    parent = w;
    while((parent = g.parent(parent)) !== lca)wPath.push(parent);
    return {
        path: vPath.concat(wPath.reverse()),
        lca: lca
    };
}
function postorder(g) {
    const result = {};
    let lim = 0;
    function dfs(v) {
        const low = lim;
        (0, _forEachDefault.default)(g.children(v), dfs);
        result[v] = {
            low: low,
            lim: lim++
        };
    }
    (0, _forEachDefault.default)(g.children(), dfs);
    return result;
}

},{"lodash-es/forEach":"jqAb8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSEOi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>nestingGraph);
var _reduce = require("lodash-es/reduce");
var _reduceDefault = parcelHelpers.interopDefault(_reduce);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _values = require("lodash-es/values");
var _valuesDefault = parcelHelpers.interopDefault(_values);
var _max = require("lodash-es/max");
var _maxDefault = parcelHelpers.interopDefault(_max);
var _utilJs = require("./util.js");
var _utilJsDefault = parcelHelpers.interopDefault(_utilJs);
/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */ function run(g) {
    const root = (0, _utilJsDefault.default).addDummyNode(g, "root", {}, "_root");
    const depths = treeDepths(g);
    const height = (0, _maxDefault.default)((0, _valuesDefault.default)(depths)) - 1;
    const nodeSep = 2 * height + 1;
    g.graph().nestingRoot = root; // Multiply minlen by nodeSep to align nodes on non-border ranks.
    (0, _forEachDefault.default)(g.edges(), function(e) {
        g.edge(e).minlen *= nodeSep;
    }); // Calculate a weight that is sufficient to keep subgraphs vertically compact
    const weight = sumWeights(g) + 1; // Create border nodes and link them up
    (0, _forEachDefault.default)(g.children(), function(child) {
        dfs(g, root, nodeSep, weight, height, depths, child);
    }); // Save the multiplier for node layers for later removal of empty border
    // layers.
    g.graph().nodeRankFactor = nodeSep;
}
function dfs(g, root, nodeSep, weight, height, depths, v) {
    const children = g.children(v);
    if (!children.length) {
        if (v !== root) g.setEdge(root, v, {
            weight: 0,
            minlen: nodeSep
        });
        return;
    }
    const top = (0, _utilJsDefault.default).addBorderNode(g, "_bt");
    const bottom = (0, _utilJsDefault.default).addBorderNode(g, "_bb");
    const label = g.node(v);
    g.setParent(top, v);
    label.borderTop = top;
    g.setParent(bottom, v);
    label.borderBottom = bottom;
    (0, _forEachDefault.default)(children, function(child) {
        dfs(g, root, nodeSep, weight, height, depths, child);
        const childNode = g.node(child);
        const childTop = childNode.borderTop ? childNode.borderTop : child;
        const childBottom = childNode.borderBottom ? childNode.borderBottom : child;
        const thisWeight = childNode.borderTop ? weight : 2 * weight;
        const minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;
        g.setEdge(top, childTop, {
            weight: thisWeight,
            minlen: minlen,
            nestingEdge: true
        });
        g.setEdge(childBottom, bottom, {
            weight: thisWeight,
            minlen: minlen,
            nestingEdge: true
        });
    });
    if (!g.parent(v)) g.setEdge(root, top, {
        weight: 0,
        minlen: height + depths[v]
    });
}
function treeDepths(g) {
    const depths = {};
    function dfs(v, depth) {
        const children = g.children(v);
        if (children && children.length) (0, _forEachDefault.default)(children, function(child) {
            dfs(child, depth + 1);
        });
        depths[v] = depth;
    }
    (0, _forEachDefault.default)(g.children(), function(v) {
        dfs(v, 1);
    });
    return depths;
}
function sumWeights(g) {
    return (0, _reduceDefault.default)(g.edges(), function(acc, e) {
        return acc + g.edge(e).weight;
    }, 0);
}
function cleanup(g) {
    const graphLabel = g.graph();
    g.removeNode(graphLabel.nestingRoot);
    delete graphLabel.nestingRoot;
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const edge = g.edge(e);
        if (edge.nestingEdge) g.removeEdge(e);
    });
}
var nestingGraph = {
    run,
    cleanup
};

},{"lodash-es/reduce":"gLQHe","lodash-es/forEach":"jqAb8","lodash-es/values":"bjkOg","lodash-es/max":"dyQk1","./util.js":"g54fk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d0X72":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addBorderSegments);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _utilJs = require("./util.js");
var _utilJsDefault = parcelHelpers.interopDefault(_utilJs);
function addBorderSegments(g) {
    function dfs(v) {
        const children = g.children(v);
        const node = g.node(v);
        if (children.length) (0, _forEachDefault.default)(children, dfs);
        if ((0, _hasDefault.default)(node, "minRank")) {
            node.borderLeft = [];
            node.borderRight = [];
            for(let rank = node.minRank, maxRank = node.maxRank + 1; rank < maxRank; ++rank){
                addBorderNode(g, "borderLeft", "_bl", v, node, rank);
                addBorderNode(g, "borderRight", "_br", v, node, rank);
            }
        }
    }
    (0, _forEachDefault.default)(g.children(), dfs);
}
function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
    const label = {
        width: 0,
        height: 0,
        rank: rank,
        borderType: prop
    };
    const prev = sgNode[prop][rank - 1];
    const curr = (0, _utilJsDefault.default).addDummyNode(g, "border", label, prefix);
    sgNode[prop][rank] = curr;
    g.setParent(curr, sg);
    if (prev) g.setEdge(prev, curr, {
        weight: 1
    });
}

},{"lodash-es/has":"9ACAk","lodash-es/forEach":"jqAb8","./util.js":"g54fk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7af2B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>coordinateSystem);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
function adjust(g) {
    const rankDir = g.graph().rankdir.toLowerCase();
    if (rankDir === "lr" || rankDir === "rl") swapWidthHeight(g);
}
function undo(g) {
    const rankDir = g.graph().rankdir.toLowerCase();
    if (rankDir === "bt" || rankDir === "rl") reverseY(g);
    if (rankDir === "lr" || rankDir === "rl") {
        swapXY(g);
        swapWidthHeight(g);
    }
}
function swapWidthHeight(g) {
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        swapWidthHeightOne(g.node(v));
    });
    (0, _forEachDefault.default)(g.edges(), function(e) {
        swapWidthHeightOne(g.edge(e));
    });
}
function swapWidthHeightOne(attrs) {
    const w = attrs.width;
    attrs.width = attrs.height;
    attrs.height = w;
}
function reverseY(g) {
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        reverseYOne(g.node(v));
    });
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const edge = g.edge(e);
        (0, _forEachDefault.default)(edge.points, reverseYOne);
        if ((0, _hasDefault.default)(edge, "y")) reverseYOne(edge);
    });
}
function reverseYOne(attrs) {
    attrs.y = -attrs.y;
}
function swapXY(g) {
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        swapXYOne(g.node(v));
    });
    (0, _forEachDefault.default)(g.edges(), function(e) {
        const edge = g.edge(e);
        (0, _forEachDefault.default)(edge.points, swapXYOne);
        if ((0, _hasDefault.default)(edge, "x")) swapXYOne(edge);
    });
}
function swapXYOne(attrs) {
    const x = attrs.x;
    attrs.x = attrs.y;
    attrs.y = x;
}
var coordinateSystem = {
    adjust,
    undo
};

},{"lodash-es/has":"9ACAk","lodash-es/forEach":"jqAb8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCWSx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>order);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _map = require("lodash-es/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _cloneDeep = require("lodash-es/cloneDeep");
var _cloneDeepDefault = parcelHelpers.interopDefault(_cloneDeep);
var _range = require("lodash-es/range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _graphlibrary = require("@unovis/graphlibrary");
var _initOrderJs = require("./init-order.js");
var _initOrderJsDefault = parcelHelpers.interopDefault(_initOrderJs);
var _crossCountJs = require("./cross-count.js");
var _crossCountJsDefault = parcelHelpers.interopDefault(_crossCountJs);
var _sortSubgraphJs = require("./sort-subgraph.js");
var _sortSubgraphJsDefault = parcelHelpers.interopDefault(_sortSubgraphJs);
var _buildLayerGraphJs = require("./build-layer-graph.js");
var _buildLayerGraphJsDefault = parcelHelpers.interopDefault(_buildLayerGraphJs);
var _addSubgraphConstraintsJs = require("./add-subgraph-constraints.js");
var _addSubgraphConstraintsJsDefault = parcelHelpers.interopDefault(_addSubgraphConstraintsJs);
var _utilJs = require("../util.js");
var _utilJsDefault = parcelHelpers.interopDefault(_utilJs);
/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */ function order(g) {
    const maxRank = (0, _utilJsDefault.default).maxRank(g);
    const downLayerGraphs = buildLayerGraphs(g, (0, _rangeDefault.default)(1, maxRank + 1), "inEdges");
    const upLayerGraphs = buildLayerGraphs(g, (0, _rangeDefault.default)(maxRank - 1, -1, -1), "outEdges");
    let layering = (0, _initOrderJsDefault.default)(g);
    assignOrder(g, layering);
    let bestCC = Number.POSITIVE_INFINITY;
    let best;
    for(let i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest){
        sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);
        layering = (0, _utilJsDefault.default).buildLayerMatrix(g);
        const cc = (0, _crossCountJsDefault.default)(g, layering);
        if (cc < bestCC) {
            lastBest = 0;
            best = (0, _cloneDeepDefault.default)(layering);
            bestCC = cc;
        }
    }
    assignOrder(g, best);
}
function buildLayerGraphs(g, ranks, relationship) {
    return (0, _mapDefault.default)(ranks, function(rank) {
        return (0, _buildLayerGraphJsDefault.default)(g, rank, relationship);
    });
}
function sweepLayerGraphs(layerGraphs, biasRight) {
    const cg = new (0, _graphlibrary.Graph)();
    (0, _forEachDefault.default)(layerGraphs, function(lg) {
        const root = lg.graph().root;
        const sorted = (0, _sortSubgraphJsDefault.default)(lg, root, cg, biasRight);
        (0, _forEachDefault.default)(sorted.vs, function(v, i) {
            lg.node(v).order = i;
        });
        (0, _addSubgraphConstraintsJsDefault.default)(lg, cg, sorted.vs);
    });
}
function assignOrder(g, layering) {
    (0, _forEachDefault.default)(layering, function(layer) {
        (0, _forEachDefault.default)(layer, function(v, i) {
            g.node(v).order = i;
        });
    });
}

},{"lodash-es/forEach":"jqAb8","lodash-es/map":"2Rw7L","lodash-es/cloneDeep":"dd5At","lodash-es/range":"2xup9","@unovis/graphlibrary":"75K2w","./init-order.js":"8ssAu","./cross-count.js":"kQAxV","./sort-subgraph.js":"3UW2w","./build-layer-graph.js":"delMu","./add-subgraph-constraints.js":"1Nz7p","../util.js":"g54fk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dd5At":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseCloneJs = require("./_baseClone.js");
var _baseCloneJsDefault = parcelHelpers.interopDefault(_baseCloneJs);
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */ function cloneDeep(value) {
    return (0, _baseCloneJsDefault.default)(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
exports.default = cloneDeep;

},{"./_baseClone.js":"dBps5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ssAu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>initOrder);
var _sortBy = require("lodash-es/sortBy");
var _sortByDefault = parcelHelpers.interopDefault(_sortBy);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _range = require("lodash-es/range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _map = require("lodash-es/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _max = require("lodash-es/max");
var _maxDefault = parcelHelpers.interopDefault(_max);
var _filter = require("lodash-es/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */ function initOrder(g) {
    const visited = {};
    const simpleNodes = (0, _filterDefault.default)(g.nodes(), function(v) {
        return !g.children(v).length;
    });
    const maxRank = (0, _maxDefault.default)((0, _mapDefault.default)(simpleNodes, function(v) {
        return g.node(v).rank;
    }));
    const layers = (0, _mapDefault.default)((0, _rangeDefault.default)(maxRank + 1), function() {
        return [];
    });
    function dfs(v) {
        if ((0, _hasDefault.default)(visited, v)) return;
        visited[v] = true;
        const node = g.node(v);
        layers[node.rank].push(v);
        (0, _forEachDefault.default)(g.successors(v), dfs);
    }
    const orderedVs = (0, _sortByDefault.default)(simpleNodes, function(v) {
        return g.node(v).rank;
    });
    (0, _forEachDefault.default)(orderedVs, dfs);
    return layers;
}

},{"lodash-es/sortBy":"42BZ9","lodash-es/forEach":"jqAb8","lodash-es/has":"9ACAk","lodash-es/range":"2xup9","lodash-es/map":"2Rw7L","lodash-es/max":"dyQk1","lodash-es/filter":"9aJDm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"42BZ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseFlattenJs = require("./_baseFlatten.js");
var _baseFlattenJsDefault = parcelHelpers.interopDefault(_baseFlattenJs);
var _baseOrderByJs = require("./_baseOrderBy.js");
var _baseOrderByJsDefault = parcelHelpers.interopDefault(_baseOrderByJs);
var _baseRestJs = require("./_baseRest.js");
var _baseRestJsDefault = parcelHelpers.interopDefault(_baseRestJs);
var _isIterateeCallJs = require("./_isIterateeCall.js");
var _isIterateeCallJsDefault = parcelHelpers.interopDefault(_isIterateeCallJs);
/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */ var sortBy = (0, _baseRestJsDefault.default)(function(collection, iteratees) {
    if (collection == null) return [];
    var length = iteratees.length;
    if (length > 1 && (0, _isIterateeCallJsDefault.default)(collection, iteratees[0], iteratees[1])) iteratees = [];
    else if (length > 2 && (0, _isIterateeCallJsDefault.default)(iteratees[0], iteratees[1], iteratees[2])) iteratees = [
        iteratees[0]
    ];
    return (0, _baseOrderByJsDefault.default)(collection, (0, _baseFlattenJsDefault.default)(iteratees, 1), []);
});
exports.default = sortBy;

},{"./_baseFlatten.js":"92emb","./_baseOrderBy.js":"eLjrn","./_baseRest.js":"1fKJX","./_isIterateeCall.js":"1jM1r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLjrn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayMapJs = require("./_arrayMap.js");
var _arrayMapJsDefault = parcelHelpers.interopDefault(_arrayMapJs);
var _baseGetJs = require("./_baseGet.js");
var _baseGetJsDefault = parcelHelpers.interopDefault(_baseGetJs);
var _baseIterateeJs = require("./_baseIteratee.js");
var _baseIterateeJsDefault = parcelHelpers.interopDefault(_baseIterateeJs);
var _baseMapJs = require("./_baseMap.js");
var _baseMapJsDefault = parcelHelpers.interopDefault(_baseMapJs);
var _baseSortByJs = require("./_baseSortBy.js");
var _baseSortByJsDefault = parcelHelpers.interopDefault(_baseSortByJs);
var _baseUnaryJs = require("./_baseUnary.js");
var _baseUnaryJsDefault = parcelHelpers.interopDefault(_baseUnaryJs);
var _compareMultipleJs = require("./_compareMultiple.js");
var _compareMultipleJsDefault = parcelHelpers.interopDefault(_compareMultipleJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _isArrayJs = require("./isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */ function baseOrderBy(collection, iteratees, orders) {
    if (iteratees.length) iteratees = (0, _arrayMapJsDefault.default)(iteratees, function(iteratee) {
        if ((0, _isArrayJsDefault.default)(iteratee)) return function(value) {
            return (0, _baseGetJsDefault.default)(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
        return iteratee;
    });
    else iteratees = [
        (0, _identityJsDefault.default)
    ];
    var index = -1;
    iteratees = (0, _arrayMapJsDefault.default)(iteratees, (0, _baseUnaryJsDefault.default)((0, _baseIterateeJsDefault.default)));
    var result = (0, _baseMapJsDefault.default)(collection, function(value, key, collection) {
        var criteria = (0, _arrayMapJsDefault.default)(iteratees, function(iteratee) {
            return iteratee(value);
        });
        return {
            "criteria": criteria,
            "index": ++index,
            "value": value
        };
    });
    return (0, _baseSortByJsDefault.default)(result, function(object, other) {
        return (0, _compareMultipleJsDefault.default)(object, other, orders);
    });
}
exports.default = baseOrderBy;

},{"./_arrayMap.js":"gDCVM","./_baseGet.js":"3IUaj","./_baseIteratee.js":"48kCP","./_baseMap.js":"eHrfS","./_baseSortBy.js":"h9y0s","./_baseUnary.js":"jBUGV","./_compareMultiple.js":"3O3PE","./identity.js":"1Y0KA","./isArray.js":"ETPQ1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h9y0s":[function(require,module,exports) {
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseSortBy(array, comparer) {
    var length = array.length;
    array.sort(comparer);
    while(length--)array[length] = array[length].value;
    return array;
}
exports.default = baseSortBy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3O3PE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _compareAscendingJs = require("./_compareAscending.js");
var _compareAscendingJsDefault = parcelHelpers.interopDefault(_compareAscendingJs);
/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */ function compareMultiple(object, other, orders) {
    var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
    while(++index < length){
        var result = (0, _compareAscendingJsDefault.default)(objCriteria[index], othCriteria[index]);
        if (result) {
            if (index >= ordersLength) return result;
            var order = orders[index];
            return result * (order == "desc" ? -1 : 1);
        }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
}
exports.default = compareMultiple;

},{"./_compareAscending.js":"3NsI7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3NsI7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isSymbolJs = require("./isSymbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */ function compareAscending(value, other) {
    if (value !== other) {
        var valIsDefined = value !== undefined, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = (0, _isSymbolJsDefault.default)(value);
        var othIsDefined = other !== undefined, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = (0, _isSymbolJsDefault.default)(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
    }
    return 0;
}
exports.default = compareAscending;

},{"./isSymbol.js":"gCyRJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kQAxV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>crossCount);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _sortBy = require("lodash-es/sortBy");
var _sortByDefault = parcelHelpers.interopDefault(_sortBy);
var _flatten = require("lodash-es/flatten");
var _flattenDefault = parcelHelpers.interopDefault(_flatten);
var _map = require("lodash-es/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _zipObject = require("lodash-es/zipObject");
var _zipObjectDefault = parcelHelpers.interopDefault(_zipObject);
/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */ function crossCount(g, layering) {
    let cc = 0;
    for(let i = 1; i < layering.length; ++i)cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
    return cc;
}
function twoLayerCrossCount(g, northLayer, southLayer) {
    // Sort all of the edges between the north and south layers by their position
    // in the north layer and then the south. Map these edges to the position of
    // their head in the south layer.
    const southPos = (0, _zipObjectDefault.default)(southLayer, (0, _mapDefault.default)(southLayer, function(v, i) {
        return i;
    }));
    const southEntries = (0, _flattenDefault.default)((0, _mapDefault.default)(northLayer, function(v) {
        const outEdges = g.outEdges(v);
        const pos = (0, _mapDefault.default)(outEdges, (e)=>({
                pos: southPos[e.w],
                weight: g.edge(e).weight
            }));
        const posSorted = (0, _sortByDefault.default)(pos, "pos");
        return posSorted;
    }), true); // Build the accumulator tree
    let firstIndex = 1;
    while(firstIndex < southLayer.length)firstIndex <<= 1;
    const treeSize = 2 * firstIndex - 1;
    firstIndex -= 1;
    const tree = (0, _mapDefault.default)(new Array(treeSize), function() {
        return 0;
    }); // Calculate the weighted crossings
    let cc = 0;
    (0, _forEachDefault.default)(southEntries.forEach(function(entry) {
        let index = entry.pos + firstIndex;
        tree[index] += entry.weight;
        let weightSum = 0;
        while(index > 0){
            if (index % 2) weightSum += tree[index + 1];
            index = index - 1 >> 1;
            tree[index] += entry.weight;
        }
        cc += entry.weight * weightSum;
    }));
    return cc;
}

},{"lodash-es/forEach":"jqAb8","lodash-es/sortBy":"42BZ9","lodash-es/flatten":"7cRZC","lodash-es/map":"2Rw7L","lodash-es/zipObject":"jxrSN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3UW2w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>sortSubgraph);
var _isUndefined = require("lodash-es/isUndefined");
var _isUndefinedDefault = parcelHelpers.interopDefault(_isUndefined);
var _flatten = require("lodash-es/flatten");
var _flattenDefault = parcelHelpers.interopDefault(_flatten);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _filter = require("lodash-es/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
var _barycenterJs = require("./barycenter.js");
var _barycenterJsDefault = parcelHelpers.interopDefault(_barycenterJs);
var _resolveConflictsJs = require("./resolve-conflicts.js");
var _resolveConflictsJsDefault = parcelHelpers.interopDefault(_resolveConflictsJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
function sortSubgraph(g, v, cg, biasRight) {
    let movable = g.children(v);
    const node = g.node(v);
    const bl = node ? node.borderLeft : undefined;
    const br = node ? node.borderRight : undefined;
    const subgraphs = {};
    if (bl) movable = (0, _filterDefault.default)(movable, function(w) {
        return w !== bl && w !== br;
    });
    const barycenters = (0, _barycenterJsDefault.default)(g, movable);
    (0, _forEachDefault.default)(barycenters, function(entry) {
        if (g.children(entry.v).length) {
            const subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
            subgraphs[entry.v] = subgraphResult;
            if ((0, _hasDefault.default)(subgraphResult, "barycenter")) mergeBarycenters(entry, subgraphResult);
        }
    });
    const entries = (0, _resolveConflictsJsDefault.default)(barycenters, cg);
    expandSubgraphs(entries, subgraphs);
    const result = (0, _sortJsDefault.default)(entries, biasRight);
    if (bl) {
        result.vs = (0, _flattenDefault.default)([
            bl,
            result.vs,
            br
        ], true);
        if (g.predecessors(bl).length) {
            const blPred = g.node(g.predecessors(bl)[0]);
            const brPred = g.node(g.predecessors(br)[0]);
            if (!(0, _hasDefault.default)(result, "barycenter")) {
                result.barycenter = 0;
                result.weight = 0;
            }
            result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
            result.weight += 2;
        }
    }
    return result;
}
function expandSubgraphs(entries, subgraphs) {
    (0, _forEachDefault.default)(entries, function(entry) {
        entry.vs = (0, _flattenDefault.default)(entry.vs.map(function(v) {
            if (subgraphs[v]) return subgraphs[v].vs;
            return v;
        }), true);
    });
}
function mergeBarycenters(target, other) {
    if (!(0, _isUndefinedDefault.default)(target.barycenter)) {
        target.barycenter = (target.barycenter * target.weight + other.barycenter * other.weight) / (target.weight + other.weight);
        target.weight += other.weight;
    } else {
        target.barycenter = other.barycenter;
        target.weight = other.weight;
    }
}

},{"lodash-es/isUndefined":"9662h","lodash-es/flatten":"7cRZC","lodash-es/has":"9ACAk","lodash-es/forEach":"jqAb8","lodash-es/filter":"9aJDm","./barycenter.js":"eviqo","./resolve-conflicts.js":"6yA9d","./sort.js":"eFqiF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eviqo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>barycenter);
var _reduce = require("lodash-es/reduce");
var _reduceDefault = parcelHelpers.interopDefault(_reduce);
var _map = require("lodash-es/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
function barycenter(g, movable) {
    return (0, _mapDefault.default)(movable, function(v) {
        const inV = g.inEdges(v);
        if (!inV.length) return {
            v: v
        };
        else {
            const result = (0, _reduceDefault.default)(inV, function(acc, e) {
                const edge = g.edge(e);
                const nodeU = g.node(e.v);
                return {
                    sum: acc.sum + edge.weight * nodeU.order,
                    weight: acc.weight + edge.weight
                };
            }, {
                sum: 0,
                weight: 0
            });
            return {
                v: v,
                barycenter: result.sum / result.weight,
                weight: result.weight
            };
        }
    });
}

},{"lodash-es/reduce":"gLQHe","lodash-es/map":"2Rw7L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6yA9d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>resolveConflicts);
var _pick = require("lodash-es/pick");
var _pickDefault = parcelHelpers.interopDefault(_pick);
var _map = require("lodash-es/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _filter = require("lodash-es/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
var _isUndefined = require("lodash-es/isUndefined");
var _isUndefinedDefault = parcelHelpers.interopDefault(_isUndefined);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */ function resolveConflicts(entries, cg) {
    const mappedEntries = {};
    (0, _forEachDefault.default)(entries, function(entry, i) {
        const tmp = mappedEntries[entry.v] = {
            indegree: 0,
            "in": [],
            out: [],
            vs: [
                entry.v
            ],
            i: i
        };
        if (!(0, _isUndefinedDefault.default)(entry.barycenter)) {
            tmp.barycenter = entry.barycenter;
            tmp.weight = entry.weight;
        }
    });
    (0, _forEachDefault.default)(cg.edges(), function(e) {
        const entryV = mappedEntries[e.v];
        const entryW = mappedEntries[e.w];
        if (!(0, _isUndefinedDefault.default)(entryV) && !(0, _isUndefinedDefault.default)(entryW)) {
            entryW.indegree++;
            entryV.out.push(mappedEntries[e.w]);
        }
    });
    const sourceSet = (0, _filterDefault.default)(mappedEntries, function(entry) {
        return !entry.indegree;
    });
    return doResolveConflicts(sourceSet);
}
function doResolveConflicts(sourceSet) {
    const entries = [];
    function handleIn(vEntry) {
        return function(uEntry) {
            if (uEntry.merged) return;
            if ((0, _isUndefinedDefault.default)(uEntry.barycenter) || (0, _isUndefinedDefault.default)(vEntry.barycenter) || uEntry.barycenter >= vEntry.barycenter) mergeEntries(vEntry, uEntry);
        };
    }
    function handleOut(vEntry) {
        return function(wEntry) {
            wEntry["in"].push(vEntry);
            if (--wEntry.indegree === 0) sourceSet.push(wEntry);
        };
    }
    while(sourceSet.length){
        const entry = sourceSet.pop();
        entries.push(entry);
        (0, _forEachDefault.default)(entry["in"].reverse(), handleIn(entry));
        (0, _forEachDefault.default)(entry.out, handleOut(entry));
    }
    const entriesFiltered = (0, _filterDefault.default)(entries, function(entry) {
        return !entry.merged;
    });
    return (0, _mapDefault.default)(entriesFiltered, function(entry) {
        return (0, _pickDefault.default)(entry, [
            "vs",
            "i",
            "barycenter",
            "weight"
        ]);
    });
}
function mergeEntries(target, source) {
    let sum = 0;
    let weight = 0;
    if (target.weight) {
        sum += target.barycenter * target.weight;
        weight += target.weight;
    }
    if (source.weight) {
        sum += source.barycenter * source.weight;
        weight += source.weight;
    }
    target.vs = source.vs.concat(target.vs);
    target.barycenter = sum / weight;
    target.weight = weight;
    target.i = Math.min(source.i, target.i);
    source.merged = true;
}

},{"lodash-es/pick":"igMRV","lodash-es/map":"2Rw7L","lodash-es/filter":"9aJDm","lodash-es/isUndefined":"9662h","lodash-es/forEach":"jqAb8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eFqiF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>sort);
var _last = require("lodash-es/last");
var _lastDefault = parcelHelpers.interopDefault(_last);
var _flatten = require("lodash-es/flatten");
var _flattenDefault = parcelHelpers.interopDefault(_flatten);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _sortBy = require("lodash-es/sortBy");
var _sortByDefault = parcelHelpers.interopDefault(_sortBy);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _utilJs = require("../util.js");
var _utilJsDefault = parcelHelpers.interopDefault(_utilJs);
function sort(entries, biasRight) {
    const parts = (0, _utilJsDefault.default).partition(entries, function(entry) {
        return (0, _hasDefault.default)(entry, "barycenter");
    });
    const sortable = parts.lhs;
    const unsortable = (0, _sortByDefault.default)(parts.rhs, function(entry) {
        return -entry.i;
    });
    const vs = [];
    let sum = 0;
    let weight = 0;
    let vsIndex = 0;
    sortable.sort(compareWithBias(!!biasRight));
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
    (0, _forEachDefault.default)(sortable, function(entry) {
        vsIndex += entry.vs.length;
        vs.push(entry.vs);
        sum += entry.barycenter * entry.weight;
        weight += entry.weight;
        vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
    });
    const result = {
        vs: (0, _flattenDefault.default)(vs, true)
    };
    if (weight) {
        result.barycenter = sum / weight;
        result.weight = weight;
    }
    return result;
}
function consumeUnsortable(vs, unsortable, index) {
    let last;
    while(unsortable.length && (last = (0, _lastDefault.default)(unsortable)).i <= index){
        unsortable.pop();
        vs.push(last.vs);
        index++;
    }
    return index;
}
function compareWithBias(bias) {
    return function(entryV, entryW) {
        if (entryV.barycenter < entryW.barycenter) return -1;
        else if (entryV.barycenter > entryW.barycenter) return 1;
        return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
    };
}

},{"lodash-es/last":"3H5DF","lodash-es/flatten":"7cRZC","lodash-es/forEach":"jqAb8","lodash-es/sortBy":"42BZ9","lodash-es/has":"9ACAk","../util.js":"g54fk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"delMu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildLayerGraph);
var _uniqueId = require("lodash-es/uniqueId");
var _uniqueIdDefault = parcelHelpers.interopDefault(_uniqueId);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _isUndefined = require("lodash-es/isUndefined");
var _isUndefinedDefault = parcelHelpers.interopDefault(_isUndefined);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _graphlibrary = require("@unovis/graphlibrary");
/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */ function buildLayerGraph(g, rank, relationship) {
    const root = createRootNode(g);
    const result = new (0, _graphlibrary.Graph)({
        compound: true
    }).setGraph({
        root: root
    }).setDefaultNodeLabel(function(v) {
        return g.node(v);
    });
    (0, _forEachDefault.default)(g.nodes(), function(v) {
        const node = g.node(v);
        const parent = g.parent(v);
        if (node.rank === rank || node.minRank <= rank && rank <= node.maxRank) {
            result.setNode(v);
            result.setParent(v, parent || root); // This assumes we have only short edges!
            (0, _forEachDefault.default)(g[relationship](v), function(e) {
                const u = e.v === v ? e.w : e.v;
                const edge = result.edge(u, v);
                const weight = !(0, _isUndefinedDefault.default)(edge) ? edge.weight : 0;
                result.setEdge(u, v, {
                    weight: g.edge(e).weight + weight
                });
            });
            if ((0, _hasDefault.default)(node, "minRank")) result.setNode(v, {
                borderLeft: node.borderLeft[rank],
                borderRight: node.borderRight[rank]
            });
        }
    });
    return result;
}
function createRootNode(g) {
    let v;
    while(g.hasNode(v = (0, _uniqueIdDefault.default)("_root")));
    return v;
}

},{"lodash-es/uniqueId":"bkAoC","lodash-es/has":"9ACAk","lodash-es/isUndefined":"9662h","lodash-es/forEach":"jqAb8","@unovis/graphlibrary":"75K2w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Nz7p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addSubgraphConstraints);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
function addSubgraphConstraints(g, cg, vs) {
    const prev = {};
    let rootPrev;
    (0, _forEachDefault.default)(vs, function(v) {
        let child = g.parent(v);
        let parent;
        let prevChild;
        while(child){
            parent = g.parent(child);
            if (parent) {
                prevChild = prev[parent];
                prev[parent] = child;
            } else {
                prevChild = rootPrev;
                rootPrev = child;
            }
            if (prevChild && prevChild !== child) {
                cg.setEdge(prevChild, child);
                return;
            }
            child = parent;
        }
    });
/*
  function dfs(v) {
    const children = v ? g.children(v) : g.children();
    if (children.length) {
      const min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.forEach(children, function(child) {
        const childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */ }

},{"lodash-es/forEach":"jqAb8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7d9Q7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>position);
var _map = require("lodash-es/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _max = require("lodash-es/max");
var _maxDefault = parcelHelpers.interopDefault(_max);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _utilJs = require("../util.js");
var _utilJsDefault = parcelHelpers.interopDefault(_utilJs);
var _bkJs = require("./bk.js");
function position(g) {
    g = (0, _utilJsDefault.default).asNonCompoundGraph(g);
    positionY(g);
    (0, _forEachDefault.default)((0, _bkJs.positionX)(g), function(x, v) {
        g.node(v).x = x;
    });
}
function positionY(g) {
    const layering = (0, _utilJsDefault.default).buildLayerMatrix(g);
    const rankSep = g.graph().ranksep;
    let prevY = 0;
    (0, _forEachDefault.default)(layering, function(layer) {
        const maxHeight = (0, _maxDefault.default)((0, _mapDefault.default)(layer, function(v) {
            return g.node(v).height;
        }));
        (0, _forEachDefault.default)(layer, function(v) {
            g.node(v).y = prevY + maxHeight / 2;
        });
        prevY += maxHeight + rankSep;
    });
}

},{"lodash-es/map":"2Rw7L","lodash-es/max":"dyQk1","lodash-es/forEach":"jqAb8","../util.js":"g54fk","./bk.js":"kMniB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kMniB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "positionX", ()=>positionX);
var _bind = require("lodash-es/bind");
var _bindDefault = parcelHelpers.interopDefault(_bind);
var _merge = require("lodash-es/merge");
var _mergeDefault = parcelHelpers.interopDefault(_merge);
var _map = require("lodash-es/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _mapValues = require("lodash-es/mapValues");
var _mapValuesDefault = parcelHelpers.interopDefault(_mapValues);
var _max = require("lodash-es/max");
var _maxDefault = parcelHelpers.interopDefault(_max);
var _min = require("lodash-es/min");
var _minDefault = parcelHelpers.interopDefault(_min);
var _maxBy = require("lodash-es/maxBy");
var _maxByDefault = parcelHelpers.interopDefault(_maxBy);
var _toPairs = require("lodash-es/toPairs");
var _toPairsDefault = parcelHelpers.interopDefault(_toPairs);
var _values = require("lodash-es/values");
var _valuesDefault = parcelHelpers.interopDefault(_values);
var _minBy = require("lodash-es/minBy");
var _minByDefault = parcelHelpers.interopDefault(_minBy);
var _sortBy = require("lodash-es/sortBy");
var _sortByDefault = parcelHelpers.interopDefault(_sortBy);
var _has = require("lodash-es/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _find = require("lodash-es/find");
var _findDefault = parcelHelpers.interopDefault(_find);
var _range = require("lodash-es/range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _reduce = require("lodash-es/reduce");
var _reduceDefault = parcelHelpers.interopDefault(_reduce);
var _forEach = require("lodash-es/forEach");
var _forEachDefault = parcelHelpers.interopDefault(_forEach);
var _last = require("lodash-es/last");
var _lastDefault = parcelHelpers.interopDefault(_last);
var _graphlibrary = require("@unovis/graphlibrary");
var _utilJs = require("../util.js");
var _utilJsDefault = parcelHelpers.interopDefault(_utilJs);
/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */ /*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */ function findType1Conflicts(g, layering) {
    const conflicts = {};
    function visitLayer(prevLayer, layer) {
        // last visited node in the previous layer that is incident on an inner
        // segment.
        let k0 = 0; // Tracks the last node in this layer scanned for crossings with a type-1
        // segment.
        let scanPos = 0;
        const prevLayerLength = prevLayer.length;
        const lastNode = (0, _lastDefault.default)(layer);
        (0, _forEachDefault.default)(layer, function(v, i) {
            const w = findOtherInnerSegmentNode(g, v);
            const k1 = w ? g.node(w).order : prevLayerLength;
            if (w || v === lastNode) {
                (0, _forEachDefault.default)(layer.slice(scanPos, i + 1), function(scanNode) {
                    (0, _forEachDefault.default)(g.predecessors(scanNode), function(u) {
                        const uLabel = g.node(u);
                        const uPos = uLabel.order;
                        if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) addConflict(conflicts, u, scanNode);
                    });
                });
                scanPos = i + 1;
                k0 = k1;
            }
        });
        return layer;
    }
    (0, _reduceDefault.default)(layering, visitLayer);
    return conflicts;
}
function findType2Conflicts(g, layering) {
    const conflicts = {};
    function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
        let v;
        (0, _forEachDefault.default)((0, _rangeDefault.default)(southPos, southEnd), function(i) {
            v = south[i];
            if (g.node(v).dummy) (0, _forEachDefault.default)(g.predecessors(v), function(u) {
                const uNode = g.node(u);
                if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) addConflict(conflicts, u, v);
            });
        });
    }
    function visitLayer(north, south) {
        let prevNorthPos = -1;
        let nextNorthPos;
        let southPos = 0;
        (0, _forEachDefault.default)(south, function(v, southLookahead) {
            if (g.node(v).dummy === "border") {
                const predecessors = g.predecessors(v);
                if (predecessors.length) {
                    nextNorthPos = g.node(predecessors[0]).order;
                    scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
                    southPos = southLookahead;
                    prevNorthPos = nextNorthPos;
                }
            }
            scan(south, southPos, south.length, nextNorthPos, north.length);
        });
        return south;
    }
    (0, _reduceDefault.default)(layering, visitLayer);
    return conflicts;
}
function findOtherInnerSegmentNode(g, v) {
    if (g.node(v).dummy) return (0, _findDefault.default)(g.predecessors(v), function(u) {
        return g.node(u).dummy;
    });
}
function addConflict(conflicts, v, w) {
    if (v > w) {
        const tmp = v;
        v = w;
        w = tmp;
    }
    let conflictsV = conflicts[v];
    if (!conflictsV) conflicts[v] = conflictsV = {};
    conflictsV[w] = true;
}
function hasConflict(conflicts, v, w) {
    if (v > w) {
        const tmp = v;
        v = w;
        w = tmp;
    }
    return (0, _hasDefault.default)(conflicts[v], w);
}
/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */ function verticalAlignment(g, layering, conflicts, neighborFn) {
    const root = {};
    const align = {};
    const pos = {}; // We cache the position here based on the layering because the graph and
    // layering may be out of sync. The layering matrix is manipulated to
    // generate different extreme alignments.
    (0, _forEachDefault.default)(layering, function(layer) {
        (0, _forEachDefault.default)(layer, function(v, order) {
            root[v] = v;
            align[v] = v;
            pos[v] = order;
        });
    });
    (0, _forEachDefault.default)(layering, function(layer) {
        let prevIdx = -1;
        (0, _forEachDefault.default)(layer, function(v) {
            let ws = neighborFn(v);
            if (ws.length) {
                ws = (0, _sortByDefault.default)(ws, function(w) {
                    return pos[w];
                });
                const mp = (ws.length - 1) / 2;
                for(let i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i){
                    const w = ws[i];
                    if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
                        align[w] = v;
                        align[v] = root[v] = root[w];
                        prevIdx = pos[w];
                    }
                }
            }
        });
    });
    return {
        root: root,
        align: align
    };
}
function horizontalCompaction(g, layering, root, align, reverseSep) {
    // This portion of the algorithm differs from BK due to a number of problems.
    // Instead of their algorithm we construct a new block graph and do two
    // sweeps. The first sweep places blocks with the smallest possible
    // coordinates. The second sweep removes unused space by moving blocks to the
    // greatest coordinates without violating separation.
    const xs = {};
    const blockG = buildBlockGraph(g, layering, root, reverseSep); // First pass, assign smallest coordinates via DFS
    const visited = {};
    function pass1(v) {
        if (!(0, _hasDefault.default)(visited, v)) {
            visited[v] = true;
            xs[v] = (0, _reduceDefault.default)(blockG.inEdges(v), function(max, e) {
                pass1(e.v);
                return Math.max(max, xs[e.v] + blockG.edge(e));
            }, 0);
        }
    }
    (0, _forEachDefault.default)(blockG.nodes(), pass1);
    const borderType = reverseSep ? "borderLeft" : "borderRight";
    function pass2(v) {
        if (visited[v] !== 2) {
            visited[v]++;
            const node = g.node(v);
            const min = (0, _reduceDefault.default)(blockG.outEdges(v), function(min, e) {
                pass2(e.w);
                return Math.min(min, xs[e.w] - blockG.edge(e));
            }, Number.POSITIVE_INFINITY);
            if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) xs[v] = Math.max(xs[v], min);
        }
    }
    (0, _forEachDefault.default)(blockG.nodes(), pass2); // Assign x coordinates to all nodes
    (0, _forEachDefault.default)(align, function(v) {
        xs[v] = xs[root[v]];
    });
    return xs;
}
function buildBlockGraph(g, layering, root, reverseSep) {
    const blockGraph = new (0, _graphlibrary.Graph)();
    const graphLabel = g.graph();
    const sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);
    (0, _forEachDefault.default)(layering, function(layer) {
        let u;
        (0, _forEachDefault.default)(layer, function(v) {
            const vRoot = root[v];
            blockGraph.setNode(vRoot);
            if (u) {
                const uRoot = root[u];
                const prevMax = blockGraph.edge(uRoot, vRoot);
                blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
            }
            u = v;
        });
    });
    return blockGraph;
}
/*
 * Returns the alignment that has the smallest width of the given alignments.
 */ function findSmallestWidthAlignment(g, xss) {
    return (0, _minByDefault.default)((0, _valuesDefault.default)(xss), function(xs) {
        const min = ((0, _minByDefault.default)((0, _toPairsDefault.default)(xs), (pair)=>pair[1] - width(g, pair[0]) / 2) || [
            "k",
            0
        ])[1];
        const max = ((0, _maxByDefault.default)((0, _toPairsDefault.default)(xs), (pair)=>pair[1] + width(g, pair[0]) / 2) || [
            "k",
            0
        ])[1];
        return max - min;
    });
}
/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */ function alignCoordinates(xss, alignTo) {
    const alignToVals = (0, _valuesDefault.default)(alignTo);
    const alignToMin = (0, _minDefault.default)(alignToVals);
    const alignToMax = (0, _maxDefault.default)(alignToVals);
    (0, _forEachDefault.default)([
        "u",
        "d"
    ], function(vert) {
        (0, _forEachDefault.default)([
            "l",
            "r"
        ], function(horiz) {
            const alignment = vert + horiz;
            const xs = xss[alignment];
            if (xs === alignTo) return;
            const xsVals = (0, _valuesDefault.default)(xs);
            const delta = horiz === "l" ? alignToMin - (0, _minDefault.default)(xsVals) : alignToMax - (0, _maxDefault.default)(xsVals);
            if (delta) xss[alignment] = (0, _mapValuesDefault.default)(xs, function(x) {
                return x + delta;
            });
        });
    });
}
function balance(xss, align) {
    return (0, _mapValuesDefault.default)(xss.ul, function(ignore, v) {
        if (align) return xss[align.toLowerCase()][v];
        else {
            const xs = (0, _sortByDefault.default)((0, _mapDefault.default)(xss, v));
            return (xs[1] + xs[2]) / 2;
        }
    });
}
function positionX(g) {
    const layering = (0, _utilJsDefault.default).buildLayerMatrix(g);
    const conflicts = (0, _mergeDefault.default)(findType1Conflicts(g, layering), findType2Conflicts(g, layering));
    const xss = {};
    let adjustedLayering;
    (0, _forEachDefault.default)([
        "u",
        "d"
    ], function(vert) {
        adjustedLayering = vert === "u" ? layering : (0, _valuesDefault.default)(layering).reverse();
        (0, _forEachDefault.default)([
            "l",
            "r"
        ], function(horiz) {
            if (horiz === "r") adjustedLayering = (0, _mapDefault.default)(adjustedLayering, function(inner) {
                return (0, _valuesDefault.default)(inner).reverse();
            });
            const neighborFn = (0, _bindDefault.default)(vert === "u" ? g.predecessors : g.successors, g);
            const align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
            let xs = horizontalCompaction(g, adjustedLayering, align.root, align.align, horiz === "r");
            if (horiz === "r") xs = (0, _mapValuesDefault.default)(xs, function(x) {
                return -x;
            });
            xss[vert + horiz] = xs;
        });
    });
    const smallestWidth = findSmallestWidthAlignment(g, xss);
    alignCoordinates(xss, smallestWidth);
    return balance(xss, g.graph().align);
}
function sep(nodeSep, edgeSep, reverseSep) {
    return function(g, v, w) {
        const vLabel = g.node(v);
        const wLabel = g.node(w);
        let sum = 0;
        let delta;
        sum += vLabel.width / 2;
        if ((0, _hasDefault.default)(vLabel, "labelpos")) switch(vLabel.labelpos.toLowerCase()){
            case "l":
                delta = -vLabel.width / 2;
                break;
            case "r":
                delta = vLabel.width / 2;
                break;
        }
        if (delta) sum += reverseSep ? delta : -delta;
        delta = 0;
        sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
        sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;
        sum += wLabel.width / 2;
        if ((0, _hasDefault.default)(wLabel, "labelpos")) switch(wLabel.labelpos.toLowerCase()){
            case "l":
                delta = wLabel.width / 2;
                break;
            case "r":
                delta = -wLabel.width / 2;
                break;
        }
        if (delta) sum += reverseSep ? delta : -delta;
        delta = 0;
        return sum;
    };
}
function width(g, v) {
    return g.node(v).width;
}

},{"lodash-es/bind":"69lCx","lodash-es/merge":"hwXcM","lodash-es/map":"2Rw7L","lodash-es/mapValues":"86blH","lodash-es/max":"dyQk1","lodash-es/min":"66uI7","lodash-es/maxBy":"ezjyD","lodash-es/toPairs":"cWQHA","lodash-es/values":"bjkOg","lodash-es/minBy":"6tRmX","lodash-es/sortBy":"42BZ9","lodash-es/has":"9ACAk","lodash-es/find":"bRGId","lodash-es/range":"2xup9","lodash-es/reduce":"gLQHe","lodash-es/forEach":"jqAb8","lodash-es/last":"3H5DF","@unovis/graphlibrary":"75K2w","../util.js":"g54fk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69lCx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseRestJs = require("./_baseRest.js");
var _baseRestJsDefault = parcelHelpers.interopDefault(_baseRestJs);
var _createWrapJs = require("./_createWrap.js");
var _createWrapJsDefault = parcelHelpers.interopDefault(_createWrapJs);
var _getHolderJs = require("./_getHolder.js");
var _getHolderJsDefault = parcelHelpers.interopDefault(_getHolderJs);
var _replaceHoldersJs = require("./_replaceHolders.js");
var _replaceHoldersJsDefault = parcelHelpers.interopDefault(_replaceHoldersJs);
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_PARTIAL_FLAG = 32;
/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */ var bind = (0, _baseRestJsDefault.default)(function(func, thisArg, partials) {
    var bitmask = WRAP_BIND_FLAG;
    if (partials.length) {
        var holders = (0, _replaceHoldersJsDefault.default)(partials, (0, _getHolderJsDefault.default)(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
    }
    return (0, _createWrapJsDefault.default)(func, bitmask, thisArg, partials, holders);
});
// Assign default placeholders.
bind.placeholder = {};
exports.default = bind;

},{"./_baseRest.js":"1fKJX","./_createWrap.js":"b5c9f","./_getHolder.js":"kVLuv","./_replaceHolders.js":"l4EhL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5c9f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseSetDataJs = require("./_baseSetData.js");
var _baseSetDataJsDefault = parcelHelpers.interopDefault(_baseSetDataJs);
var _createBindJs = require("./_createBind.js");
var _createBindJsDefault = parcelHelpers.interopDefault(_createBindJs);
var _createCurryJs = require("./_createCurry.js");
var _createCurryJsDefault = parcelHelpers.interopDefault(_createCurryJs);
var _createHybridJs = require("./_createHybrid.js");
var _createHybridJsDefault = parcelHelpers.interopDefault(_createHybridJs);
var _createPartialJs = require("./_createPartial.js");
var _createPartialJsDefault = parcelHelpers.interopDefault(_createPartialJs);
var _getDataJs = require("./_getData.js");
var _getDataJsDefault = parcelHelpers.interopDefault(_getDataJs);
var _mergeDataJs = require("./_mergeData.js");
var _mergeDataJsDefault = parcelHelpers.interopDefault(_mergeDataJs);
var _setDataJs = require("./_setData.js");
var _setDataJsDefault = parcelHelpers.interopDefault(_setDataJs);
var _setWrapToStringJs = require("./_setWrapToString.js");
var _setWrapToStringJsDefault = parcelHelpers.interopDefault(_setWrapToStringJs);
var _toIntegerJs = require("./toInteger.js");
var _toIntegerJsDefault = parcelHelpers.interopDefault(_toIntegerJs);
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */ function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
    var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
    if (!isBindKey && typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var length = partials ? partials.length : 0;
    if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
    }
    ary = ary === undefined ? ary : nativeMax((0, _toIntegerJsDefault.default)(ary), 0);
    arity = arity === undefined ? arity : (0, _toIntegerJsDefault.default)(arity);
    length -= holders ? holders.length : 0;
    if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials, holdersRight = holders;
        partials = holders = undefined;
    }
    var data = isBindKey ? undefined : (0, _getDataJsDefault.default)(func);
    var newData = [
        func,
        bitmask,
        thisArg,
        partials,
        holders,
        partialsRight,
        holdersRight,
        argPos,
        ary,
        arity
    ];
    if (data) (0, _mergeDataJsDefault.default)(newData, data);
    func = newData[0];
    bitmask = newData[1];
    thisArg = newData[2];
    partials = newData[3];
    holders = newData[4];
    arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
    if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
    if (!bitmask || bitmask == WRAP_BIND_FLAG) var result = (0, _createBindJsDefault.default)(func, bitmask, thisArg);
    else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) result = (0, _createCurryJsDefault.default)(func, bitmask, arity);
    else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) result = (0, _createPartialJsDefault.default)(func, bitmask, thisArg, partials);
    else result = (0, _createHybridJsDefault.default).apply(undefined, newData);
    var setter = data ? (0, _baseSetDataJsDefault.default) : (0, _setDataJsDefault.default);
    return (0, _setWrapToStringJsDefault.default)(setter(result, newData), func, bitmask);
}
exports.default = createWrap;

},{"./_baseSetData.js":"eUxze","./_createBind.js":"dONGr","./_createCurry.js":"bG1P6","./_createHybrid.js":"8UuZL","./_createPartial.js":"fCDIz","./_getData.js":"7fRqS","./_mergeData.js":"LtGBF","./_setData.js":"dfOmB","./_setWrapToString.js":"dqUq8","./toInteger.js":"1tdUD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUxze":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _metaMapJs = require("./_metaMap.js");
var _metaMapJsDefault = parcelHelpers.interopDefault(_metaMapJs);
/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */ var baseSetData = !(0, _metaMapJsDefault.default) ? (0, _identityJsDefault.default) : function(func, data) {
    (0, _metaMapJsDefault.default).set(func, data);
    return func;
};
exports.default = baseSetData;

},{"./identity.js":"1Y0KA","./_metaMap.js":"2XktW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2XktW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weakMapJs = require("./_WeakMap.js");
var _weakMapJsDefault = parcelHelpers.interopDefault(_weakMapJs);
/** Used to store function metadata. */ var metaMap = (0, _weakMapJsDefault.default) && new (0, _weakMapJsDefault.default);
exports.default = metaMap;

},{"./_WeakMap.js":"52eE0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dONGr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createCtorJs = require("./_createCtor.js");
var _createCtorJsDefault = parcelHelpers.interopDefault(_createCtorJs);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1;
/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */ function createBind(func, bitmask, thisArg) {
    var isBind = bitmask & WRAP_BIND_FLAG, Ctor = (0, _createCtorJsDefault.default)(func);
    function wrapper() {
        var fn = this && this !== (0, _rootJsDefault.default) && this instanceof wrapper ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
    }
    return wrapper;
}
exports.default = createBind;

},{"./_createCtor.js":"jf7SM","./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jf7SM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseCreateJs = require("./_baseCreate.js");
var _baseCreateJsDefault = parcelHelpers.interopDefault(_baseCreateJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */ function createCtor(Ctor) {
    return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch(args.length){
            case 0:
                return new Ctor;
            case 1:
                return new Ctor(args[0]);
            case 2:
                return new Ctor(args[0], args[1]);
            case 3:
                return new Ctor(args[0], args[1], args[2]);
            case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = (0, _baseCreateJsDefault.default)(Ctor.prototype), result = Ctor.apply(thisBinding, args);
        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return (0, _isObjectJsDefault.default)(result) ? result : thisBinding;
    };
}
exports.default = createCtor;

},{"./_baseCreate.js":"aq4aU","./isObject.js":"dHhyW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bG1P6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _applyJs = require("./_apply.js");
var _applyJsDefault = parcelHelpers.interopDefault(_applyJs);
var _createCtorJs = require("./_createCtor.js");
var _createCtorJsDefault = parcelHelpers.interopDefault(_createCtorJs);
var _createHybridJs = require("./_createHybrid.js");
var _createHybridJsDefault = parcelHelpers.interopDefault(_createHybridJs);
var _createRecurryJs = require("./_createRecurry.js");
var _createRecurryJsDefault = parcelHelpers.interopDefault(_createRecurryJs);
var _getHolderJs = require("./_getHolder.js");
var _getHolderJsDefault = parcelHelpers.interopDefault(_getHolderJs);
var _replaceHoldersJs = require("./_replaceHolders.js");
var _replaceHoldersJsDefault = parcelHelpers.interopDefault(_replaceHoldersJs);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */ function createCurry(func, bitmask, arity) {
    var Ctor = (0, _createCtorJsDefault.default)(func);
    function wrapper() {
        var length = arguments.length, args = Array(length), index = length, placeholder = (0, _getHolderJsDefault.default)(wrapper);
        while(index--)args[index] = arguments[index];
        var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : (0, _replaceHoldersJsDefault.default)(args, placeholder);
        length -= holders.length;
        if (length < arity) return (0, _createRecurryJsDefault.default)(func, bitmask, (0, _createHybridJsDefault.default), wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
        var fn = this && this !== (0, _rootJsDefault.default) && this instanceof wrapper ? Ctor : func;
        return (0, _applyJsDefault.default)(fn, this, args);
    }
    return wrapper;
}
exports.default = createCurry;

},{"./_apply.js":"kqJ3H","./_createCtor.js":"jf7SM","./_createHybrid.js":"8UuZL","./_createRecurry.js":"cmK2s","./_getHolder.js":"kVLuv","./_replaceHolders.js":"l4EhL","./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8UuZL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _composeArgsJs = require("./_composeArgs.js");
var _composeArgsJsDefault = parcelHelpers.interopDefault(_composeArgsJs);
var _composeArgsRightJs = require("./_composeArgsRight.js");
var _composeArgsRightJsDefault = parcelHelpers.interopDefault(_composeArgsRightJs);
var _countHoldersJs = require("./_countHolders.js");
var _countHoldersJsDefault = parcelHelpers.interopDefault(_countHoldersJs);
var _createCtorJs = require("./_createCtor.js");
var _createCtorJsDefault = parcelHelpers.interopDefault(_createCtorJs);
var _createRecurryJs = require("./_createRecurry.js");
var _createRecurryJsDefault = parcelHelpers.interopDefault(_createRecurryJs);
var _getHolderJs = require("./_getHolder.js");
var _getHolderJsDefault = parcelHelpers.interopDefault(_getHolderJs);
var _reorderJs = require("./_reorder.js");
var _reorderJsDefault = parcelHelpers.interopDefault(_reorderJs);
var _replaceHoldersJs = require("./_replaceHolders.js");
var _replaceHoldersJsDefault = parcelHelpers.interopDefault(_replaceHoldersJs);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_ARY_FLAG = 128, WRAP_FLIP_FLAG = 512;
/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */ function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
    var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : (0, _createCtorJsDefault.default)(func);
    function wrapper() {
        var length = arguments.length, args = Array(length), index = length;
        while(index--)args[index] = arguments[index];
        if (isCurried) var placeholder = (0, _getHolderJsDefault.default)(wrapper), holdersCount = (0, _countHoldersJsDefault.default)(args, placeholder);
        if (partials) args = (0, _composeArgsJsDefault.default)(args, partials, holders, isCurried);
        if (partialsRight) args = (0, _composeArgsRightJsDefault.default)(args, partialsRight, holdersRight, isCurried);
        length -= holdersCount;
        if (isCurried && length < arity) {
            var newHolders = (0, _replaceHoldersJsDefault.default)(args, placeholder);
            return (0, _createRecurryJsDefault.default)(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
        }
        var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
        length = args.length;
        if (argPos) args = (0, _reorderJsDefault.default)(args, argPos);
        else if (isFlip && length > 1) args.reverse();
        if (isAry && ary < length) args.length = ary;
        if (this && this !== (0, _rootJsDefault.default) && this instanceof wrapper) fn = Ctor || (0, _createCtorJsDefault.default)(fn);
        return fn.apply(thisBinding, args);
    }
    return wrapper;
}
exports.default = createHybrid;

},{"./_composeArgs.js":"5HNAP","./_composeArgsRight.js":"4dBUO","./_countHolders.js":"dt2SR","./_createCtor.js":"jf7SM","./_createRecurry.js":"cmK2s","./_getHolder.js":"kVLuv","./_reorder.js":"iDfrf","./_replaceHolders.js":"l4EhL","./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5HNAP":[function(require,module,exports) {
/* Built-in method references for those with the same name as other `lodash` methods. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var nativeMax = Math.max;
/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */ function composeArgs(args, partials, holders, isCurried) {
    var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
    while(++leftIndex < leftLength)result[leftIndex] = partials[leftIndex];
    while(++argsIndex < holdersLength)if (isUncurried || argsIndex < argsLength) result[holders[argsIndex]] = args[argsIndex];
    while(rangeLength--)result[leftIndex++] = args[argsIndex++];
    return result;
}
exports.default = composeArgs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4dBUO":[function(require,module,exports) {
/* Built-in method references for those with the same name as other `lodash` methods. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var nativeMax = Math.max;
/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */ function composeArgsRight(args, partials, holders, isCurried) {
    var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
    while(++argsIndex < rangeLength)result[argsIndex] = args[argsIndex];
    var offset = argsIndex;
    while(++rightIndex < rightLength)result[offset + rightIndex] = partials[rightIndex];
    while(++holdersIndex < holdersLength)if (isUncurried || argsIndex < argsLength) result[offset + holders[holdersIndex]] = args[argsIndex++];
    return result;
}
exports.default = composeArgsRight;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dt2SR":[function(require,module,exports) {
/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function countHolders(array, placeholder) {
    var length = array.length, result = 0;
    while(length--)if (array[length] === placeholder) ++result;
    return result;
}
exports.default = countHolders;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmK2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isLaziableJs = require("./_isLaziable.js");
var _isLaziableJsDefault = parcelHelpers.interopDefault(_isLaziableJs);
var _setDataJs = require("./_setData.js");
var _setDataJsDefault = parcelHelpers.interopDefault(_setDataJs);
var _setWrapToStringJs = require("./_setWrapToString.js");
var _setWrapToStringJsDefault = parcelHelpers.interopDefault(_setWrapToStringJs);
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64;
/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */ function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
    var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
    bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
    bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
    if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
    var newData = [
        func,
        bitmask,
        thisArg,
        newPartials,
        newHolders,
        newPartialsRight,
        newHoldersRight,
        argPos,
        ary,
        arity
    ];
    var result = wrapFunc.apply(undefined, newData);
    if ((0, _isLaziableJsDefault.default)(func)) (0, _setDataJsDefault.default)(result, newData);
    result.placeholder = placeholder;
    return (0, _setWrapToStringJsDefault.default)(result, func, bitmask);
}
exports.default = createRecurry;

},{"./_isLaziable.js":"4XpWq","./_setData.js":"dfOmB","./_setWrapToString.js":"dqUq8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4XpWq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lazyWrapperJs = require("./_LazyWrapper.js");
var _lazyWrapperJsDefault = parcelHelpers.interopDefault(_lazyWrapperJs);
var _getDataJs = require("./_getData.js");
var _getDataJsDefault = parcelHelpers.interopDefault(_getDataJs);
var _getFuncNameJs = require("./_getFuncName.js");
var _getFuncNameJsDefault = parcelHelpers.interopDefault(_getFuncNameJs);
var _wrapperLodashJs = require("./wrapperLodash.js");
var _wrapperLodashJsDefault = parcelHelpers.interopDefault(_wrapperLodashJs);
/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */ function isLaziable(func) {
    var funcName = (0, _getFuncNameJsDefault.default)(func), other = (0, _wrapperLodashJsDefault.default)[funcName];
    if (typeof other != "function" || !(funcName in (0, _lazyWrapperJsDefault.default).prototype)) return false;
    if (func === other) return true;
    var data = (0, _getDataJsDefault.default)(other);
    return !!data && func === data[0];
}
exports.default = isLaziable;

},{"./_LazyWrapper.js":"k5itv","./_getData.js":"7fRqS","./_getFuncName.js":"7lA3N","./wrapperLodash.js":"2iNJx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5itv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseCreateJs = require("./_baseCreate.js");
var _baseCreateJsDefault = parcelHelpers.interopDefault(_baseCreateJs);
var _baseLodashJs = require("./_baseLodash.js");
var _baseLodashJsDefault = parcelHelpers.interopDefault(_baseLodashJs);
/** Used as references for the maximum length and index of an array. */ var MAX_ARRAY_LENGTH = 4294967295;
/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */ function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = MAX_ARRAY_LENGTH;
    this.__views__ = [];
}
// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = (0, _baseCreateJsDefault.default)((0, _baseLodashJsDefault.default).prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
exports.default = LazyWrapper;

},{"./_baseCreate.js":"aq4aU","./_baseLodash.js":"dU7Kx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dU7Kx":[function(require,module,exports) {
/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseLodash() {
// No operation performed.
}
exports.default = baseLodash;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7fRqS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _metaMapJs = require("./_metaMap.js");
var _metaMapJsDefault = parcelHelpers.interopDefault(_metaMapJs);
var _noopJs = require("./noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */ var getData = !(0, _metaMapJsDefault.default) ? (0, _noopJsDefault.default) : function(func) {
    return (0, _metaMapJsDefault.default).get(func);
};
exports.default = getData;

},{"./_metaMap.js":"2XktW","./noop.js":"9q6VJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7lA3N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _realNamesJs = require("./_realNames.js");
var _realNamesJsDefault = parcelHelpers.interopDefault(_realNamesJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */ function getFuncName(func) {
    var result = func.name + "", array = (0, _realNamesJsDefault.default)[result], length = hasOwnProperty.call((0, _realNamesJsDefault.default), result) ? array.length : 0;
    while(length--){
        var data = array[length], otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) return data.name;
    }
    return result;
}
exports.default = getFuncName;

},{"./_realNames.js":"gQChE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQChE":[function(require,module,exports) {
/** Used to lookup unminified function names. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var realNames = {};
exports.default = realNames;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2iNJx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lazyWrapperJs = require("./_LazyWrapper.js");
var _lazyWrapperJsDefault = parcelHelpers.interopDefault(_lazyWrapperJs);
var _lodashWrapperJs = require("./_LodashWrapper.js");
var _lodashWrapperJsDefault = parcelHelpers.interopDefault(_lodashWrapperJs);
var _baseLodashJs = require("./_baseLodash.js");
var _baseLodashJsDefault = parcelHelpers.interopDefault(_baseLodashJs);
var _isArrayJs = require("./isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
var _wrapperCloneJs = require("./_wrapperClone.js");
var _wrapperCloneJsDefault = parcelHelpers.interopDefault(_wrapperCloneJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */ function lodash(value) {
    if ((0, _isObjectLikeJsDefault.default)(value) && !(0, _isArrayJsDefault.default)(value) && !(value instanceof (0, _lazyWrapperJsDefault.default))) {
        if (value instanceof (0, _lodashWrapperJsDefault.default)) return value;
        if (hasOwnProperty.call(value, "__wrapped__")) return (0, _wrapperCloneJsDefault.default)(value);
    }
    return new (0, _lodashWrapperJsDefault.default)(value);
}
// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = (0, _baseLodashJsDefault.default).prototype;
lodash.prototype.constructor = lodash;
exports.default = lodash;

},{"./_LazyWrapper.js":"k5itv","./_LodashWrapper.js":"iTw7d","./_baseLodash.js":"dU7Kx","./isArray.js":"ETPQ1","./isObjectLike.js":"iad76","./_wrapperClone.js":"2BZzZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTw7d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseCreateJs = require("./_baseCreate.js");
var _baseCreateJsDefault = parcelHelpers.interopDefault(_baseCreateJs);
var _baseLodashJs = require("./_baseLodash.js");
var _baseLodashJsDefault = parcelHelpers.interopDefault(_baseLodashJs);
/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */ function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
}
LodashWrapper.prototype = (0, _baseCreateJsDefault.default)((0, _baseLodashJsDefault.default).prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
exports.default = LodashWrapper;

},{"./_baseCreate.js":"aq4aU","./_baseLodash.js":"dU7Kx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BZzZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lazyWrapperJs = require("./_LazyWrapper.js");
var _lazyWrapperJsDefault = parcelHelpers.interopDefault(_lazyWrapperJs);
var _lodashWrapperJs = require("./_LodashWrapper.js");
var _lodashWrapperJsDefault = parcelHelpers.interopDefault(_lodashWrapperJs);
var _copyArrayJs = require("./_copyArray.js");
var _copyArrayJsDefault = parcelHelpers.interopDefault(_copyArrayJs);
/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */ function wrapperClone(wrapper) {
    if (wrapper instanceof (0, _lazyWrapperJsDefault.default)) return wrapper.clone();
    var result = new (0, _lodashWrapperJsDefault.default)(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = (0, _copyArrayJsDefault.default)(wrapper.__actions__);
    result.__index__ = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
}
exports.default = wrapperClone;

},{"./_LazyWrapper.js":"k5itv","./_LodashWrapper.js":"iTw7d","./_copyArray.js":"9islt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfOmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseSetDataJs = require("./_baseSetData.js");
var _baseSetDataJsDefault = parcelHelpers.interopDefault(_baseSetDataJs);
var _shortOutJs = require("./_shortOut.js");
var _shortOutJsDefault = parcelHelpers.interopDefault(_shortOutJs);
/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */ var setData = (0, _shortOutJsDefault.default)((0, _baseSetDataJsDefault.default));
exports.default = setData;

},{"./_baseSetData.js":"eUxze","./_shortOut.js":"dmiNi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqUq8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWrapDetailsJs = require("./_getWrapDetails.js");
var _getWrapDetailsJsDefault = parcelHelpers.interopDefault(_getWrapDetailsJs);
var _insertWrapDetailsJs = require("./_insertWrapDetails.js");
var _insertWrapDetailsJsDefault = parcelHelpers.interopDefault(_insertWrapDetailsJs);
var _setToStringJs = require("./_setToString.js");
var _setToStringJsDefault = parcelHelpers.interopDefault(_setToStringJs);
var _updateWrapDetailsJs = require("./_updateWrapDetails.js");
var _updateWrapDetailsJsDefault = parcelHelpers.interopDefault(_updateWrapDetailsJs);
/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */ function setWrapToString(wrapper, reference, bitmask) {
    var source = reference + "";
    return (0, _setToStringJsDefault.default)(wrapper, (0, _insertWrapDetailsJsDefault.default)(source, (0, _updateWrapDetailsJsDefault.default)((0, _getWrapDetailsJsDefault.default)(source), bitmask)));
}
exports.default = setWrapToString;

},{"./_getWrapDetails.js":"ls3EA","./_insertWrapDetails.js":"h9zDa","./_setToString.js":"3GXSg","./_updateWrapDetails.js":"gZXaA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ls3EA":[function(require,module,exports) {
/** Used to match wrap detail comments. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */ function getWrapDetails(source) {
    var match = source.match(reWrapDetails);
    return match ? match[1].split(reSplitDetails) : [];
}
exports.default = getWrapDetails;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h9zDa":[function(require,module,exports) {
/** Used to match wrap detail comments. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */ function insertWrapDetails(source, details) {
    var length = details.length;
    if (!length) return source;
    var lastIndex = length - 1;
    details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
    details = details.join(length > 2 ? ", " : " ");
    return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
}
exports.default = insertWrapDetails;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gZXaA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayEachJs = require("./_arrayEach.js");
var _arrayEachJsDefault = parcelHelpers.interopDefault(_arrayEachJs);
var _arrayIncludesJs = require("./_arrayIncludes.js");
var _arrayIncludesJsDefault = parcelHelpers.interopDefault(_arrayIncludesJs);
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
/** Used to associate wrap methods with their bit flags. */ var wrapFlags = [
    [
        "ary",
        WRAP_ARY_FLAG
    ],
    [
        "bind",
        WRAP_BIND_FLAG
    ],
    [
        "bindKey",
        WRAP_BIND_KEY_FLAG
    ],
    [
        "curry",
        WRAP_CURRY_FLAG
    ],
    [
        "curryRight",
        WRAP_CURRY_RIGHT_FLAG
    ],
    [
        "flip",
        WRAP_FLIP_FLAG
    ],
    [
        "partial",
        WRAP_PARTIAL_FLAG
    ],
    [
        "partialRight",
        WRAP_PARTIAL_RIGHT_FLAG
    ],
    [
        "rearg",
        WRAP_REARG_FLAG
    ]
];
/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */ function updateWrapDetails(details, bitmask) {
    (0, _arrayEachJsDefault.default)(wrapFlags, function(pair) {
        var value = "_." + pair[0];
        if (bitmask & pair[1] && !(0, _arrayIncludesJsDefault.default)(details, value)) details.push(value);
    });
    return details.sort();
}
exports.default = updateWrapDetails;

},{"./_arrayEach.js":"d26yI","./_arrayIncludes.js":"b8a5u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVLuv":[function(require,module,exports) {
/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getHolder(func) {
    var object = func;
    return object.placeholder;
}
exports.default = getHolder;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iDfrf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _copyArrayJs = require("./_copyArray.js");
var _copyArrayJsDefault = parcelHelpers.interopDefault(_copyArrayJs);
var _isIndexJs = require("./_isIndex.js");
var _isIndexJsDefault = parcelHelpers.interopDefault(_isIndexJs);
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMin = Math.min;
/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */ function reorder(array, indexes) {
    var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = (0, _copyArrayJsDefault.default)(array);
    while(length--){
        var index = indexes[length];
        array[length] = (0, _isIndexJsDefault.default)(index, arrLength) ? oldArray[index] : undefined;
    }
    return array;
}
exports.default = reorder;

},{"./_copyArray.js":"9islt","./_isIndex.js":"5DS1K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l4EhL":[function(require,module,exports) {
/** Used as the internal argument placeholder. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var PLACEHOLDER = "__lodash_placeholder__";
/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */ function replaceHolders(array, placeholder) {
    var index = -1, length = array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
        }
    }
    return result;
}
exports.default = replaceHolders;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCDIz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _applyJs = require("./_apply.js");
var _applyJsDefault = parcelHelpers.interopDefault(_applyJs);
var _createCtorJs = require("./_createCtor.js");
var _createCtorJsDefault = parcelHelpers.interopDefault(_createCtorJs);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1;
/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */ function createPartial(func, bitmask, thisArg, partials) {
    var isBind = bitmask & WRAP_BIND_FLAG, Ctor = (0, _createCtorJsDefault.default)(func);
    function wrapper() {
        var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== (0, _rootJsDefault.default) && this instanceof wrapper ? Ctor : func;
        while(++leftIndex < leftLength)args[leftIndex] = partials[leftIndex];
        while(argsLength--)args[leftIndex++] = arguments[++argsIndex];
        return (0, _applyJsDefault.default)(fn, isBind ? thisArg : this, args);
    }
    return wrapper;
}
exports.default = createPartial;

},{"./_apply.js":"kqJ3H","./_createCtor.js":"jf7SM","./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"LtGBF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _composeArgsJs = require("./_composeArgs.js");
var _composeArgsJsDefault = parcelHelpers.interopDefault(_composeArgsJs);
var _composeArgsRightJs = require("./_composeArgsRight.js");
var _composeArgsRightJsDefault = parcelHelpers.interopDefault(_composeArgsRightJs);
var _replaceHoldersJs = require("./_replaceHolders.js");
var _replaceHoldersJsDefault = parcelHelpers.interopDefault(_replaceHoldersJs);
/** Used as the internal argument placeholder. */ var PLACEHOLDER = "__lodash_placeholder__";
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMin = Math.min;
/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */ function mergeData(data, source) {
    var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
    var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
    // Exit early if metadata can't be merged.
    if (!(isCommon || isCombo)) return data;
    // Use source `thisArg` if available.
    if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
    }
    // Compose partial arguments.
    var value = source[3];
    if (value) {
        var partials = data[3];
        data[3] = partials ? (0, _composeArgsJsDefault.default)(partials, value, source[4]) : value;
        data[4] = partials ? (0, _replaceHoldersJsDefault.default)(data[3], PLACEHOLDER) : source[4];
    }
    // Compose partial right arguments.
    value = source[5];
    if (value) {
        partials = data[5];
        data[5] = partials ? (0, _composeArgsRightJsDefault.default)(partials, value, source[6]) : value;
        data[6] = partials ? (0, _replaceHoldersJsDefault.default)(data[5], PLACEHOLDER) : source[6];
    }
    // Use source `argPos` if available.
    value = source[7];
    if (value) data[7] = value;
    // Use source `ary` if it's smaller.
    if (srcBitmask & WRAP_ARY_FLAG) data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
    // Use source `arity` if one is not provided.
    if (data[9] == null) data[9] = source[9];
    // Use source `func` and merge bitmasks.
    data[0] = source[0];
    data[1] = newBitmask;
    return data;
}
exports.default = mergeData;

},{"./_composeArgs.js":"5HNAP","./_composeArgsRight.js":"4dBUO","./_replaceHolders.js":"l4EhL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ezjyD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseExtremumJs = require("./_baseExtremum.js");
var _baseExtremumJsDefault = parcelHelpers.interopDefault(_baseExtremumJs);
var _baseGtJs = require("./_baseGt.js");
var _baseGtJsDefault = parcelHelpers.interopDefault(_baseGtJs);
var _baseIterateeJs = require("./_baseIteratee.js");
var _baseIterateeJsDefault = parcelHelpers.interopDefault(_baseIterateeJs);
/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */ function maxBy(array, iteratee) {
    return array && array.length ? (0, _baseExtremumJsDefault.default)(array, (0, _baseIterateeJsDefault.default)(iteratee, 2), (0, _baseGtJsDefault.default)) : undefined;
}
exports.default = maxBy;

},{"./_baseExtremum.js":"bIDjT","./_baseGt.js":"7JOym","./_baseIteratee.js":"48kCP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cWQHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createToPairsJs = require("./_createToPairs.js");
var _createToPairsJsDefault = parcelHelpers.interopDefault(_createToPairsJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * Creates an array of own enumerable string keyed-value pairs for `object`
 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
 * entries are returned.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias entries
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.toPairs(new Foo);
 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
 */ var toPairs = (0, _createToPairsJsDefault.default)((0, _keysJsDefault.default));
exports.default = toPairs;

},{"./_createToPairs.js":"4pTor","./keys.js":"lbEZV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4pTor":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseToPairsJs = require("./_baseToPairs.js");
var _baseToPairsJsDefault = parcelHelpers.interopDefault(_baseToPairsJs);
var _getTagJs = require("./_getTag.js");
var _getTagJsDefault = parcelHelpers.interopDefault(_getTagJs);
var _mapToArrayJs = require("./_mapToArray.js");
var _mapToArrayJsDefault = parcelHelpers.interopDefault(_mapToArrayJs);
var _setToPairsJs = require("./_setToPairs.js");
var _setToPairsJsDefault = parcelHelpers.interopDefault(_setToPairsJs);
/** `Object#toString` result references. */ var mapTag = "[object Map]", setTag = "[object Set]";
/**
 * Creates a `_.toPairs` or `_.toPairsIn` function.
 *
 * @private
 * @param {Function} keysFunc The function to get the keys of a given object.
 * @returns {Function} Returns the new pairs function.
 */ function createToPairs(keysFunc) {
    return function(object) {
        var tag = (0, _getTagJsDefault.default)(object);
        if (tag == mapTag) return (0, _mapToArrayJsDefault.default)(object);
        if (tag == setTag) return (0, _setToPairsJsDefault.default)(object);
        return (0, _baseToPairsJsDefault.default)(object, keysFunc(object));
    };
}
exports.default = createToPairs;

},{"./_baseToPairs.js":"4DDBc","./_getTag.js":"1kCom","./_mapToArray.js":"3RRCW","./_setToPairs.js":"4abeV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DDBc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayMapJs = require("./_arrayMap.js");
var _arrayMapJsDefault = parcelHelpers.interopDefault(_arrayMapJs);
/**
 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
 * of key-value pairs for `object` corresponding to the property names of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the key-value pairs.
 */ function baseToPairs(object, props) {
    return (0, _arrayMapJsDefault.default)(props, function(key) {
        return [
            key,
            object[key]
        ];
    });
}
exports.default = baseToPairs;

},{"./_arrayMap.js":"gDCVM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4abeV":[function(require,module,exports) {
/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setToPairs(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = [
            value,
            value
        ];
    });
    return result;
}
exports.default = setToPairs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["g1TTm"], null, "parcelRequire716c")

//# sourceMappingURL=dist.5a722f1d.js.map
