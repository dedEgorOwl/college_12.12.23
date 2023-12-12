
import './Recomendation.scss';


function Recomendation() {
    return (
        <div className="recomendation">
            <div className="container">
                <div className="left">
                    <h1>Гогантер рекомендует</h1>
                    <p>На полках наших винных магазинов вы найдете как самые редкие и эксклюзивные напитки, так и пользующиеся широкой известностью бренды элитного алкоголя. Мы по праву гордимся нашей коллекцией виски и коньяка — крупнейшей в России. Кависты магазина деликатно помогут подобрать алкоголь в подарок или идеальную гастрономическую пару к вашему ужину.</p>
                    <p>Вся представленная в ассортименте продукция официально импортирована на территорию Российской Федерации, имеет документально подтвержденное происхождение и хранится с соблюдением рекомендуемых производителями условий.</p>
                    <button>Посмотреть всё</button>
                </div>
                <img className="right" src='/assets/imgs/shop.jpg'></img>
            </div>
        </div>
    )
};

export default Recomendation;