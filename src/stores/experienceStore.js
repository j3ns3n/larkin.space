import { defineStore } from 'pinia'
import axitechLogo from 'src/assets/axitech-logo.png'
import scoutsLogo from 'src/assets/scouts-logo.png'

export const useExperienceStore = defineStore('experience', {
  state: () => ({
    experiences: [
      {
        title: 'Software Engineer',
        company: 'axitech',
        url: 'https://axitech.co',
        logo: axitechLogo,
        color: '#00d4ff',
        startDate: 'Sep 2020',
        endDate: null,
        description:
          'Working across the full stack with Laravel and Vue.js — designing APIs, building internal tooling, writing tests, and keeping systems running smoothly at scale.',
      },
      {
        title: 'Scout Leader',
        company: 'The Scouts — Ipswich',
        url: 'https://www.scouts.org.uk',
        logo: scoutsLogo,
        color: '#00d4ff',
        startDate: 'Nov 2019',
        endDate: null,
        description:
          'Volunteering as a Scout Leader, helping young people develop skills for life through outdoor activities, teamwork, and community projects.',
      },
    ],
  }),
  getters: {
    getExperiences: (state) => state.experiences,
  },
})
