export default {
  namespaced: true,
  state: () => ({
    timeline: [
      {
        id: 't1',
        year: 'Feb., 1993',
        org: 'Fukui, Japan',
        desc: 'Borned',
        icon: 'mdi-baby',
        color: 'blue lighten-2',
        side: 'right'
      },
      {
        id: 't2',
        year: 'Mar., 2013',
        org: 'Fukui National Col. of Tech., Electrical and Electronics Eng.',
        desc: 'Associate degree',
        icon: 'mdi-human-handsup',
        color: 'orange lighten-2',
        side: 'left'
      },
      {
        id: 't3',
        year: 'Mar., 2015',
        org: 'Hiroshima Univ., Electrical, Electronic and Systems Eng.',
        desc: 'Bachelor(Engineering)',
        icon: 'mdi-human-handsup',
        color: 'orange lighten-2',
        side: 'left'
      },
      {
        id: 't4',
        year: 'Mar., 2017',
        org: 'Hiroshima Univ., Grad. School of Engineering, System-Cybernetics',
        desc: 'Master(Engineering)',
        icon: 'mdi-human-handsup',
        color: 'orange lighten-2',
        side: 'left'
      },
      {
        id: 't5',
        year: 'Apr., 2017',
        org: 'JSPS',
        desc: 'DC1 Fellowship',
        icon: 'mdi-office-building',
        color: 'green lighten-2',
        side: 'right'
      },
      {
        id: 't6',
        year: 'Mar., 2020',
        org: 'Hiroshima Univ., Grad. School of Engineering, System-Cybernetics',
        desc: 'Ph.D.(Engineering)',
        icon: 'mdi-human-handsup',
        color: 'orange lighten-2',
        side: 'left'
      },
      {
        id: 't7',
        year: 'Apr., 2020',
        org: 'Global Walkers, Inc.',
        desc: 'Image Processing/AI Developer',
        icon: 'mdi-office-building',
        color: 'green lighten-2',
        side: 'right'
      },
      {
        id: 't8',
        year: 'Feb., 2022',
        org: 'Future Architect, Inc.',
        desc: 'IT Consultant',
        icon: 'mdi-office-building',
        color: 'green lighten-2',
        side: 'left'
      }
    ]
  }),
  getters: {
    timeline (state) {
      return state.timeline
    }
  }
}
