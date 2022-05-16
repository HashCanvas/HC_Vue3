<template>
  <section >
    This is the alers subscription
    <br>
    this is the footer section
  </section>
</template>

<script>

export default {
  name: "GetTouchSection",
  data() {
    return {
      name: null,
      mail: null,
      message: null,
      errors: [],
      loading: false,
      isSending: false,
    };
  },
  mounted() {
    // TODO document why this method 'mounted' is empty
  }
};
</script>
