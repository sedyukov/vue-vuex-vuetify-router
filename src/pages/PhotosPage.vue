<template>
  <v-container>
    <PhotoForm v-if="photos.length < 6" @addPhoto="addPhoto"/>
    <div v-else>No more photos!</div>
    <v-row>
      <Photo
          v-for="photo in $store.getters.getPhotos"
          :photo="photo"
          :key="photo.id"
      />
    </v-row>
    <PhotoDialog />
  </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo";
import PhotoForm from "@/components/photo/PhotoForm";
import PhotoDialog from "@/components/photo/PhotoDialog";
import {mapActions} from 'vuex'
export default {
  name: "PhotosPage",
  components: {
    PhotoDialog,
    PhotoForm,
    Photo
  },
  data: () => ({
    photos: [],
    // currentPhoto: {},
    // dialogVisible: false
  }),
  mounted(){
   // this.fetchPhoto()
    this.fetchPhotos()
  },
  methods: {
    ...mapActions(["fetchPhotos"]),
    // fetchPhoto() {
    //   this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
    //       .then(response => this.photos = response.data)
    // },
    addPhoto(photo) {
      this.photos.push(photo)
    },
    openPhoto(photo) {
      this.currentPhoto = photo
      this.dialogVisible = true
    }
  }

}
</script>

<style scoped>

</style>