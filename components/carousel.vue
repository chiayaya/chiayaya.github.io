<template>
  <div>
    <Splide
      :options="{
        pauseOnFocus: true,
        autoplay: true,
        interval: 3000,
        arrows: true,
        type: 'slide',  // 'loop', 'slide', 'fade'
        rewind: true, // This does not work in the loop mode
        height: 350,
        width: '100%',
        perPage: 1,
      }"
      aria-label="slider"
    >
      <SplideSlide>
        <img src="https://www.holibear.com/hblog/wp-content/uploads/2020/07/342-1.jpg">
      </SplideSlide>
      <SplideSlide>
        <img src="https://www.holibear.com/hblog/wp-content/uploads/2020/07/342-2.jpg">
      </SplideSlide>
    </Splide>
  </div>

</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/vue-splide/css';

export default defineComponent({
  components: { Splide, SplideSlide },
});
</script>