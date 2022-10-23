<script>
export default{
    name: 'AccountPage',
    data(){
        return{

        }
    }
}
</script>

<template>
<div id="accinfo">
    <div id="accountimg"></div>
    <div>
        <h1>Lorem Ipsum Jr</h1>
        <div id="infoptions">
            <div class="option">
                Delete account
            </div>
            <div class="option">
                Edit info
            </div>
        </div>
    </div>
</div>
<div id="addressdetails">
    <h3>Delivery Address</h3>
    <p>14,Akinwumi Street</p>
    <p>Bodija, Ibadan</p>
    <p>Oyo State, 200234</p>
</div>
<div>
    <h3>Payment Information</h3>
    <div class="card">
        <h3>.... .... .... 1234</h3>
        <h3>../..</h3>
        <div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
<router-link to="/Auth">
    <div>Add Card</div>
</router-link>
<br><br><br><br>
<div id="passwordchange">Change Password</div>
</template>

<style>
    #accinfo{
        display: flex;
        border-bottom: solid black thin;
        align-items: center;
        padding: 20px;
    }
    #accountimg{
        height: 70px;
        width: 70px;
        border: hidden;
        border-radius: 100px;
        background-color: blue;
        margin-right: 20px;
    }
    #infoptions{
        display: flex;
    }
    .option{
        background-color: #3C7DB9;
        color: white;
        padding: 8px;
        margin-right: 10px;
        border: hidden;
        border-radius: 8px;
    }
    #addressdetails{
        border-bottom: solid black thin;
    }
    .card{
        width: 90vw;
        padding: 5px;
        box-shadow: 2px 2px 2px #666666;
        border: hidden;
        border-radius: 20px;
    }
</style>