<template>
  <div class="logs">
    logs go here
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logs',
  components: {}
});
</script>

<style lang="scss">
.logs {
  @include vacation-container;
  margin-top: 40px;
}
</style>