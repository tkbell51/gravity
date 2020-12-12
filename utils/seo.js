export const createSEOMeta = (data) => [
  {
    hid: 'og:title',
    property: 'og:title',
    content: data.title + ' | Gravity Counseling Group',
  },
  { hid: 'description', name: 'description', content: data.description },
  {
    hid: 'og:description',
    property: 'og:description',
    content: data.description,
  },
  { hid: 'og:image', property: 'og:image', content: data.image },
  {
    hid: 'og:url',
    property: 'og:url',
    content: 'https://gravitycounselinggroup.com' + '/' + data.url,
  },
  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: data.cardType || 'summary_large_image',
  },
]
