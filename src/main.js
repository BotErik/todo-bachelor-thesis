import { createApp } from 'vue'
import { createStore } from 'vuex' 
import App from './App.vue'
import router from './router'

import './assets/css/tailwind.css'

const app = createApp(App);

const store = createStore({
  state() {
    return {
      todos: []
    }
  },
  getters: {
    todos (state) {
      return state.todos;
    }
  },
  mutations: {
    loadStore () {
      if (localStorage.getItem('store')) {
        try {
          this.replaceState(JSON.parse(localStorage.getItem('store')));
        }
        catch(e) {
          console.log('Could not initialize store', e);
        }
      }
    },
    updateTodo (state, todoItem) {
      let id = todoItem.id;
      let completed = todoItem.completed;
      let name = todoItem.name;

      let findEl = state.todos.find((x) => x.id == id);

      if (findEl !== null) {
        if (completed !== undefined) {
          findEl.completed = completed;
        }
        if (name !== undefined) {
          findEl.name = name;
        }
      } else {
        console.log(`ToDo List Item ${id} couldn't be found!`)
      }
    },
    updateTodoTitle (state, todoItem) {
      let id = todoItem.id;
      let name = todoItem.name;

      let findEl = state.todos.find((x) => x.id == id);

      if (findEl !== null) {
        if (name !== undefined) {
          findEl.name = name;
        }
      } else {
        console.log(`ToDo List Item ${id} couldn't be found!`)
      }
    },
    addTodo (state, todoItem) {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentHours = (currentDate.getHours()<10?0:'')+`${currentDate.getHours()}`;
      const currentMinutes = (currentDate.getMinutes()<10?0:'')+`${currentDate.getMinutes()}`;

      if (todoItem.id !== undefined && typeof todoItem.name == 'string' && typeof todoItem.completed == 'boolean' && typeof todoItem.location == 'string') {
        state.todos.push({
          id: todoItem.id,
          name: todoItem.name,
          date: `${currentDate.getDate()+'.'+currentMonth+'.'+currentDate.getFullYear()}`,
          time: `${currentHours+':'+currentMinutes}`,
          completed: todoItem.completed,
          location: todoItem.location
        })
      }
    },
    deleteTodo (state, todoItem) {
      let id = todoItem.id;
      let removedEl = state.todos.findIndex((x) => x.id == id);

      if (removedEl !== null) {
        state.todos.splice(removedEl, 1);
      }
    },
  }
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

app.use(router).use(store).mount('#app');