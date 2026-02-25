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
          'Building and maintaining production Laravel applications serving real users at scale. Designing RESTful APIs, writing comprehensive test suites, developing internal tooling with Vue.js, and working with MySQL, Redis, and CI/CD pipelines to keep systems reliable and performant.',
      },
      {
        title: 'Scout Leader',
        company: 'The Scouts',
        url: 'https://www.scouts.org.uk',
        logo: scoutsLogo,
        color: '#00d4ff',
        startDate: 'Nov 2019',
        endDate: null,
        description:
          'Leading weekly sessions for young people, planning outdoor expeditions, and mentoring on teamwork and problem-solving — building leadership and communication skills beyond the codebase.',
      },
    ],
  }),
  getters: {
    getExperiences: (state) => state.experiences,
  },
})
