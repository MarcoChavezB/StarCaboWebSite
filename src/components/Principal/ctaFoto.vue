<template>
    <div class="con h-full w-full">
        <div class="gridconte grid grid-cols-2 grid-rows-1 h-full w-full">
            <div class="img flex justify-center items-center">
                <div class="imgconte flex justify-center items-center" style="width: 70%; height: 70%;">

                    <div class="grid grid-cols-2 grid-rows-2 gap-2 " style="height: 100%;">
                        <div class="img-item">
                            <img class="image rounded-lg" src="../../assets/Img/fotos/fotoRealStar.jpg" alt="">
                        </div>
                        <div class="img-item">
                            <img class="image max-w-full rounded-lg" src="../../assets/Img/fotos/fotoReal2.jpg" alt="">
                        </div>
                        <div class="img-item">
                            <img class="image max-w-full rounded-lg" src="../../assets/Img/fotos/fotoReal3.jpg" alt="">
                        </div>
                        <div class="img-item">
                            <img class="image max-w-full rounded-lg" src="../../assets/Img/fotos/fotoReal4.png" alt="">
                        </div>
                    </div>

                </div>
            </div>
            <div class="text flex justify-center items-center">
                <div class="tite contenido h-full w-full"   
                     style=" margin-right: 20px; display: grid; grid-template-rows: 0.5fr 2fr;">
                    <div style="border-bottom: 1px solid; height: 5rem;">
                        <h2 style="font-size: 2rem;">Our Star Travelers</h2>
                    </div>
                    <div class="contenidoText flex justify-center items-center">
                        <p>Every journey is a story, and our customers are the protagonists. Discover how Star Cabo has been a part of their special moments, from thrilling getaways to leisurely strolls. Join us on the journey of a lifetime.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.img-item {
    width: 100%;
    height: 100%;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}

.contenido{
    height: 50%;
}

@media screen and (max-width: 767px) {
    .gridconte{
        grid-template-columns: 1fr;
    }
    .contenido{
        height: 100%;
        margin-right: 0;
    }
    .text {
        text-align: center;
    }
}
</style>
