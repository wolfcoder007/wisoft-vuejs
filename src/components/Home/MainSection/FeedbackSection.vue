<template>
    <div>
      <!-- feedback -->
        <section class="testimonials">
        <!-- testimonial -->
        <div class="testimonial-box-container">
          <!-- box -->
          <div class="testimonial-box" v-for="post in postsLimited"  v-bind:key="post.id"  >
            <!-- <div class="box-top" v-if="index <= 3"> -->
              <div class="box-top">
              <!-- profile -->
              <div class="profile">
                <div class="profile-img">
                  <img src="@/assets/imgs/review/1.png" alt="user">
                </div>
                <!-- name & userName -->
                <div class="name-user">
                  <strong>{{ post.name }}</strong>
                  <span>{{post.email}}</span>
                  <div class="reviews">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
                </div>
              </div>
            </div>

            <!-- commentssss -->
            <div class="client-comment">
              <p>{{ post.body }}</p>
            </div>

          </div>
        </div>
        <div class="hero-item-btn">
          <button class=" hero-btn1">See All Reviews</button>
        </div>
      </section>
    </div>
</template>


<script> 
  import axios from 'axios';
  export default{
    name:'TestimonialSection',
    data(){
      return{
       posts:[],
      }
    },
    mounted(){
      axios.get('https://jsonplaceholder.typicode.com/comments').then((response)=>{
          console.log(response.data.name,"name")
         this.posts = response.data
        }).catch((error) =>{
          console.log(error)
        })
    },
    computed: {
    postsLimited() {
        return this.posts.slice(0,3)
    }
}

   
  }
</script>
<style scoped>
 *{
  margin: 0;
  padding: 0;
 }
 a{
  text-decoration: none;
 }
 .testimonials{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
 }
 .testimonial-heading{
  letter-spacing: 1px;
  margin: 20px 0px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .testimonial-heading h1{
  font-size: 2.2rem;
  font-weight: 500;
  background-color: #202020;
  color: #ffffff;
  padding:10px 20px;
 }
 .testimonial-heading span{
  font-size: 1.3rem;
  color: #252525;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
 }
 .testimonial-box-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
 }
 .testimonial-box{
  width:300px;
  box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
  background-color: #ffffff;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  height:300px;
 }
 .profile-img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;

 }
 .profile-img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

 }

 .profile{
  display: flex;
  align-items: center;
 }
.name-user{
  display: flex;
  flex-direction: column;

}
.name-user strong{
  color: #3d3d3d;
  font-size: 1.1rem;
  letter-spacing: 0.5px;

}
.name-user span{
  color: #979797;
  font-size: 0.8rem;

}
.reviews{
  color: #f9d71c;
}

.box-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.client-comment p{ 
  font-size: 0.9rem;
  color: #4b4b4b;

}
.testimonial-box:hover{
  transform: translate(-10px);
  transition: all ease 0.3s;
}

.hero-item-btn .hero-btn1{
  border: 1px solid black;
  border-radius: 20px;
  width: 150px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  cursor: pointer;
  margin-bottom: 20px;
  
}
.hero-item-btn .hero-btn1:hover{
  color: white;
  background: black;
}

</style>