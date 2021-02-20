<template>
   <form @submit.prevent="onSubmit">
          <ion-item color="light">
            <input v-model="newissue" expand="block" type="text" name="name" class="w3-input w3-border"  placeholder="Type Here..."  >
		<!--<input v-model="newissue" expand="block" type="text" name="name" class="w3-input w3-border"  placeholder="tell..."  >-->        
			<ion-button size="medium" type="submit">Add </ion-button>
          </ion-item >
    </form>
</template>

<script>
import { IonInput  } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
	components:[IonInput,],
data()
	{
		return {
				newissue:"",
		}
	}, 
	methods:{
		onSubmit(){
				console.log("hello")
				console.log("hii",this.newissue)
			
				this.$emit("on-newIssue",this.newissue)
				this.newissue="";
		}
	}
}
)
</script>

<style>
input{
display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
}
</style>