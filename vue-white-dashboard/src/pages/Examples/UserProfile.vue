<template>
  <div v-if="user" class="row">
    <div class="col-md-8">
        <user-edit-card :user="user"/>
        <user-password-card :user="user"/>
    </div>
    <div class="col-md-4">
      <user-card :user="model"/>
    </div>
  </div>
</template>

<script>
  import UserEditCard from "@/pages/Examples/UserProfile/EditProfileCard.vue";
  import UserPasswordCard from "@/pages/Examples/UserProfile/EditPasswordCard.vue";
  import UserCard from '../Profile/UserCard'

  export default {
    // name: "user-profile-example",

    components: {
      UserPasswordCard,
      UserEditCard,
      UserCard
    },

    data: () => ({
      user: null,
      // user: {
      //   name: "Admin",
      //   email: "admin@jsonapi.com",
      // },
      model: {
          fullName: 'Mike Andrew',
          title: 'Ceo/Co-Founder',
          description: `Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...`,
      }
    }),

    created() {
      this.getProfile();
    },

    methods: {
      async getProfile() {
        await this.$store.dispatch("profile/me")
        this.user = await this.$store.getters["profile/me"]
      }
    }
  }
</script>