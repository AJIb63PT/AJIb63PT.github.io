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
        <div class="flip">
          <div :class="backflip ? 'flip__body' : 'flip__bodyflip'">
            <div @click="leftbtnAction" v-if="backflip" class="flip__front">
              <img src="../icons/cartBuy.svg" alt="Купить" />
            </div>
            <div @click="leftbtnAction" v-if="!backflip" class="flip__back">
              <img src="../icons/cartBuy.svg" alt="Купить" />
            </div>
          </div>
        </div>

        <div class="flip">
          <div :class="backflipClose ? 'flip__body' : 'flip__bodyflip'">
            <div @click="closepopup" v-if="backflipClose" class="flip__front">
              <img src="../icons/close.svg" alt="Закрыть" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "popup",
  data() {
    return {
      backflip: true,
      backflipClose: true,
    };
  },
  methods: {
    closepopup() {
      this.$emit("closepopup");
    },
    leftbtnAction() {
      console.log("leftbtnAction");
      this.backflip = !this.backflip;
      this.$emit("leftbtnAction");
    },
  },
  props: {
    Popuptitle: {
      type: String,
      default: "ok",
    },
  },
};
</script>
<style>
.popup_wrapper {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
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
  color: #000;
  font-size: 16px;
  white-space: unset;
  text-overflow: unset;
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
.flip {
}
.flip__body {
  position: relative;
  width: 100px;
  height: 40px;
  transition: all 0.8s ease 0s;
  transform-style: preserve-3d;
}
.flip__front,
.flip__back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flip__front {
  cursor: pointer;

  z-index: 2;
  transform: rotateY(0deg);
  background-color: rgba(99, 105, 197, 0.1);

  backface-visibility: hidden;
}
.flip__back {
  transform: rotateY(-180deg);
  background-color: hsla(236, 46%, 58%, 0.1);
}

.flip__bodyflip {
  position: relative;
  width: 100px;
  height: 40px;
  transition: all 0.8s ease 0s;
  transform-style: preserve-3d;
  transform: rotateY(-180deg);
}
@media screen and (min-width: 100px) and (max-width: 767px) {
  .popup_wrapper {
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    width: 100%;

    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;

    bottom: 0;
  }
  .popup {
    padding: 16px;
    position: fixed;
    top: 50px;
    z-index: 4;
    width: 75%;
    margin: 10px;
    background: rgb(255, 255, 255);
  }
}
</style>
