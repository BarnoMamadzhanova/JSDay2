

// Capitalize

const capitalize = (function() {
    let text = String(prompt("Write your text"));
    let text1 = text.split("");
    // console.log(text1);
    let char = text1[0].toUpperCase();
    // console.log(char);
    delete text1[0];
    // console.log(text1);

    text1.unshift(char);

    console.log(text1.join(""));
}());

