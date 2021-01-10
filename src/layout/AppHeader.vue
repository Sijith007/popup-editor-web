<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg fixed-top py-3" v-bind:class="{ active: highlightNav }">
      <!-- <div class="container"> -->
      <div class="container-fluid">
        <a href="#" class="navbar-brand text-uppercase font-weight-bold"
          >Popup Editor APP</a
        >
        <!-- <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler navbar-toggler-right"
        >
          <i class="fa fa-bars"></i>
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a :href="'/#/feed-list'" class="nav-link text-uppercase font-weight-bold"
                >Feeds <span class="sr-only">(current)</span></a
              >
            </li>
          </ul>
        </div> -->
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      highlightNav: true,
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      if (event.target.scrollingElement.scrollTop > 10 ) {
        this.highlightNav = true;
      } else {
        this.highlightNav = false;
      }
    }
  }
};
</script>
<style scoped>
.navbar {
  transition: all 0.4s;
}

.navbar .nav-link {
  color: #fff;
}

.navbar .nav-link:hover,
.navbar .nav-link:focus {
  color: #fff;
  text-decoration: none;
}

.navbar .navbar-brand {
  color: #fff;
  padding-left: 0.8rem;
}

/* Change navbar styling on scroll */
.navbar.active {
  background: #fff;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar.active .nav-link {
  color: #555;
}

.navbar.active .nav-link:hover,
.navbar.active .nav-link:focus {
  color: #555;
  text-decoration: none;
}

.navbar.active .navbar-brand {
  color: #555;
}

/* Change navbar styling on small viewports */
@media (max-width: 991.98px) {
  .navbar {
    background: #fff;
  }

  .navbar .navbar-brand,
  .navbar .nav-link {
    color: #555;
  }
}
.text-small {
  font-size: 0.9rem !important;
}

body {
  min-height: 100vh;
  background-color: #4ca1af;
  background-image: linear-gradient(135deg, #4ca1af 0%, #c4e0e5 100%);
}
</style>
