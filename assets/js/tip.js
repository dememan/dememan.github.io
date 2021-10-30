function calcTip () {

    var totalP=document.getElementById("total");
    var subTotalV=document.getElementById("subtotal").value;
    var tipV=document.getElementById("tip").value;
    var result=subTotalV *tipV/100.0;
    totalP.innerHTML=result;
}