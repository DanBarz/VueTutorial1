app.component("product-display", {
    props: {
        premium: {
        type: Boolean,
        required: true
        },
        details: {
            type: Array,
        }
    },
    template:
    /*html*/
    `<div><h1>{{ title }}<h1></div>
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src ="image">
         
        </div>
        <div class="product-info">
          <h1>{{ product }}</h1>
          <p>{{ description }}</p>
          
          <p><a :href="url">click to Google</a></p>
          <p v-if="inventory > 3">In Stock</p>
          <p v-else-if="inventory < 4 && inventory > 0">Almost Sold Out</p>
          <p v-else :class ="{ outofstock: !inStock }">Out of Stock</p>
          <p>{{ onSale }}</p>
          <p>Shipping: {{ shipping }}</p>
          <p v-if="on_sale"><span style="color: red;">In Stock</span></p><!--do not need to mention true as it is true if it matches-->
          <p v-else>This product is: <span style="color: rgb(0, 34, 255);">Out of Stock</span></p>
      

          <ul>
            <li v-for="detail in detailarray">{{ detail }}</li>
            <!-- assembly line for making lists -->
          </ul>
          <div v-for="(variant, index) in variants" 
            :key="variants.variant_id"
            class="color-box"
            :style="{ backgroundColor: variant.variant_color }" 
            @mouseover="update_product(index)">
            
          </div>
          <div>
            <li v-for="size in sizes">{{ size }}</li>
          </div>
          <!-- <button class="button" v-on:click="cart += 1">Add to Cart</button> WE CAN REPLACE THE CALCULATION WITH A METHOD -->
          <button 
            class="button"
            v-on:click="add_to_cart" 
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }" 
            >Add to Cart
          </button>
          
          
          <div>
            <button class="button" v-on:click="remove_item">Remove Item</button>
          </div>
        
        </div>
      </div>
    </div>`,

data(){
    return {
        brand: 'DanVue Mastery Inc.',
        product: "Socks",
        description: "The most comfortable socks you will ever wear.",
        url: 'https://www.google.com/',
        selectedVariant: 0,
        inventory: 10,
        on_sale: true,
        detailarray: ['50% cotton', '30% wool', '20% polyester'],
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
    
       
    };

   
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
    },
    shipping(){
        if (this.premium){
            return "Free"
        }
        return "$2.22"
        }
}
})