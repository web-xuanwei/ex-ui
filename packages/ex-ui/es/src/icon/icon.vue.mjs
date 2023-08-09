import { defineComponent, openBlock, createElementBlock } from "vue";
import "./style/index.css";
const _hoisted_1 = { class: "ex-icon" };
const __default__ = defineComponent({ name: "ex-icon" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", _hoisted_1, "我是icon");
    };
  }
});
export {
  _sfc_main as default
};
