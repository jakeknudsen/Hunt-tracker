import { getMockTeams } from '../../mockAPI';

export default function handler(req, res) {
  // Call the mock API handler to get the fake data
  const fakeData = getMockTeams();

  // Return the fake data as the API response
  res.status(200).json(fakeData);
}
