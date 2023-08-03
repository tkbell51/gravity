<template>
    <div class="social__nav">
        <div class="social__nav--box">
            <div class="social__nav--left">
                <a
                    class="social__link"
                    href="https://www.google.com/maps/dir/?api=1&destination=104%20Maxwell%20Ave%20Suite%20219%20Greenwood%20SC%2029646"
                    target="_blank"
                    ><Fas class="social__nav--icon" i="map-marker-alt" />104 Maxwell Ave Suite 219, Greenwood, SC
                    29646</a
                >
            </div>
            <div class="social__nav--right">
                <a class="social__link" href="mailto:admin@gravitycounselinggroup.com" target="_blank"
                    ><Fas class="social__nav--icon" i="envelope" />admin@gravitycounselinggroup.com</a
                >
                <a class="social__link" href="tel:864-724-9187" target="_blank"
                ><Fas class="social__nav--icon" i="phone" />(864) 724-9187</a
                >
                <ul class="social__list">
                    <li v-for="item in social" :key="item.name" class="social__item">
                        <a class="social__link" :href="item.link" target="_blank" :title="item.name"
                        ><Fab class="social__nav--icon" :i="item.name"
                        /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Fab from '~/components/Fab'
import Fas from '~/components/Fas'

export default {
    components: {
        Fab,
        Fas,
    },
    data() {
        return {
            social: [
                {
                    name: 'instagram',
                    link: 'https://www.instagram.com/gravitycounselinggroup/',
                },
                {
                    name: 'facebook',
                    link: 'https://www.facebook.com/gravitycounseling/',
                },
                {
                    name: 'linkedin',
                    link: 'https://www.linkedin.com/company/gravity-counseling-group',
                },
                { name: 'twitter', link: 'https://twitter.com/GravityCGroup' },
                {
                    name: 'youtube',
                    link: 'https://www.youtube.com/@gravitycounselinggroup8683',
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.social {
    &__nav {
        background: $primary-color;
        padding: 0 1rem;

        &--box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 3rem;
        }

        &--right {
            display: flex;
        }

        &--icon {
            color: $accent-color;
            margin-right: 0.5rem;
        }
    }

    &__list {
        display: flex;
        align-items: center;
        list-style-type: none;

        .social__nav--icon {
            color: $white;
            transition: $transition;

            &:hover {
                color: $accent-color;
            }
        }
    }

    &__link,
    &__link:link,
    &__link:visited {
        color: $white;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-right: 1rem;
        font-size: 1.3rem;
        transition: $transition;
    }
    &__link:hover,
    &__link:focus {
        color: $accent-color;
    }
}
</style>
