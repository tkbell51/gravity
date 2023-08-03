<template>
    <div>
        <PageHeader page-title="Workshops &amp; Presentations" />
        <section class="section__content">
            <div class="container">
                <div class="grid">
                    <ServiceLinks />
                    <div>
                        <p>
                            Gravity Counseling Group has experience providing excellent public speaking in various
                            settings. Our therapists have presented psychoeducation on various aspects of mental health
                            and led workshops on parenting and anger management. Additionally, we has offered talks to
                            small intimate groups geared toward inspiring others. Topics include but are not limited to:
                            Mental Health Issues (teens and adult males), Gain and Maintain (Good Mental Health),
                            Slowing Down to Live Better (living with anxiety), You Make Me Better (Healthy
                            Relationships), The Dos and Don’ts of Breakup, Positively Parenting, Parenting Teens with
                            Anxiety, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import ServiceLinks from '@/components/ServiceLinks'

export default {
    components: {
        PageHeader,
        ServiceLinks,
    },
    head() {
        return this.$seo({
            title: 'Workshops & Presentations',
        })
    },
}
</script>

<style lang="scss"></style>
