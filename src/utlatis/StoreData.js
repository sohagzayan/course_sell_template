export const getData = () => {
  return JSON.parse(localStorage.getItem("course-list"));
};

export const StoreData = (id) => {
  const exit = getData();
  let cardData = {};

  if (!exit) {
    cardData[id] = 1;
  } else {
    cardData = exit;
    if (cardData[id]) {
      cardData[id] = cardData[id] + 1;
    } else {
      cardData[id] = 1;
    }
  }

  localStorage.setItem("course-list", JSON.stringify(cardData));
};


export const removeFormLocalStorage = ()=>{
  return localStorage.removeItem("course-list")
}