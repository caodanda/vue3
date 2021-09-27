<template>
  <p>沟通列表</p>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="院校">
      <el-input v-model="formInline.school_name" ></el-input>
    </el-form-item>
    <el-form-item label="沟通方式">
      <el-select v-model="formInline.contact_type">
        <el-option label="电话" :value="2"></el-option>
        <el-option label="微信" :value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button type="info" @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="tableData">
    <el-table-column prop="id" label="ID" width="100px" />
    <el-table-column prop="school_name" label="学校名称" width="200px"  />
    <el-table-column prop="contact_type_cn" label="沟通方式"  width="100px"  />
    <el-table-column prop="record" label="沟通详情" />
    <el-table-column label="操作" width="200px">
      <template #default>
        <el-button type="text" size="small" @click="handleTaskDetail">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block" >
    <el-pagination 
      :hide-on-single-page="page === 1"
      v-model:currentPage="page"
      layout="prev, pager, next" 
      :total="totalNum"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { defineComponent,onMounted,reactive,ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTaskList } from '@/hook/useTaskList.js'

export default defineComponent({
  setup() {
    const router = useRouter()
    const page = ref(1)
    const formInline = reactive({
      school_name:'',
      contact_type:null,
    })
    let {tableData,totalNum,getList} = useTaskList()

    onMounted(getList) //初始化列表

    // 分页改变
    const handleCurrentChange = ()=>{
      let params = {page:page.value}
      getList(params)
    }
    // 查询条件
    const onSubmit = ()=>{
      let params = {}
      if(formInline.school_name){
        params.school_name = formInline.school_name
      }
      if(formInline.contact_type){
        params.contact_type = formInline.contact_type
      }
      getList(params)
    }
    const reset = ()=>{
      formInline.school_name = ''
      formInline.contact_type = null
      getList()
    }

    const handleTaskDetail = ()=>{
      router.push('/taskDetail')
    }
    return{
      page,
      totalNum,
      tableData,
      formInline,
      handleCurrentChange,
      onSubmit,
      reset,
      handleTaskDetail
    }
  },
})
</script>

<style scoped>
.block{
  text-align: center;
  margin-top: 40px;
}


</style>
