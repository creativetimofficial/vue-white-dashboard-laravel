<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{show: isOpen}">
      <a data-toggle="dropdown" class="settings-icon">
        <i class="fa fa-cog fa-2x" @click="toggleDropDown"> </i>
      </a>
      <ul class="dropdown-menu" :class="{show: isOpen}">
        <li class="header-title"> Sidebar Background</li>
        <li class="adjustments-line">

          <a class="switch-trigger background-color">
            <div class="badge-colors text-center">
              <span v-for="item in sidebarColors" :key="item.color" class="badge filter"
                    :class="[`badge-${item.color}`,{active:item.active}]"
                    :data-color="item.color"
                    @click="changeSidebarBackground(item)"></span>
            </div>
            <div class="clearfix"></div>
          </a>
        </li>

        <li class="button-container">
          <a href="https://www.creative-tim.com/product/vue-white-dashboard-pro-laravel" target="_blank" class="btn btn-primary btn-block btn-round">Upgrade to Pro</a>
          <a href="https://vue-white-dashboard-laravel.creative-tim.com/documentation/" target="_blank" class="btn btn-default btn-block btn-round">
            Documentation
          </a>
          <a
            href="https://www.creative-tim.com/product/vue-white-dashboard-laravel"
            target="_blank"
            rel="noopener"
            class="btn btn-info btn-block btn-round"
          >
            Download now
          </a>
          <a
            href="https://github.com/creativetimofficial/vue-white-dashboard-laravel"
            target="_blank"
            rel="noopener"
            class="btn btn-default btn-block btn-round"
          >
            Star on github
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
    },
    data() {
      return {
        isOpen: false,
        sidebarColors: [
          { color: 'primary', active: false, value: 'primary' },
          { color: 'vue', active: true, value: 'vue' },
          { color: 'info', active: false, value: 'blue' },
          { color: 'success', active: false, value: 'green' }
        ]
      }
    },
    methods: {
      toggleDropDown() {
        this.isOpen = !this.isOpen
      },
      closeDropDown() {
        this.isOpen = false
      },
      toggleList(list, itemToActivate) {
        list.forEach((listItem) => {
          listItem.active = false
        });
        itemToActivate.active = true
      },
      changeSidebarBackground(item) {
        this.$emit('update:backgroundColor', item.value)
        this.toggleList(this.sidebarColors, item)
      },
      toggleMode(type) {
        let docClasses = document.body.classList;
        if(type === 'white') {
          docClasses.add('white-content')
        } else {
          docClasses.remove('white-content')
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "~@/assets/sass/black-dashboard/custom/variables";
  .settings-icon {
    cursor: pointer;
  }
  .badge-vue {
    background-color: $vue;
  }
</style>
