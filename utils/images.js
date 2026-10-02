// Vite replacement for webpack's require.context: maps file name -> asset URL
const byFileName = (modules) =>
  Object.fromEntries(
    Object.entries(modules).map(([path, url]) => [path.split('/').pop(), url])
  )

export const blogImages = byFileName(
  import.meta.glob('~/assets/img/blog/*', { eager: true, import: 'default' })
)

export const galleryImages = byFileName(
  import.meta.glob('~/assets/img/gallery/*', { eager: true, import: 'default' })
)

export const insuranceImages = byFileName(
  import.meta.glob('~/assets/img/insurance/*', {
    eager: true,
    import: 'default',
  })
)

export const mentalResourceImages = byFileName(
  import.meta.glob('~/assets/img/mental-resources/*', {
    eager: true,
    import: 'default',
  })
)

export const articleSlug = (article) => article.path.split('/').pop()
