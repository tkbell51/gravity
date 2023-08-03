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
import PageHeader from '@/components/PageHeader'
import ServicesGrid from '@/components/ServicesGrid'
export default {
    components: {
        PageHeader,
        ServicesGrid,
    },
    head() {
        return this.$seo({
            title: 'Services',
        })
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
