function calculateGST(){

    let amount =
        parseFloat(
            document.getElementById('amount').value
        );

    let rate =
        parseFloat(
            document.getElementById('gstRate').value
        );

    if(isNaN(amount)){
        alert("Enter amount");
        return;
    }

    let gst =
        (amount * rate) / 100;

    let total =
        amount + gst;

    document.getElementById('gstAmount')
        .innerText = gst.toFixed(2);

    document.getElementById('totalAmount')
        .innerText = total.toFixed(2);
}

function calculateInclusiveGST(){

    let amount =
        parseFloat(
            document.getElementById('inclusiveAmount').value
        );

    let rate =
        parseFloat(
            document.getElementById('inclusiveRate').value
        );

    if(isNaN(amount)){
        alert("Enter amount");
        return;
    }

    let base =
        amount / (1 + rate / 100);

    let gst =
        amount - base;

    document.getElementById('baseAmount')
        .innerText = base.toFixed(2);

    document.getElementById('includedGST')
        .innerText = gst.toFixed(2);
}