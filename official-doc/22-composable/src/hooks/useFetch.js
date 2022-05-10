import { isRef, ref, unref, watchEffect } from "vue";

export default (url) => {
  const data = ref();
  const error = ref();

  function doFetch() {
    data.value = null;
    error.value = null;

    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((e) => (error.value = e));
  }

  if (isRef(url)) {
    watchEffect(doFetch);
  } else {
    doFetch();
  }

  return { data, error };
};
