export function generateId() {
  const generatedId = +new Date();
  return generatedId;
}

export function createElementButton(innerText, className) {
  const buttonEl = document.createElement("button");
  buttonEl.innerText = innerText ?? "Default Text";
  className.length > 0 &&
    className.forEach((data) => {
      buttonEl.classList.add(data);
    });
  return buttonEl;
}

export function isStorageExist() /* boolean */ {
  if (typeof Storage === undefined) {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

export function saveDataInLocalStorage(keyStorage, dataVariable) {
  if (isStorageExist()) {
    const payload = JSON.stringify(dataVariable);
    localStorage.setItem(keyStorage, payload);
  }
}

export function loadDataFromLocalStorage(key) {
  if (isStorageExist()) {
    const data = localStorage.getItem(key);
    const parsedData = JSON.parse(data);
    return parsedData;
  }
}
