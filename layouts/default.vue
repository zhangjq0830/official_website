<script setup lang="ts"></script>

<template>
  <!-- 顶部信息区域 -->
  <div class="h-10 bg-slate-700">
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
      <ul class="flex w-4/6 items-center justify-between">
        <li class="px-5 py-3 hover:cursor-pointer hover:bg-slate-700 hover:text-white">网站首页</li>
        <li class="px-5 py-3 hover:cursor-pointer hover:bg-slate-700 hover:text-white">公司简介</li>
        <li class="px-5 py-3 hover:cursor-pointer hover:bg-slate-700 hover:text-white">主营业务</li>
        <li class="px-5 py-3 hover:cursor-pointer hover:bg-slate-700 hover:text-white">新闻咨询</li>
        <li class="px-5 py-3 hover:cursor-pointer hover:bg-slate-700 hover:text-white">服务支持</li>
        <li class="px-5 py-3 hover:cursor-pointer hover:bg-slate-700 hover:text-white">在线留言</li>
        <li class="px-5 py-3 hover:cursor-pointer hover:bg-slate-700 hover:text-white">联系我们</li>
      </ul>
    </div>
  </div>

  <!-- 内容区域 -->
  <slot />

  <!-- 底部信息区域 -->
  <div class="h-80 bg-slate-800">
    <div class="app-container">
      <div class="flex h-60 w-full items-center justify-between">
        <div class="flex h-40 w-full justify-between">
          <div class="h-40 w-3/5 text-white">
            <img src="@/assets/images/ynld-code.png" alt="" class="float-left mr-5 h-full" />
            <div class="h-12 text-2xl font-normal">亚诺隆德科技有限公司</div>
            <div class="flex h-28 flex-col justify-between">
              <div>联系地址：广东省中山市南头金湾广场B座16号</div>
              <div>联系电话：400-992-9891</div>
              <div>邮箱：service@pageadmin.net</div>
              <div>网址：www.ynld.com</div>
            </div>
          </div>
          <div class="flex flex-col text-white">
            <div class="h-12">Focus on software development and services</div>
            <div class="h-10 text-right text-2xl">专注于软件研发和服务</div>
            <div class="flex flex-1 items-end justify-end">
              <div class="mr-3 h-10 w-10 rounded-full bg-sky-200"></div>
              <div class="mr-3 h-10 w-10 rounded-full bg-sky-200"></div>
              <div class="h-10 w-10 rounded-full bg-sky-200"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex h-20 flex-col justify-center">
        <div class="h-6 text-center text-sm leading-6 text-white">
          Copyright &copy; 2024 All Rights Reserved 亚诺隆德科技有限公司 鲁ICP备20240207号
        </div>
        <div class="h-8 text-center text-sm leading-8 text-white">
          Powered By 亚诺隆德科技有限公司
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
