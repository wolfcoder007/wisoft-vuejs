<template>
  <div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <section class="brand__area">
            <div class="container pt-140 pb-100">
              <div class="row">
                <div class="col-xxl-12">
                  <h2 class="brand__title-3 title-anim brand-4">
                    THE DIGITAL TEAM

                    <br />TO POWER YOUR DREAM
                  </h2>
                  <div class="brand__list-3">
                    <div class="brand__item-2 fade_bottom">
                      <img src="@/assets/imgs/brand/1.png" alt="Brand Logo" />
                    </div>
                    <div class="brand__item-2 fade_bottom">
                      <img src="@/assets/imgs/brand/2.png" alt="Brand Logo" />
                    </div>
                    <div class="brand__item-2 fade_bottom">
                      <img src="@/assets/imgs/brand/3.png" alt="Brand Logo" />
                    </div>
                    <div class="brand__item-2 fade_bottom">
                      <img src="@/assets/imgs/brand/4.png" alt="Brand Logo" />
                    </div>
                    <div class="brand__item-2 fade_bottom">
                      <img src="@/assets/imgs/brand/5.png" alt="Brand Logo" />
                    </div>
                    <div class="brand__item-2 fade_bottom">
                      <img src="@/assets/imgs/brand/6.png" alt="Brand Logo" />
                    </div>
                  </div>
                </div>
              </div>

              <google-review></google-review>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import gsap from "gsap";
import { scrollTrigger } from "gsap/all";
import GoogleReview from "./GoogleReview.vue";
//gsap.registerPlugin(scrollTrigger)
export default {
  name: "BrandSection",
  components: {
    GoogleReview,
  },
  data() {
    return {};
  },
  mounted() {
    this.brandAnimation();
  },
  methods: {
    brandAnimation: function () {
      gsap.set(".fade_bottom", { y: 30, opacity: 0 });
      let device_width = window.innerWidth;
      if (device_width < 1023) {
        const fadeArray = gsap.utils.toArray(".fade_bottom");
        fadeArray.forEach((item, i) => {
          let fadeTl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top center+=200",
            },
          });
          fadeTl.to(item, {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
          });
        });
      } else {
        gsap.to(".fade_bottom", {
          scrollTrigger: {
            trigger: ".fade_bottom",
            start: "top center+=300",
            markers: false,
          },
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          stagger: {
            each: 0.2,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.brand-4 {
  font-weight: 900;
  font-size: 50px;
  color: rgb(0, 0, 0);
}
</style>
