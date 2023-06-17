<template>
    <div v-if="navigationItem.children"
      :class="{ 'navigation-item': !navigationItem.children, 'navigation-parent': navigationItem.children, expanded: navigationItem.id === expandedParent }"
      @click="handleClick"
    >
      <slot></slot>
      <i :class="navigationItem.icon"></i>
      <span v-if="showLabels">{{ navigationItem.label }}</span>

      <div class="navigation-children" v-if="navigationItem.id === expandedParent">
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

    <nuxt-link v-else
      :to="navigationItem.route"
      :class="{ 'navigation-item': true, active: navigationItem.route === activeClass }"
    >
      <i :class="navigationItem.icon"></i>
      <span v-if="showLabels">{{ navigationItem.label }}</span>
    </nuxt-link>
</template>



<script lang="ts" setup>
import { PropType } from 'vue';

interface NavigationItem {
  id: number;
  icon: string;
  label: string;
  route?: string;
  children?: NavigationItem[];
}

const props = defineProps({
  navigationItem: {
    type: Object as PropType<NavigationItem>,
    required: true,
  },
  showLabels: {
    type: Boolean,
    required: true,
  },
  activeClass: {
    type: String,
    required: true,
  },
  expandedParent: {
    type: [Number, null] as PropType<number | null>,
    required: true,
  },
});

const emit = defineEmits(['toggleExpand']);

function handleClick() {
  if (props.navigationItem.children) {
    emit('toggleExpand', props.navigationItem.id);
  }
}

function toggleExpand() {
  emit('toggleExpand', props.navigationItem.id);
}
</script>
