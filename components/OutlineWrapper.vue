<template>
  <div class="outline_wrapper">
    <slot />
  </div>
</template>

<style>
.outline_wrapper {
  @apply text-font text-large;

  li {
    list-style: decimal;
    list-style-position: inside;
  }

  li:not(:first-child) {
    margin-top: 30px;
  }
}
</style>
