export default {
  navItems: [
    {
      name: 'PROFILE',
      url: '#me'
    },
    {
      name: 'SKILL',
      url: '#skill'
    },
    {
      name: 'MEDIA',
      url: '#media',
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
          url: '#paper',
          external: false
        }
      ]
    },
    {
      name: 'Career',
      url: '#career'
    }
  ]
}
