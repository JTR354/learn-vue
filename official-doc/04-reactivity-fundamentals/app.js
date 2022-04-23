const { nextTick } = Vue;
import Child from "./child.js";
import Component from "./component.js";
export default {
  components: { Child, Component },
  data() {
    return {
      count: 1,
      someObject: {},
      obj: {
        nested: { count: 0 },
        arr: ["foo", "bar"],
      },
    };
  },
  template: `
    <h1>123</h1>
    <Component title="com1"></Component>
    <Component title="com2"></Component>
    <hr/>
    <Child title="c1"></Child>
    <Child title="c2"></Child>
    
  `,
  mounted() {
    // console.log(this.count);
    // this.count = 2;
    const newObject = {};
    this.someObject = newObject;
    console.log(newObject === this.someObject);
    this.increment();
    this.mutateDeeply();
  },
  methods: {
    // increment: () => {
    //   console.log(this, "increment");
    //   // this.count++;
    // },
    increment() {
      console.log(this, "increment");
      this.count++;
      nextTick(() => {
        console.log(this.count, "next tick");
      });
    },
    mutateDeeply() {
      this.obj.nested.count++;
      this.obj.arr.push("baz");
    },
  },
};
