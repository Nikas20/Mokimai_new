# 2 užduotis Mokėjimų apdorojimo paslauga (OOP)

## Paskirtis

Programa skirta apdoroti mokėjimus už užsakymus. Sistema priima mokėjimo užklausą, pritaiko nuolaidas, regiono mokesčius ir mokėjimo metodo mokesčius, suformuoja kvitą ir išveda rezultatą į konsolę. Sprendimas turi būti realizuotas naudojant objektinį programavimą ir pagrindinius OOP principus.

## Įvestis

Programa apdoroja mokėjimo užklausas, kurios turi šiuos laukus: `payment_id`, `amount`, `currency`, `region`, `method`, `is_vip`. `payment_id` yra identifikatorius, `amount` yra bazinė suma, `currency` yra valiuta, `region` yra regionas mokesčiams parinkti, `method` yra mokėjimo metodas, `is_vip` nurodo ar klientas yra VIP.

## Validacija

Jeigu trūksta `payment_id` arba `amount`, užklausa turi būti atmesta. Jeigu `amount` yra mažesnė arba lygi nuliui, užklausa turi būti atmesta. Atmesta užklausa turi grąžinti kvitą su `status` reikšme `REJECTED` ir paaiškinimu `notes` lauke.

## Regiono mokesčiai

Mokesčių tarifas parenkamas pagal regioną. EU regionui taikomas 0.21 tarifas. US regionui taikomas 0.07 tarifas. UK regionui taikomas 0.20 tarifas. Kitiems regionams taikomas 0.10 tarifas.

## Nuolaida

VIP nuolaida taikoma tik jei `is_vip` yra `True` ir `amount` yra didesnė arba lygi 100. VIP nuolaida yra 0.05. Bendra nuolaida negali viršyti 0.10. Jei sąlygos netenkinamos, nuolaida lygi 0.0.

## Mokėjimo metodo mokesčiai

Mokėjimo metodo mokestis priklauso nuo pasirinkto metodo. CARD metodas turi 2 procentų mokestį nuo sumos ir papildomą 0.30 fiksuotą mokestį. PAYPAL metodas turi 3 procentų mokestį nuo sumos ir papildomą 0.35 fiksuotą mokestį. BANK metodas neturi procentinio ar fiksuoto mokesčio.

Jeigu valiuta nėra EUR arba USD, papildomai pridedamas 1 procento valiutos konvertavimo mokestis nuo sumos.

## Galutinės sumos skaičiavimas

Galutinė suma skaičiuojama etapais. Pirma apskaičiuojama suma po nuolaidos. Tada pritaikomas regiono mokesčių tarifas. Galiausiai pridedamas mokėjimo metodo mokestis. Rezultatas apvalinamas iki 2 skaičių po kablelio.

Skaičiavimo seka yra tokia: `discounted_amount = amount * (1 - discount_rate)`, `taxed_amount = discounted_amount * (1 + tax_rate)`, `total_amount = taxed_amount + method_fee`.

## Išvestis

Programa turi suformuoti kvitą, kuriame yra `payment_id`, `status`, `base_amount`, `discount_rate`, `tax_rate`, `method_fee`, `total_amount` ir `notes`. Programa turi pademonstruoti bent tris skirtingas mokėjimo užklausas su skirtingais regionais ir metodais, ir atspausdinti kvitus į konsolę.

## OOP reikalavimai

Sprendime turi būti naudojamas paveldėjimas ir polimorfizmas. Turi būti bazinė klasė `PaymentMethod`, kuri apibrėžia bendrą mokėjimo metodo sąsają ir metodą mokesčiui apskaičiuoti. Turi būti bent trys konkrečios klasės, kurios realizuoja skirtingus mokėjimo metodus ir paveldi `PaymentMethod`, pavyzdžiui `CardPayment`, `PaypalPayment` ir `BankTransferPayment`.

Turi būti atskira klasė ar modulis mokesčių logikai, kuri pagal regioną parenka mokesčių tarifą. Turi būti atskira klasė ar modulis nuolaidų logikai, kuri pagal VIP statusą ir sumą parenka nuolaidos tarifą.

Turi būti klasė `PaymentService`, kuri koordinuoja visą apdorojimo procesą. `PaymentService` neturi turėti logikos tipo `if method == "CARD"` ar panašios. Mokėjimo metodų parinkimas turi būti realizuotas per polimorfizmą, naudojant `PaymentMethod` objektus arba atskirą `PaymentMethodFactory`.

## Struktūros reikalavimai

Projektas turi būti suskirstytas į modulius. Rekomenduojama turėti bent šiuos failus `main.py`, `domain.py`, `methods.py`, `policies.py` ir `service.py`. Kiekvienas failas turi turėti aiškią atsakomybę, o kodas neturi būti sukoncentruotas viename faile.

## Pateikimas

Studentas pateikia visą projektą su modulių struktūra ir veikiančiu paleidimu. Paleidus `main.py`, turi būti matoma bent trijų mokėjimų demonstracija ir atspausdinti kvitai. Kode turi būti aiškiai matomos OOP konstrukcijos ir logikos išskaidymas pagal atsakomybes.
