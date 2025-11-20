"use strict;";

let cepelinuAnalize = (skaicius) => {
  let kcal = 350;

  return skaicius * kcal > 1000
    ? { kalorijos: `${skaicius * kcal}`, zinute: "Ufff... čia rimtas balius!" }
    : { kalorijos: `${skaicius * kcal}`, zinute: "Dar gali judėti po valgio" };
};

// console.log(cepelinuAnalize(3));

let blynMotyvacija = (nutaika, energija) => {
  let kepimoIndex = nutaika * energija;

  if (kepimoIndex > 40) {
    return "Kepk daug blynų!";
  } else if (kepimoIndex >= 20 && kepimoIndex <= 40) {
    return "Kepk kelis blynus.";
  } else {
    return "Palik blynus rytojui...";
  }
};

// console.log(blynMotyvacija(10, 10));
// console.log(blynMotyvacija(5, 5));
// console.log(blynMotyvacija(1, 10));

let dayMood = (numDay) => {
  switch (numDay) {
    case 1:
      return "Pirmadienis. Stiprios kavos prašau.";
    case 2:
      return "Antradienis. Jau geriau.";
    case 3:
      return "Trečiadienis. Pusė kelio.";
    case 4:
      return "Ketvirtadienis. Dar truputį.";
    case 5:
      return "Penktadienis. Širdis dainuoja!." + " + šventinė atmosfera";
    case 6:
      return "Šeštadienis. Galima ilgiau pamiegoti." + " + šventinė atmosfera";
    case 7:
      return "Sekmadienis. Nieko neveikimo menas.";

    default:
      return "Pirmadienis. Stiprios kavos prašau.";
  }
};

// console.log(dayMood(1));
// console.log(dayMood(2));
// console.log(dayMood(3));
// console.log(dayMood(4));
// console.log(dayMood(5));
// console.log(dayMood(6));
// console.log(dayMood(7));

let joniniuEkspertas = (z1, z2, z3, z4) => {
  let suma = z1 + z2 + z3 + z4;

  if (suma > 20) {
    return { suma: `${suma}`, isvada: "Joninės garantuotos!" };
  } else {
    return { suma: `${suma}`, isvada: "Dar reikia žolelių..." };
  }
};

// console.log(joniniuEkspertas(5, 5, 5, 5));
// console.log(joniniuEkspertas(3, 3, 3, 3));

let fishNeeded = (g1, g2, g3) => {
  let sumG = g1 + g2 + g3;
  let fish = sumG * 0.25;
  fish = Math.round(fish * 100) / 100;
  if (fish > 2) {
    return {
      zmones: `${sumG}`,
      zuvis: `${fish}`,
      zinute: "Reikės didelio puodo!",
    };
  } else {
    return {
      zmones: `${sumG}`,
      zuvis: `${fish}`,
      zinute: "Užteks mažo puodo.",
    };
  }
};

// console.log(fishNeeded(1, 1, 1));
// console.log(fishNeeded(10, 5, 3));

let goToFair = (temp, vejas) => {
  if (temp < 0 || vejas > 5) {
    return "NEEIK! Sušalsi!";
  } else if (temp > 0 || vejas < 5) {
    return "Eik! Riestainiai tavęs laukia!";
  } else {
    return "Gal eik, bet apsirenk.";
  }
};

// console.log(goToFair(-1, 4));
// console.log(goToFair(1, 6));
// console.log(goToFair(-1, 6));
// console.log(goToFair(1, 6));
// console.log(goToFair(-1, 4));
// console.log(goToFair(1, 4));
// console.log(goToFair(0, 5));

let celebrateNameDay = (vardas, arGeraiMiegojo) => {
  let str = `Sveikiname su vardadieniu, ${vardas}!`;
  switch (arGeraiMiegojo) {
    case false:
      return str + " (bet pirmiau išgerk kavos)";
      break;

    default:
      return str;
  }
};

// console.log(celebrateNameDay("Valentin", true));
// console.log(celebrateNameDay("Viktoraas", false));

let devMotivation = (kavosPuodeliai, eilutesKodo, klaidos) => {
  let index = (eilutesKodo - klaidos) * kavosPuodeliai;

  if (index < 20) {
    return "Reikia dar kavos...";
  } else if (index >= 20 && index <= 100) {
    return "Ne blogai";
  } else {
    return "Super puikiai programuoju";
  }
};

// console.log(devMotivation(10, 10, 10));
// console.log(devMotivation(10, 10, 5));
// console.log(devMotivation(10, 15, 0));

let shouldEatCake = (menuo, alkioLygis) => {
  if (menuo === 12 && alkioLygis > 5) {
    return "Šakotis privalomas";
  } else if (menuo !== 12 && alkioLygis > 7) {
    return "Na jau gerai... galima mažą gabalėlį";
  } else {
    return "Gal užteks arbatos?";
  }
};

// console.log(shouldEatCake(12, 6));
// console.log(shouldEatCake(10, 8));
// console.log(shouldEatCake(10, 6));

