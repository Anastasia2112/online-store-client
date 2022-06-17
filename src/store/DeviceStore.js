import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'LG'},
            {id: 5, name: 'HP'},
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'LG'},
            {id: 5, name: 'HP'},
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'LG'},
            {id: 5, name: 'HP'},
        ]
        this._devices = [
            {id: 1, name: 'IPhone 12 PRO', price: 150000, rating: 5, img: '../assets/iphone-12-pro.png'},
            {id: 2, name: 'Refrigerator 1 Samsung', price: 80999, rating: 5, img: '../assets/ref-samsung.png'},
            {id: 3, name: 'IPhone 12', price: 110000, rating: 5, img: '../assets/iphone-12-pro.png'},
            {id: 4, name: 'Refrigerator 2 Samsung', price: 80999, rating: 5, img: '../assets/ref-samsung.png'},
            {id: 5, name: 'IPhone 12', price: 110000, rating: 5, img: '../assets/iphone-12-pro.png'},
            {id: 6, name: 'Refrigerator 2 Samsung', price: 80999, rating: 5, img: '../assets/ref-samsung.png'},
            {id: 7, name: 'IPhone 12', price: 110000, rating: 5, img: '../assets/iphone-12-pro.png'},
            {id: 8, name: 'Refrigerator 2 Samsung', price: 80999, rating: 5, img: '../assets/ref-samsung.png'},
            {id: 9, name: 'IPhone 12', price: 110000, rating: 5, img: '../assets/iphone-12-pro.png'},
            {id: 10, name: 'Refrigerator 2 Samsung', price: 80999, rating: 5, img: '../assets/ref-samsung.png'},
            {id: 11, name: 'Refrigerator 2 Samsung', price: 80999, rating: 5, img: '../assets/ref-samsung.png'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}