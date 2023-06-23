<script>
import { useStore } from 'vuex'
import { gsap } from 'gsap';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
  props: {
    darkMode: Boolean,
    todoItem: Object
  },
  data: () => ({
    todoMenu: false,
    editToggle: false,
    isChecked: false,
    showError: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.dotAnim = gsap.timeline({ paused: true, defaults: { duration: 0.1 } })
      .to(this.$refs.dot_bottom_left, {
        cx: 14,
        opacity: 0
      })
      .to(this.$refs.dot_bottom_right, {
        cx: 14,
        opacity: 0
      }, 0)
      .to(this.$refs.dot_bottom_left, {
        cx: 22,
        cy: 22,
        opacity: 1
      }, .2)
      .to(this.$refs.dot_bottom_right, {
        cx: 6,
        cy: 6,
        opacity: 1
      }, .2)
      .to(this.$refs.dot_top_left, {
        cx: 22,
        cy: 6,
        opacity: 1
      }, .2)
      .to(this.$refs.dot_top_right, {
        cx: 6,
        cy: 22,
        opacity: 1
      }, .2)
      .reverse();

      this.todoMenuAnim = gsap.timeline({ paused: true, defaults: { duration: 0.2 } })
      .to(this.$refs.todoMenu, {
        direction: 'rtl',
        width: '100%'
      })
      .to(this.$refs.todoMenu_button1, {
        display: 'flex'
      }, 0.2)
      .to(this.$refs.todoMenu_icon1, {
        opacity: 1
      },0.2)
      .to(this.$refs.todoMenu_title1, {
        opacity: 1
      },0.2)
      .to(this.$refs.todoMenu_button2,{
        display: 'flex'
      }, 0.2)
      .to(this.$refs.todoMenu_icon2, {
        opacity: 1
      }, 0.2)
      .to(this.$refs.todoMenu_title2, {
        opacity: 1
      },0.2)
      .reverse();

      this.editAnim = gsap.timeline({ paused: true, defaults: { duration: 0.1 } })
      .set(this.$refs.todoMenu, {
        maxHeight: 'calc(100% - 40px)'
      })
      .to(this.$refs.editMenu, {
        display: 'flex',
      })
      .to(this.$refs.editMenu_input, {
        opacity: 1
      }, 0.1)
      .to(this.$refs.editMenu_button, {
        opacity: 1
      }, 0.1)
      .reverse();

    })
  },
  updated() {
    if (this.editToggle) {
      const editInput = document.querySelector('input[type=text].editInput');
      const menuButton = document.getElementById('mobileMenu');
      const modeToggle = document.getElementById('modeToggle');

      editInput.onfocus = function () {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;

        menuButton.style.position = 'absolute';
        menuButton.style.top = '0px';
        menuButton.style.left = '0px';
        modeToggle.style.position = 'absolute';
        modeToggle.style.top = '30px';
        modeToggle.style.right = '30px';
      }
    }
  },
  methods: {
    updateItemText: function(e) {
      this.newTodoItem = e.currentTarget.value;

      this.showError = false;

      if (e.keyCode == 13) {

        if (e.currentTarget.value !== '') {
          this.$store.commit('updateTodoTitle', {
            id: e.currentTarget.getAttribute('data-id'),
            name: this.newTodoItem
          })
  
          this.todoMenu = false;
          this.editToggle = false;
          this.showError = false;
  
          this.editAnim.reverse();
          this.dotAnim.reverse();
          this.todoMenuAnim.reverse();
        } else {
          this.toast();
        }
      }

      return false;
    },
    updateTitle: function(e) {
      const editInput = document.querySelector('input[type=text].editInput');

      if (editInput.value !== '') {
        this.$store.commit('updateTodoTitle', {
          id: e.currentTarget.getAttribute('data-id'),
          name: this.newTodoItem
        })

        this.showError = false;

        this.editAnim.reverse();
        this.dotAnim.reverse();
        this.todoMenuAnim.reverse();
      } else {
        this.toast();
      }

    },
    updateTodo: function(e) {
      let newStatus = e.currentTarget.parentElement.getAttribute('data-status') == 'true' ? false : true;

      this.$store.commit('updateTodo', {
        id: e.currentTarget.getAttribute('data-id'),
        completed: newStatus
      })
    },
    deleteItem: function(e) {
      this.$store.commit('deleteTodo', {
        id: e.currentTarget.getAttribute('data-id')
      })
    },
    menuAnimation() {
      this.editAnim.reverse();

      this.dotAnim.reversed(!this.dotAnim.reversed());

      this.todoMenuAnim.reversed(!this.todoMenuAnim.reversed());

      this.todoMenu = !this.todoMenu;
      this.editToggle = false;
    },
    editMenuAnim() {
      this.editToggle = !this.editToggle;

      this.editAnim.reversed(!this.editAnim.reversed());
    },
    toast() {
      createToast({
        title: 'Fehler',
        description: 'Das Feld darf nicht leer sein!'
      },
      {
        swipeClose: false,
        showCloseButton: true,
        timeout: 2000,
        type: 'danger',
        transition: 'bounce',
        position: 'bottom-right',
      })
    }
  },
  setup() {
    const store = useStore()

    return {
      todos: store.getters.todos
    }
  }
}
</script>

