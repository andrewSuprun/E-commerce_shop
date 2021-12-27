import { makeAutoObservable } from "mobx";
export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Refrigerators" },
      { id: 2, name: "Smartphones" },
      { id: 3, name: "Notebooks" },
      { id: 4, name: "TV" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Samsung" },
      { id: 4, name: "Apple" }
    ];
    this._devices = [
      { id: 1, name: "iphone 12", price: 20000, rating: 5, img: "" },
      { id: 2, name: "iphone 13", price: 25000, rating: 5, img: "" },
      { id: 3, name: "iphone 11", price: 17000, rating: 5, img: "" },
      { id: 4, name: "iphone 12 pro", price: 22000, rating: 5, img: "" },
      { id: 5, name: "Samsung s20", price: 15000, rating: 5, img: "" },
      { id: 6, name: "Samsung s30", price: 22000, rating: 5, img: "" },
      { id: 7, name: "Samsung s30 pro", price: 25000, rating: 5, img: "" },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setCategory(types) {
    this._types = types;
  }
  setBrand(brands) {
    this._brands = brands;
  }
  setProduct(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
