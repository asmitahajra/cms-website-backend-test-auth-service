const axios = require('axios').default;
const authService = require('../auth.service');

describe('test api calls', () => {
  let axiosPostMock;
  const mockToken = 'abcdef';
  const mockResolvedValue = { data: { username: 'asmita' } };

  beforeEach(() => {
    axiosPostMock = jest.spyOn(axios, 'post');
  });

  describe('verifyToken function', () => {
    it('should get the decrypted token information', async () => {
      axiosPostMock.mockResolvedValue(mockResolvedValue);
      const decryptedInfo = await authService.verifyToken(mockToken);
      expect(decryptedInfo).toEqual({ username: 'asmita' });
    });
  });
});
