# Register

The register functionality is fully implemented in our theme helping you to start your project in no time. To register a new user you just have to add **/register** in the URL or click on register link from register page and fill the register form with user details.

The `src\pages\Pages\Register.vue` is the Vue component which handles the register functionality. You can easily extend it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

## Register card

```
<form @submit.prevent="handleSubmit()">
  <card class="card-register card-white">
    <template slot="header">
      <img class="card-img" src="/img/card-primary.png" alt="Card image"/>
      <h4 class="card-title">Register</h4>
    </template>

      <base-input
        required
        v-model="name"
        placeholder="Full Name"
        addon-left-icon="tim-icons icon-single-02"
        type="text"
        >
      </base-input>
    <validation-error :errors="apiValidationErrors.name" />

      <base-input
        required
        v-model="email"
        placeholder="Email"
        addon-left-icon="tim-icons icon-email-85"
        type="email"
        >
      </base-input>
    <validation-error :errors="apiValidationErrors.email" />

      <base-input
        required
        v-model="password"
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
        v-model="password_confirmation"
        addon-left-icon="tim-icons icon-lock-circle"
      >
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
```