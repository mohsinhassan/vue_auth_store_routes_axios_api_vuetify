<template>
  <v-app>
     <h3>This area is password protected</h3>
    <div>
      <ul>
        <li v-for="(item, index) in user" v-bind:key="item.id">
          <span v-if="index != 'meta' || item.id != undefined">{{ item }}</span>
          <span v-else>
            <ul>
              <li v-for="metakey in item" v-bind:key="metakey.id">
                {{ metakey.meta_key }} : {{ metakey.meta_value }}
              </li>
            </ul>
          </span>
        </li>
      </ul>
    </div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Edit User
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal first name*"
                    required
                    v-model="user.FirstName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal last name"
                    hint="example of helper text only on focus"
                    v-model="user.LastName"
                  ></v-text-field>
                </v-col>
                <!-- <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col> -->
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    required
                    v-model="user.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Mobile*"
                    required
                    v-model="user.Mobile"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="user.Gender"
                    :items="['Male', 'Female']"
                    label="Gender*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <!-- <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete> -->
                  <v-text-field
                    label="Date of birth*"
                    required
                    v-model="user.Dob"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn color="blue darken-1" text v-on:click="edituser()"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      user: [],
    };
  },
  mounted() {
    this.getuser();
  },
  methods: {
    getuser() {
      this.user = this.$store.getters.getuser;
      if (this.user.id == undefined) {
        this.$store.dispatch('authenticated',false);
        this.$emit("authenticated", false);
        this.$router.replace({ name: "login" });
      }
    },
    edituser() {
      this.$store.dispatch("saveuser", this.user);
      this.getuser();
      console.log(this.user);
      this.dialog = false;
    },
  },
};
</script>
