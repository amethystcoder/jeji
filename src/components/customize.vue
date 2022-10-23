<script>
export default{
    name: 'CustomizePage',
    data(){
        return{
            language:"English(UK)"
        }
    }
}
</script>

<template>
<div id="langchange">
    <h3>Change Language</h3>
    <h3>Current Language: {{language}}</h3>
    <select name="languages" id="langsel" v-model="language">
        <option>English(UK)</option>
        <option>English(US)</option>
        <option>Yoruba</option>
        <option>Igbo</option>
        <option>Hausa</option>
        <option>French</option>
        <option>German</option>
    </select>
    <h3>Your Language not on the list?</h3>
    <button id="sndmsg">Send us a message</button>
</div>
</template>

<style>
    #langchange{
        border-bottom: solid black;
        padding-bottom: 10px;
    }
    #langsel{
        width: 60vw;
        padding: 5px;
        font-weight:600;
        margin-left: 4vw;
        background-color: white; 
        border: solid thin #3C7DBA;
        border-radius: 20px;
    }
    #sndmsg{
        padding: 7px;
        background-color: #3C7DBA;
        color: white;
        border: hidden;
        border-radius: 5px;
    }
</style>