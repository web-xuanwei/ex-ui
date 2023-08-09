<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';

defineOptions({ name: 'exc-button' });

type ButtonProps = {
  type?: string;
};

const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`exc-button--${buttonProps.type}`]: buttonProps.type };
});
</script>

<template>
  <button class="exc-button" :class="buttonStyle">测试按钮</button>
</template>
