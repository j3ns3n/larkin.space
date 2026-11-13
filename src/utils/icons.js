import {
  fabAws,
  fabDiscord,
  fabDocker,
  fabGitAlt,
  fabGithub,
  fabJs,
  fabLaravel,
  fabLinkedinIn,
  fabLinux,
  fabNodeJs,
  fabPhp,
  fabSpotify,
  fabVuejs,
  fasArrowUpRightFromSquare,
  fasAtom,
  fasBoxOpen,
  fasChevronDown,
  fasCode,
  fasEnvelope,
  fasGlobe,
  fasPlug,
  fasRobot,
  fasTag,
  fasVial,
} from '@quasar/extras/fontawesome-v6'

// Tree-shaken SVG paths. Keeping the Font Awesome class name as the key
// means the stores stay readable and are not bloated with path data.
const icons = {
  'fab fa-aws': fabAws,
  'fab fa-discord': fabDiscord,
  'fab fa-docker': fabDocker,
  'fab fa-git-alt': fabGitAlt,
  'fab fa-github': fabGithub,
  'fab fa-js': fabJs,
  'fab fa-laravel': fabLaravel,
  'fab fa-linkedin-in': fabLinkedinIn,
  'fab fa-linux': fabLinux,
  'fab fa-node-js': fabNodeJs,
  'fab fa-php': fabPhp,
  'fab fa-spotify': fabSpotify,
  'fab fa-vuejs': fabVuejs,
  'fas fa-arrow-up-right-from-square': fasArrowUpRightFromSquare,
  'fas fa-atom': fasAtom,
  'fas fa-box-open': fasBoxOpen,
  'fas fa-chevron-down': fasChevronDown,
  'fas fa-code': fasCode,
  'fas fa-envelope': fasEnvelope,
  'fas fa-globe': fasGlobe,
  'fas fa-plug': fasPlug,
  'fas fa-robot': fasRobot,
  'fas fa-tag': fasTag,
  'fas fa-vial': fasVial,
}

export function resolveIcon(name) {
  const icon = icons[name]
  if (!icon && import.meta.env.DEV) {
    console.warn(`[icons] No SVG for "${name}"`)
  }
  return icon || ''
}
