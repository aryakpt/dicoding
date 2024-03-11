import { RENDER_EVENT, createBook } from "../utils/index.js";
import { bookshelf, filteredData } from "../data/index.js";

document.addEventListener(RENDER_EVENT, function (e) {
  const data = filteredData.isSearch ? filteredData.bookshelf : bookshelf;
  const incompleteBookshelfListEl = document.getElementById(
    "incompleteBookshelfList",
  );
  const completeBookshelfListEl = document.getElementById(
    "completeBookshelfList",
  );
  incompleteBookshelfListEl.innerHTML = "";
  completeBookshelfListEl.innerHTML = "";

  data.forEach((book) => {
    const newEl = createBook(book);
    if (book.isComplete) {
      completeBookshelfListEl.append(newEl);
    } else {
      incompleteBookshelfListEl.append(newEl);
    }
  });
});

export const render = () => document.dispatchEvent(new Event(RENDER_EVENT));
