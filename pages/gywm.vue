<script setup lang="ts"></script>

<template>
  <img src="../assets/images/business.jpg" alt="" class="h-[20rem] w-full" />
  <div class="app-container flex justify-center py-16">
    <nuxt-link
      class="mx-3 border bg-primary px-7 py-2 text-white hover:bg-[#b40013] hover:font-bold"
      active-class="bg-[#b40013] font-bold"
      to="/gywm/gsjj"
      >公司简介
    </nuxt-link>
    <nuxt-link
      class="mx-3 border bg-primary px-7 py-2 text-white hover:bg-[#b40013] hover:font-bold"
      active-class="bg-[#b40013] font-bold"
      to="/gywm/zzjg"
      >组织架构
    </nuxt-link>
    <nuxt-link
      class="mx-3 border bg-primary px-7 py-2 text-white hover:bg-[#b40013] hover:font-bold"
      active-class="bg-[#b40013] font-bold"
      to="/gywm/ldzc"
      >领导致辞
    </nuxt-link>
    <nuxt-link
      class="mx-3 border bg-primary px-7 py-2 text-white hover:bg-[#b40013] hover:font-bold"
      active-class="bg-[#b40013] font-bold"
      to="/gywm/ryzz"
      >荣誉资质
    </nuxt-link>
    <nuxt-link
      class="mx-3 border bg-primary px-7 py-2 text-white hover:bg-[#b40013] hover:font-bold"
      active-class="bg-[#b40013] font-bold"
      to="/gywm/qywh"
      >企业文化
    </nuxt-link>
  </div>

  <nuxt-page />
</template>

<style scoped></style>
