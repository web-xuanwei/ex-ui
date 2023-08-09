<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
import { useNamespace } from '@exc-ui/hooks'

defineOptions({ name: 'exc-button' });

type ButtonProps = {
  type?: string;
};

const ns = useNamespace('button')

</script>

<template>
  <button :class="[ns.b()]">测试按钮</button>
</template>
