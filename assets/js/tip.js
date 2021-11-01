function calcTip() {

    var totalP = document.getElementById("total");
    var subTotalV = document.getElementById("subtotal").value;
    var tipPerc = document.getElementById("tip").value;
    var tip = subTotalV * tipPerc / 100.0;
    var total = parseFloat(subTotalV) + parseFloat(tip);

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        useGrouping: true,
    });

    totalP.innerHTML = dollarUS.format(total);
    document.getElementById("tipv").innerHTML = dollarUS.format(tip);
}