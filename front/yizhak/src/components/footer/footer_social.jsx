import React from 'react';
import style from './footer.module.css'; 
import iconEmail from '../../images/footer/email.svg';
import iconPhone from '../../images/footer/phone.svg';
import iconFacebook from '../../images/footer/facebook.svg';
import iconInstagram from '../../images/footer/instagram.svg';
import iconYoutube from '../../images/footer/youtube.svg';

function FooterSocial() {
  return (
    <>
      <div className={style.footerSocial}>
        <div className={style.footerSocialText}>
          Контакти:
          <div className={style.footerSocialTextItem}>
            <img src={iconEmail} alt="email" />email@email.com
          </div>
          <div className={style.footerSocialTextItem}>
            <img src={iconPhone} alt="phone" />+380987654321
          </div>
        </div>
        <div className={style.footerSocialIcons}>
          Ми в соц. мережах:
          <div className={style.footerSocialIconsItems}>
            <img src={iconFacebook} alt="facebook" />
            <img src={iconInstagram} alt="instagram" />
            <img src={iconYoutube} alt="youtube" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSocial;