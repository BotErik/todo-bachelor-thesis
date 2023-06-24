<script>
import AnimModal from '../components/anim-add-todo-modal.vue'
import AnimTodoListItem from '../components/anim-todo-list-item.vue'
import { useStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'AnimToDoList',
  components: {
    AnimModal,
    AnimTodoListItem
  },
  props: {
    darkMode: Boolean,
  },
  data: () => ({
    windowWidth: window.width,
    windowHeight: window.height,
    showModal: false,
    newTodoItem: '',
    showErrorMessage: false,
  }),
  mounted() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
      window.addEventListener('load', this.setMaxHeight())
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('load', this.setMaxHeight())
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;

      this.setMaxHeight()
    },
    setMaxHeight() {
      const todoBox = document.getElementById('scroll-box-height');

      const percentage = 0.40;

      let maxHeight = this.windowHeight * percentage;

      todoBox.style.maxHeight = maxHeight + 'px';
    },
    updateItemText: function(e) {
      this.newTodoItem = e.currentTarget.value;

      this.showErrorMessage = false;

      if (e.keyCode === 13) {
        e.currentTarget.value = ''
        this.newItem();
      }

      return false;
    },
    newItem: function() {
      const addTodoInput = document.getElementById('add-input');

      if (this.newTodoItem !== '') {
        this.$store.commit('addTodo', {
          id: uuidv4(),
          name: this.newTodoItem,
          completed: false,
          location: this.$route.path
        })
        this.newTodoItem = '';
        addTodoInput.value = '';
        this.showErrorMessage = false;

        this.$emit('close')
      } else {
        this.showErrorMessage = true;
      }
    },
  },
  computed: {
    animTodoList: function() {
      return this.todos.filter(i => i.location === this.$route.path)
    }
  },
  async setup() {
    const store = useStore();

    const loadedTodos = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(store.getters.todos);
      }, 3000);
    });

    return {
      todos: loadedTodos
    };
  }
}
</script>

