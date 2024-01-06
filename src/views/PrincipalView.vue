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
                    <zona text="Diamante" image='
                            <svg width="50px" height="50px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.7831 0H3.21691L0.0712554 5.24275C-0.0349835 5.41982 -0.0214476 5.64398 0.105326 5.80697L7.10533 14.807C7.20005 14.9288 7.34571 15 7.5 15C7.6543 15 7.79995 14.9288 7.89468 14.807L14.8947 5.80697C15.0215 5.64398 15.035 5.41982 14.9287 5.24275L11.7831 0Z" fill="#907f64" />
                            </svg>' />
                    <zona text="Cabo San Lucas" image='<svg version="1.1" id="beach" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                    width="50px" height="50px" viewBox="0 0 256 256" xml:space="preserve">
                                <style type="text/css">
                                </style>
                                <path style="fill:#907f64" class="st1" d="M252.479,126.63c-0.101-0.812-0.242-1.628-0.437-2.5c-5.095-22.859-16.944-42.513-35.228-58.416
                                    c-19.65-17.092-42.936-27.293-69.31-30.438c-0.012-0.607-0.037-1.2-0.063-1.77c-0.373-8.251-6.353-14.819-14.537-15.972
                                    c-0.736-0.104-1.49-0.156-2.24-0.156c-7.436,0-14.155,5.066-15.976,12.042c-0.533,2.037-0.656,3.994-0.636,5.732
                                    c-17.652,2.063-34.319,7.57-49.711,16.479C37.892,66.94,20.095,88.669,11.444,116.216c-0.755,2.405-1.305,4.705-1.887,7.139
                                    c-0.253,1.061-0.515,2.157-0.806,3.303c-1.064,4.189,0.684,8.588,4.333,10.902c1.643,1.043,3.503,1.559,5.357,1.559
                                    c2.264,0,4.519-0.768,6.354-2.276c4.709-3.874,14.15-6.28,24.638-6.28c8.146,0,15.938,1.479,20.844,3.959
                                    c1.458,0.736,3.012,1.09,4.542,1.09c0.816-0.002,1.626-0.102,2.411-0.297c0.763,0.93,1.7,1.728,2.781,2.343
                                    c1.537,0.875,3.243,1.309,4.944,1.309c1.984,0,3.963-0.59,5.663-1.758c5.22-3.586,12.554-6.383,20.84-8.114
                                    c-0.213,0.813-0.334,1.662-0.334,2.538v58.775c0,1.873,0.529,3.684,1.491,5.243c-4.058,0.475-8.035,0.813-11.929,0.982
                                    c-2.594,0.113-5.147,0.172-7.588,0.172c-11.986,0-22.564-1.367-32.338-4.179c-9.737-2.8-18.394-6.507-26.467-11.331
                                    c-1.593-0.952-3.365-1.416-5.127-1.416c-2.549,0-5.075,0.973-6.995,2.852c-3.246,3.175-3.946,8.138-1.705,12.086
                                    c6.781,11.945,15.159,21.213,25.612,28.334c6.871,4.681,13.505,7.922,20.281,9.908c7.093,2.08,14.442,3.137,21.842,3.137
                                    c7.832,0,15.877-1.182,23.91-3.512c6.593-1.912,13.066-4.174,19.39-6.473c-2.772,2.992-3.481,7.417-1.664,11.157
                                    c1.695,3.493,5.222,5.633,8.992,5.633c0.646,0,1.3-0.063,1.952-0.192c4.326-0.859,8.599-1.865,12.729-2.838
                                    c11.381-2.678,22.131-5.207,34.898-5.207c10.406,0,21.021,1.729,32.449,5.284c0.982,0.306,1.982,0.453,2.972,0.453
                                    c3.403,0,6.662-1.744,8.519-4.762c2.076-3.375,1.937-7.597-0.209-10.8c1.82-0.623,3.477-1.767,4.717-3.391
                                    c2.969-3.888,2.688-9.353-0.66-12.917c-0.168-0.178-0.299-0.323-0.411-0.448c-0.363-0.399-0.815-0.898-1.452-1.455
                                    c-6.289-5.494-13.135-10.16-20.346-13.873c-11.754-6.047-23.918-9.112-36.155-9.112c-1.282,0-2.585,0.034-3.873,0.101
                                    c-9.966,0.514-19.267,2.719-27.14,4.865c0.082-0.516,0.129-1.042,0.129-1.578v-55.803c0-1.002-0.149-1.971-0.426-2.886
                                    c9.359,1.615,17.703,4.66,23.984,8.893c1.669,1.124,3.617,1.706,5.588,1.706c0.924,0,1.852-0.128,2.758-0.388
                                    c2.104-0.604,3.93-1.874,5.225-3.589c0.775,0.188,1.57,0.285,2.367,0.285c1.125-0.002,2.252-0.19,3.334-0.572
                                    c8.386-2.967,15.964-4.407,23.166-4.407c8.76,0,16.811,2.153,24.611,6.585c1.549,0.879,3.248,1.305,4.934,1.305
                                    c2.802,0,5.563-1.176,7.516-3.396C251.925,132.68,252.848,129.595,252.479,126.63z"/>
                                <g>
                                    <path style="fill:#b6a07e" class="st0" d="M227.757,214.26c-5.614-4.904-11.714-9.1-18.343-12.512c-10.964-5.641-22.539-8.557-34.938-7.918
                                        c-8.812,0.455-17.344,2.406-25.793,4.734c-15.584,4.295-31.35,7.346-47.558,8.059c-14.616,0.641-29.018-0.328-43.128-4.387
                                        c-10.113-2.908-19.751-6.93-28.833-12.357c5.69,10.023,12.989,18.496,22.546,25.007c5.44,3.705,11.153,6.726,17.466,8.578
                                        c13.418,3.935,26.926,3.451,40.152-0.385c10.845-3.146,21.407-7.291,32.042-11.131c13.417-4.847,27.07-8.449,41.428-8.988
                                        c12.645-0.476,24.702,1.789,36.123,7.246c3.246,1.554,6.375,3.356,9.989,5.274C228.318,214.85,228.063,214.527,227.757,214.26z"/>
                                    <path style="fill:#b6a07e" class="st0" d="M192,216.625c-17.293-2.619-38.383,3.723-53.166,16.375c24.316-4.833,46.707-14.417,84.999-2.5
                                        C223.833,230.5,213.555,219.891,192,216.625z"/>
                                    <path style="fill:#b6a07e"  class="st0" d="M242.552,127.847c-0.063-0.518-0.157-1.033-0.271-1.543c-4.738-21.266-15.703-38.843-32.029-53.045
                                        C189.4,55.123,164.893,45.89,137.408,44.417C113.204,43.12,90.369,48.12,69.35,60.286c-23.427,13.56-40.16,32.8-48.364,58.927
                                        c-0.967,3.076-1.614,6.252-2.542,9.906c12.831-10.554,41.779-10.883,56.344-3.523c0.16-0.271,0.259-0.389,0.307-0.53
                                        c0.096-0.281,0.186-0.568,0.241-0.861c4.736-25.032,16.812-45.998,35.176-63.475c3.293-3.134,6.337-3.46,8.567-0.99
                                        c2.23,2.47,1.646,5.161-1.652,8.287c-16.956,16.076-27.966,35.445-32.298,58.493c-0.133,0.708-0.106,1.448-0.171,2.443
                                        c21.325-14.65,65.903-16.924,91.14,0.076c0.055-0.125,0.166-0.26,0.148-0.379c-0.128-0.963-0.241-1.93-0.428-2.883
                                        c-4.529-23.095-15.752-42.425-32.898-58.413c-2.697-2.515-3.042-5.324-0.896-7.663c2.056-2.239,5.09-2.132,7.731,0.306
                                        c13.879,12.805,24.338,27.962,30.82,45.707c2.375,6.5,3.993,13.276,5.87,19.634c18.882-6.677,37.707-7.507,56.051,2.91
                                        C242.495,128.266,242.577,128.05,242.552,127.847z"/>
                                    <path style="fill:#907f64" class="st0" d="M125.874,38.851c1.553,0.095,3.125-0.113,4.688-0.199c0,0.025,0,0.051,0,0.076c0.67,0,1.344-0.036,2.013,0.005
                                        c5.017,0.313,5.106,0.23,4.878-4.773c-0.155-3.419-2.547-6.045-5.941-6.523c-3.008-0.423-6.358,1.483-7.149,4.513
                                        c-0.474,1.813-0.308,3.83-0.175,5.738C124.219,38.132,125.263,38.813,125.874,38.851z"/>
                                    <path style="fill:#b6a07e"  class="st0" d="M130.82,131.12c-3.273,0-6.521,0.182-9.694,0.511v58.775c5.098-0.852,10.368-1.95,15.823-3.275v-55.803
                                        C134.934,131.195,132.891,131.12,130.82,131.12z"/>
                                </g>
                                </svg>' />
                    <zona text="The corridor" image='<svg width="50px" height="50px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="页面-1"  stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Building" transform="translate(-480.000000, -48.000000)">
            <g id="bridge_fill" transform="translate(480.000000, 48.000000)">
                <path  d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">

