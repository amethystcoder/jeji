<script>
export default{
    name: 'LoginPage',
    data(){
        return{

        }
    }
}
</script>

<template>
<h1 id="appname">Jeji</h1>
<div id="nav">
        <div id="signindiv">Sign in</div>
    <router-link to="SignupPage">
        <div id="signupdiv">Sign up</div>
    </router-link>
</div>
<input type="text" placeholder="Email or Phone number">
<br>
<input type="text" placeholder="Password">
<br><br><br><br>
<div id="signinbutton">Sign In</div>
<h1 style="text-align: center;">Or</h1>
<div class="otheroptions">
    Sign in with Google
</div>
<br>
<div class="otheroptions">
    Sign in with Facebook
</div>
<div id="guestside">
    <p style="color:#3C7DB9 ;">Continue as guest<span></span></p>
    <p>(You will have to enter your payment and delivery details when you make a purchase)</p>
</div>
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
#signindiv{
    border-bottom: #3C7DB9 solid thick;
    padding: 10px 30px 5px 30px;
}
#signupdiv{
    color: black;
    border-bottom: #3C7DB9 solid thin;
    padding: 10px 30px 5px 30px;
}
input{
    width: 60vw;
    align-self: center;
    border: #3C7DB9 thin solid;
    border-radius: 8px;
    margin-top: 30px;
    margin-left: 16vw;
    padding: 10px;
}
#signinbutton{
    background-color: #3C7DB9;
    color: white;
    padding: 10px;
    border: hidden;
    border-radius: 15px;
    width: 12vw;
    margin-left: 40vw;
    margin-bottom: 30px;
}
.otheroptions{
    background-color: #3C7DB9;
    color: white;
    margin-left: 25vw;
    width: max-content;
    padding: 10px;
}
#guestside{
margin-left: 30px;
}
</style>