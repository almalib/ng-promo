import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  public promoMenuItems = [
    { id: "#hello", item: "Привет" },
    { id: "#resume", item: "Резюме" },
    { id: "#portfolio", item: "Портфолио" },
    { id: "#contact", item: "Контакты" },
  ];

  public introBlock = {
    img:
      "https://sun9-72.userapi.com/w9Wxx0G6QFsHlmXkUqLcipouhKmKzAgbsqFTRQ/ieIep7fDS_c.jpg",
    name: "Адам Абдулаев_",
    speciality: "front-end разработчик",
    age: "28",
    phone: "8 (963) 705-19-92",
    mail: "almalib@bk.ru",
    address: "Чеченская Республика, Грозный",
  };

  public helloBlockDescription =
    "Я начинающий веб-разработчик, с опытом создания веб-приложений с нуля. Умею писать хорошо разработанный, тестируемый и эффективный код, используя лучшие практики в веб-разработке. Быстро учусь, люблю решать сложные задачи и работать в команде. Отвественно подхожу к принятым обязательствам.";

  public resume = {
    skillsBlock: [
      { technology: "html5", percent: "80%" },
      { technology: "css3", percent: "70%" },
      { technology: "java script", percent: "50%" },
      { technology: "angular", percent: "40%" },
      { technology: "react", percent: "40%" },
      { technology: "stencil js", percent: "50%" },
      { technology: "git", percent: "50%" },
      { technology: "adobe photoshop", percent: "60%" },
    ],
    employmentBlock: [
      {
        job: 'Информационное агентство "Грозный-информ"',
        speciality: "Корреспондент",
        date: "2012 - 2014",
      },
      {
        job:
          "Информационно-аналитическое управление Главы и Правительства Чеченской Республики",
        speciality: "Ведущий специалист-эксперт",
        date: "2014 - 2018",
      },
      {
        job: "Федерация профсоюзов Чеченской Республики",
        speciality: "Заместитель руководителя информационно-аналитического центра",
        date: "2018 - 2019",
      },
      {
        job: "Фриланс",
        speciality: "HTML-верстальщик",
        date: "2018 - 2020",
      },
      {
        job: "IT-протсранство Кодология",
        speciality: "Преподаватель, контент-менеджер",
        date: "2018 - н.в.",
      },
      {
        job: "Федерация профсоюзов Чеченской Республики",
        speciality:
          "Пресс-секретарь Председателя Федерации профсоюзов Чеченской Республики",
        date: "2019 - 2020",
      },
    ],
    educationBlock: [
      {
        institution: "Чеченский Государственный Университет",
        date: "2009 - 2014",
        speciality: "Журналистика",
      },
      {
        institution: "Чеченский государственный педагогический университ",
        date: "2015",
        speciality:
          "Информационно-аналитическое управление на государственной службе",
      },
      {
        institution: "Курсы программирования Intocode",
        date: "2020",
        speciality: "Веб-разработка",
      }
    ],
    resumeBlockDescription: "Сертификат окончания курсов программирования. Английский на уровне Intermediate. Опыт коммерческой веб-разработки. Подготовка спичей, написание новостных и аналитических статей, постов для социальных сетей."
  }

  public portfolio = {
    portfolioCategory: [
      { id: "all", item: "Все" },
      { id: "web-app", item: "Веб-приложения" },
      { id: "web-site", item: "Веб-сайты" },
      { id: "landing", item: "Лендинги" },
    ],
    portfolioCardsItems: [
      {
        img:
          "https://s8.hostingkartinok.com/uploads/images/2020/08/682bbdddead9bc17e915a7a7e7fb35ed.png",
        title: "Новостной блог",
        description: "Моя первая работа с использованием Stencil JS.",
        link: "https://almalib.github.io/angular-app/",
        category: "web-app",
        stackList: [
          "html5",
          "css3",
          "java script",
          "angular",
          "stencil js",
          "git",
        ],
      },
      {
        img:
          "https://s8.hostingkartinok.com/uploads/images/2020/08/9bf7ddf29b3cb1ad538a9a582f21484d.png",
        title: "Десктоп чат",
        description:
          "Веб-приложение с возможностью отправки сообщений, фильтрами категорий, диалогов и личных сообщений. Первый опыт работы в команде",
        link: "https://almalib.github.io/ng-chat/",
        category: "web-app",
        stackList: [
          "html5",
          "css3",
          "java script",
          "angular",
          "stencil js",
          "git",
        ],
      },
      {
        img:
          "https://s8.hostingkartinok.com/uploads/images/2020/08/2bbbee435bcb57260720608652c67910.png ",
        title: "Сайт на CMS WordPress",
        description: "Медицинский справочник с фильтрацией категорий по алфавиту",
        link: "http://medikmira.ru/",
        category: "web-site",
        stackList: ["html5", "css3", "java script", "wordpress"],
      },
      {
        img:
          "https://s8.hostingkartinok.com/uploads/images/2020/08/b71330e448d501ecf8d99570a7562dc6.png",
        title: "Лендинг на CMS Tilda Publishing",
        description: "Сайт-визитка для IT-пространства Кодология",
        link: "http://codologia95.tilda.ws/",
        category: "landing",
        stackList: ["tilda"],
      },
    ],
  };

   public footerBlock = {
    img: "https://s8.hostingkartinok.com/uploads/images/2020/08/fa750b69b2a621efa71f8dfc36f3db46.jpg",
    phone: "8 (963) 705-19-92",
    mail: "almalib@bk.ru",
    skype: "almalib",
  };


  constructor() { }
}
