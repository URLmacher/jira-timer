<template>
  <div class="tasks">
    <TaskList :tasks="tasks" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ApiService from '@/api/ApiService';
import TaskList from '@/components/TaskList.vue';
import { ITask } from '@/describe/data.describe';

export default defineComponent({
  name: 'Tasks',
  components: { TaskList },
  setup() {
    const tasks = ref<ITask[]>([]);

    onMounted(async () => {
      tasks.value = await ApiService.getTasks();
    });

    return { tasks };
  }
});
</script>

<style lang="scss">
.tasks {
  @include vacation-container;
  margin-top: 40px;
}
</style>
