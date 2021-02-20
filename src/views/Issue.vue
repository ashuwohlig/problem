<template>
<ion-page>
  <ion-header >


      <ion-toolbar>
        <ion-title color="danger">Here  all your solution !</ion-title>
      </ion-toolbar>
      </ion-header>
	
          <ion-content fullscreen>

       <ion-list v-if="allData.length >1">
		<ion-item v-for="(item,index) in allData" :key="index">
		<!--<ion-label>{{item.name1}}</ion-label>-->
    <ion-label>Too much traffic</ion-label>
        </ion-item>
        </ion-list>
		<ion-list v-else>
        <ion-item >
          <ion-label>No Data Found</ion-label>
        </ion-item>
        </ion-list>
        <section>
        </section>
       </ion-content>
        </ion-page>          
</template>

<script>

export default {
name:"Issue",
 data(){
	return{
		allData:[],
	}
 },
 created(){
	this.allData=this.$route.params.data
	console.log("hello",this.allData[0].name1)
 },
  
}
</script>
<style>
</style>

