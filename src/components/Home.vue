<script>

import axios from 'axios'

export default {
  name: 'HomePage',
  data(){
    return{ 
      i:0,
      proddata: [],
      convincer : [
        {id:1,word:'Try these out'},
        {id:1,word:'Try these out'},
        {id:1,word:'Try these out'},
        {id:1,word:'Try these out'},
        {id:1,word:'Try these out'},
        ],
      products: [
        {id: 1, name:'Adidas X2 Male',price:'N25,000'},
        {id: 2, name:'Cooking Items Pack',price:'N68,000'},
        {id: 3, name:'Iphone 11 pro Max',price:'N350,000'},
        {id: 4, name:'Storm Perfumes',price:'N10,000'},
        {id: 5, name:'Denim Jacket',price:'N27,500'}
      ]
    }
  },
  methods:{
    sendprodprops(prodname,prodid){
      this.$router.push({name:'ProductDescription',params:{productname:prodname,productid:prodid}})
    },
    addmoreitems(){
      for(this.i=0;this.i<5;this.i++){
        this.convincer.push({id:1,word:'Try these out'})
      }
      this.products.push(
        {id: 1, name:'Adidas X2 Male',price:'N25,000'},
        {id: 2, name:'Cooking Items Pack',price:'N68,000'},
        {id: 3, name:'Iphone 11 pro Max',price:'N350,000'},
        {id: 4, name:'Storm Perfumes',price:'N10,000'},
        {id: 5, name:'Denim Jacket',price:'N27,500'}
        )
    }
  },
  created(){
     axios.get('http://localhost:4200/')
    .then(response => this.proddata = response)
  },
  mounted(){
    window.addEventListener('scroll',()=>{
      if(this.convincer[this.convincer.length -1].word.getBoundingClientRect().bottom < window.innerHeight){
        this.addmoreitems()
      }
    })
  }
  }
</script>

<template>
<div class="placeholder_box" v-for="convince in convincer" :key="convince.id">
    <h2 class="convicer">{{convince.word}}</h2>
    <div class="boxescontainer">
    <div class="boxes" v-for="product in products" :key="product.id">
      <div class="baseimg" @click="sendprodprops(product.name,product.id)"></div>
      <h4>{{product.name}}</h4>
      <p>{{product.price}}</p>
        <div class="button">Add to Cart</div>
    </div>
    </div>
  </div>
  <div v-for="prod in proddata" :key="prod.id">
    <h1>{{prod.name}}</h1>
  </div>
  <div id="bottomofproducts"></div>
</template>

<style>
.convincer{
  position: absolute;
  left: 10px;
}
.boxescontainer{
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  height: max-content;
}
.boxes{
  width: 180px;
  height: 270px;
  box-shadow: 1px 2px 1px rgba(200, 200, 200, 10);
  margin-left: 20px;
  border-style: hidden;
  border-radius: 30px;
}
.baseimg{
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 50px;
  padding-left: 80px;
  padding-right: 80px;
  height: 20%;
  background-color: #3C7DB9;
}
.button{
  border: hidden thin #3C7DB9;
  border-radius: 10px;
  color: white;
  background-color: #3C7DB9;
  width: 80px;
  height:30px;
  font-size:0.9em;
}
#bottomofproducts{
  width: 100vw;
  height: 100px;
}
</style>