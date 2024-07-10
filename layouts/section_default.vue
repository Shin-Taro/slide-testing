<script setup lang="ts">
import ContentsWrapper from "../components/ContentsWrapper.vue";
import LayoutTemplate from "../components/LayoutTemplate.vue";
import SectionTitle from "../components/SectionTitle.vue";

const classList = ["section_layout"];
</script>

<template>
  <LayoutTemplate :class-list="classList">
    <SectionTitle>
      <slot name="title" />
    </SectionTitle>
    <ContentsWrapper>
      <slot name="contents" />
    </ContentsWrapper>
  </LayoutTemplate>
</template>
;
