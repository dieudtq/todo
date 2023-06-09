<script lang="ts" setup>
const items = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Blog',
        link: '/blog'
    },
    {
        name: 'About',
        link: '/about'
    }
]

const props = withDefaults(
    defineProps<{
        navbarOpen: boolean;
    }>(),
    {
        navbarOpen: false,
    }
);
</script>

<template>
    <nav :class="props.navbarOpen ? 'hidden' : ''" id="navbarCollapse"
        class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none hidden">
        <ul class="block lg:flex">
            <li v-for="item in items">
                <NaviLink v-bind="item"/>
            </li>
        </ul>
    </nav>
</template>
