app.component("review-form", {
     
    template:
    // prevent the default action of the form browser refresh
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">

            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
            </select>
            <input class="button" type="submit" value="Submit">
    </form>`,
    data(){ 
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {  
        onSubmit(){
        if (this.name === "" || this.review === "" || this.rating === null){
            alert("Review is incomplete. Please fill out every field.")
            return
        }
        
        let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating
            //we need to send this up, we do not want it 
            //to live on the form we want it to live on the product.
            }
            this.$emit('review-submitted', productReview)
            //once sent we need to clear out the fields
            this.name = ''
            this.review = ''
            this.rating = null
        }
    }
    //once the form is created we can import it to html 
})