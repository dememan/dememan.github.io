var texta;

function click1() {
    if (isNotEmpty()) {
        texta = document.getElementById('txtarea');

        texta.style.fontWeight = "bold";

        setInterval(increaseSize, 500);
    }
}

function increaseSize() {
    var computedFontSize = window.getComputedStyle(texta, null).getPropertyValue('font-size');
    var fontSize = parseInt(computedFontSize) + 2 + 'px';

    texta.style.fontSize = fontSize;
}

function blings() {
    if (isNotEmpty()) {
        let texta = document.getElementById('txtarea');
        if (document.getElementById('bling').checked) {
            alert("blings changed");
            texta.style.fontWeight = "bold";
            texta.style.color = "green";
            texta.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('assets/hundred-dollar-bill.jpg')";
        } else {
            alert("blings unchanged");
            texta.style.fontWeight = "normal";
            texta.style.color = "";
            texta.style.textDecoration = "none";
        }
    }
}

function Igpay() {
    if (isNotEmpty()) {
        let textaa = document.getElementById('txtarea');

        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let textv = textaa.value;
        let word1StartLetter = textv.charAt(0);
        if (vowels.includes(word1StartLetter, 0)) {
            textaa.value = textv.substring(1).trim() + word1StartLetter + "ey";

        } else {
            textaa.value += "ey";
        }
    }
}

function Malkovich() {
    if (isNotEmpty()) {

        let textaa = document.getElementById('txtarea');
        if (textaa.value.length >= 5)
            textaa.value = "Malkovich";
    }
}

function isNotEmpty() {

    if (document.getElementById('txtarea').value.trim().length == 0) {

        alert("Please insert some value for the operation !");
        document.getElementById('txtarea').focus();
        return false;
    } else
        return true;
}