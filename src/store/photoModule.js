import axios from "axios";

export default {
    state: {
        photos: [],
        dialogVisible: false,
        currentPhoto: {}
    },
    mutations: {
        setPhotos(state, payload) {
            state.photos = payload
        },
        showDialog(state){
            state.dialogVisible = true
        },
        hideDialog(state){
            state.dialogVisible = false
        },
        setCurrentPhoto(state, payload){
            state.currentPhoto = payload
        }
    },
    getters: {
        getPhotos(state){
            return state.photos
        },
        getCurrentPhoto(state){
            return state.currentPhoto
        },
        getDialogVisible: (state) => state.dialogVisible
    },
    actions: {
        fetchPhotos(context) {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
                .then(response => context.commit("setPhotos",response.data))
        },
    },
}