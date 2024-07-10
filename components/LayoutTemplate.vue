<script setup lang="ts">
const props = defineProps<{
  classList: string[];
}>();

const propsClassString = props.classList.join(" ");
const layoutClass = `layout_template ${propsClassString}`;
</script>

<template>
  <div :class="layoutClass">
    <slot />
  </div>
</template>
