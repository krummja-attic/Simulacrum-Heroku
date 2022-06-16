"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var VueRouter = require("vue-router");
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
const _sfc_main = {
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const route = VueRouter.useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = vue.resolveComponent("router-view");
      _push(serverRenderer.ssrRenderComponent(_component_router_view, _attrs, {
        default: vue.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderVNode(_push2, vue.createVNode(vue.resolveDynamicComponent(Component), {
              route: vue.unref(route).fullPath
            }, null), _parent2, _scopeId);
          } else {
            return [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component), {
                route: vue.unref(route).fullPath
              }, null, 8, ["route"]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
