<script>
import store from '../data/store.js';


export default {
    components: {

    },

    data() {
        return {
            store,
            colorHeart: 'lGrey'

        }
    },
    methods: {
        getFlegImg(path) {
            let risultato = new URL(`../assets/Img/${path}`, import.meta.url);
            return risultato.href;
        },

        addFav() {
            if (this.colorHeart == lGray) {
                this.colorHeart = lRed
            } else {
                this.colorHeart == lRed
            }

        }
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
}

</script>

<template>

    <div class="bg-light w-75 mx-auto py-2">

        <div class="row p-4 align-content-center">
            <div v-for="car, i in store.cardLists" class="border col-3 p-4 my-2">
                <div><img style="width: 100%;" :src="getFlegImg(car.immagine)" alt=""></div>
                <div class="position-relative">
                    <p class="py-1">{{ car.modello }} <span><i class="fa-solid fa-circle-check"></i></span></p>
                    <p class="py-1">{{ car.tipo }}</p>
                    <p class="py-1">
                        <span class="ms-2"><i class="my_me fa-sharp fa-solid fa-dollar-sign"></i> {{ car.prezzo
                            }}</span>
                        <span><i class="mx-1 fa-solid fa-car"></i> {{ car.marchio }}</span>
                        <span><i class="mx-1 fa-solid fa-gas-pump"></i> {{ car.carburante }}</span>
                    </p>
                    <span @click="addFav()" class="pb-1 position-absolute bottom-0 start-0" :class="colorHeart"><i
                            class="fa-solid fa-heart"></i></span>

                </div>
            </div>
        </div>

    </div>

</template>


<style scoped>
.lGrey {
    color: lightgray;
}

.lRed {
    color: red;
}
</style>