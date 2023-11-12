export default {
  namespaced: true,
  state: () => ({
    media: [
      {
        title: 'Medium',
        url: 'https://medium.com/@bigface00',
        image: 'https://miro.medium.com/v2/resize:fit:1800/1*NGw2DtgvHtRfSNba-yf_hw.jpeg'
      },
      {
        title: 'Qiita',
        url: 'https://qiita.com/bigface00',
        image: 'https://cdn.qiita.com/assets/qiita-ogp-3b6fcfdd74755a85107071ffc3155898.png'
      },
      {
        title: 'Future Tech Blog',
        url: 'https://future-architect.github.io/authors/%E5%B2%B8%E4%B8%8B%E5%84%AA%E4%BB%8B/',
        image: 'https://future-architect.github.io/ogp_techblog.jpg'
      },
      {
        title: 'Journal Papers',
        url: '',
        image: require('@/assets/img/journal_paper.svg')
      }
    ]
  }),
  getters: {
    media (state) {
      return state.media
    }
  }
}
