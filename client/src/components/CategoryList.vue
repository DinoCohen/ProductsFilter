<template>
  <div>
    <h1>Categories</h1>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search categories, items, or subitems..."
      class="search-bar"
    />

    <!-- Error handling -->
    <div v-if="error">
      <p class="error-message">{{ error.message }}</p>
      <p v-if="error.errorDetails">Details: {{ error.errorDetails }}</p>
    </div>

    <!-- No items found message -->
    <div v-if="!error && filteredCategories.length === 0">
      <p class="no-results-message">No items found</p>
    </div>

    <!-- Render categories if no error -->
    <div v-if="!error">
      <CategoryItem 
        v-for="category in filteredCategories" 
        :key="category.id" 
        :category="category" 
        :searchQuery="searchQuery"
      />
    </div>
  </div>
</template>

<script>

import { useCategoryStore } from '../common/stores/useCategoryStore';
import { storeToRefs } from 'pinia';
import CategoryItem from './CategoryItem.vue';

export default {
  components: {
    CategoryItem,
  },
  setup() {
    const categoryStore = useCategoryStore();
    const { fetchCategories, setSearchQuery } = categoryStore;
    const { filteredCategories, searchQuery, error } = storeToRefs(categoryStore);

    fetchCategories(); // Fetch categories when the component is mounted

    return {
      searchQuery,
      filteredCategories,
      error,
      setSearchQuery,
    };
  },
};
</script>

<style scoped>
.search-bar {
  padding: 8px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
}
</style>
