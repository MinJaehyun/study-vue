let myMixin = {
  props: {
    weight: {
      default: 10,
    },
  },
  created() {
    // mixin 가져온 순서대로 console 찍힌다.
    console.log('mixin');
  },
  methods: {
    onClick() {
      this.data++;
    },
  },
};

export default myMixin;
