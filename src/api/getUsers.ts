import axios from 'axios';
import Constants from 'expo-constants';

export const getUsers = async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};
