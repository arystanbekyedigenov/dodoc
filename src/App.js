import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';

const doctors = [
  {name: 'Парманов Айдар Толегенович', specification: ['Флеболог','Сосудистый хирург (Ангиохирург)'], adress: 'г. Нур-Султан (Астана), Байтурсынова 1 (Tulip Medicine) и Республика 55 (Дом здоровья)', description: 'Проводимые процедуры:Лечение варикозной болезни нижних и верхних конечностей, тромбфлебиты, тромбозы глубоких вен, венозные трофические язвы.', skill:'22 года',price:'6 000'},
  {name: 'Бакытжанулы Абай', specification: ['Аритмолог'], adress: 'г. Нур-Султан (Астана), пр.Туран 38; Букар жырау 36Б', description: 'Врач аритмолог График и часы приема Пн-Пт: 09,00ч-20,00ч. Сб: 10,00ч-20,00ч. Вс: выходной. Онлайн консультации Пн-Вс: 10,00ч-20,00ч 15:00-20:00 Занимаюсь интервенционным методом', skill:'10 лет',price:'8 000'},
  {name: 'Аимбетова Бахыт Жексеновна', specification: ['Акушер','Гинеколог','Акушер-гинеколог'], adress: 'г. Нур-Султан (Астана), Байконурский район, ул.Ахмета Жубанова 24', description: 'Врач акушер-гинеколог высшей квалификационной бессрочной категории, отличник здравоохранения, клиницист, практик, врач организатор.', skill:'34 года',price:'15 000'},
  {name: 'Құрманәлі Бекболат Тұрғынұлы', specification: ['Терапевт'], adress: 'г. Нур-Султан (Астана), Байконурский район, ул.Ахмета Жубанова 24', description: 'График и часы приема: 09:00 – 18:00 ч. Врач-терапевт высшей категории. Образование: Семипалатинский Государственный Медицинский Институт (1987 – 1994г.г.) леч. факультет', skill:'28 лет',price:'7 000'},
  {name: 'Сабденова Дариха Егембердиевна', specification: ['Гинеколог'], adress: 'г. Нур-Султан (Астана), Байконурский район, ул.Ахмета Жубанова 24', description: 'График и часы приема: 09:00-17:00 Гинеколог, специалист УЗ-диагностики, гирудотерапевт, Anti-Age врач акушер-гинеколог. Образование: 1996 г. Семипалатинский Государственный медицинский', skill:'26 лет',price:'10 000'},
  {name: 'Сабденов Нурболат Оспанович', specification: ['Хирург','Онколог','Проктолог','Онкопроктолог','Проктолог-хирург'], adress: 'г. Нур-Султан (Астана), Байконурский район, ул. Ахмета Жубанова 24', description: 'Кандидат медицинских наук, врач-хирург, детский хирург, онколог, проктолог, детский проктолог, член Российской ассоциации колопроктологов. График и часы приема: 9:00-17:00', skill:'27 лет',price:'7 000'},
  {name: 'Кисаменова Сандугаш Махмутовна', specification: ['Акушер-гинеколог'], adress: 'г. Нур-Султан (Астана), Алихан Бокейхана, 11 (Alan clinic)', description: 'ЦЕНА ПРИЕМА Первичный - 6000 тг. Повторный - 4000 тг. График и часы приема Пн-Сб с 9.00-16.00 ПРОФЕССИОНАЛЬНЫЕ НАВЫКИ • Патология шейки матки: диагностика', skill:'32 года',price:'6 000'},
  {name: 'Байжаханова Динара Багдатовна', specification: ['УЗИ-специалист',''], adress: 'г. Нур-Султан (Астана), ул.Бокейхана, 11. (Alan clinic)', description: 'Образование 1) 2003-2010 гг - АО «МУА» факультет – лечебное дело. 2) 2010-2011 гг - АО «МУА» - Интернатура по специальности: терапия. 3) Март-июнь 2012 гг. - Первичная специализация в АО «МУА»', skill:'11 лет',price:'6 000'},

];

const clinics = [
  {name: 'Медицинский центр Ultraline', workingHours: 'каждый день 8:00-20:00', services: ['Check-up обследование','Андрология','Гастроэнтерология']},
  {name: 'Медицинский Диагностический Центр (Филиал РДЦ №3)', workingHours: 'Понедельник-пятница 8.00-18.00, Суббота 8.00-16.00, Воскресенье - выходной день', services:['Гастроэнтерология','Гинекология','Консультации','Косметология']},
  {name: 'Международный Центр Здоровья “Abylai Clinic”', workingHours: 'Пн-Пт 09:00 – 20:00, Сб 10:00 – 20:00, Вс- выходной', services: ['Check-up обследование','Андрология','Гастроэнтерология']},
  {name: 'Alan Clinic', workingHours: 'Пн-Сб: 08:00-19:00', services: ['Check-up обследование','Андрология','Гастроэнтерология']},
  {name: 'Medical Sabden Clinic', workingHours: '09:00-17:00', services: ['Check-up обследование','Андрология','Гастроэнтерология']},
  {name: 'БиоДент, медицинский центр', workingHours: 'Пн - Сб 09:00 - 21:00', services: ['Check-up обследование','Андрология','Гастроэнтерология']},
];

const specialists = ['Акушер','Акушер-гинеколог','Аллерголог','Ангиохирург','Андролог','Аритмолог','Венеролог','Гастроэнтеролог','Гематолог'];

const servicesList = ['Check-up обследование','Андрология','Гастроэнтерология','Гинекология','Консультации','Косметология'];
 
function App() {

  return (
    <>
    <Router>

      <Header />

      <Routes>
        <Route path='/' element={<MainPage clinics={clinics} specialists={specialists} servicesList={servicesList}/>} />
        <Route path='/searchPage/:keyword' element={<SearchPage clinics={clinics} specialists={specialists} doctors={doctors}/>} />
      </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;
