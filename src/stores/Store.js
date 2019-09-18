import { observable } from 'mobx';

//Place to store information
class Store {
  @observable data = [];
  @observable make = '';
}

export default new Store();
