
import Swiper, { Pagination} from 'swiper';

export function reviewsSwiper() {

  const catalogSwiper = new Swiper('.reviews__swiper', {
    modules: [Pagination],
    speed: 1000,

    pagination: {
      el: '.reviews__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
        grid: {
          rows: 3,
          fill: 'row',
        },
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,

      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,

      },
    },

  });
}