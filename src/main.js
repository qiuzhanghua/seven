import Framework7 from 'framework7/lite-bundle';

import Framework7Svelte from 'framework7-svelte';

import 'framework7/css/bundle';

import '@/css/icons.less';
import '@/css/app.less';

Framework7.use(Framework7Svelte)

import App from './App.svelte'

Framework7.use(Framework7Svelte)

const app = new App({
  target: document.getElementById('app')
})

export default app
