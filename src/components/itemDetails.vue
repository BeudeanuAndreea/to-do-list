<template>
    <div class="container">
        <input type="text" v-model="item.name"/>
        <button type="submit" v-on:click="updateItem(item._id,item.name)">Save</button>
        <button type="submit" v-on:click="deleteItem(item._id)">Delete</button>
    </div>
</template>
<script>
import api from "@/backend/api";
import { EventBus } from '../main';
export default {
    props:['item'],
    data() {
        return {
            items:[]
        }
    },
    methods: {
        updateItem(id, name) {
      api.updateItem(id, name);
    },
    deleteItem(id){
        console.log("sdgzgdd")
        EventBus.$emit('delete',id );       
        }
    }
}
</script>
<style scoped>
.container{
    margin-left: 55px;
}
</style>