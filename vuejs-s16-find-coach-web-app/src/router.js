import { createRouter, createWebHashHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesDetail from './pages/coaches/CoachesDetail.vue';
import CoachesRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCouch from './pages/request/ContactCoach.vue';
import RequestsReceived from './pages/request/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: CoachesList
    },
    {
      path: '/coaches/:id',
      component: CoachesDetail,
      props: true,
      children: [
        {
          path: 'contact',
          component: ContactCouch
        }
      ]
    },
    {
      path: '/register',
      component: CoachesRegistration,
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      component: UserAuth,
      meta: { requiresNotAuth: true }
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresNotAuth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
