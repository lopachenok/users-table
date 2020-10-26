import {User} from "./types";

const users: User[] = [
  {
    id: "1",
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 10,
  },
  {
    id: "2",
    firstName: "Petr",
    lastName: "Ivanov",
    age: 15,
  },
  {
    id: "3",
    firstName: "Petr",
    lastName: "Petrov",
    age: 20,
  },
  {
    id: "4",
    firstName: "Sofya",
    lastName: "Ivanova",
    age: 27,
  },
];

export const loadUsers = (): Promise<User[]> =>
  new Promise(resolve => {
    setTimeout(() => resolve(users), 3000);
  });
