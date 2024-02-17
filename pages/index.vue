<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<template>
  <!-- 轮播图 -->
  <Swiper class="max-h-[50rem] max-w-[120rem]">
    <SwiperSlide>
      <img src="@/assets/images/banner01.jpg" alt="Banner01" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="@/assets/images/banner02.jpg" alt="Banner02" />
    </SwiperSlide>
  </Swiper>

  <!--  关于我们 -->
  <div class="app-container my-16 flex">
    <img src="@/assets/images/building.jpg" alt="" class="mr-6 h-80" />
    <div>
      <div class="mb-2 text-t-primary">关于我们 / About us</div>
      <div class="mb-4 text-3xl font-bold text-t-primary">亚诺隆德科技有限公司</div>
      <p class="mb-5 text-justify leading-7 tracking-wider text-t-primary">
        是一家专注于提供全方位软件解决方案的创新型公司。我们致力于通过尖端的技术和独特的方法，推动客户的业务发展和创新。自成立以来，我们始终坚持以人为本，科技引领的原则，汇聚了一批行业内顶尖的软件开发工程师和技术专家。他们凭借丰富的经验和专业知识，为我们提供了强大的技术支持，使我们能够为客户提供最优质的服务。我们的业务范围涵盖了定制软件开发、移动应用开发、云计算服务、大数据分析等多个领域。无论是初创公司还是大型企业，我们都能提供适合其需求的软件解决方案，帮助他们提升业务效率，实现业务目标。
      </p>
      <button class="button-primary">了解更多</button>
    </div>
  </div>

  <!-- 主营业务 -->
  <div class="bg-[url('@/assets/images/bg01.jpg')] bg-cover bg-center py-16">
    <div class="app-container">
      <div class="mb-4 text-center">
        <div class="mb-2 text-3xl font-bold text-t-primary">我们能为您做什么</div>
        <div class="text-lg text-t-primary">满足从基础到复杂的各种需求，提供创新、灵活的解决方案。</div>
      </div>
      <div class="grid h-[23rem] grid-cols-5">
        <div class="group relative cursor-pointer overflow-hidden bg-[url('@/assets/images/inner01.jpg')]">
          <div class="h-full w-full bg-black/[0.6]">
            <div class="absolute top-0 h-full w-full duration-500 group-hover:top-[23rem]">
              <div class="flex h-full w-full flex-col items-center justify-center">
                <div class="mb-10 flex h-[7rem] w-[7rem] items-center justify-center rounded-full border-4">
                  <svgo-website class="h-16 w-16 text-white" :fontControlled="false" />
                </div>
                <div class="text-2xl text-white">网站建设</div>
              </div>
            </div>
            <div class="absolute -top-[23rem] h-full w-full duration-500 group-hover:top-0">
              <div class="flex h-full w-full items-center px-4 text-justify leading-7 tracking-wider text-white">
                网站建设不仅有助于提升企业的品牌形象和市场竞争力，帮助企业提升品牌形象、拓展市场渠道、提供便捷服务、提高营销效果、增强与客户的互动、降低营销成本以及提高管理效率等方面，为企业的长期发展提供有力的支持。
              </div>
            </div>
          </div>
        </div>
        <div class="group relative cursor-pointer overflow-hidden bg-[url('@/assets/images/inner02.jpg')]">
          <div class="h-full w-full bg-black/[0.6]">
            <div class="absolute top-0 h-full w-full duration-500 group-hover:top-[23rem]">
              <div class="flex h-full w-full flex-col items-center justify-center">
                <div class="mb-10 flex h-[7rem] w-[7rem] items-center justify-center rounded-full border-4">
                  <svgo-phone class="h-16 w-16 text-white" :fontControlled="false" />
                </div>
                <div class="text-2xl text-white">移动应用</div>
              </div>
            </div>
            <div class="absolute -top-[23rem] h-full w-full duration-500 group-hover:top-0">
              <div class="flex h-full w-full items-center px-4 text-justify leading-7 tracking-wider text-white">
                移动应用对企业的优势主要体现在提高工作效率和生产力、改善客户体验、增强企业竞争力、降低成本、数据驱动的决策以及增强企业协作和沟通等方面。随着移动互联网的普及和发展，移动应用将成为企业发展的重要工具和竞争力来源。
              </div>
            </div>
          </div>
        </div>
        <div class="group relative cursor-pointer overflow-hidden bg-[url('@/assets/images/inner03.jpg')]">
          <div class="h-full w-full bg-black/[0.6]">
            <div class="absolute top-0 h-full w-full duration-500 group-hover:top-[23rem]">
              <div class="flex h-full w-full flex-col items-center justify-center">
                <div class="mb-10 flex h-[7rem] w-[7rem] items-center justify-center rounded-full border-4">
                  <svgo-code class="h-16 w-16 text-white" :fontControlled="false" />
                </div>
                <div class="text-2xl text-white">软件开发</div>
              </div>
            </div>
            <div class="absolute -top-[23rem] h-full w-full duration-500 group-hover:top-0">
              <div class="flex h-full w-full items-center px-4 text-justify leading-7 tracking-wider text-white">
                软件开发对企业的优势包括提升业务效率、数据驱动决策、创新商业模式、提升企业形象、降低成本以及增强销售与客户互动等方面。通过合理利用软件开发，企业可以不断提升自身竞争力，实现更加高效和可持续的发展。
              </div>
            </div>
          </div>
        </div>
        <div class="group relative cursor-pointer overflow-hidden bg-[url('@/assets/images/inner04.jpg')]">
          <div class="h-full w-full bg-black/[0.6]">
            <div class="absolute top-0 h-full w-full duration-500 group-hover:top-[23rem]">
              <div class="flex h-full w-full flex-col items-center justify-center">
                <div class="mb-10 flex h-[7rem] w-[7rem] items-center justify-center rounded-full border-4">
                  <svgo-integration class="h-16 w-16 text-white" :fontControlled="false" />
                </div>
                <div class="text-2xl text-white">系统集成</div>
              </div>
            </div>
            <div class="absolute -top-[23rem] h-full w-full duration-500 group-hover:top-0">
              <div class="flex h-full w-full items-center px-4 text-justify leading-7 tracking-wider text-white">
                系统集成对企业的优势主要体现在提高运营效率、降低运营成本、增强企业竞争力、提高数据准确性和一致性以及提高系统安全性等方面。通过实现系统集成，企业可以更加高效地管理和运营自身的业务，提高自身的竞争力和市场地位。
              </div>
            </div>
          </div>
        </div>
        <div class="group relative cursor-pointer overflow-hidden bg-[url('@/assets/images/inner05.jpg')]">
          <div class="h-full w-full bg-black/[0.6]">
            <div class="absolute top-0 h-full w-full duration-500 group-hover:top-[23rem]">
              <div class="flex h-full w-full flex-col items-center justify-center">
                <div class="mb-10 flex h-[7rem] w-[7rem] items-center justify-center rounded-full border-4">
                  <svgo-gov class="h-16 w-16 text-white" :fontControlled="false" />
                </div>
                <div class="text-2xl text-white">政企服务</div>
              </div>
            </div>
            <div class="absolute -top-[23rem] h-full w-full duration-500 group-hover:top-0">
              <div class="flex h-full w-full items-center px-4 text-justify leading-7 tracking-wider text-white">
                政企服务对企业的优势主要体现在政策支持、资源获取、市场准入、风险降低、品牌提升以及创新支持等方面，与政府部门的合作能够提升企业的品牌形象和知名度，通过利用这些优势，企业可以更好地应对市场挑战，实现稳健发展。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 text-center">
        <button class="button-primary">业务详情</button>
      </div>
    </div>
  </div>

  <!-- 业务咨询 -->
  <div class="flex h-[28rem] justify-end bg-[url('@/assets/images/business.jpg')] bg-cover bg-center">
    <div class="my-16 w-1/2 text-white">
      <div class="text-4xl font-bold tracking-wider">
        <div class="mb-8">来自互联网优秀的技术研发团队</div>
        <div>随时响应项目需求</div>
      </div>
      <div class="mt-12 flex">
        <div class="mx-8 flex flex-col items-center">
          <div
            class="relative mb-1 text-4xl font-bold after:absolute after:-right-5 after:-top-2 after:text-2xl after:content-['+']"
          >
            78
          </div>
          <div class="text-lg tracking-wider">技术专利</div>
        </div>
        <div class="mx-8 flex flex-col items-center">
          <div
            class="relative mb-1 text-4xl font-bold after:absolute after:-right-5 after:-top-0 after:text-base after:content-['年']"
          >
            15
          </div>
          <div class="text-lg tracking-wider">开发经验</div>
        </div>
        <div class="mx-8 flex flex-col items-center">
          <div
            class="relative mb-1 text-4xl font-bold after:absolute after:-right-5 after:-top-2 after:text-2xl after:content-['+']"
          >
            30
          </div>
          <div class="text-lg tracking-wider">研发团队</div>
        </div>
      </div>
      <div class="mt-12">
        <button class="button-ghost">业务咨询</button>
      </div>
    </div>
  </div>

  <!-- 案例分享 -->
  <div class="app-container py-16">
    <div class="mb-4 text-center">
      <div class="mb-2 text-3xl font-bold text-t-primary">案例分享</div>
      <div class="text-lg text-t-primary">秉持以人为本、客户至上的经营思想</div>
    </div>
    <div class="grid h-[14rem] grid-cols-3 gap-5">
      <div class="group relative overflow-hidden hover:cursor-pointer">
        <img src="@/assets/images/building.jpg" alt="" class="h-full w-full duration-500 group-hover:scale-110" />
        <div class="absolute bottom-0 h-[2rem] w-full bg-black/[0.65] text-center leading-[2rem] text-white">
          客户关系管理平台
        </div>
      </div>
      <div class="group relative overflow-hidden hover:cursor-pointer">
        <img src="@/assets/images/building.jpg" alt="" class="h-full w-full duration-500 group-hover:scale-110" />
        <div class="absolute bottom-0 h-[2rem] w-full bg-black/[0.65] text-center leading-[2rem] text-white">
          人力资源管理系统
        </div>
      </div>
      <div class="group relative overflow-hidden hover:cursor-pointer">
        <img src="@/assets/images/building.jpg" alt="" class="h-full w-full duration-500 group-hover:scale-110" />
        <div class="absolute bottom-0 h-[2rem] w-full bg-black/[0.65] text-center leading-[2rem] text-white">
          图书在线管理系统
        </div>
      </div>
    </div>
    <div class="mt-10 text-center">
      <button class="button-primary">更多案例</button>
    </div>
  </div>

  <!-- 新闻资讯 -->
  <div class="bg-[url('@/assets/images/bg01.jpg')] bg-cover bg-center py-16">
    <div class="app-container">
      <div class="mb-4 text-center">
        <div class="mb-2 text-3xl font-bold text-t-primary">新闻与活动</div>
        <div class="text-lg text-t-primary">官方发布的最新动态或消息，为您提供第一手资讯</div>
      </div>

      <div class="grid grid-cols-3 h-[30rem] gap-5">
        <div class="bg-amber-100">1</div>
        <div class="bg-amber-200">2</div>
        <div class="bg-amber-300">3</div>
      </div>
    </div>
  </div>

  <!-- 合作伙伴 -->
  <div class="app-container py-16">
    <div class="mb-4 text-center">
      <div class="mb-2 text-3xl font-bold text-t-primary">合作伙伴</div>
      <div class="text-lg text-t-primary">秉持以人为本、客户至上的经营思想</div>
    </div>
  </div>
</template>
<style scoped></style>
