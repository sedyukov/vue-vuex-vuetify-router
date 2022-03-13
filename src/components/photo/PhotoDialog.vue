<template>
  <v-dialog
      v-model="dialogVisible"
      max-width="600"
  >
    <v-card>
      <v-card-title>
        <v-card-title>{{photo.title}}</v-card-title>
        <v-card-text>
          <v-img
              :src="photo.url"
          />
        </v-card-text>
      </v-card-title>
    </v-card>

  </v-dialog>
</template>

<script>
export default {
  name: "PhotoDialog",
  props: {
    photo: {
      type: Object,
      required: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  created(){
    this.dialogVisible = this.value
  },
  data: () => ({
    dialogVisible: false
  }),
  watch: {
    value(newValue) {
      this.dialogVisible = newValue
    },
    dialogVisible(newValue) {
      this.$emit('input', newValue)
    }
  },

}
</script>

<style scoped>

</style>