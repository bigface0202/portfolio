export default {
  namespaced: true,
  state: () => ({
    skills: [
      {
        title: 'Google Cloud',
        years: '2 years',
        image: require('@/assets/img/google_cloud.png')
      },
      {
        title: 'Kubernetes',
        years: '2 years',
        image: require('@/assets/img/kubernetes.png')
      },
      {
        title: 'Terraform',
        years: '2 years',
        image: require('@/assets/img/terraform.png')
      },
      {
        title: 'Jenkins',
        years: '2 years',
        image: require('@/assets/img/jenkins.png')
      },
      {
        title: 'Python',
        years: '2 years',
        image: require('@/assets/img/python.png')
      },
      {
        title: 'Golang',
        years: '1 year',
        image: require('@/assets/img/go.svg')
      },
      {
        title: 'C++',
        years: '1 year',
        image: require('@/assets/img/cpp.png')
      },
      {
        title: 'Vue.js',
        years: '1 year',
        image: require('@/assets/img/vue.png')
      }
    ]
  }),
  getters: {
    skills (state) {
      return state.skills
    }
  }
}
