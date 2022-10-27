class Coffee {
  constructor() {
    this.espresso = 0;
    this.cappuccino = 0;
    this.latte = 0;
    this.ammount1 = 0;
    this.ammount2 = 0;
    this.ammount3 = 0;
    this.totalammount = 0;
    this.AddOns = {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
    };
    this.AddValue = {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
    };
  }

  quantity() {
    this.espresso = document.getElementById("espresso").value;

    this.cappuccino = document.getElementById("cappuccino").value;

    this.latte = document.getElementById("latte").value;
  }
  AddOnsValue() {
    this.AddOns = {
      0: document.getElementById("espressomilk").checked,
      1: document.getElementById("espressocream").checked,
      2: document.getElementById("espressolatte").checked,
      3: document.getElementById("cappumilk").checked,
      4: document.getElementById("cappucream").checked,
      5: document.getElementById("cappulatte").checked,
      6: document.getElementById("lattemilk").checked,
      7: document.getElementById("lattecream").checked,
      8: document.getElementById("lattelatte").checked,
    };
  }

  Addvalues() {
    this.AddValue = {
      0: document.getElementById("espressomilk").value,
      1: document.getElementById("espressocream").value,
      2: document.getElementById("espressolatte").value,
      3: document.getElementById("cappumilk").value,
      4: document.getElementById("cappucream").value,
      5: document.getElementById("cappulatte").value,
      6: document.getElementById("lattemilk").value,
      7: document.getElementById("lattecream").value,
      8: document.getElementById("lattelatte").value,
    };
  }
}

const newobject = new Coffee();

function order() {
  newobject.quantity();
  newobject.AddOnsValue();
  newobject.Addvalues();
}
function receipt() {
  document.querySelector(".main2").classList.remove("block");
  document.querySelector(".main2").classList.add("active");

  if (newobject.espresso != 0) {
    document.getElementById("espresso2").innerHTML = "Espresso";
    document.getElementById("espquan").innerHTML = newobject.espresso;

    if (newobject.AddOns[0]) {
      document.getElementById("essadd1").innerHTML = "milk";
      newobject.ammount1 += Number(newobject.AddValue[0]);
    }
    if (newobject.AddOns[1]) {
      document.getElementById("essadd2").innerHTML = "cream";
      newobject.ammount1 += Number(newobject.AddValue[1]);
    }
    if (newobject.AddOns[2]) {
      document.getElementById("essadd3").innerHTML = "latte";
      newobject.ammount1 += Number(newobject.AddValue[2]);
      console.log(newobject.ammount);
    }
    
    document.getElementById("espamm").innerHTML =newobject.espresso*(newobject.ammount1+150);
  }
  if (newobject.cappuccino != 0) {
    document.getElementById("capp2").innerHTML = "Cappuccino";
    document.getElementById("cappquan").innerHTML = newobject.cappuccino;
    if (newobject.AddOns[3]) {
      document.getElementById("cappadd1").innerHTML = "milk";
      newobject.ammount2 += Number(newobject.AddValue[3]);
    }
    if (newobject.AddOns[4]) {
      document.getElementById("cappadd2").innerHTML = "cream";
      newobject.ammount2 += Number(newobject.AddValue[4]);
    }
    if (newobject.AddOns[5]) {
      document.getElementById("cappadd3").innerHTML = "latte";
      newobject.ammount2 += Number(newobject.AddValue[5]);
    }
    document.getElementById("cappamm").innerHTML = newobject.cappuccino*(newobject.ammount2+160);
  }
  if (newobject.latte != 0) {
    document.getElementById("latte2").innerHTML = "Latte";
    document.getElementById("lattequan").innerHTML = newobject.latte;
    if (newobject.AddOns[6]) {
      document.getElementById("latadd1").innerHTML = "milk";
      newobject.ammount3 += Number(newobject.AddValue[6]);
    }
    if (newobject.AddOns[7]) {
      document.getElementById("latadd2").innerHTML = "cream";
      newobject.ammount3 += Number(newobject.AddValue[7]);
    }
    if (newobject.AddOns[8]) {
      document.getElementById("latadd3").innerHTML = "latte";
      newobject.ammount3 += Number(newobject.AddValue[8]);
    }
    document.getElementById("latteamm").innerHTML =newobject.latte*(newobject.ammount3+250);
  }

  newobject.totalammount =
    newobject.espresso*(newobject.ammount1+150) + newobject.cappuccino*(newobject.ammount2+160) +newobject.latte*(newobject.ammount3+250);
  document.getElementById("totalammount").innerHTML = newobject.totalammount;
}
