<template>
  <div class="window">
    <div class="window-header">
      <div class="window-title">
        <slot name="title"></slot>
      </div>
      <div class="window-right-actions">
        <slot name="right-actions"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.window {
  border: #ddd solid 1px;
  .window-header {
    border-bottom: #ddd solid 1px;
    height: 50px;
    line-height: 50px;
    background: #f3f3f3;

    .window-title {
      float: left;
      font-size: 14px;
      margin-left: 20px;
      font-weight: 500;
    }

    .window-right-actions {
      float: right;
      margin-right: 20px;
    }
  }
}
</style>
