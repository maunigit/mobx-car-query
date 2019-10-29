import { observable } from 'mobx';

/**
 * Place to store informations
 */
class Store {
  @observable makes = [];
  @observable make_id = '';
  @observable make_display = '';
  @observable maxYear = '';
  @observable minYear = '';
  @observable year = 0;
  @observable models = [];
  @observable model_name = '';
  @observable trims = [];
  @observable trim_id = '';
  @observable trim_name = '';
  @observable details = [];
  @observable colorTitle = false;
  @observable colorDescription = false;
}

export default new Store();
