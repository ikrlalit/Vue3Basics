app.component('product-display',{
    props:{
      premium:{
        type:Boolean,
        required:true
      }
    },
    template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
      <div class="product-image">
        <img :src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inventory>10">In Stock</p>
        <p v-else-if="inventory<=10 && inventory>0">Almost sold out!!</p>
        <p v-else>Out of Stock</p>
        <p>shipping: {{shipping}}</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div v-for="variant in variants"
         :key="variant.id"
         @mouseover="updateImage(variant.image)"
         class="color-circle"
         :style="{backgroundColor:variant.color}"></div>
        <button class="button" :disabled="inventory<=0" :class="{disabledButton:inventory<=0}">Add to cart</button>
      </div>
    </div>
  </div>`,
  data(){
    return{
        product: 'Socks',
        brand: 'Vue Mastery',
        image:'./assets/images/socks_green.jpg',
        inventory:15,
        details:['50% cotton','30 % wool','20 % polyster'],
        variants:[{id:2234,color:'green',image:'./assets/images/socks_green.jpg'},
                  {id:2235,color:'blue',image:'./assets/images/socks_blue.jpg'},],

    }
},
methods:{
    updateImage(variantImage){
        this.image=variantImage
    }
    ,
  addToCart(){
      this.$emit('add-to-cart')
  }
},
computed:{
    title(){
        return this.brand+ ' '+ this.product
    },
    shipping(){
      if (this.premium){
        return 'Free'
      }
      return 2.99
    }

  }
})