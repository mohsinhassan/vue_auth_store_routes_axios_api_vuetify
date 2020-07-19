<template>
  <div class="hello">
    
      <popup></popup>
        <!-- <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table> -->
     
  </div>
</template>

<script>
import popup from "./popup";
export default {
  components: { popup },
  name: "Popup",
  data() {
    return {
      user: [{}],
      // headers: [
      //     {
      //       text: 'First name',
      //       align: 'start',
      //       sortable: false,
      //       value: 'FirstName',
      //     },
      //     { text: 'Last Name', value: 'LastName' },
      //     { text: 'ID', value: 'id' },
      //     { text: 'Email', value: 'email' },
      //     { text: 'Gender', value: 'Gender' },
      //   ],     
      // desserts: [
          // {
          //   FirstName: 'Frozen Yogurt',
          //   calories: 200,
          //   fat: 6.0,
          //   carbs: 24,
          //   protein: 4.0,
          //   iron: '1%',
          // },
          // {
          //   name: 'Ice cream sandwich',
          //   calories: 200,
          //   fat: 9.0,
          //   carbs: 37,
          //   protein: 4.3,
          //   iron: '1%',
          // },
          // {
          //   name: 'Eclair',
          //   calories: 300,
          //   fat: 16.0,
          //   carbs: 23,
          //   protein: 6.0,
          //   iron: '7%',
          // },
          // {
          //   name: 'Cupcake',
          //   calories: 300,
          //   fat: 3.7,
          //   carbs: 67,
          //   protein: 4.3,
          //   iron: '8%',
          // },
          // {
          //   name: 'Gingerbread',
          //   calories: 400,
          //   fat: 16.0,
          //   carbs: 49,
          //   protein: 3.9,
          //   iron: '16%',
          // },
          // {
          //   name: 'Jelly bean',
          //   calories: 400,
          //   fat: 0.0,
          //   carbs: 94,
          //   protein: 0.0,
          //   iron: '0%',
          // },
          // {
          //   name: 'Lollipop',
          //   calories: 400,
          //   fat: 0.2,
          //   carbs: 98,
          //   protein: 0,
          //   iron: '2%',
          // },
          // {
          //   name: 'Honeycomb',
          //   calories: 400,
          //   fat: 3.2,
          //   carbs: 87,
          //   protein: 6.5,
          //   iron: '45%',
          // },
          // {
          //   name: 'Donut',
          //   calories: 500,
          //   fat: 25.0,
          //   carbs: 51,
          //   protein: 4.9,
          //   iron: '22%',
          // },
          // {
          //   name: 'KitKat',
          //   calories: 500,
          //   fat: 26.0,
          //   carbs: 65,
          //   protein: 7,
          //   iron: '6%',
          // },
        // ],
    };
  },
  computed:{
    },
  mounted() {
    this.getuser();
    // let token = this.$store.getters.getToken;
    //   if(token == null){
    //       this.$router.push('/');
    //   }
  },
  methods: {
    getuser() {
      var localuser = this.$store.getters.getuser;
      console.log(localuser);
      console.log('localuser');

      // if (this.user.id == undefined) {
      //   this.$emit("authenticated", false);
      //   this.$router.replace({ name: "login" });
      // }
      
      let str = '';
      str  = str + Object.keys(localuser).map((key) => {
        //console.log(key + "->" + localuser[key])
        if(key != 'meta'){
          return '['+key+'] : '+ localuser[key];
        }

      })
      console.log(str);

      //this.desserts.push();

      // console.log(key + " -> " + localuser[key]);
      //   //if(key == 'FirstName'){
      //     var myobj = [{
      //       [key]: localuser[key]
      //     }];
      //     return myobj;
        //}
        //console.log(localuser['FirstName'] + key)

      //this.desserts.name = this.user.FirstName;
      console.log(this.desserts);
      // Object.keys(this.user).forEach(function(key) {

      //   this.desserts.push(key, this.user[key]);

      // });


        
      console.log(this.user);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
} */
a {
  color: #42b983;
}
</style>
