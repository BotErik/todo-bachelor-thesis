<script>
export default {
  props: {
    darkMode: Boolean
  },
  data: () => ({
    open: false,
    windowWidth: window.width
  }),
  mounted() {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    routePath() {
      return this.$route.path
    }
  }
}
</script>

<template>
  <div v-if="windowWidth <= 1079" id="mobileMenu" class="fixed z-[100] top-0 left-0 p-0 m-0" :style="open==true?'width: calc(100% - 30px); height: calc(100% - 30px);':'width: fit-content; height: fit-content'">
    <button @click="open == false?open=true:open=false" class="fixed top-[30px] left-[30px] bg-light-text dark:bg-dark-text rounded-[10px] z-[100000] w-[71px] h-[71px]">
      <svg v-if="open == false" class="absolute top-[20px] left-[15px]" width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="4" rx="2" class="fill-light-background dark:fill-dark-background"/>
        <rect y="28" width="40" height="4" rx="2" class="fill-light-background dark:fill-dark-background"/>
        <rect y="14" width="30" height="4" rx="2" class="fill-light-background dark:fill-dark-background"/>
      </svg>
      
      <svg v-if="open == true" class="absolute top-[20px] left-[15px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="28.2843" width="40" height="4" rx="2" transform="rotate(-45 0 28.2843)" class="fill-light-background dark:fill-dark-background"/>
        <rect x="28.2842" y="31.1127" width="40" height="4" rx="2" transform="rotate(-135 28.2842 31.1127)" class="fill-light-background dark:fill-dark-background"/>
      </svg>
    </button>
    <div class="fixed top-[30px] left-[30px] bg-light-text dark:bg-dark-text rounded-[10px] z-[50] flex flex-col items-center" :style="open==true?'width: 100%; height: 100%; border-radius: 10px 0 0 0':'width: 0px; height: 0px'">
      <div v-if="open == true" class="flex flex-col justify-between h-[100%] mt-[150px] mb-[50px]">
        <div class="text-dark-text dark:text-light-text h-[50%] flex flex-col justify-between">
          <div class="font-bold text-[40px] leading-10 w-fit">
            Menü
            <div class="mt-[10px] w-[100%] h-[5px] bg-dark-primary dark:bg-light-primary rounded-[5px]"></div>
          </div>
          <div class="flex flex-row items-center">
            <svg v-if="$route.path === '/home/todo-list'" class="stroke-dark-primary dark:stroke-light-primary" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.89286 2.78571C2.38597 2.78571 2.78571 2.38597 2.78571 1.89286C2.78571 1.39975 2.38597 1 1.89286 1C1.39975 1 1 1.39975 1 1.89286C1 2.38597 1.39975 2.78571 1.89286 2.78571Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.14286 1.89282H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.89286 10.8215C2.38597 10.8215 2.78571 10.4217 2.78571 9.92862C2.78571 9.43551 2.38597 9.03577 1.89286 9.03577C1.39975 9.03577 1 9.43551 1 9.92862C1 10.4217 1.39975 10.8215 1.89286 10.8215Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.14286 9.92859H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.89286 18.8571C2.38597 18.8571 2.78571 18.4574 2.78571 17.9643C2.78571 17.4712 2.38597 17.0714 1.89286 17.0714C1.39975 17.0714 1 17.4712 1 17.9643C1 18.4574 1.39975 18.8571 1.89286 18.8571Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.14286 17.9642H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-if="$route.path !== '/home/todo-list'" class="stroke-dark-text dark:stroke-light-text" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.89286 2.78571C2.38597 2.78571 2.78571 2.38597 2.78571 1.89286C2.78571 1.39975 2.38597 1 1.89286 1C1.39975 1 1 1.39975 1 1.89286C1 2.38597 1.39975 2.78571 1.89286 2.78571Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.14286 1.89282H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.89286 10.8215C2.38597 10.8215 2.78571 10.4217 2.78571 9.92862C2.78571 9.43551 2.38597 9.03577 1.89286 9.03577C1.39975 9.03577 1 9.43551 1 9.92862C1 10.4217 1.39975 10.8215 1.89286 10.8215Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.14286 9.92859H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.89286 18.8571C2.38597 18.8571 2.78571 18.4574 2.78571 17.9643C2.78571 17.4712 2.38597 17.0714 1.89286 17.0714C1.39975 17.0714 1 17.4712 1 17.9643C1 18.4574 1.39975 18.8571 1.89286 18.8571Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.14286 17.9642H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <router-link to="todo-list" custom v-slot="{ navigate }">
              <button @click="navigate(); open = false" class="ml-[25px] text-[18px] leading-10 font-medium">
                ToDo Liste
                <div v-if="$route.path === '/home/todo-list'" class="w-100% h-[2px] bg-dark-primary dark:bg-light-primary rounded-[1px]"></div>
              </button>
            </router-link>
          </div>
          <div class="flex flex-row items-center">
            <svg v-if="$route.path === '/home/description'" class="stroke-dark-primary dark:stroke-light-primary" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4928 19.7355L14.3892 23.6266C14.6311 23.8685 14.9308 24.0445 15.2599 24.138C15.5889 24.2315 15.9364 24.2394 16.2693 24.1608C16.6023 24.0823 16.9096 23.92 17.1622 23.6893C17.4148 23.4586 17.6042 23.1671 17.7125 22.8426L24.1071 3.64086C24.2252 3.28741 24.2425 2.90804 24.157 2.54531C24.0715 2.18259 23.8866 1.85087 23.6231 1.58736C23.3596 1.32384 23.0279 1.13897 22.6651 1.05348C22.3024 0.967991 21.9231 0.985263 21.5696 1.10336L2.36781 7.50336C2.04435 7.61205 1.75393 7.80142 1.52401 8.05357C1.29409 8.30572 1.13225 8.61233 1.05378 8.94443C0.975318 9.27652 0.982816 9.62314 1.07557 9.95153C1.16833 10.2799 1.34327 10.5792 1.58388 10.8212L6.47853 15.7212L6.31246 21.9087L10.4928 19.7355Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.5339 1.50342L6.47852 15.7213" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-if="$route.path !== '/home/description'" class="stroke-dark-text dark:stroke-light-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4928 19.7355L14.3892 23.6266C14.6311 23.8685 14.9308 24.0445 15.2599 24.138C15.5889 24.2315 15.9364 24.2394 16.2693 24.1608C16.6023 24.0823 16.9096 23.92 17.1622 23.6893C17.4148 23.4586 17.6042 23.1671 17.7125 22.8426L24.1071 3.64086C24.2252 3.28741 24.2425 2.90804 24.157 2.54531C24.0715 2.18259 23.8866 1.85087 23.6231 1.58736C23.3596 1.32384 23.0279 1.13897 22.6651 1.05348C22.3024 0.967991 21.9231 0.985263 21.5696 1.10336L2.36781 7.50336C2.04435 7.61205 1.75393 7.80142 1.52401 8.05357C1.29409 8.30572 1.13225 8.61233 1.05378 8.94443C0.975318 9.27652 0.982816 9.62314 1.07557 9.95153C1.16833 10.2799 1.34327 10.5792 1.58388 10.8212L6.47853 15.7212L6.31246 21.9087L10.4928 19.7355Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.5339 1.50342L6.47852 15.7213" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <router-link to="description" custom v-slot="{ navigate }">
              <button @click="navigate(); open = false" class="ml-[25px] text-[18px] leading-10 font-medium">
                Beschreibung
                <div v-if="$route.path === '/home/description'" class="w-100% h-[2px] bg-dark-primary dark:bg-light-primary rounded-[1px]"></div>
              </button>
            </router-link>
          </div>
          <div class="flex flex-row items-center">
            <svg class="stroke-dark-text dark:stroke-light-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6071 24.2143C19.0176 24.2143 24.2143 19.0176 24.2143 12.6071C24.2143 6.19669 19.0176 1 12.6071 1C6.19669 1 1 6.19669 1 12.6071C1 19.0176 6.19669 24.2143 12.6071 24.2143Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.6071 12.6072V18.8572" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.6071 9.03571C13.1003 9.03571 13.5 8.63597 13.5 8.14286C13.5 7.64975 13.1003 7.25 12.6071 7.25C12.114 7.25 11.7143 7.64975 11.7143 8.14286C11.7143 8.63597 12.114 9.03571 12.6071 9.03571Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <router-link to="/" custom v-slot="{ navigate }">
              <button @click="navigate" class="ml-[25px] text-[18px] leading-10 font-medium">
                Zur Info
              </button>
            </router-link>
          </div>
        </div>
        <router-link to="/anim-home/anim-todo-list" custom v-slot="{ navigate }">
          <button @click="navigate" class="py-[15px] px-[10px] text-[14px] font-medium bg-light-primary text-light-text rounded-[10px] dark:bg-dark-primary dark:text-dark-background">Zur Seite mit Animationen</button>
        </router-link>
      </div>
    </div>
  </div>
  <div v-if="windowWidth >= 1080" class="w-[calc(100%-50px)] h-[80px] flex items-center gap-[100px] text-light-text dark:text-dark-text">
    <div class="font-bold text-[40px] leading-[30px] w-fit h-full flex items-start gap-2 mt-[20px]">
      <div class="w-[5px] h-[30px] bg-light-primary dark:bg-dark-primary rounded-[5px]"></div>
      <div>Menü</div>
    </div>
    <div class="flex flex-row h-full items-start gap-[50px]">
      <div class="flex flex-col items-center">
        <svg v-if="$route.path === '/home/todo-list'" class="stroke-light-primary dark:stroke-dark-primary" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.89286 2.78571C2.38597 2.78571 2.78571 2.38597 2.78571 1.89286C2.78571 1.39975 2.38597 1 1.89286 1C1.39975 1 1 1.39975 1 1.89286C1 2.38597 1.39975 2.78571 1.89286 2.78571Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.14286 1.89282H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.89286 10.8215C2.38597 10.8215 2.78571 10.4217 2.78571 9.92862C2.78571 9.43551 2.38597 9.03577 1.89286 9.03577C1.39975 9.03577 1 9.43551 1 9.92862C1 10.4217 1.39975 10.8215 1.89286 10.8215Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.14286 9.92859H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.89286 18.8571C2.38597 18.8571 2.78571 18.4574 2.78571 17.9643C2.78571 17.4712 2.38597 17.0714 1.89286 17.0714C1.39975 17.0714 1 17.4712 1 17.9643C1 18.4574 1.39975 18.8571 1.89286 18.8571Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.14286 17.9642H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="$route.path !== '/home/todo-list'" class="stroke-light-text dark:stroke-dark-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.89286 2.78571C2.38597 2.78571 2.78571 2.38597 2.78571 1.89286C2.78571 1.39975 2.38597 1 1.89286 1C1.39975 1 1 1.39975 1 1.89286C1 2.38597 1.39975 2.78571 1.89286 2.78571Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.14286 1.89282H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.89286 10.8215C2.38597 10.8215 2.78571 10.4217 2.78571 9.92862C2.78571 9.43551 2.38597 9.03577 1.89286 9.03577C1.39975 9.03577 1 9.43551 1 9.92862C1 10.4217 1.39975 10.8215 1.89286 10.8215Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.14286 9.92859H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.89286 18.8571C2.38597 18.8571 2.78571 18.4574 2.78571 17.9643C2.78571 17.4712 2.38597 17.0714 1.89286 17.0714C1.39975 17.0714 1 17.4712 1 17.9643C1 18.4574 1.39975 18.8571 1.89286 18.8571Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.14286 17.9642H24.2143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <router-link to="todo-list" custom v-slot="{ navigate }">
          <button @click="navigate(); open = false" class="mt-[5px] text-[18px] leading-10 font-medium">
            ToDo Liste
            <div v-if="$route.path === '/home/todo-list'" class="w-100% h-[2px] bg-light-primary dark:bg-dark-primary rounded-[1px]"></div>
          </button>
        </router-link>
      </div>
      <div class="flex flex-col items-center">
        <svg v-if="$route.path === '/home/description'" class="stroke-light-primary dark:stroke-dark-primary" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.4928 19.7355L14.3892 23.6266C14.6311 23.8685 14.9308 24.0445 15.2599 24.138C15.5889 24.2315 15.9364 24.2394 16.2693 24.1608C16.6023 24.0823 16.9096 23.92 17.1622 23.6893C17.4148 23.4586 17.6042 23.1671 17.7125 22.8426L24.1071 3.64086C24.2252 3.28741 24.2425 2.90804 24.157 2.54531C24.0715 2.18259 23.8866 1.85087 23.6231 1.58736C23.3596 1.32384 23.0279 1.13897 22.6651 1.05348C22.3024 0.967991 21.9231 0.985263 21.5696 1.10336L2.36781 7.50336C2.04435 7.61205 1.75393 7.80142 1.52401 8.05357C1.29409 8.30572 1.13225 8.61233 1.05378 8.94443C0.975318 9.27652 0.982816 9.62314 1.07557 9.95153C1.16833 10.2799 1.34327 10.5792 1.58388 10.8212L6.47853 15.7212L6.31246 21.9087L10.4928 19.7355Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M23.5339 1.50342L6.47852 15.7213" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="$route.path !== '/home/description'" class="stroke-light-text dark:stroke-dark-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.4928 19.7355L14.3892 23.6266C14.6311 23.8685 14.9308 24.0445 15.2599 24.138C15.5889 24.2315 15.9364 24.2394 16.2693 24.1608C16.6023 24.0823 16.9096 23.92 17.1622 23.6893C17.4148 23.4586 17.6042 23.1671 17.7125 22.8426L24.1071 3.64086C24.2252 3.28741 24.2425 2.90804 24.157 2.54531C24.0715 2.18259 23.8866 1.85087 23.6231 1.58736C23.3596 1.32384 23.0279 1.13897 22.6651 1.05348C22.3024 0.967991 21.9231 0.985263 21.5696 1.10336L2.36781 7.50336C2.04435 7.61205 1.75393 7.80142 1.52401 8.05357C1.29409 8.30572 1.13225 8.61233 1.05378 8.94443C0.975318 9.27652 0.982816 9.62314 1.07557 9.95153C1.16833 10.2799 1.34327 10.5792 1.58388 10.8212L6.47853 15.7212L6.31246 21.9087L10.4928 19.7355Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M23.5339 1.50342L6.47852 15.7213" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <router-link to="description" custom v-slot="{ navigate }">
          <button @click="navigate(); open = false" class="mt-[5px] text-[18px] leading-10 font-medium">
            Beschreibung
            <div v-if="$route.path === '/home/description'" class="w-100% h-[2px] bg-light-primary dark:bg-dark-primary rounded-[1px]"></div>
          </button>
        </router-link>
      </div>
      <div class="flex flex-col items-center">
        <svg class="stroke-light-text dark:stroke-dark-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6071 24.2143C19.0176 24.2143 24.2143 19.0176 24.2143 12.6071C24.2143 6.19669 19.0176 1 12.6071 1C6.19669 1 1 6.19669 1 12.6071C1 19.0176 6.19669 24.2143 12.6071 24.2143Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.6071 12.6072V18.8572" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.6071 9.03571C13.1003 9.03571 13.5 8.63597 13.5 8.14286C13.5 7.64975 13.1003 7.25 12.6071 7.25C12.114 7.25 11.7143 7.64975 11.7143 8.14286C11.7143 8.63597 12.114 9.03571 12.6071 9.03571Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <router-link to="/" custom v-slot="{ navigate }">
          <button @click="navigate" class="mt-[5px] text-[18px] leading-10 font-medium">
            Zur Info
          </button>
        </router-link>
      </div>
    </div>
    <div class="h-full ml-auto mr-[100px]">
      <router-link to="/anim-home/anim-todo-list" custom v-slot="{ navigate }">
        <button @click="navigate" class="py-[15px] px-[10px] text-[14px] font-medium bg-light-primary text-light-text rounded-[10px] dark:bg-dark-primary dark:text-dark-background">Zur Seite mit Animationen</button>
      </router-link>
    </div>
  </div>
  <router-view v-slot="{ Component }">
    <Suspense timeout="0">
      <template #default>
        <component :dark-mode="darkMode" :is="Component" :key="$route.path"></component>
      </template>
      <template #fallback>
        <div class="w-full h-full flex justify-center items-center">
          <div class="text-[30px] font-medium text-light-text dark:text-dark-text">Lädt ...</div>
        </div>
      </template>
    </Suspense>
  </router-view>
</template>