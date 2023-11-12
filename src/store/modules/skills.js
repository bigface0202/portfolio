export default {
  namespaced: true,
  state: () => ({
    skills: [
      {
        title: 'Google Cloud',
        years: '2 years',
        icon: 'mdi-google-cloud'
      },
      {
        title: 'Kubernetes',
        years: '2 years',
        icon: 'mdi-kubernetes'
      },
      {
        title: 'Terraform',
        years: '2 years',
        icon: 'mdi-terraform'
      },
      {
        title: 'Python',
        years: '2 years',
        icon: 'mdi-language-python'
      },
      {
        title: 'Golang',
        years: '1 year',
        icon: 'mdi-language-go'
      },
      {
        title: 'C++',
        years: '1 year',
        icon: 'mdi-language-cpp'
      },
      {
        title: 'Vue.js',
        years: '1 year',
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
