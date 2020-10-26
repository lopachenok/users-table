import {THEME_DEFAULT} from "../../assets/styles/themes";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

export type Theme = {
  theme: typeof THEME_DEFAULT;
};
