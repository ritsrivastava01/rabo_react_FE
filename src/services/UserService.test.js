import axios from 'axios';
import { getUser, saveUser } from './UserService';

jest.mock('axios');

describe('UserService', () => {
  it('should fetch the data from an API', async () => {
    const dummyData = [
      {
        firstName: 'test',
        lastName: 'test',
        email: 'test@gtest.com',
      },
    ];
    axios.get.mockImplementationOnce(() => Promise.resolve(dummyData));
    await expect(getUser()).resolves.toEqual(dummyData);
    expect(axios.get).toHaveBeenLastCalledWith('https://demo-api.now.sh/users');
  });

  it('should save the data via an API', async () => {
    const response = {
      status: 200,
    };

    const dummyData = [
      {
        firstName: 'test',
        lastName: 'test',
        email: 'test@gtest.com',
      },
    ];
    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    await expect(saveUser(dummyData)).resolves.toEqual(response);
    expect(axios.post).toHaveBeenLastCalledWith(
      'https://demo-api.now.sh/users',
      dummyData
    );
  });
});
