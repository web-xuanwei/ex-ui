import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ExButton: typeof components.Button;
  }
}
export {};