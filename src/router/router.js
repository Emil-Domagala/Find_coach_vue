import { createRouter, createWebHistory } from 'vue-router';

import CoachesDetail from '../pages/coaches/CoachesDetail.vue';
import CoachesList from '../pages/coaches/CoachesList.vue';
import CoachRegistration from '../pages/coaches/CoachRegistration.vue';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import RequestsReceived from '../pages/requests/RequestsReceived.vue';
import NotFound from '../pages/NotFound.vue';
import UserAuth from '../pages/auth/UserAuth.vue';
import store from '../store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      component: CoachesDetail,
      props: true,
      children: [
        {
          path: 'contact',
          component: ContactCoach,
        },
      ],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/auth',
      component: UserAuth,
      meta: {
        requiresUnauth: true,
      },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenicated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenicated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
