<script setup lang="ts">
import SectionDefault from "./section_default.vue";
</script>

<template>
  <SectionDefault>
    <template #title>
      <slot name="title" />
    </template>
    <template #contents>
      <div class="teikyo_wrapper">
        <slot name="contents" />
      </div>
    </template>
  </SectionDefault>
</template>

<style>
.teikyo_wrapper {
  text-align: center;

  p:first-child {
    font-size: 34px;
    font-weight: 700;
  }

  p:not(:first-child) {
    font-size: 30px;
    margin-top: 30px;
  }
}
</style>
