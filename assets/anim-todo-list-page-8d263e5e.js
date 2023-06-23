import{_ as Z,u as X,o as d,h as x,w as ot,c as u,a as s,d as p,T as st,e as c,r as F,l as it,t as C,m as ht,p as w,q as O,s as U,x as z,y as ut,z as nt,j as ct,v as pt,f as H,F as P,k as J,g as rt}from"./index-2355b10f.js";import{v as dt}from"./v4-a960c1f4.js";import{g as W}from"./index-38dc627c.js";const mt={props:{darkMode:Boolean,show:Boolean},data:()=>({newTodoItem:"",showErrorMessage:!1}),setup(){return{todos:X().getters.todos}},updated(){if(this.show){const t=document.querySelector("input[type=text].addInput"),e=document.getElementById("mobileMenu"),o=document.getElementById("modeToggle");t.onfocus=function(){window.scrollTo(0,0),document.body.scrollTop=0,e.style.position="absolute",e.style.top="0px",e.style.left="0px",o.style.position="absolute",o.style.top="30px",o.style.right="30px"}}},methods:{updateItemText:function(t){return this.newTodoItem=t.currentTarget.value,this.showErrorMessage=!1,t.keyCode===13&&this.newItem(),!1},newItem:function(){this.newTodoItem!==""?(this.$store.commit("addTodo",{id:dt(),name:this.newTodoItem,completed:!1,location:this.$route.path}),this.showErrorMessage=!1,this.newTodoItem="",this.$emit("close")):this.showErrorMessage=!0}}},xt={key:0,class:"modal-mask fixed top-0 left-0 w-full h-full bg-light-text bg-opacity-90 z-[9999] flex justify-center items-center"},ft={class:"modal-container relative mx-[30px] h-[40%] w-full bg-light-panel dark:bg-dark-text rounded-[10px] flex flex-col justify-center p-[20px] gap-[20px]"},gt=s("svg",{class:"fill-light-text dark:fill-dark-text",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("rect",{x:"2.00002",y:"16.4",width:"32",height:"3.2",rx:"1.6"})],-1),wt=[gt],vt=s("div",{class:"text-[30px] font-bold"},"ToDo anlegen",-1),kt={class:"flex flex-col"},_t={key:0,class:"ml-[10px] text-[12px] text-light-error dark:text-dark-error"};function yt(t,e,o,n,a,i){return d(),x(st,{name:"modal"},{default:ot(()=>[o.show?(d(),u("div",xt,[s("div",ft,[s("button",{onClick:e[0]||(e[0]=r=>t.$emit("close")),class:"absolute top-0 right-0 w-[48px] h-[48px] bg-light-success dark:bg-dark-success rounded-[10px] flex justify-center items-center"},wt),vt,s("div",kt,[s("input",{onKeyup:e[1]||(e[1]=(...r)=>i.updateItemText&&i.updateItemText(...r)),type:"text",class:"addInput h-[45px] rounded-[10px] bg-light-background dark:bg-dark-panel px-[10px] text-[16px] font-medium text-light-text dark:text-dark-text placeholder:text-light-text-38 placeholder:dark:text-dark-text-60",placeholder:"Titel des ToDos eintragen ..."},null,32),t.showErrorMessage?(d(),u("div",_t,"Das Feld darf nicht leer sein!")):p("",!0)]),s("button",{onClick:e[2]||(e[2]=(...r)=>i.newItem&&i.newItem(...r)),class:"py-[10px] px-[15px] text-[16px] w-fit font-medium bg-light-primary text-light-text rounded-[10px] dark:bg-dark-primary dark:text-dark-background"},"Hinzufügen")])])):p("",!0)]),_:1})}const bt=Z(mt,[["render",yt]]);var Tt=Object.defineProperty,Mt=Object.defineProperties,It=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,Ct=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable,tt=(t,e,o)=>e in t?Tt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,k=(t,e)=>{for(var o in e||(e={}))Ct.call(e,o)&&tt(t,o,e[o]);if(Q)for(var o of Q(e))Et.call(e,o)&&tt(t,o,e[o]);return t},K=(t,e)=>Mt(t,It(e));const j={type:"default",timeout:5e3,showCloseButton:!0,position:"top-right",transition:"bounce",hideProgressBar:!1,swipeClose:!0};var I,T;(T=I||(I={}))[T.TITLE_ONLY=0]="TITLE_ONLY",T[T.TITLE_DESCRIPTION=1]="TITLE_DESCRIPTION",T[T.COMPONENT=2]="COMPONENT",T[T.VNODE=3]="VNODE";const Lt={"top-left":{bounce:"mosha__bounceInLeft",zoom:"mosha__zoomIn",slide:"mosha__slideInLeft"},"top-right":{bounce:"mosha__bounceInRight",zoom:"mosha__zoomIn",slide:"mosha__slideInRight"},"top-center":{bounce:"mosha__bounceInDown",zoom:"mosha__zoomIn",slide:"mosha__slideInDown"},"bottom-center":{bounce:"mosha__bounceInUp",zoom:"mosha__zoomIn",slide:"mosha__slideInUp"},"bottom-right":{bounce:"mosha__bounceInRight",zoom:"mosha__zoomIn",slide:"mosha__slideInRight"},"bottom-left":{bounce:"mosha__bounceInLeft",zoom:"mosha__zoomIn",slide:"mosha__slideInLeft"}},et=(t,e=300)=>{let o;return(...n)=>{o&&(clearTimeout(o),o=void 0),o=setTimeout(()=>t(...n),e)}},Bt=(t,e,o)=>{const n=w(),a=w(void 0),i=w(),r=m=>m instanceof MouseEvent,l=m=>{o!==!1&&n.value&&(r(m)?a.value=n.value.clientX-m.clientX:a.value=n.value.touches[0].clientX-m.touches[0].clientX,i.value=K(k({},i.value),{transition:"none"}),t.endsWith("left")?i.value.left=-a.value+"px !important":t.endsWith("right")?i.value.right=`${a.value}px !important`:a.value>0?i.value.left=-a.value+"px !important":i.value.right=`${a.value}px !important`,Math.abs(a.value)>200&&e())},h=m=>{o!==!1&&(n.value&&(n.value=void 0),a.value&&(a.value=void 0),removeEventListener(m,l))};return U(()=>{o!==!1&&(h("mousemove"),h("touchmove"))}),{swipedDiff:a,swipeStart:n,swipeStyle:i,swipeHandler:l,startSwipeHandler:m=>{if(o===!1)return;n.value=m;const M=r(m)?"mousemove":"touchmove",_=r(m)?"mouseup":"touchend";addEventListener(M,l),addEventListener(_,()=>(y=>{const L={transition:"left .3s ease-out",left:0},B={transition:"right .3s ease-out",right:0},D={transition:"all .3s ease-out",left:0,right:0};t.endsWith("left")?i.value=k(k({},i.value),L):t.endsWith("right")?i.value=k(k({},i.value),B):i.value=k(k({},i.value),D),n.value=void 0,a.value=void 0,removeEventListener(y,l)})(M))},cleanUpMove:h}};var at=it({props:{type:{type:String,default:"default"}}});const $t={class:"mosha__icon"},jt={key:0,xmlns:"http://www.w3.org/2000/svg",height:"32px",viewBox:"0 0 24 24",width:"32px",fill:"#ffffff"},Ht=c("path",{d:"M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"},null,-1),zt={key:1,xmlns:"http://www.w3.org/2000/svg",height:"32px",viewBox:"0 0 24 24",width:"32px",fill:"#ffffff"},St=c("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"},null,-1),Vt={key:2,xmlns:"http://www.w3.org/2000/svg",height:"32px",viewBox:"0 0 24 24",width:"32px",fill:"#ffffff"},Dt=c("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),At=c("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"},null,-1),Nt={key:3,xmlns:"http://www.w3.org/2000/svg",height:"32px",viewBox:"0 0 24 24",width:"32px",fill:"#616161"},Ot=c("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),Pt=c("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"},null,-1),Wt={key:4,xmlns:"http://www.w3.org/2000/svg",height:"32px",viewBox:"0 0 24 24",width:"32px",fill:"#ffffff"},Rt=c("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),qt=c("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"},null,-1);at.render=function(t,e,o,n,a,i){return d(),x("span",$t,[t.type==="warning"?(d(),x("svg",jt,[Ht])):t.type==="danger"?(d(),x("svg",zt,[St])):t.type==="success"?(d(),x("svg",Vt,[Dt,At])):t.type==="default"?(d(),x("svg",Nt,[Ot,Pt])):(d(),x("svg",Wt,[Rt,qt]))])};var S=it({name:"MToast",components:{MIcon:at},props:{visible:Boolean,text:{type:String,default:""},description:{type:String,default:""},toastBackgroundColor:{type:String,default:""},type:{type:String,default:"default"},onClose:{type:Function,default:()=>null},onCloseHandler:{type:Function,required:!0},offset:{type:Number,required:!0},id:{type:Number,required:!0},timeout:{type:Number,default:5e3},position:{type:String,required:!0},showCloseButton:{type:Boolean,default:!0},swipeClose:{type:Boolean,default:!0},hideProgressBar:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},transition:{type:String,default:"bounce"}},setup(t,e){const o=w(),{width:n}=(()=>{const g=w(-1),b=w(-1),f=v=>{v!==null&&v.currentTarget!==null&&(g.value=v.currentTarget.innerWidth,b.value=v.currentTarget.innerHeight)};return O(()=>{window.innerWidth>0&&(g.value=window.innerWidth,b.value=window.innerHeight),window.addEventListener("resize",et(f))}),U(()=>{window.removeEventListener("resize",et(f))}),{width:g,height:b}})(),{swipedDiff:a,startSwipeHandler:i,swipeStyle:r,cleanUpMove:l}=Bt(t.position,t.onCloseHandler,t.swipeClose),{transitionType:h}=(m=t.position,M=t.transition,_=a,{transitionType:z(()=>_.value>200?"mosha__fadeOutLeft":_.value<-200?"mosha__fadeOutRight":Lt[m][M])});var m,M,_;const{start:y,stop:L,progress:B}=((g,b)=>{const f=w(),v=w(0),$=w(b),N=w(),Y=w(100),G=()=>{clearInterval(N.value),clearTimeout(f.value)};return O(()=>{}),U(()=>{G()}),{start:()=>{v.value=Date.now(),clearTimeout(f.value),N.value=setInterval(()=>{Y.value--},b/100-5),f.value=setTimeout(g,$.value)},stop:()=>{clearInterval(N.value),clearTimeout(f.value),$.value-=Date.now()-v.value},clear:G,progress:Y}})(()=>{t.onCloseHandler()},t.timeout),D=z(()=>e.slots.default),lt=z(()=>/<\/?[a-z][\s\S]*>/i.test(t.description)),A=()=>{t.timeout>0&&y()};return ut(()=>{const{customStyle:g}=((b,f,v)=>{const $=z(()=>{switch(b){case"top-left":return{left:"0",top:`${f}px`};case"bottom-left":return{left:"0",bottom:`${f}px`};case"bottom-right":return{right:"0",bottom:`${f}px`};case"top-center":return{top:`${f}px`,left:"0",right:"0",marginRight:"auto",marginLeft:"auto"};case"bottom-center":return{bottom:`${f}px`,left:"0",right:"0",marginRight:"auto",marginLeft:"auto"};default:return{right:"0",top:`${f}px`}}});return v.length>0&&($.value.backgroundColor=v),{customStyle:$}})(t.position,t.offset,t.toastBackgroundColor);o.value=g.value}),O(()=>{A()}),{style:o,transitionType:h,startTimer:A,progress:B,onTouchStart:g=>{i(g)},onMouseLeave:()=>{l("mousemove"),A()},onMouseDown:g=>{i(g)},swipeStyle:r,isSlotPassed:D,isDescriptionHtml:lt,onMouseEnter:()=>{t.timeout>0&&n.value>425&&L()}}}});const Ft={class:"mosha__toast__content-wrapper"},Ut={class:"mosha__toast__content"},Zt={class:"mosha__toast__content__text"},Xt={key:1,class:"mosha__toast__content__description"},Kt={key:0,class:"mosha__toast__slot-wrapper"};S.render=function(t,e,o,n,a,i){const r=F("MIcon");return d(),x(st,{name:t.transitionType,type:"animation"},{default:ot(()=>[t.visible?(d(),x("div",{key:0,class:["mosha__toast",t.toastBackgroundColor?null:t.type],style:[t.style,t.swipeStyle],onMouseenter:e[2]||(e[2]=(...l)=>t.onMouseEnter&&t.onMouseEnter(...l)),onMouseleave:e[3]||(e[3]=(...l)=>t.onMouseLeave&&t.onMouseLeave(...l)),onTouchstartPassive:e[4]||(e[4]=(...l)=>t.onTouchStart&&t.onTouchStart(...l)),onMousedown:e[5]||(e[5]=(...l)=>t.onMouseDown&&t.onMouseDown(...l))},[c("div",Ft,[t.showIcon?(d(),x(r,{key:0,type:t.type},null,8,["type"])):p("",!0),c("div",Ut,[c("div",Zt,C(t.text),1),t.description.length>0&&t.isDescriptionHtml?(d(),x("div",{key:0,class:"mosha__toast__content__description",innerHTML:t.description},null,8,["innerHTML"])):p("",!0),t.description.length>0&&!t.isDescriptionHtml?(d(),x("div",Xt,C(t.description),1)):p("",!0)])]),t.isSlotPassed?(d(),x("div",Kt,[ht(t.$slots,"default")])):p("",!0),t.showCloseButton?(d(),x("div",{key:1,class:"mosha__toast__close-icon",onClick:e[1]||(e[1]=(...l)=>t.onCloseHandler&&t.onCloseHandler(...l))})):p("",!0),t.hideProgressBar?p("",!0):(d(),x("div",{key:2,class:"mosha__toast__progress",style:{width:`${t.progress}%`}},null,4))],38)):p("",!0)]),_:3},8,["name"])};const V={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[],"top-center":[],"bottom-center":[]};let Yt=0;const Gt=(t,e)=>{const o=Yt++,n=e?Jt(e):j;if(t.__v_isVNode)return R(o,I.VNODE,n,t),{close:()=>E(o,n.position)};if(t.hasOwnProperty("render"))return R(o,I.COMPONENT,n,t),{close:()=>E(o,n.position)};const a=Qt(t);return R(o,I.TITLE_DESCRIPTION,n,a),{close:()=>E(o,n.position)}},R=(t,e,o,n)=>{setTimeout(()=>{const a=te(o,V,12),i=document.createElement("div");let r;document.body.appendChild(i),r=e===I.VNODE?c(S,q(o,t,a,E),()=>[n]):e===I.TITLE_DESCRIPTION?c(S,q(o,t,a,E,n)):c(S,q(o,t,a,E),()=>[c(n)]),nt(r,i),V[o.position].push({toastVNode:r,container:i}),r.component&&(r.component.props.visible=!0)},1)},q=(t,e,o,n,a)=>K(k(k({},t),a),{id:e,offset:o,visible:!1,onCloseHandler:()=>{n(e,t.position?t.position:"top-right")}}),Jt=t=>{const e=K(k({},t),{type:t.type||j.type,timeout:t.timeout||j.timeout,showCloseButton:t.showCloseButton,position:t.position||j.position,showIcon:t.showIcon,swipeClose:t.swipeClose,transition:t.transition||j.transition});return e.hideProgressBar=e.timeout!==void 0&&e.timeout<=0,t.hideProgressBar!==void 0&&(e.hideProgressBar=t.hideProgressBar),e},Qt=t=>({text:typeof t=="string"?t:t.title,description:typeof t=="string"?void 0:t.description}),te=(t,e,o)=>{let n=o;if(!t.position)throw new Error("no position");return e[t.position].forEach(({toastVNode:a})=>{const i=a.el.offsetHeight+o;n+=i||0}),n},E=(t,e)=>{const o=V[e],n=o.findIndex(({toastVNode:l})=>l.props&&t===l.props.id);if(n===-1)return;const{container:a,toastVNode:i}=o[n];if(!i.el)return;const r=i.el.offsetHeight;V[e].splice(n,1),((l,h,m,M)=>{for(let _=l;_<h.length;_++){const{toastVNode:y}=h[_];if(!y.el)return;const L=m.split("-")[0]||"top",B=parseInt(y.el.style[L],10)-M-12;if(!y.component)return;y.component.props.offset=B}})(n,o,e,r),i.component&&(i.component.props.visible=!1,i.component.props.onClose&&i.component.props.onClose(),setTimeout(()=>{nt(null,a),document.body.removeChild(a)},1e3))};const ee={props:{darkMode:Boolean,todoItem:Object},data:()=>({todoMenu:!1,editToggle:!1,isChecked:!1,showError:!1}),mounted(){this.$nextTick(()=>{this.dotAnim=W.timeline({paused:!0,defaults:{duration:.1}}).to(this.$refs.dot_bottom_left,{cx:14,opacity:0}).to(this.$refs.dot_bottom_right,{cx:14,opacity:0},0).to(this.$refs.dot_bottom_left,{cx:22,cy:22,opacity:1},.2).to(this.$refs.dot_bottom_right,{cx:6,cy:6,opacity:1},.2).to(this.$refs.dot_top_left,{cx:22,cy:6,opacity:1},.2).to(this.$refs.dot_top_right,{cx:6,cy:22,opacity:1},.2).reverse(),this.todoMenuAnim=W.timeline({paused:!0,defaults:{duration:.2}}).to(this.$refs.todoMenu,{direction:"rtl",width:"100%"}).to(this.$refs.todoMenu_button1,{display:"flex"},.2).to(this.$refs.todoMenu_icon1,{opacity:1},.2).to(this.$refs.todoMenu_title1,{opacity:1},.2).to(this.$refs.todoMenu_button2,{display:"flex"},.2).to(this.$refs.todoMenu_icon2,{opacity:1},.2).to(this.$refs.todoMenu_title2,{opacity:1},.2).reverse(),this.editAnim=W.timeline({paused:!0,defaults:{duration:.1}}).set(this.$refs.todoMenu,{maxHeight:"calc(100% - 40px)"}).to(this.$refs.editMenu,{display:"flex"}).to(this.$refs.editMenu_input,{opacity:1},.1).to(this.$refs.editMenu_button,{opacity:1},.1).reverse()})},updated(){if(this.editToggle){const t=document.querySelector("input[type=text].editInput"),e=document.getElementById("mobileMenu"),o=document.getElementById("modeToggle");t.onfocus=function(){window.scrollTo(0,0),document.body.scrollTop=0,e.style.position="absolute",e.style.top="0px",e.style.left="0px",o.style.position="absolute",o.style.top="30px",o.style.right="30px"}}},methods:{updateItemText:function(t){return this.newTodoItem=t.currentTarget.value,this.showError=!1,t.keyCode==13&&(t.currentTarget.value!==""?(this.$store.commit("updateTodoTitle",{id:t.currentTarget.getAttribute("data-id"),name:this.newTodoItem}),this.todoMenu=!1,this.editToggle=!1,this.showError=!1,this.editAnim.reverse(),this.dotAnim.reverse(),this.todoMenuAnim.reverse()):this.toast()),!1},updateTitle:function(t){document.querySelector("input[type=text].editInput").value!==""?(this.$store.commit("updateTodoTitle",{id:t.currentTarget.getAttribute("data-id"),name:this.newTodoItem}),this.showError=!1,this.editAnim.reverse(),this.dotAnim.reverse(),this.todoMenuAnim.reverse()):this.toast()},updateTodo:function(t){let e=t.currentTarget.parentElement.getAttribute("data-status")!="true";this.$store.commit("updateTodo",{id:t.currentTarget.getAttribute("data-id"),completed:e})},deleteItem:function(t){this.$store.commit("deleteTodo",{id:t.currentTarget.getAttribute("data-id")})},menuAnimation(){this.editAnim.reverse(),this.dotAnim.reversed(!this.dotAnim.reversed()),this.todoMenuAnim.reversed(!this.todoMenuAnim.reversed()),this.todoMenu=!this.todoMenu,this.editToggle=!1},editMenuAnim(){this.editToggle=!this.editToggle,this.editAnim.reversed(!this.editAnim.reversed())},toast(){Gt({title:"Fehler",description:"Das Feld darf nicht leer sein!"},{swipeClose:!1,showCloseButton:!0,timeout:2e3,type:"danger",transition:"bounce",position:"bottom-right"})}},setup(){return{todos:X().getters.todos}}},oe={key:0,ref:"todoItem_background",class:"relative flex flex-wrap justify-between items-center bg-light-panel dark:bg-dark-panel rounded-[10px] h-fit w-full"},se={class:"flex flex-grow flex-row w-full"},ie=["data-status"],ne=["data-id","id","checked"],re=s("div",{class:"bg-light-panel dark:bg-dark-panel border-2 rounded-[50%] border-light-primary dark:border-dark-primary w-[25px] h-[25px] flex flex-shrink-0 justify-center items-center"},[s("svg",{class:"stroke-light-panel hidden pointer-events-none",width:"10",height:"9",viewBox:"0 0 10 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M1 5.49539L2.68 7.7495C2.73669 7.82637 2.80933 7.88883 2.89246 7.93221C2.97559 7.97559 3.06706 7.99875 3.16 7.99996C3.25144 8.00106 3.34197 7.98088 3.425 7.94089C3.50803 7.9009 3.58148 7.8421 3.64 7.76877L9 1","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),de={class:"w-full max-w-full mr-[20px] min-h-full flex flex-col justify-between py-[10px] z-10"},ae=["data-id"],le=["data-id"],he={class:"flex flex-row justify-between max-w-[200px]"},ue={class:"flex flex-row gap-[5px] items-center"},ce=H('<svg class="stroke-light-text-38 dark:stroke-dark-text-60" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07143 3.14286C1.78727 3.14286 1.51475 3.25574 1.31381 3.45667C1.11288 3.65761 1 3.93013 1 4.21429V13.8571C1 14.1413 1.11288 14.4138 1.31381 14.6148C1.51475 14.8157 1.78727 14.9286 2.07143 14.9286H13.8571C14.1413 14.9286 14.4138 14.8157 14.6148 14.6148C14.8157 14.4138 14.9286 14.1413 14.9286 13.8571V4.21429C14.9286 3.93013 14.8157 3.65761 14.6148 3.45667C14.4138 3.25574 14.1413 3.14286 13.8571 3.14286H11.7143" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.21429 1V5.28571" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.7143 1V5.28571" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.21429 3.14286H9.57143" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.6429 9.03571H5.28571" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.96429 6.35714V11.7143" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',1),pe={class:"text-[13px] font-medium text-light-text-38 dark:text-dark-text-60 leading-none"},me={class:"flex flex-row gap-[5px] items-center"},xe=s("svg",{class:"stroke-light-text-38 dark:stroke-dark-text-60",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M7.96429 14.9286C11.8106 14.9286 14.9286 11.8106 14.9286 7.96429C14.9286 4.11802 11.8106 1 7.96429 1C4.11802 1 1 4.11802 1 7.96429C1 11.8106 4.11802 14.9286 7.96429 14.9286Z","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M7.96429 5.28571V7.96428L10.6857 11.1357","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),fe={class:"text-[13px] font-medium text-light-text-38 dark:text-dark-text-60 leading-none"},ge={class:"z-20"},we={class:"stroke-light-text dark:stroke-dark-panel",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ve={ref:"dot_bottom_right",cx:"4",cy:"14",r:"3.1","stroke-width":"1.8"},ke={ref:"dot_top_right",class:"opacity-0",cx:"14",cy:"14",r:"3.1","stroke-width":"1.8"},_e={ref:"dot_center",cx:"14",cy:"14",r:"3.1","stroke-width":"1.8"},ye={ref:"dot_top_left",class:"opacity-0",cx:"14",cy:"14",r:"3.1","stroke-width":"1.8"},be={ref:"dot_bottom_left",cx:"24",cy:"14",r:"3.1","stroke-width":"1.8"},Te={ref:"todoMenu",class:"menu-direction absolute h-full max-w-[calc(100%-50px)] top-0 bottom-[40px] right-[50px] z-[15] rounded-[10px] flex flex-row"},Me={class:"w-full max-w-[50%] bg-light-warning dark:bg-dark-warning"},Ie={ref:"todoMenu_icon1",class:"opacity-0 stroke-dark-panel dark:stroke-light-text",width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ce=H('<path d="M14.8462 25H2.84615C2.35652 25 1.88695 24.8055 1.54073 24.4593C1.1945 24.1131 1 23.6435 1 23.1538V2.84615C1 2.35652 1.1945 1.88695 1.54073 1.54073C1.88695 1.1945 2.35652 1 2.84615 1H16.6923" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.4615 6.53846L22.2308 1L25 6.53846V22.2308C25 22.9652 24.7082 23.6696 24.1889 24.1889C23.6696 24.7082 22.9652 25 22.2308 25C21.4963 25 20.792 24.7082 20.2726 24.1889C19.7533 23.6696 19.4615 22.9652 19.4615 22.2308V6.53846Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.4615 17.6154H25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.53846 1V25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.1538 7.46153H14.8462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',5),Ee=[Ce],Le={ref:"todoMenu_title1",class:"opacity-0 text-dark-panel dark:text-light-text text-[15px] font-medium leading-none"},Be={class:"w-full max-w-[50%] bg-light-error dark:bg-dark-error rounded-[10px_0_0_10px]"},$e=["data-id"],je={ref:"todoMenu_icon2",class:"opacity-0 stroke-light-panel dark:stroke-text-dark-text",width:"26",height:"28",viewBox:"0 0 26 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},He=H('<path d="M1 7H25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7H22V25C22 25.5304 21.7893 26.0391 21.4142 26.4142C21.0391 26.7893 20.5304 27 20 27H6C5.46957 27 4.96086 26.7893 4.58579 26.4142C4.21071 26.0391 4 25.5304 4 25V7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 7V6C8 4.67392 8.52678 3.40215 9.46447 2.46447C10.4021 1.52678 11.6739 1 13 1C14.3261 1 15.5979 1.52678 16.5355 2.46447C17.4732 3.40215 18 4.67392 18 6V7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 11V22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 11V22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',5),ze=[He],Se={ref:"todoMenu_title2",class:"opacity-0 text-light-panel dark:text-dark-text text-[15px] font-medium leading-none"},Ve=s("div",{class:"h-0"},null,-1),De={ref:"editMenu",class:"hidden flex-grow w-full h-[40px] gap-[5px] items-center px-[5px]"},Ae=["data-id","id","value"],Ne=["data-id","id"];function Oe(t,e,o,n,a,i){return o.todoItem.location==t.$route.path?(d(),u("div",oe,[s("div",se,[s("div",{class:"relative px-[20px] flex items-center min-h-full z-10","data-status":o.todoItem.completed},[ct(s("input",{"data-id":o.todoItem.id,id:o.todoItem.id,onClick:e[0]||(e[0]=(...r)=>i.updateTodo&&i.updateTodo(...r)),checked:o.todoItem.completed,type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=r=>t.isChecked=r),class:"opacity-0 hover:cursor-pointer absolute top-0 left-0 h-full w-full"},null,8,ne),[[pt,t.isChecked]]),re],8,ie),s("div",de,[t.isChecked?p("",!0):(d(),u("div",{key:0,"data-id":o.todoItem.id,class:"mb-[20px] text-[16px] font-medium text-light-text dark:text-dark-text leading-none"},C(o.todoItem.name),9,ae)),t.isChecked?(d(),u("div",{key:1,"data-id":o.todoItem.id,class:"mb-[20px] text-[16px] font-medium text-light-success dark:text-dark-success leading-none line-through decoration-light-success dark:decoration-dark-success"},C(o.todoItem.name),9,le)):p("",!0),s("div",he,[s("div",ue,[ce,s("div",pe,C(o.todoItem.date),1)]),s("div",me,[xe,s("div",fe,C(o.todoItem.time),1)])])]),s("div",ge,[s("button",{onClick:e[2]||(e[2]=r=>i.menuAnimation()),class:"flex justify-center items-center bg-light-primary dark:bg-dark-primary w-[50px] min-h-full rounded-[0_10px_10px_0]"},[(d(),u("svg",we,[s("circle",ve,null,512),s("circle",ke,null,512),s("circle",_e,null,512),s("circle",ye,null,512),s("circle",be,null,512)]))]),s("div",Te,[s("div",Me,[s("button",{ref:"todoMenu_button1",onClick:e[3]||(e[3]=r=>i.editMenuAnim()),class:"hidden flex-col justify-center items-center gap-[2px] w-full h-full"},[(d(),u("svg",Ie,Ee,512)),s("div",Le,"Editieren",512)],512)]),s("div",Be,[s("button",{ref:"todoMenu_button2",onClick:e[4]||(e[4]=(...r)=>i.deleteItem&&i.deleteItem(...r)),"data-id":o.todoItem.id,class:"hidden flex-col justify-center items-center gap-[2px] w-full h-full"},[(d(),u("svg",je,ze,512)),s("div",Se,"Löschen",512)],8,$e)])],512)])]),Ve,s("div",De,[s("input",{ref:"editMenu_input","data-id":o.todoItem.id,id:o.todoItem.id,onKeyup:e[5]||(e[5]=(...r)=>i.updateItemText&&i.updateItemText(...r)),type:"text",class:"editInput opacity-0 h-[30px] w-full rounded-[10px] bg-light-background dark:bg-dark-background px-[10px] text-[16px] font-medium text-light-text dark:text-dark-text placeholder:text-light-text-38 placeholder:dark:text-dark-text-38",placeholder:"ToDo Titel editieren ...",value:o.todoItem.name},null,40,Ae),s("button",{ref:"editMenu_button","data-id":o.todoItem.id,id:o.todoItem.id,onClick:e[6]||(e[6]=(...r)=>i.updateTitle&&i.updateTitle(...r)),class:"opacity-0 text-[15px] font-medium text-light-text dark:text-dark-text px-[10px] h-[30px] rounded-[10px] bg-light-success dark:bg-dark-success"},"Speichern",8,Ne)],512)],512)):p("",!0)}const Pe=Z(ee,[["render",Oe]]),We={name:"AnimToDoList",components:{AnimModal:bt,AnimTodoListItem:Pe},props:{darkMode:Boolean},data:()=>({windowWidth:window.width,windowHeight:window.height,showModal:!1,newTodoItem:"",showErrorMessage:!1}),mounted(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.$nextTick(()=>{window.addEventListener("resize",this.onResize),window.addEventListener("load",this.setMaxHeight())})},beforeUnmount(){window.removeEventListener("resize",this.onResize),window.removeEventListener("load",this.setMaxHeight())},methods:{onResize(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.setMaxHeight()},setMaxHeight(){const t=document.getElementById("scroll-box-height"),e=.4;let o=this.windowHeight*e;t.style.maxHeight=o+"px"},updateItemText:function(t){return this.newTodoItem=t.currentTarget.value,this.showErrorMessage=!1,t.keyCode===13&&(t.currentTarget.value="",this.newItem()),!1},newItem:function(){const t=document.getElementById("add-input");this.newTodoItem!==""?(this.$store.commit("addTodo",{id:dt(),name:this.newTodoItem,completed:!1,location:this.$route.path}),this.newTodoItem="",t.value="",this.showErrorMessage=!1,this.$emit("close")):this.showErrorMessage=!0}},computed:{animTodoList:function(){return this.todos.filter(t=>t.location===this.$route.path)}},async setup(){const t=X();return{todos:await new Promise(o=>{setTimeout(()=>{o(t.getters.todos)},3e3)})}}},Re={class:"mt-[130px] desktop:mt-[50px] desktop:flex desktop:justify-center h-screen"},qe={key:0,class:"w-full h-fit"},Fe=s("div",{class:"text-light-text dark:text-dark-text"},[s("div",{class:"text-[55px] font-bold w-fit leading-10"},[rt(" Demo Seite "),s("div",{class:"mt-[15px] w-[30%] h-[4px] bg-light-primary dark:bg-dark-primary rounded-[5px]"})]),s("div",{class:"mt-[5px] text-[18px] font-medium leading-10"},"Variante: mit Animationen")],-1),Ue={class:"mt-[20px]"},Ze={class:"flex flex-row justify-between items-center"},Xe=s("div",{class:"text-[25px] font-bold text-light-text dark:text-dark-text"},"ToDo Liste",-1),Ke=s("svg",{class:"fill-light-text dark:fill-dark-text",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("rect",{x:"2.00002",y:"16.4",width:"32",height:"3.2",rx:"1.6"}),s("rect",{x:"16.4",y:"34",width:"32",height:"3.2",rx:"1.6",transform:"rotate(-90 16.4 34)"})],-1),Ye=[Ke],Ge={id:"scroll-box-height",class:"flex flex-col gap-[10px] mt-[20px] overflow-auto scroll-box"},Je={key:0,class:"flex-row mt-[10px] bg-light-warning-30 dark:bg-dark-warning-30 border-light-warning dark:border-dark-warning border-2 p-[10px] rounded-[10px] w-fit flex items-center gap-[10px]"},Qe=H('<svg class="stroke-light-text dark:stroke-dark-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6071 24.2143C19.0176 24.2143 24.2143 19.0176 24.2143 12.6071C24.2143 6.19669 19.0176 1 12.6071 1C6.19669 1 1 6.19669 1 12.6071C1 19.0176 6.19669 24.2143 12.6071 24.2143Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6071 12.6072V18.8572" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6071 9.03571C13.1003 9.03571 13.5 8.63597 13.5 8.14286C13.5 7.64975 13.1003 7.25 12.6071 7.25C12.114 7.25 11.7143 7.64975 11.7143 8.14286C11.7143 8.63597 12.114 9.03571 12.6071 9.03571Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="text-[15px] font-medium text-light-text dark:text-dark-text">Noch kein Eintrag hier verfügbar!</div>',2),to=[Qe],eo={key:1,class:"max-w-[1350px] w-[70%] flex flex-col gap-[20px] mb-[100px] h-screen"},oo=s("div",{class:"text-light-text dark:text-dark-text flex flex-row gap-[50px]"},[s("div",{class:"text-[70px] font-bold w-fit leading-10 flex flex-col justify-end"},[rt(" Demo Seite "),s("div",{class:"mt-[25px] w-[40%] h-[8px] bg-light-primary dark:bg-dark-primary rounded-[5px]"})]),s("div",{class:"mt-[5px] pb-[15px] text-[25px] font-medium leading-10 flex items-end"},"Variante: mit Animationen")],-1),so={class:"flex gap-[20px] w-full"},io={class:"min-w-[50%] h-fit max-w-[50%]"},no=s("div",{class:"text-[30px] font-bold text-light-text dark:text-dark-text"},"ToDo anlegen",-1),ro={ref:"addTodo",class:"flex gap-[10px] w-full"},ao={class:"flex flex-col flex-grow"},lo={key:0,class:"ml-[10px] text-[12px] text-light-error dark:text-dark-error"},ho={class:"min-w-[50%] max-w-[50%] mb-[50px]"},uo=s("div",{class:"text-[30px] font-bold text-light-text dark:text-dark-text"},"ToDo Liste",-1),co={id:"scroll-box-height",class:"flex flex-col gap-[10px] overflow-auto scroll-box"},po={key:0,class:"flex-row bg-light-warning-30 dark:bg-dark-warning-30 border-light-warning dark:border-dark-warning border-2 p-[10px] rounded-[10px] w-fit flex items-center gap-[10px]"},mo=H('<svg class="stroke-light-text dark:stroke-dark-text" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6071 24.2143C19.0176 24.2143 24.2143 19.0176 24.2143 12.6071C24.2143 6.19669 19.0176 1 12.6071 1C6.19669 1 1 6.19669 1 12.6071C1 19.0176 6.19669 24.2143 12.6071 24.2143Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6071 12.6072V18.8572" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6071 9.03571C13.1003 9.03571 13.5 8.63597 13.5 8.14286C13.5 7.64975 13.1003 7.25 12.6071 7.25C12.114 7.25 11.7143 7.64975 11.7143 8.14286C11.7143 8.63597 12.114 9.03571 12.6071 9.03571Z" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="text-[15px] font-medium text-light-text dark:text-dark-text">Noch kein Eintrag hier verfügbar!</div>',2),xo=[mo];function fo(t,e,o,n,a,i){const r=F("AnimTodoListItem"),l=F("AnimModal");return d(),u(P,null,[s("main",Re,[t.windowWidth<=1079?(d(),u("div",qe,[Fe,s("div",Ue,[s("div",Ze,[Xe,s("button",{onClick:e[0]||(e[0]=h=>t.showModal=!0),class:"absolute right-[30px] w-[48px] h-[48px] bg-light-success dark:bg-dark-success rounded-[10px] flex justify-center items-center"},Ye)]),s("div",Ge,[(d(!0),u(P,null,J(i.animTodoList,h=>(d(),u("div",{key:h.id},[c(r,{darkMode:o.darkMode,todoItem:h},null,8,["darkMode","todoItem"])]))),128)),i.animTodoList.length===0?(d(),u("div",Je,to)):p("",!0)])])])):p("",!0),t.windowWidth>=1080?(d(),u("div",eo,[oo,s("div",so,[s("div",io,[no,s("div",ro,[s("div",ao,[s("input",{onKeyup:e[1]||(e[1]=(...h)=>i.updateItemText&&i.updateItemText(...h)),type:"text",id:"add-input",class:"h-[35px] w-full rounded-[10px] bg-light-panel dark:bg-dark-panel px-[10px] text-[16px] font-medium text-light-text dark:text-dark-text placeholder:text-light-text-38 placeholder:dark:text-dark-text-60",placeholder:"Titel des ToDos eintragen ..."},null,32),t.showErrorMessage?(d(),u("div",lo,"Das Feld darf nicht leer sein!")):p("",!0)]),s("button",{onClick:e[2]||(e[2]=(...h)=>i.newItem&&i.newItem(...h)),class:"h-[35px] px-[15px] text-[16px] w-fit font-medium bg-light-primary text-light-text rounded-[10px] dark:bg-dark-primary dark:text-dark-background hover:bg-light-success dark:hover:bg-dark-success transition-colors duration-200"},"Hinzufügen")],512)]),s("div",ho,[uo,s("div",co,[(d(!0),u(P,null,J(i.animTodoList,h=>(d(),u("div",{key:h.id},[c(r,{darkMode:o.darkMode,todoItem:h},null,8,["darkMode","todoItem"])]))),128)),i.animTodoList.length===0?(d(),u("div",po,xo)):p("",!0)])])])])):p("",!0)]),c(l,{show:t.showModal,onClose:e[3]||(e[3]=h=>t.showModal=!1)},null,8,["show"])],64)}const ko=Z(We,[["render",fo]]);export{ko as default};