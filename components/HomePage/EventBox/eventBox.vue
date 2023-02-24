<template>
  <div style="direction: ltr">
    <hooper>
      <slide>
        <div></div>
      </slide>

    </hooper>
  </div>

</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1.6,
        centerMode: true
      }
    };
  }
};
</script>
