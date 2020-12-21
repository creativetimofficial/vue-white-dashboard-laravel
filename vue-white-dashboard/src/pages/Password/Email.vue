<template>
<div class="container mt-3">
  <div class="col-lg-4 col-md-6 ml-auto mr-auto">
      <form @submit.prevent="handleSubmit()">
        <card class="card-login card-white">
          <template slot="header">
            <img src="/img/card-primary.png" alt="" />
            <h1 class="card-title">Reset Password</h1>
          </template>

           <base-input
                required
                v-model="form.data.attributes.password"
                placeholder="Password"
                addon-left-icon="tim-icons icon-lock-circle"
                type="password"
               >
              </base-input>
            <validation-error :errors="apiValidationErrors.password" />

              <base-input
                required
                placeholder="Confirm Password"
                type="password"
                name="Password confirmation"
                v-model="form.data.attributes.password_confirmation"
                addon-left-icon="tim-icons icon-lock-circle"
              >
              </base-input>
            <validation-error :errors="apiValidationErrors.password_confirmation" />

            <base-button native-type="submit" slot="footer" type="primary" round block size="lg">
              Reset Password
            </base-button>
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
          type: "password-reset",
          attributes: {
            password: "",
            password_confirmation: "",
            token: "",
            email: "",
          },
        },
      },
    };
  },
  mounted() {
    this.form.data.attributes.email = this.$route.query.email;
    this.form.data.attributes.token = this.$route.query.token;
  },
  beforeDestroy() {
    this.$router.replace({ query: null });
  },
  methods: {
    async handleSubmit() {
      try {
        await this.$store.dispatch("reset/createNewPassword", this.form.data);
      } catch (error) {
        await this.$notify({
          type: "danger",
          message: "The given data was invalid.",
        });
        this.setApiValidation(error.response.data.errors);
      }
    },
  },
};
</script>
