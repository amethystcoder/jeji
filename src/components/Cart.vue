<script>
export default{
    name: 'CartPage',
    data(){
        return{
            cartitems : []
        }
    },
    methods:{
        elremove(id){
            this.cartitems.remove(this.cartitems[id])
        }
    }
}
</script>

<template>
<div id="container-all">
    <div v-if="cartitems.length == 0" id="emptycart"><h1>Nothing in Cart</h1></div>
    <div v-for="a in cartitems " :key="a.id" class="containers">
<div class="imger"></div>
<div class="detailscontainer">
    <h3>{{a.name}}</h3>
    <h5>{{a.price}}</h5>
    <h6>{{a.qty}}</h6>
</div>
<button class="removediv" @click="elremove(a.id-1)">Remove</button>
</div>
</div>

</template>

<style>
#container-all{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.containers{
    position: relative;
    width:90vw;
    height: 10rem;
    box-shadow: 2px 2px 2px  rgb(200, 200, 200);
    border: hidden;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-top: 20px;
}
.imger{
    background-color: black;
    border: hidden;
    border-radius: 20px;
    width: 8rem;
    height: 8rem;
    margin-left: 10px;
    margin-right: 10px;
}
.removediv{
    background-color: #3C7DB9;
    color: aliceblue;
    border: hidden;
    border-radius: 5px;
    height: 1.5rem;
    position: absolute;
    bottom: 2px;
    right: 10px;
}
#emptycart{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 20vh;
    }
#emptycart h1{
    color: #3C7DB9;
}
</style>