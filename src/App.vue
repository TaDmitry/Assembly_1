<script setup></script>

<template>
  <header class="header">
    <section class="header__wrapper wrapper__parallax">
      <div class="wrapper__parallax-inner parallax">
        <div class="parallax__content main-wrapper">
          <h3 class="parallax__title" id="parallax__h3">
            Центр <br />
            Развития <br />
            Информатизации
          </h3>
        </div>
        <div class="parallax__images images-parallax">
          <div class="images-parallax__background"></div>
        </div>
      </div>
    </section>
  </header>

  <nav class="navigation-area">
    <section class="navigation-area__wrapper main-wrapper">
      <div class="navigation-area__logo">
        <a href="index.html" class="logo">
          <img src="../src/assets/img/logo.png" />
        </a>
        <span class="navigation-area__brand">ЦРИ</span>
      </div>
      <div class="navigation-area__menu">
        <div class="main-menu">
          <div class="main-menu__burgers" id="main-menu__burgers">
            <span></span>
          </div>
          <div class="main-menu__container" id="main-menu__container">
            <div class="main-menu__shell">
              <div>
                <div class="main-menu__button"><i class="fa-solid fa-xmark"></i></div>
                <ul class="main-menu__list">
                  <li class="main-menu__item"><a href="#news_link">Новости</a></li>
                  <li class="main-menu__item"><a href="#about-us_link">О нас</a></li>
                  <li class="main-menu__item"><a href="#structure_link">Структура</a></li>
                  <li class="main-menu__item"><a href="#vacancy_link">Вакансии</a></li>
                  <li class="main-menu__item"><a href="#footer_link">Вопросы</a></li>
                </ul>
              </div>
              <div class="main-menu__footer">
                <p>CRI.com © 2024-<samp class="current-year"></samp></p>
                <p>Все права защищены</p>
              </div>
            </div>
          </div>
        </div>
        <div class="main-menu__controls">
          <div class="main-menu__active" id="mainMenu">
            <span id="selectedLanguage">RU</span>
            <div class="main-menu__languages" id="languages">
              <a href="#" class="dropdown-item" id="ruLanguage">RU</a>
              <a href="#" class="dropdown-item" id="enLanguage">EN</a>
              <a href="#" class="dropdown-item" id="kkLanguage">KK</a>
            </div>
          </div>
          <div class="main-menu__office">
            <a href=""><i class="fa-solid fa-circle-user"></i></a>
          </div>
        </div>
      </div>
    </section>
  </nav>

  <main>
    <section class="wrapper__news content" id="news_link">
      <div class="main__content-news main-wrapper">
        <h2><span>Последние новости</span></h2>
        <ul class="news__block-item">
          <li class="news__item">
            <article class="card">
              <div class="card__image">
                <img src="../src/assets/img/maxresdefault.jpg" alt="" />
              </div>
              <div class="card__content">
                <div>
                  <h3>Новость</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cumque culpa
                    delectus iste animi aut, recusandae, molestias consequatur accusantium maiores
                    libero, explicabo velit deserunt necessitatibus porro voluptas aliquid. Quam,
                    aperiam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                    cumque culpa delectus iste animi aut, recusandae, molestias consequatur
                    accusantium maiores libero, explicabo velit deserunt necessitatibus porro
                    voluptas aliquid.
                  </p>
                </div>
                <div class="card__information">
                  <button>Подробнее ...</button>
                  <span>1/08/2023</span>
                </div>
              </div>
            </article>
          </li>

          <li class="news__item">
            <article class="card">
              <div class="card__image">
                <img src="../src/assets/img/maxresdefault.jpg" alt="" />
              </div>
              <div class="card__content">
                <div>
                  <h3>Новость</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cumque culpa
                    delectus iste animi aut, recusandae, molestias consequatur accusantium maiores
                    libero, explicabo velit deserunt necessitatibus porro voluptas aliquid. Quam,
                    aperiam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                    cumque culpa delectus iste animi aut, recusandae, molestias consequatur
                    accusantium maiores libero, explicabo velit deserunt necessitatibus porro
                    voluptas aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus cumque culpa delectus iste animi aut, recusandae, molestias
                    consequatur accusantium maiores libero, explicabo velit deserunt necessitatibus
                    porro voluptas aliquid. Quam, aperiam.Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Doloribus cumque culpa delectus iste animi aut, recusandae,
                    molestias consequatur accusantium maiores libero, explicabo velit deserunt
                    necessitatibus porro voluptas aliquid. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Doloribus cumque culpa delectus iste animi aut, recusandae,
                    molestias consequatur accusantium maiores libero, explicabo velit deserunt
                    necessitatibus porro voluptas aliquid. Quam, aperiam.Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Doloribus cumque culpa delectus iste animi aut,
                    recusandae, molestias consequatur accusantium maiores libero, explicabo velit
                    deserunt necessitatibus porro voluptas aliquid.
                  </p>
                </div>
                <div class="card__information">
                  <button>Подробнее ...</button>
                  <span>1/08/2023</span>
                </div>
              </div>
            </article>
          </li>

          <li class="news__item">
            <article class="card">
              <div class="card__image">
                <img src="../src/assets/img/maxresdefault.jpg" alt="" />
              </div>
              <div class="card__content">
                <div>
                  <h3>Новость</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cumque culpa
                    delectus iste animi aut, recusandae, molestias consequatur accusantium maiores
                    libero, explicabo velit deserunt necessitatibus porro voluptas aliquid. Quam,
                    aperiam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                    cumque culpa delectus iste animi aut, recusandae, molestias consequatur
                    accusantium maiores libero, explicabo velit deserunt necessitatibus porro
                    voluptas aliquid.
                  </p>
                </div>
                <div class="card__information">
                  <button>Подробнее ...</button>
                  <span>1/08/2023</span>
                </div>
              </div>
            </article>
          </li>

          <li class="news__item news__item-smartphone">
            <article class="card">
              <div class="card__image">
                <img src="../src/assets/img/maxresdefault.jpg" alt="" />
              </div>
              <div class="card__content">
                <div>
                  <h3>Новость</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cumque culpa
                    delectus iste animi aut, recusandae, molestias consequatur accusantium maiores
                    libero, explicabo velit deserunt necessitatibus porro voluptas aliquid. Quam,
                    aperiam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                    cumque culpa delectus iste animi aut, recusandae, molestias consequatur
                    accusantium maiores libero, explicabo velit deserunt necessitatibus porro
                    voluptas aliquid.
                  </p>
                </div>
                <div class="card__information">
                  <button>Подробнее ...</button>
                  <span>1/08/2023</span>
                </div>
              </div>
            </article>
          </li>
        </ul>
        <button class="more__news"><a href="news.html">Больше новостей</a></button>
      </div>
    </section>

    <section class="wrapper__about-us" id="about-us_link">
      <div class="main-wrapper">
        <h2><span>О-нас</span></h2>
        <div>
          <div class="works__container">
            <h3>ЦРИ-краткая информация о нас.</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters.
            </p>
            <ul>
              <li>
                All the Lorem Ipsum generators on the Internet tendto repeat predefined chunks as
                necessary.
              </li>
              <li>All the Lorem Ipsum generators on the Internet.</li>
              <li>All the Lorem Ipsum generators on the Internet tendto repeat predefined.</li>
              <li>All the Lorem Ipsum generators on the Internet.</li>
              <li>All the Lorem Ipsum generators on the Internet tendto repeat predefined.</li>
            </ul>
          </div>
          <div class="summary__container">
            <img src="../src/assets/img/work-mobile.png" class="summary__container-img" />
          </div>
        </div>
      </div>
    </section>

    <section class="structure" id="structure_link">
      <div class="structure__wrapper main-wrapper">
        <h2><span>Структура</span></h2>
        <div class="structure__wrapper-flex">
          <div class="structure__nav">
            <ul class="structure__nav-ul">
              <li
                class="structure__nav-ul-li structure__nav-ul-li-activated"
                id="structure__nav-ul-guide"
              >
                Руководство
              </li>
              <li class="structure__nav-ul-li" id="structure__nav-ul-departments">Отделы</li>
            </ul>
          </div>

          <div class="structure__content">
            <div class="structure__content-guide" id="structure__content-guide">
              <div class="structure__content-block-img">
                <img src="../src/assets/img/member-4-255x260.jpg" alt="" />
              </div>
              <div class="structure__content-block-information">
                <div class="">
                  <h3>Владимир Владимирович Владимир</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur beatae
                    odio ex quisquam cum reprehenderit nobis ea totam nam.
                  </p>
                </div>
                <div class="structure__content-block-text">
                  <div class="structure__content-block-contacts">
                    <span>Телефон:</span>
                    <a href="" class="telephone">+7-777-777-77-77</a>
                  </div>
                  <div class="structure__content-block-contacts">
                    <span>E-mail:</span>
                    <a href="mailto:xxxxx@gmail.com" class="structure__content-email"
                      >xxxxx@gmail.com</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="structure__content-departments" id="structure__content-departments">
              <div class="structure__department">
                <div class="structure__department-info">
                  <h4>Отдел № 1</h4>
                  <a href="">Подробнее<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="structure__department-details">
                  <div class="structure__manager-info">
                    <span>Руководитель отдела:</span>
                    <p>Иван Иванович Иванов</p>
                  </div>
                  <div class="structure__contact-info">
                    <span>Телефон:</span>
                    <a href="" class="telephone"><p>+7-777-777-77-77</p></a>
                  </div>
                </div>
              </div>

              <div class="structure__department">
                <div class="structure__department-info">
                  <h4>Отдел № 2</h4>
                  <a href="">Подробнее<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="structure__department-details">
                  <div class="structure__manager-info">
                    <span>Руководитель отдела:</span>
                    <p>Иван Иванович Иванов</p>
                  </div>
                  <div class="structure__contact-info">
                    <span>Телефон:</span>
                    <a href="" class="telephone"><p>+7-777-777-77-77</p></a>
                  </div>
                </div>
              </div>

              <div class="structure__department">
                <div class="structure__department-info">
                  <h4>Отдел № 3</h4>
                  <a href="">Подробнее<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="structure__department-details">
                  <div class="structure__manager-info">
                    <span>Руководитель отдела:</span>
                    <p>Иван Иванович Иванов</p>
                  </div>
                  <div class="structure__contact-info">
                    <span>Телефон:</span>
                    <a href="" class="telephone"><p>+7-777-777-77-77</p></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="vacancy" id="vacancy_link">
      <div class="vacancy__container main-wrapper">
        <div class="vacancy__header">
          <h2 class="vacancy__title"><span>Вакансии</span></h2>
        </div>
        <div class="vacancy__content">
          <div class="vacancy__best-offer">Лучшее предложение пердложения за последние время</div>
          <div class="vacancy__placeholder">
            <a href="" class="vacancy__placeholder-blog">
              <div class="vacancy__info">
                <h3>Frontend-разработчик</h3>
                <samp>200 000 - 300 000&#8376;</samp>
              </div>
              <div class="vacancy__details">
                <p>OOO CRI</p>
                <samp>Павлодар</samp>
              </div>
            </a>
            <div class="vacancy__actions">
              <div class="share-icon">
                <div
                  class="ya-share2"
                  data-curtain
                  data-size="s"
                  data-shape="round"
                  data-limit="0"
                  data-more-button-type="short"
                  data-services="messenger,vkontakte,telegram,twitter,whatsapp"
                ></div>
              </div>
              <div class="vacancy__stats">
                <i class="fa-regular fa-eye"></i>
                <samp>0</samp>
              </div>
            </div>
          </div>

          <div class="vacancy__placeholder">
            <a href="" class="vacancy__placeholder-blog">
              <div class="vacancy__info">
                <h3>Frontend-разработчик</h3>
                <samp>200 000 - 300 000&#8376;</samp>
              </div>
              <div class="vacancy__details">
                <p>OOO CRI</p>
                <samp>Павлодар</samp>
              </div>
            </a>
            <div class="vacancy__actions">
              <div class="share-icon">
                <div
                  class="ya-share2"
                  data-curtain
                  data-size="s"
                  data-shape="round"
                  data-limit="0"
                  data-more-button-type="short"
                  data-services="messenger,vkontakte,telegram,twitter,whatsapp"
                ></div>
              </div>
              <div class="vacancy__stats">
                <i class="fa-regular fa-eye"></i>
                <samp>0</samp>
              </div>
            </div>
          </div>

          <div class="vacancy__placeholder">
            <a href="" class="vacancy__placeholder-blog">
              <div class="vacancy__info">
                <h3>Frontend-разработчик</h3>
                <samp>200 000 - 300 000&#8376;</samp>
              </div>
              <div class="vacancy__details">
                <p>OOO CRI</p>
                <samp>Павлодар</samp>
              </div>
            </a>
            <div class="vacancy__actions">
              <div class="share-icon">
                <div
                  class="ya-share2"
                  data-curtain
                  data-size="s"
                  data-shape="round"
                  data-limit="0"
                  data-more-button-type="short"
                  data-services="messenger,vkontakte,telegram,twitter,whatsapp"
                ></div>
              </div>
              <div class="vacancy__stats">
                <i class="fa-regular fa-eye"></i>
                <samp>0</samp>
              </div>
            </div>
          </div>
        </div>
        <button class="vacancy__button"><a href="#">Все вакансии</a></button>
      </div>
    </section>
  </main>

  <footer class="footer" id="footer_link">
    <div class="footer__container main-wrapper">
      <div class="footer__container-shell">
        <div class="footer__container-information">
          <ul class="footer__list">
            <li><h4>Проэкты</h4></li>
            <li>Проэкт 1</li>
            <li>Проэкт 2</li>
            <li>Проэкт 3</li>
          </ul>
          <ul class="footer__list">
            <li><h4>Услуги</h4></li>
            <li>Услуга 1</li>
            <li>Услуга 2</li>
            <li>Услуга 3</li>
          </ul>
          <ul class="footer__list">
            <li><h4>Вопросы</h4></li>
            <li>Техподдержка</li>
          </ul>
        </div>

        <div style="position: relative; overflow: hidden" class="footer__container-map" id="map">
          <a
            href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
            >Яндекс Карты</a
          ><a
            href="https://yandex.ru/maps/190/pavlodar/house/Y08YfwNkQEAEQFtofX54cnVrbQ==/?ll=76.945409%2C52.293884&utm_medium=mapframe&utm_source=maps&z=18.13"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >Улица Генерала Дюсенова, 9 — Яндекс Карты</a
          ><iframe
            src="https://yandex.ru/map-widget/v1/?ll=76.945409%2C52.293884&mode=whatshere&whatshere%5Bpoint%5D=76.944932%2C52.294221&whatshere%5Bzoom%5D=17&z=18.13"
            width="560"
            height="400"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
          ></iframe>
        </div>
      </div>

      <div class="footer__links">
        <ul class="footer__links-container">
          <li>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-tiktok"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-youtube"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
          </li>
        </ul>
        <div class="footer__warning">
          <p>CRI.com © 2024-<samp class="current-year"></samp></p>
          <p>Все права защищены</p>
        </div>
      </div>
    </div>
  </footer>
</template>