<template>
  <div v-if="todoItem.location == $route.path" ref="todoItem_background" class="relative flex flex-wrap justify-between items-center bg-light-panel dark:bg-dark-panel rounded-[10px] h-fit w-full">
    <div class="flex flex-grow flex-row w-full">
      <div class="relative px-[20px] flex items-center min-h-full z-10" :data-status="todoItem.completed">
        <input :data-id="todoItem.id" :id="todoItem.id" @click="updateTodo" :checked="todoItem.completed" type="checkbox" v-model="isChecked" class="opacity-0 hover:cursor-pointer absolute top-0 left-0 h-full w-full">
        <div class="bg-light-panel dark:bg-dark-panel border-2 rounded-[50%] border-light-primary dark:border-dark-primary w-[25px] h-[25px] flex flex-shrink-0 justify-center items-center">
          <svg class="stroke-light-panel hidden pointer-events-none" width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.49539L2.68 7.7495C2.73669 7.82637 2.80933 7.88883 2.89246 7.93221C2.97559 7.97559 3.06706 7.99875 3.16 7.99996C3.25144 8.00106 3.34197 7.98088 3.425 7.94089C3.50803 7.9009 3.58148 7.8421 3.64 7.76877L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="w-full max-w-full mr-[20px] min-h-full flex flex-col justify-between py-[10px] z-10">
        <div v-if="!isChecked" :data-id="todoItem.id" class="mb-[20px] text-[16px] font-medium text-light-text dark:text-dark-text leading-none">{{ todoItem.name }}</div>
        <div v-if="isChecked" :data-id="todoItem.id" class="mb-[20px] text-[16px] font-medium text-light-success dark:text-dark-success leading-none line-through decoration-light-success dark:decoration-dark-success">{{ todoItem.name }}</div>
        <div class="flex flex-row justify-between max-w-[200px]">
          <div class="flex flex-row gap-[5px] items-center">
            <svg class="stroke-light-text-38 dark:stroke-dark-text-60" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.07143 3.14286C1.78727 3.14286 1.51475 3.25574 1.31381 3.45667C1.11288 3.65761 1 3.93013 1 4.21429V13.8571C1 14.1413 1.11288 14.4138 1.31381 14.6148C1.51475 14.8157 1.78727 14.9286 2.07143 14.9286H13.8571C14.1413 14.9286 14.4138 14.8157 14.6148 14.6148C14.8157 14.4138 14.9286 14.1413 14.9286 13.8571V4.21429C14.9286 3.93013 14.8157 3.65761 14.6148 3.45667C14.4138 3.25574 14.1413 3.14286 13.8571 3.14286H11.7143" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.21429 1V5.28571" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.7143 1V5.28571" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.21429 3.14286H9.57143" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.6429 9.03571H5.28571" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.96429 6.35714V11.7143" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text-[13px] font-medium text-light-text-38 dark:text-dark-text-60 leading-none"> {{ todoItem.date }}</div>
          </div>
          <div class="flex flex-row gap-[5px] items-center">
            <svg class="stroke-light-text-38 dark:stroke-dark-text-60" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.96429 14.9286C11.8106 14.9286 14.9286 11.8106 14.9286 7.96429C14.9286 4.11802 11.8106 1 7.96429 1C4.11802 1 1 4.11802 1 7.96429C1 11.8106 4.11802 14.9286 7.96429 14.9286Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.96429 5.28571V7.96428L10.6857 11.1357" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text-[13px] font-medium text-light-text-38 dark:text-dark-text-60 leading-none">{{ todoItem.time }}</div>
          </div>
        </div>
      </div>
      <div class="z-20">
        <button @click="menuAnimation()" class="flex justify-center items-center bg-light-primary dark:bg-dark-primary w-[50px] min-h-full rounded-[0_10px_10px_0]">
          <svg class="stroke-light-text dark:stroke-dark-panel" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle ref="dot_bottom_right" cx="4" cy="14" r="3.1" stroke-width="1.8"/>
            <circle ref="dot_top_right" class="opacity-0" cx="14" cy="14" r="3.1" stroke-width="1.8"/>
            <circle ref="dot_center" cx="14" cy="14" r="3.1" stroke-width="1.8"/>
            <circle ref="dot_top_left" class="opacity-0" cx="14" cy="14" r="3.1" stroke-width="1.8"/>
            <circle ref="dot_bottom_left" cx="24" cy="14" r="3.1" stroke-width="1.8"/>
          </svg>
        </button>
        <div ref="todoMenu" class="menu-direction absolute h-full max-w-[calc(100%-50px)] top-0 bottom-[40px] right-[50px] z-[15] rounded-[10px] flex flex-row">
          <div class="w-full max-w-[50%] bg-light-warning dark:bg-dark-warning">
            <button ref="todoMenu_button1" @click="editMenuAnim()" class="hidden flex-col justify-center items-center gap-[2px] w-full h-full">
              <svg ref="todoMenu_icon1" class="opacity-0 stroke-dark-panel dark:stroke-light-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8462 25H2.84615C2.35652 25 1.88695 24.8055 1.54073 24.4593C1.1945 24.1131 1 23.6435 1 23.1538V2.84615C1 2.35652 1.1945 1.88695 1.54073 1.54073C1.88695 1.1945 2.35652 1 2.84615 1H16.6923" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.4615 6.53846L22.2308 1L25 6.53846V22.2308C25 22.9652 24.7082 23.6696 24.1889 24.1889C23.6696 24.7082 22.9652 25 22.2308 25C21.4963 25 20.792 24.7082 20.2726 24.1889C19.7533 23.6696 19.4615 22.9652 19.4615 22.2308V6.53846Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.4615 17.6154H25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.53846 1V25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.1538 7.46153H14.8462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div ref="todoMenu_title1" class="opacity-0 text-dark-panel dark:text-light-text text-[15px] font-medium leading-none">Editieren</div>
            </button>
          </div>
          <div class="w-full max-w-[50%] bg-light-error dark:bg-dark-error rounded-[10px_0_0_10px]">
            <button ref="todoMenu_button2" @click="deleteItem" :data-id="todoItem.id" class="hidden flex-col justify-center items-center gap-[2px] w-full h-full">
              <svg ref="todoMenu_icon2" class="opacity-0 stroke-light-panel dark:stroke-text-dark-text" width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 7H22V25C22 25.5304 21.7893 26.0391 21.4142 26.4142C21.0391 26.7893 20.5304 27 20 27H6C5.46957 27 4.96086 26.7893 4.58579 26.4142C4.21071 26.0391 4 25.5304 4 25V7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 7V6C8 4.67392 8.52678 3.40215 9.46447 2.46447C10.4021 1.52678 11.6739 1 13 1C14.3261 1 15.5979 1.52678 16.5355 2.46447C17.4732 3.40215 18 4.67392 18 6V7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 11V22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 11V22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div ref="todoMenu_title2" class="opacity-0 text-light-panel dark:text-dark-text text-[15px] font-medium leading-none">Löschen</div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="h-0"></div>
    <div ref="editMenu" class="hidden flex-grow w-full h-[40px] gap-[5px] items-center px-[5px]">
      <input ref="editMenu_input" :data-id="todoItem.id" :id="todoItem.id" @keyup="updateItemText" type="text" class="editInput opacity-0 h-[30px] w-full rounded-[10px] bg-light-background dark:bg-dark-background px-[10px] text-[16px] font-medium text-light-text dark:text-dark-text placeholder:text-light-text-38 placeholder:dark:text-dark-text-38" placeholder="ToDo Titel editieren ..." :value="todoItem.name">
      <button ref="editMenu_button" :data-id="todoItem.id" :id="todoItem.id" @click="updateTitle" class="opacity-0 text-[15px] font-medium text-light-text dark:text-dark-text px-[10px] h-[30px] rounded-[10px] bg-light-success dark:bg-dark-success">Speichern</button>
    </div>
  </div>
</template>

<style>
.menu-direction {
  direction: rtl;
}
</style>