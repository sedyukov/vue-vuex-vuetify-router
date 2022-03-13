<template>
  <v-app>
    <div>
      <Navbar/>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>
