<template>
    <div>
        <section id="section__contact-form" class="section__contact-form">
            <div class="container">
                <div class="contact">
                    <div class="contact__info--box">
                        <h2 class="heading-secondary">Connect with Gravity</h2>
                        <p>
                            Words can hurt, help, or heal. At Gravity Counseling Group we aim to create a safe space for
                            every individual to grow through the strength of words shared in the confines of this space.
                            Making changes in your life requires time and energy. We look forward to investing our time
                            and linking our efforts with yours to help you reach the goals you so desire.
                        </p>
                    </div>
                    <div class="contact__form">
                        <form
                            name="schedule"
                            action="/thanks"
                            method="POST"
                            netlify
                            netlify-honeypot="bot-field"
                            class="form"
                        >
                            <input type="hidden" name="form-name" value="schedule" />
                            <div class="form__group">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    class="form__input"
                                    placeholder="Full Name"
                                    required
                                />

                                <label for="name" class="form__label">Full Name</label>
                            </div>
                            <div class="form__group">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    class="form__input"
                                    placeholder="Email Address"
                                    required
                                />
                                <label for="email" class="form__label">Email Address</label>
                            </div>
                            <div class="form__group">
                                <select id="services" name="services" class="form__select">
                                    <option value="n/a" disabled>Choose Services</option>
                                    <option value="anger-management">Anger Management</option>
                                    <option value="couples-therapy">Couples Therapy</option>
                                    <option value="individual-therapy">Individual Therapy</option>
                                    <option value="support-groups">Support Groups</option>
                                    <option value="teletherapy">Teletherapy</option>
                                    <option value="workshops-presentations">Workshops &amp; Presentations</option>
                                    <option value="not-sure">Not Sure</option>
                                </select>
                                <!-- <label for="services" class="form__label">Choose Service</label> -->
                            </div>
                            <div class="form__group">
                                <button type="submit" class="btn btn-primary">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.section__contact-form {
    background-image: linear-gradient(to right, rgba($black, 0.3) 0%, rgba($black, 0.3) 100%),
        url('../assets/img/lake-hero.jpg');
    background-size: cover;
    background-position: center;

    @include respond(tab-port) {
        padding: 10rem 0;
    }
    @include respond(phone) {
        padding: 2rem 0;
    }
}
.contact {
    background: rgba($white, 0.5);
    border-radius: 3px;

    box-shadow: 0 1.5rem 4rem rgba($black, 0.2);
    display: flex;
    @include respond(small-tab) {
        flex-direction: column;
    }

    // @include respond(tab-port) {
    //   background-image: linear-gradient(
    //       to right,
    //       rgba($white, 0.9) 0%,
    //       rgba($white, 0.9) 100%
    //     ),
    //     url('../assets/img/lake-hero.jpg');
    // }

    &__form {
        flex: 40%;
        padding: 4rem;

        @include respond(phone) {
            padding: 2rem;
        }
    }
    &__info {
        &--box {
            background: rgba($primary-color, 0.8);
            padding: 4rem;
            flex: 60%;

            .heading-secondary {
                color: $accent-color;
            }
            p {
                color: $white;
            }
        }
    }
}
.form {
    .btn {
        font-size: $default-font-size;
        border: none;
    }
    &__group:not(:last-child) {
        margin-bottom: 1rem;
    }

    &__input {
        font-size: 1.5rem;
        font-family: inherit;
        padding: 1.5rem 2rem;
        border-radius: 2px;
        background-color: rgba($white, 0.5);
        border: none;
        border-bottom: 3px solid transparent;
        color: inherit;
        width: 100%;
        display: block;
        transition: all 0.3s;

        @include respond(tab-port) {
            width: 100%;
        }

        &:focus {
            outline: none;
            box-shadow: 0 1rem 2rem rgba($black, 0.1);
            border-bottom: 3px solid $primary-color;
        }
        &:focus:invalid {
            border-bottom: 3px solid $dark-tertiary;
        }
        &::-webkit-input-placeholder {
            color: $dark-grey;
        }
    }
    &__select {
        display: block;
        font-size: 16px;
        font-family: sans-serif;
        font-weight: 700;
        color: #444;
        line-height: 1.3;
        padding: 0.6em 1.4em 0.5em 0.8em;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 3rem;
        border: 1px solid #aaa;
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        border-radius: 0.5em;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
            linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
        background-repeat: no-repeat, repeat;
        background-position: right 0.7em top 50%, 0 0;
        background-size: 0.65em auto, 100%;
        &::-ms-expand {
            display: none;
        }
        &:hover {
            border-color: #888;
        }
        &:focus {
            border-color: #aaa;
            box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
            box-shadow: 0 0 0 3px -moz-mac-focusring;
            color: #222;
            outline: none;
        }
        & option {
            font-weight: normal;
        }
    }

    &__label {
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 2rem;
        margin-top: 0.7rem;
        display: block;
        transition: all 0.3s;
    }

    &__input:placeholder-shown + &__label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
    }
    &__radio-input:checked ~ &__radio-label &__radio-button::after {
        opacity: 1;
    }
}
</style>
