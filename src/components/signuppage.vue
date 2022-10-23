<script>
import axios from 'axios';
export default{
    name: 'SignupPage',
    data(){
        return{
            newuserdata:{
                Username:'',
                Password: '',
                Passcode: 0,
                CardNumber: 0,
                ExpiryDate: '',
                CVC: 0,
                HouseNumber: 0,
                Street:'',
                City:'',
                State:'',
                PostalCode:0
            },
            canlogin: false
        }
    },
    methods:{
        createaccount(){
            if(this.canlogin == false){
                console.log('not all inputs are filled')
            }
            else{
                axios.post('http://localhost:4200/',this.newuserdata,{headers:''})
            }
        }
    },
    mounted(){
        if(this.newuserdata.Username == '' || this.newuserdata.Password == '' || this.newuserdata.ExpiryDate == '' || this.newuserdata.Street == '' || this.newuserdata.City == '' || this.newuserdata.State == ''){
                this.canlogin = false
            }
            else{
                this.canlogin = true
            }
    }
}
</script>

<template>
<h1 id="appname">Jeji</h1>
<div id="nav">
    <router-link to="LoginPage">
        <div id="signinndiv">Sign in</div>
        </router-link>
        <div id="signupndiv">Sign up</div>
</div>
<div>
    <input type="text" placeholder="Name or Username">
    <br>
    <input type="text" placeholder="Email">
    <br>
    <input type="text" placeholder="Phone Number">
    <br>
    <input type="text" placeholder="Password">
    <br>
    <input type="text" placeholder="Re-enter Password">
    <br>
</div>
<div class="divisions">
    <h1>Delivery Address</h1>
    <div id="containsaddresses">
    <input type="text" placeholder="House number/Apt">
    <br>
    <input type="text" placeholder="Street" class="shorterone">
    <input type="text" placeholder="City" class="shortertwo">
    <input type="text" placeholder="State" class="shorterone">
    <input type="text" placeholder="Postal Code" class="shortertwo">
    </div>
    
</div>
<div class="divisions">
    <h1>Payment Information</h1>
    <input type="text" placeholder="Card Number">
    <br>
    <input type="text" placeholder="Expiration date" class="shorterone">
    <input type="text" placeholder="CVC" class="shortertwo">
    <br>
    <select id="otherpayment">
        <option>other payment options</option>
        <option>Abeg</option>
        <option>Chipper Cash</option>
        <option>Zoona</option>
        <option>InterSwitch</option>
        <option>Paypal</option>
    </select>
</div>
<h1 style="text-align: center;">Or</h1>
<div></div>
<div></div>

<div @click="createaccount()" id="acccreate">Create an Account</div>
</template>

<style>
#appname{
    text-align: center;
    margin-top: 50px;
    color: #3C7DB9;
}
#nav{
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
}
#signupndiv{
    border-bottom: #3C7DB9 solid thick;
    padding: 10px 30px 5px 30px;
}
#signinndiv{
    color: black;
    border-bottom: #3C7DB9 solid thin;
    padding: 10px 30px 5px 30px;
}
#otherpayment{
    border: #3C7DB9 solid thin;
    color: #3C7DB9;
    border-radius: 10px;
    padding: 10px;
    align-self: center;
    width: 75vw;
    background-color: white;
}
.divisions{
    border-top: #555555 solid thin;
    margin-top: 10px;
}
#containsaddresses{
    display: grid;
    grid-template-columns: auto auto;
}
#acccreate{

    background-color: #3C7DB9;
    color: white;
    width: max-content;
    border: hidden;
    border-radius: 5px;
    padding: 10px;
}
.shorterone{
    width: 50px;
    margin: 5px;
    margin-left: 30px;
}
.shortertwo{
    width: 35px;
    margin: 5px;
}
option{
    color: #555555;
}
</style>