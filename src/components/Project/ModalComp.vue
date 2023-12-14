<template>
  <div v-if="isOpen" class="Modal_container" @click.stop>
    <div class="Modal_box">
      <button @click="onCloseClick" class="Modal_close_button">
        X
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    onClose: Function,
  },
  methods: {
    onCloseClick() {
      console.log("X 버튼 클릭됨");

      if (this.onClose) {
        this.onClose();
      }
    },
  },
};
</script>
<style scoped>
.Modal_container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.Modal_box {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 1000px;
}

.Modal_close_button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
