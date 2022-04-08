<template>
  <div id="app">
    <Header/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/HeaderComponent/Header";
import Footer from "@/components/FooterComponent/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
};
</script>

<style>

</style>
