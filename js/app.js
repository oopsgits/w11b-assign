let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let bitcoinData = JSON.parse(this.responseText);
        let usdVal = bitcoinData.bpi.USD.rate;
        document.getElementById("bitcoin-price").innerHTML = usdVal + "USD";
    } else if(this.readyState != 4) {
        document.getElementById("bitcoin-price").innerHTML = "LOADING"
    } else {
        document.getElementById("bitcoin-price").innerHTML = "somethng went wrong"
    }

}

ajax.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/USD.json", true); 
ajax.send(); 

