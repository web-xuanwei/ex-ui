"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("./style/index.css");
const _hoisted_1 = { class: "ex-icon" };
const __default__ = vue.defineComponent({ name: "ex-icon" });
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("i", _hoisted_1, "我是icon");
    };
  }
});
exports.default = _sfc_main;
