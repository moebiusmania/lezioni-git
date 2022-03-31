const URL = "https://edgemony-backend.herokuapp.com/todos";

const q = (selector) => document.querySelector(selector);

// async "classico"
// const getData = () => {
//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       q("ul").innerHTML = data.map((item) => `<li>${item.title}</li>`).join("");
//     });
//   // .then((data) => data.map((item) => `<li>${item.title}</li>`))
//   // .then((lis) => lis.join(""))
//   // .then((str) => (q("ul").innerHTML = str));
// };

// con async/await
const getData = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  console.log(data);
  q("ul").innerHTML = data
    .map((item, index) => `<li id="${index}">${item.title}</li>`)
    .join("");

  document.querySelectorAll("#todo li").forEach((e, i) => {
    e.addEventListener("click", () => {
      const index = parseInt(e.id);
      console.log(data[index]);
    });
  });
};

getData();
// ...
// ...
// ...
