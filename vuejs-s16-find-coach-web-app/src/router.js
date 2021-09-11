import { createRouter, createWebHashHistory } from 'vue-router';

import CouchesList from './pages/couches/CouchesList.vue';
import CouchesDetail from './pages/couches/CouchesDetail.vue';
import CouchesRegistration from './pages/couches/CoachRegistration.vue';
import ContactCouch from './pages/request/ContactCoach.vue';
import RequestsReceived from './pages/request/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/couches'
    },
    {
      path: '/couches',
      component: CouchesList
    },
    {
      path: '/couches/:id',
      component: CouchesDetail,
      children: [
        {
          path: 'contact',
          component: ContactCouch
        }
      ]
    },
    {
      path: '/register',
      component: CouchesRegistration
    },
    {
      path: '/requests',
      component: RequestsReceived
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

export default router;
