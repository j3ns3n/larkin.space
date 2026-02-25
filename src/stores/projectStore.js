import { defineStore, acceptHMRUpdate } from 'pinia'

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    tagConversions: {
      Javascript: { icon: 'fab fa-js', color: '#f7df1e' },
      PHP: { icon: 'fab fa-php', color: '#777bb4' },
      Laravel: { icon: 'fab fa-laravel', color: '#ff2d20' },
      VueJS: { icon: 'fab fa-vuejs', color: '#42b883' },
      Quasar: { icon: 'fas fa-atom', color: '#00b4ff' },
      Discord: { icon: 'fab fa-discord', color: '#5865f2' },
      API: { icon: 'fas fa-plug', color: '#38bdf8' },
      Website: { icon: 'fas fa-globe', color: '#a78bfa' },
      Package: { icon: 'fas fa-box-open', color: '#fb923c' },
      'Chat-Bot': { icon: 'fas fa-robot', color: '#60a5fa' },
    },
    projects: [
      {
        name: 'Laravel-Linkly',
        github: 'https://github.com/j3ns3n/laravel-linkly',
        description:
          'A Laravel package providing a clean, expressive interface for integrating with the Linkly API.',
        tags: ['PHP', 'Laravel', 'API', 'Package'],
      },
      {
        name: 'Larkin.Space',
        github: 'https://github.com/j3ns3n/larkin.space',
        description:
          'This portfolio site, built with Quasar and Vue 3 with a focus on clean design and easy maintainability.',
        tags: ['Javascript', 'VueJS', 'Quasar', 'Website'],
      },
      {
        name: 'Discord-Tickets',
        github: 'https://github.com/j3ns3n/discord-tickets',
        description:
          'A lightweight, open-source Discord bot that lets server admins create, manage, and log independent support ticket channels.',
        tags: ['Javascript', 'Discord', 'Chat-Bot'],
        archived: true,
      },
    ],
  }),
  getters: {
    getTagInfo: (state) => (tag) => {
      return state.tagConversions[tag] || { icon: 'fas fa-tag', color: '#6b7280' }
    },
    getProjects: (state) => {
      return state.projects
    },
  },
  actions: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
}
