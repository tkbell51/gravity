const SITE_NAME = 'Gravity Counseling Group'
const DEFAULT_DESCRIPTION =
  'At Gravity Counseling Group, we aim to create a safe space for every individual to grow through the strength of words shared in the confines of this space'

// Replaces nuxt-seo's this.$seo()
export const usePageSeo = (data) => {
  const { siteUrl } = useRuntimeConfig().public
  const route = useRoute()
  const seo = computed(() => toValue(data))
  const url = computed(() => siteUrl + route.path)
  const title = () => `${seo.value.title} - ${SITE_NAME}`
  const description = () => seo.value.description || DEFAULT_DESCRIPTION

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })

  useSeoMeta({
    title: () => seo.value.title,
    description,
    author: () => seo.value.author,
    ogSiteName: SITE_NAME,
    ogType: 'website',
    ogTitle: title,
    ogDescription: description,
    ogImage: () => seo.value.image,
    ogUrl: url,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: () => seo.value.image,
  })
}
