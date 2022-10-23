<script>
    export default{
        name: 'ChatSection',
        data(){
            return{
                num:6,
                newmsg:"",
                chats:[
                    {
                        id: 1,
                        sender:"Shop",
                        text:"Hello How can I help you today",
                        datesent: Date.now()
                    }
                ]
            }
        },
        methods:{
            addmsg(){
                if(this.newmsg == ""){
                    console.log("empty message box")
                }
                else{
                    this.chats.push({
                        id: this.num,
                        sender:"User",
                        text:this.newmsg,
                        datesent: Date.now()
                    });
                    this.num++
                    this.analysemsg(this.newmsg)
                    this.newmsg = ""
                }
            },
            async analysemsg(msg){
                setTimeout(()=>{
                    if(msg.includes('buy')){
                    this.appshopmsg('You can search for any item you want to buy using the search icon at the top right')
                    }
                    if( msg.includes('delivery') || msg.includes('bad') || msg.includes('problem')){
                        this.appshopmsg('Ouch, So sorry about that')
                        this.appshopmsg('Alright lets try to fix that')
                        this.appshopmsg('Tell me exactly what happened')
                    }
                },2500)
                    
            },
            appshopmsg(newtext){
                this.chats.push({
                        id: this.num,
                        sender:"Shop",
                        text:newtext,
                        datesent: Date.now()
                    })
            }
        }
    }
    </script>
    
    <template>
        <div v-for="chat in chats" :key="chat.id">
            <div v-bind:class="chat.sender">
                <div class="circular" v-if="chat.sender == 'Shop'"></div>
                <div>
                    <p>{{chat.text}}</p>
                </div>
                <div class="circular" v-if="chat.sender == 'User'"></div>
            </div>
        </div>
        <div id="underbottomnav"></div>
        <div class="bottom-nav">
    <input type="text" v-model="newmsg">
        <button @click="addmsg()" id="sendbut"></button>
  </div>
    </template>
    
    <style>
        .Shop, .User{
            display: flex;
            margin: 10px;
        }
        .Shop .circular, .User .circular{
            border: hidden;
            border-radius: 100px;
            width: 50px;
            height: 50px;
        }
        .User{
            justify-content: flex-end;
        }
        .Shop .circular{
            background-color: #327DBA;
        }
        .Shop div, .User div{
            background-color: aqua;
            padding: 10px;
            border: hidden;
            border-radius: 20px;
            border-bottom-left-radius: 0px;
            margin-left: 10px;
            max-width: 200px;
        }
        .User div{
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 20px;
        }
        #sendbut{
            align-self: center;
            height: 60px;
            width: 50px;
            background-image: url(../Jeji/Send.svg);
            border: none;
            background-color: white;
        }
        .bottom-nav input{
            margin-top: 5px;
            align-self: center;
        }
        #underbottomnav{
            height: 100px;
        }
    </style>