let potatoBattle = () => {
  const patatos = [
    "Bulviniai blynai",
    "Vedarai",
    "Šaltibarščiai su bulvėm",
    "Bulvinė košė",
    "Bulvių plokštainis",
  ];

  let firstRandom = Math.floor(Math.random() * patatos.length);
  let secondRandom = Math.floor(Math.random() * patatos.length);

  let firstPatekalas = patatos[firstRandom];
  let secondPatekalas = patatos[secondRandom];

  if (firstPatekalas == secondPatekalas) {
    return `Lemtingas sutapimas! Valgysi dvigubą ${firstPatekalas} porciją!`;
  } else {
    return `Šiandien rinkis tarp ${firstPatekalas} ir ${secondPatekalas}!`;
  }
};

// console.log(potatoBattle());
// console.log(potatoBattle());
// console.log(potatoBattle());

let holidayPriority = (svente, dienosIki) => {
  let svarba = 0;
  switch (svente) {
    case "Kalėdos":
      svarba = 5;
      break;
    case "Velykos":
      svarba = 4;
      break;
    case "Joninės":
      svarba = 3;
      break;
    case "Cepelinų diena":
      svarba = 2;
      break;

    default:
      svarba = 1;
      break;
  }

  let koficientas = svarba * (30 - dienosIki);
  return `Skubos koficientas: ${koficientas}`;
};

let giftsBudget = (k1, k2, k3) => {
  let sum = k1 + k2 + k3;

  sum = Math.round(sum * 100) / 100;
  str = "";
  if (sum > 50) {
    str = "Biudžetas sprogo!";
  } else {
    str = "Tilpai!";
  }

  return { suma: `${sum}`, status: `${str}` };
};

// console.log(giftsBudget(1, 2, 3));
// console.log(giftsBudget(50, 2, 3));

let luckCheck = (diena) => {
  if (diena === 13) {
    return "Oi...";
  } else if (diena % 3 == 0) {
    return "Tokiomis dienomis kaip ši žmonės laimi loterijose";
  } else if (diena % 2 == 0) {
    return "Rami diena";
  } else {
    return "Normalu";
  }
};

// console.log(luckCheck(13));
// console.log(luckCheck(12));
// console.log(luckCheck(4));
// console.log(luckCheck(5));

let springEnergy = (e1, e2, e3) => {
  let avg = (e1 + e2 + e3) / 3;

  avg = Math.round(avg * 100) / 100;

  if (avg > 7) {
    return "Pavasarinis pakilimas!";
  } else {
    return "Laukiam saulės...";
  }
};

// console.log(springEnergy(1, 2, 3));
// console.log(springEnergy(4, 9, 9));

let cakePerPerson = (tortoSkersmeni, g1, g2, g3) => {
  let sumG = g1 + g2 + g3;

  let perZmogui = tortoSkersmeni / sumG;
  let str = "";
  if (perZmogui < 5) {
    str = "Mažoka";
  } else {
    str = "Pakankamai";
  }

  return { perZmogui: `${perZmogui}`, ivertimas: `${str}` };
};

let teaOracle = (temp, arMiegojo) => {
  if (temp < 10 && arMiegojo == false) {
    return "Karšta arbata privaloma!";
  } else if (temp > 15 && arMiegojo == true) {
    return "Gal šalta arbata?";
  } else {
    return "Arbata pagal nuotaiką.";
  }
};

let canDoNothing = (diena, padarytiDarbai) => {
  if (diena === 7 || padarytiDarbai > 5) {
    return "Gali nieko neveikti";
  } else {
    return "Dar šiek tiek padirbėk";
  }
};

// console.log(canDoNothing(7, 4));
// console.log(canDoNothing(3, 7));
// console.log(canDoNothing(8, 2));

let holidaySpirit = (s1, s2, s3, s4, s5) => {
  let sum = s1 + s2 + s3 + s4 + s5;

  let likutisIki50 = 50 - sum;

  if (sum > 40) {
    return "Šventinė dvasia čia!";
  } else if (20 <= sum && sum <= 40) {
    return "Artėjame...";
  } else {
    return "Reikia daugiau mandarinų.";
  }
};

// console.log(holidaySpirit(1, 20, 30, 4, 5));
// console.log(holidaySpirit(1, 20, 3, 4, 5));
// console.log(holidaySpirit(1, 2, 3, 4, 5));

let myHoliday = (vardas, menuo, megstamaNum) => {
  if (menuo === megstamaNum) {
    return "Mistinis sutapimas! " + vardas;
  } else if (menuo > 6) {
    return "Vasaros nuotaikos " + vardas;
  } else {
    "Pavasario vėjai " + vardas;
  }
};

let randomHoliday = () => {
  let technologine = ["Programuotoju diena", "Klaviaturos pagerbimo diena"];
  let maisto = ["Cepelinu diena", "Saltibarsciu diena"];
  let poilsio = ["Nieko neveikimo diena", "Velyvu pusryciu diena"];

  let k1 = technologine[Math.floor(Math.random() * technologine.length)];
  let k2 = maisto[Math.floor(Math.random() * maisto.length)];
  let k3 = poilsio[Math.floor(Math.random() * poilsio.length)];

  return { technologine: `${k1}`, maisto: `${k2}`, poilsio: `${k3}` };
};

// console.log(randomHoliday());
