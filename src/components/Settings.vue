<script>
export default{
    name: 'SettingsPage',
    data(){
        return{
        }
    }
}
</script>

<template>
<router-link to="AccountPage">
    <div class="settingsdiv">
        <div class="accendiv"></div>
        <p>My Account</p>
    </div>
    </router-link>
    <router-link to="CustomizePage">
    <div class="settingsdiv">
        <div class="cusendiv"></div>
        <p>Customize</p>
    </div>
    </router-link>
    <router-link to="SecurityPage">
    <div class="settingsdiv">
        <div class="secendiv"></div>
        <p>Security</p>
    </div>
    </router-link>
    <router-link to="FeedbackPage">
    <div class="settingsdiv">
        <div class="feedendiv"></div>
        <p>Feedback and Complaints</p>
    </div>
    </router-link>
    <router-link to="LoginPage">
    <div class="settingsdiv">
        <div class="logoutendiv"></div>
        <p>Logout</p>
    </div>
    </router-link>
</template>

<style>
.settingsdiv{
    border-bottom: solid 1px #999999;
    display: flex;
    width: 97vw;
    align-items: center;
    padding-bottom: 10px;
    padding-top: 10px;
}
.settingsdiv p{
    color: black
}
[class*=endiv]{
    width: 40px;
    height: 40px;
    margin-left: 20px;
    margin-right: 10px;
}
.accendiv{
    background-image: url(../Jeji/Account\ circle-2.svg);
}
.cusendiv{
    background-image: url(../Jeji/Paint\ Palette.svg);
}
.secendiv{
    background-image: url(../Jeji/Lock.svg);
}
.feedendiv{
    background-image: url(../Jeji/Chat\ bubble.svg);
}
.logoutendiv{
    background-image: url(../Jeji/Logout.svg)
}
</style>