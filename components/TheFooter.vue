<i18n>
{
  "uk": {
    "title": "Наші контакти",
    "address": "Адреса",
    "phone": "Телефон",
    "location": "м. Тернопіль, вул. Тарнавського, 36"
  },
  "ru": {
    "title": "Наши контакты",
    "address": "Адрес",
    "phone": "Телефон",
    "location": "Г. Тернополь, ул. Тарнавського, 36"
  }
}
</i18n>

<template>
  <footer>
    <section id="contact" class="container footer_container">
      <img
        loading="lazy"
        src="~/assets/img/spikes-left.png"
        alt=""
        class="before"
      />
      <div class="contacts">
        <h3>
          {{ $t('title') }}
        </h3>
        <div></div>
        <a
          href="https://www.google.com/maps/place/Henerala+Myrona+Tarnavs'koho+St,+36,+Ternopil,+Ternopil's'ka+oblast,+46024/@49.566604,25.6356834,17z/data=!3m1!4b1!4m5!3m4!1s0x473033dfc7ec2fb5:0x5eb16a8fb79c4e7e!8m2!3d49.566604!4d25.6378721"
          target="_blank"
          class="contact_detail"
        >
          <div class="contact_items_header">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.50001 0C4.74306 0 2.5 2.24306 2.5 5.00001C2.5 5.82765 2.70692 6.64825 3.10029 7.3761L7.22658 14.8389C7.28151 14.9384 7.38619 15 7.50001 15C7.61383 15 7.71851 14.9384 7.77344 14.8389L11.9012 7.37364C12.2931 6.64825 12.5 5.82762 12.5 4.99998C12.5 2.24306 10.257 0 7.50001 0ZM7.50001 7.5C6.12153 7.5 5.00002 6.37849 5.00002 5.00001C5.00002 3.62153 6.12153 2.50002 7.50001 2.50002C8.87849 2.50002 10 3.62153 10 5.00001C10 6.37849 8.87849 7.5 7.50001 7.5Z"
                fill="white"
              />
            </svg>
            <h5>
              {{ $t('address') }}
            </h5>
          </div>
          <div class="contact_items_body">
            <p>
              {{ $t('location') }}
            </p>
          </div>
        </a>

        <a href="mailto:office@oldorcs.com" class="contact_item">
          <div class="contact_items_header">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M13.6607 13.3928C13.9978 13.3928 14.29 13.2814 14.5384 13.0616L10.2886 8.81169C10.1867 8.8847 10.0878 8.9557 9.99448 9.02321C9.67645 9.25753 9.41833 9.44037 9.22012 9.57139C9.02195 9.70271 8.75827 9.83656 8.42913 9.97322C8.09977 10.11 7.79293 10.1782 7.50829 10.1782H7.49996H7.49162C7.20695 10.1782 6.90011 10.1101 6.57078 9.97322C6.24145 9.83656 5.97777 9.70271 5.77979 9.57139C5.58161 9.44037 5.32363 9.25756 5.00543 9.02321C4.91676 8.95821 4.81842 8.88688 4.7121 8.81055L0.461548 13.0616C0.709889 13.2814 1.00224 13.3928 1.33939 13.3928H13.6607Z"
                  fill="white"
                />
                <path
                  d="M0.845514 6.13556C0.52751 5.92354 0.245509 5.68073 0 5.40723V11.8731L3.7457 8.1274C2.99635 7.60425 2.03085 6.94106 0.845514 6.13556Z"
                  fill="white"
                />
                <path
                  d="M14.1628 6.13556C13.0227 6.90724 12.0536 7.57157 11.2556 8.1289L14.9998 11.8733V5.40723C14.7598 5.67523 14.4808 5.91788 14.1628 6.13556Z"
                  fill="white"
                />
                <path
                  d="M13.6608 1.60693H1.33957C0.909715 1.60693 0.579239 1.75209 0.347728 2.0421C0.116026 2.33224 0.000366211 2.6951 0.000366211 3.13026C0.000366211 3.48176 0.153853 3.86262 0.460692 4.27294C0.76753 4.68311 1.09403 5.00528 1.44003 5.23962C1.62971 5.37363 2.20172 5.7713 3.15606 6.43247C3.67123 6.78947 4.11925 7.10064 4.50425 7.36916C4.83241 7.59781 5.11542 7.79582 5.34908 7.96015C5.37591 7.97897 5.41809 8.00914 5.47408 8.04918C5.5344 8.0925 5.61074 8.14749 5.70491 8.21549C5.88626 8.34665 6.03691 8.45266 6.1569 8.53366C6.27673 8.61468 6.42191 8.70517 6.59223 8.80566C6.76241 8.90602 6.92292 8.98148 7.07358 9.03167C7.22426 9.08184 7.36375 9.107 7.49207 9.107H7.50041H7.50874C7.63704 9.107 7.77655 9.08184 7.92726 9.03167C8.07789 8.98148 8.23827 8.90618 8.40859 8.80566C8.57874 8.70517 8.72373 8.61449 8.84394 8.53366C8.96393 8.45266 9.11458 8.34667 9.29596 8.21549C9.38994 8.14749 9.46627 8.09248 9.5266 8.04931C9.58262 8.00912 9.62477 7.97913 9.65176 7.96015C9.83379 7.83349 10.1175 7.63629 10.4988 7.37147C11.1928 6.88931 12.2148 6.17963 13.5692 5.23962C13.9765 4.95511 14.3168 4.61178 14.5903 4.21012C14.8633 3.80845 15.0002 3.38712 15.0002 2.94627C15.0002 2.57794 14.8675 2.26277 14.6027 2.00027C14.3375 1.73809 14.0235 1.60693 13.6608 1.60693Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h5>
              E-mail
            </h5>
          </div>
          <div class="contact_items_body">
            <p>
              office@oldorcs.com
            </p>
          </div>
        </a>

        <a href="tel:+38-097-207-30-30" class="contact_item">
          <div class="contact_items_header">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1667 10.4167C13.1292 10.4167 12.125 10.25 11.1917 9.94168C10.9042 9.85 10.575 9.91668 10.3459 10.1459L8.51254 11.9834C6.15004 10.7834 4.22086 8.85418 3.02086 6.49586L4.85418 4.65418C5.08336 4.425 5.15 4.09586 5.05836 3.80836C4.75004 2.87504 4.58336 1.87086 4.58336 0.833359C4.58332 0.37082 4.2125 0 3.75 0H0.83332C0.375 0 0 0.37082 0 0.83332C0 8.65832 6.34168 15 14.1667 15C14.6292 15 15 14.6292 15 14.1667V11.25C15 10.7875 14.6292 10.4167 14.1667 10.4167Z"
                fill="white"
              />
            </svg>

            <h5>
              {{ $t('phone') }}
            </h5>
          </div>
          <div class="contact_items_body">
            <p>
              +38 097 207 30 30
            </p>
          </div>
        </a>

        <a
          href="viber://contact?number=tel:+380972073030"
          target="_blank"
          class="contact_item"
        >
          <div class="contact_items_header">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip00)">
                <path
                  d="M5.88561 9.48789L5.63749 12.9779C5.99249 12.9779 6.14624 12.8254 6.33061 12.6423L7.99499 11.0516L11.4437 13.5773C12.0762 13.9298 12.5219 13.7441 12.6925 12.9954L14.9562 2.38789L14.9569 2.38727C15.1575 1.45227 14.6187 1.08664 14.0025 1.31602L0.696239 6.41039C-0.211886 6.76289 -0.198136 7.26914 0.541864 7.49852L3.94374 8.55664L11.8456 3.61227C12.2175 3.36602 12.5556 3.50227 12.2775 3.74852L5.88561 9.48789Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h5>
              Telegram | Viber
            </h5>
          </div>
          <div class="contact_items_body">
            <p>
              +38 097 207 30 30
            </p>
          </div>
        </a>
      </div>
      <a
        href="https://www.instagram.com/oldorcs/"
        target="_blank"
        rel="noopener noreferrer"
        class="mx-auto text-center"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5524 0H7.44764C3.34099 0 0 3.34099 0 7.44764V17.5524C0 21.659 3.34099 25 7.44764 25H17.5524C21.659 25 25 21.659 25 17.5524V7.44764C25 3.34099 21.659 0 17.5524 0ZM22.485 17.5524C22.485 20.2766 20.2766 22.485 17.5524 22.485H7.44764C4.72344 22.485 2.515 20.2766 2.515 17.5524V7.44764C2.515 4.72339 4.72344 2.515 7.44764 2.515H17.5524C20.2766 2.515 22.485 4.72339 22.485 7.44764V17.5524ZM12.5 6.0341C8.93471 6.0341 6.03412 8.9347 6.03412 12.4999C6.03412 16.0652 8.93471 18.9658 12.5 18.9658C16.0653 18.9658 18.9659 16.0652 18.9659 12.4999C18.9659 8.93465 16.0653 6.0341 12.5 6.0341ZM12.5 16.4509C10.318 16.4509 8.54912 14.682 8.54912 12.5C8.54912 10.318 10.318 8.5491 12.5 8.5491C14.682 8.5491 16.4509 10.318 16.4509 12.5C16.4509 14.682 14.682 16.4509 12.5 16.4509ZM20.5279 6.08261C20.5279 6.9383 19.8342 7.63197 18.9785 7.63197C18.1228 7.63197 17.4291 6.9383 17.4291 6.08261C17.4291 5.22692 18.1228 4.53325 18.9785 4.53325C19.8342 4.53325 20.5279 5.22692 20.5279 6.08261Z"
            fill="white"
          />
        </svg>
        @oldorcs
      </a>
      <img
        loading="lazy"
        src="~/assets/img/spikes-right.png"
        alt=""
        class="after"
      />
    </section>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100vw;
  height: auto;
  position: relative;
  background-color: #0084a1;
  margin-bottom: 0;
  bottom: 0;
}

