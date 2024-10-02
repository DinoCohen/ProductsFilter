<template>
  <div class="main-item">
    <h3 @click="toggleExpand">{{ item.name }}</h3>
    <div v-if="expanded">
      <p>{{ item.details }}</p>

      <!-- Render subitems if they exist -->
      <div v-if="item.subitems && item.subitems.length > 0">
        <h4>Subitems:</h4>
        <SubItem
          v-for="subitem in item.subitems"
          :key="subitem.id"
          :subitem="subitem"
        />
      </div>
    </div>
  </div>
</template>

<script>

import { ref, watch } from 'vue'; 
import SubItem from './SubItem.vue';

/**
 * @typedef {import('../models').Item} Item
 */

export default {
  components: {
    SubItem,
  },
  props: {
    /**
     * @type {Item}
     */
    item: {
      type: Object,
      required: true,
    },
    searchQuery: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const expanded = ref(false);

    const toggleExpand = () => {
      expanded.value = !expanded.value;
    };

    // Automatically expand the item if the search query matches any subitems
    watch(
      () => props.searchQuery,
      (newQuery) => {
        if (
          newQuery &&
          props.item.subitems &&
          props.item.subitems.some(subitem =>
            subitem.name.toLowerCase().includes(newQuery.toLowerCase())
          )
        ) {
          expanded.value = true; // Auto-expand if a subitem matches
        }
      },
      { immediate: true }
    );

    return {
      expanded,
      toggleExpand,
    };
  },
};
</script>

<style scoped>
.main-item h3 {
  cursor: pointer;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.main-item h3:hover {
  background-color: #f0f8ff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
