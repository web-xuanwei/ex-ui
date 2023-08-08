<script lang="ts" setup>
   import './style/index.less'
   import { computed } from 'vue'
   
   defineOptions({name: 'ex-button'})

   type ButtonProps = {
      type?: string
   };

   const buttonProps = defineProps<ButtonProps>();

   const buttonStyle = computed(() => {
      return { [`ex-button--${buttonProps.type}`]: buttonProps.type }
   });
</script>

<template>
  <button class="ex-button" :class="buttonStyle">测试按钮</button>
</template>