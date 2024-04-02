
export type StorageType = boolean | number | string;

export interface IStorageResult {
    value: StorageType;
    setValue: (value: StorageType) => void;
  }