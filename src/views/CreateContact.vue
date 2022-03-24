<template lang="">
    <div>
          <v-container>
    <h1 class="text-center">Contact Book Form</h1>
    <router-link to="/">
      <v-btn color="default" variant="contained"> GoBack </v-btn></router-link
    >
    <v-row justify="center">
      <v-col xl="6" lg="6" md="8" sm="8" xs="12">
        <v-text-field
          label="Enter Name"
          style="margin: 10px 0px"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="Enter Email"
          style="margin: 10px 0px"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="Enter Phone"
          style="margin: 10px 0px"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="Enter Country"
          style="margin: 10px 0px"
          hide-details="auto"
        ></v-text-field>
        <v-btn color="secondary" style="width: 100%" variant="contained">
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
    </div>
</template>
<script>
export default {
  name: "createComp",
};
</script>
<style lang="">
</style>