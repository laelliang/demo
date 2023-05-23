const demo: AuthRoute.Route = {
  name: 'demo',
  path: '/demo',
  component: 'self',
  meta: {
    title: 'demo',
    i18nTitle: 'message.routes.demo',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin', 'user'],
    icon: 'fluent:Home48Regular',
    order: 10
  }
};

export default demo;
