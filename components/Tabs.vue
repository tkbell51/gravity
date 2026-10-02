<template>
  <div>
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :class="{ tab__selected: index == selectedIndex }"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      registerTab: (tab) => this.tabs.push(tab),
      selectedTab: () => this.tabs[this.selectedIndex],
    }
  },
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
    }
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i
    },
  },
}
</script>

<style lang="scss" scoped></style>
