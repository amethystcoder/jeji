<script>
export default{
    name: 'SecurityPage',
    data(){
        return{

        }
    }
}
</script>

<template>
<div>
    <p>Logins on other devices</p>
    <div id="otherdevicelogins">
        <p>nothing to show</p>
    </div>
    <p>Previous checkout activities</p>
    <div>
    </div>
    <p>Change confirmation pin length</p>
    <div>
        <select name="pin length" id="pinl">
            <option value="four">Four-digit pin</option>
            <option value="six">Six-digit pin</option>
            <option value="eight">Eight-digit pin</option>
        </select>
        <div id="changepin"><p>Change confirmation Pin</p></div>
    </div>
</div>
</template>

<style>
#otherdevicelogins{
    width: 100vw;
    padding: 20px;
}
#otherdevicelogins p{
    text-align: center;
}
#changepin{
    background-color: #3C7DB9;
}
</style>