import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref } from "vue";
import "./style/index.css";
const __default__ = defineComponent({ name: "ex-button" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return { [`ex-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["ex-button", unref(buttonStyle)])
      }, "测试按钮", 2);
    };
  }
});
export {
  _sfc_main as default
};
