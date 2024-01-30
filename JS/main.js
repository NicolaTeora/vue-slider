const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            slides: ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp'],
            imgActive : 0,
        }
    },

    methods: {
        nextImg(){
            this.imgActive++;
        }
    }
}).mount('#app')

