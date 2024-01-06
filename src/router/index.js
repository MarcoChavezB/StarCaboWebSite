const routes = [
    {
        path: '/',
        name: 'Principal',
        component: principal,
    },
    {
        path: '/secciones',
        name: 'Secciones',
        component: secciones,
        
        children: [
            {
                path: '/getservice',
                name: 'GetService',
                component: GetService
            },
            {
                path: '/destinations',
                name: 'destinations',
                component: destinations
            },
            {
                path: '/aboutus',
                name: 'AboutUs',
                component: AboutUs
            },
        ]
    }
]


export default routes
import principal from '../views/PrincipalView.vue'
import GetService from '../views/GetService.vue'
import destinations from '../views/destinations.vue'
import secciones from '../views/SeccionesView.vue'
import AboutUs from '../views/AboutuUs.vue'
//import prueba from '../views/prueba.vue'