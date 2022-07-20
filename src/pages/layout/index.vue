
<template>
<button @click="router.push('/login')">点我</button>
</template>

<script lang="ts" setup name="Layout">
import {useRouter} from 'vue-router'
const router = useRouter()
</script>

<style lang="less" scoped></style>