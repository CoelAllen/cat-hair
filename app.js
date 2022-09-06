// let power = 1;
let hair = 0;

let clickUpgrades = [
  {
    name: "brush",
    cost: 10,
    value: 1,
    quantity: 0,
  },
  {
    name: "vacuum",
    cost: 20,
    value: 10,
    quantity: 0,
  },
];

let autoUpgrades = [
  {
    name: "sweater",
    cost: 15,
    value: 5,
    quantity: 0,
  },
  {
    name: "black-pants",
    cost: 25,
    value: 10,
    quantity: 0,
  },
];

// NOTE things to do:

// NOTE Pet function: should collect one resource onclick
function petCat() {
  hair++;

  clickUpgrades.forEach((u) => {
    if (u.quantity > 0) {
      hair += u.value * u.quantity;
    }
  });
  shed();
  drawHair();
}
// NOTE autoFunction: should automatically collect resource(use a setInterval)
function autoPetCat() {
  autoUpgrades.forEach((u) => {
    if (u.quantity > 0) {
      hair += u.value * u.quantity;

      // console.log("auto-petted", u.cost);
    }
  });
  drawHair();
  // hair++;
  // console.log("auto-petted", hair);
}
// NOTE buyAutoUpgrade: uses resource to buy multiplier(make sure resource decreases)

function buyAutoUpgrade(autoUpgrade) {
  const boughtUpgrade = autoUpgrades.find((u) => u.name == autoUpgrade);
  // @ts-ignore
  let power = 0;
  // @ts-ignore
  if (hair >= boughtUpgrade.cost) {
    // @ts-ignore
    hair -= boughtUpgrade.cost;
    // @ts-ignore
    boughtUpgrade.quantity++;
    // @ts-ignore
    boughtUpgrade.cost *= 2;

    // @ts-ignore
    document.getElementById(`${boughtUpgrade.name}-count`).innerText =
      // @ts-ignore
      boughtUpgrade.quantity;
    document.getElementById(`${boughtUpgrade.name}-price`).innerText =
      // @ts-ignore
      boughtUpgrade.cost;
    // @ts-ignore
  }
  autoUpgrades.forEach((u) => {
    if (u.quantity > 0) {
      power += u.value * u.quantity;
    }
  });
  // @ts-ignore
  document.getElementById("autoModifiers").innerText = power;
  drawHair();
}
function buyClickUpgrade(clickUpgrade) {
  const upgrade = clickUpgrades.find((u) => u.name == clickUpgrade);
  let power = 1;
  // @ts-ignore
  if (hair >= upgrade.cost) {
    // @ts-ignore
    hair -= upgrade.cost;
    // @ts-ignore
    upgrade.quantity++;
    // @ts-ignore
    upgrade.cost = Math.ceil((upgrade.cost *= 1.5));
    // @ts-ignore
    // power = upgrade.quantity * upgrade.value;
    // @ts-ignore
    document.getElementById(`${upgrade.name}-count`).innerText =
      // @ts-ignore
      upgrade.quantity;
    document.getElementById(`${upgrade.name}-cost`).innerText = upgrade.cost;
  }
  clickUpgrades.forEach((u) => {
    if (u.quantity > 0) {
      power += u.value * u.quantity;
    }
  });
  // @ts-ignore
  document.getElementById("clickModifiers").innerText = power;
  drawHair();
}
// NOTE buyClickUpgrade: uses resource to buy more clicks(both this and the above go
// through the array like sam did in boss-fight)

// NOTE some sort of draw or update function
function drawHair() {
  // @ts-ignore
  document.getElementById("hairCount").innerText = hair;
  furGrowth();
}
function shed() {
  var element = document.getElementById("furFall");
  element.classList.toggle("furball-active");
}
function furGrowth() {
  if (hair >= 50) {
    document.getElementById("totalFur").style.transform = "scale(1.1)";
  }
  if (hair >= 100) {
    document.getElementById("totalFur").style.transform = "scale(1.25)";
  }
  if (hair >= 200) {
    document.getElementById("totalFur").style.transform = "scale(1.5)";
  }
  if (hair >= 500) {
    document.getElementById("totalFur").style.transform = "scale(2.0)";
  }
  if (hair >= 1000) {
    document.getElementById("totalFur").style.transform = "scale(3.0";
  }
}

setInterval(autoPetCat, 1000);
