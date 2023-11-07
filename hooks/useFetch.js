import { useState, useEffect } from 'react';
import { RAPID_API_KEY } from '@env';
import axios from 'axios';

const rapidApiKey = RAPID_API_KEY;

const useFetch = (params, endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...params
    },
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, error, fetchData };
}
