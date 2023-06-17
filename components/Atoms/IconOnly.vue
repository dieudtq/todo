<script setup lang="ts">
const props = defineProps<{ name: string }>()
const icon = defineAsyncComponent(() => import(`~/assets/icons/${props.name}.svg`))
</script>

<template>
  <component :is="icon" v-bind="$attrs"/>
</template>
