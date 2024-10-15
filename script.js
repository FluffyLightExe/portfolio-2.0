document.addEventListener('DOMContentLoaded', () => {
    const items = {
        'Rowery':
        {
            'Miejskie':
            [
                { name: 'Rower Miejski 1', price: '1200 PLN', features: ['Lekka rama', '7 biegów', 'Koszyk na zakupy', 'Oświetlenie LED', 'Amortyzacja'] },
                { name: 'Rower Miejski 2', price: '1500 PLN', features: ['Amortyzacja', '8 biegów', 'Dynamo w piaście', 'Błotniki', 'Bagażnik'] },
                { name: 'Rower Miejski 3', price: '1300 PLN', features: ['Stalowa rama', '6 biegów', 'Koszyk na zakupy', 'Oświetlenie LED', 'Błotniki'] },
                { name: 'Rower Miejski 4', price: '1400 PLN', features: ['Aluminiowa rama', '9 biegów', 'Koszyk na zakupy', 'Oświetlenie LED', 'Amortyzacja'] }
            ],
            'Trekkingowe':
            [
                { name: 'Rower Trekkingowy 1', price: '2000 PLN', features: ['Aluminiowa rama', 'Hydrauliczne hamulce', 'Bagażnik', 'Oświetlenie LED', 'Amortyzacja'] },
                { name: 'Rower Trekkingowy 2', price: '2500 PLN', features: ['Karbonowa rama', '11 biegów', 'Oświetlenie LED', 'Błotniki', 'Bagażnik'] },
                { name: 'Rower Trekkingowy 3', price: '2200 PLN', features: ['Stalowa rama', '10 biegów', 'Hydrauliczne hamulce', 'Oświetlenie LED', 'Amortyzacja'] },
                { name: 'Rower Trekkingowy 4', price: '2700 PLN', features: ['Aluminiowa rama', '12 biegów', 'Bagażnik', 'Oświetlenie LED', 'Amortyzacja'] }
            ],
            'MTB (Górskie)':
            [
                { name: 'Rower Górski 1', price: '3000 PLN', features: ['Karbonowa rama', '21 biegów', 'Hydrauliczne hamulce', 'Amortyzacja', 'Opony terenowe'] },
                { name: 'Rower Górski 2', price: '3500 PLN', features: ['Aluminiowa rama', '24 biegi', 'Hydrauliczne hamulce', 'Amortyzacja', 'Opony terenowe'] },
                { name: 'Rower Górski 3', price: '3200 PLN', features: ['Stalowa rama', '18 biegów', 'Hydrauliczne hamulce', 'Amortyzacja', 'Opony terenowe'] },
                { name: 'Rower Górski 4', price: '3700 PLN', features: ['Karbonowa rama', '27 biegów', 'Hydrauliczne hamulce', 'Amortyzacja', 'Opony terenowe'] }
            ],
            'Szosowe':
            [
                { name: 'Rower Szosowy 1', price: '4000 PLN', features: ['Karbonowa rama', '22 biegi', 'Hamulce tarczowe', 'Opony szosowe', 'Lekka konstrukcja'] },
                { name: 'Rower Szosowy 2', price: '4500 PLN', features: ['Aluminiowa rama', '20 biegów', 'Hamulce tarczowe', 'Opony szosowe', 'Aerodynamiczna konstrukcja'] },
                { name: 'Rower Szosowy 3', price: '4200 PLN', features: ['Stalowa rama', '18 biegów', 'Hamulce tarczowe', 'Opony szosowe', 'Lekka konstrukcja'] },
                { name: 'Rower Szosowy 4', price: '4700 PLN', features: ['Karbonowa rama', '24 biegi', 'Hamulce tarczowe', 'Opony szosowe', 'Aerodynamiczna konstrukcja'] }
            ],
            'Crossowe':
            [
                { name: 'Rower Crossowy 1', price: '2800 PLN', features: ['Aluminiowa rama', '18 biegów', 'Hamulce tarczowe', 'Opony crossowe', 'Amortyzacja'] },
                { name: 'Rower Crossowy 2', price: '3000 PLN', features: ['Karbonowa rama', '20 biegów', 'Hamulce tarczowe', 'Opony crossowe', 'Amortyzacja'] },
                { name: 'Rower Crossowy 3', price: '2900 PLN', features: ['Stalowa rama', '16 biegów', 'Hamulce tarczowe', 'Opony crossowe', 'Amortyzacja'] },
                { name: 'Rower Crossowy 4', price: '3100 PLN', features: ['Aluminiowa rama', '22 biegi', 'Hamulce tarczowe', 'Opony crossowe', 'Amortyzacja'] }
            ],
            'BMX':
            [
                { name: 'Rower BMX 1', price: '1500 PLN', features: ['Stalowa rama', '1 bieg', 'Hamulce U-brake', 'Opony BMX', 'Pegi'] },
                { name: 'Rower BMX 2', price: '1700 PLN', features: ['Aluminiowa rama', '1 bieg', 'Hamulce U-brake', 'Opony BMX', 'Pegi'] },
                { name: 'Rower BMX 3', price: '1600 PLN', features: ['Karbonowa rama', '1 bieg', 'Hamulce U-brake', 'Opony BMX', 'Pegi'] },
                { name: 'Rower BMX 4', price: '1800 PLN', features: ['Stalowa rama', '1 bieg', 'Hamulce U-brake', 'Opony BMX', 'Pegi'] }
            ]
        },
        'Hulajnogi':
        {
            'Rekreacyjne':
            [
                { name: 'Hulajnoga Rekreacyjna 1', price: '300 PLN', features: ['Składana', 'Koła 200mm', 'Łożyska ABEC-7', 'Regulowana wysokość', 'Antypoślizgowy podest'] },
                { name: 'Hulajnoga Rekreacyjna 2', price: '450 PLN', features: ['Amortyzacja', 'Regulowana wysokość', 'Antypoślizgowy podest', 'Składana', 'Koła 200mm'] },
                { name: 'Hulajnoga Rekreacyjna 3', price: '350 PLN', features: ['Składana', 'Koła 180mm', 'Łożyska ABEC-5', 'Regulowana wysokość', 'Antypoślizgowy podest'] },
                { name: 'Hulajnoga Rekreacyjna 4', price: '400 PLN', features: ['Amortyzacja', 'Regulowana wysokość', 'Antypoślizgowy podest', 'Składana', 'Koła 210mm'] }
            ],
            'Wyczynowe':
            [
                { name: 'Hulajnoga Wyczynowa 1', price: '600 PLN', features: ['Aluminiowa rama', 'Koła 110mm', 'Łożyska ABEC-9', 'Wzmocniona kierownica', 'Antypoślizgowy podest'] },
                { name: 'Hulajnoga Wyczynowa 2', price: '750 PLN', features: ['Stalowa rama', 'Koła 120mm', 'Łożyska ABEC-9', 'Wzmocniona kierownica', 'Antypoślizgowy podest'] },
                { name: 'Hulajnoga Wyczynowa 3', price: '700 PLN', features: ['Aluminiowa rama', 'Koła 100mm', 'Łożyska ABEC-7', 'Wzmocniona kierownica', 'Antypoślizgowy podest'] },
                { name: 'Hulajnoga Wyczynowa 4', price: '800 PLN', features: ['Karbonowa rama', 'Koła 110mm', 'Łożyska ABEC-9', 'Wzmocniona kierownica', 'Antypoślizgowy podest'] }
            ],
            'Transportowe':
            [
                { name: 'Hulajnoga Transportowa 1', price: '500 PLN', features: ['Składana', 'Koła 200mm', 'Łożyska ABEC-7', 'Regulowana wysokość', 'Bagażnik'] },
                { name: 'Hulajnoga Transportowa 2', price: '650 PLN', features: ['Amortyzacja', 'Koła 210mm', 'Łożyska ABEC-9', 'Regulowana wysokość', 'Bagażnik'] },
                { name: 'Hulajnoga Transportowa 3', price: '550 PLN', features: ['Składana', 'Koła 180mm', 'Łożyska ABEC-5', 'Regulowana wysokość', 'Bagażnik'] },
                { name: 'Hulajnoga Transportowa 4', price: '700 PLN', features: ['Amortyzacja', 'Koła 220mm', 'Łożyska ABEC-9', 'Regulowana wysokość', 'Bagażnik'] }
            ]
        },
        'Rolki':
        {
            'Rekreacyjne':
            [
                { name: 'Rolki Rekreacyjne 1', price: '400 PLN', features: ['Aluminiowa szyna', 'Łożyska ABEC-7', 'Kółka 80mm', 'Regulowany rozmiar', 'Wentylowana skorupa'] },
                { name: 'Rolki Rekreacyjne 2', price: '450 PLN', features: ['Stalowa szyna', 'Łożyska ABEC-5', 'Kółka 76mm', 'Regulowany rozmiar', 'Wentylowana skorupa'] },
                { name: 'Rolki Rekreacyjne 3', price: '500 PLN', features: ['Karbonowa szyna', 'Łożyska ABEC-9', 'Kółka 84mm', 'Regulowany rozmiar', 'Wentylowana skorupa'] },
                { name: 'Rolki Rekreacyjne 4', price: '550 PLN', features: ['Aluminiowa szyna', 'Łożyska ABEC-7', 'Kółka 80mm', 'Regulowany rozmiar', 'Wentylowana skorupa'] }
            ],
            'Fitnessowe':
            [
                { name: 'Rolki Fitnessowe 1', price: '600 PLN', features: ['Aluminiowa szyna', 'Łożyska ABEC-9', 'Kółka 90mm', 'Regulowany rozmiar', 'Wentylowana skorupa'] },
                { name: 'Rolki Fitnessowe 2', price: '650 PLN', features: ['Karbonowa szyna', 'Łożyska ABEC-11', 'Kółka 100mm', 'Regulowany rozmiar', 'Wentylowana skorupa'] },
                { name: 'Rolki Fitnessowe 3', price: '700 PLN', features: ['Stalowa szyna', 'Łożyska ABEC-7', 'Kółka 88mm', 'Regulowany rozmiar', 'Wentylowana skorupa'] },
                { name: 'Rolki Fitnessowe 4', price: '750 PLN', features: ['Aluminiowa szyna', 'Łożyska ABEC-9', 'Kółka 90mm', 'Regulowany rozmiar', 'Wentylowana skorupa'] }
            ],
            'Hokejowe':
            [
                { name: 'Rolki Hokejowe 1', price: '800 PLN', features: ['Stalowa szyna', 'Łożyska ABEC-9', 'Kółka 76mm', 'Wzmocniona skorupa', 'Regulowany rozmiar'] },
                { name: 'Rolki Hokejowe 2', price: '850 PLN', features: ['Aluminiowa szyna', 'Łożyska ABEC-11', 'Kółka 80mm', 'Wzmocniona skorupa', 'Regulowany rozmiar'] },
                { name: 'Rolki Hokejowe 3', price: '900 PLN', features: ['Karbonowa szyna', 'Łożyska ABEC-9', 'Kółka 78mm', 'Wzmocniona skorupa', 'Regulowany rozmiar'] },
                { name: 'Rolki Hokejowe 4', price: '950 PLN', features: ['Stalowa szyna', 'Łożyska ABEC-11', 'Kółka 82mm', 'Wzmocniona skorupa', 'Regulowany rozmiar'] }
            ],
            'Agresywne (Wyczynowe)':
            [
                { name: 'Rolki Agresywne 1', price: '1000 PLN', features: ['Stalowa szyna', 'Łożyska ABEC-9', 'Kółka 60mm', 'Wzmocniona skorupa', 'Regulowany rozmiar'] },
                { name: 'Rolki Agresywne 2', price: '1050 PLN', features: ['Aluminiowa szyna', 'Łożyska ABEC-11', 'Kółka 62mm', 'Wzmocniona skorupa', 'Regulowany rozmiar'] },
                { name: 'Rolki Agresywne 3', price: '1100 PLN', features: ['Karbonowa szyna', 'Łożyska ABEC-9', 'Kółka 64mm', 'Wzmocniona skorupa', 'Regulowany rozmiar'] },
                { name: 'Rolki Agresywne 4', price: '1150 PLN', features: ['Stalowa szyna', 'Łożyska ABEC-11', 'Kółka 66mm', 'Wzmocniona skorupa', 'Regulowany rozmiar'] }
            ],
            'Do szybkiej jazdy':
            [
                { name: 'Rolki do szybkiej jazdy 1', price: '1300 PLN', features: ['Karbonowa szyna', 'Łożyska ABEC-11', 'Kółka 110mm', 'Wentylowana skorupa', 'Regulowany rozmiar'] },
                { name: 'Rolki do szybkiej jazdy 2', price: '1350 PLN', features: ['Aluminiowa szyna', 'Łożyska ABEC-9', 'Kółka 100mm', 'Wentylowana skorupa', 'Regulowany rozmiar'] },
                { name: 'Rolki do szybkiej jazdy 3', price: '1400 PLN', features: ['Stalowa szyna', 'Łożyska ABEC-11', 'Kółka 105mm', 'Wentylowana skorupa', 'Regulowany rozmiar'] },
                { name: 'Rolki do szybkiej jazdy 4', price: '1450 PLN', features: ['Karbonowa szyna', 'Łożyska ABEC-9', 'Kółka 110mm', 'Wentylowana skorupa', 'Regulowany rozmiar'] }
            ]
        },
        'Deskorolki':
        {
            'Uliczne (Street)':
            [
                { name: 'Deskorolka Uliczna 1', price: '300 PLN', features: ['7-warstwowy blat', 'Łożyska ABEC-7', 'Kółka 52mm', 'Grip tape', 'Trucki aluminiowe'] },
                { name: 'Deskorolka Uliczna 2', price: '350 PLN', features: ['8-warstwowy blat', 'Łożyska ABEC-9', 'Kółka 54mm', 'Grip tape', 'Trucki stalowe'] },
                { name: 'Deskorolka Uliczna 3', price: '320 PLN', features: ['7-warstwowy blat', 'Łożyska ABEC-5', 'Kółka 50mm', 'Grip tape', 'Trucki aluminiowe'] },
                { name: 'Deskorolka Uliczna 4', price: '370 PLN', features: ['8-warstwowy blat', 'Łożyska ABEC-11', 'Kółka 56mm', 'Grip tape', 'Trucki stalowe'] }
            ],
            'Wyczynowe (Park)':
            [
                { name: 'Deskorolka Wyczynowa 1', price: '500 PLN', features: ['9-warstwowy blat', 'Łożyska ABEC-11', 'Kółka 58mm', 'Grip tape', 'Trucki karbonowe'] },
                { name: 'Deskorolka Wyczynowa 2', price: '550 PLN', features: ['10-warstwowy blat', 'Łożyska ABEC-9', 'Kółka 60mm', 'Grip tape', 'Trucki aluminiowe'] },
                { name: 'Deskorolka Wyczynowa 3', price: '520 PLN', features: ['9-warstwowy blat', 'Łożyska ABEC-7', 'Kółka 55mm', 'Grip tape', 'Trucki stalowe'] },
                { name: 'Deskorolka Wyczynowa 4', price: '570 PLN', features: ['10-warstwowy blat', 'Łożyska ABEC-11', 'Kółka 62mm', 'Grip tape', 'Trucki karbonowe'] }
            ]
        },
        'Łyżwy':
        {
            'Figurowe':
            [
                { name: 'Łyżwy Figurowe 1', price: '400 PLN', features: ['Skórzany but', 'Łożyska ABEC-7', 'Płoza ze stali nierdzewnej', 'Wzmocniona kostka', 'Ząbki na czubku'] },
                { name: 'Łyżwy Figurowe 2', price: '450 PLN', features: ['Syntetyczny but', 'Łożyska ABEC-9', 'Płoza karbonowa', 'Wzmocniona kostka', 'Ząbki na czubku'] },
                { name: 'Łyżwy Figurowe 3', price: '500 PLN', features: ['Skórzany but', 'Łożyska ABEC-5', 'Płoza ze stali nierdzewnej', 'Wzmocniona kostka', 'Ząbki na czubku'] },
                { name: 'Łyżwy Figurowe 4', price: '550 PLN', features: ['Syntetyczny but', 'Łożyska ABEC-11', 'Płoza karbonowa', 'Wzmocniona kostka', 'Ząbki na czubku'] }
            ],
            'Hokejowe':
            [
                { name: 'Łyżwy Hokejowe 1', price: '600 PLN', features: ['Skórzany but', 'Łożyska ABEC-9', 'Płoza ze stali nierdzewnej', 'Wzmocniona kostka', 'Ochrona palców'] },
                { name: 'Łyżwy Hokejowe 2', price: '650 PLN', features: ['Syntetyczny but', 'Łożyska ABEC-11', 'Płoza karbonowa', 'Wzmocniona kostka', 'Ochrona palców'] },
                { name: 'Łyżwy Hokejowe 3', price: '700 PLN', features: ['Skórzany but', 'Łożyska ABEC-7', 'Płoza ze stali nierdzewnej', 'Wzmocniona kostka', 'Ochrona palców'] },
                { name: 'Łyżwy Hokejowe 4', price: '750 PLN', features: ['Syntetyczny but', 'Łożyska ABEC-9', 'Płoza karbonowa', 'Wzmocniona kostka', 'Ochrona palców'] }
            ],
            'Turystyczne':
            [
                { name: 'Łyżwy Turystyczne 1', price: '500 PLN', features: ['Skórzany but', 'Łożyska ABEC-7', 'Płoza ze stali nierdzewnej', 'Wzmocniona kostka', 'Regulowany rozmiar'] },
                { name: 'Łyżwy Turystyczne 2', price: '550 PLN', features: ['Syntetyczny but', 'Łożyska ABEC-9', 'Płoza karbonowa', 'Wzmocniona kostka', 'Regulowany rozmiar'] },
                { name: 'Łyżwy Turystyczne 3', price: '600 PLN', features: ['Skórzany but', 'Łożyska ABEC-5', 'Płoza ze stali nierdzewnej', 'Wzmocniona kostka', 'Regulowany rozmiar'] },
                { name: 'Łyżwy Turystyczne 4', price: '650 PLN', features: ['Syntetyczny but', 'Łożyska ABEC-11', 'Płoza karbonowa', 'Wzmocniona kostka', 'Regulowany rozmiar'] }
            ]
        },
        'Akcesoria':
        {
            'Kaski':
            [
                { name: 'Kask Rowerowy 1', price: '200 PLN', features: ['Lekki', 'Wentylacja', 'Regulowany rozmiar', 'Odblaskowe elementy', 'Wzmocniona konstrukcja'] },
                { name: 'Kask Rowerowy 2', price: '250 PLN', features: ['Aerodynamiczny', 'Wentylacja', 'Regulowany rozmiar', 'Odblaskowe elementy', 'Wzmocniona konstrukcja'] },
                { name: 'Kask Rowerowy 3', price: '220 PLN', features: ['Lekki', 'Wentylacja', 'Regulowany rozmiar', 'Odblaskowe elementy', 'Wzmocniona konstrukcja'] },
                { name: 'Kask Rowerowy 4', price: '270 PLN', features: ['Aerodynamiczny', 'Wentylacja', 'Regulowany rozmiar', 'Odblaskowe elementy', 'Wzmocniona konstrukcja'] }
            ],
            'Ochraniacze':
            [
                { name: 'Ochraniacze na Kolana 1', price: '100 PLN', features: ['Ergonomiczne', 'Oddychające', 'Regulowane paski', 'Wzmocniona ochrona', 'Lekka konstrukcja'] },
                { name: 'Ochraniacze na Kolana 2', price: '120 PLN', features: ['Ergonomiczne', 'Oddychające', 'Regulowane paski', 'Wzmocniona ochrona', 'Lekka konstrukcja'] },
                { name: 'Ochraniacze na Kolana 3', price: '110 PLN', features: ['Ergonomiczne', 'Oddychające', 'Regulowane paski', 'Wzmocniona ochrona', 'Lekka konstrukcja'] },
                { name: 'Ochraniacze na Kolana 4', price: '130 PLN', features: ['Ergonomiczne', 'Oddychające', 'Regulowane paski', 'Wzmocniona ochrona', 'Lekka konstrukcja'] }
            ],
            'Plecaki':
            [
                { name: 'Plecak Sportowy 1', price: '150 PLN', features: ['Wodoodporny', 'Pojemność 20L', 'Wyściełane szelki', 'Kieszeń na laptopa', 'Odblaskowe elementy'] },
                { name: 'Plecak Sportowy 2', price: '180 PLN', features: ['Wodoodporny', 'Pojemność 25L', 'Wyściełane szelki', 'Kieszeń na laptopa', 'Odblaskowe elementy'] },
                { name: 'Plecak Sportowy 3', price: '160 PLN', features: ['Wodoodporny', 'Pojemność 22L', 'Wyściełane szelki', 'Kieszeń na laptopa', 'Odblaskowe elementy'] },
                { name: 'Plecak Sportowy 4', price: '200 PLN', features: ['Wodoodporny', 'Pojemność 30L', 'Wyściełane szelki', 'Kieszeń na laptopa', 'Odblaskowe elementy'] }
            ]
        }
    };

    const subnavElements = document.querySelectorAll('.subnav');
    const mainSection = document.querySelector('main');

    subnavElements.forEach(subnav => {
        subnav.addEventListener('click', () => {
            const category = subnav.closest('.nav_dropdown').querySelector('.category').textContent;
            const subcategory = subnav.textContent;
            const selectedItems = items[category][subcategory];

            mainSection.innerHTML = ''; // Wyczyść sekcję main

            if (selectedItems) {
                selectedItems.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('item');

                    const itemName = document.createElement('h3');
                    itemName.textContent = item.name;
                    itemDiv.appendChild(itemName);

                    const itemPrice = document.createElement('p');
                    itemPrice.textContent = `Cena: ${item.price}`;
                    itemDiv.appendChild(itemPrice);

                    const itemFeatures = document.createElement('ul');
                    item.features.forEach(feature => {
                        const featureLi = document.createElement('li');
                        featureLi.textContent = feature;
                        itemFeatures.appendChild(featureLi);
                    });
                    itemDiv.appendChild(itemFeatures);

                    mainSection.appendChild(itemDiv);
                });
            } else {
                mainSection.textContent = 'Brak dostępnych przedmiotów w tej podkategorii.';
            }
        });
    });
});

const items = {
    'Akcesoria': {
        
    }
};
