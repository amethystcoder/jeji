<script>
export default{
    name: 'FormePage',
    data(){
        return{
            keywords:[
                {id:1,key:'recent searches'},
                {id:2,key:'interesting picks'},
                {id:3,key:'based on previous search'}
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
    }
  }
}
</script>

<template>
<div class="placeholder_box" v-for="keys in keywords" :key="keys.id">
    <h2 class="convicer">{{keys.key}}</h2>
    <div class="boxescontainer">
    <div class="boxes" v-for="product in products" :key="product.id">
      <div class="baseimg" @click="sendprodprops(product.name,product.id)"></div>
      <h4>{{product.name}}</h4>
      <p>{{product.price}}</p>
      <router-link to="/ProductDescription">
        <div class="button">Add to Cart</div>
      </router-link>
      
    </div>
    </div>
  </div>
  <div id="bottomofproducts"></div>
</template>

<style>

</style>