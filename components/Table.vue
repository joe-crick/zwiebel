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
        :base-url="baseUrl"
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
    baseUrl: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const keys = ref(
      empty$(props.items)
        ? []
        : filter((key) => notEq(key, "id"), Object.keys(first(props.items)))
    );

    return {
      keys,
    };
  },
  computed: {
    tableHeaders() {
      return this.keys.map((key) => title(key));
    },
  },
};
</script>
