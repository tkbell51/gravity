<template>
    <div>
        <PageHeader page-title="Services" />
        <section class="section__services">
            <div class="container">
                <ServicesGrid />
            </div>
        </section>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import ServicesGrid from '@/components/ServicesGrid.vue'
export default {
    components: {
        PageHeader,
        ServicesGrid,
    },
    setup() {
        usePageSeo({ title: 'Services' })
    },
}
</script>

<style lang="scss">
.services {
    text-decoration: none;
    p {
        color: $black;
    }
}
</style>
