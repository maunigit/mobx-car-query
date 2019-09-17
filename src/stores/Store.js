import { observable } from "mobx";

//Place to store information
class Store {
  @observable data = [];
  @observable model = "";
}

export default new Store();
