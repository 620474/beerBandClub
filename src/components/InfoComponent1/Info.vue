<template>
  <div class="info-form">
    <div class="info-form__category ">{{ category }}</div>
    <p class="display-1 info_form__value"> {{ user }} </p>
  </div>
</template>

<script>

export default {
  name: 'Info',

  props: {
    category: {
      type: String,
      default: ''
    },

    user: {
      type: [String, Number],
      default: ''
    }
  },
};
</script>

<style scoped>

.info-form {
  position: relative;
  width: 100%;
  margin-top: 30px;
  border: 1px solid rgb(211, 210, 210);
  border-radius: 5px;
  min-width: 450px;
  max-width: 450px;
  min-height: 50px;
  max-height: 50px;
  overflow: auto;
}

.info-form__category {
  background-color: #FFFFFFFF;
  color: #b3b4b6;
  padding: 0 5px;
  position: absolute;
  top: -8px;
  left: 30px;
  font-size: 12px;
}

p {
  text-align: center;
}

.info_form__value {
  font-size: 30px;
}

</style>
