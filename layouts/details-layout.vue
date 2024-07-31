<template>
  <div class="m-0 m-auto p-4 bg-grey-blue h-screen">
    <TheCloseButton />
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'details-layout',
};
</script>
