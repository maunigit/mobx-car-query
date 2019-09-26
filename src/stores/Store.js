import { observable } from 'mobx';

//Place to store information
class Store {
  @observable data = [];
  @observable make = '';
  @observable maxYear = '';
  @observable minYear = '';
}

export default new Store();
