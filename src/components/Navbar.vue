<script>
export default {
  name: "NavbarComponent",
};
</script>

<template >
  <div>
    <v-container class="d-flex justify-space-between">
      <h2>Contact Book App</h2>
      <div>
        <router-link to="/login">
          <v-btn color="primary" class="mx-3" variant="contained"
            >Login</v-btn
          ></router-link
        >
        <router-link to="/signup">
          <v-btn color="success" class="mx-3" variant="contained"
            >SignUp</v-btn
          ></router-link
        >
      </div>
    </v-container>
  </div>
</template>
<style>
</style>