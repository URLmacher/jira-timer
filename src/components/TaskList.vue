<template>
  <ul class="task-list">
    <li
      v-for="task of tasks"
      :key="task.id"
      class="task-list__list-item"
      @click="goToTask(task.id)"
    >
      <p @click="openLink(task.link)">
        {{ task.title }}
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ITask } from '@/describe/data.describe';
import router from '@/router';

export default defineComponent({
  name: 'TaskList',
  props: {
    tasks: { type: Array as PropType<ITask[]>, required: true }
  },
  setup() {
    const openLink = (url: string): void => {
      window.open(url, '_blank');
    };

    const goToTask = (taskId: number): void => {
      router.push(`/task/${taskId}`);
    };

    return {
      openLink,
      goToTask
    };
  }
});
</script>

<style scoped lang="scss">
.task-list {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: var(--content-spacing);

  &__list-item {
    @include glass-container;
    transition: background-color 0.3s linear;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 16px;
    cursor: pointer;

    &:hover {
      background-color: var(--glass-alt);
    }
  }
}
</style>
