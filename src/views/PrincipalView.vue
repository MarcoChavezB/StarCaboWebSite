<template>
    <div class="secciones">
        <!--Seccion 1-->
        <div class="sec1">
            <div class="principalView h-full w-full flex flex-col justify-center items-center">
                <div class="cont">
                    <div class="title h-1/3">
                        <h1 class="text-white text-center">find the next place to explore
                            the beauty of the world</h1>
                    </div>
                    <div class="subtilt h-1/3">
                        <h4 class="text-center">Live the best experience in star cabo
                            services</h4>
                    </div>
                    <div class="buttons h-1/3">
                        <div class="w flex justify-center items-center">
                            <div class="conflec flex justify-center items-center">
                                <btOrange text="Let's explore" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Seccion 2-->
        <div class="sec2 grid grid-cols-1 grid-rows-2 gap-0">
            <div class="contenedor flex justify-center items-center ">
                <div class="zonas grid grid-cols-5 grid-rows-1 gap-0 ">
                    <zona text="Diamante" image="src\assets\Img\icons\diamond.png"/>
                    <zona text="Cabo San Lucas" image="src\assets\Img\icons\beach.png"/>
                    <zona text="The corridor" image="src\assets\Img\icons\bridge.png"/>
                    <zona text="San Jose del Cabo" image="src\assets\Img\icons\desert.png"/>
                    <zona text="Puerto los Cabos" image="src\assets\Img\icons\water.png"/>
                </div>
            </div>
            <div class="bg-red text flex justify-center items-center">
                <h2 class="orangeText text-center w-full">Recomended popular destinations</h2>
            </div>
        </div>

        <!--Seccion 3-->
        <div class="sec3 grid grid-cols-1 grid-rows-2 gap-0">
            <div class="contenedor flex justify-center items-center ">
                <div class="zonas grid grid-cols-5 grid-rows-1 gap-0 ">
                    <hotelCard/>
                </div>
            </div>
        </div>
        <!--Seccion 4-->
        <div class="sec4">
            
        </div>
    </div>
</template>

<script setup>
import btOrange from "../components/controllers/btOrangeRight.vue" 
import zona from "../components/General/zonas.vue"
import hotelCard from "../components/cards/hotelCard.vue"
</script>


<style scoped>
.sec1 {
    height: 100vh;
}

.sec3{
    height: 100vh;
}
.sec4{
    height: 100vh;

}


.secciones{
    display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-rows: 1fr 0.5fr 1fr 1fr; 
  gap: 0px 0px; 
}

.zonas{
    height: 60%;
    width: 90%;
}
.orangeText{
    color: #f0582b;
    font-size: 3rem;
}
.cont {
    height: 70%;
    width: 70%;
}

.sec2{
    background-color: #f5f4ed;
    border-radius: 50px 50px 0px 0px;
}

.sec3, .sec4{
    background-color: #f5f4ed;
}

.conflec {
    width: 25%;

}
</style>