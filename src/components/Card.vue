<template>
  <p class="Card">
    <a v-if="url" :href="url">{{ title }}</a>
    <template v-else>{{ title }}</template>
    <br />
    <small
      >{{ description }}<br />
      <span class="Text-location">{{ location }}</span>
    </small>
  </p>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
};
</script>
