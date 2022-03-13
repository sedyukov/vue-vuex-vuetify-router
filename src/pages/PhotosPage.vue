<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto"/>
    <v-row>
      <Photo
          v-for="photo in photos"
          :photo="photo"
      />
    </v-row>

  </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo";
import PhotoForm from "@/components/photo/PhotoForm";
export default {
  name: "PhotosPage",
  components: {
    PhotoForm,
    Photo
  },
  data: () => ({
    photos: [
      {id: 1, title: "фото1"},
      {id: 2, title: "фото2"}
    ]
  }),
  mounted(){
    this.fetchPhoto()
  },
  methods: {
    fetchPhoto() {
      this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
          .then(response => this.photos = response.data)
    },
    addPhoto(photo) {
      this.photos.push(photo)
    }
  }

}
</script>

<style scoped>

</style>