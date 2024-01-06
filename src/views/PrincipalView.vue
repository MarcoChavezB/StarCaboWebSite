<template>
    <div class="secciones">
        <div class="headerComp">
                <HeaderComp />
            </div>
<!--Seccion 1-->
        <div class="sec1 ">
            <div class="principalView h-full w-full flex flex-col justify-center items-center">
                <div class="cont grid grid-rows-2">
                    <div class="title flex flex-col justify-center items-center">
                        <img style="height: 80%;" src="../assets/Img/logo.png">
                        <h1 class="text-white text-center">find the next place to explore
                            the beauty of the world
                        </h1>
                    </div>
                </div>
            </div>
        </div>

<!--Seccion 2-->
        <div class="borderr color-background" style="border-radius: 20px 20px 0px 0px;"></div>
<!--Seccion 3-->
        <div class="sec2 flex justify-center items-center color-background p-20">
            <div class="contenedor flex justify-center items-center h-full contenedor-mobil">
                <div class="zonas grid grid-cols-5 grid-rows-1 gap-20 zona-mobil">
                    <zona text="Diamante" image="src\assets\Img\icons\diamond.png" />
                    <zona text="Cabo San Lucas" image="src\assets\Img\icons\beach.png" />
                    <zona text="The corridor" image="src\assets\Img\icons\bridge.png" />
                    <zona text="San Jose del Cabo" image="src\assets\Img\icons\desert.png" />
                    <zona  text="Puerto los Cabos" image="src\assets\Img\icons\water.png" />
                </div>
            </div>
        </div>
<!--Seccion 4-->
        

<!--Seccion 5-->
        <div class="sec4 color-background">
            <div class="subj flex justify-center items-center h-full">
                <div class="titles grid grid-cols-1 grid-rows-2 w-1/2">
                    <div class="title1 text-center ">
                        <h2>New Adventures</h2>
                    </div>

                    <div class="subtitle1 text-center">
                        book your Transportation with us the new adventure in san jose del cabo and cabo san lucas awaits us
                    </div>
                </div>
            </div>
        </div>

<!--Seccion 6-->
        <div class="sec5 flex justify-center items-center color-background">
            <div class="container_center ">
                <div class=" seccionZonas felx justify-center items-center">
                <div class="grid grid-cols-2 grid-rows-1 h-full w-full tk-grid">
                    <div class="imgzone flex justify-center items-center">
                        <div class="img "></div>
                        <div class="titleImg flex justify-center items-center text-center">
                            Exceptional adventures every time, we bring you to them
                        </div>
                    </div>
                    <div class="flex justify-center h-full zoneIte ">
                        <div class="textzone grid grid-rows-4 grid-cols-1">
                            <div class="title2">
                                <h2>Our services are the best</h2>
                            </div>
                            <div class="subtitle2">
                                <h4>we are a transportation company dedicated to our clients, we take them to their dreams
                                    with the best quality of service and experience.</h4>
                            </div>
                            <div class="zones grid grid-rows-2 grid-cols-2">
                                <div class="airport flex gap-4">
                                    <span class="material-symbols-outlined orange">
                                        travel
                                    </span>
                                    <h4>Airport - Hotel</h4>
                                </div>
                                <div class="activities flex gap-4">
                                    <span class="material-symbols-outlined orange">
                                        sports_gymnastics
                                    </span>
                                    <h4>Activities</h4>
                                </div>
                                <div class="dinners flex gap-4">
                                    <span class="material-symbols-outlined orange">
                                        restaurant_menu
                                    </span>
                                    <h4>Dinners</h4>
                                </div>
                                <div class="hotel flex gap-4">
                                    <span class="material-symbols-outlined orange">
                                        apartment
                                    </span>
                                    <h4>Hotel - Airport</h4>
                                </div>
                            </div>
                            <div class="button"></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div class="cardsZone gap-20 grid global-bg grid-rows-4">
            <div class="card1 flex justify-center items-center" >
                <cardLeft ico="travel" title="Airport - Hotel" img="../src/assets/Img/fotos/toAirport.jpg"/>
            </div>
            <div class="card2 flex justify-center items-center">
                <cardRigth  ico="travel" title="Dinners" img="../src/assets/Img/fotos/toDinner.jpg"/>
            </div>
            <div class="card3 flex justify-center items-center">
                <cardLeft  ico="travel" title="Activities" img="../src/assets/Img/fotos/toHotel.jpg"/>
            </div>
            <div class="card4 flex justify-center items-center">
                <cardRigth  ico="travel" title="Hotel - Airpot" img="../src/assets/Img/fotos/toHotel.jpg"/>
            </div>
        </div>


        <div class="sec6 color-background">
            <div class="title3 flex justify-center items-center">
                    <h2 class="orangeText">How we can help your journey</h2>
            </div>
        </div>
        

