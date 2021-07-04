import {useEffect, useState} from 'react';

import {MESSAGE_ERROR_API_USERS, URL_API_USERS} from "../consts";

export const useGetUsers = () => {
  const [ isLoading, setIsLoading] = useState(true);
  const [ hasError, setHasError] = useState(false);
  const [ users, setUsers] = useState({});
  
  useEffect( () => {
    (async () => {
      try {
        const response = await fetch(URL_API_USERS);
        const users = await response.json();
        setUsers(users);
      } catch(error) {
        console.error(MESSAGE_ERROR_API_USERS, error);
      } finally {
        setIsLoading(false);
        setHasError(true);
      }
    })();
  }, []);
  
  return {
    isLoading,
    users,
    hasError
  }
}

export default useGetUsers;
