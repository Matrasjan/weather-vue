<template>
  <el-alert type="error" :title="message" show-icon />
</template>

<script setup lang="ts">
interface Props {
  message: string
}

const props = defineProps<Props>()
</script>
