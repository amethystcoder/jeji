<script>
export default{
    name: 'FeedbackPage',
    data(){
        return{
            complaint: ""
        }
    },
    methods:{
        changecomplaint(str){
            this.complaint = str
        }
    }
}
</script>

<template>
<h1>What seems to be the problem?</h1>
<br><br>
<div class="complaintoptions" @click="changecomplaint('I cannot find the product I am looking for')">
    <h4>I can't find the product I'm looking for</h4>
</div>
<div class="complaintoptions" @click="changecomplaint('What I purchased has not been delivered')">
    <h4>What I purchased has not been delivered</h4>
</div>
<div class="complaintoptions" @click="changecomplaint('The delivered product is broken')">
    <h4>The delivered product is broken</h4>
</div>
<br><br>
<h3>Add Other</h3>
<textarea id="complaintarea" placeholder="Add complaint or feedback here" v-model="complaint">
</textarea>
<div id="submitfeedback">Submit</div>
<br><br>
<h4>We value your contribution as our customer and your feedback is very crucial and important to us. Without you we would not be possible</h4>
<br>
<p>You can also use the chat button to submit a complaint in the home section</p>
</template>

<style>
    .complaintoptions{
        border-bottom: solid #666666 2px;
    }
    #complaintarea{
        width: 90vw;
        height: 200px;
        font-size: 1.4em;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border-style: hidden;
        border-radius: 20px;
        box-shadow: 1px 2px 1px 1px #999999;
        margin-bottom: 10px;
    }
    #submitfeedback{
        float: right;
        background-color: #3C7DB9;
        color: white;
        padding: 5px;
        padding-left: 15px;
        padding-right: 15px;
        border: #3C7DB9 solid;
        border-radius: 5px;
        margin-bottom: 10px;
    }
</style>