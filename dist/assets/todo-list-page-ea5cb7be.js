import{_ as c,u as k,o as s,c as n,a as e,d as a,j as b,v as T,t as x,n as y,f as h,r as m,F as u,k as f,e as p,g as v}from"./index-6899ccaf.js";import{v as _}from"./v4-a960c1f4.js";const M={props:{darkMode:Boolean,show:Boolean},data:()=>({newTodoItem:"",showErrorMessage:!1}),setup(){return{todos:k().getters.todos}},updated(){if(this.show){const t=document.querySelector("input[type=text].addInput");t.onfocus=function(){window.scrollTo(0,0),document.body.scrollTop=0}}},methods:{updateItemText:function(t){return this.newTodoItem=t.currentTarget.value,this.showErrorMessage=!1,t.keyCode===13&&this.newItem(),!1},newItem:function(){this.newTodoItem!==""?(this.$store.commit("addTodo",{id:_(),name:this.newTodoItem,completed:!1,location:this.$route.path}),this.showErrorMessage=!1,this.newTodoItem="",this.$emit("close")):this.showErrorMessage=!0}}},I={key:0,class:"fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-light-text bg-opacity-90 z-30 flex justify-center items-center"},j={class:"relative mx-[30px] h-[40%] w-full bg-light-panel dark:bg-dark-text rounded-[10px] flex flex-col justify-center p-[20px] gap-[20px] z-40"},V=e("svg",{class:"fill-light-text dark:fill-dark-text",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("rect",{x:"2.00002",y:"16.4",width:"32",height:"3.2",rx:"1.6"})],-1),H=[V],$=e("div",{class:"text-[30px] font-bold"},"ToDo anlegen",-1),L={class:"flex flex-col"},B={key:0,class:"ml-[10px] text-[12px] text-light-error dark:text-dark-error"};function E(t,o,d,g,w,i){return d.show?(s(),n("div",I,[e("div",j,[e("button",{onClick:o[0]||(o[0]=r=>t.$emit("close")),class:"absolute top-0 right-0 w-[48px] h-[48px] bg-light-success dark:bg-dark-success rounded-[10px] flex justify-center items-center"},H),$,e("div",L,[e("input",{onKeyup:o[1]||(o[1]=(...r)=>i.updateItemText&&i.updateItemText(...r)),type:"text",class:"addInput h-[45px] rounded-[10px] bg-light-background dark:bg-dark-panel px-[10px] text-[16px] font-medium text-light-text dark:text-dark-text placeholder:text-light-text-38 placeholder:dark:text-dark-text-60",placeholder:"Titel des ToDos eintragen ..."},null,32),t.showErrorMessage?(s(),n("div",B,"Das Feld darf nicht leer sein!")):a("",!0)]),e("button",{onClick:o[2]||(o[2]=(...r)=>i.newItem&&i.newItem(...r)),class:"py-[10px] px-[15px] text-[16px] w-fit font-medium bg-light-primary text-light-text rounded-[10px] dark:bg-dark-primary dark:text-dark-background"},"Hinzufügen")])])):a("",!0)}const z=c(M,[["render",E]]),Z={props:{darkMode:Boolean,todoItem:Object},data:()=>({todoMenu:!1,editToggle:!1,isChecked:!1}),updated(){if(this.editToggle){const t=document.querySelector("input[type=text].editInput");t.onfocus=function(){window.scrollTo(0,0),document.body.scrollTop=0}}},methods:{updateItemText:function(t){return this.newTodoItem=t.currentTarget.value,t.keyCode==13&&t.currentTarget.value!==""&&(this.$store.commit("updateTodoTitle",{id:t.currentTarget.getAttribute("data-id"),name:this.newTodoItem}),this.todoMenu=!1,this.editToggle=!1),!1},updateTitle:function(t){document.querySelector("input[type=text].editInput").value!==""&&(this.$store.commit("updateTodoTitle",{id:t.currentTarget.getAttribute("data-id"),name:this.newTodoItem}),this.todoMenu=!1,this.editToggle=!1)},updateTodo:function(t){let o=t.currentTarget.parentElement.getAttribute("data-status")!="true";this.$store.commit("updateTodo",{id:t.currentTarget.getAttribute("data-id"),completed:o})},deleteItem:function(t){this.$store.commit("deleteTodo",{id:t.currentTarget.getAttribute("data-id")})}},setup(){return{todos:k().getters.todos}}},D={key:0,class:"relative z-0 flex flex-wrap justify-between items-center bg-light-panel dark:bg-dark-panel rounded-[10px] h-fit w-full"},S={class:"flex flex-grow flex-row w-full"},A=["data-status"],N=["data-id","id","checked"],W=e("div",{class:"bg-light-panel dark:bg-dark-panel border-2 rounded-[50%] border-light-primary dark:border-dark-primary w-[25px] h-[25px] flex flex-shrink-0 justify-center items-center"},[e("svg",{class:"stroke-light-panel hidden pointer-events-none",width:"10",height:"9",viewBox:"0 0 10 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M1 5.49539L2.68 7.7495C2.73669 7.82637 2.80933 7.88883 2.89246 7.93221C2.97559 7.97559 3.06706 7.99875 3.16 7.99996C3.25144 8.00106 3.34197 7.98088 3.425 7.94089C3.50803 7.9009 3.58148 7.8421 3.64 7.76877L9 1","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),F={class:"w-full max-w-full mr-[20px] min-h-full flex flex-col justify-between py-[10px] z-10"},q=["data-id"],K=["data-id"],R={class:"flex flex-row justify-between max-w-[200px]"},P={class:"flex flex-row gap-[5px] items-center"},U=h('<svg class="stroke-light-text-38 dark:stroke-dark-text-60" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07143 3.14286C1.78727 3.14286 1.51475 3.25574 1.31381 3.45667C1.11288 3.65761 1 3.93013 1 4.21429V13.8571C1 14.1413 1.11288 14.4138 1.31381 14.6148C1.51475 14.8157 1.78727 14.9286 2.07143 14.9286H13.8571C14.1413 14.9286 14.4138 14.8157 14.6148 14.6148C14.8157 14.4138 14.9286 14.1413 14.9286 13.8571V4.21429C14.9286 3.93013 14.8157 3.65761 14.6148 3.45667C14.4138 3.25574 14.1413 3.14286 13.8571 3.14286H11.7143" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.21429 1V5.28571" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.7143 1V5.28571" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.21429 3.14286H9.57143" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.6429 9.03571H5.28571" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.96429 6.35714V11.7143" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',1),O={class:"text-[13px] font-medium text-light-text-38 dark:text-dark-text-60 leading-none"},G={class:"flex flex-row gap-[5px] items-center"},J=e("svg",{class:"stroke-light-text-38 dark:stroke-dark-text-60",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.96429 14.9286C11.8106 14.9286 14.9286 11.8106 14.9286 7.96429C14.9286 4.11802 11.8106 1 7.96429 1C4.11802 1 1 4.11802 1 7.96429C1 11.8106 4.11802 14.9286 7.96429 14.9286Z","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M7.96429 5.28571V7.96428L10.6857 11.1357","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Q={class:"text-[13px] font-medium text-light-text-38 dark:text-dark-text-60 leading-none"},X={class:"z-20"},Y={key:0,class:"stroke-light-text dark:stroke-dark-panel",width:"28",height:"8",viewBox:"0 0 28 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},tt=e("path",{d:"M24 7C25.6569 7 27 5.65685 27 4C27 2.34315 25.6569 1 24 1C22.3432 1 21 2.34315 21 4C21 5.65685 22.3432 7 24 7Z","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),et=e("path",{d:"M14 7C15.6569 7 17 5.65685 17 4C17 2.34315 15.6569 1 14 1C12.3431 1 11 2.34315 11 4C11 5.65685 12.3431 7 14 7Z","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),ot=e("path",{d:"M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),dt=[tt,et,ot],it={key:1,class:"stroke-light-text dark:stroke-dark-panel",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},st=h('<path d="M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3432 17 17 18.3431 17 20C17 21.6569 18.3432 23 20 23Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 7C21.6569 7 23 5.65685 23 4C23 2.34315 21.6569 1 20 1C18.3431 1 17 2.34315 17 4C17 5.65685 18.3431 7 20 7Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 23C5.65685 23 7 21.6569 7 20C7 18.3431 5.65685 17 4 17C2.34315 17 1 18.3431 1 20C1 21.6569 2.34315 23 4 23Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>',5),nt=[st],rt=["data-id"],at=h('<svg class="stroke-light-panel dark:stroke-text-dark-text" width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7H22V25C22 25.5304 21.7893 26.0391 21.4142 26.4142C21.0391 26.7893 20.5304 27 20 27H6C5.46957 27 4.96086 26.7893 4.58579 26.4142C4.21071 26.0391 4 25.5304 4 25V7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 7V6C8 4.67392 8.52678 3.40215 9.46447 2.46447C10.4021 1.52678 11.6739 1 13 1C14.3261 1 15.5979 1.52678 16.5355 2.46447C17.4732 3.40215 18 4.67392 18 6V7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 11V22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 11V22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="text-light-panel dark:text-dark-text text-[15px] font-medium leading-10">Löschen</div>',2),lt=[at],ht=h('<svg class="stroke-dark-panel dark:stroke-light-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8462 25H2.84615C2.35652 25 1.88695 24.8055 1.54073 24.4593C1.1945 24.1131 1 23.6435 1 23.1538V2.84615C1 2.35652 1.1945 1.88695 1.54073 1.54073C1.88695 1.1945 2.35652 1 2.84615 1H16.6923" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.4615 6.53846L22.2308 1L25 6.53846V22.2308C25 22.9652 24.7082 23.6696 24.1889 24.1889C23.6696 24.7082 22.9652 25 22.2308 25C21.4963 25 20.792 24.7082 20.2726 24.1889C19.7533 23.6696 19.4615 22.9652 19.4615 22.2308V6.53846Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.4615 17.6154H25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.53846 1V25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.1538 7.46153H14.8462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="text-dark-panel dark:text-light-text text-[15px] font-medium leading-10">Editieren</div>',2),xt=[ht],ut={key:0,class:"h-0"},pt={key:1,class:"flex flex-grow h-[40px] gap-[5px] items-center px-[5px]"},ct=["data-id","id","value"],kt=["data-id","id"];function gt(t,o,d,g,w,i){return d.todoItem.location==t.$route.path?(s(),n("div",D,[e("div",S,[e("div",{class:"relative px-[20px] flex items-center min-h-full z-10","data-status":d.todoItem.completed},[b(e("input",{"data-id":d.todoItem.id,id:d.todoItem.id,onClick:o[0]||(o[0]=(...r)=>i.updateTodo&&i.updateTodo(...r)),checked:d.todoItem.completed,type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=r=>t.isChecked=r),class:"opacity-0 absolute top-0 left-0 h-full w-full"},null,8,N),[[T,t.isChecked]]),W],8,A),e("div",F,[t.isChecked?a("",!0):(s(),n("div",{key:0,"data-id":d.todoItem.id,class:"mb-[20px] text-[16px] font-medium text-light-text dark:text-dark-text leading-none"},x(d.todoItem.name),9,q)),t.isChecked?(s(),n("div",{key:1,"data-id":d.todoItem.id,class:"mb-[20px] text-[16px] font-medium text-light-success dark:text-dark-success leading-none line-through decoration-light-success dark:decoration-dark-success"},x(d.todoItem.name),9,K)):a("",!0),e("div",R,[e("div",P,[U,e("div",O,x(d.todoItem.date),1)]),e("div",G,[J,e("div",Q,x(d.todoItem.time),1)])])]),e("div",X,[e("button",{onClick:o[2]||(o[2]=r=>(t.todoMenu===!1?t.todoMenu=!0:t.todoMenu=!1,t.editToggle=!1)),class:"flex justify-center items-center bg-light-primary dark:bg-dark-primary w-[50px] min-h-full rounded-[0_10px_10px_0]"},[t.todoMenu===!1?(s(),n("svg",Y,dt)):a("",!0),t.todoMenu==!0?(s(),n("svg",it,nt)):a("",!0)]),t.todoMenu?(s(),n("div",{key:0,class:"absolute top-0 bottom-[40px] right-[50px] z-[15] w-[calc(100%-50px)] rounded-[10px] flex flex-row justify-evenly",style:y(t.editToggle?"min-height: calc(100%-60px)":"min-height: 100%")},[e("button",{onClick:o[3]||(o[3]=(...r)=>i.deleteItem&&i.deleteItem(...r)),"data-id":d.todoItem.id,class:"flex flex-col justify-center items-center gap-[2px] w-full bg-light-error dark:bg-dark-error rounded-[10px_0_0_10px]"},lt,8,rt),e("button",{onClick:o[4]||(o[4]=r=>t.editToggle?t.editToggle=!1:t.editToggle=!0),class:"flex flex-col justify-center items-center gap-[2px] w-full bg-light-warning dark:bg-dark-warning"},xt)],4)):a("",!0)])]),t.editToggle?(s(),n("div",ut)):a("",!0),t.editToggle?(s(),n("div",pt,[e("input",{"data-id":d.todoItem.id,id:d.todoItem.id,onKeyup:o[5]||(o[5]=(...r)=>i.updateItemText&&i.updateItemText(...r)),type:"text",class:"editInput h-[30px] w-full rounded-[10px] bg-light-background dark:bg-dark-background px-[10px] text-[16px] font-medium text-light-text dark:text-dark-text placeholder:text-light-text-38 placeholder:dark:text-dark-text-38",placeholder:"ToDo Titel editieren ...",value:d.todoItem.name},null,40,ct),e("button",{"data-id":d.todoItem.id,id:d.todoItem.id,onClick:o[6]||(o[6]=(...r)=>i.updateTitle&&i.updateTitle(...r)),class:"text-[15px] font-medium text-light-text dark:text-dark-text px-[10px] h-[30px] rounded-[10px] bg-light-success dark:bg-dark-success"},"Speichern",8,kt)])):a("",!0)])):a("",!0)}const wt=c(Z,[["render",gt]]),mt={name:"ToDoList",components:{Modal:z,TodoListItem:wt},props:{darkMode:Boolean},data:()=>({windowWidth:window.width,windowHeight:window.height,showModal:!1,newTodoItem:"",showErrorMessage:!1}),mounted(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.$nextTick(()=>{window.addEventListener("resize",this.onResize),window.addEventListener("load",this.setMaxHeight())})},beforeUnmount(){window.removeEventListener("resize",this.onResize),window.removeEventListener("load",this.setMaxHeight())},methods:{onResize(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.setMaxHeight()},setMaxHeight(){const t=document.getElementById("scroll-box-height"),o=.4;let d=this.windowHeight*o;t.style.maxHeight=d+"px"},updateItemText:function(t){return this.newTodoItem=t.currentTarget.value,this.showErrorMessage=!1,t.keyCode===13&&(t.currentTarget.value="",this.newItem()),!1},newItem:function(){const t=document.getElementById("add-input");this.newTodoItem!==""?(this.$store.commit("addTodo",{id:_(),name:this.newTodoItem,completed:!1,location:this.$route.path}),this.newTodoItem="",t.value="",this.showErrorMessage=!1,this.$emit("close")):this.showErrorMessage=!0}},computed:{todoList:function(){return this.todos.filter(t=>t.location===this.$route.path)}},async setup(){const t=k();return{todos:await new Promise(d=>{setTimeout(()=>{d(t.getters.todos)},3e3)})}}},ft={class:"mt-[130px] desktop:mt-[50px] desktop:flex desktop:justify-center h-screen"},vt={key:0,class:"w-full h-fit"},_t=e("div",{class:"text-light-text dark:text-dark-text"},[e("div",{class:"text-[55px] font-bold w-fit leading-10"},[v(" Demo Seite "),e("div",{class:"mt-[15px] w-[30%] h-[4px] bg-light-primary dark:bg-dark-primary rounded-[5px]"})]),e("div",{class:"mt-[5px] text-[18px] font-medium leading-10"},"Variante: ohne Animationen")],-1),Ct={class:"mt-[20px]"},bt={class:"flex flex-row justify-between items-center"},Tt=e("div",{class:"text-[25px] font-bold text-light-text dark:text-dark-text"},"ToDo Liste",-1),yt=e("svg",{class:"fill-light-text dark:fill-dark-text",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("rect",{x:"2.00002",y:"16.4",width:"32",height:"3.2",rx:"1.6"}),e("rect",{x:"16.4",y:"34",width:"32",height:"3.2",rx:"1.6",transform:"rotate(-90 16.4 34)"})],-1),Mt=[yt],It={id:"scroll-box-height",class:"flex flex-col gap-[10px] mt-[20px] overflow-auto scroll-box"},jt={key:0,class:"flex-row mt-[10px] bg-light-warning-30 dark:bg-dark-warning-30 border-light-warning dark:border-dark-warning border-2 p-[10px] rounded-[10px] w-fit flex items-center gap-[10px]"},Vt=h('<svg class="stroke-light-text dark:stroke-dark-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6071 24.2143C19.0176 24.2143 24.2143 19.0176 24.2143 12.6071C24.2143 6.19669 19.0176 1 12.6071 1C6.19669 1 1 6.19669 1 12.6071C1 19.0176 6.19669 24.2143 12.6071 24.2143Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6071 12.6072V18.8572" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6071 9.03571C13.1003 9.03571 13.5 8.63597 13.5 8.14286C13.5 7.64975 13.1003 7.25 12.6071 7.25C12.114 7.25 11.7143 7.64975 11.7143 8.14286C11.7143 8.63597 12.114 9.03571 12.6071 9.03571Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="text-[15px] font-medium text-light-text dark:text-dark-text">Noch kein Eintrag hier verfügbar!</div>',2),Ht=[Vt],$t={key:1,class:"max-w-[1350px] w-[70%] flex flex-col gap-[20px] mb-[100px] h-screen"},Lt=e("div",{class:"text-light-text dark:text-dark-text flex flex-row gap-[50px]"},[e("div",{class:"text-[70px] font-bold w-fit leading-10 flex flex-col justify-end"},[v(" Demo Seite "),e("div",{class:"mt-[25px] w-[40%] h-[8px] bg-light-primary dark:bg-dark-primary rounded-[5px]"})]),e("div",{class:"mt-[5px] pb-[15px] text-[25px] font-medium leading-10 flex items-end"},"Variante: ohne Animationen")],-1),Bt={class:"flex gap-[20px] w-full"},Et={class:"min-w-[50%] h-fit max-w-[50%]"},zt=e("div",{class:"text-[30px] font-bold text-light-text dark:text-dark-text"},"ToDo anlegen",-1),Zt={ref:"addTodo",class:"flex gap-[10px] w-full"},Dt={class:"flex flex-col flex-grow"},St={key:0,class:"ml-[10px] text-[12px] text-light-error dark:text-dark-error"},At={class:"min-w-[50%] max-w-[50%] mb-[50px]"},Nt=e("div",{class:"text-[30px] font-bold text-light-text dark:text-dark-text"},"ToDo Liste",-1),Wt={id:"scroll-box-height",class:"flex flex-col gap-[10px] overflow-auto scroll-box"},Ft={key:0,class:"flex-row bg-light-warning-30 dark:bg-dark-warning-30 border-light-warning dark:border-dark-warning border-2 p-[10px] rounded-[10px] w-fit flex items-center gap-[10px]"},qt=h('<svg class="stroke-light-text dark:stroke-dark-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6071 24.2143C19.0176 24.2143 24.2143 19.0176 24.2143 12.6071C24.2143 6.19669 19.0176 1 12.6071 1C6.19669 1 1 6.19669 1 12.6071C1 19.0176 6.19669 24.2143 12.6071 24.2143Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6071 12.6072V18.8572" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6071 9.03571C13.1003 9.03571 13.5 8.63597 13.5 8.14286C13.5 7.64975 13.1003 7.25 12.6071 7.25C12.114 7.25 11.7143 7.64975 11.7143 8.14286C11.7143 8.63597 12.114 9.03571 12.6071 9.03571Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="text-[15px] font-medium text-light-text dark:text-dark-text">Noch kein Eintrag hier verfügbar!</div>',2),Kt=[qt];function Rt(t,o,d,g,w,i){const r=m("TodoListItem"),C=m("modal");return s(),n(u,null,[e("main",ft,[t.windowWidth<=1079?(s(),n("div",vt,[_t,e("div",Ct,[e("div",bt,[Tt,e("button",{onClick:o[0]||(o[0]=l=>t.showModal=!0),class:"w-[48px] h-[48px] bg-light-success dark:bg-dark-success rounded-[10px] flex justify-center items-center"},Mt)]),e("div",It,[(s(!0),n(u,null,f(i.todoList,l=>(s(),n("div",{key:l.id},[p(r,{darkMode:d.darkMode,todoItem:l},null,8,["darkMode","todoItem"])]))),128)),i.todoList.length===0?(s(),n("div",jt,Ht)):a("",!0)])])])):a("",!0),t.windowWidth>=1080?(s(),n("div",$t,[Lt,e("div",Bt,[e("div",Et,[zt,e("div",Zt,[e("div",Dt,[e("input",{onKeyup:o[1]||(o[1]=(...l)=>i.updateItemText&&i.updateItemText(...l)),type:"text",id:"add-input",class:"h-[35px] w-full rounded-[10px] bg-light-panel dark:bg-dark-panel px-[10px] text-[16px] font-medium text-light-text dark:text-dark-text placeholder:text-light-text-38 placeholder:dark:text-dark-text-60",placeholder:"Titel des ToDos eintragen ..."},null,32),t.showErrorMessage?(s(),n("div",St,"Das Feld darf nicht leer sein!")):a("",!0)]),e("button",{onClick:o[2]||(o[2]=(...l)=>i.newItem&&i.newItem(...l)),class:"h-[35px] px-[15px] text-[16px] w-fit font-medium bg-light-primary text-light-text rounded-[10px] dark:bg-dark-primary dark:text-dark-background"},"Hinzufügen")],512)]),e("div",At,[Nt,e("div",Wt,[(s(!0),n(u,null,f(i.todoList,l=>(s(),n("div",{key:l.id},[p(r,{darkMode:d.darkMode,todoItem:l},null,8,["darkMode","todoItem"])]))),128)),i.todoList.length===0?(s(),n("div",Ft,Kt)):a("",!0)])])])])):a("",!0)]),p(C,{show:t.showModal,onClose:o[3]||(o[3]=l=>t.showModal=!1)},null,8,["show"])],64)}const Ot=c(mt,[["render",Rt]]);export{Ot as default};
