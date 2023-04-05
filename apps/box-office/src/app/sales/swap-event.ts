import { IScreen } from "../screens/screen";

export interface ISwapEvent {
    src: IScreen;
    target: IScreen;
    tickets: number;
  }
  