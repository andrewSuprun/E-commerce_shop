import { makeAutoObservable } from "mobx";
export default class ProductStore {
  constructor() {
    this._category = [
      { id: 1, name: "Refrigerators" },
      { id: 2, name: "Smartphones" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" }
    ];
    this._product = [
      { id: 1, name: "iphone 12", price: 20000, rating: 5, img: "" },
      { id: 2, name: "iphone 13", price: 25000, rating: 5, img: "" },
      { id: 3, name: "iphone 11", price: 17000, rating: 5, img: "" },
      { id: 4, name: "iphone 12 pro", price: 22000, rating: 5, img: "" },
      { id: 5, name: "Samsung s20", price: 15000, rating: 5, img: "" },
      { id: 6, name: "Samsung s30", price: 22000, rating: 5, img: "" },
      { id: 7, name: "Samsung s30 pro", price: 25000, rating: 5, img: "" },
    ];

    makeAutoObservable(this);
  }

  setCategory(category) {
    this._category = category;
  }
  setBrand(brand) {
    this._brand = brand;
  }
  setProduct(product) {
    this._product = product;
  }
  get category() {
    return this._category;
  }
  get brand() {
    return this._brand;
  }
  get product() {
    return this._product;
  }
}
