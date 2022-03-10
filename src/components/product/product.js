import React from 'react';
import Title from "./title/title";
import classes from "./product.module.css";
import CardItem from "./card-item/card-item";

const PRODUCTS = [
  [{
    image: '/img/products/pizza/item1.jpeg',
    title: 'Новогодний цыпленок',
    text: 'Цыпленок, мандарины, моцарелла, цитрусовый соус, сыры чеддер и пармезан, соус альфредо',
    price: '18.90 руб',
    id: 1,
   },
    {
      image: '/img/products/pizza/item2.jpeg',
      title: 'Карбонара',
      text: 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, соус альфредо, красный лук, чеснок, итальянские травы',
      price: '15.90 руб',
      id: 2,
    },
    {
      image: '/img/products/pizza/item3.jpeg',
      title: 'Ветчина и грибы',
      text: 'Томатный соус, моцарелла, ветчина, шампиньоны',
      price: '8.90 руб',
      id: 3,
    },
    {
      image: '/img/products/pizza/item4.jpeg',
      title: 'Пепперони',
      text: 'Томатный соус, пикантная пепперони, моцарелла',
      price: '11.90 руб',
      id: 4,
    },
    {
      image: '/img/products/pizza/item5.jpeg',
      title: 'FIB Микс',
      text: 'Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы',
      price: '20.90 руб',
      id: 5,
    },
    {
      image: '/img/products/pizza/item6.jpeg',
      title: 'Аррива',
      text: 'Чоризо, цыпленок, томаты, сладкий перец, лук красный, чеснок сухой, моцарелла, соус ранч, соус бургер',
      price: '15.90 руб',
      id: 6,
    },
    {
      image: '/img/products/pizza/item7.jpeg',
      title: 'Ветчина и сыр',
      text: 'Моцарелла, ветчина, соус альфредо',
      price: '8.90 руб',
      id: 7,
    },
    {
      image: '/img/products/pizza/item8.jpeg',
      title: 'Сырный цыпленок',
      text: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
      price: '18.90 руб',
      id: 8,
    },
    {
      image: '/img/products/pizza/item9.jpeg',
      title: 'Цыпленок барбекю',
      text: 'Соус барбекю, томатный соус, цыпленок, красный лук, моцарелла, бекон',
      price: '18.90 руб',
      id: 9,
    },
    {
      image: '/img/products/pizza/item10.jpeg',
      title: 'Песто',
      text: 'Соус песто, соус альфредо, цыплёнок, кубики брынзы, томаты, моцарелла',
      price: '18.90 руб',
      id: 10,
    },
    {
      image: '/img/products/pizza/item11.jpeg',
      title: 'Мясная',
      text: 'Острая чоризо, томатный соус, цыпленок, пикантная пепперони, моцарелла, ветчина',
      price: '18.90 руб',
      id: 11,
    },
    {
      image: '/img/products/pizza/item12.jpeg',
      title: 'Четыре сезона',
      text: 'Итальянские травы, томатный соус, томаты, пикантная пепперони, кубики брынзы, моцарелла, ветчина, шампиньоны',
      price: '15.90 руб',
      id: 12,
    },
  ],

  [{
    image: '/img/products/combo/item1.webp',
    title: '2 пиццы и напиток',
    text: '2 пиццы 25 см и напиток на выбор. Для компании из 2–4 человек',
    price: '29.90 руб',
    id: 1,
  },
    {
      image: '/img/products/combo/item2.webp',
      title: '2 пиццы и закуска',
      text: '2 пиццы 25 см и закуска на выбор. Для компании из 2–4 человек',
      price: '30.90 руб',
      id: 2,
    },
    {
      image: '/img/products/combo/item3.webp',
      title: '2 пиццы',
      text: 'Самое популярное комбо из 2 пицц 30 см. Большой выбор',
      price: '34.90 руб',
      id: 3,
    },
    {
      image: '/img/products/combo/item4.webp',
      title: '3 пиццы',
      text: '3 пиццы 30 см на любой вкус. Для компании из 5–10 человек',
      price: '49.90 руб',
      id: 4,
    },
    {
      image: '/img/products/combo/item5.webp',
      title: 'Пицца и 2 закуски',
      text: 'Пицца 30 см и 2 закуски на выбор. Для компании из 2–4 человек',
      price: '28.90 руб',
      id: 5,
    },
    {
      image: '/img/products/combo/item6.webp',
      title: '5 пицц',
      text: '5 пицц 30 см на любой вкус. Для компании из 10–15 человек',
      price: '76.90 руб',
      id: 6,
    },
    {
      image: '/img/products/combo/item7.webp',
      title: '7 пицц',
      text: '7 пицц 30 см на любой вкус. Для компании из 15–20 человек',
      price: '99.90 руб',
      id: 7,
    },
    {
      image: '/img/products/combo/item8.webp',
      title: '10 средних пицц',
      text: '10 пицц 30 см на любой вкус. Для компании из 20–30 человек',
      price: '145.90 руб',
      id: 8,
    },
    {
      image: '/img/products/combo/item9.webp',
      title: '10 больших пицц',
      text: 'Соберите свое комбо по выгодной цене — десять больших пицц 35 см на выбор. Подойдет для компании из 30-40 человек. Не суммируется с акциями.',
      price: '168.90 руб',
      id: 9,
    },
  ],

  [{
    image: '/img/products/dessert/item1.jpeg',
    title: 'Вишневый пирог',
    text: 'Это не просто десерт, а вишенка на торте! Творожно-песочное тесто с ягодами, заварным кремом и лепестками миндаля',
    price: '5.50 руб',
    id: 1,
  },
    {
      image: '/img/products/dessert/item2.jpeg',
      title: 'Чизкейк Нью-Йорк',
      text: 'Мы перепробовали тысячу десертов и наконец нашли любимца гостей — нежнейший творожный чизкейк',
      price: '5.50 руб',
      id: 2,
    },
    {
      image: '/img/products/dessert/item3.jpeg',
      title: '2 Маффина Три шоколада',
      text: 'Основное блюдо заканчивается, начинаются маффины с начинкой на шоколадной основе с кубиками белого и молочного шоколада',
      price: '6.50 руб',
      id: 3,
    },
    {
      image: '/img/products/dessert/item4.jpeg',
      title: 'Фонданы',
      text: 'Четверо из пяти гостей говорят «Oh la la!», когда едят этот французский десерт с хрустящей корочкой и топленой шоколадной начинкой',
      price: '11.90 руб',
      id: 4,
    },
    {
      image: '/img/products/dessert/item5.jpeg',
      title: 'Рулетики с брусникой',
      text: 'Это задорные сладкие рулетики, в которых закрутился микс из натуральной брусники и сгущенного молока',
      price: '7.90 руб',
      id: 5,
    },
    {
      image: '/img/products/dessert/item6.jpeg',
      title: 'Рулетики с корицей',
      text: 'Десерт, одобренный нашими бабушками. Горячие сладкие рулетики с пряной корицей и сахаром',
      price: '6.80 руб',
      id: 6,
    },
    {
      image: '/img/products/dessert/item7.jpeg',
      title: 'Сырники с малиновым вареньем',
      text: 'Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство',
      price: '10.00 руб',
      id: 7,
    },
    {
      image: '/img/products/dessert/item8.jpeg',
      title: 'Сырники',
      text: 'Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство',
      price: '8.50 руб',
      id: 8,
    },
    {
      image: '/img/products/dessert/item9.jpeg',
      title: 'Сырники, стандартная порция',
      text: 'Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство',
      price: '4.50 руб',
      id: 9,
    },
  ],

  [{
    image: '/img/products/drinks/item1.jpeg',
    title: 'Малиновый пунш',
    text: 'Согревающий напиток на основе пюре малины и черной смородины',
    price: '2.90 руб',
    id: 1,
  },
    {
      image: '/img/products/drinks/item2.jpeg',
      title: 'Кофе Американо',
      text: 'Пара глотков горячего Американо, и вы будете готовы покорять этот день',
      price: '3.90 руб',
      id: 2,
    },
    {
      image: '/img/products/drinks/item3.jpeg',
      title: 'Кофе Ванильный капучино',
      text: 'Нежнее, еще нежнее! Это кофейный напиток со вспененным молоком и ванильным сиропом',
      price: '4.70 руб',
      id: 3,
    },
    {
      image: '/img/products/drinks/item4.jpeg',
      title: 'Кофе Капучино',
      text: 'Король среди кофейных напитков — классический капучино. Для любителей сбалансированного кофейно-молочного вкуса',
      price: '4.60 руб',
      id: 4,
    },
    {
      image: '/img/products/drinks/item5.jpeg',
      title: 'Кофе Латте',
      text: 'Когда хочется нежную молочную пенку, на помощь приходит классический латте',
      price: '4.60 руб',
      id: 5,
    },
    {
      image: '/img/products/drinks/item6.jpeg',
      title: 'Кофе Карамельный капучино',
      text: 'Если не шоколад, то карамель! А капучино с карамельным сиропом особенно хорош',
      price: '4.70 руб',
      id: 6,
    },
  ]
]


const Product = (props) => {
  return (
    <div className={classes.product}>
      <Title title={props.title}/>
      <div className={classes.card}>
        {PRODUCTS[props.index].map(props => <CardItem props={props} key={props.id}/>)}
      </div>
    </div>
  );
};

export default Product;