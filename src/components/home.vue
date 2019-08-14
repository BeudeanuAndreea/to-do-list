 <template>
  <div class="create">
    <h2>My To Do List</h2>
    <div class="add">
    <input v-model="name" id="inputCreate" type="text" placeholder="Title.." />
    <button id="create" type="button" v-on:click="addItem(name)">Add</button>
    <button id="delete" type="submit" v-on:click="deleteMany()">Delete selected</button>
    </div>
    <lista :items="items" :loaditem="loaditem" @clicked="onClickChild" />
  </div>  
</template>


<script>
import api from "@/backend/api";
import lista from "./lista.vue";
import loaditem from './loaditem.vue';
import { setTimeout } from 'timers';
import { EventBus } from '../main';
export default {
  components: {
    lista,
    loaditem
  },
  data() {
    return {
      name,
      items: [],
      checkedValues: [],
      childSelectedItems: [],
      load: true,
      loaditem: false,
      newItem: false
    };
  },
  async created() {
    EventBus.$on('addItemToDone',item => {
    })
    this.items = await api.getItems();
  },
  methods: {
    addItem(name) {      
      if(name.length > 3){
        api.addItem(name).then(response => {
        this.items.push(response);
      });
      }
      else{
        alert("Add a correct task");
      }      
    },
    deleteMany() {
      api.deleteMany(this.childSelectedItems).then(() => {
        this.childSelectedItems.forEach(element => {
          for (let i = 0; i < this.items.length; i++) {
            if (this.items[i]._id == element) {
              this.items.splice(i, 1);
              break;
            }
          }
        });
      });
    },
    itemDone(item){
      for(let i=0;i< this.items;i++){
        if(items[i]._id == item._id){
          items[i].completed= item.completed;

        }
      }
    },
    completedItems() {
      api.completedItems(this.childSelectedItems).then(() => {
        console.log("merge");
      });
    },
    onClickChild(elements) {
      this.childSelectedItems = elements;
    }
  }
};
</script>

<style>
.create {
  display: flex;
  flex-flow: column;
}
#inputCreate {
  box-shadow: 0 1px 1px 0 #dddddd;
  padding: 5px 10px;  
  border: 0px;
  width: 300px;  
}
button{
  padding: 5px 20px;
  margin-left: 10px; 
}
body{
  display: flex;
  font-family: Calibri;
}
h2{
  margin: 20px auto;
}
.filters{
  margin-top: 20px; 
}
.type:not(:first-child){
  margin-left: 50px;
}
</style>
