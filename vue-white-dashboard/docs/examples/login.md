# Login

The login functionality is fully implemented in our theme helping you to start your project in no time. To login into dashboard you just have to add **/login** in the URL and fill the login form with one of the credentials (user: **admin@jsonapi.com**, **creator@jsonapi.com**, **member@jsonapi.com** and password: **secret**).

The `src\pages\Pages\Login.vue` is the Vue component which handles the login functionality. You can easily adapt it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

## Login Card

```
<div class="container mt-3">
  <div class="col-lg-4 col-md-6 ml-auto mr-auto">
    <form @submit.prevent="handleSubmit()">
      <card class="card-login card-white">
        <template slot="header">
          <img src="/img/card-primary.png" alt="" />
          <h1 class="card-title">Log in</h1>
        </template>

        <div>
          <ValidationProvider
            name="email"
            rules="required|email"
            v-slot="{ passed, failed, errors }"
          >
          <base-input
            required
            v-model="email"
            type="email"
            placeholder="Email"
            addon-left-icon="tim-icons icon-email-85"
            :error="errors[0]"
            :class="[{ 'has-success': passed }, { 'has-danger': failed }]">
          </base-input>
          <validation-error :errors="apiValidationErrors.email" />
          </ValidationProvider>

          <ValidationProvider
            name="password"
            rules="required|min:5"
            v-slot="{ passed, failed, errors }"
          >
          <base-input
            required
            v-model="password"
            placeholder="Password"
            addon-left-icon="tim-icons icon-lock-circle"
            type="password"
            :error="errors[0]"
            :class="[{ 'has-success': passed }, { 'has-danger': failed }]">
          </base-input>
          <validation-error :errors="apiValidationErrors.password" />
        </ValidationProvider>
        </div>

        <div slot="footer">
          <base-button native-type="submit" type="primary" class="mb-3" size="lg" block>
            Get Started
          </base-button>
          <div class="pull-left">
            <h6>
              <router-link class="link footer-link" to="/register">
                Create Account
              </router-link>
            </h6>
          </div>

          <div class="pull-right">
            <h6><a href="/password/reset" class="link footer-link">Forgot Password?</a></h6>
          </div>
        </div>
      </card>
    </form>
    <!-- </ValidationObserver> -->
  </div>
</div>
```