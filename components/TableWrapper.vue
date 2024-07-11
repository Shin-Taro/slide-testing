<template>
  <div class="table_wrapper">
    <slot />
  </div>
</template>

<style>
.table_wrapper {
  table {
    width: 100%;
  }
  tbody tr {
    border-top: 1px solid var(--color-subBackground);
  }
  td,
  th {
    padding: 8px;
  }
  td {
    font-size: 18px;
  }
  td:not(:first-child),
  th:not(:first-child) {
    border-left: 1px solid var(--color-subBackground);
  }
}
</style>
