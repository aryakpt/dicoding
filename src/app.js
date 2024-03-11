import { onSearchHandler, onSubmitHandler } from "./utils/index.js";
import { initiateData } from "./data/index.js";
import "./events/renderEvent.js";
import { render } from "./events/renderEvent.js";

document.addEventListener("DOMContentLoaded", function () {
  initiateData();

  const inputBookIsComplete = document.getElementById("inputBookIsComplete");
  inputBookIsComplete.addEventListener("change", function () {
    const buttonSubmitEl = document.querySelector("#bookSubmit span");
    const isComplete = inputBookIsComplete.checked;
    buttonSubmitEl.innerText = isComplete
      ? "Selesai dibaca"
      : "Belum selesai dibaca";
  });

  const form = document.getElementById("inputBook");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    onSubmitHandler();
  });

  const searchForm = document.getElementById("searchBook");
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    onSearchHandler();
  });

  render();
});
