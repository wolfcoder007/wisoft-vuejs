<template>
    <div>
      <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <section class="hero__area-3">
        <div class="container">
          <div class="row">
            <div class="col-xxl-11 col-xl-11 col-lg-11 col-md-11">
                <div class="hero__content-6 text-anim hero__inner-3">
                  <h2 class="sec-sub-title">UAE#1</h2>
                  <!-- <img class="hero__arrow-icon" src="@/assets/imgs/hero/4/arrow-icon.png" alt="Arrow Icon"> -->
                    <h1 class="hero__title-6 animation__char_come text-size" data-speed="1">Digital Marketing Agency<br>Create Business Everyday
                  </h1>
                
                 <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <p >Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with your dev environment</p>
                 </div>
                  
                  
                    <router-link to="/contact">
                      <button class="btn-hover hero-btn">Let's Try</button>
                    </router-link>
                    <div class="scroll-down">
                    <button><img src="@/assets/imgs/icon/arrow-down-sm.png" alt="arrow icon"></button>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="wrapper">
          <div>
            <div class="video-info">
            <div class="video-intro">
              <input id="video_check" type="checkbox">
              <div class="intro-title">
                <h4 class="video-title" @click="toggleSound">Watch <span>video intro</span></h4>
                <h4 class="video-title close-video-title" style="color:brown" @click="toggleSound">Close <span>video intro</span></h4>
              </div>
              <div class="video">
                <video ref="videoPlayer" :muted="muted" src="@/assets/video/RewindWisoft.mp4" loop autoplay playsinline></video>
              </div>
            </div>
          </div>
          </div>
          
        </div>
        <div class="hero3-img-ani">
          <img src="@/assets/imgs/hero/3/1.jpg" alt="Hero Image" class="hero3-img">
        </div>
      </section>
      </main>
      </div>
      </div>
    </div>
</template>
<script>
   // jquery
   import $ from "jquery";
    import { gsap } from 'gsap';
   import { SplitText } from 'gsap'
  //  gsap.registerPlugin(SplitText);
   export default {
    name: 'HeroSection',
    data () {
      return {
        muted: true,
      }
    },
    mounted(){
      this.HeroSectionvideo()
      // this.toggleSound()
    },
    methods: {
      toggleSound () {
      this.muted = !this.muted;
    },
      HeroSectionvideo: function(){
        const radio_buttons = document.querySelector("#video_check");
  const video_start = document.querySelector(".hero__area-3");

  if (radio_buttons) {
    radio_buttons.addEventListener('click', function () {
      let video = document.querySelector(".video-title")
      let videoClose = document.querySelector(".video-title.close-video-title")
      if (radio_buttons.checked) {
        document.querySelector(".wrapper").style.zIndex = "1";
        video.style.display = "none";
        videoClose.style.display = "block";
        video_start.classList.add('start-video');
        document.querySelector('.header__area-3').classList.add('bg-white');

      }
      else {
        document.querySelector(".wrapper").style.zIndex = "999";
        video.style.display = "block";
        videoClose.style.display = "none";
        video_start.classList.remove('start-video');
        document.querySelector('.header__area-3').classList.remove('bg-white');
      }
    });
  }
  /////////////////////////////////////////////////////
    },
 
  
  },
  
 
}
</script>

<style scoped>
h1{
    animation: ani 2s;
    /* text-align: center; */
}

@keyframes ani{
    from{
        letter-spacing: 10px;
        filter: blur(5px);
        opacity: 0;
    }to{
        letter-spacing: 0;
        filter: blur(0);
        opacity: 1px;
    }
}

.hero-btn {
  border: 1px solid black;
  border-radius:20px;
  width: 150px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 19px;
}
.hero-btn:hover {
  background-color: black;
  color: antiquewhite;
}
.text-size{
  font-weight:500;
  font-size: 70px;
}
@media only screen and (max-width: 768px) {
  .hero-btn
  {
   margin-bottom: 50px;
  }
  .text-size{
    font-size: 40px;
  }
}



</style>