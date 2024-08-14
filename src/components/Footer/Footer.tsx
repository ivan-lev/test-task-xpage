import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Еще больше полезных материалов и видеоуроков в нашем приложении
      </h3>
      <div className="footer__app-links">
        <a className="footer__app-link" href="#">
          <img
            className="footer__app-link-img"
            src="/public/icons/download-appstore.svg"
            alt="Ссылка на приложение в iOS"
          ></img>
        </a>
        <a className="footer__app-link" href="#">
          <img
            className="footer__app-link-img"
            src="/public/icons/download-google-play.svg"
            alt="Ссылка на приложение в Google Play"
          ></img>
        </a>
      </div>
      <div className="footer__qr">
        <img
          className="footer__qr-img"
          src="/public/icons/qr.svg"
          alt="Qr-код для скачивания приложения"
        />
        <div className="footer__qr-text">
          <span className="footer__qr-text-element">iOS / Android</span>
          <span className="footer__qr-text-element">
            Наведите камеру устройства на QR-код, чтобы скачать
          </span>
        </div>
      </div>
      <span className="footer__copyright">сделано в xpage</span>
    </footer>
  );
}
