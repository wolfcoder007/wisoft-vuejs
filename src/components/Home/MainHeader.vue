<template>
  <div>
    <cursor_anim></cursor_anim>

    <!-- Header area start -->
    <header class="header__area-3">
      <div class="header__inner-3">
        <div class="header__logo-2">
          <a href="/" class="logo-dark"
            ><router-link to="/"></router-link
            ><img
              src="@/assets/imgs/logo/wisoft-logo1.png"
              alt="Site Logo"
              class="logo-main"
              style="width: 150px; height: 50px"
          /></a>
          <!-- <a href="/" class="logo-light"
            ><img
              src="@/assets/imgs/logo/wisoft-logo1.png"
              alt="Site Logo"
              style="width: 100%; height: 60px"
          /></a> -->
        </div>
        <div class="header__nav-2">
          <ul class="main-menu-3 menu-anim list-menu">
            <router-link to="/contact">
              <li><button class="hero-btn">Let's Talk</button></li></router-link
            >
            <li>
              <a href="tel:+971 4 321 0710"
                ><i class="fa-solid fa-phone"> </i>+971 4 321 0710</a
              >
            </li>
          </ul>
        </div>
        <div class="header__nav-icon-3">
          <button class="search-icon" id="search_close">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <button class="search-icon" id="search_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <h6 class="menu-top">Menu</h6>
          <button id="open_offcanvas">
            <img src="@/assets/imgs/icon/menu-black.png" alt="Menubar Icon" />
          </button>
        </div>
      </div>
    </header>

    <div class="header__search">
      <form action="#">
        <input type="text" name="s" id="s" placeholder="Search.." />
      </form>
    </div>
    <!-- Header area end -->

    <div class="offcanvas__area">
      <div class="mob">
        <ul role="menu" class="men">
          <li class="men-li" role="none">
            <a><router-link to="/about">About</router-link></a>
          </li>
          <li class="men-li" role="none">
            <a><router-link to="/blog">Blog</router-link></a>
          </li>

          <li class="men-li" role="none">
            <a><router-link to="/career">Career</router-link></a>
          </li>
          <li class="men-li" role="none">
            <a><router-link to="/casestudy">Case Study</router-link></a>
          </li>
          <li class="men-li" role="none">
            <a><router-link to="/services">Service</router-link></a>
          </li>
          <li class="men-li" role="none">
            <a><router-link to="/team">Team</router-link></a>
          </li>
          <li class="men-li" role="none">
            <a><router-link to="/contact">Contact</router-link></a>
          </li>
        </ul>

        <div class="toggler-menu">
          <ul>
            <li>
              <div class="to-wrapper">
                <a href="">Digital Marketing</a>
                <button class="to-bu" @click="handleClick(1)">
                  {{ activesub == 1 ? "-" : "+" }}
                </button>
              </div>
              <ul class="cj" v-if="activesub == 1">
                <li><a>Lead Generation</a></li>
                <li><a>Content Marketing</a></li>
                <li><a>Marketing Automation</a></li>
                <li><a>Pay per click Advertising</a></li>
                <li><a>Programmatic Advertising</a></li>
              </ul>
            </li>
            <li>
              <div class="to-wrapper">
                <a href=""> Technologies</a>
                <button class="to-bu" @click="handleClick(2)">
                  {{ activesub == 2 ? "-" : "+" }}
                </button>
              </div>
              <ul class="cj" v-if="activesub == 2">
                <li><a>UI/UX Design Services</a></li>
                <li><a>Website Development</a></li>
                <li><a>Mobile App Development</a></li>
                <li><a>Web Annual Maintainance</a></li>
                <li><a>E-commerce Development</a></li>
                <li>
                  <a>CRM, Payment Gateway & Third Party System Integrations</a>
                </li>
              </ul>
            </li>
            <li>
              <div class="to-wrapper">
                <a href="">Creative Services</a>
                <button class="to-bu" @click="handleClick(3)">
                  {{ activesub == 3 ? "-" : "+" }}
                </button>
              </div>
              <ul class="cj" v-if="activesub == 3">
                <li><a>Logo Design & Brand Identity</a></li>
                <li><a>Graphic Design</a></li>
                <li><a>UI/UX Design</a></li>
                <li><a>Compaing Design</a></li>
                <li><a>Concept Design</a></li>
              </ul>
            </li>
            <li>
              <div class="to-wrapper">
                <a href="">Search Engine Optimization</a>
                <button class="to-bu" @click="handleClick(4)">
                  {{ activesub == 4 ? "-" : "+" }}
                </button>
              </div>
              <ul class="cj" v-if="activesub == 4">
                <li><a>Local & Regional SEO</a></li>
                <li><a>Content Optimization</a></li>
                <li><a>Web Page Optimization</a></li>
                <li><a>Authority Link Developement</a></li>
                <li><a>SEO Analytics and Reporting</a></li>
                <li><a>Mobile Optimization</a></li>
              </ul>
            </li>
            <li>
              <div class="to-wrapper">
                <a href=""> Social Media Marketing</a>
                <button class="to-bu" @click="handleClick(5)">
                  {{ activesub == 5 ? "-" : "+" }}
                </button>
              </div>
              <ul class="cj" v-if="activesub == 5">
                <li><a>Social Media Stategy</a></li>
                <li><a>Community Management</a></li>
                <li><a>Conent Creation</a></li>
                <li><a>Monitoring & Reporting</a></li>
                <li><a>Digital Agency dark</a></li>
              </ul>
            </li>
            <li>
              <div class="to-wrapper">
                <a href="">SMS Marketing</a>
                <button class="to-bu" @click="handleClick(6)">
                  {{ activesub == 6 ? "-" : "+" }}
                </button>
              </div>
              <ul class="cj" v-if="activesub == 6">
                <li><a>Global SMS Platform</a></li>
                <li><a>SMS Marketing</a></li>
                <li><a>2 Way SMS System</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="offcanvas__body body-canvas">
        <div class="offcanvas__left v">
          <div class="offcanvas__logo">
            <a href="/"
              ><img
                src="@/assets/imgs/logo/wisoft-logo1.png"
                alt="Offcanvas Logo"
                style="width: 60%; height: 50px"
            /></a>
          </div>

          <div class="offcanvas__links side-links">
            <ul>
              <li>
                <a><router-link to="/about">About</router-link></a>
              </li>
              <li>
                <a><router-link to="/blog">Blog</router-link></a>
              </li>
              <!-- <li><a href="career.html">Career</a></li> -->
              <li>
                <a><router-link to="/career">Career</router-link></a>
              </li>
              <li>
                <a><router-link to="/casestudy">Case Study</router-link></a>
              </li>
              <li>
                <a><router-link to="/services">Service</router-link></a>
              </li>
              <li>
                <a><router-link to="/team">Team</router-link></a>
              </li>
              <li>
                <a><router-link to="/Contact">Contact</router-link></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="offcanvas__mid v">
          <div class="offcanvas__menu-wrapper">
            <nav class="offcanvas__menu">
              <ul class="menu-anim list-class">
                <div>
                  <li class="head-list">
                    Digital Marketing
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Lead Generation</a></li>
                      <li><a>Content Marketing</a></li>
                      <li><a>Marketing Automation</a></li>
                      <li><a>Pay per click Advertising</a></li>
                      <li><a>Programmatic Advertising</a></li>
                    </ul>
                  </li>

                  <li class="head-list">
                    Technologies
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>UI/UX Design Services</a></li>
                      <li><a>Website Development</a></li>
                      <li><a>Mobile App Development</a></li>
                      <li><a>Web Annual Maintainance</a></li>
                      <li><a>E-commerce Development</a></li>
                      <li>
                        <a
                          >CRM, Payment Gateway & Third Party System
                          Integrations</a
                        >
                      </li>
                    </ul>
                  </li>
                </div>
                <div>
                  <li class="head-list">
                    Creative Services
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Logo Design & Brand Identity</a></li>
                      <li><a>Graphic Design</a></li>
                      <li><a>UI/UX Design</a></li>
                      <li><a>Compaing Design</a></li>
                      <li><a>Concept Design</a></li>
                    </ul>
                  </li>
                  <li class="head-list">
                    Search Engine Optimization
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Local & Regional SEO</a></li>
                      <li><a>Content Optimization</a></li>
                      <li><a>Web Page Optimization</a></li>
                      <li><a>Authority Link Developement</a></li>
                      <li><a>SEO Analytics and Reporting</a></li>
                      <li><a>Mobile Optimization</a></li>
                    </ul>
                  </li>
                </div>
                <div>
                  <li class="head-list">
                    Social Media Marketing
                    <ul>
                      <li><a>Social Media Stategy</a></li>
                      <li><a>Community Management</a></li>
                      <li><a>Conent Creation</a></li>
                      <li><a>Monitoring & Reporting</a></li>
                      <li><a>Digital Agency dark</a></li>
                    </ul>
                  </li>

                  <li class="head-list">
                    SMS Marketing
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Global SMS Platform</a></li>
                      <li><a>SMS Marketing</a></li>
                      <li><a>2 Way SMS System</a></li>
                    </ul>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>

        <div class="offcanvas__close">
          <button type="button" id="close_offcanvas">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div v-if="isDesktop">
        <floating-whatsapp></floating-whatsapp>
      </div>
    </div>
  </div>
