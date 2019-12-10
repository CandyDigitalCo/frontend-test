const navigationState = () => ({
  routes: [
    {
      name: 'home',
      path: '/',
      icon: 'fa fa-home'
    },
    {
      name: 'boilerplates',
      path: '/boileplates',
      icon: 'fa fa-link'
    },
    {
      name: 'cheatsheets',
      path: '/cheatsheets',
      icon: 'fa fa-paperclip'
    },
    {
      name: 'code_styles',
      path: '/',
      icon: 'fa fa-code'
    },
    {
      name: 'videos',
      path: '/video',
      icon: 'fa fa-video'
    }
  ]
})

const navigationGetters = () => ({
  routes: state => state.routes
})

export { navigationGetters, navigationState }
