<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 ml-auto">
        <div class="info-area info-horizontal mt-5">
          <div class="icon icon-warning">
            <i class="tim-icons icon-wifi"></i>
          </div>
          <div class="description">
            <h3 class="info-title">Marketing</h3>
            <p class="description">
              We've created the marketing campaign of the website. It was a very
              interesting collaboration.
            </p>
          </div>
        </div>
        <div class="info-area info-horizontal">
          <div class="icon icon-primary">
            <i class="tim-icons icon-triangle-right-17"></i>
          </div>
          <div class="description">
            <h3 class="info-title">Fully Coded in HTML5</h3>
            <p class="description">
              We've developed the website with HTML5 and CSS3. The client has
              access to the code using GitHub.
            </p>
          </div>
        </div>
        <div class="info-area info-horizontal">
          <div class="icon icon-info">
            <i class="tim-icons icon-trophy"></i>
          </div>
          <div class="description">
            <h3 class="info-title">Built Audience</h3>
            <p class="description">
              There is also a Fully Customizable CMS Admin Dashboard for this
              product.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-7 mr-auto">
        <form @submit.prevent="handleSubmit()">
          <card class="card-register card-white">
            <template slot="header">
              <img class="card-img" src="/img/card-primary.png" alt="Card image"/>
              <h4 class="card-title">Register</h4>
            </template>

              <base-input
                v-model="name"
                placeholder="Full Name"
                addon-left-icon="tim-icons icon-single-02"
                type="text">
              </base-input>
              <validation-error :errors="apiValidationErrors.name" />

              <base-input
                v-model="email"
                placeholder="Email"
                addon-left-icon="tim-icons icon-email-85"
                type="email">
              </base-input>
              <validation-error :errors="apiValidationErrors.email" />

              <base-input
                v-model="password"
                placeholder="Password"
                addon-left-icon="tim-icons icon-lock-circle"
                type="password">
              </base-input>
              <validation-error :errors="apiValidationErrors.password" />

              <base-input
                placeholder="Confirm Password"
                type="password"
                name="Password confirmation"
                v-model="password_confirmation"
                addon-left-icon="tim-icons icon-lock-circle">
              </base-input>
              <validation-error :errors="apiValidationErrors.password_confirmation" />

            <base-checkbox v-model="boolean" class="text-left">
              I agree to the <a href="#something">terms and conditions</a>.
            </base-checkbox>

            <base-button native-type="submit" slot="footer" type="primary" round block size="lg">
              Get Started
            </base-button>
          </card>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

import { BaseCheckbox } from '@/components';
import ValidationError from "@/components/ValidationError.vue";
import formMixin from "@/mixins/form-mixin";

export default {
  components: {
    BaseCheckbox,
    ValidationError
  },
  mixins: [formMixin],
  data() {
    return {
      name: null,
      boolean: false,
      email: null,
      password: null,
      password_confirmation: null,

    };
  },
  methods: {
    async handleSubmit() {
      if (!this.boolean) {
         await this.$notify({
          type: 'danger',
          message: 'You need to agree with our terms and conditions.',
          icon: 'tim-icons icon-bell-55',
        })
        return;
      }

      const user = {
        data: {
          type: "token",
          attributes: {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
          },
        },
      };

      const requestOptions = {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      };

      try {
        await this.$store.dispatch("register", { user, requestOptions });
         this.$notify({
          type: 'succes',
          message: 'Successfully registered.',
          icon: 'tim-icons icon-bell-55',
        })
      } catch (error) {
         this.$notify({
          type: 'danger',
          message: 'Oops, something went wrong!',
          icon: 'tim-icons icon-bell-55',
        })
        this.setApiValidation(error.response.data.errors);
      }
    }
  }
};
</script>
<style></style>
