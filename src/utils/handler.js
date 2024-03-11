import { bookshelf, filteredData, filteredBookshelf } from "../data/index.js";
import {
  generateId,
  createElementButton,
  saveDataInLocalStorage,
} from "./utils.js";
import { STORAGE_KEY } from "./constants.js";
import { render } from "../events/renderEvent.js";

export function onSearchHandler() {
  const search = document.getElementById("searchBookTitle").value;
  if (search) {
    filteredData.isSearch = true;
  } else {
    filteredData.isSearch = false;
  }
  filteredData.bookshelf.splice(0, filteredData.bookshelf.length);
  const searchBook = bookshelf.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );
  searchBook.forEach((book) => filteredData.bookshelf.push(book));
  render();
}

function resetSearch() {
  document.getElementById("searchBookTitle").value = "";
  filteredData.bookshelf = [];
  filteredData.isSearch = false;
}

function resetForm() {
  document.getElementById("inputBookTitle").value = null;
  document.getElementById("inputBookAuthor").value = null;
  document.getElementById("inputBookYear").value = null;
  document.getElementById("inputBookIsComplete").checked = false;
}

export function onSubmitHandler() {
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;
  const isComplete = document.getElementById("inputBookIsComplete").checked;

  const id = generateId();
  const payload = {
    id,
    title,
    author,
    year,
    isComplete,
  };
  bookshelf.push(payload);

  resetSearch();

  saveDataInLocalStorage(STORAGE_KEY, bookshelf);
  resetForm();
  render();
}

export function createBook(book) {
  const { id, title, author, year, isComplete } = book;

  const article = document.createElement("article");
  article.classList.add("book_item");

  const titleEl = document.createElement("h3");
  titleEl.innerText = title;

  const authorEl = document.createElement("p");
  authorEl.innerText = `Penulis: ${author}`;

  const yearEl = document.createElement("p");
  yearEl.innerText = `Tahun: ${year}`;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("action");

  article.append(titleEl, authorEl, yearEl);

  const greenButton = createElementButton(
    isComplete ? "Belum selesai di Baca" : "Selesai dibaca",
    ["green"],
  );
  const redButton = createElementButton("Hapus buku", ["red"]);

  greenButton.addEventListener("click", function () {
    if (isComplete) return undoBookFromCompleted(id);
    return addBookToCompleted(id);
  });

  redButton.addEventListener("click", function () {
    return removeBookFromBookshelf(id);
  });

  buttonContainer.append(greenButton, redButton);
  article.append(buttonContainer);

  return article;
}

function addBookToCompleted(id) {
  const todoTarget = bookshelf.find((book) => book.id === id);
  if (todoTarget) {
    todoTarget.isComplete = true;
    saveDataInLocalStorage(STORAGE_KEY, bookshelf);
    render();
  }
}

function undoBookFromCompleted(id) {
  const todoTarget = bookshelf.find((book) => book.id === id);
  if (todoTarget) {
    todoTarget.isComplete = false;
    saveDataInLocalStorage(STORAGE_KEY, bookshelf);
    render();
  }
}

function removeBookFromBookshelf(id) {
  const todoTargetIndex = bookshelf.findIndex((book) => book.id === id);
  if (todoTargetIndex !== null) {
    bookshelf.splice(todoTargetIndex, 1);
    saveDataInLocalStorage(STORAGE_KEY, bookshelf);
    render();
  }
}
