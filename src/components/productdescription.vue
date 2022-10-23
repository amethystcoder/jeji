<script>
     import CartVue from './Cart.vue'
export default{
    name: 'ProductDescription',
    data(){
        return{
            cartadd:CartVue.data().cartitems,
            propparam: [],
            productprice:'',
            qty: 1,
            convincer : [
        {id:1,word:'Try these out'},
        {id:1,word:'Try these out'}
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
        addqty(){
            this.qty++
        },
        subqty(){
            if(this.qty == 1){
                this.qty = 1
            }
            else{
                this.qty--
            }
        },
        addtocart(){
            this.CartVue.data().cartitems.push({name:this.propparam[0].name,price:this.propparam[0].price,qty:this.qty})
        },
        sendprodprops(prodname,prodid){
      this.$router.push({name:'ProductDescription',params:{productname:prodname,productid:prodid}})
    }
    },
    created(){
        this.propparam = this.products.filter(product => product.name == this.$route.params.productname)
    }
}
</script>

<template>
<div id="prodtop" v-for="prod in propparam" :key="prod.id">
    <div id="prodimg"></div>
    <div>
        <h2>{{prod.name}}</h2>
        <h5>{{prod.price}}</h5>
        <div id="qtysec">
            <h4>Qty:</h4>
            <button @click="subqty()">-</button>
            <h4>{{qty}}</h4>
            <button @click="addqty()">+</button>
        </div>
        <div id="optionsect">
            <div class="cartoptions" @click="addtocart()">Add to Cart</div>
            <router-link to="/CartPage">
                <div class="cartoptions">View Cart</div>
            </router-link>
        </div>
    </div>
</div>
<div id="proddesc">
    <h2>Product Description</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores unde eius laboriosam, harum, necessitatibus atque a asperiores iure odio dolor minima architecto nihil ex illo excepturi! Velit, soluta quae.</p>
</div>
<div id="specsearch">
    <input type="text" placeholder="name">
    <input type="text" placeholder="model">
    <input type="text" placeholder="size">
    <input type="text" placeholder="release year">
</div>
<div>
    <div></div>
</div>
<div class="placeholder_box" v-for="convince in convincer" :key="convince.id">
    <h2 class="convicer">{{convince.word}}</h2>
    <div class="boxescontainer">
    <div class="boxes" v-for="product in products" :key="product.id">
      <div class="baseimg" @click="sendprodprops(product.name,product.id)"></div>
      <h4>{{product.name}}</h4>
      <p>{{product.price}}</p>
      <router-link to="ProductDescription">
        <div class="button">Add to Cart</div>
      </router-link>
    </div>
    </div>
  </div>
</template>
 
<style>
    #prodtop{
        display: flex;
        width: 100vw;
        box-shadow: 2px 2px 2px #999999;
        align-items: center;
        padding: 10px;
    }
    #prodimg{
        width: 40vw;
        height: 200px;
        background-color: blue;
        border-radius: 20px;
    }
    #qtysec,#optionsect,#specsearch{
        display: flex;
    }
    .cartoptions{
        background-color: #3C7DB9;
        color: white;
        padding: 10px;
        border: hidden;
        border-radius: 10px;
        margin-left: 10px;
    }
    #specsearch{
        overflow-x: scroll;
    }
    #specsearch input{
        margin: 10px;
    }
</style>