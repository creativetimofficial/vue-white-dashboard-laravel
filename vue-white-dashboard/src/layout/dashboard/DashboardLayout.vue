<template>
  <div class="wrapper">
    <side-bar :background-color="backgroundColor">
      <template slot="links">
        <sidebar-link
          to="/dashboard"
          :name="$t('sidebar.dashboard')"
          icon="tim-icons icon-chart-pie-36"
        />
        <sidebar-link
          to="#"
          :name="$t('sidebar.examples')"
          icon="fab fa-vuejs fa-2x"
        />
        <sidebar-link
          to="/examples/user-profile"
          :name="$t('sidebar.userProfile')"
          class="ml-5"
        />
        <sidebar-link
          to="/examples/user-management/list-users"
          :name="$t('sidebar.userManagement')"
          class="ml-5"
        />
        <sidebar-link
          to="/icons"
          :name="$t('sidebar.icons')"
          icon="tim-icons icon-atom"
        />
        <sidebar-link
          to="/maps"
          :name="$t('sidebar.maps')"
          icon="tim-icons icon-pin"
        />
        <sidebar-link
          to="/notifications"
          :name="$t('sidebar.notifications')"
          icon="tim-icons icon-bell-55"
        />
        <sidebar-link
          to="/profile"
          :name="$t('sidebar.userProfile')"
          icon="tim-icons icon-single-02"
        />
        <sidebar-link
          to="/table-list"
          :name="$t('sidebar.tableList')"
          icon="tim-icons icon-puzzle-10"
        />
        <sidebar-link
          to="/typography"
          :name="$t('sidebar.typography')"
          icon="tim-icons icon-align-center"
        />
        <sidebar-link
          to="/dashboard?enableRTL=true"
          :name="$t('sidebar.rtlSupport')"
          icon="tim-icons icon-world"
        />
        <a
          href="https://www.creative-tim.com/product/vue-white-dashboard-pro-laravel"
          target="_blank"
          class="btn btn-warning"
          rel="noopener"
          style="margin-left: 13px"
        >
          <span class="btn-inner--icon" style="margin-left: -26px"
            ><i class="fas fa-download mr-2"></i
          ></span>
          <span
            class="nav-link-inner--text"
            style="margin-left: -34px; margin-right: 25px; margin-top: 5px"
            >Upgrade to PRO</span
          ></a
        >
      </template>
    </side-bar>
    <sidebar-share :background-color.sync="backgroundColor"> </sidebar-share>
    <div class="main-panel" :data="backgroundColor">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import SidebarShare from "./SidebarSharePlugin";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
    SidebarShare,
  },
  data() {
    return {
      backgroundColor: "primary",
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
