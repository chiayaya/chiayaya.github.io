<template>
  <div>
    <NuxtLink
      :to="`/`"
      class="text-sm mt-1"
    >
      <div
        class="border border-solid border-stone-300 rounded-full w-8 h-8 text-center align-middle p-1 text-slate-500 absolute top-7 right-4 shadow-md cursor-pointer bg-white"
        @click="close"
      >
        X
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    close() {
      console.log('123');
    }
  }
}
</script>
