<template>
    <span
        v-html="svgContent"
        v-bind="$attrs"
        :class="['svg-icon', props.class]"
        :style="composeStyle"
    />
</template>

<script lang="ts" setup>
import { computed, ref, onBeforeMount } from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        default: "",
    },
    // width: {
    //     type: String,
    //     default: "",
    // },
    // height: {
    //     type: String,
    //     default: "",
    // },
    // color: {
    //     type: String,
    //     default: "currentColor"
    // }
    attributes: {
        type: Array as () => string[],
        default: ["width", "height", "color"],
    },
});

const svgContent = ref<string>("");

const vSvg = {
    updated: async (el: HTMLElement) => {
        if (!el) {
            return;
        }
        const svgChild = el.querySelector("svg");
        if (svgChild) {
            // [...el.attributes].forEach((attr) =>
            //     svgChild.setAttribute(attr.name, attr.value)
            // );
            props.attributes.forEach((attribute) => {
                if (el.hasAttribute(attribute)) {
                    svgChild.setAttribute(attribute, el.getAttribute(attribute));
                    el.removeAttribute(attribute);
                }
            });
        }
        await nextTick();
        // if (el.tagName === 'TEMPLATE') {
        //   el.replaceWith(content)
        // } else {
        //   el.replaceWith(...content.children)
        // };
    },
};

const composeStyle = computed(() => {
    return {
        "--width": props.width,
        "--height": props.height,
        "--color": props.color,
    };
});

onBeforeMount(async () => {
    try {
        const iconsImport = import.meta.glob("assets/icons/**.svg", {
            eager: false,
            as: "raw",
        });
        const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
        svgContent.value = rawIcon as unknown as string;
    } catch (error) {
        console.error(
            `[Error] Icon '${props.name}' doesn't exist in 'assets/icons'`
        );
    }
});
</script>

<style lang="scss" scoped>
.svg-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 30px;
        height: var(--height) !important;
        color: var(--color) !important;
    }
}
</style>
