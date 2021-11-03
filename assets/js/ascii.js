"use strict"; {
    var speedv = 250;
    var anim;

    function selectAnimation() {
        var sAnim = document.getElementById("animations").value;
        document.getElementById("txt").value = ANIMATIONS[sAnim];

    }

    function modifySize() {
        var sSize = document.getElementById("sizes").value;
        document.getElementById("txt").style.fontSize = sSize;

    }

    function changeSpeed() {
        if (document.getElementById("speed").value)
            speedv = 50;

        else
            speedv = 250;

    }

    function animateCaller() {
        var textA = document.getElementById("txt").value;
        document.getElementById("txt").value = "";

        var lexi = textA.split("=====\n");
        var counter = 0;

        anim = setInterval((function () {

            var nextVal = lexi[parseInt(counter % lexi.length)];
            document.getElementById("txt").value = nextVal;
            counter = counter + 1;
        }), speedv);

    }

    function animate() {


    }

    function start() {
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
        document.getElementById("animations").disabled = true;
        animateCaller();
    }

    function stop() {
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;

        document.getElementById("animations").disabled = false;
        clearInterval(anim);
        selectAnimation();
    }
}