<!--Seccion 7-->
        <div class="sec7 flex justify-center items-center color-background">
            <div class="contenido">
                <div class="points grid grid-cols-3 grid-rows-1">
                    <div class="destination flex justify-center items-center flex-col">
                        <div
                            class="relative inline-flex items-center justify-center w-20 h-20 overflow-hidden rounded-full">
                            <span class="material-symbols-outlined orange">distance</span>
                        </div>
                        <h4 class="tit">Select your destination</h4>
                        <h5 class="text-center w-2/3 subtext">you can find your hotel destination in all regions of Los
                            Cabos </h5>
                    </div>
                    <div class="service flex justify-center items-center flex-col">
                        <div
                            class="relative inline-flex items-center justify-center w-20 h-20 overflow-hidden rounded-full">
                            <span class="material-symbols-outlined orange">description</span>
                        </div>
                        <h4 class="tit">Make your service</h4>
                        <h5 class="text-center w-2/3 subtext">You can make your service in this website</h5>
                    </div>
                    <div class="pay flex justify-center items-center flex-col">
                        <div
                            class="relative inline-flex items-center justify-center w-20 h-20 overflow-hidden rounded-full">
                            <span class="material-symbols-outlined orange">payments</span>
                        </div>
                        <h4 class="tit">Pay in arrive</h4>
                        <h5 class="text-center w-2/3 subtext">Pay when you arrive at your destination</h5>
                    </div>
                </div>
            </div>
        </div>
<!--Seccion 8-->        
        <div class="sec8 global-bg">
            <div class="contenido h-full w-full">
                <ctaFoto/>
            </div>
        </div>

<!--Seccion 9-->
        <div class="sec9 color-background ">
            <div class="contenido">
                <cta/>
            </div>
        </div>

<!--Seccion 10-->
        <div class="sec10 foot color-background flex justify-center items-center border">
            <div class="fotercomp w-full">
                <footerComp />
            </div>
        </div>
        
    </div>


<!--Right controller-->
    <div class="rightMessaje">
        <rightMessaje/>
    </div>
</template>

<script setup>
import cardLeft from "../components/Principal/cardleft.vue"
import cardRigth from '../components/Principal/cardRight.vue'
import zona from "../components/General/zonas.vue"
import cta from "../components/Principal/cta.vue"
import footerComp from "../components/Principal/footer.vue"
import HeaderComp from "../components/Principal/TopNavbar.vue"
import ctaFoto from "../components/Principal/ctaFoto.vue"
import rightMessaje from "../components/Principal/rightMessaje.vue"
</script>


<style scoped>
.color-background{
    background-color: #f5f4ed;
}
.secciones {
    display: grid;
    height: 700vh;
    grid-template-rows: 0.1fr 1.8fr 0.1fr 0.3fr 0.2fr 1fr 4.3fr 0.3fr 0.5fr 2fr 0.1fr 1fr;
    grid-auto-columns: 1fr;
}
.rightMessaje{
    position: fixed;
    right: 0;
    top: 80%;
    transform: translateY(-50%);
    z-index: 1000;
}
.sec1{
    height: 90vh;

}
.container_center{
    height: 80%;
}

.tit {
    margin-top: 30px;
}

.zoneIte {
    margin-right: 2rem;
}

.destination {
    margin-left: 20px;
}

.subtext {
    font-size: 1rem;
    opacity: 0.5;
}

.pay {
    margin-right: 20px;
}

.orange {
    color: #f0582b;
}

.relative {
    background-color: white;
}

.title2 {
    color: #f0582b;
    font-size: 2rem;
    font-weight: 1000;
}

.img {
    position: relative;
    left: 90px;
    width: 70%;
    height: 70%;
    border-radius: 20px;
    background: url('../src/assets/Img/fotos/surf.webp') center center / cover no-repeat;
}

.titleImg {
    position: relative;
    left: -100px;
    top: 150px;
    width: 40%;
    height: 20%;
    background-color: white;
    border-radius: 20px;
}

.seccionZonas {
    width: 100%;
    height: 100%;
}


.zonas {
    height: 60%;
    width: 90%;
}

.orangeText {
    color: #f0582b;
    font-size: 3rem;
}

.cont {
    height: 70%;
    width: 70%;
}

/* MOBILE   */

@media screen and (max-width: 767px) {
  .sec2{
    padding: 0;
  }
  .contenedor-mobil{
    justify-content: center;
    align-items: center;
  }
  .zona-mobil {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0;
    padding-bottom: 10rem;
  }
  .secciones{
    grid-template-rows: 0.4fr 1.8fr 0.2fr 0.4fr 3fr 0.5fr 2.3fr 0.3fr 1fr 2fr 0.1fr 1fr;
  }
  .titles{
    width: 90%;
  }
  .title3{
    text-align: center;
  }
  .points .subtext{
    display: none;
  }
  .points{
    text-align: center;
  }
  .sec8{
    height: 73vh;
  }
  .tk-grid{
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr;
  }
  .textzone{
    text-align: center;
  }
  .airport, .activities, .dinners, .hotel{
    justify-content: center;
  }
  .titleImg{
    font-size: 0.8rem;
  }
  .zoneIte{
    width: 97%;
    }
.rightMessaje{
    display: none;
}
}
</style>