<script lang="ts" setup>
    const { id } = useRoute().params
    definePageMeta({
        layout: 'blog'
    })

</script>

<template>
    <p>Blog id {{ id }}</p>
</template>

<style lang="scss" scoped>
    
</style>
