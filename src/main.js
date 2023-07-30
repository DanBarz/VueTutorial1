const app = Vue.createApp({

data(){
        return {
            cart: 0,
            premium: true,
            details: ['10% cotton', '10% wool', '80% polyester'],
        };

       
    },
    methods: {
        
    }
    
    
});


// The usage of this below is for Vue 2, Vue 3 uses a different syntax
//var app = new Vue({
//     el: '#app',
// })