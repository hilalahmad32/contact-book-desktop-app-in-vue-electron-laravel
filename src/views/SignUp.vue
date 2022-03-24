<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const name = ref("");
const email = ref("");
const password = ref("");

const store = useStore();

const submit = () => {
  if (!name.value || !email.value || !password.value) {
    alert("Please fill the field");
  } else {
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    store.signup(data);
  }
};
onMounted(() => {
  // console.log(store);
});
</script>


<template>
  <v-container>
    <h1 class="text-center">Signup Form</h1>
    <router-link to="/">
      <v-btn color="default" variant="contained"> GoBack </v-btn></router-link
    >
    <v-row justify="center">
      <v-col xl="6" lg="6" md="8" sm="8" xs="12">
        <v-text-field
          label="Enter Name"
          style="margin: 10px 0px"
          hide-details="auto"
          v-model="name"
          type="text"
        ></v-text-field>
        <v-text-field
          label="Enter Email"
          style="margin: 10px 0px"
          hide-details="auto"
          v-model="email"
          type="email"
        ></v-text-field>
        <v-text-field
          label="Enter Password"
          style="margin: 10px 0px"
          hide-details="auto"
          v-model="password"
          type="password"
        ></v-text-field>
        <v-btn
          color="secondary"
          @click="submit"
          style="width: 100%"
          variant="contained"
        >
          Signup
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "SignUpComp",
};
</script>
<style lang="">
</style>