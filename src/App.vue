<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import store from './data/store.js';



export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },

  data() {
    return {
      store,

    }
  },
  methods: {

  },
  created() {

  },
  mounted() {


  },
  computed: {

  },
}

</script>

<template>

  <AppHeader />

  <AppMain />

  <AppFooter />


</template>

<style scoped></style>