<template>
  <div>
    <TheHero />
    <main class="container">
      <div id="bg" />
      <section
        id="services"
        class="services offset"
      >
        <h2>
          Послуги
        </h2>

        <section class="services_blocks">
          <ul>
            <li>
              <h4>
                Брендинг
              </h4><img
                src="~/assets/img/branding.jpg"
                alt="Брендинг"
              >
            </li>
            <li>
              <h4>Графічний дизайн</h4>
              <img
                src="~/assets/img/graphic-design.jpg"
                alt="Графічний дизайн"
              >
            </li>
            <li>
              <h4>Професійний друк</h4>
              <img
                src="~/assets/img/pofessional-printing.jpg"
                alt="Професійний друк"
              >
            </li>
            <li>
              <h4>Оперативна поліграфія</h4>
              <img
                src="~/assets/img/operative-polygraphy.jpg"
                alt="Оперативна поліграфія"
              >
            </li>
            <li>
              <h4>СММ Маркетинг</h4>
              <img
                src="~/assets/img/smm-marketing.jpg"
                alt="СММ Маркетинг"
              >
            </li>
            <li>
              <h4>Зовнішня реклама</h4>
              <img
                src="~/assets/img/outdoor-advertising.jpg"
                alt="Зовнішня реклама"
              >
            </li>
            <li>
              <h4>Об’єктна фотографія</h4>
              <img
                src="~/assets/img/object-photography.jpg"
                alt="Об’єктна фотографія"
              >
            </li>
          </ul>
        </section>
      </section>

      <section
        id="works"
        class="works offset-2"
      >
        <h2>
          Наші роботи
        </h2>

        <section class="categories">
          <div class="category works-branding">
            <h3>Брендинг</h3>
          </div>
          <div class="category Works-graphic-design">
            <h3>Графічний дизайн реклами</h3>
          </div>
          <div class="category works-pofessional-printing">
            <h3>Професійний друк</h3>
          </div>
          <div class="category works-operative-polygraphy">
            <h3>Оперативна поліграфія</h3>
          </div>
          <div class="category works-smm-marketing">
            <h3>СММ Маркетинг</h3>
          </div>
          <div class="category works-outdoor-advertising">
            <h3>Зовнішня реклама</h3>
          </div>
          <div class="category works-object-photography">
            <h3>Об’єктна фотографія</h3>
          </div>
        </section>

        <div class="sub_categories">
          <div class="sub_category">
            <h4>Логотипи</h4>
          </div>
          <div class="sub_category">
            <h4>Макети</h4>
          </div>
          <div class="sub_category">
            <h4>Іконки</h4>
          </div>
          <div class="sub_category">
            <h4>Кольори</h4>
          </div>
          <div class="sub_category">
            <h4>Торговамарка</h4>
          </div>
          <div class="sub_category">
            <h4>Товари</h4>
          </div>
          <div class="sub_category">
            <h4>Бренд-Буки</h4>
          </div>
        </div>

        <div class="works_block">
          <img
            class="block"
            src="~/assets/img/we-are.jpg"
            alt="we-are"
          >
          <img
            class="block"
            src="~/assets/img/tura.jpg"
            alt="tura"
          >
          <img
            class="block"
            src="~/assets/img/nokkaido.jpg"
            alt="nokkaido"
          >
          <img
            class="block"
            src="~/assets/img/urwahn-bike.jpg"
            alt="urwahn-bike"
          >
          <img
            class="block"
            src="~/assets/img/aitchat.jpg"
            alt="aitchat"
          >
          <img
            class="block"
            src="~/assets/img/chat.jpg"
            alt="chat"
          >
          <img
            class="block"
            src="~/assets/img/bloc.jpg"
            alt="bloc"
          >
          <img
            class="block"
            src="~/assets/img/moko.jpg"
            alt="moko"
          >
          <img
            class="block"
            src="~/assets/img/symbol.jpg"
            alt="symbol"
          >
          <img
            class="block"
            src="~/assets/img/hello.jpg"
            alt="hello"
          >
          <img
            class="block"
            src="~/assets/img/cats.jpg"
            alt="cats"
          >
          <img
            class="block"
            src="~/assets/img/lidiya.jpg"
            alt="lidiya"
          >
        </div>

        <p class="show_more">
          Показати ще
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L15.0711 14.3431C15.4616 13.9526 15.4616 13.3195 15.0711 12.9289C14.6805 12.5384 14.0474 12.5384 13.6569 12.9289L8 18.5858L2.34315 12.9289C1.95262 12.5384 1.31946 12.5384 0.928932 12.9289C0.538407 13.3195 0.538407 13.9526 0.928932 14.3431L7.29289 20.7071ZM7 -4.37114e-08L7 20L9 20L9 4.37114e-08L7 -4.37114e-08Z"
              fill="#5998BB"
            />
          </svg>
        </p>
      </section>
    </main>
  </div>
</template>

<script>
import TheHero from '~/components/ThHero'
export default {
  components: {
    TheHero
  }
}
</script>
