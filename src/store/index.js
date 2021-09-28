import { createStore } from "vuex";
import { userInfo } from '@/api/index'
const store = createStore({
  state(){
    return{
      userInfo:''
    }
  },
  mutations:{
    setUserInfo(state,value){
      state.userInfo = value
    }

  },
  actions:{
    async handleUserInfo(context){
      const {data} = await userInfo()
      if(data.status === 0){
        context.commit('setUserInfo',data.data)
      }else{
        console.log('出错了')
      }  
    }
  },
  getters:{},
  modules:{},
  
})


export default store