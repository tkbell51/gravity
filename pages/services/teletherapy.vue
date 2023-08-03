<template>
    <div>
        <PageHeader page-title="Teletherapy" />
        <section class="section__content">
            <div class="container">
                <div class="grid">
                    <ServiceLinks />
                    <div>
                        <div class="teletherapy">
                            <div class="teletherapy__box">
                                <div class="teletherapy__img">
                                    <img src="../../assets/img/gcg-online.jpg" alt="Person typing on computer" />
                                </div>
                                <div>
                                    <p>
                                        Gravity Counseling Group offers effective online therapy that is convenient and
                                        secure. Individuals and couples can receive help from the comfort of their own
                                        homes as we provide the opportunity to participate in video through telehealth
                                        powered by SimplePractice. During the intake session, we will determine what
                                        approach will be best for you and proceed accordingly.
                                    </p>
                                    <SimplePractice />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import SimplePractice from '@/components/SimplePractice'
import ServiceLinks from '@/components/ServiceLinks'

export default {
    components: {
        PageHeader,
        ServiceLinks,
        SimplePractice,
    },
    head() {
        return this.$seo({
            title: 'Teletherapy',
        })
    },
}
</script>

<style lang="scss">
.teletherapy {
    &__box {
        text-align: center;

        p {
            margin-top: 2rem;
        }
    }
    &__img {
        img {
            width: 100%;
        }
    }
}
</style>
