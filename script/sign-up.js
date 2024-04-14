
let form = document.querySelector("form");
let data = [];

function saveData(key, arr) {
    localStorage.setItem(key, JSON.stringify(arr));
}

function loadData() {
    let savedData = JSON.parse(localStorage.getItem("data"));
    if (savedData) {
        data = savedData;
    }
    console.log(savedData)
}

function handleFormSubmit(e) {
    e.preventDefault();
    let values = e.target.elements;
    let username = values[0].value;
    let email = values[1].value;
    let password = values[2].value;
    let conform = values[3].value;

    if (password === conform) {
        let narr = data.filter(ele => ele.user === username);
        if (narr.length > 0) {
            alert("Username is already taken");
        } else {
            let obj = {
                user: username,
                email: email,
                password: password
            };
            data.push(obj);
            saveData("data", data);
            console.log(data);
            alert("Registration successful");
            window.location.href = "log-in.html";
        }
    } else {
        alert("Passwords do not match");
    }
}

form.addEventListener("submit", function(event) {
    handleFormSubmit(event);
});

loadData();
