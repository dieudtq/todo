<template>
    <div class="window">
        <header>
            <slot name="header"></slot>
        </header>
        <div class="content">
            <div class="left-panel">
                <slot name="left-panel"></slot>
            </div>
            <div class="main-content">
                <slot></slot>
            </div>
        </div>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.window {
        margin: auto;
        margin-top: 300px;
        max-width: 75vw;
        max-height: 80vh;
        border-radius: $border-radius;
        overflow: hidden;
        @include glass-effect(0.31);

        .content {
            display: flex;

            .left-panel {
                width: 25%;
                min-width: 20rem;
                background: $panel-background;
                background-color: var(--panel-background);
                padding: 3rem;
                border-color: white;
                // border-radius: $border-radius 0 0 $border-radius;
            }
        }
    }


.ass-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    outline: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 32px;
}
</style>
