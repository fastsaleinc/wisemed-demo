import { useState, useEffect } from 'react';
import { getUsers } from '../api/getUsers';

const useFetchUsers = () => {
  const [users, setUsers] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        
        // Agrega un retraso de 2 segundos
        setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 2000); // Retraso de 2000 ms = 2 segundos
      } catch (err) {
        const error = err as Error; 
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { result: users, loading, error };
};

export default useFetchUsers;
