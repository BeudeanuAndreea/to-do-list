<template>
  <div class="item"> 
     <div class="filters">
      <input class="type" type="radio" name="type" value="all" v-model="fs" > All
      <input class="type"  type="radio" name="type" value="true" v-model="fs"> Completed
      <input class="type"  type="radio" name="type" value="false" v-model="fs"> To do
    </div>   
    <loaditem v-if="loaditem"/> 
      <item :loaditem="loaditem" v-for="item in filterItems" :key="item._id" :item = "item"  v-else/> 
  </div>
</template>

<script>
import api from "@/backend/api";
import { checkServerIdentity } from "tls";
import item from "./item.vue";
import loaditem from './loaditem.vue';
import { EventBus } from '../main';
export default {
  props: ["items"],
   async created() {
     EventBus.$on('delete',id => {
       console.log(id);
       this.deleteItem(id);
     })
     let x = this;
      setTimeout(function() {
        x.loaditem = false;
      },2000)
  }, 
  components: {
    item,
    loaditem,
  },
  data() {
    return {      
      fs : 'all',
      checkedValues: [],
      loaditem: true,
    };
  },
  computed: {
    filterItems(){ 
       let filterArray = [];
       filterArray = this.items.filter( item => {
        let completed = JSON.stringify(item.completed);
         if(completed == this.fs){
          console.log('asdsad')
          return item;
        }
        if(this.fs == "all"){
          return item;
        }
      })
      return filterArray;
    }
  },
  methods: {
    deleteItem(id) {
      api.deleteItem(id).then(() => {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i]._id === id) {
            this.items.splice(i, 1);
          }
        }
         EventBus.$emit('delete',this.items);        
      });
    },
    selectItem(id) {
      let found = false;
      for (let i = 0; i < this.checkedValues.length; i++) {
        if (id == this.checkedValues[i]) {
          found = true;
          break;
        }
      }
      if (!found) {
        this.checkedValues.push(id);
      }
      this.$emit("clicked", this.checkedValues);
    }
  }
};
</script>
<style>
.item {
  margin-top: 20px;
  padding: 20px;  
  box-shadow: 0px 1px 1px 0px #dddddd;
  display: flex;
  flex-flow: column;
  background-color: #F1F1F1;    
}
</style>
