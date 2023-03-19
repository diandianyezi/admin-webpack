<template lang="">
  <div class=''>
    <h1>{{msg}}</h1>
    <button @click="user.add()">{{user.count}}</button>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { ref, Ref } from 'vue';
import { useUserStore } from '@/stores/user';

export default {
  setup() {
    const msg:Ref<number> = ref(1);
    setInterval(() => {
      msg.value++
    }, 1000);
    return { msg, user:useUserStore() };
  }
}

</script>
<style>
h1 {
  color: red;
}
</style>