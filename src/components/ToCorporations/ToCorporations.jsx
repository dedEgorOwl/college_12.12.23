import './ToCorporations.scss';

function ToCorporations() {
    return (
        <div className="toCorporations">
            <div className="container">
                <img src="/assets/imgs/vine.jpg" />
                <div className="right">
                    <h1>Корпоративным клиентам</h1>
                    <p>С момента основания в 2006 году нашей основной специализацией является обеспечение представительских нужд организаций: от подбора корпоративных подарков до формирования алкогольного меню мероприятий и ассортимента приемных. Для вас:</p>
                    <div className="benefits">
                        <div className="item"><img src="/assets/icons/corporate-benefits-1.svg" />Индивидуальный<br />менеджер</div>
                        <div className="item"><img src="/assets/icons/corporate-benefits-2.svg" />Полный комплект<br />документов</div>
                        <div className="item"><img src="/assets/icons/corporate-benefits-3.svg" />Гарантия качества<br />и происхождения</div>
                    </div>
                    <button>Подробнее</button>
                </div>
            </div>
        </div>
    )
};

export default ToCorporations;