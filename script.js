let amount = document.querySelector("#amount");
let from = document.querySelector("#from");
let to = document.querySelector("#to");
let msg = document.querySelector("#msg");
let result = document.querySelector(".res");
let refresh = document.querySelector(".refresh");

result.addEventListener("click", () => {
    if(from.options[from.selectedIndex].value=="USD" && to.options[to.selectedIndex].value=="USD"){       //USD 1
        msg.innerText = "$" + amount.value +" = $ "+amount.value;
    }else if(from.options[from.selectedIndex].value=="USD" && to.options[to.selectedIndex].value=="EUR"){ //2
        msg.innerText = "$ "+ amount.value+ " = € " + amount.value*0.95;
    }else if(from.options[from.selectedIndex].value=="USD" && to.options[to.selectedIndex].value=="INR"){ //3
        msg.innerText = "$ "+ amount.value+ " = ₹ " +amount.value*84.47;
    }else if(from.options[from.selectedIndex].value=="USD" && to.options[to.selectedIndex].value=="AUD"){ //4
        msg.innerText = "$ "+ amount.value+ " = AU$ " + amount.value*1.53;
    }else if(from.options[from.selectedIndex].value=="EUR" && to.options[to.selectedIndex].value=="EUR"){ //EUR 1
        msg.innerText = "€ "+ amount.value+ " = €" + amount.value;
    }else if(from.options[from.selectedIndex].value=="EUR" && to.options[to.selectedIndex].value=="USD"){ //2
        msg.innerText = "€ "+ amount.value+ " = $ " + amount.value*1.05;
    }else if(from.options[from.selectedIndex].value=="EUR" && to.options[to.selectedIndex].value=="INR"){ //3
        msg.innerText = "€ "+ amount.value+ " = ₹ " + amount.value*88.92 ;
    }else if(from.options[from.selectedIndex].value=="EUR" && to.options[to.selectedIndex].value=="AUD"){ //4
        msg.innerText = "€ "+ amount.value+ " = AU$ " + amount.value*1.61;
    }else if(from.options[from.selectedIndex].value=="INR" && to.options[to.selectedIndex].value=="INR"){ //INR 1
        msg.innerText = "₹ "+ amount.value+ " = ₹ " + amount.value;
    }else if(from.options[from.selectedIndex].value=="INR" && to.options[to.selectedIndex].value=="USD"){ //2
        msg.innerText = "₹ "+ amount.value+ " = $ " + amount.value*0.012;
    }else if(from.options[from.selectedIndex].value=="INR" && to.options[to.selectedIndex].value=="EUR"){ //3
        msg.innerText = "₹ "+ amount.value+ " = € "  + amount.value*0.011;
    }else if(from.options[from.selectedIndex].value=="INR" && to.options[to.selectedIndex].value=="AUD"){ //4
        msg.innerText = "₹ "+ amount.value+ " = AU$ "  + amount.value*0.018;
    }else if(from.options[from.selectedIndex].value=="AUD" && to.options[to.selectedIndex].value=="AUD"){ //AUD 1
        msg.innerText = "AU$ "+ amount.value+ " = AU$ " +amount.value;
    }else if(from.options[from.selectedIndex].value=="AUD" && to.options[to.selectedIndex].value=="USD"){ //2
        msg.innerText = "AU$ "+ amount.value+ " = $ "  + amount.value*0.65;
    }else if(from.options[from.selectedIndex].value=="AUD" && to.options[to.selectedIndex].value=="INR"){ //3
        msg.innerText = "AU$ "+ amount.value+ " = ₹ "  + amount.value*55.08;
    }else if(from.options[from.selectedIndex].value=="AUD" && to.options[to.selectedIndex].value=="EUR"){ //4
        msg.innerText = "AU$ "+ amount.value+ " = € "  + amount.value*0.62;
    }
});

refresh.addEventListener("click", () => {
  msg.innerText = "";
  amount.value = 0;
});
