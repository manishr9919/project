let form = document.querySelector("form");

let data;

function loadData() {
  let savedData = JSON.parse(localStorage.getItem("data"));
  if (savedData) {
    data = savedData;
  }
  console.log(data);
}

function handleFormSubmit(e) {
  e.preventDefault();
  let values = e.target;
  let email = values[0].value;
  let password = values[1].value;

  let arr = data.filter(function (ele, i) {
    console.log( "element ",ele)
    return ele.email === email && ele.password === password;
  });

  console.log(" retrun arr  ", arr)
  if (arr.length > 0) {
    alert("logged in successfully ");
    window.location.href = "index.html";
    console.log("index.html page")
  } else {
    alert("wrong credentials ?");
  }
}

form.addEventListener("submit", function (event) {
  handleFormSubmit(event);
});

loadData()
