//安裝導入 vuex 並匯入 createStore 方法，實現實現不同組件間共享狀態的工具
import { createStore } from 'vuex';



export default createStore({

    state(){
        return{
            isLogin: false
        }
    },

    mutations: {

       login(state){
        state.isLogin = true;
       },
       logout(state){
        state.isLogin = false;
       },

    }
});