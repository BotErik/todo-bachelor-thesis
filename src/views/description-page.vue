<script>
export default {
  name: 'DescriptionPage',
  props: {
    darkMode: Boolean,
  },
  data: () => ({
    windowWidth: window.width,
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
    },
  }
}
</script>

<template>
  <main class="fixed top-[150px] left-[30px] right-[30px] desktop:mt-[50px] desktop:flex desktop:justify-center">
    <div v-if="windowWidth <= 1079" class="w-full h-fit">
      <div class="text-light-text dark:text-dark-text">
        <div class="text-[55px] font-bold w-fit leading-10">
          Demo Seite
          <div class="mt-[15px] w-[30%] h-[4px] bg-light-primary dark:bg-dark-primary rounded-[5px]"></div>
        </div>
        <div class="mt-[5px] text-[18px] font-medium leading-10">Variante: ohne Animationen</div>
      </div>
      <div class="mt-[20px] min-h-[calc(100vh-350px)] flex flex-col justify-between text-light-text dark:text-dark-text">
        <div class="my-[20px] text-[18px] flex flex-col gap-[15px] max-w-[80vw] max-h-[40vh] overflow-y-auto scroll-box">
          <div class="text-[30px] font-bold">Beschreibung</div>
          <div>
            Dieser Prototyp wurde im Rahmen
            einer Abschlussarbeit erstellt
            und dient dazu die Auswirkungen
            von Animationen auf die Nutzer
            zu analysieren.
          </div>
          <div>
            Bitte klicke Dich zuerst durch die statische
            Version der Seite ohne Animationen und wechsele
            sobald Du mit den Tasks aus dem <span class="font-bold text-light-primary dark:text-dark-primary">Info</span>
            Bereich fertig bist zu der Version mit Animationen.
          </div>
          <div>
            Vielen Dank für deine Zeit und Hilfe :D
          </div>
        </div>
      </div>
      <div class="fixed bottom-[30px] flex justify-center w-[calc(100%-60px)] text-[15px] font-medium text-light-text-38 dark:text-dark-text-38">
        © Erik Grüneberger - 2023
      </div>
    </div>
    <div v-if="windowWidth >= 1080" class="max-w-[1350px] w-[70%] flex flex-col gap-[20px]">
      <div class="text-light-text dark:text-dark-text flex flex-row gap-[50px]">
        <div class="text-[70px] font-bold w-fit leading-10 flex flex-col justify-end">
          Demo Seite
          <div class="mt-[25px] w-[40%] h-[8px] bg-light-primary dark:bg-dark-primary rounded-[5px]"></div>
        </div>
        <div class="mt-[5px] pb-[15px] text-[25px] font-medium leading-10 flex items-end">Variante: ohne Animationen</div>
      </div>
      <div class="mt-[20px] min-h-[calc(100vh-350px)] h-[calc(100vh-350px)] flex flex-col justify-between text-light-text dark:text-dark-text">
        <div class="my-[20px] text-[20px] flex flex-col gap-[15px] max-w-[60vw] overflow-y-auto scroll-box">
          <div class="text-[40px] font-bold">Beschreibung</div>
          <div>
            Dieser Prototyp wurde im Rahmen
            einer Abschlussarbeit erstellt
            und dient dazu die Auswirkungen
            von Animationen auf die Nutzer
            zu analysieren.
          </div>
          <div>
            Bitte klicke Dich zuerst durch die statische
            Version der Seite ohne Animationen und wechsele
            sobald Du mit den Tasks aus dem <span class="font-bold text-light-primary dark:text-dark-primary">Info</span>
            Bereich fertig bist zu der Version mit Animationen und
            führe diese dort erneut aus.
          </div>
          <div>
            Vielen Dank für deine Zeit und Hilfe :D
          </div>
        </div>
      </div>
      <div class="absolute bottom-[30px] left-0 right-0 flex justify-center text-[15px] font-medium text-light-text-38 dark:text-dark-text-38">
        © Erik Grüneberger - 2023
      </div>
    </div>
  </main>
</template>