<template>
  <div class="tasks">
    <TaskLogForm
      v-if="selectedTask"
      :task="selectedTask"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ApiService from '@/api/ApiService';
import TaskLogForm from '@/components/TaskLogForm.vue';
import { ITask } from '@/describe/data.describe';
import { useRoute } from 'vue-router';
import VueHelper from '@/helpers/VueHelper';

export default defineComponent({
  name: 'Task',
  components: { TaskLogForm },
  setup() {
    const selectedTask = ref<ITask | null>(null);
    const route = useRoute();

    onMounted(async () => {
      const id = VueHelper.getIdFromRoute(route);
      if (id) {
        selectedTask.value = await ApiService.getTask(id);
      }
    });

    return { selectedTask };
  }
});
</script>

<style lang="scss">
.tasks {
  @include vacation-container;
  margin-top: 40px;
}
</style>
