import { faker } from "@faker-js/faker";

//Criando dados ficticios a partir desta dependência "npm install @faker-js/faker --save-dev"
export const attendees = Array.from({ length: 222 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    name: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    createdAt: faker.date.recent({ days: 30 }),
    checkedInAt: faker.date.recent({ days: 7 }),
  };
});
