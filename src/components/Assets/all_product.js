import p1_img from './Pen.jpg';
import k1_img from './k1_308.jpg';
import k2_img from './k2_7.62x54.jpg';
import k3_img from './k3_5.56.jpg';
import k4_img from './k4_7.62x25.jpg';
import c1_img from './banner_Candle_holders.jpg';

let all_product = [
    {
        id: 1,
        name: 'Ручка',
        category: 'Pen',
        image: p1_img,
        new_price: '500 грн',
        old_price: '700 грн',
        description: 'Ручка виготовлена із трьох гільз, 7,62x54R в середині, верхнього краю пістолетний патрон 7.62х25 ТТ та з протилежної сторони патрон .308 Winchester.',

    },
    {
        id: 2,
        name: 'Брелок .308',
        category: 'Keychain',
        image:k1_img,
        new_price: '100 грн',
        old_price: '130 грн',
        description: 'Брелок виготовлений із гільзи кулеметног патрона .308 Winchester, даний патрон використовуються в кулеметі M240, та автоматах AR-10.',
    },
    {
        id: 3,
        name: 'Брелок 7.62x54',
        category: 'Keychain',
        image: k2_img,
        new_price: '100 грн',
        old_price: '130 грн',
        description: 'Брелок виготовлений із гільзи кулеметног патрона 7.62x54R, даний патрон використовуються в кулеметі Максім, кулеті Калашникова, СГД (самозарядка гвинтівка Драгунова), гвинтівка Мосіна.',
    },
    {
        id: 4,
        name: 'Брелок .223',
        category: 'Keychain',
        image: k3_img,
        new_price: '100 грн',
        old_price: '120 грн',
        description: 'Брелок виготовлений із гільзи патрона .223 Remington також маркується як 5,56×45 мм НАТО, даний патрон використовувався автоматі M4, AR-15.',
    },
    {
        id: 4,
        name: 'Підсвічник',
        category: 'Candle_holders',
        image: c1_img,
        new_price: '1200 грн',
        old_price: '1500 грн',
        description: 'Підсвічник виготовлений із деревяної платформи на якій розміщуються по краях кулеметні патрони 7.62x54R та .308 Winchester, два пістолетних патрони  7.62х25 ТТ, та автоматний патрон .223 Remington, в центрі гільза від ВОГа АГС-17 в середині якого гільза від велико-каліберного кулемета M2 Browning .50 калібра в яку вставляється свічка яка йде в комплекті, конструкція розбирається і віск можливо відмити гарячою водою. ',
    },
    {
        id: 5,
        name: 'Брелок 7.62х25 ТТ',
        category: 'Keychain',
        image: k4_img,
        new_price: '100 грн',
        old_price: '150 грн',
        description: 'Брелок виготовлений із гільзи патрона 7.62x25, даний патрон використовувався в пістолеті кулеметі ППШ, ППС, а також в пістолеті ТТ.',
    },

]

export default all_product;
