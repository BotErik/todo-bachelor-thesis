<script>
import { useDark, useToggle } from '@vueuse/core'
import { useStore } from 'vuex'

export default {
  beforeCreate() {
    const store = useStore();

    store.commit('loadStore');
  },
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return {
      isDark,
      toggleDark
    }
  }
}
</script>

<template>
  <div class="relative z-0 p-[30px] w-screen h-screen bg-light-background dark:bg-dark-background">
    <button @click="toggleDark()" id="modeToggle" class="fixed z-[50] top-[30px] right-[30px] p-[2px] rounded-full h-[71px] w-[37px] bg-light-text dark:bg-dark-text">
      <div class="absolute bottom-[2px] bg-light-background dark:bg-dark-background w-[33px] h-[33px] rounded-full mx-auto flex justify-center items-center" :style="isDark?'bottom: 36px':''">
        <img class="block dark:hidden" src="./assets/svg/mobile/light-dark-toggle__sun.svg" alt="Icon einer Sonne">
        <img class="hidden dark:block" src="./assets/svg/mobile/light-dark-toggle__moon.svg" alt="Icon eines Halbmondes">
      </div>
    </button>
    <router-view :dark-mode="isDark"/>
  </div>
</template>

