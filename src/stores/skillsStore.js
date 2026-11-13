import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSkillsStore = defineStore('skillsStore', {
  state: () => ({
    categories: [
      {
        name: 'Backend',
        skills: [
          { name: 'PHP', icon: 'fab fa-php', color: '#9498cc' },
          { name: 'Laravel', icon: 'fab fa-laravel', color: '#ff564c' },
          { name: 'MySQL', img: '/icons/mysql.svg', color: '#4eabbc' },
          { name: 'REST APIs', icon: 'fas fa-plug', color: '#38bdf8' },
          { name: 'Redis', img: '/icons/redis.svg', color: '#ee6d65' },
          { name: 'Pest', icon: 'fas fa-vial', color: '#f472b6' },
        ],
      },
      {
        name: 'Frontend',
        skills: [
          { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
          { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#42b883' },
          { name: 'Quasar', icon: 'fas fa-atom', color: '#00b4ff' },
          { name: 'SCSS', img: '/icons/sass.svg', color: '#d173a3' },
        ],
      },
      {
        name: 'Tools & Infrastructure',
        skills: [
          { name: 'Git', icon: 'fab fa-git-alt', color: '#f25e42' },
          { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900' },
          { name: 'Node.js', icon: 'fab fa-node-js', color: '#4aaa4a' },
          { name: 'Linux', icon: 'fab fa-linux', color: '#fcc624' },
          { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
          { name: 'CI / CD', img: '/icons/githubactions.svg', color: '#a78bfa' },
        ],
      },
    ],
  }),
  getters: {
    getCategories: (state) => state.categories,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSkillsStore, import.meta.hot))
}
