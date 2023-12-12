import './Footer.scss';

const lines = [
    {
        title: 'Каталог',
        more: ['Виски', 'Коньяк', 'Шампанское', 'Вино', 'Макаллан', 'Хеннеси', 'Чивас ригал', 'Моет шандон', 'Джонни Уокер', 'Лучший алкоголь', 'Подарочные сертификаты']
    },
    {
        title: 'Информация',
        more: ['О магазинах', 'Условия работы', 'Скидки', 'Дегустации', 'Гарантии', 'Отзывы', 'О компании', 'Корпоративным клиентам', 'Статьи', 'Вакансии', 'Контакты', 'Карта сайта', 'Отзывы на алкоголь']
    },
    {
        title: 'Способ оплаты',
        more: ['Наличные', 'Банковская карта', 'Юредическое лицо']
    },
];


function Footer() {

    return(
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="line">
                        <div className="logo">
                            <p className='zero'>Гогантер</p>
                            <p className='one'>винный магазин</p>
                        </div>
                        <div className="telegram">+7 (495) 662-58-95 <img src="/assets/icons/telegram.svg" /></div>
                    </div>
                    {lines.map((item, index) => {
                        return (
                            <div key={index} className="line">
                                <h1>{item.title}</h1>
                                {item.more.map((ytem, yndex) => {
                                    return <h1 key={yndex} className="ytem">{ytem}</h1>
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className="bottom">designed by @gogAHAHA (not gorjus etim XD)</div>
            </div>
        </div>
    )
};

export default Footer;