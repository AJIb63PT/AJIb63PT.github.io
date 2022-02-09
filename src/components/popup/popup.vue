<template>
  <div class="popup_wrapper">
    <div class="popup">
      <div class="popup__header">
        <span> {{ Popuptitle }}</span>
      </div>
      <div class="popup__content">
        <slot> </slot>
      </div>
      <div class="popup__footer">
        <button @click="leftbtnAction">
          <img src="../icons/cartBuy.svg" alt="Купить" />
        </button>
        <button @click="closepopup">
          <img src="../icons/close.svg" alt="Закрыть" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "popup",
  data() {
    return {};
  },
  methods: {
    closepopup() {
      this.$emit("closepopup");
    },
    leftbtnAction() {
      this.$emit("leftbtnAction");
    },
  },
  props: {
    leftbttitle: {
      type: String,
      default: "popup name",
    },
    Popuptitle: {
      type: String,
      default: "ok",
    },
  },
};
</script>
<style>
.popup_wrapper {
  background: rgba(10, 10, 10, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.popup {
  padding: 16px;
  position: fixed;
  top: 150px;
  z-index: 4;
  width: 400px;
  background: rgb(255, 255, 255);
}
.popup__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.popup__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.popup__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
