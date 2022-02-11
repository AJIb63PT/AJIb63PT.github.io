<template>
  <div class="v-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selectedName }}
    </p>
    <img
      src="./icons/list.svg"
      alt="icon"
      class="titleMini"
      @click="areOptionsVisible = !areOptionsVisible"
    />

    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      selectedName: "ALL",
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;

      this.selectedName = option.name;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style>
.v-select {
  width: 300px;
  position: fixed !important;

  top: 10px;
  left: 10px;
  cursor: pointer;
}
.title {
  padding: 8px;
}
.v-select p {
  margin: 0;
}

.options {
  border: solid 1px #aeaeae;
  background: #ffffff;
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  padding: 8px;
  font-size: 40px;
}

.options p:hover {
  background: #e7e7e7;
}
.titleMini {
  display: none;
}
@media screen and (min-width: 100px) and (max-width: 767px) {
  .v-select {
    position: absolute;
    top: 5px;
    left: 10px;
    padding: 30px;
    width: 60%;
    cursor: pointer;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #ffffff;
    position: absolute;
    width: 60%;
    top: 10px;
    left: 0;
    width: 100%;
    padding: 8px;
    font-size: 25px;
  }
  .title {
    display: none;
  }
  .titleMini {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
