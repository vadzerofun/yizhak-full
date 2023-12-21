import React from 'react';
import Layout from '../components/layout/layout';
import style from './contact.module.css';
import InputText from '../elements/inputText';
import FormButton from '../elements/formButton';
import FormTextarea from '../elements/formTextarea';
import iconEmail from '../images/footer/email.svg'
import iconPhone from '../images/footer/phone.svg';

function Contact() {
  return (
    <>
      <Layout>
        <div className={`contact__container ${style.contactBody}`}>
          <div className={style.contactContent}>
            <div className={style.contactContentMain}>
              <h1><span style={{color: '#C4D7B2'}}>Зв'яжіться</span> з нами</h1>
              <p>Дізнайтеся, як ми можемо вам допомогти. Ваші запити і питання важливі для нас.</p>
              <form className={style.contactForm}>
                <InputText placeholder="Ім'я" />
                <InputText placeholder="Адреса електронної скриньки" />
                <InputText placeholder="Номер телефону" />
                <FormTextarea placeholder="Повідомлення" />
                <FormButton>Надіслати</FormButton>
              </form>
              <div className={style.contactContentMainInfo}>
                <div className={style.contactIconBox}>
                  <img src={iconEmail} alt="email" />
                  <div className={style.contactIconBoxText}>
                    Електронна пошта:<br/>
                    <span className={style.greenText}>email@email.com</span>
                  </div>
                </div>
                <div className={style.contactIconBox}>
                  <img src={iconPhone} alt="phone" />
                  <div className={style.contactIconBoxText}>
                    Номер телефону:<br/>
                    <span className={style.greenText}>+380987654321</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.contactContentMap}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d458.7564213267732!2d26.98272135609205!3d49.425579113250876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sde!4v1698671657176!5m2!1suk!2sde" width={500} height={700} style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contact;