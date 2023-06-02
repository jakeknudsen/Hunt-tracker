import { getMockOrganizations } from '../../mockAPI';

export default function handler(req, res) {
  // Call the mock API handler to get the fake data
  const fakeData = getMockOrganizations();

  // Return the fake data as the API response
  res.status(200).json(fakeData);
}
