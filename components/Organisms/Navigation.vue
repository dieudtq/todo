<template>
    <div class="navigation-bar">
      <NavigationItem
        v-for="navigationItem in navigationItems"
        :key="navigationItem.id"
        :navigationItem="navigationItem"
        :showLabels="showLabels"
        :activeClass="activeClass"
        :expandedParent="expandedParent"
        @toggleExpand="toggleExpand"
      />
    </div>
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue';

  interface NavigationItem {
    id: number;
    icon: string;
    label: string;
    route?: string;
    children?: NavigationItem[];
  }

  const showLabels = ref(true); // Biến để điều khiển ẩn/hiện label
  const activeClass = 'active'; // Tên class cho navigation item đang active
  const expandedParent = ref(null as number | null); // Biến để lưu trạng thái mở rộng của parent

  const navigationItems: NavigationItem[] = [
    {
      id: 1,
      icon: 'icon-1',
      label: 'Parent 1',
      children: [
        { id: 11, icon: 'icon-11', label: 'Child 1-1', route: '/child1-1' },
        { id: 12, icon: 'icon-12', label: 'Child 1-2', route: '/child1-2' },
      ],
    },
    {
      id: 2,
      icon: 'icon-2',
      label: 'Parent 2',
      children: [
        { id: 21, icon: 'icon-21', label: 'Child 2-1', route: '/child2-1' },
        { id: 22, icon: 'icon-22', label: 'Child 2-2', route: '/' },
      ],
    },
    { id: 3, icon: 'icon-3', label: 'Parent 3', route: '/parent3' },
  ];

  function toggleExpand(parentId: number) {
    expandedParent.value = expandedParent.value === parentId ? null : parentId;
  }
  </script>

  <!-- <component :is="NavigationItem" v-for="navigationItem in navigationItems" :key="navigationItem.id" :navigationItem="navigationItem" :showLabels="showLabels" :activeClass="activeClass" :expandedParent="expandedParent" @toggleExpand="toggleExpand" /> -->
