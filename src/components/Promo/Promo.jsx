import React from 'react'
import Doctors from '../Doctors/Doctors';
import { Button } from '../Button/Button'
import './promo.css';
import { ReactComponent as MyLogo } from '../../images/bigLogo.svg';

function Promo() {
    return (
        <>
            <section className='promo bg_1'>
                <MyLogo className='promo__bigLogo' />
                <div className="promo_about">
                    <div className="promo_about_title">Ласкаво просимо до нашої служби онлайн-консультацій з лікарями!</div>
                    <div className="promo_about_subtitle">Ми розуміємо, що ваше здоров'я є вашим головним пріоритетом, тому ми зобов'язані забезпечити вам найкращий досвід онлайн-консультацій.</div>
                    <div className="promo__buttonWrapper">
                        <Button>Вибрати лікаря</Button>
                    </div>
                </div>
            </section>
            <section className='promo_info'>
                Наша команда ліцензованих лікарів готова допомогти вам з різними медичними питаннями, від дрібних захворювань до хронічних станів.
            </section>
            <section className='promo bg_2'>
                <div className="promo_instruction">
                    <div className="promo_instruction_title">Ось як працює наша служба:</div>
                    <div className="promo_instruction_title_text">1.Виберіть лікаря </div>
                    <div className="promo_about_text">Перегляньте наш список кваліфікованих лікарів та виберіть того, який найбільше підходить вашим потребам. Ви можете прочитати їх профілі, перевірити їх спеціалізації та побачити їх доступність.</div>
                    <div className="promo_instruction_title_text">2. Запишіться на консультацію</div>
                    <div className="promo_about_text">Після вибору лікаря оберіть зручний для вас час та запишіться на консультацію. Наша система бронювання є простою у використанні та дозволяє вам обрати зручний час, який підходить для вашого розкладу.</div>
                    <div className="promo_instruction_title_text">3. Консультуйтеся з лікарем</div>
                    <div className="promo_about_text">У час вашої зустрічі увійдіть до нашої безпечної онлайн-платформи для консультацій та почніть свою віртуальну консультацію. Наші лікарі вислухають ваші проблеми, задають запитання та надають вам найкращі медичні поради.</div>
                </div>
            </section>
            <section className='promo_info'>
                <span>
                    Наша служба онлайн-консультацій є безпечною, надійною та зручною.
                </span>
                <span>
                    Ви можете отримати доступ до неї з будь-якого місця, у будь-який час та з будь-якого пристрою
                </span>
            </section>
            <section className='promo bg_3'>
                <div className="promo_center">
                    Рекомендуємо лікарів для онлайн консультацій
                </div>
                <Doctors></Doctors>
            </section>
        </>
    )
}

export default Promo