

const app = Vue.createApp({
    data(){
        return {
            brand: 'DanVue Mastery Inc.',
            product: "Socks",
            description: "The most comfortable socks you will ever wear.",
            url: 'https://www.google.com/',
            selectedVariant: 0,
            inventory: 10,
            on_sale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    variant_id: 2234,
                    variant_color: 'green',
                    variant_image: './src/assets/socks_green.jpg',
                    variant_quantity: 10
                },
                {
                    variant_id: 2235,   
                    variant_color: 'blue',
                    variant_image: './src/assets/socks_blue.jpg',
                    variant_quantity: 0
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
            this.selectedInventory -= 1
            console.log(this.selectedInventory)
            if (this.inventory == 0){
                this.on_sale = false
            }
        },
        // we can use ESX Shorthand for the above function and it looks like this:
        update_product(index){
            this.selectedVariant = index
            console.log(index)
        },
        remove_item:function () {
            this.cart -= 1
            this.inventory += 1
            this.selectedInventory += 1
            console.log(this.selectedInventory)
            if (this.inventory > 0){
                this.on_sale = true
            }
        }
        
    },
    
    computed: {
        title(){ 
            return this.brand + ' ' + this.product 
        },

        image() {
            return this.variants[this.selectedVariant].variant_image
        },
        inStock(){
            return this.variants[this.selectedVariant].variant_quantity
        },
        onSale(){
            if (this.on_sale){  
                return this.brand + ' ' + this.product + ' are on sale!'
            }
            else{
                return this.brand + ' ' + this.product + ' are not on sale!'
            }
        }

    }
})
