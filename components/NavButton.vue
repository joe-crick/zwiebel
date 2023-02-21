<template>
  <div>
    <nuxt-link :to="to">
      <button :class="[buttonClass]">{{ text }}</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      default: 'button',
    },
  },
  computed: {
    buttonClass() {
      return this.class.split(' ');
    },
  },
};
</script>