</path>
                <path d="M18,4 C18.5523,4 19,4.44772 19,5 L19,6.56454 L19.1159547,6.66604125 L19.1159547,6.66604125 L19.3929766,6.89748375 C19.4437188,6.938505 19.4966,6.9805125 19.5514,7.02315 C20.0843,7.43757 20.7277,7.85513 21.3162,8.05132 C21.8402,8.22596 22.1233,8.79228 21.9487,9.31623 C21.774,9.84017 21.2077,10.1233 20.6838,9.94868 C20.0777,9.74667 19.4959,9.42147 19,9.09081 L19,14 L22,14 C22.5523,14 23,14.4477 23,15 C23,15.5523 22.5523,16 22,16 L19,16 L19,19 C19,19.5523 18.5523,20 18,20 C17.4477,20 17,19.5523 17,19 L17,16 L7,16 L7,19 C7,19.5523 6.55228,20 6,20 C5.44772,20 5,19.5523 5,19 L5,16 L2,16 C1.44772,16 1,15.5523 1,15 C1,14.4477 1.44772,14 2,14 L5,14 L5,9.09081 C4.50407,9.42147 3.92227,9.74667 3.31623,9.94868 C2.79228,10.1233 2.22596,9.84017 2.05132,9.31623 C1.87667,8.79228 2.15983,8.22596 2.68377,8.05132 C3.27233,7.85513 3.91573,7.43757 4.44856,7.02315 L4.60702484,6.89748375 L4.60702484,6.89748375 L4.88406578,6.66604125 C4.92536687,6.63039 4.964085,6.5964375 5,6.56454 L5,5 C5,4.44772 5.44772,4 6,4 C6.55228,4 7,4.44772 7,5 L7,6.72192 C7.02889,6.76472 7.06369,6.81408 7.10469,6.86875 C7.27344,7.09376 7.54437,7.40487 7.93719,7.71913 C8.71017,8.33751 9.99292,9 12,9 C14.0071,9 15.2898,8.33751 16.0628,7.71913 C16.4556,7.40487 16.7266,7.09376 16.8953,6.86875 L17,6.72192 L17,6.72192 L17,5 C17,4.44772 17.4477,4 18,4 Z M9,10.5333 L9,14 L11,14 L11,10.9531 C10.3789167,10.8935167 9.81370833,10.7800444 9.3012037,10.6285977 L9,10.5333 Z M15,10.5333 C14.5084167,10.6993 13.9648194,10.8305083 13.3659676,10.9110106 L13,10.9531 L13,14 L15,14 L15,10.5333 Z" id="形状" fill="#b6a07e">

