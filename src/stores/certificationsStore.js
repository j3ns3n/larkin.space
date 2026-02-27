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
    ],
  }),
  getters: {
    getCertifications: (state) => state.certifications,
  },
})
