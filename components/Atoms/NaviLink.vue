<script lang="ts" setup>

interface Link {
    name: string;
    link?: string;
}

const props = withDefaults(
    defineProps<Link>(),
    {
        name: '',
        link: '/',
    }
);
</script>

<template>
    <NuxtLink :to="props.link" class="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex">
        {{ props.name }}
    </NuxtLink>
</template>
