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
            if (this.imgActive >= this.slides.length - 1) {
                this.imgActive = 0;
            } else {
                this.imgActive++;
            }
        },

        prevImg(){
            if (this.imgActive <= 0) {
                this.imgActive = this.slides.length - 1
            } else {
                this.imgActive--;
            }
        },
    },
    
    mounted(){
        setInterval(()=>{
            this.nextImg();
        }, 2000);
    }

}).mount('#app')

