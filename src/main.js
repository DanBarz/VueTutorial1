
const app = Vue.createApp({
    data(){
        return {
            product: "Socks",
            description: "The most comfortable socks you will ever wear.",
            image: './src/assets/socks_blue.jpg',
            url: 'https://www.google.com/',
            inStock: true,
            inventory: 10,
            on_sale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    variant_id: 2234,
                    variant_color: 'green',
                    variant_image: './src/assets/socks_green.jpg'
                },
                {
                    variant_id: 2235,   
                    variant_color: 'blue',
                    variant_image: './src/assets/socks_blue.jpg'
                }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            cart: 0,
           
        }

       
    },
    methods: {
        add_to_cart: function () {
            this.cart += 1
            this.inventory -= 1
            if (this.inventory == 0){
                this.inStock = false
                this.on_sale = false
            }
        },
        // we can use ESX Shorthand for the above function and it looks like this:
        update_product(variant_image){
            this.image = variant_image
        },
        remove_item:function () {
            this.cart -= 1
            this.inventory += 1
            if (this.inventory > 0){
                this.inStock = true
                this.on_sale = true
            }
        }
        
    }   
})
