import {  reactive ,ref } from 'vue'
import {login} from '../api/index'
import { useRouter, useRoute } from 'vue-router'
import {setCookie} from '../utils/cookie'
import { useStore } from 'vuex'


export default function (){
  const store = useStore()
  const router = useRouter()
  const route = useRoute()
  const token = ref('')
  let loginForm = reactive({
    account:'',
    pwd:''
  })
  let loginRules = {
    account:[
      { required: true,message: "请输入登录账号", trigger: "blur" },
    ],
    pwd: [
      {required: true, message: '请输入密码', trigger: 'blur'},
      {min:6,max:16,message: "密码最少6位，最多16位", trigger: "blur"}
    ],
  }
  const loginFormRef = ref(null)
  const submit = ()=>{
    loginFormRef.value.validate(async (valid)=>{
      if(valid){
        let headers = {'Content-Type':'application/x-www-form-urlencoded'}
        let paramsObj ={
          mobile:loginForm.account,
          password:loginForm.pwd
        }
        const res = await login(paramsObj,headers)
        token.value = res.data.data.token
        setCookie('token',token.value)
        await store.dispatch("handleUserInfo")
        if(route.query.redirect){
          console.log(token.value,route.query.redirect)
          router.push(route.query.redirect)
        }else{
          router.push('/index')
        }
      }else{
        console.log('err')
      }
    })
  }
  return{
    loginForm,
    loginRules,
    loginFormRef,
    submit,
    token,
  }
}