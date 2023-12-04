<template>
<div>
    <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ selectedCoach.hourlyRate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Intrested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in selectedCoach.areas"
        :key="area"
        :badgeType="area"
      ></base-badge>
      <p>{{ selectedCoach.description }}</p>
    </base-card>
  </section>
</div>

</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id,
    );
  },
  computed: {
    contactLink() {
      return this.$route.path + '/contact';
    },
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
  },
};
</script>
