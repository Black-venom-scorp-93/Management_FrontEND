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
})({"6jqiW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b73b59dca4a29272";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
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
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"3FsDI","74ad5ea14201648c":"7i2ML"}],"bM73z":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$c453 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$c453.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _react = require("react");
var _reactToastify = require("react-toastify");
var _reactToastifyCss = require("react-toastify/dist/ReactToastify.css");
var _constants = require("../../utils/constants");
var _reactRouterDom = require("react-router-dom");
var _s = $RefreshSig$();
const Admin = ()=>{
    _s();
    const [orders, setOrders] = (0, _react.useState)([]);
    (0, _react.useEffect)(()=>{
        fetchOrders();
    }, []);
    const fetchOrders = async ()=>{
        try {
            const response = await (0, _axiosDefault.default).get((0, _constants.URL) + "admin/orders", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setOrders(response.data.orders);
            if (response.data.success) (0, _reactToastify.toast).success(response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            else (0, _reactToastify.toast).error(response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        } catch (error) {
            console.log(error.stack);
            (0, _reactToastify.toast).error("You are not an admin", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
    };
    const handleDelete = async (id)=>{
        try {
            const response = await (0, _axiosDefault.default).delete((0, _constants.URL) + "admin/order/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setOrders(response.data.orders);
            if (response.data.success) (0, _reactToastify.toast).success(response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            else (0, _reactToastify.toast).error(response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        } catch (error) {
            console.log(error.stack);
            (0, _reactToastify.toast).error("Order cannot be deleted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactToastify.ToastContainer), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "light"
            }, void 0, false, {
                fileName: "src/pages/Admin.js",
                lineNumber: 106,
                columnNumber: 13
            }, undefined),
            orders.length !== 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 py-10 bg-gray-50 text-gray-800",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "buttons flex flex-row justify-center space-x-5",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                to: "/admin/addcuisine",
                                className: "w-fit block mx-auto bg-green-600 text-white py-2 px-4 mt-5 rounded-md hover:font-semibold hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200",
                                children: "Add Cuisine"
                            }, void 0, false, {
                                fileName: "src/pages/Admin.js",
                                lineNumber: 121,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                to: "/admin/contact",
                                className: "w-fit block mx-auto bg-transparent outline hover:outline-none outline-1  py-2 px-4 mt-5 rounded-md hover:font-semibold hover:bg-red-600 hover:text-white hover:shadow hover:shadow-red-800 transition ease-linear duration-200",
                                children: "Contacts"
                            }, void 0, false, {
                                fileName: "src/pages/Admin.js",
                                lineNumber: 127,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                to: "/admin/users",
                                className: "w-fit block mx-auto bg-transparent outline hover:outline-none outline-1 py-2 px-4 mt-5 rounded-md hover:font-semibold hover:bg-red-600  hover:text-white hover:shadow hover:shadow-red-800 transition ease-linear duration-200",
                                children: "Users"
                            }, void 0, false, {
                                fileName: "src/pages/Admin.js",
                                lineNumber: 133,
                                columnNumber: 25
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Admin.js",
                        lineNumber: 120,
                        columnNumber: 21
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                        className: "text-3xl font-semibold text-center text-red-700",
                        children: "Pending Orders To Process"
                    }, void 0, false, {
                        fileName: "src/pages/Admin.js",
                        lineNumber: 140,
                        columnNumber: 21
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                        className: "divide-y divide-red-600",
                        children: orders.map((order)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                className: "p-4 bg-white shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "text-lg font-bold mb-2",
                                        children: order.name
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin.js",
                                        lineNumber: 146,
                                        columnNumber: 33
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "mb-3",
                                        children: order.address
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin.js",
                                        lineNumber: 147,
                                        columnNumber: 33
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                        children: order.cartItems.map((cartItem)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                className: "flex flex-col py-4 sm:py-6 sm:flex-row sm:justify-between border-b border-gray-300",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "flex w-full space-x-2 sm:space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                            className: "flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500",
                                                            src: (0, _constants.MENU_IMG_URL) + cartItem?.menuItem?.card?.info?.imageId,
                                                            alt: cartItem?.menuItem?.card?.info?.name
                                                        }, void 0, false, {
                                                            fileName: "src/pages/Admin.js",
                                                            lineNumber: 155,
                                                            columnNumber: 49
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "flex flex-col justify-between w-full pb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                    className: "text-gray-600",
                                                                    children: cartItem?.name
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin.js",
                                                                    lineNumber: 161,
                                                                    columnNumber: 53
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                                                    className: "text-lg font-semibold",
                                                                    children: cartItem?.menuItem?.card?.info?.name
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin.js",
                                                                    lineNumber: 164,
                                                                    columnNumber: 53
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                    className: "text-gray-600",
                                                                    children: cartItem?.menuItem?.card?.info?.description
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin.js",
                                                                    lineNumber: 167,
                                                                    columnNumber: 53
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                            className: "text-sm line-through text-gray-400",
                                                                            children: "₹75.50"
                                                                        }, void 0, false, {
                                                                            fileName: "src/pages/Admin.js",
                                                                            lineNumber: 171,
                                                                            columnNumber: 57
                                                                        }, undefined),
                                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                            className: "text-lg font-semibold",
                                                                            children: cartItem?.menuItem?.card?.info?.price ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                                children: [
                                                                                    "₹",
                                                                                    cartItem?.menuItem?.card?.info?.price / 100
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "src/pages/Admin.js",
                                                                                lineNumber: 176,
                                                                                columnNumber: 107
                                                                            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                                children: [
                                                                                    "₹",
                                                                                    cartItem?.menuItem?.card?.info?.defaultPrice / 100
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "src/pages/Admin.js",
                                                                                lineNumber: 176,
                                                                                columnNumber: 163
                                                                            }, undefined)
                                                                        }, void 0, false, {
                                                                            fileName: "src/pages/Admin.js",
                                                                            lineNumber: 174,
                                                                            columnNumber: 57
                                                                        }, undefined)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/pages/Admin.js",
                                                                    lineNumber: 170,
                                                                    columnNumber: 53
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin.js",
                                                            lineNumber: 160,
                                                            columnNumber: 49
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/Admin.js",
                                                    lineNumber: 154,
                                                    columnNumber: 45
                                                }, undefined)
                                            }, cartItem?.menuItem?.card?.info?.id, false, {
                                                fileName: "src/pages/Admin.js",
                                                lineNumber: 150,
                                                columnNumber: 41
                                            }, undefined))
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin.js",
                                        lineNumber: 148,
                                        columnNumber: 33
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "flex justify-between items-center mt-5",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                type: "button",
                                                className: "bg-green-600 text-white py-2 px-4 rounded-md hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200",
                                                onClick: ()=>handleDelete(order._id),
                                                children: "Done"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin.js",
                                                lineNumber: 186,
                                                columnNumber: 37
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "text-lg font-semibold",
                                                children: [
                                                    "Total Price: ₹",
                                                    order.totalPrice
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin.js",
                                                lineNumber: 193,
                                                columnNumber: 37
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin.js",
                                        lineNumber: 185,
                                        columnNumber: 33
                                    }, undefined)
                                ]
                            }, order._id, true, {
                                fileName: "src/pages/Admin.js",
                                lineNumber: 145,
                                columnNumber: 29
                            }, undefined))
                    }, void 0, false, {
                        fileName: "src/pages/Admin.js",
                        lineNumber: 143,
                        columnNumber: 21
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/pages/Admin.js",
                lineNumber: 119,
                columnNumber: 17
            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                className: "text-2xl text-center font-black px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 text-gray-800",
                children: "No orders to display!"
            }, void 0, false, {
                fileName: "src/pages/Admin.js",
                lineNumber: 202,
                columnNumber: 17
            }, undefined)
        ]
    }, void 0, true);
};
_s(Admin, "FvMuVccH6DXI6fqfhJiN/VsjZaw=");
_c = Admin;
exports.default = Admin;
var _c;
$RefreshReg$(_c, "Admin");

  $parcel$ReactRefreshHelpers$c453.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","axios":"jo6P5","react":"21dqq","react-toastify":"kSvyQ","react-toastify/dist/ReactToastify.css":"gJP2Y","../../utils/constants":"iix0N","react-router-dom":"9xmpe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"gJP2Y":[function() {},{}]},["6jqiW","1xC6H"], null, "parcelRequire9f1a")

//# sourceMappingURL=Admin.a4a29272.js.map
