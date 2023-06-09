<template>
  <div
    :class="{ 'navigation-item': !navigationItem.children, expanded: navigationItem.id === expandedParent }"
    @click="handleClick"
  >
    <i :class="navigationItem.icon"></i>
    <span v-if="showLabels">{{ navigationItem.label }}</span>
    <div class="navigation-children" v-if="navigationItem.children && navigationItem.id === expandedParent">
      <NavigationItem
        v-for="childItem in navigationItem.children"
        :key="childItem.id"
        :navigationItem="childItem"
        :showLabels="showLabels"
        :activeClass="activeClass"
        :expandedParent="expandedParent"
        @toggleExpand="toggleExpand"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface NavigationItem {
  id: number;
  icon: string;
  label: string;
  route?: string;
  children?: NavigationItem[];
}

const props = defineProps({
  navigationItem: {
    type: Object as () => NavigationItem,
    required: true,
  },
  showLabels: {
    type: Boolean,
    default: true,
  },
  activeClass: {
    type: String,
    default: 'active',
  },
  expandedParent: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(['toggleExpand']);

function handleClick() {
  if (props.navigationItem.children) {
    emit('toggleExpand', props.navigationItem.id);
  }
}
</script>

<style scoped>
.navigation-item {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.navigation-parent {
  position: relative;
}

.navigation-children {
  position: absolute;
  top: 100%;
  left: 100%;
  display: none;
}

.navigation-parent:hover .navigation-children {
  display: block;
}

.navigation-item i {
  margin-right: 8px;
}

.navigation-item span {
  margin-left: 8px;
}

.active {
  background-color: blue;
}

.expanded .navigation-children {
  display: block;
}
</style>
