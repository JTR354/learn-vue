import debounce from "./node_modules/lodash-es/debounce.js";
export default {
  name: "Child",
  props: ["title"],
  data() {
    return { count: 0 };
  },
  methods: {
    // onClick() {
    //   console.log(debounce);
    //   this.count++;
    // },
    onClick: debounce(function () {
      this.count++;
    }, 2000),
  },
  template: `<div>
  <h1>{{this.title}}-title</h1>
  <p>{{count}}</p>
  <button @click="onClick">add</button>
  
  </div>`,
};
