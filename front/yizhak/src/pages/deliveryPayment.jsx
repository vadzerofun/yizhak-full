import React from 'react';
import Layout from '../components/layout/layout';
import style from './deliveryPayment.module.css';
import delivery_1 from '../images/deliveryPayment/delivery_1.png';
import delivery_2 from '../images/deliveryPayment/delivery_2.png';
import delivery_3 from '../images/deliveryPayment/delivery_3.png';
import payment_1 from '../images/deliveryPayment/payment_1.png';
import payment_2 from '../images/deliveryPayment/payment_2.png';

function DeliveryPayment() {
  return (
    <>
      <Layout>
        <div className={`deliveryPayment__container ${style.deliveryPayment}`}>
          <h4>Доставка</h4>
          <p>У нашому інтернет-магазині ми пропонуємо кілька зручних способів доставки:</p>
          <div className={style.deliveryWays}>
            <div className={style.deliveryWay}>
              <p><strong>Нова Пошта</strong> - надійна кур'єрська служба, яка працює по всій Україні. Вартість доставки та терміни можуть змінюватися в залежності від регіону.</p>
              <img src={delivery_1} alt="delivery_1" />
            </div>
            <hr className={style.deliveryWaysSeparator} />
            <div className={style.deliveryWay}>
              <p><strong>Укрпошта</strong> - національний поштовий оператор. Вартість і терміни доставки залежать від ваги та розміру замовлення.</p>
              <img src={delivery_2} alt="delivery_2" />
            </div>
            <hr className={style.deliveryWaysSeparator} />
            <div className={style.deliveryWay}>
              <p><strong>Самовивіз</strong> - ви можете самостійно забрати своє замовлення з нашого пункту видачі, який знаходиться за адресою [ваша адреса].</p>
              <img src={delivery_3} alt="delivery_3" />
            </div>
          </div>
          <p className={`${style.pJustify} ${style.pLast}`}>Зазвичай ми намагаємося відправити ваше замовлення протягом 1-2 робочих днів після отримання оплати. Терміни доставки залежать від обраного вами способу доставки та вашого регіону. Детальніше про терміни можна дізнатися в обраній вами службі доставки.</p>
          <h4>Оплата</h4>
          <p>У нашому інтернет-магазині доступні наступні способи оплати:</p>
          <div className={style.deliveryWays}>
            <div className={style.deliveryWay}>
              <p><strong>Готівкова оплата</strong> при отриманні - ви оплачуєте замовлення готівкою кур'єру під час доставки.</p>
              <img src={payment_1} alt="payment_1" />
            </div>
            <hr className={style.deliveryWaysSeparator} />
            <div className={style.deliveryWay}>
              <p><strong>Оплата онлайн</strong> - ви можете сплатити замовлення онлайн через платіжні системи або банківські карти.</p>
              <img src={payment_2} alt="payment_2" />
            </div>
          </div>
          <p className={`${style.pJustify} ${style.pLast}`}>Наш інтернет-магазин гарантує безпеку вашої оплати. Ми використовуємо шифрування та інші технології для захисту ваших платіжних даних.</p>
        </div>
      </Layout>
    </>
  );
}

export default DeliveryPayment;