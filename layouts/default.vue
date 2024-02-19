<script setup lang="ts"></script>

<template>
  <!-- 顶部信息区域 -->
  <div class="h-10 bg-primary">
    <div class="app-container">
      <div class="flex h-10 items-center justify-between">
        <div class="text-sm text-white">欢迎进入亚诺隆德科技有限公司官方网站</div>
        <div class="text-sm text-white">全国统一服务热线：400-010-7890</div>
      </div>
    </div>
  </div>

  <!--  内容导航区域-->
  <div class="app-container h-24">
    <div class="flex h-24 items-center justify-between">
      <img src="@/assets/logo/ynld-logo.png" alt="LOGO" class="h-14" />
      <div class="flex w-4/6 items-center justify-between">
        <nuxt-link
          to="/"
          class="px-5 py-3 text-t-primary hover:bg-primary hover:text-white"
          active-class="bg-primary text-white"
        >
          网站首页
        </nuxt-link>
        <nuxt-link
          to="/gywm/gsjj"
          class="px-5 py-3 text-t-primary hover:bg-primary hover:text-white"
          active-class="bg-primary text-white"
          >关于我们
        </nuxt-link>
        <nuxt-link
          to="/zyyw"
          class="px-5 py-3 text-t-primary hover:bg-primary hover:text-white"
          active-class="bg-primary text-white"
        >
          主营业务
        </nuxt-link>
        <nuxt-link
          to="/alfx"
          class="px-5 py-3 text-t-primary hover:bg-primary hover:text-white"
          active-class="bg-primary text-white"
        >
          案例分享
        </nuxt-link>
        <nuxt-link
          to="/xwzx"
          class="px-5 py-3 text-t-primary hover:bg-primary hover:text-white"
          active-class="bg-primary text-white"
        >
          新闻咨询
        </nuxt-link>

        <nuxt-link
          to="/zxly"
          class="px-5 py-3 text-t-primary hover:bg-primary hover:text-white"
          active-class="bg-primary text-white"
        >
          在线留言
        </nuxt-link>
        <nuxt-link
          to="/lxwm"
          class="px-5 py-3 text-t-primary hover:bg-primary hover:text-white"
          active-class="bg-primary text-white"
        >
          联系我们
        </nuxt-link>
      </div>
    </div>
  </div>

  <!-- 内容区域 -->
  <div class="min-h-[calc(100vh-456px)]">
    <slot />
  </div>

  <!-- 底部信息区域 -->
  <div class="h-80 bg-secondary">
    <div class="app-container">
      <div class="flex h-60 w-full items-center justify-between">
        <div class="flex h-40 w-full justify-between">
          <div class="h-40 w-[50rem] text-white">
            <img src="@/assets/images/ynld-code.png" alt="" class="float-left mr-5 h-full" />
            <div class="mb-4 text-2xl font-normal">亚诺隆德科技有限公司</div>
            <div class="mb-1.5">联系地址：山东省济宁市任城区共青团路15-5号</div>
            <div class="mb-1.5">联系电话：400-010-7890</div>
            <div class="mb-1.5">邮箱：service@ynld.net</div>
            <div>网址：www.ynld.com</div>
          </div>
          <div class="flex flex-col text-white">
            <div class="h-12">Focus on software development and services</div>
            <div class="h-10 text-right text-2xl">专注于软件研发和服务</div>
            <div class="flex flex-1 items-end justify-end">
              <div class="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 hover:cursor-pointer">
                <svgo-weixin class="h-6 w-6" :fontControlled="false" />
              </div>
              <div class="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 hover:cursor-pointer">
                <svgo-qq class="h-6 w-6" :fontControlled="false" />
              </div>
              <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 hover:cursor-pointer">
                <svgo-douyin class="h-6 w-6" :fontControlled="false" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex h-20 flex-col justify-center">
        <div class="h-6 text-center text-sm leading-6 text-white">
          Copyright &copy; 2024 All Rights Reserved 亚诺隆德科技有限公司 鲁ICP备20240207号
        </div>
        <div class="h-8 text-center text-sm leading-8 text-white">Powered By 亚诺隆德科技有限公司</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
