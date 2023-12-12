import { Carousel } from 'antd';

import './Slider.scss';

const slider_images = [
    {
        img: '/assets/imgs/slider/1.jpg',
        title: 'Идеальный подарок',
        more: 'Сертификат на 3000 руб. в ресторан Novikov Moscow при покупке трех наборов водки Chinggis Khan'
    },
    {
        img: '/assets/imgs/slider/2.webp',
        title: 'Знакомьтесь: азбука виски',
        more: 'Рассказываем интересно о новинках в мире алкоголя'
    },
    {
        img: '/assets/imgs/slider/3.jpg',
        title: 'Топ 10 вин к новому году',
        more: 'Лучшие красные и белые вина для праздников и корпоративов'
    },
    {
        img: '/assets/imgs/slider/4.jpg',
        title: 'К #2024 готов?',
        more: 'Всегда готов! Успейте купить подарки со скидкой'
    },
];


function Slider() {


    return (
        <Carousel autoplay speed={1500} autoplaySpeed={6000}>
            {slider_images.map((item, index) => {
                return (
                    <div key={index}>
                        <div
                        style={{
                            height: '550px',
                            backgroundImage: `url(${slider_images[index].img})`,
                            backgroundSize: 'cover',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            userSelect: 'none'
                        }}>
                            <div className="container">
                                <h1>{item.title}</h1>
                                <h2>{item.more}</h2>
                                <button>Перейти</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Carousel>
    )
};

export default Slider;