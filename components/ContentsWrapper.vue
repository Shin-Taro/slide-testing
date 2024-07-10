<template>
  <div class="contents_wrapper mt-12">
    <slot />
  </div>
</template>

<style>
.contents_wrapper {
  padding-inline: 20px;

  p {
    @apply text-font text-regular;

    line-height: 1.5em;
  }
}
</style>
