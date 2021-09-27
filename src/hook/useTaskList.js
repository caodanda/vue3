import {ref} from 'vue'
import {getContactList} from '@/api/index.js'

export function useTaskList(){
  let tableData = ref([])
  let totalNum = ref(0)
  // 把获取列表的方法暴露出去，后期直接调对应方法
  const getList = async (params)=>{
    const data = await getContactList(params)
    tableData.value = data.data.data.data
    totalNum.value = data.data.data.total
  }
  
  return{
    tableData,
    totalNum,
    getList,
  }

}