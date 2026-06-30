import { defineStore } from 'pinia'

export const useCertificationsStore = defineStore('certifications', {
  state: () => ({
    certifications: [
      {
        name: 'Foundations of Git',
        issuer: 'GitKraken',
        icon: 'fab fa-git-alt',
        color: '#169287',
        credentialUrl: 'https://learn.gitkraken.com/certificates/gb0lvblzxp',
      },
      {
        name: 'Getting Started with DevOps on AWS',
        issuer: 'AWS Training & Certification',
        icon: 'fab fa-aws',
        color: '#FF9900',
        date: 'June 30, 2026',
        credentialUrl: '/aws-getting-started-devops.pdf',
      },
    ],
  }),
  getters: {
    getCertifications: (state) => state.certifications,
  },
})
