<template>
    <nav class="navbar main-nav flex-row align-items-md-center" type="" effect="light" expand>
        <a slot="brand" class="navbar-brand mr-0 mr-md-2 d-inline d-md-none" href="/"
           aria-label="Bootstrap">
            Vue White Dashboard Laravel
        </a>
        <div class="row" slot="content-header" slot-scope="{closeMenu}">
            <div class="col-6 collapse-brand">
                <a href="/">

                </a>
            </div>
            <div class="col-6 collapse-close">
                <close-button @click="closeMenu"></close-button>
            </div>
        </div>

        <!-- <div class="d-none d-sm-block ml-auto">
            <ul class="navbar-nav ct-navbar-nav flex-row align-items-center">

            </ul>
        </div> -->
        <ul class="navbar-nav flex-row mr-auto d-none d-md-flex">
          <li class="nav-item">
             <a slot="brand" class="nav-link brand" href="/"
           aria-label="Bootstrap">
            Vue White Dashboard Laravel
        </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://www.creative-tim.com/product/vue-white-dashboard-pro-laravel"
            target="_blank"
            >Upgrade to PRO</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://explore.postman.com/api/6357/laravel-jsonapi"
            target="_blank"
            >API Docs</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://github.com/creativetimofficial/vue-white-dashboard-laravel/issues"
            target="_blank"
            >Support</a
          >
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://www.creative-tim.com/product/vue-white-dashboard-laravel">Download now</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="https://github.com/creativetimofficial/vue-white-dashboard-laravel" target="_blank" rel="noopener">Help with a star</a>
          </li> -->
        </ul>
      <div class="navbar-nav-scroll ml-md-auto d-lg-inline d-none ">
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
               target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
               target="_blank">
              <i class="fab fa-dribbble"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://www.github.com/creativetimofficial"
               target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <SearchBox class="d-lg-inline d-none" v-if="$site.themeConfig.search !== false"/>
    </nav>
</template>
<script>
  import SearchBox from '@SearchBox'

  export default {
    components: {
      SearchBox
    }
  }
</script>
<style lang="scss">
    nav.main-nav {
      z-index: 50;
        &.navbar {
            background: linear-gradient(0deg,#ba54f5,#e14eca);
            box-shadow: rgba(116, 129, 141, .1) 0 1px 1px 0;
            position: fixed;
            top: 0;
            .container {
                max-width: 100%;
                width: 100%;
            }
            .navbar-brand,
            .navbar-brand:hover{
                color: white;
            }
        }

        &.navbar .nav-link {
            color: white !important;
            &:hover {
                border: 0 !important;
                margin: 0 !important;
            }
            &.router-link-active {
                color: white !important;
                border-bottom: 2px solid white !important;
            }
        }

        &.navbar .search-box .suggestion a {
            color: inherit;
        }
    }
</style>
