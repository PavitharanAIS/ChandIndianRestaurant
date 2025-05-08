const dishes = [
    {
        id: 1,
        name: "Papadums Platter 4pc",
        description: "Served with mango chutney & raita.",
        price: "$10.00",
        image: '../images/menu_starters.jpg',
        category: "Starters"
    },
    {
        id: 2,
        name: "Meat Samosa 2 Per Serve",
        description: "Deep-fried pastry stuffed with lamb mince & spinach.",
        price: "$9.00",
        image: '../images/dishes/meat_samosa.jpg',
        category: "Starters"
    },
    {
        id: 3,
        name: "Veg Samosa 2 Per Serve",
        description: "Deep-fried pastry stuffed with peas & potatoes.",
        price: "$7.50",
        image: '../images/dishes/veg_samosa.jpeg',
        category: "Starters"
    },
    {
        id: 4,
        name: "Chaat Papdi",
        description: "Flat crisp papdis top up with yougurt, potato,onion,mint & tamarind  sauce.",
        price: "$9.50",
        image: '../images/menu_starters.jpg',
        category: "Starters"
    },
    {
        id: 5,
        name: "Aloo Tikki Chaat",
        description: "Fried potato patties topped with a tangy sweet tamarind & mint chutney along with yogurt.",
        price: "$11.00",
        image: '../images/menu_starters.jpg',
        category: "Starters"
    },
    {
        id: 6,
        name: "Samosa Chat 2 per serve",
        description: "Vegetarian samosa topped with yoghurt & tamarind sauce.",
        price: "$10.00",
        image: '../images/dishes/samosa_chat.jpg',
        category: "Starters"
    },
    // {
    //     id: 7,
    //     name: "Meat Samosa Chat",
    //     description: "Meat samosa topped with yoghurt, tamarind sauce.",
    //     price: "$11.00",
    //     image: '../images/dishes/meat_samosa_chat.jpg',
    //     category: "Starters"
    // },
    // {
    //     id: 8,
    //     name: "Onion Bhaji",
    //     description: "Onion slices marinated with chick pea flour in spiced batter & deep-fried.",
    //     price: "$7.50",
    //     image: '../images/dishes/onion_bhaji.jpg',
    //     category: "Starters"
    // }
    // {
    //     id: 9,
    //     name: "Vege Pakora 4 pieces per serve",
    //     description: "Mixed vegetables deep-fried with chick pea flour.",
    //     price: "$8.00",
    //     image: '../images/menu_starters.jpg',
    //     category: "Starters"
    // },
    // {
    //     id: 10,
    //     name: "Gobi Pakora",
    //     description: "Cauliflower deep-fried with chick pea flour.",
    //     price: "$8.00",
    //     image: '../images/dishes/gobi_pakora.jpg',
    //     category: "Starters"
    // },
    // {
    //     id: 11,
    //     name: "Paneer Pakora",
    //     description: "Cottage cheese deep fried with chick pea flour.",
    //     price: "$13.00",
    //     image: '../images/dishes/paneer_pakora.jpg',
    //     category: "Starters"
    // },
    // {
    //     id: 12,
    //     name: "Chicken Pakora",
    //     description: "Chicken pieces deep-fried with chick pea flour.",
    //     price: "$12.00",
    //     image: '../images/menu_starters.jpg',
    //     category: "Starters"
    // },
    // {
    //     id: 13,
    //     name: "Fish Pakora",
    //     description: "Fish dipped in spicy thick chick pea batter & deep-fried.",
    //     price: "$12.00",
    //     image: '../images/dishes/fish_pakora.jpg',
    //     category: "Starters"
    // },
    // {
    //     id: 14,
    //     name: "Prawn Pakora 5 pieces per serve",
    //     description: "Prawn dipped in spicy thick chick pea batter & deep-fried.",
    //     price: "$12.00",
    //     image: '../images/menu_starters.jpg',
    //     category: "Starters"
    // },
    // {
    //     id: 15,
    //     name: "Honey Cauliflower",
    //     description: "A great combination of cauliflower & honey cookedin garlic,lemon &indian spices",
    //     price: "$14.50",    
    //     image: '../images/dishes/honey_cauliflower.jpg',
    //     category: "Starters"
    // },
    // {
    //     id: 16,
    //     name: "Hara-Bhara Kebab",
    //     description: "Mashed potatoes, green peas spinach, flavoured with spices & deep fried.",
    //     price: "$9.00",
    //     image: '../images/menu_starters.jpg',
    //     category: "Starters"
    // },
    // {
    //     id: 17,
    //     name: "Crispy Calamari",
    //     description: "Flash fried squid served with mesclun salad & chilli aioli.",
    //     price: "$16.00",
    //     image: '../images/dishes/crispy_calamari.jpg',
    //     category: "Starters"
    // },
    // {
    //     id: 18,
    //     name: "Chicken 65",
    //     description: "Fried chicken pieces marinated with a special sauce.",
    //     price: "$17.00",
    //     image: '../images/dishes/chicken_65.jpg',
    //     category: "Starters"
    // },
    // {
    //     id: 19,
    //     name: "Sweet Garlic Prawns",
    //     description: "Pan fried prawn tossed with garlic & sweet chilli sauce.",
    //     price: "$15.00",
    //     image: '../images/menu_starters.jpg',
    //     category: "Starters",
    //     subCategory: "Tandoori Starters"
    // },
    {
        id: 20,
        name: "Fish Tikka",
        description: "Cubes of fish marinated in yoghurt, ginger & garlic, cooked in the tandoor.",
        priceHalf: "$13.00",
        priceFull: "$25.00",
        image: '../images/dishes/fish_tikka.jpg',
        category: "Starters",
        subCategory: "Tandoori Starters"
    },
    {
        id: 21,
        name: "Tandoori Prawns",
        description: "Prawns marinated in yoghurt with ginger & garlic.",
        priceHalf: "$14.00",
        priceFull: "$23.00",
        image: '../images/dishes/tandoori_prawns.jpg',
        category: "Starters",
        subCategory: "Tandoori Starters"
    }
    // {
    //     id: 22,
    //     name: "Sheeka Kebab",
    //     description: "Minced lamb in spices skewered & roasted in the tandoor.",
    //     priceHalf: "$13.50",
    //     priceFull: "$24.00",
    //     image: '../images/dishes/sheeka_kebab.jpg',
    //     category: "Starters",
    //     subCategory: "Tandoori Starters"
    // },
    // {
    //     id: 23,
    //     name: "Chicken Tikka",
    //     description: "Cubes of chicken marinated in yoghurt, ginger & garlic, then cooked in the tandoor.",
    //     priceHalf: "$13.50",
    //     priceFull: "$24.00",
    //     image: '../images/dishes/chicken_tikka.jpg',
    //     category: "Starters",
    //     subCategory: "Tandoori Starters"
    // },
    // {
    //     id: 24,
    //     name: "Malai Tikka",
    //     description: "Cubes of chicken marinated in yoghurt, cashews, cheese & cream, then cooked in the tandoor.",
    //     priceHalf: "$13.50",
    //     priceFull: "$24.00",
    //     image: '../images/dishes/malai_tikka.jpg',
    //     category: "Starters",
    //     subCategory: "Tandoori Starters"
    // },
    // {
    //     id: 25,
    //     name: "Hariyali Chicken Tikka",
    //     description: "Chicken pieces marinated with spinach, mint and cheese cooked in the tandoori oven served with salad and mint sauce.",
    //     priceHalf: "$13.50",
    //     priceFull: "$24.00",
    //     image: '../images/dishes/hariyali_chicken_tikka.jpg',
    //     category: "Starters",
    //     subCategory: "Tandoori Starters"
    // },
    // {
    //     id: 26,
    //     name: "Paneer Tikka",
    //     description: "Cottage cheese stuffed with mint sauce & mix pickle sauce cooked in the tandoor.",
    //     price: "$23.00",
    //     image: '../images/menu_starters.jpg',
    //     category: "Starters",
    //     subCategory: "Tandoori Starters"
    // },
    // {
    //     id: 27,
    //     name: "Tandoori Chicken",
    //     description: "Chicken marinated in yoghurt, ginger and garlic & spices cooked in tandoor, served with raita & diced mix salad.",
    //     priceHalf: "$15.00",
    //     priceFull: "$28.00",
    //     image: '../images/dishes/tandoori_chicken.jpg',
    //     category: "Starters",
    //     subCategory: "Tandoori Starters"
    // },
    // {
    //     id: 28,
    //     name: "Chicken Drumsticks",
    //     description: "Chicken drumsticks marinated with ginger, garlic, spices & roasted in the oven.",
    //     price: "$15.00",
    //     image: '../images/menu_starters.jpg',
    //     category: "Starters",
    //     subCategory: "Tandoori Starters"
    // },
    // {
    //     id: 29,
    //     name: "Vege Platter For two persons",
    //     description: "Combination of samosa, pakora, onion-bhaji & hara-bhara kebab.",
    //     price: "$21.00",
    //     image: '../images/menu_starters.jpg',
    //     category: "Starters",
    //     subCategory: "Tandoori Starters"
    // },
    // {
    //     id: 30,
    //     name: "Mixed Platter For two persons",
    //     description: "Combination of samosa, sheeka kebab, chicken tikka & onion-bhaji.",
    //     price: "$22.00",
    //     image: '../images/dishes/mixed_platter.jpg',
    //     category: "Starters",
    //     subCategory: "Tandoori Starters"
    // },
    // {
    //     id: 31, 
    //     name: "Tandoori Platter For two persons", 
    //     description: "Combination of chicken tikka, malai tikka, sheeka kebab & drumsticks",
    //     price: "$23.00",
    //     image: '../images/dishes/tandoori_platter.jpg',
    //     category: "Starters",
    //     subCategory: "Tandoori Starters"
    // }
];

export default dishes;