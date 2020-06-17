export const state = () => ({
  quoteSlides: [
    {
      quote:
        "A lot of people you think you know, you don't know, until you find out you don't know then it may be too late to know.",
      name: 'Kenneth B. Clark'
    },
    {
      quote: 'There is more on the surface than what our eyes can see',
      name: 'Aaron T. Beck'
    },
    {
      quote:
        "For every problem there is a solution. The problem is...we don't like the solution.",
      name: 'Kervin K. Searles'
    },
    {
      quote:
        'It is not primarily our physical selves that limit us but rather our mindset about our physical limits.',
      name: 'Ellen J. Langer'
    }
  ]
})

export const getters = {
  get(state) {
    return state.quoteSlides
  }
}
