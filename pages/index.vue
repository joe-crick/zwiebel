<template>
  <Table :items="items" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "John", age: 30, gender: "Male" },
        { id: 2, name: "Jane", age: 25, gender: "Female" },
        { id: 3, name: "Bob", age: 40, gender: "Male" },
      ],
    };
  },
};
</script>
