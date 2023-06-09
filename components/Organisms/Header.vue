<script lang="ts">
export default {
    name: 'Header',
    data() {
      return {
        navbarOpen: false
      }
    }
  }
</script>

<template>
    <header class="flex w-full items-center bg-white">
      <div class="container mx-auto">
        <div class="relative -mx-4 flex items-center justify-between">
          <div class="w-60 max-w-full px-4">
            <NuxtLink class="block w-full py-2" to="/">
              <img src="~/assets/images/logo.png" alt="logo" class="w-full">
            </NuxtLink>
          </div>
          <div class="flex w-full items-center justify-between px-4">
            <div>
              <button @click="navbarOpen = !navbarOpen" :class="navbarOpen ? 'navbarTogglerActive' : '' " id="navbarToggler" class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                <span class="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span class="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span class="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <NavigationBar :navbarOpen="navbarOpen"/>
            </div>
            <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
              <NuxtLink to="/" class="py-3 px-7 text-base font-medium text-dark hover:text-primary">
                Login
              </NuxtLink>
              <a href="/" class="rounded-lg bg-primary py-3 px-7 text-base font-medium text-white hover:bg-opacity-90">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<style lang="scss" scoped></style>
