import * as React from "react";
import { configure } from "mobx";
import { counterStore } from "./counter";

configure({ enforceActions: "always" });

export const stores = { counterStore };
export const CounterContext = React.createContext(stores);

export const useStores = () => React.useContext(CounterContext);
