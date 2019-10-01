import { observable } from 'mobx';

//Place to store information
class Store {
  @observable data = [];
  @observable make = '';
  @observable maxYear = '';
  @observable minYear = '';
  @observable year = '';
}

export default new Store();
