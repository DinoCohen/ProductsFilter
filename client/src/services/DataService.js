import axios from 'axios';
import { API_CONFIG } from '../common/config/config.js';

/**
 * Service to handle data fetching
 */
class DataService {
  /**
   * Fetches data from the API
   * @returns {Promise<Category[]>} 
   * @throws {Object} 
   */
  async getData() {
    try {
      const response = await axios.get(`${API_CONFIG.apiUrl}/api/data`);

      return /** @type {Category[]} */ (response.data); // Ensure the response is typed as Category[]
    }
    catch (error) {
      console.log(error);
      throw {
        message: 'Failed to fetch data',
        errorDetails: error.response ? error.response.data : error.message,
      };
    }
  }
}

export default new DataService();
