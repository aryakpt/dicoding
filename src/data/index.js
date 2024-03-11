import {
  isStorageExist,
  loadDataFromLocalStorage,
  STORAGE_KEY,
} from "../utils/index.js";

export const bookshelf = [];
export const filteredBookshelf = [];
export const filteredData = {
  bookshelf: [],
  isSearch: false,
};

export const initiateData = () => {
  if (isStorageExist()) {
    const response = loadDataFromLocalStorage(STORAGE_KEY);
    response.forEach((book) => bookshelf.push(book));
  }
};
