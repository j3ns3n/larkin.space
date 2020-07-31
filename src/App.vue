<template>
  <div id="app">
    <Profile :links="links" :projects="projects" />
  </div>
</template>

<script>
import Profile from './components/Profile';

export default {
  name: 'App',
  title: 'Jensen Larkin',
  components: {
    Profile
  },

  data() {
    return {
      links: [
        {
          name: 'GitHub',
          icon: 'github',
          link: 'https://github.com/J3ns3n',
          colour: '#24292e'
        },
        {
          name: 'Twitter',
          icon: 'twitter',
          link: 'https://twitter.com/jensenlarkin',
          colour: '#1DA1F2'
        },
        {
          name: 'Discord',
          icon: 'discord',
          link: 'https://discord.gg/FPDwypZ',
          colour: '#7289DA'
        }
      ],
      projects: [
        {
          name: 'Mercy-Selfbot',
          link: 'https://github.com/j3ns3n/mercy-selfbot',
          desc: 'An old project using message events within Discord to add extra functionality to chat messages. Archived due to the use of selfbots no longer being allowed by Discord.',
          tags: ['Javascript', 'Discord', 'Chat-Bot', 'Archived']
        },
        {
          name: 'Discord-Tickets',
          link: 'https://github.com/j3ns3n/discord-tickets',
          desc: 'An open-source bot using the Discord platform to create and log independent support tickets within a server.',
          tags: ['Javascript', 'Discord', 'Chat-Bot', 'Tickets']
        }
      ]
    }
  }
};
</script>
