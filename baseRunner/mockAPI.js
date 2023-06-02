import faker from 'faker';

export const getMockOrganizations = () => {
  return new Array(10).fill({}).map((_, i) => ({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    id: faker.datatype.number(),
  }));
  // Return the fake data as an object
};

export const getMockTeams = () => {
  return new Array(10).fill({}).map((_, i) => ({
    name: faker.lorem.word(),
    organization: faker.company.companyName(),
    id: faker.datatype.number(),
  }));
  // Return the fake data as an object
};
