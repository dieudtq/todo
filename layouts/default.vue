<script lang="ts">
export default {
    head() {
        return {
            title: 'Home page',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Home page description'
                }
            ]
        }
    }
}
</script>

<template>
    <div>
        <slot name="default"/>
    </div>
</template>

{# <LazyHeader /> #}
