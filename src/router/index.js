import {createRouter, createWebHistory} from 'vue-router'

const HomeView = () => import('@/views/home/HomeView.vue')
const GuestView = () => import('@/views/guest/GuestView.vue')
const NotFoundPage = () => import('@/views/notFound/NotFoundPage.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {requiresAuth: true}, // Marcar la ruta como protegida
        },
        {
            path: '/guest-view',
            name: 'guest',
            component: GuestView,
        },
        {
            path: "/:pathMatch(.*)*", // Comodín para manejar rutas no encontradas
            name: 'NotFound',
            component: NotFoundPage,
        },
    ]
})

router.beforeEach((to, from, next) => {
    const isLogged = localStorage.getItem('authenticated') === 'isLogged'

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLogged) {
            const pwInput = prompt('Ingrese la contraseña para continuar');
            const int = import.meta.env.VITE_NODE_SECRET;

            if (pwInput === int) {
                localStorage.setItem('authenticated', 'isLogged')
                next({
                    name: 'home'
                })
            } else {
                localStorage.setItem('authenticated', 'isGuest')
                next({
                    name: 'guest'
                })
            }
        } else {
            next();
        }
    }else {
        // Si la ruta no requiere autenticación, continuar
        next()
    }

    /*if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLogged) {
            // Si no está autenticado, redirigir a la página de inicio de sesión
            next({name: 'guest'})
        } else {
            // Si está autenticado, continuar a la ruta solicitada
            next()
        }
    } else {
        // Si la ruta no requiere autenticación, continuar
        next()
    }*/
})

export default router
