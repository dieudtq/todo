<template>
    <button :class="classes">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
import { PropType, defineEmits } from 'vue';
const props = defineProps({
    color: {
        type: String as PropType<string>,
        default: 'primary'
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    }
});

const emits = defineEmits(['click']);

const classes = {
    button: true,
    'button--primary': props.color === 'primary',
    // 'button--disabled': props.disabled
};
</script>

<style lang="scss" scoped>
/* @import '@/assets/scss/variable.scss'; */
.button {
    padding: 0.8rem 3rem;
    border: none;
    border-radius: $border-radius;
    font-size: 1.6rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
    color: white;
    border-left: 1px solid $border-color;
    border-top: 1px solid $border-color;

    &:hover {
        background-position: right center;
    }
}

.button--primary {
    color: #ffffff;
    @include gradient-background();
}

.button--primary:hover {
    background-color: #0060c0;
}

.button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>
