import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageType } from '../interfaces/StorageInterfaces';

const useAsyncStorage = (initialValue: StorageType, storageKey: string) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const fetchStoredValue = async () => {
      try {
        const storedValue = await AsyncStorage.getItem(storageKey);
        if (storedValue !== null) {
          setValue(JSON.parse(storedValue));
        }
      } catch (error) {
        console.error('Error fetching AsyncStorage value:', error);
      }
    };

    fetchStoredValue();
  }, [storageKey]);

  const setAsyncStorageValue = async (newValue: StorageType) => {
    try {
      setValue(newValue);
      await AsyncStorage.setItem(storageKey, JSON.stringify(newValue));
    } catch (error) {
      console.error('Error setting AsyncStorage value:', error);
    }
  };

  return {
    value,
    setValue: setAsyncStorageValue,
  };
};

export default useAsyncStorage;
