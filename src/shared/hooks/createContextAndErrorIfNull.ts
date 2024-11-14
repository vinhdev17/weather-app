import { Context, createContext } from "react";

export const createContextAndErrorIfNull = <ItemType>(
  value: ItemType | null
): Context<ItemType> => {
  const contextValue = createContext(value);
  if (contextValue === null) {
    throw Error("Context has not been Provided!");
  }
  return contextValue as Context<ItemType>;
};
