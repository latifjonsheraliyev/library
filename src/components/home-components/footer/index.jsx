import React from "react";
import "./footer.scss";
import visa from "./footer/visa.png";
import mastercard from "./footer/mastercard.png";
import footerLogo from "./footer/АУДИТЕРИЯ.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <img src={footerLogo} alt="" />

          <div className="footer-top-right">
            <div className="footer-links">
              <h5>Жанры</h5>
              <a href="">Нонфикшн</a>
              <a href="">Псиология</a>
              <a href="">Бизнес</a>
              <a href="">Финансы</a>
              <a href="">Все жанры</a>
            </div>

            <div className="footer-links">
              <h5>Категории</h5>
              <a href=""> Популярное</a>
              <a href="">Новинки</a>
              <a href="">Выбор редакции</a>
            </div>

            <div className="footer-links">
              <h5>Разделы</h5>
              <a href=""> Как купить</a>
              <a href="">Часто задаваемые вопросы</a>
              <a href="">Сотрудничество</a>
              <a href="">Контакты</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2022, «Аудитерия». Все права защищены.</p>
            <p> Политика конфиденциальности </p>
            <p> Лицензионное соглашение </p>
          </div>
          <div className="footer-bottom-right">
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