</path>
            </g>
        </g>
    </g>
</svg>' />
                    <zona text="San Jose del Cabo"
                        image='<svg fill="#b6a07e" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18,2a4,4,0,1,0,4,4A4,4,0,0,0,18,2Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,8ZM15,20H13V18a1,1,0,0,0-2,0v2H9V16.62l3.45-1.73A1,1,0,0,0,13,14V10a1,1,0,0,0-2,0v3.38l-2,1V8A1,1,0,0,0,7,8v8.38l-2-1V13a1,1,0,0,0-2,0v3a1,1,0,0,0,.55.89L7,18.62V20H3a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2Z"/></svg>' />
                    <zona text="Puerto los Cabos"
                        image='<svg fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style="fill:#b6a07e" d="M2.72,7.65a2.56,2.56,0,0,1,.56.24,4,4,0,0,0,4.1,0,2.6,2.6,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.6,2.6,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,3.88,3.88,0,0,0,2-.56,2.56,2.56,0,0,1,.56-.24,1,1,0,0,0-.56-1.92,4.45,4.45,0,0,0-1,.45,2.08,2.08,0,0,1-2.1,0,4.64,4.64,0,0,0-4.54,0,2.11,2.11,0,0,1-2.12,0,4.64,4.64,0,0,0-4.54,0,2.08,2.08,0,0,1-2.1,0,4.45,4.45,0,0,0-1-.45,1,1,0,1,0-.56,1.92Zm18,8.08a4.45,4.45,0,0,0-1,.45,2.08,2.08,0,0,1-2.1,0,4.64,4.64,0,0,0-4.54,0,2.11,2.11,0,0,1-2.12,0,4.64,4.64,0,0,0-4.54,0,2.08,2.08,0,0,1-2.1,0,4.45,4.45,0,0,0-1-.45,1,1,0,1,0-.56,1.92,2.56,2.56,0,0,1,.56.24,4,4,0,0,0,4.1,0,2.6,2.6,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.6,2.6,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,3.88,3.88,0,0,0,2-.56,2.56,2.56,0,0,1,.56-.24,1,1,0,0,0-.56-1.92Zm0-5a4.45,4.45,0,0,0-1,.45,2.08,2.08,0,0,1-2.1,0,4.64,4.64,0,0,0-4.54,0,2.11,2.11,0,0,1-2.12,0,4.64,4.64,0,0,0-4.54,0,2.08,2.08,0,0,1-2.1,0,4.45,4.45,0,0,0-1-.45A1,1,0,0,0,2,11.41a1,1,0,0,0,.68,1.24,2.56,2.56,0,0,1,.56.24,4,4,0,0,0,4.1,0,2.6,2.6,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.6,2.6,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,3.88,3.88,0,0,0,2-.56,2.56,2.56,0,0,1,.56-.24,1,1,0,0,0-.56-1.92Z"/></svg>' />
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
                                    <h4>we are a transportation company dedicated to our clients, we take them to their
                                        dreams
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
            <div class="card1 flex justify-center items-center">
                <cardLeft ico="travel" title="Airport - Hotel" img="src/assets/Img/fotos/toAirport.jpg" />
            </div>
            <div class="card2 flex justify-center items-center">
                <cardRigth ico="travel" title="Dinners" :img="dinnerImage" />
            </div>
            <div class="card3 flex justify-center items-center">
                <cardLeft ico="travel" title="Activities" img="src/assets/Img/fotos/toActivitie.jpg" />
            </div>
            <div class="card4 flex justify-center items-center">
                <cardRigth ico="travel" title="Hotel - Airpot" img="src/assets/Img/fotos/toHotel.jpg" />
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
                <ctaFoto />
            </div>
        </div>

        <!--Seccion 9-->
        <div class="sec9 color-background ">
            <div class="contenido">
                <cta />
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
        <rightMessaje />
    </div>