</template>

<script>
import Cursor_Anim from "../Cursor_Anim.vue";
import FloatingWhatsapp from "../Home/FloatingWhatsapp.vue";
import offcanvas from "../Offcanvas.vue";
import $ from "jquery";
export default {
  name: "MainHeader",
  components: {
    FloatingWhatsapp,
    // FloatingChat,
    Cursor_Anim,
  },
  data() {
    return {
      activesub: "",
    };
  },
  computed: {
    isDesktop() {
      return window.innerWidth > 768;
    },
  },
  mounted() {
    this.offcanvas();
  },
  methods: {
    offcanvas: function () {
      $("#open_offcanvas").click(function () {
        $(".offcanvas__area").css("opacity", "1");
        $(".offcanvas__area").css("visibility", "visible");
      });
      $("#close_offcanvas").click(function () {
        $(".offcanvas__area").css("opacity", "0");
        $(".offcanvas__area").css("visibility", "hidden");
      });
      // search icon js
      let header_search = document.querySelector(".header__search");
      let search_icon = document.querySelector("#search_icon");
      let search_close = document.querySelector("#search_close");
      if (header_search) {
        search_icon.addEventListener("click", function () {
          header_search.classList.add("open-search");
          search_icon.style.display = "none";
          search_close.style.display = "block";
        });
        search_close.addEventListener("click", function () {
          header_search.classList.remove("open-search");
          search_icon.style.display = "block";
          search_close.style.display = "none";
        });
      }
    },

    handleClick: function (ac) {
      if (this.activesub == ac) {
        this.activesub = "";
      } else {
        this.activesub = ac;
      }
    },
  },
};
</script>
<style scoped>
/* navbar main page */
.list-menu {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
}
.menu-top {
  margin: 10px;
}
.list-class {
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  /* row-gap: 20px; */
}
.list-class ul li {
  /* padding: 2rem; */
  color: rgb(140, 129, 129);
  margin: 12px;
}
.list-class div {
  padding: 2rem;
  border-right: 1px solid rgb(53, 51, 51);
}
/* .list-menu button {
  border: 1px solid black;
  width: 120px;
  border-radius: 30px;
  padding: 2px;
} */
.list-menu .hero-btn {
  border: 1px solid black;
  border-radius: 20px;
  width: 150px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 19px;
}
.list-menu button:hover {
  background-color: black;
  color: antiquewhite;
}
.list-menu li {
  margin: 0px;
  padding: 0 15px !important;
}
/* hambourger */
.head-list {
  color: #c9f31d;
}
.side-links {
  /* margin-top: 90px !important; */
}
.side-links li {
  font-weight: 500;
}
.offcanvas__mid {
  overflow: scroll;
}
.body-canvas {
  grid-template-columns: 0.8fr 3fr;
}
.v {
  display: none;
}

.fa-phone {
  margin: 0 10px;
}
/*  */
@media screen and (min-width: 960px) {
  .v {
    display: block;
  }
  .mob {
    display: none;
  }
}
.men {
  padding: 20px;
  color: #c9f31d;
  font-size: 23px;
  margin-top: 40px;
}
.men-li a {
  color: #c9f31d;
}
.toggler-menu {
  margin-top: 20px;
  padding: 10px;
}
.to-wrapper {
  display: flex;
  justify-content: space-between;
  /* padding:5px 23px; */
  height: 40px;
}
.to-wrapper a {
  color: white;
  font-size: 19px;
}
.to-wrapper button {
  color: white;
  font-size: 34px;
}
.cj {
  padding: 0px 25px;
}
.cj li {
  /* margin: 5px 0px; */
}
.cj li a {
  color: #c9f31d;
  font-size: 15px;
  transition: all 0.3s ease;
}
.cj li a:hover {
  margin-left: 4px;
}
.offcanvas__links ul li a {
  font-size: 25px;
}
@media screen and (max-width: 960px) {
  .search-icon {
    display: none;
  }
}
@media only screen and (max-width: 480px) {
  .logo-main {
    width: 105px !important;
    height: 35px !important ;
  }
}
</style>
