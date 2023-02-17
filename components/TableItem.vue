<template>
  <tr :data-id="item.id">
    <td v-for="(key, index) in keys" :key="index">{{ item[key] }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    keys: {
      type: Array,
      required: true,
    },
  },
};
</script>
