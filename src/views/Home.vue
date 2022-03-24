
<script>
// use this line
export default {
  name: "homeComponent",
};
</script>
<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<template>
  <div>
    <Navbar />
    <v-container>
      <div class="d-flex justify-space-between">
        <h3>Contacts (44)</h3>
        <router-link to="/create">
          <v-btn color="success" variant="contained">
            Add Contact
          </v-btn></router-link
        >
      </div>
      <table style="width: 100%; margin: 20px 0px">
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Phone</th>
            <th class="text-left">Country</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hilal</td>
            <td>hilal@gmail.com</td>
            <td>9749384938</td>
            <td>Pakistan</td>
            <td>
              <router-link to="/update">
                <v-btn color="success" class="mr-3" variant="contained">
                  Edit
                </v-btn></router-link
              >
              <v-btn color="error" variant="contained"> Delete </v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </v-container>
  </div>
</template>

<style>
</style>