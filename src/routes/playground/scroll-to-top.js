export function scrollToTop(node) {
  node.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  })

  return {
    // cleanup function (optional)
    destroy() {
      node.removeEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
      })
    }
  }
}