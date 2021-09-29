import { createRouter, createWebHashHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesDetail from './pages/coaches/CoachesDetail.vue';
import CoachesRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCouch from './pages/request/ContactCoach.vue';
import RequestsReceived from './pages/request/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';

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
      component: CoachesRegistration
    },
    {
      path: '/requests',
      component: RequestsReceived
    },
    {
      path: '/auth',
      component: UserAuth
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

export default router;
