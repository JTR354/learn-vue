import debounce from "./node_modules/lodash-es/debounce.js";
const { ref } = Vue;
export default {
  name: "Component",
  props: ["title"],
  data() {
    return { count: 0 };
  },
  created() {
    this.debounceClick = debounce(this.onClick, 5000);
  },
  unmounted() {
    this.debounceClick.cancel();
  },
  methods: {
    onClick() {
      this.count++;
    },
  },
  setup() {
    const count2 = ref(0);
    return {
      count2,
      deClick: debounce(() => {
        count2.value++;
      }, 1000),
    };
  },
  template: `<div>
  <h1>{{this.title}}-title</h1>
  <p>{{count}}</p>
  <button @click="debounceClick">add</button>
  <p>{{count2}}</p>
  <button @click="deClick">de-add</button>
  </div>`,
};
