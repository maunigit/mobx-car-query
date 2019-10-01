import { observable } from 'mobx';

//Place to store information
class Store {
  @observable data = [];
  @observable make = '';
  @observable maxYear = '';
  @observable minYear = '';
  @observable year = -1;
}

export default new Store();
