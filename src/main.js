const app = Vue.createApp({

data(){
        return {
            cart: [],
            premium: true,
            more_detail: ['10% cotton', '10% wool', '80% polyester'], 
        };

       
    },
    methods: {
        update_cart(variant_id){
        this.cart.push(variant_id)
    },
        remove_item (variant_id) {
        this.cart.pop(variant_id)
        }
    }
    
    
});


// The usage of this below is for Vue 2, Vue 3 uses a different syntax
//var app = new Vue({
//     el: '#app',
// })