<template>
  <main class="fixed top-[150px] left-[30px] right-[30px] desktop:mt-[50px] desktop:flex desktop:justify-center h-screen">
    <div v-if="windowWidth <= 1079" class="w-full h-fit">
      <div class="text-light-text dark:text-dark-text">
        <div class="text-[55px] font-bold w-fit leading-10">
          Demo Seite
          <div class="mt-[15px] w-[30%] h-[4px] bg-light-primary dark:bg-dark-primary rounded-[5px]"></div>
        </div>
        <div class="mt-[5px] text-[18px] font-medium leading-10">Variante: mit Animationen</div>
      </div>
      <div class="mt-[20px]">
        <div class="flex flex-row justify-between items-center">
          <div class="text-[25px] font-bold text-light-text dark:text-dark-text">ToDo Liste</div>
          <button @click="showModal = true" class="w-[48px] h-[48px] bg-light-success dark:bg-dark-success rounded-[10px] flex justify-center items-center">
            <svg class="fill-light-text dark:fill-dark-text" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.00002" y="16.4" width="32" height="3.2" rx="1.6"/>
              <rect x="16.4" y="34" width="32" height="3.2" rx="1.6" transform="rotate(-90 16.4 34)"/>
            </svg>
          </button>
        </div>
        <div id="scroll-box-height" class="flex flex-col gap-[10px] mt-[20px] overflow-auto scroll-box">
          <div v-for="n in animTodoList" :key="n.id">
            <AnimTodoListItem :darkMode="darkMode" :todoItem="n"/>
          </div>
          <div v-if="animTodoList.length === 0" class="flex-row mt-[10px] bg-light-warning-30 dark:bg-dark-warning-30 border-light-warning dark:border-dark-warning border-2 p-[10px] rounded-[10px] w-fit flex items-center gap-[10px]">
            <svg class="stroke-light-text dark:stroke-dark-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6071 24.2143C19.0176 24.2143 24.2143 19.0176 24.2143 12.6071C24.2143 6.19669 19.0176 1 12.6071 1C6.19669 1 1 6.19669 1 12.6071C1 19.0176 6.19669 24.2143 12.6071 24.2143Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.6071 12.6072V18.8572" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.6071 9.03571C13.1003 9.03571 13.5 8.63597 13.5 8.14286C13.5 7.64975 13.1003 7.25 12.6071 7.25C12.114 7.25 11.7143 7.64975 11.7143 8.14286C11.7143 8.63597 12.114 9.03571 12.6071 9.03571Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text-[15px] font-medium text-light-text dark:text-dark-text">Noch kein Eintrag hier verfügbar!</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="windowWidth >= 1080" class="max-w-[1350px] w-[70%] flex flex-col gap-[20px] mb-[100px] h-screen">
      <div class="text-light-text dark:text-dark-text flex flex-row gap-[50px]">
        <div class="text-[70px] font-bold w-fit leading-10 flex flex-col justify-end">
          Demo Seite
          <div class="mt-[25px] w-[40%] h-[8px] bg-light-primary dark:bg-dark-primary rounded-[5px]"></div>
        </div>
        <div class="mt-[5px] pb-[15px] text-[25px] font-medium leading-10 flex items-end">Variante: mit Animationen</div>
      </div>
      <div class="flex gap-[20px] w-full">
        <div class="min-w-[50%] h-fit max-w-[50%]">
          <div class="text-[30px] font-bold text-light-text dark:text-dark-text">ToDo anlegen</div>
          <div ref="addTodo" class="flex gap-[10px] w-full">
            <div class="flex flex-col flex-grow">
              <input @keyup="updateItemText" type="text" id="add-input" class="h-[35px] w-full rounded-[10px] bg-light-panel dark:bg-dark-panel px-[10px] text-[16px] font-medium text-light-text dark:text-dark-text placeholder:text-light-text-38 placeholder:dark:text-dark-text-60" placeholder="Titel des ToDos eintragen ...">
              <div v-if="showErrorMessage" class="ml-[10px] text-[12px] text-light-error dark:text-dark-error">Das Feld darf nicht leer sein!</div>
            </div>
            <button @click="newItem" class="h-[35px] px-[15px] text-[16px] w-fit font-medium bg-light-primary text-light-text rounded-[10px] dark:bg-dark-primary dark:text-dark-background hover:bg-light-success dark:hover:bg-dark-success transition-colors duration-200">Hinzufügen</button>
          </div>
        </div>
        <div class="min-w-[50%] max-w-[50%] mb-[50px]">
          <div class="text-[30px] font-bold text-light-text dark:text-dark-text">ToDo Liste</div>
          <div id="scroll-box-height" class="flex flex-col gap-[10px] overflow-auto scroll-box">
            <div v-for="n in animTodoList" :key="n.id">
              <AnimTodoListItem :darkMode="darkMode" :todoItem="n"/>
            </div>
            <div v-if="animTodoList.length === 0" class="flex-row bg-light-warning-30 dark:bg-dark-warning-30 border-light-warning dark:border-dark-warning border-2 p-[10px] rounded-[10px] w-fit flex items-center gap-[10px]">
              <svg class="stroke-light-text dark:stroke-dark-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6071 24.2143C19.0176 24.2143 24.2143 19.0176 24.2143 12.6071C24.2143 6.19669 19.0176 1 12.6071 1C6.19669 1 1 6.19669 1 12.6071C1 19.0176 6.19669 24.2143 12.6071 24.2143Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.6071 12.6072V18.8572" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.6071 9.03571C13.1003 9.03571 13.5 8.63597 13.5 8.14286C13.5 7.64975 13.1003 7.25 12.6071 7.25C12.114 7.25 11.7143 7.64975 11.7143 8.14286C11.7143 8.63597 12.114 9.03571 12.6071 9.03571Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="text-[15px] font-medium text-light-text dark:text-dark-text">Noch kein Eintrag hier verfügbar!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <AnimModal :show="showModal" @close="showModal = false"/>
</template>