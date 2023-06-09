<template>
    <label :for="name" v-if="label">
        <slot name="label">{{ label }}</slot>
    </label>
    <input :type="props.type" :name="props.name" :id="props.name" :value="props.modelValue" v-bind="$attrs"
        :class="classObject" @input="clearError"/>
    <p v-if="error" class="error-message">{{ errorMessage }}</p>
</template>

<script lang="ts" setup>
import { defineProps, computed, ref } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    type: {
        type: String as () => 'text' | 'number' | 'textarea' | 'email' | 'password',
        default: 'text',
        validator: (value: string) => {
            return ['text', 'number', 'textarea', 'password'].indexOf(value) !== -1;
        },
    },
    name: {
        type: String,
        // default: 'input',
        required: true,
    },
    modelValue: {
        type: String,
        default: '',
    },
    error: {
        type: Object,
        default: null
    },
});

const error = ref(props.error);

const classObject = computed(() => {
    return {
        'form-control': true,
        'danger': error.value,
    };
});

const errorMessage = computed(() => {
  if (props.error && props.error.code) {
    const errorMessages: Record<string, string> = {
      'error-code-1': 'Thông báo lỗi 1',
      'error-code-2': 'Thông báo lỗi 2',
    };

    if (props.error.code in errorMessages) {
      return errorMessages[props.error.code];
    }
  }

  return 'Lỗi không xác định';
});

const clearError = () => {
    error.value = null;
};

</script>


<style lang="scss" scoped>
input {
    width: 100%;
    border-radius: $border-radius;
    padding: 0.8rem 1.5rem;
    font-size: 1.6rem;
    margin: 0.8rem 0;
    color: var(--text-color);
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(31, 38, 135, 0.1);
    @include glass-effect(0.1);

    &.form-control {
        @include glass-hover(0.1);
    }

    &.outline {
        background: transparent;
        border: transparent;
    }

    &+.error-message {
        color: $danger-color;
        margin-bottom: 1rem;
    }

    &.danger {
        color: $danger-color;
        border: $border-width solid $danger-color;

        &:focus-visible {
            // border-color: $danger-color;
            outline: $outline-width solid lighten($danger-color, 35%);
        }
    }
}

label {
    font-size: 1.6rem;
    color: var(--text-color);
}

.error-message {
    font-size: 1.4rem;
}
</style>
