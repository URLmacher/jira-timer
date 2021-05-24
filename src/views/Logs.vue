<template>
  <div class="logs">
    logs go here
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import ApiService from '@/api/ApiService';

export default defineComponent({
  name: 'Logs',
  setup() {
    onMounted(async () => {
      const logs = await ApiService.getLogs();
      console.log(logs);
    });
  }
});
</script>

<style lang="scss">
.logs {
  @include vacation-container;
  margin-top: 40px;
}
</style>
