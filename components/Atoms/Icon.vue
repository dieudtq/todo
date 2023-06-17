<template>
    <span
        v-html="svgContent"
        v-bind="$attrs"
        :class="['svg-icon', props.class]"
        v-svg
    />
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";

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
});

const svgContent = ref<string>("");

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
        svgContent.value = await iconsImport[`/assets/icons/${props.name}.svg`]() as unknown as string;;
    } catch (error) {
        svgContent.value = await iconsImport["/assets/icons/default.svg"]() as unknown as string;;
        console.error(
            `[Error] Icon '${props.name}' doesn't exist in 'assets/icons', the default icon loader`
        );
    }
});
</script>

<style lang="scss" scoped>
.svg-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
</style>
