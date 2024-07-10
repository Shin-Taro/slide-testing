<script setup lang="ts">
import SectionDefault from "./section_default.vue";
</script>

<template>
  <SectionDefault>
    <template #title>
      <slot name="title" />
    </template>
    <template #contents>
      <slot name="list_preface" />
      <div class="list_wrapper">
        <slot name="list" />
      </div>
      <div class="list_conclusion">
        <slot name="list_conclusion" />
      </div>
    </template>
  </SectionDefault>
</template>

<style>
.list_wrapper {
  @apply text-regular;

  margin-top: 20px;

  li {
  }

  li > ul {
    margin-left: 50px;
  }

  li:has(ul) {
    list-style: decimal;
    list-style-position: inside;
  }

  li:has(ul):not(:first-child) {
    border-top: 1px solid var(--color-subBackground);
  }

  li:has(ul):not(:first-child):not(:last-child) {
    padding-block: 20px;
  }

  li:has(ul):first-child {
    padding-bottom: 20px;
  }

  li:has(ul):last-child {
    padding-top: 20px;
  }

  li:not(:has(ul)) {
    list-style: square;
    list-style-position: inside;
    margin-top: 5px;
  }

  li:not(:has(ul)):first-child {
    margin-top: 20px;
  }
}

.list_conclusion {
  margin-top: 50px;

  p {
    display: inline-block;
    border-bottom: 2px solid var(--color-accent);
  }
}
</style>
