<template>
  <div class="subitem">
    <p>{{ subitem.name }} - {{ subitem.details }}</p>
  </div>
</template>

<script>
/**
 * @typedef {import('../models').SubItem} SubItem
 */

export default {
  name: 'SubItem',
  props: {
    /**
     * @type {SubItem}
     */
    subitem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.subitem {
  margin-left: 20px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
