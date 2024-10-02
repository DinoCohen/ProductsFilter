// src/stores/useCategoryStore.js
import { defineStore } from 'pinia';
import DataService from '../../services/DataService';  // Assuming your DataService is here

/**
 * @typedef {import('../models').Category} Category
 */

export const useCategoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: /** @type {Category[]} */ ([]),
    searchQuery: '',
    error: null,
  }),
  actions: {
    async fetchCategories() {
      try {
        const data = await DataService.getData();
        this.categories = data;
      } catch (err) {
        this.error = err;
      }
    },
    setSearchQuery(query) {
      this.searchQuery = query;
    },
    clearSearchQuery() {
      this.searchQuery = '';
    },
  },
  getters: {
    filteredCategories(state) {
      if (!state.searchQuery) return state.categories;

      return state.categories.map((category) => {
        const matchingItems = category.items.map((item) => {
          const matchingSubItems = item.subitems?.filter((subitem) =>
            subitem.name.toLowerCase().includes(state.searchQuery.toLowerCase())
          );

          if (
            item.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            (matchingSubItems && matchingSubItems.length > 0)
          ) {
            return {
              ...item,
              subitems: matchingSubItems?.length ? matchingSubItems : item.subitems,
            };
          }

          return null;
        }).filter(Boolean);

        if (
          category.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          matchingItems.length > 0
        ) {
          return {
            ...category,
            items: matchingItems,
          };
        }

        return null;
      }).filter(Boolean);
    },
  },
});
