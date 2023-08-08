"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("./style/index.less.js");
const __default__ = vue.defineComponent({ name: "ex-button" });
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = vue.computed(() => {
      return { [`ex-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["ex-button", vue.unref(buttonStyle)])
      }, "测试按钮", 2);
    };
  }
});
exports.default = _sfc_main;
