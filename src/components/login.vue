<template>
    <div id="login">
        <h1>Login</h1>
        <span v-if="errorMessage.length" style="font-color:red;">{{ errorMessage }}</span>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
       
    </div>   
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                user: [],
                errorMessage : ''
            }
        },
        mounted () {
            // this.$http
            // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            // .then(response => (this.info = response))
        },
        methods: {
            login() {

                const baseURI = 'http://52.62.3.10/sso/public/index.php/api/apitoken/gettoken';
                const formData1 = new FormData();
                formData1.set('email', 'YOUR API USER');
                formData1.set('password', 'YOUR API SECRETE');

                this.$http.post(baseURI, 
                 formData1, // the data to post
                ).then((result) => {
                    if(result.data.action == "OK")
                    {
                         let token = result.data.access_token;
                        this.validate(token);
                    }
                });
            },
            validate(token){
                let url = "http://52.62.3.10/sso/public/index.php/api/sso/validate";

                const formData1 = new FormData();
                formData1.set('ssoEmail', this.input.username);
                formData1.set('ssoPassword', this.input.password);
                ///////////////////////////////////////////////
                this.$http.post(url, 
                formData1, // the data to post
                {   
                    headers: {'Authorization': `Bearer ${token}` }
                }
                ).then((result) => {
                    console.log(result.status);
                    if(result.status == 200){
                        //this.users = result.data.result.data
                        this.$store.dispatch('saveuser',result.data.result.data);
                        let data = new Array();                        
                        data.push({
                            token: token, 
                            isauthenticated: true
                        });
                        
                        this.$store.dispatch('authenticated',data);
                        this.$emit("authenticated", true);
                        this.user = this.$store.getters.getuser;                        
                        this.$router.replace({ name: "secure" });
                        
                    }                    
                }).catch(function (error) {
                    
                    if (error.response) {
                        let self = this;
                        self.errorMessage = "Invalid user or password.";
                        console.log("no");
                        // Request made and server responded
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                    } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    }

                });
            }

        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>