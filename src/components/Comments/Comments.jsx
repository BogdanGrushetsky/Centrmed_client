import React from 'react'

import CommentsSvg from './../../icons/Comments.svg'
import Comment from './Comment/Comment';
import './comments.css';

function Comments() {
  return (
    <section className='comments_bg'>
      <div className="comments">
        <img className="comments_img" src={CommentsSvg} alt="Comments icon" />
        <div className="comments_title">Коментарі наших пацієнтів</div>
        <div className="comments_box">
          <div className='comments_wrapper'>
            <Comment
              name={'Анастасія'}
              desc={'Дякую цьому сервісу онлайн консультації за допомогу. Я отримала відповіді на всі свої запитання та відчула себе набагато спокійніше після розмови з лікарем. Це дійсно допомогло мені вирішити мої проблеми зі здоровям.'}
              sub={'Дніпро, Україна'} />
            <Comment sub={'Київ, Україна'} name={'Станіслав'} desc={'Цей сервіс онлайн консультації - просто дивовижний! Я був здивований, наскільки легко було звязатися з лікарем та отримати консультацію. Це дійсно зручно та швидко.'} />
            <Comment sub={'Київ, Україна'} desc={`Я дуже задоволений сервісом онлайн консультації. Лікар був дуже професійним та знаючим. Він зміг допомогти мені з моїм захворюванням та дав мені вичерпні відповіді на всі мої запитання. CentrMed супер!`} name={'Василина Ігорівна'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comments