a {
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;

  svg {
    width: 25px;
    height: 25px;

    @media screen and (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 16px;
  }
}

footer .container {
  position: relative;
  bottom: 0;
  margin-bottom: 0;
  padding: 70px 15%;

  text-align: center;

  img.before,
  img.after {
    position: absolute;
    padding: 0;
    height: auto;
    bottom: 0;
    &.before {
      left: 0;
    }
    &.after {
      right: 0;
    }
    @media screen and (max-width: 480px) {
      height: 120px;
    }
  }

  h3 {
    text-align: left;

    color: #ffffff;

    margin-bottom: 50px;

    @media screen and (max-width: 1200px) {
      margin-bottom: 25px;
    }

    @media screen and (max-width: 600px) {
      margin-bottom: 12.5px;
    }

    @media screen and (max-width: 390px) {
      text-align: center;
    }
  }

  .contacts {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    grid-gap: 50px 150px;
    padding: 0px;
    margin: auto;

    @media screen and (max-width: 1200px) {
      grid-gap: 25px 100px;
    }

    @media screen and (max-width: 600px) {
      grid-gap: 12.5px 50px;
    }

    @media screen and (max-width: 425px) {
      grid-gap: 12.5px 25px;
      grid-template-columns: auto;
      text-align: center;
    }
  }

  .contact_items_header {
    display: flex;
    margin-bottom: 10px;
  }

  .contact_items_header svg {
    height: 15px;

    @media screen and (max-width: 390px) {
      margin-left: auto;
    }
  }

  .contact_items_header h5 {
    color: #ffffff;

    margin-left: 10px;

    @media screen and (max-width: 390px) {
      margin-right: auto;
    }
  }

  .contact_items_body p {
    color: #ffffff;
    text-align: left;

    margin-left: 25px;
  }
}
</style>
