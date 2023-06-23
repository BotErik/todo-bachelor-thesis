<script>
import { useStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default {
  props: {
    darkMode: Boolean,
    show: Boolean,
  },
  data: () => ({
    newTodoItem: '',
    showErrorMessage: false
  }),
  setup() {
    const store = useStore()

    return {
      todos: store.getters.todos
    }
  },
  updated() {
    if (this.show) {
      const editInput = document.querySelector('input[type=text].addInput');
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

      this.showErrorMessage = false;

      if (e.keyCode === 13) {
        this.newItem();
      }

      return false;
    },
    newItem: function() {
      if (this.newTodoItem !== '') {
        this.$store.commit('addTodo', {
          id: uuidv4(),
          name: this.newTodoItem,
          completed: false,
          location: this.$route.path
        })
        this.showErrorMessage = false;

        this.newTodoItem = '';

        this.$emit('close');
      } else {
        this.showErrorMessage = true;
      }
    }
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask fixed top-0 left-0 w-full h-full bg-light-text bg-opacity-90 z-[9999] flex justify-center items-center">
      <div class="modal-container relative mx-[30px] h-[40%] w-full bg-light-panel dark:bg-dark-text rounded-[10px] flex flex-col justify-center p-[20px] gap-[20px]">
        <button @click="$emit('close')" class="absolute top-0 right-0 w-[48px] h-[48px] bg-light-success dark:bg-dark-success rounded-[10px] flex justify-center items-center">
          <svg class="fill-light-text dark:fill-dark-text" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.00002" y="16.4" width="32" height="3.2" rx="1.6"/>
          </svg>
        </button>
        <div class="text-[30px] font-bold">ToDo anlegen</div>
        <div class="flex flex-col">
          <input @keyup="updateItemText" type="text" class="addInput h-[45px] rounded-[10px] bg-light-background dark:bg-dark-panel px-[10px] text-[16px] font-medium text-light-text dark:text-dark-text placeholder:text-light-text-38 placeholder:dark:text-dark-text-60" placeholder="Titel des ToDos eintragen ...">
          <div v-if="showErrorMessage" class="ml-[10px] text-[12px] text-light-error dark:text-dark-error">Das Feld darf nicht leer sein!</div>
        </div>
        <button @click="newItem" class="py-[10px] px-[15px] text-[16px] w-fit font-medium bg-light-primary text-light-text rounded-[10px] dark:bg-dark-primary dark:text-dark-background">Hinzufügen</button>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  transition: opacity 0.2s ease;
}

.modal-container {
  transition: all 0.2s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
