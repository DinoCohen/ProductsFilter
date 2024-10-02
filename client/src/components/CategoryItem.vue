<template>
  <div class="category-item">
    <h2 @click="toggleExpand">{{ category.name }}</h2>
    <div v-if="expanded">
      <MainItem
        v-for="item in category.items"
        :key="item.id"
        :item="item"
        :searchQuery="searchQuery"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'; 
import MainItem from './MainItem.vue';

/**
 * @typedef {import('../models').Category} Category
 */

export default {
  components: { MainItem },
  props: {
     /**
     * @type {Category}
     */
    category: {
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

    // Automatically expand category if there's a search query, collapse if it's cleared
    watch(() => props.searchQuery, (newQuery) => {
      if (newQuery) {
        expanded.value = true; // Expand if search query is present
      } else {
        expanded.value = false; // Collapse if search query is cleared
      }
    }, { immediate: true });

    return { expanded, toggleExpand };
  },
};
</script>

<style scoped>
.category-item h2 {
  cursor: pointer;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  transition: background-color 0.3s, box-shadow 0.3s;
}
.category-item h2:hover {
  background-color: #f0f8ff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
