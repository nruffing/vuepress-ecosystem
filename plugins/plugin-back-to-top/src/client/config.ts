import { defineClientConfig } from 'vuepress/client'
import type { ClientConfig } from 'vuepress/client'
import { BackToTop } from './components/index.js'

export default defineClientConfig({
  rootComponents: [BackToTop],
}) as ClientConfig
