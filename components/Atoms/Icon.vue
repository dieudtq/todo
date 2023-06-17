<template>
    <span
        v-html="svgContent"
        class="svg-icon"
        v-bind="props"
        :title="title"
        v-svg
    />
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
defineOptions({
    name: "Icon",
    inheritAttrs: true,
});

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        default: "",
    },
    attributes: {
        type: Array as () => string[],
        default: ["width", "height", "color"],
    },
    width: {
        type: Number,
        default: 24,
    },
    height: {
        type: Number,
        default: 24,
    },
    color: {
        type: String,
        default: "currentColor",
    },
    title: {
        type: String,
        default: "",
    },
});

const svgContent = ref<string>("");
const title = ref<string>(props.title ? props.title : `Icon ${props.name}`);

const vSvg = {
    updated: (el: HTMLElement) => {
        if (el) {
            const svgChild = el.querySelector("svg");
            if (svgChild) {
                const { attributes } = props;

                for (const attribute of attributes) {
                    const attributeNode = el.getAttributeNode(attribute);
                    if (attributeNode) {
                        const { value } = attributeNode;
                        svgChild.setAttribute(attribute, value);
                        el.removeAttributeNode(attributeNode);
                    }
                }
            }
        }
    },
};

onBeforeMount(async () => {
    const iconsImport = import.meta.glob("assets/icons/**.svg", {
        eager: false,
        as: "raw",
    });

    try {
        svgContent.value = (await iconsImport[
            `/assets/icons/${props.name}.svg`
        ]()) as unknown as string;
    } catch (error) {
        svgContent.value = (await iconsImport[
            "/assets/icons/default.svg"
        ]()) as unknown as string;
        title.value = `[Error] Icon '${props.name}' doesn't exist, the default icon loader`;
        console.error(
            `[Error] Icon '${props.name}' doesn't exist in 'assets/icons', the default icon loader`
        );
    }
});
</script>

<style lang="scss" scoped>
.svg-icon ::v-deep {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
</style>
