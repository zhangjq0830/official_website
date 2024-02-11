<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<template>
  <!-- 轮播图 -->
  <Swiper class="max-h-[50rem] max-w-[120rem] bg-sky-200">
    <SwiperSlide>
      <img src="@/assets/images/banner01.jpg" alt="Banner01" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="@/assets/images/banner02.jpg" alt="Banner02" />
    </SwiperSlide>
  </Swiper>

  <!--  关于我们 -->
  <div class="app-container flex py-16">
    <img src="@/assets/images/building.jpg" alt="" class="mr-6 h-80" />
    <div>
      <div class="text-t-primary mb-2">关于我们 / About us</div>
      <div class="text-t-primary mb-4 text-3xl font-bold">亚诺隆德科技有限公司</div>
      <p class="text-t-primary mb-5 leading-7 tracking-wider">
        是一家专注于提供全方位软件解决方案的创新型公司。我们致力于通过尖端的技术和独特的方法，推动客户的业务发展和创新。自成立以来，我们始终坚持以人为本，科技引领的原则，汇聚了一批行业内顶尖的软件开发工程师和技术专家。他们凭借丰富的经验和专业知识，为我们提供了强大的技术支持，使我们能够为客户提供最优质的服务。我们的业务范围涵盖了定制软件开发、移动应用开发、云计算服务、大数据分析等多个领域。无论是初创公司还是大型企业，我们都能提供适合其需求的软件解决方案，帮助他们提升业务效率，实现业务目标。
      </p>
      <button class="button-primary">了解更多</button>
    </div>
  </div>
</template>
<style scoped></style>
