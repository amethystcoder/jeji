
<script>

import CartVue from './components/Cart.vue'

import axios from 'axios'
import { ref } from 'vue'


export default {
  name: 'App',
  setup(){
    const user = ref('')
    axios.get('http://localhost:4200/shoppers')
    .then(response => user.value = response)

    return {user}
  }
  ,
  data(){
    return{
      cartamt: CartVue.data().cartitems.length,

      appname : 'Jeji',
      name: this.$route.path.split('/')[1],
      newname: ''
    }
  },
  methods:{
    setappname(){
      this.appname = window.location.pathname
    },
    gotoprev(){
      this.$router.go(-1)
      this.appname = window.location.pathname
    }
  },
  mounted(){
    this.appname = window.location.pathname
  }
  }

</script>

<template>
  <div class="top-nav" v-if="appname == '/'">
    <h1 id="logoname">Jeji</h1>
    <div id="sides">
      <router-link to="/SearchPage">
        <div id="search" @click="setappname()"></div>
      </router-link>
      <router-link to="/CartPage">
        <div id="cart" @click="setappname()">
          <div id="cartcontent" v-if="cartamt > 0">{{cartamt}}</div>
        </div>
      </router-link>
    </div>
  </div>

  <div class="top-nav" v-if="appname.includes('forme')">
    <h1 id="logoname">For me</h1>
    <div id="sides">
      <router-link to="/SearchPage">
        <div id="search" @click="setappname()"></div>
      </router-link>
      <router-link to="/CartPage">
        <div id="cart" @click="setappname()">
          <div id="cartcontent" v-if="cartamt > 0">{{cartamt}}</div>
        </div>
      </router-link>
    </div>
  </div>

  <div class="top-nav" v-if="appname.includes('ProductDescription')">
    <div class="contains">
      <div class="backbut" @click="gotoprev()"></div>
    <h1 id="prodname">{{$route.params.productname}}</h1>
    </div>
    <div id="sides">
      <router-link to="/SearchPage">
        <div id="search" @click="setappname()"></div>
      </router-link>
      <router-link to="/CartPage">
        <div id="cart" @click="setappname()">
          <div id="cartcontent" v-if="cartamt > 0">{{cartamt}}</div>
        </div>
      </router-link>
    </div>
  </div>

  <div class="top-nav" v-if="appname.includes('CartPage')">
    <div style="display: flex;">
      <div class="backbut" @click="gotoprev()"></div>
      <h1 style="color:#327DBA ;">Cart</h1>
    </div>
  </div>


  <div class="top-nav" v-if="appname.includes('setting')">
    <div style="display: flex;">
      <div class="backbut" @click="gotoprev()"></div>
      <h1 style="color:#327DBA ;">Settings</h1>
    </div>
  </div>

  <div class="top-nav" v-if="appname.includes('Chat')">
    <div style="display: flex;">
      <div class="backbut" @click="gotoprev()"></div>
      <h1 style="color:#327DBA ;">Chat</h1>
    </div>
  </div>

  <div class="top-nav" v-if="appname.includes('AccountPage')">
    <div style="display: flex;">
      <div class="backbut" @click="gotoprev()"></div>
      <h1 style="color:#327DBA ;">Account</h1>
    </div>
  </div>

  <div class="top-nav" v-if="appname.includes('CustomizePage')">
    <div style="display: flex;">
      <div class="backbut" @click="gotoprev()"></div>
      <h1 style="color:#327DBA ;">Customize</h1>
    </div>
  </div>

  <div class="top-nav" v-if="appname.includes('SecurityPage')">
    <div style="display: flex;">
      <div class="backbut" @click="gotoprev()"></div>
      <h1 style="color:#327DBA ;">Security</h1>
    </div>
  </div>

  <div class="top-nav" v-if="appname.includes('FeedbackPage')">
    <div style="display: flex;">
      <div class="backbut" @click="gotoprev()"></div>
      <h1 style="color:#327DBA ;">Feedback and Compla....</h1>
    </div>
  </div>
  <router-view></router-view>

  <div class="bottom-nav" v-if="appname == '/'">
    <div id="homebutton" @click="setappname()">
      <router-link to="/">
        <div id="home"></div>
      <p>Home</p>
      </router-link></div>
    <div id="formebutton" @click="setappname()">
      <router-link to="/forme">
        <div id="forme"></div>
        <p>For me</p>
      </router-link>
    </div>
    <div id="settingsbutton" @click="setappname()">
      <router-link to="/setting">
        <div id="settings"></div>
        <p>Settings</p>
      </router-link>
    </div>
  </div>

  <div class="bottom-nav" v-if="appname.includes('forme')">
    <div id="homebutton" @click="setappname()">
      <router-link to="/">
        <div id="homes"></div>
      <p>Home</p>
      </router-link></div>
    <div id="formebutton" @click="setappname()">
      <router-link to="/forme">
        <div id="formes"></div>
        <p>For me</p>
      </router-link>
    </div>
    <div id="settingsbutton" @click="setappname()">
      <router-link to="/setting">
        <div id="settings"></div>
        <p>Settings</p>
      </router-link>
    </div>
  </div>

  <router-link to="/Chat" v-if="appname == '/' || appname.includes('forme') || appname.includes('ProductDescription') || appname.includes('CartPage')">
    <div id="chatbox" @click="setappname()"></div>
  </router-link>
  <div id="otherbottom "></div>


  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#logoname{
  color: #3C7DB9;
  position: absolute;
  left: 10px;
}
#sides{
  display: flex;
  position: absolute;
  right: 20px;
  top: 20px;
}
#search{
  width: 40px;
  height: 40px;
  background-image: url(./Jeji/Search-1.svg);
}
#cart{
  width: 40px;
  height: 40px;
  background-image: url(./Jeji/Shopping\ cart-1.svg);
}
.top-nav{
  background-color: white;
  width: 100vw;
  position: sticky;
  height: 80px;
  top: 0;
  border-bottom: #3C7DB9 solid 2px;
  display: flex;
  justify-content: space-between;
}
.bottom-nav{
  width: 100vw;
  display: flex;
  position: fixed;
  bottom: 0;
  height: 80px;
  border-top: #3C7DB9 solid 2px;
  background-color: white;
}
#homebutton,#formebutton,#settingsbutton{
  color:#3C7DB9;
  width: 33vw;
  height: 100%;
}
#home,#forme,#settings,#homes,#formes{
  width: 35px;
  height: 35px;
  border: hidden;
  border-radius: 500px;
  align-self: center;
}
#home,#forme,#settings{
  background-image: url(./Jeji/Home-1.svg);
}
#forme{
  background-image: url(./Jeji/Account\ circle-1.svg);
}
#settings{
  background-image: url(./Jeji/Settings.svg);
}
#homes{
  background-image: url(./Jeji/Home.svg);
}
#formes{
  background-image: url(./Jeji/Account\ circle.svg);
}
a{
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#chatbox{
  width: 80px;
  height: 80px;
  background-image: url(./Jeji/Chat\ bubble.svg);
  position: fixed;
  right: 10px;
  bottom: 100px;
}
#cartcontent{
  border: hidden;
  border-radius: 20px;
  background-color: red;
  width: 18px;
  padding: 5px;
  color: aliceblue;
  position: absolute;
  right: 0px;
}
.backbut{
  width: 50px;
  height: 50px;
  background-image: url(./Jeji/Keyboard\ arrow\ left.svg);
  margin-top: 10px;
  margin-right: 10px;
}
.contains{
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: baseline;
}
#prodname{
  color: #3C7DB9;
}
</style>
