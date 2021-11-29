import { AlertColor } from "@mui/material";
import { makeAutoObservable } from "mobx";
import { Store } from "..";

class MessagesStore {
  indexStore: Store;
  message: string = "";
  status: AlertColor | undefined;
  isOpen: boolean = false;

  constructor(indexStore: Store) {
    makeAutoObservable(this);
    this.indexStore = indexStore;
  }

  setError(message: string) {
    this.message = message;
    this.status = "error";
    this.isOpen = true;
  }

  setInfo(message: string) {
    this.message = message;
    this.status = "info";
    this.isOpen = true;
  }

  setSucsess(message: string) {
    this.message = message;
    this.status = "success";
    this.isOpen = true;
  }

  setWarning(message: string) {
    this.message = message;
    this.status = "warning";
    this.isOpen = true;
  }

  setDefault(message: string) {
    this.message = message;
    this.status = undefined;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.message = "";
    this.status = undefined;
  }
}

export default MessagesStore;
