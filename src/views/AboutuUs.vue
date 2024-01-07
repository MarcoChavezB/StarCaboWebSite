<template>
    <section class="grid global-bg" style="grid-template-rows: 1fr 0.5fr 0.7fr 0.5fr;">
        <div class="main global-bg flex items-center justify-around gap-10" >
            <img src="../assets/Img/fotos/aboutus.webp">
            <div class="all-text">
                <h4>Welcome to star cabo private transportation</h4>
                <h1>Make your trip excellent by acquiring our services</h1>
                <p>Make your trip an excellent experience by acquiring our services. We are the leading transportation 
                    company in the destination, the most stable and recommended option in Cabo. We provide private ground transportation services to any hotel or villa in San Jose del Cabo and its 
                    surroundings, whether for tours, dinners, or other events, all with a luxury service.</p>
            </div>
        </div>
        <div class="line-data global-bg">
            <div class=" atributes w-full flex-col bg-white flex justify-center items-center"
            style=" margin-top: 7rem;">
            <div class="intra-layout i grid grid-rows-2" style="width: 70%;">
                <div class="text gap-5 flex flex-col justify-center w-2/3">
                    <h2>We provided a exellent service</h2>
                    <p>Our drivers are professionally trained, and our services complement both your arrival and departure at your 
                        vacation destination. At Star Cabo, we take pride in providing extensive amenities for you and your family, 
                        ensuring that every moment of your journey is comfortable and enjoyable.
                    </p>
                </div>
                <div class="sections  grid grid-cols-4" style="width: 100%;">
                    <div class="sec ">
                        <div class="intra-layout c flex justify-center items-center flex-col">
                            <span class="material-symbols-outlined orange-text">
                                groups
                            </span>
                            <h3>Conductores Expertos</h3>
                        </div>
                    </div>
                    <div class="sec">
                        <div class="intra-layout c flex justify-center items-center flex-col">
                            <span class="material-symbols-outlined orange-text">
                                person_pin
                            </span>
                            <h3>Guaranteed punctuality</h3>
                        </div>
                    </div>
                    <div class="sec">
                        <div class="intra-layout c flex justify-center items-center flex-col">
                            <span class="material-symbols-outlined orange-text">
                                concierge
                            </span>
                            <h3>Luxury Service</h3>
                        </div>
                    </div>
                    <div class="sec">
                        <div class="intra-layout c flex justify-center items-center flex-col">
                            <span class="material-symbols-outlined orange-text">
                                near_me
                            </span>
                            <h3>Services to any hotel</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
        <div class="cta-card grid grid-cols-2 global-bg" >
            <div class="alltext flex justify-center items-center  text-center ">
                <div class="center-test flex flex-col gap-5" style="width: 80%;">
                    <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                        Make your trip an excellent experience
                </h2>
                    <p class="hidden text-gray-500 md:mt-4 md:block">
                        At Star Cabo Private Transportation, we not only offer a transportation service but also a complete experience of comfort and luxury. Allow us to be part of your journey and ensure that every moment is extraordinary!                    </p>
                </div>
            </div>
            <div class="img">
                <div class="intra-layout flex justify-end items-end">
                    <img src="../assets/Img/fotos/carro.png">
                </div>
            </div>
        </div>
            <footerVue />
        
    </section>
</template>


<script setup>
import footerVue from "../components/Principal/footer.vue";
</script>

<style scoped>
section{
    margin-top: 5rem;
    width: 100%;
    height: 250vh;
    background-color: #fff;
}



span {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
}

.c h3{
    text-align: center;
}



.sec {
    display: flex;
    justify-content: center;
    align-items: center;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.main img {
    width: 700px;
    max-width: 100%;
    height: auto;
    padding: 0 10px;
}

.intra-layout img{
    height: 80%;
    border-radius: 60px 0px 0px 0px;
}

.all-text {
    width: 800px;
    max-width: 100%;
    padding: 0 10px;
}

.main {
    width: 100%;
    margin: 0 auto;

}

.all-text h4 {
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #777;
    margin-bottom: 10px;
}

h4 {
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #777;
    margin-bottom: 10px;
}

.all-text h1 {
    font-size: 40px;
    color: #111111;
    font-weight: 700;
    margin-bottom: 20px;
}



.all-text p {
    font-size: 14px;
    color: #777;
    line-height: 30px;
    margin-bottom: 35px;
}


@media only screen and (max-width: 768px) {


    .main {
        flex-direction: column;
        align-items: center;
    }

    .all-text {
        width: 100%;
        padding: 0;
        text-align: center;
    }

    .all-text h1 {
        font-size: 40px;
        margin-bottom: 15px;
    }

    .all-text p {
        font-size: 14px;
        margin-bottom: 25px;
    }
    .text{
        width: 100%;
    }

    .cta-card{
        grid-template-columns: 1fr;
    }
 
}

</style>