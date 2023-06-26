<script>
export default {
  props: {
    darkMode: Boolean
  },
  data: () => ({
    step: 1
  }),
  computed: {
    stepperProgress() {
      return (100 / 1) * (this.step - 1) + '%'
    }
  }
}
</script>

<template>
  <div class="hidden desktop:flex desktop:fixed desktop:z-[999999] desktop:top-[30px] desktop:left-[30px] desktop:w-fit">
    <a href="www.qr-code-generator.com/" border="0" style="cursor:default" rel="nofollow"/>
    <img src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fboterik.github.io%2Ftodo-bachelor-thesis%2F&chs=180x180&choe=UTF-8&chld=L|2"/>
    <div class="ml-[10px] flex-row bg-light-warning-30 dark:bg-dark-warning-30 border-light-warning dark:border-dark-warning border-2 p-[10px] rounded-[10px] w-fit h-fit flex items-center gap-[10px]">
      <svg class="stroke-light-text dark:stroke-dark-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6071 24.2143C19.0176 24.2143 24.2143 19.0176 24.2143 12.6071C24.2143 6.19669 19.0176 1 12.6071 1C6.19669 1 1 6.19669 1 12.6071C1 19.0176 6.19669 24.2143 12.6071 24.2143Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.6071 12.6072V18.8572" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.6071 9.03571C13.1003 9.03571 13.5 8.63597 13.5 8.14286C13.5 7.64975 13.1003 7.25 12.6071 7.25C12.114 7.25 11.7143 7.64975 11.7143 8.14286C11.7143 8.63597 12.114 9.03571 12.6071 9.03571Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="text-[15px] font-medium text-light-text dark:text-dark-text">Qr-Code scannen und Anwendung auf dem Mobilgerät öffnen.</div>
    </div>
  </div>
  <div class="grid grid-cols-1 min-h-full items-center">
    <div class="w-full h-fit flex justify-center items-center">
      <div class="relative h-fit flex justify-center bg-light-panel dark:bg-dark-panel text-light-text dark:text-dark-text w-[100%] text-lg rounded-[30px] max-w-[1200px] max-h-[750px] pt-[35px] px-[30px] pb-[50px] desktop:px-[90px]">
        <div class="absolute -top-[40px] w-[90px] flex justify-between items-center z-0">
          <div class="absoute left-0 right-0 -z-[1] my-0 mx-auto w-full bg-light-text dark:bg-dark-text h-[3px]">
            <div class="absolute left-0 h-full w-[0%] bg-light-primary transition-all" :style="'width:' + stepperProgress"></div>
          </div>
          <div class="stepper-item w-fit absolute -left-[4px] -bottom-[28px] flex flex-col items-center transition-all" :class="{ 'current': step == 1, 'success': step > 1 }">
            <div class="stepper-item-counter h-[25px] w-[25px] flex justify-center items-center bg-light-text dark:bg-dark-text rounded-full border-2 border-solid border-light-background dark:border-dark-background"></div>
            <span class="stepper-item-title text-light-text dark:text-dark-text transition-all">
              Info 1
            </span>
          </div>
          <div class="stepper-item w-fit absolute -right-[6px] -bottom-[28px] flex flex-col items-center transition-all" :class="{ 'current': step == 2, 'success': step > 2 }">
            <div class="stepper-item-counter h-[25px] w-[25px] flex justify-center items-center bg-light-text dark:bg-dark-text rounded-full border-2 border-solid border-light-background dark:border-dark-background"></div>
            <span class="stepper-item-title text-light-text dark:text-dark-text transition-all">
              Info 2
            </span>
          </div>
        </div>
    
        <div v-if="step == 1">
          <div class="pb-[20px]">
            <div class="text-light-primary dark:text-dark-primary font-bold text-[30px] leading-snug desktop:text-[60px]">Test Anwendung</div>
            <div class="max-w-[400px] text-light-text dark:text-dark-text font-medium text-[20px] leading-10 desktop:text-[30px] desktop:leading-[30px]">Praktische Leistung Bachelorarbeit</div>
          </div>
          <div class="max-h-[30vh] overflow-auto scroll-box">
            <div class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Diese ToDo Anwendung gibt es in zwei Varianten:</div>
            <ul class="list-disc pl-[30px] pt-[10px] pb-[10px]">
              <li class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">statisch, <span class="text-light-primary dark:text-dark-primary">ohne</span> Animationen</li>
              <li class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">dynamisch, <span class="text-light-primary dark:text-dark-primary">mit</span> Animationen</li>
            </ul>
            <div class="pb-[10px] text-light-text dark:text-dark-text font-normal text-[16px] leading-tight max-w-[600px] desktop:text-[18px]">Bitte klicke dich zuerst durch die statische Variante ohne Animationen und anschließend die dynamische.</div>
            <div class="pb-[20px] text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Die Varianten können über einen Button im Menü erreicht werden.</div>
            <div class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Bitte auf <span class="text-light-primary dark:text-dark-primary">Weiter</span> drücken!</div>
          </div>
        </div>
        <div v-if="step == 2">
          <div class="pb-[20px]">
            <div class="text-light-primary dark:text-dark-primary font-bold text-[30px] leading-snug desktop:text-[60px]">Test Anwendung</div>
            <div class="max-w-[400px] text-light-text dark:text-dark-text font-medium text-[20px] leading-10 desktop:text-[30px] desktop:leading-[30px]">Information</div>
          </div>
          <div class="max-h-[30vh] overflow-auto scroll-box">
            <div class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Bitte teste folgende Fälle auf deinem <span class="font-bold text-light-primary dark:text-dark-primary">Mobilgerät</span> :</div>
            <ul class="list-disc pl-[30px] pt-[10px] pb-[10px]">
              <li class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Öffne und schließe das Menü</li>
              <li class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Navigiere zwischen den Seiten</li>
              <li class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Wechsele zwischen Hellem und Dunklen Modus</li>
              <li class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Lege ein neues ToDo an</li>
              <li class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Öffne und schließe das ToDo Menü</li>
              <li class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Lösche ein angelegtes ToDo</li>
              <li class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Editiere den Titel eines angelegten ToDos</li>
              <li class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Markiere ein ToDo als erledigt</li>
            </ul>
            <div class="text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Bitte klicke jetzt auf <span class="text-light-primary dark:text-dark-primary">Beginnen</span>, um mit dem Test der statischen Variante zu beginnen.</div>
            <div class="mt-[10px] text-light-text dark:text-dark-text font-normal text-[16px] leading-tight desktop:text-[18px]">Danke für deine Zeit!</div>
          </div>
        </div>
        <button v-if="step == 1" @click="step<2?step++:null" class="absolute -bottom-[25px] py-[15px] px-[23px] text-[22px] font-bold bg-light-primary text-light-text rounded-[10px] dark:bg-dark-primary dark:text-dark-background">Weiter</button>
        <div v-if="step == 2" class="absolute -bottom-[25px] w-fit h-fit flex gap-[20px]">
          <button @click="step>1?step--:null" class="py-[15px] px-[23px] text-[22px] font-bold bg-light-error text-light-background rounded-[10px] dark:bg-dark-error dark:text-dark-text">Zurück</button>
          <router-link to="home/todo-list" custom v-slot="{ navigate }">
            <button @click="navigate" class="py-[15px] px-[10px] text-[22px] font-bold bg-light-primary text-light-text rounded-[10px] dark:bg-dark-primary dark:text-dark-background">Beginnen</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
