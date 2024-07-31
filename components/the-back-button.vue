<template>
  <div>
    <div
      class="flex justify-center items-center border border-solid border-stone-300 rounded-full w-8 h-8 text-slate-500 absolute top-7 left-4 shadow-md cursor-pointer bg-white"
      @click="close"
    >
      <img
        class="w-4 h-4 inline mr-0.5"
        src="~/assets/icons/back-icon.svg"
        alt="Back"
      />
    </div>
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
