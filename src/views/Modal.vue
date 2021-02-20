<template>
     <ion-header ref="modal" translucent>
            <ion-toolbar color="success">
              <ion-title >Status</ion-title>
              <ion-buttons slot="end">
                <ion-button v-on:click="handleDismiss()" >Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content fullscreen>
            <ion-list>
              <ion-item>
                <ion-label>
                  <h2>Too much traffic</h2>
                  <p>Stay Healthy</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-label>
                  <h2>crowded</h2>
                  <p>wear mask</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-label>
                  <h2>Pollution</h2>
                  <p>wear mask</p>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-content>
</template>

<script>

export default {
 name: "SimpleModal",
 methods:{
   handleDismiss(){
     this.$refs['modal'].hide()
   }
	}
}
</script>
<style>
</style>