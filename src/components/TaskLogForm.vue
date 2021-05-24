<template>
  <div class="task-log-form">
    <p @click="openLink(task.link)">
      {{ task.title }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ITask } from '@/describe/data.describe';

export default defineComponent({
  name: 'TaskLogForm',
  props: {
    task: { type: Object as PropType<ITask>, required: true }
  },
  setup() {
    const openLink = (url: string): void => {
      window.open(url, '_blank');
    };

    return {
      openLink
    };
  }
});
</script>

<style scoped lang="scss">
.task-log-form {
  @include glass-container;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: 200px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: var(--content-spacing);
}
</style>
