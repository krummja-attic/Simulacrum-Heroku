"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var VueRouter = require("vue-router");
var main = require("../main.cjs");
require("@vueuse/head");
require("axios");
const _sfc_main$1 = {
  __name: "ListPosts",
  __ssrInlineRender: true,
  setup(__props) {
    const router = VueRouter.useRouter();
    const route = VueRouter.useRoute();
    const postRoutes = router.getRoutes().filter((i) => i.path.startsWith("/blog") && !i.path.endsWith(".html"));
    const posts = vue.computed(() => {
      if (route.query.tags)
        ;
      return postRoutes;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      _push(`<ul${serverRenderer.ssrRenderAttrs(_attrs)}><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(posts), (post) => {
        _push(`<li>`);
        _push(serverRenderer.ssrRenderComponent(_component_router_link, {
          to: post.path
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(post.meta.frontmatter.title)}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(post.meta.frontmatter.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ListPosts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var index_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.post-list[data-v-0bcd02ee] {\r\n  width: 300px;\r\n  height: auto;\n}\r\n")();
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)} data-v-0bcd02ee><h1 data-v-0bcd02ee>Blog Index</h1><div class="post-list" data-v-0bcd02ee>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__scopeId", "data-v-0bcd02ee"]]);
exports["default"] = index;
