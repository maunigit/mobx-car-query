import { observable } from "mobx";

//Place to store information
class Store {
  @observable data = [];
  @observable model = "";
  @observable country = "";
}

export default new Store();
