<template>
<div>
    <transition name="slide-fade" mode="out-in">
      <loaditem v-if="newItem"/>
        <div class="singleItem" v-else>
            <input type="checkbox" class="checkbox"  v-on:click="$parent.selectItem(item._id)" />
            <p class= "task" v-bind:class="{complete : item.completed} ">{{item.name}}</p>
           <font-awesome-icon  icon="pen" class=" button update"  v-on:click="isHidden = !isHidden"></font-awesome-icon>           
           <font-awesome-icon class="checked" icon="check" v-on:click="done(item)" v-model="item.completed"></font-awesome-icon> 
        </div>   
    </transition>
     <component :item="item" v-bind:is="component" v-if="isHidden" />
</div>
</template>

<script>
import api from "@/backend/api";
import { setTimeout } from 'timers';
import loaditem from './loaditem.vue';
import { EventBus } from '../main';
import itemDetails from "./itemDetails.vue"
export default {
  data() {
    return {
      newItem: false,
      isHidden: false,
      component: 'itemDetails'
    }
  },
  components: {
    loaditem,
    itemDetails
  },
    props: ["item"],
    methods:{
        done(item){
          console.log("aici")
            item.completed= !item.completed;
            api.done(item).then((response) => {
              EventBus.$emit('addItemToDone',this.item);
              console.log('items', this.item)
            })
        }
    },
    created() {
      EventBus.$on('newItemLoading', newItem =>{
        this.newItem= newItem;
      } )
      console.log('child', this.newItem)
    }
}
</script>


<style>
.singleItem {
  display: flex;
  min-width: 507px;
  flex-direction: row;
  align-items: center;
  height: 30px;
  margin: 10px auto;
}
.task{
  display: inline-block;
  width: 100%;
  padding: 5px;
}

.checkbox {
  margin: 20px 20px;
}
.name{
    border: 0px;
    padding: 5px;
    width: 300px;
    margin-bottom: 10px;
}
.slide-fade-enter {
  opacity: 0;
}

.slide-fade-enter-active  {
  transition: opacity 1s;
  opacity: 1;
}

.slide-fade-leave {
  opacity: 1;
}

.slide-fade-leave-active  {
  transition: opacity 1s;
  opacity: 0;
}
.complete{
    background-color: rgb(100, 196, 100);
    color: white;
    display: inline-block;
    width: 100%;
}
.checked{
  color: rgb(82, 177, 82);
  cursor: pointer;
  margin: 0 20px;
}
.button {
  cursor: pointer;
}
.update{
  margin-left:  60px;
  color: rgb(92, 92, 92);
}
span{
  width: 500px;
}

</style>