import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 5fc9ca17b921c4019d787d607124411c0b4af20f066f72da26b8f7834523a590',
  },
});
