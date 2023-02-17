<template>
  <tr :data-id="item.id">
    <template v-for="(key, index) in keys" :key="index">
      <td v-if="index === 0">
        <nuxt-link :to="`${baseUrl}/` + item.id">
          {{ item[key] }}
        </nuxt-link>
      </td>
      <td v-else>
        {{ item[key] }}
      </td>
    </template>
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
    baseUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
