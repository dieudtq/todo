<script lang="ts" setup>
definePageMeta({
    layout: 'default'
})

const inputError = {
        code: 'error-code-1', // Mã lỗi
        message: '' // Thông báo lỗi sẽ được tính toán dựa trên mã lỗi
      }
</script>
<template>
    <div>
        <Window>
            <template #left-panel>
                <Navigation/>
                <Input class="" :error="inputError" label="Tim kiem"></Input>
                <Button>ABC</Button>
            </template>
            <div>
                <Input class="outline" :error="inputError">ABC</Input>
                <Button>ABC</Button>
            </div>
        </Window>

    </div>
</template>

<style lang="scss" scoped>

</style>
