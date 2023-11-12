export default {
  navItems: [
    {
      name: 'PROFILE',
      url: '/home'
    },
    {
      name: 'MEDIA',
      url: '/home',
      children: [
        {
          name: 'Medium',
          url: 'https://medium.com/@bigface00',
          external: true
        },
        {
          name: 'Qiita',
          url: 'https://qiita.com/bigface00',
          external: true
        },
        {
          name: 'Future Tech Blog',
          url: 'https://future-architect.github.io/authors/%E5%B2%B8%E4%B8%8B%E5%84%AA%E4%BB%8B/',
          external: true
        },
        {
          name: 'Journal Papers',
          url: '/papers',
          external: false
        }
      ]
    }
  ]
}
