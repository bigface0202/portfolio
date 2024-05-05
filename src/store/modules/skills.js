export default {
  namespaced: true,
  state: () => ({
    skills: [
      {
        title: 'Google Cloud',
        years: '2.5 years',
        icon: 'mdi-google-cloud'
      },
      {
        title: 'Kubernetes',
        years: '2.5 years',
        icon: 'mdi-kubernetes'
      },
      {
        title: 'Terraform',
        years: '2.5 years',
        icon: 'mdi-terraform'
      },
      {
        title: 'Python',
        years: '4 years',
        icon: 'mdi-language-python'
      },
      {
        title: 'Golang',
        years: '1 year',
        icon: 'mdi-language-go'
      },
      {
        title: 'C++',
        years: '2 year',
        icon: 'mdi-language-cpp'
      },
      {
        title: 'Vue.js',
        years: '2 year',
        icon: 'mdi-vuejs'
      }
    ]
  }),
  getters: {
    skills (state) {
      return state.skills
    }
  }
}
