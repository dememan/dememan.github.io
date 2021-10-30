function calcTip () {

    var totalP=document.getElementById("total");
    var subTotalV=document.getElementById("subtotal").value;
    var tipV=document.getElementById("tip").value;
    var result=subTotalV *tipV/100.0;

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        useGrouping: true,
    });

    totalP.innerHTML=dollarUS.format(result);
}