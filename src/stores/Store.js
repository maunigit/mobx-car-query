import { observable } from "mobx";

class Store {
  @observable data = [];
  @observable model = "";
  @observable country = "";
}

export default new Store();
