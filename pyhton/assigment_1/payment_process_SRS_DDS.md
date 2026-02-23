# Užsakymų apdorojimo paslauga (Programos reikalavimai)

## Paskirtis

Programa skirta apdoroti užsakymų duomenis ir apskaičiuoti finansinius rodiklius. Sistema analizuoja užsakymų sąrašą, apskaičiuoja kiekvieno užsakymo subtotal sumą, taikomą nuolaidą, siuntimo kainą, mokesčius ir galutinę mokėtiną sumą. Apdorojus visus užsakymus, sistema sugeneruoja konsolinę ataskaitą.

## Įvestis

Programa gauna `orders` kintamąjį, kuris yra sąrašas su užsakymų duomenimis. Kiekvienas užsakymas pateikiamas kaip žodynas ir turi turėti `order_id`, `customer_name`, `region`, `is_vip` ir `items` laukus. `items` yra sąrašas, kuriame kiekvienas elementas yra tuple struktūros `(item_name, quantity, unit_price)`.

Jeigu užsakymas neturi `order_id` arba `items` lauko, toks užsakymas nėra apdorojamas.

## Validacija

Apdorojant užsakymą tikrinama, ar egzistuoja privalomi laukai. Jei apskaičiuota subtotal suma lygi nuliui, užsakymas laikomas negaliojančiu, jam pridedama žyma `INVALID-EMPTY` ir jis neįtraukiamas į apdorotų užsakymų rezultatus.

## Subtotal skaičiavimas

Subtotal suma apskaičiuojama iteruojant per visas prekių eilutes. Jei prekės kiekis yra mažesnis arba lygus nuliui, tokia eilutė ignoruojama. Kitais atvejais prie subtotal sumos pridedama `quantity * unit_price` reikšmė.

## Žymų tvarkymas

Apdorojimo metu užsakymui gali būti pridedamos žymos. Jei klientas turi VIP statusą, pridedama žyma `VIP`. Jei kliento regionas yra Europos Sąjunga, pridedama žyma `EU-CUSTOMER`. Žymos saugomos `tags` lauke, kuris sukuriamas apdorojimo metu.

## Nuolaidos skaičiavimas

Nuolaidos dydis priklauso nuo kliento statuso ir užsakymo subtotal sumos. VIP klientams taikoma 0.15 nuolaida. Jei subtotal suma yra didesnė arba lygi 100, papildomai taikoma 0.05 nuolaida. Galutinė nuolaidos reikšmė turi būti apribota intervale nuo 0.0 iki 0.25.

## Siuntimo kainos skaičiavimas

Siuntimo kaina priklauso nuo kliento regiono. Europos Sąjungos regionui taikoma 7.0 kaina, Jungtinėms Valstijoms 10.0, Jungtinei Karalystei 9.0, kitiems regionams 12.0. Jei subtotal suma yra didesnė arba lygi 200, siuntimo kaina turi būti lygi 0.0 nepriklausomai nuo regiono.

## Mokesčių skaičiavimas

Mokesčių tarifas nustatomas pagal regioną. Europos Sąjungai taikomas 0.21 tarifas, Jungtinėms Valstijoms 0.07, Jungtinei Karalystei 0.20, kitiems regionams 0.10.

## Galutinės sumos skaičiavimas

Galutinė suma apskaičiuojama etapais. Pirma apskaičiuojama suma po nuolaidos, tada pritaikomas mokesčių tarifas ir galiausiai pridedama siuntimo kaina. Galutinė reikšmė saugoma `total_amount` lauke.

## Išvestis

Programa išveda apdorotų užsakymų skaičių, pradinį užsakymų skaičių, peržiūrėtų prekių eilučių skaičių, bendrą visų apdorotų užsakymų sumą, užsakymų skaičių pagal regioną, tris didžiausios vertės užsakymus pagal galutinę sumą ir aukštos vertės užsakymų skaičių, kurių galutinė suma yra didesnė arba lygi 500.

## Duomenų struktūros

Įvesties užsakymas yra pateikiamas kaip žodynas su `order_id`, `customer_name`, `region`, `is_vip`, `items` ir apdorojimo metu sukuriamu `tags` lauku.

Apdorotas užsakymas yra pateikiamas kaip žodynas su `order_id`, `customer_name`, `region`, `subtotal_amount`, `discount_rate`, `shipping_cost`, `tax_rate`, `total_amount` ir `tags`.

## Funkcijos

Sistema turi atskiras funkcijas subtotal sumos skaičiavimui, siuntimo kainos nustatymui, mokesčių tarifo parinkimui pagal regioną, nuolaidos reikšmės ribojimui, žymų pridėjimui prie užsakymo, apdoroto užsakymo sukūrimui, visų užsakymų apdorojimui, užsakymų skaičiavimui pagal lauką ir didžiausios vertės užsakymų atrinkimui.

## Programos eiga

Programa nuosekliai apdoroja visus pateiktus užsakymus, kaupia analitinius duomenis ir galiausiai sugeneruoja konsolinę ataskaitą.