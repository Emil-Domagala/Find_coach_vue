<template>
  <div>
    <base-dialog :show="!!error" title="An error occured!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <h2>Register as a coach</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </div>
</template>

<script>
import coachForm from '../../components/coaches/coachForm.vue';
export default {
  components: {
    coachForm,
  },
  data() {
    return {
      error: null,
    };
  },

  methods: {
    async saveData(formData) {
      try {
        await this.$store.dispatch('coaches/registerCoach', formData);
        this.$router.replace('/coaches');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
