<script setup lang="ts">
import LayoutTemplate from "../components/LayoutTemplate.vue";

const classList = ["section_layout"];
</script>

<template>
  <LayoutTemplate :class-list="classList">
    <div class="fin_layout">
      <slot />
    </div>
  </LayoutTemplate>
</template>

<style>
.fin_layout {
  display: grid;
  place-items: center;
  height: 100%;
  font-size: 40px;
}
</style>
