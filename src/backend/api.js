import axios from 'axios';
import config from '../../project.config.js';
// import Icon from 'vue-awesome/icons';
// Vue.component('icon', Icon);



class RestApi {
   /**
    *Creates an instance of RestApi.
    @param {} siteurl
    * @memberof RestApi
    */
   constructor (siteurl) {
       this.api = siteurl;
   }

   getItems(){
       console.log(config.baseUrl)
       return axios({
           method: 'GET',
           url: `${config.baseUrl}/items`,
       }).then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error(error);
    });
   }

   deleteItem(id){
       return axios({
           method: 'DELETE',
           url: `${config.baseUrl}/delete/item/${id}`,
        //    data: {
        //        itemId : id
        //    }

       }).then((response) => {
           return response.data;
       }).catch((error) => {
        console.log(error);

       });
   }
   updateItem(id,name){
    return axios({
        method: 'PUT',
        url: `${config.baseUrl}/item/${id}`,
         data: {
            name : name
        },
         headers: {
             "Content-Type": "application/json",
        }

    }).then((response) => {
        return response.data;
    }).catch((error) => {
     console.log(error);

    });

    
}

addItem(name){
    return axios({
        method: 'POST',
        url: `${config.baseUrl}/item`,
         data: {
            name : name,
            completed: false
        },
         headers: {
             "Content-Type": "application/json",
        }

    }).then((response) => {
        return response.data;
    }).catch((error) => {
     console.log(error);

    });


}

deleteMany(elements){
    return axios({
        method: 'POST',
        url: `${config.baseUrl}/item/deleteMany`,
         data: {
            elements : elements
        },
         headers: {
             "Content-Type": "application/json",
        }

    }).then((response) => {
        return response.data;
    }).catch((error) => {
     console.log(error);

    });


}
completedItems(elements){
    return axios({
        method: 'PUT',
        url: `${config.baseUrl}/update`,
         data: {
           elements: elements
        },
         headers: {
             "Content-Type": "application/json",
        }

    }).then((response) => {
        return response.data;
    }).catch((error) => {
     console.log(error);

    });

    
}
done(item){
    return axios({
        method: 'PUT',
        url: `${config.baseUrl}/item/${item._id}`,
         data: item,
        
         headers: {
             "Content-Type": "application/json",
        }

    }).then((response) => {
        return response.data;
    }).catch((error) => {
     console.log(error);

    });

    
}


//    login function
//    logIn(user) {
//        return axios({
//            method: 'POST',
//            url: ${this.api}/login,
//            data: {
//                username: user.username,
//                password: user.password
//            },
//            headers: {
//                "Content-Type": "application/json",
//            }
//        })
//        .then((response) => {
//            return response.data;
//        })
//        .catch((error) => {
//            console.error(error);
//        });
//    }
 }
const api = new RestApi(config.baseUrl);
export default api;