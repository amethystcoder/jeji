<script>
    export default{
        name: 'AuthPage',
        data(){
            return{
                pin: '',
                code: '553168',
                iscorrect:''
            }
        },
        mounted(){
            window.addEventListener('keypress' , event => {
                this.pin += event.key
                if(this.pin.length == 6){
                    if(this.pin == this.code){
                        this.iscorrect = 'correct'
                    }
                    else{
                        this.pin = ''
                        this.iscorrect = 'incorrect'
                    }
                }
            })
        }
    }
    </script>
    
    <template>
        <div id="topp">
            <div></div>
            <h1>Enter Security Pin</h1>
            <p>Enter your six-digit pin to continue</p>
        </div>
        <div id="inputsections">
            <input type="text" v-model="pin[0]" disabled>
            <input type="text" v-model="pin[1]" disabled>
            <input type="text" v-model="pin[2]" disabled>
            <input type="text" v-model="pin[3]" disabled>
            <input type="text" v-model="pin[4]" disabled>
            <input type="text" v-model="pin[5]" disabled>
            <div v-if="iscorrect == 'correct'">correct</div>
            <div v-if="iscorrect == 'incorrect'"></div>
        </div>
        <div id="contsection">
            <div>Continue</div>
        </div>
    </template>
    
    <style>
        #topp{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;
            margin-top: 30px;
        }
        #topp div{
            width: 100px;
            height: 100px;
            background-image: url(../Jeji/Locks.svg);
        }
        #inputsections{
            display: flex;
            align-items: center;
            justify-content: center;
            height: max-content;
            width: 100vw;
        }
        #inputsections input{
            background-color: #99999999;
            box-shadow: 2px 2px 2px #99999999;
            margin: 5px;
            width: 15px;
            height: 25px;
            font-size: xx-large;
            color: #3C7DB9;
        }
        #contsection{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
        }
        #contsection div{
            padding: 15px;
            background-color: #3C7DB9;
            color: white;
            border: hidden;
            border-radius: 10px;
        }
    </style>