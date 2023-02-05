var translateButton = document.querySelector("#translate-button")

function showInput() {
    var inputText = document.getElementById("inputText").value;
    console.log(inputText);
}


translateButton.addEventListener("click", showInput)