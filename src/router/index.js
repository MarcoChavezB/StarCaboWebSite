const routes = [
    {
        path: '/',
        name: 'Principal',
        component: principal,
    },
    {
        path: '/getservice',
        name: 'GetService',
        component: GetService
    }
]


export default routes
import principal from '../views/PrincipalView.vue'
import GetService from '../views/GetService.vue'
