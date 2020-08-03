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
          icon: {
            type: 'fab',
            name: 'github'
          },
          link: 'https://github.com/J3ns3n',
          colour: '#24292E'
        },
        {
          name: 'Twitter',
          icon: {
            type: 'fab',
            name: 'twitter'
          },
          link: 'https://twitter.com/jensenlarkin',
          colour: '#1DA1F2'
        },
        {
          name: 'Email',
          icon: {
            type: 'far',
            name: 'envelope'
          },
          link: 'mailto:jensen@larkin.space',
          colour: '#D35400'
        },
        {
          name: 'Spotify',
          icon: {
            type: 'fab',
            name: 'spotify'
          },
          link: 'https://open.spotify.com/user/jensenlarkin?si=OqFZoVBnRLe78zjFe398eA',
          colour: '#1DB954'
        },
        {
          name: 'Discord',
          icon: {
            type: 'fab',
            name: 'discord'
          },
          link: 'https://discord.gg/FPDwypZ',
          colour: '#7289DA'
        }
      ],
      projects: [
        {
          name: 'Larkin.Space',
          link: 'https://github.com/j3ns3n/larkin.space',
          desc: 'A copy of this website, built using VueJS and made to be modular and easily editable with new links and projects when needed.',
          tags: ['Javascript', 'VueJS', 'Website', 'Responsive']
        },
        {
          name: 'VueJS Todo List',
          link: 'https://github.com/j3ns3n/vuejs-todo-list',
          desc: 'A simple back/frontend for a todo list website made with VueJS and Express.',
          tags: ['Javascript', 'VueJS', 'Website', 'Express']
        },
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

<style>

#app {
  height: 100%;
}
</style>
