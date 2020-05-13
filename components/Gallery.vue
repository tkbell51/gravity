<template>
  <div class="gallery">
    <figure class="gallery__item gallery__item--3">
      <img
        src="../assets/img/gallery/gallery-3.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--4">
      <img
        src="../assets/img/gallery/gallery-4.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--17">
      <img
        src="../assets/img/gallery/gallery-17.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>

    <figure class="gallery__item gallery__item--5">
      <img
        src="../assets/img/gallery/gallery-5.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--15">
      <img
        src="../assets/img/gallery/gallery-15.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--18">
      <img
        src="../assets/img/gallery/gallery-18.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--7">
      <img
        src="../assets/img/gallery/gallery-7.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--6">
      <img
        src="../assets/img/gallery/gallery-6.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>

    <figure class="gallery__item gallery__item--8">
      <img
        src="../assets/img/gallery/gallery-8.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--2">
      <img
        src="../assets/img/gallery/gallery-2.png"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--11">
      <img
        src="../assets/img/gallery/gallery-11.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--10">
      <img
        src="../assets/img/gallery/gallery-10.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--9">
      <img
        src="../assets/img/gallery/gallery-9.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--1">
      <img
        src="../assets/img/gallery/gallery-1.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--12">
      <img
        src="../assets/img/gallery/gallery-12.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--13">
      <img
        src="../assets/img/gallery/gallery-13.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--14">
      <img
        src="../assets/img/gallery/gallery-14.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>

    <figure class="gallery__item gallery__item--16">
      <img
        src="../assets/img/gallery/gallery-16.jpg"
        alt=""
        class="gallery__img"
      />
    </figure>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-gap: 1rem;
  @include respond(phone) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__item {
    transition: all 0.2s ease-in;
    // &:hover {
    //   transform: scale(1.5);
    // }
    &--1 {
      grid-column: span 2;
      grid-row: span 2;
      @include respond(phone) {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
    &--2 {
      grid-column: span 2;
      grid-row: span 2;
      @include respond(phone) {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
    // &--3 {
    //   grid-column: 1/3;
    //   grid-row: 7/9;
    // }
    // &--4 {
    //   grid-column: 7/9;
    //   grid-row: 1/3;
    // }
    // &--5 {
    //   grid-column: 3/5;
    //   grid-row: 5/7;

    // }
    // &--6 {
    //   grid-column: 7/9;
    //   grid-row: 7/9;
    // }

    // &--7 {
    //   grid-column: 5/7;
    //   grid-row: 1/3;
    // }

    // &--8 {
    //   grid-column: 5/7;
    //   grid-row: 5/7;
    // }
    // &--9 {
    //   grid-column: 3/5;
    //   grid-row: 9/11;
    // }
    // &--10 {
    //   grid-column: 3/5;
    //   grid-row: 7/9;
    // }
    // &--11 {
    //   grid-column: 1/3;
    //   grid-row: 1/3;
    // }
    // &--12 {
    //   grid-column: 1/3;
    //   grid-row: 3/5;
    // }
    // &--13 {
    //   grid-column: 5/7;
    //   grid-row: 7/9;
    // }

    // &--14 {
    //   grid-column: 7/9;
    //   grid-row: 5/7;
    // }
    // &--15 {
    //   grid-column: 5/7;
    //   grid-row: 9/11;
    // }
    // &--16 {
    //   grid-column: 1/3;
    //   grid-row: 9/11;
    // }
    &--17 {
      grid-column: span 2;
      grid-row: span 2;
      @include respond(phone) {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
    &--18 {
      grid-column: span 2;
    }
  }
}
</style>
