import { observable } from 'mobx';

//Place to store information
class Store {
  @observable makes = [];
  @observable make = '';
  @observable maxYear = '';
  @observable minYear = '';
  @observable year = 0;
  @observable models = [];
  @observable model = '';
  @observable trims = [];
  @observable trim_model_id = '';
  @observable details = [];
}

export default new Store();
