<template>
  <card class="stacked-form" title="Stacked Form">
    <h4 slot="header" class="card-title">Edit Profile</h4>
    <form @submit.prevent>
      <base-input v-model="user.email" label="Email" type="email" placeholder="Enter email"/>
      <validation-error :errors="apiValidationErrors.email" /> 
      <base-input v-model="user.name" label="Name" placeholder="Name"/>
      <validation-error :errors="apiValidationErrors.name" />
      <base-button @click="updateProfile()" class="mt-3" native-type="submit" type="primary">Submit</base-button>
    </form>
  </card>
</template>

<script>
import ValidationError from "@/components/ValidationError.vue";
import formMixin from "@/mixins/form-mixin";
export default {
  mixins: [formMixin],
  components: {
    ValidationError
  },
  props: {
      user: Object
    },
  methods: {
     async updateProfile() {
       if (this.$isDemo && ["1"].includes(this.user.id)) {
          await this.$notify({
            type: "danger",
            icon: 'tim-icons icon-bell-55',
            message: "You are not allowed to change data of default users.",
          });
          return;
        }
        try {
          await this.$store.dispatch("profile/update", this.user)
          this.resetApiValidation();
          this.$notify({
            type: 'success',
            message: 'Profile updated successfully.',
            icon: 'tim-icons icon-bell-55',
          })
          await this.$store.getters["profile/me"]
        } catch (e) {
          this.$notify({
            type: 'danger',
            message: 'Oops, something went wrong!',
            icon: 'tim-icons icon-bell-55',
          })
          this.setApiValidation(e.response.data.errors)
        }
    }
  }
}
</script>