<template>
  <div class="tasks">
    tasks go here
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tasks',
  components: {}
});
</script>

<style lang="scss">
.tasks {
  @include vacation-container;
  margin-top: 40px;
}
</style>
