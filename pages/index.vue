<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<template>
  <!-- 轮播图 -->
  <Swiper class="h-[50rem] max-w-[100rem] bg-sky-200">
    <SwiperSlide>
      <img src="@/assets/images/banner01.jpg" alt="Banner01" />
    </SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
  </Swiper>

  <div>其他内容</div>
</template>
<style scoped></style>
