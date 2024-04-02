import { useState, useEffect } from 'react';
import httpSimulation from '../services/HttpSimulator';
import { IHttpSimulation } from '../interfaces/ApiInterfaces';

const useHttpSimulation = (url: string, delay: number = 1000): IHttpSimulation => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSimulation = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await httpSimulation(url, delay);

        setData(response.data);
      } catch (error) {
        setError('Error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSimulation();
  }, [url]);

  return { data, error, isLoading };
};

export default useHttpSimulation;
