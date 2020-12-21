<template>
<div class="container mt-3">
  <div class="col-lg-4 col-md-6 ml-auto mr-auto">
      <form ref="reset_password_form" @submit.prevent="handleSubmit()">
        <card class="card-login card-white">
          <template slot="header">
            <img src="/img/card-primary.png" alt="" />
            <h1 class="card-title">Reset Password</h1>
          </template>

           <base-input
              v-model="form.data.attributes.email"
              type="email"
              placeholder="Email"
              addon-left-icon="tim-icons icon-email-85"
           />
          <validation-error :errors="apiValidationErrors.email" />

        <div class="text-center">
          <base-button type="primary" native-type="submit" class="my-4"
            >Send Password Reset Link</base-button
          >
        </div>
        </card>
      </form>
    </div>
</div>
</template>
<script>
import ValidationError from "@/components/ValidationError.vue";
import formMixin from "@/mixins/form-mixin";
export default {
  layout: "AuthLayout",
  mixins: [formMixin],
  components: { ValidationError },
  data() {
    return {
      form: {
        data: {
          type: "password-forgot",
          attributes: {
            email: "",
            redirect_url: process.env.VUE_APP_BASE_URL + "/password/email",
          },
        },
      },
    };
  },
  methods: {
    async handleSubmit() {
      if (this.$isDemo) {
        await this.$notify({
          type: "danger",
          message: "Password reset is disabled in the demo.",
        });
        return;
      }
      try {
        await this.$store.dispatch("reset/forgotPassword", this.form.data);
        await this.$notify({
          type: "success",
          message: "An email with reset password link was sent.",
        });
        this.$refs['reset_password_form'].reset()
      } catch (error) {
        await this.$notify({
          type: "danger",
          message: "We can't find a user with that e-mail address.",
        });
        this.setApiValidation(error.response.data.errors);
      }
    },
  },
};
</script>
