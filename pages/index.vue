<template>
  <div>
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-normal">Hi</h3>
      <p class="text-h4 font-normal">
        <NuxtLink to="/order-history">
          <span class="text-sm font-normal text-sm mt-1"></span>
        </NuxtLink>
      </p>
    </div>

    <div>
    </div>
  </div>
</template>

<script setup>
import { getBrands } from '@/api/get-affiliate-brand-list';
import { onMounted } from 'vue';


definePageMeta({
  layout: 'default',
})

const config = useRuntimeConfig()
console.log('config', config.public);

const brands = ref([]);
onMounted(async () => {
  try {
    const response = await getBrands();
    brands.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error("Failed to fetch brands:", error);
  }
})



</script>