<script setup lang="ts">
import TableWrapper from "../components/TableWrapper.vue";
import SectionDefault from "./section_default.vue";
</script>

<template>
  <SectionDefault>
    <template #title>
      <slot name="title" />
    </template>
    <template #contents>
      <slot name="description" />
      <TableWrapper>
        <slot name="table" />
      </TableWrapper>
    </template>
  </SectionDefault>
</template>

<style></style>
