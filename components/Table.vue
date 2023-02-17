<template>
  <table class="table is-bordered is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th v-for="header in tableHeaders" :key="header">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <TableItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        :keys="keys"
      />
    </tbody>
  </table>
</template>

<script>
import { title } from "to-case";
import { first, empty$, filter, notEq } from "ljsp-core";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const keys = ref(empty$(props.items) ? [] : filter((key) => notEq(key, "id"),  Object.keys(first(props.items))))

    // expose to template and other options API hooks
    return {
      keys
    }
  },
  computed: {
    // keys() {
    //   return empty$(this.items) ? [] : filter((key) => notEq(key, "id"),  Object.keys(first(this.items)));
    // },
    tableHeaders () {
        if (empty$(this.items)) {
        return [];
      }
      const itemKeys = this.keys;
      const titleCase = (str) => {
        return str
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
          .replace(/^[a-z]/i, (char) => char.toUpperCase());
      };
      return itemKeys.map((key) => title(key));
    }
  },
};
</script>
