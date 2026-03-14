"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// sync():

module.exports = async function () {

    // return null;

    /* REMOVE DATABASE */
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */

    /* User */
    const User = require('../models/user')
    await User.deleteMany() // !!! Clear collection.
    await User.create({
        "_id": "65343222b67e9681f937f001",
        "username": "admin",
        "password": "aA?123456",
        "email": "admin@site.com",
        "firstName": "admin",
        "lastName": "admin",
        "isActive": true,
        "isStaff": true,
        "isAdmin": true
    })
    await User.create({
        "_id": "65343222b67e9681f937f002",
        "username": "staff",
        "password": "aA?123456",
        "email": "staff@site.com",
        "firstName": "staff",
        "lastName": "staff",
        "isActive": true,
        "isStaff": true,
        "isAdmin": false
    })
    await User.create({
        "_id": "65343222b67e9681f937f003",
        "username": "test",
        "password": "aA?123456",
        "email": "test@site.com",
        "firstName": "test",
        "lastName": "test",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    })

    /* Brand */
    /* Brand */
    const Brand = require('../models/brand')
    await Brand.deleteMany() // !!! Clear collection.
    await Brand.create({
        "_id": "65343222b67e9681f937f104",
        "name": "Adidas",
        "image": "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f105",
        "name": "Nike",
        "image": "https://i.pinimg.com/736x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f107",
        "name": "Puma",
        "image": "https://staticg.sportskeeda.com/editor/2023/03/bda84-16779522739911-1920.jpg"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f108",
        "name": "Lotto",
        "image": "https://1000logos.net/wp-content/uploads/2021/05/Lotto-logo.png"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f109",
        "name": "Decathlon",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/1200px-Decathlon_Logo.png"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f110",
        "name": "Reebok",
        "image": "https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/551064.png"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f122",
        "name": "Samsung",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f123",
        "name": "Nestlé",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nestl%C3%A9_logo.svg/2560px-Nestl%C3%A9_logo.svg.png"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f129",
        "name": "Tommy",
        "image": "https://i.pinimg.com/736x/d3/09/1a/d3091a1a5350fede679b2c7461b0745b.jpg"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f130",
        "name": "LG",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/640px-LG_symbol.svg.png"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f131",
        "name": "Apple",
        "image": "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg"
    })

    /* Category */
    const Category = require('../models/category')
    await Category.deleteMany() // !!! Clear collection.
    await Category.create({
        "_id": "65343222b67e9681f937f201",
        "name": "Food",
    })
    await Category.create({
        "_id": "65343222b67e9681f937f202",
        "name": "Drink",
    })
    await Category.create({
        "_id": "65343222b67e9681f937f203",
        "name": "Jewelery",
    })
    await Category.create({
        "_id": "65343222b67e9681f937f204",
        "name": "Electronic",
    })

    /* Firm */
    const Firm = require('../models/firm')
    await Firm.deleteMany() // !!! Clear collection.
    await Firm.create({
        "_id": "65343222b67e9681f937f302",
        "name": "Manor",
        "phone": "+41 848 802 805",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Manor_Logo.svg/1200px-Manor_Logo.svg.png",
        "address": "Rebgasse 34, 4058 Basel, Switzerland"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f303",
        "name": "Deichmann",
        "phone": "+41 44 745 45 45",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Deichmann_SE_Logo.svg/1200px-Deichmann_SE_Logo.svg.png",
        "address": "Dietikon, Switzerland"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f304",
        "name": "Amazon Europe",
        "phone": "+352 26 73 30 00",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
        "address": "38 avenue John F. Kennedy, L-1855 Luxembourg"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f305",
        "name": "Zalando",
        "phone": "+49 30 2000 88 400",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Zalando_logo.svg/1200px-Zalando_logo.svg.png",
        "address": "Valeska-Gert-Straße 5, 10243 Berlin, Germany"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f310",
        "name": "eBay Europe",
        "phone": "+41 31 528 18 10",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png",
        "address": "Helvetiastrasse 15/17, 3005 Bern, Switzerland"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f315",
        "name": "ASOS",
        "phone": "+44 20 7756 1000",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/ASOS_logo.svg/1200px-ASOS_logo.svg.png",
        "address": "Greater London House, Hampstead Road, London, UK"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f333",
        "name": "Migros",
        "phone": "+41 800 84 08 48",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Migros_logo.svg/1200px-Migros_logo.svg.png",
        "address": "Limmatstrasse 152, 8031 Zürich, Switzerland"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f334",
        "name": "Coop",
        "phone": "+41 800 400 044",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Coop_%28Switzerland%29_logo.svg/1200px-Coop_%28Switzerland%29_logo.svg.png",
        "address": "Thiersteinerallee 12, 4053 Basel, Switzerland"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f335",
        "name": "C&A",
        "phone": "+41 41 228 90 90",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/C%26A_logo.svg/1200px-C%26A_logo.svg.png",
        "address": "Weggisgasse 5, 6004 Luzern, Switzerland"
    })

    /* Product */
    const Product = require('../models/product')
    await Product.deleteMany() // !!! Clear collection.
    await Product.create({
        "_id": "65343222b67e9681f937f421",
        "name": "Tommy",
        "categoryId": "65343222b67e9681f937f203",
        "brandId": "65343222b67e9681f937f107",
        "stock": 0
    })
    await Product.create({
        "_id": "65343222b67e9681f937f422",
        "name": "Nespresso",
        "categoryId": "65343222b67e9681f937f202",
        "brandId": "65343222b67e9681f937f123",
        "stock": 910
    })
    await Product.create({
        "_id": "65343222b67e9681f937f423",
        "name": "San Pellegrino",
        "categoryId": "65343222b67e9681f937f202",
        "brandId": "65343222b67e9681f937f123",
        "stock": 750
    })
    await Product.create({
        "_id": "65343222b67e9681f937f426",
        "name": "KitKat",
        "categoryId": "65343222b67e9681f937f201",
        "brandId": "65343222b67e9681f937f123",
        "stock": 900
    })
    await Product.create({
        "_id": "65343222b67e9681f937f427",
        "name": "Iphone 14 Pro",
        "categoryId": "65343222b67e9681f937f204",
        "brandId": "65343222b67e9681f937f131",
        "stock": 0
    })

    /* Purchase */
    const Purchase = require('../models/purchase')
    await Purchase.deleteMany() // !!! Clear collection.
    await Purchase.create({
        "_id": "65343222b67e9681f937f513",
        "userId": "65343222b67e9681f937f001",
        "firmId": "65343222b67e9681f937f304",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f422",
        "quantity": 1000,
        "price": 20
    })
    await Purchase.create({
        "_id": "65343222b67e9681f937f514",
        "userId": "65343222b67e9681f937f001",
        "firmId": "65343222b67e9681f937f304",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f423",
        "quantity": 1000,
        "price": 30
    })
    await Purchase.create({
        "_id": "65343222b67e9681f937f516",
        "userId": "65343222b67e9681f937f001",
        "firmId": "65343222b67e9681f937f304",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f426",
        "quantity": 1000,
        "price": 5
    })
    await Purchase.create({
        "_id": "65343222b67e9681f937f519",
        "userId": "65343222b67e9681f937f002",
        "firmId": "65343222b67e9681f937f333",
        "brandId": "65343222b67e9681f937f104",
        "productId": "65343222b67e9681f937f422",
        "quantity": 10,
        "price": 100
    })
    await Purchase.create({
        "_id": "65343222b67e9681f937f520",
        "userId": "65343222b67e9681f937f001",
        "firmId": "65343222b67e9681f937f305",
        "brandId": "65343222b67e9681f937f131",
        "productId": "65343222b67e9681f937f427",
        "quantity": 10,
        "price": 2500
    })

    /* Sale */
    const Sale = require('../models/sale')
    await Sale.deleteMany() // !!! Clear collection.
    await Sale.create({
        "_id": "65343222b67e9681f937f614",
        "userId": "65343222b67e9681f937f001",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f422",
        "quantity": 100,
        "price": 30
    })
    await Sale.create({
        "_id": "65343222b67e9681f937f615",
        "userId": "65343222b67e9681f937f001",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f423",
        "quantity": 250,
        "price": 40
    })
    await Sale.create({
        "_id": "65343222b67e9681f937f617",
        "userId": "65343222b67e9681f937f001",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f426",
        "quantity": 100,
        "price": 6
    })
    await Sale.create({
        "_id": "65343222b67e9681f937f624",
        "userId": "65343222b67e9681f937f001",
        "brandId": "65343222b67e9681f937f131",
        "productId": "65343222b67e9681f937f427",
        "quantity": 10,
        "price": 3500
     })

    /* Finished */
    console.log('* Synchronized.')
}