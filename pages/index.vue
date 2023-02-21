<template>
  <NavButton to="/ProblemDefinition" text="Problem Definition" class="button is-info mb-3"/>
  <Table :items="items" base-url="items" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, project: "Delivery Schedule", owner: "Patty" },
        { id: 2, project: "Fixes that Break", owner: "Ray" },
        { id: 3, project: "Tragedy of the Commons", owner: "Sam" },
      ],
    };
  },
};
</script>
