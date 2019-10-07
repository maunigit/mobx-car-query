import { observable } from 'mobx';

//Place to store information
class Store {
  @observable makes = [];
  @observable make = '';
  @observable maxYear = '';
  @observable minYear = '';
  @observable year = 0;
  @observable models = [];
}

export default new Store();
