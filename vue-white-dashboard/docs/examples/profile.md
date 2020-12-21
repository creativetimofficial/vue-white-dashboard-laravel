# Profile edit

You have the option to edit the current logged in user's profile information (name, email, profile picture) and password. To access this page, just click the "**Examples/Profile**" link in the left sidebar or add **/examples/user-profile** in the URL.

The `src\pages\Pages\Examples\UserProfile` is the folder with Vue components that handle the update of the user information and password.

## Edit profile component

```
<template>
  <card class="stacked-form" title="Stacked Form">
    <h4 slot="header" class="card-title">Edit Profile</h4>
    <form @submit.prevent>
      <div>
         <div class="col-md-4 col-sm-4">
            <h4 class="card-title">Profile Photo</h4>
            <image-upload
              type="avatar"
              select-text="Add photo"
              @change="onAvatarChange"
            />
          </div>
        <validation-error :errors="apiValidationErrors.attachment" />
        <base-input v-model="user.email" label="Email" type="email" placeholder="Enter email"/>
        <validation-error :errors="apiValidationErrors.email" /> 
        <base-input v-model="user.name" label="Name" placeholder="Name"/>
        <validation-error :errors="apiValidationErrors.name" />
        <base-button @click="updateProfile()" class="mt-3" native-type="submit" type="primary">Submit</base-button>
      </div>
    </form>
  </card>
</template>

<script>
import {
  ImageUpload,
} from 'src/components/index';
import ValidationError from "src/components/ValidationError.vue";
import formMixin from "@/mixins/form-mixin";
export default {
  mixins: [formMixin],
  components: {
    ImageUpload,
    ValidationError
  },
  props: {
      user: Object
    },
  data() {
    return {
      images: {
        avatar: null
      }
    }
  },
  methods: {
    onAvatarChange(file) {
      this.images.avatar = file;
    },
     async updateProfile() {
        try {
          if (this.images.avatar) {
            await this.$store.dispatch("users/upload", {user: this.user, image: this.images.avatar})
            this.user.profile_image = await this.$store.getters["users/url"]
          }

          await this.$store.dispatch("profile/update", this.user)
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
```

## Edit password component

```
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
  import ValidationError from "src/components/ValidationError.vue";
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
          this.$refs['password_form'].reset()
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
```
