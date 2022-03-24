<script setup>
</script>


<template>
  <v-container>
    <h1 class="text-center">Login Form</h1>
    <router-link to="/">
      <v-btn color="default" variant="contained"> GoBack </v-btn></router-link
    >
    <v-row justify="center">
      <v-col xl="6" lg="6" md="8" sm="8" xs="12">
        <v-text-field
          label="Enter Email"
          style="margin: 10px 0px"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="Enter Password"
          style="margin: 10px 0px"
          hide-details="auto"
        ></v-text-field>
        <v-btn color="secondary" style="width: 100%" variant="contained">
          Login
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "loginComp",
};
</script>
<style lang="">
</style>