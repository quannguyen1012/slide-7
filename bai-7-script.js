    function showMessage(){
        let amount =  document.getElementById("amount").value;
        let formCurrency =  document.getElementById("formCurrency").value;
        let toCurrency =  document.getElementById("toCurrency").value;
        let result = null;

        if (formCurrency === toCurrency) {
            if (formCurrency === "VND") {
                result = Number(amount);
            } else { // USD
                result = Number(amount);
            }
        } else  {
            if(formCurrency === "VND" && toCurrency === "USD"){
                result = Number(amount) / 23500;
            }
            if (formCurrency === "USD" && toCurrency === "VND"){
                result = Number(amount) * 23500;
            }
        }

        document.getElementById("display").innerText = result;
    }