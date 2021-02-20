<template>
  <ion-page>
  <ion-header >
      <ion-toolbar>
        <ion-title color="danger">Tell your all problem !</ion-title>
         <ion-content>
         </ion-content> 
      </ion-toolbar>
      </ion-header>
       <ion-content fullscreen>
       <ion-list>
       <Details @on-newIssue="onSubmit($event)"/>
        <ion-item v-for="item in todos" :key="item.id">
          <ion-label>{{item.name1}}</ion-label>
        <ion-icon :icon="add"  class="clickable-icon" @click="()=> TogglePopup('buttonTrigger')"></ion-icon><br>  
        </ion-item>
        </ion-list>
        <section>
       <!--<router-link to="/Issue">-->
       <ion-button @click="shareData" size="large" color="success" expand="full"  v-on:click="handleClick" >Check Status</ion-button>
       <!--</router-link>-->
        </section>
        <Popup v-if="popupTriggers.buttonTrigger">
            <form @submit.prevent="onSubmit">
          <ion-item color="light">
         <input v-model="newissue" expand="block" type="text" name="name" class="w3-input w3-border"  placeholder="Type Here..."  >
 <ion-button size="medium" type="submit" color="success">Solution</ion-button>
          </ion-item >
    </form>
         </Popup>
       </ion-content>   
       
                
        </ion-page>
        
</template>

<script >
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon  } from '@ionic/vue';
import { defineComponent } from 'vue';
//import Modal from './Modal'
//modalController
import Details from './Details'
import {ref} from 'vue';
import { heart, triangle,add } from "ionicons/icons";
import Popup from './NewPopup.vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    Details,
  },
   data() {

     const popupTriggers=ref({
       buttonTrigger:false,
       timedTrigger:false,
     })

     const TogglePopup=(trigger)=>{
       popupTriggers.value[trigger]=!popupTriggers.value[trigger]
       
     }
    return {
      heart,
      triangle,
      add,
      Popup,
      popupTriggers, 
      TogglePopup,
      todos: [
        {
        name1:"Too much traffic",
      },
      {
        name1:"crowded",
        
      },
      {
        name1:"Pollution",
      },
      {
        name1:"Corona",
      }],

        Addsolution: [
        {
        solution:"completed"
      },
      {
        solution:"Incompleted"
      },
      {
        solution:"completed"
      },
      {
        solution:"Incompleted"
      }],
    }
  },

  methods:{
    shareData()
    {
      this.$router.push({name:"Issue",params:{data:this.todos}})
      console.log(this.todos)  
    },
    //async handleClick() {
    //  const modal = await modalController
    //    .create({
    //      component: Modal,
    //      cssClass: 'my-custom-class',
    //      componentProps: {
    //        name:'String',
    //        solution:'String'
    //      },
    //    })
    //  return modal.present();
    //},

    onSubmit(newIssue){
    this.todos.push({
      name1:newIssue,
      
    })
  },
  }
});


      
    
</script>

<style scoped>
.todo-fab {
  position: fixed;
  bottom: 25px;
  right: 15px;
  font-size: 30px;
}

.content {
  padding: 10px 10px 10px 0px
}

.main{
  color:blue ;
}

ion-icon {
      color:blue;
}


.clickable-icon {
  cursor: pointer;
}
</style>