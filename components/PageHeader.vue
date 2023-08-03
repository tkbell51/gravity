<template>
    <div class="page__header">
        <div class="container">
            <div class="page__header--content">
                <h1 class="heading-primary">
                    <span>{{ pageTitle }}</span>
                </h1>
            </div>
        </div>
        <!-- <img src="../assets/img/logo-white.png" alt="Logo" /> -->
    </div>
</template>

<script>
export default {
    props: {
        pageTitle: {
            type: String,
            default: 'Title',
        },
        subPageTitle: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss">
.page__header {
    background-image: linear-gradient(to right, rgba($tertiary-color, 0.8), rgba($primary-color, 0.8)),
        url('../assets/img/bridge-on-the-lake.jpg');
    background-size: cover;
    background-position: center;

    position: relative;
    overflow: hidden;
    height: 30rem;
    .container {
        height: 100%;
    }
    &--content {
        height: inherit;
        display: flex;

        align-items: flex-end;
    }
    .heading-primary {
        @include respond(phone) {
            letter-spacing: 0.2rem;
        }
    }
    .heading-primary span {
        display: block;
    }

    img {
        @include absCenter;
        z-index: 10;
        opacity: 0.2;
        filter: blur(1px);
    }
}
</style>
