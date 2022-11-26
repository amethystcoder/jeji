<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  data(){
    return{ 
      i:0,
      proddata: [],
      convincer : [
        {id:1,word:'New Products'},
        {id:1,word:'Grocery Items',keywords:'Groceries'},
        {id:1,word:'Gaming Accessories',keywords:'Gaming or Gadgets'},
        {id:1,word:'Phones and Laptops',keywords:'Gadgets'},
        {id:1,word:'Kitchen Utensils',keywords:'Utensils'},
        {id:1,word:'Fashion and Cosmetics',keywords:'Cosmetics or Beauty'},
        ],
      products: []
    }
  },
  methods:{
    sendprodprops(prodname,prodid){
      this.$router.push({name:'ProductDescription',params:{productname:prodname,productid:prodid}})
    },
    additems(item){
      return this.products.filter(elem => elem.category = item  )
    },
  },
  mounted(){
    axios.get('http://localhost:3000/')
    .then(response => {
      this.products = response.data
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

</script>

<template>
  <div v-if="products.length > 0">
    <div class="placeholder_box" v-for="convince in convincer" :key="convince.id">
    <h2 class="convicer">{{convince.word}}</h2>
    <div class="boxescontainer">
    <div class="boxes" v-for="product in additems(convince.keywords)" :key="product.id">
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
  
  </div>
  <div v-if="products.length == 0" id="whenempty">
    <div id="rotater">
      <div id="rotated"></div>
    </div>
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
#whenempty{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#rotater{
  position: relative;
  animation: rotate 2s infinite ease;
  background-color: #3C7DB9;
  padding: 30px;
}
#rotated{
  position: absolute;
  left: 40px;
  animation: scaler 3s infinite ease;
  background-color: blue;
}
@keyframes rotate {
  0%{rotate: 0deg;}
  100%{rotate: 360deg;}
}
@keyframes scaler {
  0%{padding: 10px;}
  50%{padding: 20px;}
  100%{padding: 10px;}
}
</style>