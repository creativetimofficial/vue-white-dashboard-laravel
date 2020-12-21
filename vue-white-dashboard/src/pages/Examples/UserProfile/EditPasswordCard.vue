<template>
  <card class="stacked-form" title="Change Password">
    <h4 slot="header" class="card-title">Change Password</h4>
    <form ref="password_form" @submit.prevent>
      <div>
        <base-input v-model="password" label="Password" type="password" placeholder="Password"/>
        <validation-error :errors="apiValidationErrors.password"/>
        <base-input v-model="password_confirmation" label="Password Confirmation" type="password" placeholder="Password Confirmation"/>
        <validation-error :errors="apiValidationErrors.password_confirmation"/>
        <base-button class="mt-3" native-type="submit" type="primary" @click="changePassword()"
          >Submit</base-button
        >
      </div>
    </form>
  </card>
</template>
<script>
  import ValidationError from "@/components/ValidationError.vue";
  import formMixin from "@/mixins/form-mixin";
  export default {
    name: "edit-password-card",

    props: {
      user: Object
    },

    components: {ValidationError},

    mixins: [formMixin],

    data: () => ({
      password: null,
      password_confirmation: null,
    }),

    methods: {
      async changePassword() {
        if (this.$isDemo && ["1"].includes(this.user.id)) {
          await this.$notify({
            type: "danger",
            icon: 'tim-icons icon-bell-55',
            message: "You are not allowed to change data of default users.",
          });
          return;
        }
        this.user.password = this.password;
        this.user.password_confirmation = this.password_confirmation;

        try {
          this.resetApiValidation();
          await this.$store.dispatch("users/update", this.user)
          this.$notify({
            type: 'success',
            message: 'Password changed successfully.',
            icon: 'tim-icons icon-bell-55',
          })
          this.user = await this.$store.getters["profile/me"]
          this.$refs["password_form"].reset();
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
  };
</script>