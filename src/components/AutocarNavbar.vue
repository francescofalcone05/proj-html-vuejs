<script>
import store from '../data/store.js'

export default {
    components: {

    },

    data() {
        return {
            store
        }
    },

    methods: {
        getImg(path) {
            let risultato = new URL(`../assets/Img/${path}`, import.meta.url);
            return risultato.href;
        },
    }
}
</script>

<template>

    <nav>

        <div id="navContent" class="w-75 mx-auto d-flex align-items-center">
            <div id="navLogo">
                <img :src="getImg(store.navbarLogo)" alt="">
            </div>
            <ul>
                <li v-for="item in store.headerData.navbarLinks">
                    <a :href="item.link">{{ item.text }}</a>
                </li>
            </ul>
            <div id="navButtons">
                <div id="navMyAccount" class="navButton">
                    <img src="../assets/Icone/padlock.png" alt="">
                    My Account
                </div>
                <div id="navAddCar" class="navButton">
                    <img src="../assets/Icone/add.png" alt="">
                    Add Car
                </div>

                <!-- Offcanvas trigger-->
                <button id="offcanvasTrigger" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"
                    aria-controls="offcanvasExample">
                    <i class="fa-solid fa-bars-staggered"></i>
                </button>
                <!-- Offcanvas-->
                <div id="offcanvas" class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="offcanvasLabel">
                    <div id="offcanvasContent">
                        <img id="offcanvasLabel" :src="getImg(store.navbarLogo)" alt="">
                        <h1>Contact Information</h1>
                        <div class="offcanvasDetail">
                            <i class="fa-solid fa-phone-volume"></i>
                            <span>{{ store.footerData.autocarInfo.acPhone.text }}</span>
                        </div>
                        <div class="offcanvasDetail">
                            <i class="fa-regular fa-envelope"></i>
                            <span>{{ store.footerData.autocarInfo.acEmail.text }}</span>
                        </div>
                        <div class="offcanvasDetail">
                            <i class="fa-solid fa-map-location-dot"></i>
                            <span>{{ store.footerData.autocarInfo.acLocation.text }}</span>
                        </div>
                        <div id="offCanSocials">
                            <a v-for="social in store.footerData.acSocials" :href="social.link">
                                <i :class="social.icon"></i>
                            </a>
                        </div>
                        <p id="offcanvasCredits">
                            <i class="fa-regular fa-copyright"></i>
                            {{ store.footerData.pageCredits }}
                        </p>
                    </div>
                </div>

                <div id="navPhoneNumber" class="navButton">
                    <img src="../assets/Icone/headphones.png" alt="">
                    {{ store.footerData.autocarInfo.acPhone.text }}
                </div>
            </div>
        </div>

    </nav>

</template>

<style scoped>
nav {
    background-color: white;
}

a {
    text-decoration: none;
    color: black;
}

#navContent {
    height: 5rem;
    gap: 0.3rem;
    justify-content: space-between;
    font-weight: 600;
}

#navLogo {
    width: 12%;
}

#navLogo img {
    height: 3rem;
}

#navButtons {
    display: flex;
    gap: 0.8rem;
}

.navButton {
    background-color: black;
    color: white;
    font-size: 1rem;
    border-radius: 0.2rem;
    padding: 0.6rem 0.5em;
}

.navButton img {
    height: 1.5rem;
    filter: invert(1);
    margin-right: 0.5rem;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    display: inline-block;
    margin: 0 0.5rem;
    font-size: 0.8rem;
    color: black;
}

/* Stili offcanvas */
#offcanvasTrigger {
    height: 3rem;
    color: black;
    font-size: 2rem;
    padding: 0 0.6rem;
    border: none;
    background-color: white;
    box-shadow: none;
}

#offcanvasTrigger i {
    position: relative;
    bottom: 5%;
}

#offcanvasContent {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: black;
    align-content: center;
}

#offcanvasContent h1 {
    font-weight: 600;
    padding: 0 1rem;
    font-size: 2.2rem;
    text-align: center;
}

#offcanvasContent img {
    width: 75%;
    margin: 0.5rem auto 0;
}

.offcanvasDetail {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
}

.offcanvasDetail i {
    background-color: black;
    color: white;
    font-size: 2.5rem;
    padding: 1rem;
    border-radius: 0.2rem;
    margin-bottom: 0.3rem;
}

#offCanSocials {
    display: flex;
    justify-content: center;
}

#offCanSocials a {
    height: 2.5rem;
    width: 2.5rem;
    background-color: white;
    border: 1px solid black;
    border-radius: 0.2rem;
    margin: 0 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

#offCanSocials i {
    font-size: 1.5rem;
    color: black;
}

#offcanvasCredits {
    text-align: center;
    font-size: 0.8rem;
}
</style>