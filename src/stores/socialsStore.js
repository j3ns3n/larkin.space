import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSocialsStore = defineStore('socialsStore', {
  state: () => ({
    socials: [
      {
        name: 'GitHub',
        url: 'https://github.com/J3ns3n',
        icon: 'fab fa-github',
        color: '#f0f6fc',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jensen-larkin/',
        icon: 'fab fa-linkedin-in',
        color: '#0A66C2',
      },
      {
        name: 'Email',
        url: 'mailto:jensen@larkin.space',
        icon: 'fas fa-envelope',
        color: '#D35400',
      },
      {
        name: 'Spotify',
        url: 'https://open.spotify.com/user/jensenlarkin?si=OqFZoVBnRLe78zjFe398eA',
        icon: 'fab fa-spotify',
        color: '#1DB954',
      },
    ],
  }),
  getters: {
    getSocials: (state) => {
      return state.socials
    },
  },
  actions: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSocialsStore, import.meta.hot))
}
