// Constants
const myTextArea = document.getElementById("myTextArea");
const upperBtn = document.getElementById("upperBtn");
const lowerBtn = document.getElementById("lowerBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const characters = document.getElementById("characters");
const words = document.getElementById("words");
const time = document.getElementById("time");
let text = "";
let updatedText = "";
// Changes text Value Whenever Text Is Changed!
myTextArea.addEventListener('change', () => {
    text = myTextArea.value;
    characters.innerText = text.length + " " + "Characters";
    words.innerText = text.split(" ").filter(e => e.length != 0).length + " " + "Words";
    time.innerText = (text.split(" ").filter(e => e.length != 0).length) * 0.2 + " " + "Seconds";
})
// For Uppercase Button
upperBtn.addEventListener('click', () => {
    updatedText = text.toUpperCase();
    myTextArea.value = updatedText;
});
// For Lowercase Button
lowerBtn.addEventListener('click', () => {
    updatedText = text.toLowerCase();
    myTextArea.value = updatedText;
});
// For Clear Button
clearBtn.addEventListener('click', () => {
    updatedText = "";
    myTextArea.value = updatedText;
    text = myTextArea.value;
    characters.innerText = "0 Characters";
    words.innerText = "0 Words";
    time.innerText = "0 Seconds";
});
// For Copy Button
copyBtn.addEventListener('click', () => {
    if (!updatedText) {
        navigator.clipboard.writeText(text);
    } else {
        navigator.clipboard.writeText(updatedText);
    }
});
