<template>
  <ul class="log-list">
    <li
      v-for="log of logs"
      :key="log.id"
      class="log-list__list-item"
    >
      <p>
        {{ log.from }}
      </p>
      <p>
        {{ log.to }}
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ILog } from '@/describe/data.describe';

export default defineComponent({
  name: 'LogList',
  props: {
    logs: { type: Array as PropType<ILog[]>, required: true }
  }
});
</script>

<style scoped lang="scss">
.log-list {
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
