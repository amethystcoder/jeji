import { createRouter,createWebHistory } from "vue-router"
import Forme from '../components/Forme.vue'
import Setting from '../components/Settings.vue'
import Home from '../components/Home.vue'
import ProductDescription from '../components/productdescription.vue'
import Cart from '../components/Cart.vue'
import Search from '../components/Search.vue'
import Account from '../components/account.vue'
import Customize from '../components/customize.vue'
import Feedback from '../components/feedback.vue'
import Login from '../components/loginpage.vue'
import Security from '../components/security.vue'
import Signup from '../components/signuppage.vue'
import Chat from '../components/chat.vue'
import Auth from '../components/auth.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/forme',component:Forme, name:Forme},
        {path:'/setting',component:Setting,name:Setting},
        {path:'/',component:Home,name:'home'},
        {path:'/ProductDescription/:productname/:productid',component:ProductDescription,name:'ProductDescription'},
        {path:'/CartPage',component:Cart,name:Cart},
        {path:'/AccountPage',component:Account,name:Account},
        {path:'/CustomizePage',component:Customize,name:Customize},
        {path:'/FeedbackPage',component:Feedback,name:Feedback},
        {path:'/LoginPage',component:Login,name:Login},
        {path:'/SecurityPage',component:Security,name:Security},
        {path:'/SignupPage',component:Signup,name:Signup},
        {path:'/SearchPage',component:Search,name:Search},
        {path:'/Chat',component:Chat,name:Chat},
        {path:'/Auth',component:Auth,name:Auth}
    ]
})

export default router
