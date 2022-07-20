
<template>
<button @click="login">点我</button>
</template>

<script lang="ts" setup name="Layout">
import {useRouter} from 'vue-router'
import Message from '../../components/message/index';
const router = useRouter()
const login = ()=>{
  router.push('/login')
  Message({type:'success', text:'登录成功',duration:1000})
}
</script>

<style lang="less" scoped></style>