import './Header.scss';

const top_items = ['О магазинах', 'Скидки', 'Гарантии', 'Контакты', {icon: 'mail.svg', title: 'sales@gogahaha.ru'}, {icon: 'location.svg', title: 'ул. Пушкина'}, {icon: 'time.svg', title: '9:00 - 22:00'}];
const bottom_items = ['Виски', 'Коньяк', 'Шампанское', 'Вино', 'Крепкие напитки', 'Другие напитки', 'Прочее', {icon: 'promo.svg', title: 'Акции'}];

function Header() {
    

    return (
        <div className="header">
            <div className="top">
                <div className="container">
                    <div className="left">
                        {top_items.map((item, index) => {
                            if (typeof(item) === 'string') return <div className="item_str" key={index}>{item}</div>;
                            if (typeof(item) === 'object') return;
                        })}
                    </div>
                    <div className="right">
                        {top_items.map((item, index) => {
                            if (typeof(item) === 'string') return;
                            if (typeof(item) === 'object') return <div className='item_obj' key={index}><img src={'/assets/icons/' + item.icon} />{item.title}</div>;
                        })}
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="container">
                    <div className="logo">
                        <p className='zero'>Гогантер</p>
                        <p className='one'>винный магазин</p>
                    </div>
                    <div className="searchBarWrapper">
                        <input type='text' placeholder='например: водка finlandia' />
                    </div>
                    <img className="favorites" src='/assets/icons/heart.svg'></img>
                    <div className="cart"><img src="/assets/icons/cart.svg"/>В корзине пусто</div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="left">
                        {bottom_items.map((item, index) => {
                                if (typeof(item) === 'string') return <div className="item_str" key={index}>{item}</div>;
                                if (typeof(item) === 'object') return <div className='item_obj' key={index}><img src={'/assets/icons/' + item.icon} />{item.title}</div>;
                        })}
                    </div>
                    <div className="right">+7 (495) 662-58-95 <img src="/assets/icons/telegram.svg" /></div>
                </div>
            </div>
        </div>
    )
};

export default Header;