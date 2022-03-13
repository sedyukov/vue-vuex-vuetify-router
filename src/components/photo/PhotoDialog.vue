<template>
  <v-dialog
      v-model="$store.getters.getDialogVisible"
      max-width="600"
      @click:outside="hideDialog()"
  >
    <v-card>
      <v-card-title>
        <v-card-title>{{full_title}}</v-card-title>
        <v-card-text>
          <v-img
              :src="getCurrentPhoto().url"
          />
        </v-card-text>
      </v-card-title>
    </v-card>

  </v-dialog>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";
export default {
  name: "PhotoDialog",
  methods: {
    ...mapMutations(['hideDialog']),
    ...mapGetters(['getCurrentPhoto','getDialogVisible'])
  },
  computed: {
    full_title() {
      return `Название фотографии: ${this.getCurrentPhoto().title}`
    }
  }

}
</script>

<style scoped>

</style>