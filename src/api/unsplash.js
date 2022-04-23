import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID S5EaXhaBnGpLKEY4OUxklfb7HLq-v1iWeGDo5JGSh9g',
  },
});
