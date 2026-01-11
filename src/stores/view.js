import { defineStore } from 'pinia'

export const useViewStore = defineStore('view', {
  state: () => ({
    currentView: 'home'
  }),
  actions: {
    navigateTo(view) {
      this.currentView = view
      window.scrollTo(0, 0)
    }
  }
})
