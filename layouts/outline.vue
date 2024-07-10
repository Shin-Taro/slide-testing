<script setup lang="ts">
import OutlineWrapper from "../components/OutlineWrapper.vue";
import SectionDefault from "./section_default.vue";
</script>

<template>
  <SectionDefault>
    <template #title>
      <slot name="title" />
    </template>
    <template #contents>
      <OutlineWrapper>
        <slot name="contents" />
      </OutlineWrapper>
    </template>
  </SectionDefault>
</template>