</template>

<script setup>
import {ref} from 'vue'

import cardLeft from "../components/Principal/cardleft.vue"
import cardRigth from '../components/Principal/cardRight.vue'
import zona from "../components/General/zonas.vue"
import cta from "../components/Principal/cta.vue"
import footerComp from "../components/Principal/footer.vue"
import HeaderComp from "../components/Principal/TopNavbar.vue"
import ctaFoto from "../components/Principal/ctaFoto.vue"
import rightMessaje from "../components/Principal/rightMessaje.vue"

const dinnerImage = import.meta.env.BASE_URL + 'src/assets/Img/fotos/toDinner.jpg';
</script>


<style scoped>
.color-background {
    background-color: #f5f4ed;
}

.secciones {
    display: grid;
    height: 700vh;
    grid-template-rows: 0.1fr 1.8fr 0.1fr 0.3fr 0.2fr 1fr 4.3fr 0.3fr 0.5fr 2fr 0.1fr 1fr;
    grid-auto-columns: 1fr;
}

.rightMessaje {
    position: fixed;
    right: 0;
    top: 80%;
    transform: translateY(-50%);
    z-index: 1000;
}

.sec1 {
    height: 90vh;

}

.container_center {
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
    background: url('../assets/Img/fotos/surf.webp') center center / cover no-repeat;
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
    .sec2 {
        padding: 0;
    }

    .contenedor-mobil {
        justify-content: center;
        align-items: center;
    }

    .zona-mobil {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 0;
        padding-bottom: 10rem;
    }

    .secciones {
        grid-template-rows: 0.4fr 1.8fr 0.2fr 0.4fr 3fr 0.5fr 2.3fr 0.3fr 1fr 2fr 0.1fr 1fr;
    }

    .titles {
        width: 90%;
    }

    .title3 {
        text-align: center;
    }

    .points .subtext {
        display: none;
    }

    .points {
        text-align: center;
    }

    .sec8 {
        height: 73vh;
    }

    .tk-grid {
        grid-template-rows: 2fr 1fr;
        grid-template-columns: 1fr;
    }

    .textzone {
        text-align: center;
    }

    .airport,
    .activities,
    .dinners,
    .hotel {
        justify-content: center;
    }

    .titleImg {
        font-size: 0.8rem;
    }

    .zoneIte {
        width: 97%;
    }

    .rightMessaje {
        display: none;
    }
}
</style>