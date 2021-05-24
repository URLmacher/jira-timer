<template>
  <div class="logs">
    <LogList :logs="logs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ApiService from '@/api/ApiService';
import LogList from '@/components/LogList.vue';
import { ILog } from '@/describe/data.describe';

export default defineComponent({
  name: 'Logs',
  components: { LogList },
  setup() {
    const logs = ref<ILog[]>([]);

    onMounted(async () => {
      logs.value = await ApiService.getLogs();
    });

    return { logs };
  }
});
</script>

<style lang="scss">
.logs {
  @include vacation-container;
  margin-top: 40px;
}
</style>
