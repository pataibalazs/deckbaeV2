export const products = {
  modena: {
    name: "Modena",
    basePrice: 13959000,
    price: "Bruttó: 13.959.000-től",
    rating: 5,
    images: [
      {
        id: 1,
        name: "Modena",
        src: "/pictures/garages/modena/haz1.png",
        alt: "Modena prémium garázs – modern könnyűszerkezetes autóbeálló tégla vagy kő burkolattal",
      },
      {
        id: 2,
        name: "Modena",
        src: "/pictures/garages/modena/haz2.png",
        alt: "Modena prémium garázs – modern könnyűszerkezetes autóbeálló tégla vagy kő burkolattal",
      },
      {
        id: 3,
        name: "Modena",
        src: "/pictures/garages/modena/haz3.png",
        alt: "Modena prémium garázs – modern könnyűszerkezetes autóbeálló tégla vagy kő burkolattal",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    ],
    description: `
        <p>A Modena prémium garázsmegoldásként ötvözi a funkcionalitást és az esztétikát. Autóbeállóként és garázsként is használható, külső falburkolata választható tégla vagy kő, míg a faburkolat igény esetén James Hardie elemekkel is kérhető. A teljes elektromos rendszerrel és világítással felszerelt garázs tökéletes választás a modern igényekhez.</p>
      `,
    details: [
      {
        name: "Jellemzők",
        items: [
          "Autóbeálló: 4m x 7m",
          "Garázs: 7m x 4,6m",
          "Külső tégla vagy opcionális kő falburkolat",
          "Beton alap sáv alapozással",
          "Festett faburkolat vagy opcionális James Hardie burkolat",
          "Komplett világítás és elektromos rendszer",
        ],
      },
    ],
    extras: [
      {
        id: "modena-extra-1",
        name: "Kő falburkolat",
        description: "Külső falra prémium kőburkolat tégla helyett",
        price: 1450000,
      },
      {
        id: "modena-extra-2",
        name: "James Hardie burkolat",
        description: "Időjárásálló James Hardie burkolat a fa helyett",
        price: 1250000,
      },
      {
        id: "modena-extra-3",
        name: "Automata garázskapu",
        description: "Távirányítható automata garázskapu",
        price: 850000,
      },
      {
        id: "modena-extra-4",
        name: "Prémium világítás csomag",
        description: "LED spotlámpák és kültéri fényforrások",
        price: 380000,
      },
      {
        id: "modena-extra-5",
        name: "Szigetelés csomag",
        description: "Fal és tető teljes hőszigetelése",
        price: 950000,
      },
    ],
  },

  munich: {
    name: "Munich",
    basePrice: 9759000,
    price: "Bruttó: 9.759.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Munich",
        src: "/pictures/garages/munich/haz1.png",
        alt: "Munich garázs – tárolós modern könnyűszerkezetes autóbeálló",
      },
      {
        id: 2,
        name: "Munich",
        src: "/pictures/garages/munich/haz2.png",
        alt: "Munich garázs – tárolós modern könnyűszerkezetes autóbeálló",
      },
      {
        id: 3,
        name: "Munich",
        src: "/pictures/garages/munich/haz3.png",
        alt: "Munich garázs – tárolós modern könnyűszerkezetes autóbeálló",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    ],
    description: `
        <p>A Munich autóbeálló modern megjelenésével és praktikus kialakításával tökéletes választás mindennapi használatra. Tárolóval kombinálva extra helyet kínál, és teljesen felszerelhető elektromos rendszerrel. A burkolatok és alapozás kialakítása magas szintű tartósságot biztosít.</p>
      `,
    details: [
      {
        name: "Jellemzők",
        items: [
          "Autóbeálló: 7m x 4m",
          "Tároló: 7m x 2,1m",
          "Külső tégla vagy opcionális kő falburkolat",
          "Beton alap, sáv alapozással",
          "Festett faburkolat vagy opcionális James Hardie burkolat",
          "Komplett világítás és elektromos rendszer",
        ],
      },
    ],
    extras: [
      {
        id: "munich-extra-1",
        name: "Kő falburkolat",
        description: "Külső falra prémium kőburkolat tégla helyett",
        price: 1200000,
      },
      {
        id: "munich-extra-2",
        name: "James Hardie burkolat",
        description: "Időjárásálló James Hardie burkolat a fa helyett",
        price: 980000,
      },
      {
        id: "munich-extra-3",
        name: "Kiegészítő tároló",
        description: "Bővített méretű tároló helyiség",
        price: 1350000,
      },
      {
        id: "munich-extra-4",
        name: "LED világítás rendszer",
        description: "Energiatakarékos LED világítás a teljes területen",
        price: 320000,
      },
      {
        id: "munich-extra-5",
        name: "Elektromos csatlakozók",
        description: "Kiegészítő elektromos csatlakozók, kültéri is",
        price: 280000,
      },
    ],
  },

  tihany: {
    name: "Tihany",
    basePrice: 11259000,
    price: "Bruttó: 11.259.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Tihany",
        src: "/pictures/garages/tihany/haz1.png",
        alt: "Tihany garázs – nemes vakolatú, szigetelhető könnyűszerkezetes autóbeálló",
      },
      {
        id: 2,
        name: "Tihany",
        src: "/pictures/garages/tihany/haz2.png",
        alt: "Tihany garázs – nemes vakolatú, szigetelhető könnyűszerkezetes autóbeálló",
      },
      {
        id: 3,
        name: "Tihany",
        src: "/pictures/garages/tihany/haz3.png",
        alt: "Tihany garázs – nemes vakolatú, szigetelhető könnyűszerkezetes autóbeálló",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    ],
    description: `
        <p>A Tihany autóbeálló nemes vakolatú külső falával és letisztult dizájnjával elegáns megjelenést biztosít. Beton alapra épül, kérhető járólap burkolattal, és akár szigetelt helységként is kialakítható.</p>
      `,
    details: [
      {
        name: "Jellemzők",
        items: [
          "Nemes vakolatú külső fal",
          "Beton alap, sáv alapozással",
          "Opcionális járólap burkolat",
          "Akár szigetelt helységként is kérhető",
        ],
      },
    ],
    extras: [
      {
        id: "tihany-extra-1",
        name: "Járólap burkolat",
        description: "Prémium kültéri járólap burkolat",
        price: 850000,
      },
      {
        id: "tihany-extra-2",
        name: "Szigetelés csomag",
        description: "Teljes hőszigetelés, szigetelt helységgé alakítás",
        price: 1150000,
      },
      {
        id: "tihany-extra-3",
        name: "Fűtési rendszer",
        description: "Elektromos padlófűtés a szigetelt helyiségben",
        price: 750000,
      },
      {
        id: "tihany-extra-4",
        name: "Tetőszigetelés",
        description: "Extra tetőszigetelés csapadék és hő ellen",
        price: 680000,
      },
      {
        id: "tihany-extra-5",
        name: "Prémium nyílászárók",
        description: "Szigetelt, hangszigetelt nyílászárók",
        price: 950000,
      },
    ],
  },

  toronto: {
    name: "Toronto",
    basePrice: 6755000,
    price: "Bruttó: 6.755.000-től",
    rating: 5,
    images: [
      {
        id: 1,
        name: "Toronto",
        src: "/pictures/garages/toronto/haz1.png",
        alt: "Toronto garázs – masszív, LED világítással és napelemes tetővel ellátott könnyűszerkezetes autóbeálló",
      },
      {
        id: 2,
        name: "Toronto",
        src: "/pictures/garages/toronto/haz2.png",
        alt: "Toronto garázs – masszív, LED világítással és napelemes tetővel ellátott könnyűszerkezetes autóbeálló",
      },
      {
        id: 3,
        name: "Toronto",
        src: "/pictures/garages/toronto/haz3.png",
        alt: "Toronto garázs – masszív, LED világítással és napelemes tetővel ellátott könnyűszerkezetes autóbeálló",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    ],
    description: `
        <p>A Toronto autóbeálló modern, masszív kivitelű, LED-világítással és akár napelemes tetőszerkezettel is rendelhető. Strapabíró oszlopszerkezete biztosítja a hosszú élettartamot, míg az alapozás és méretezés révén ideális választás nagyobb járművek számára is.</p>
      `,
    details: [
      {
        name: "Jellemzők",
        items: [
          "Méret: 6,1m x 6,7m",
          "Autóbeálló beton alapozással",
          "15x15-oszlopok, 30x15 gerendák",
          "Opcionális LED-világítás",
          "Napelemmel is telepíthető tetőszerkezet",
        ],
      },
    ],
    extras: [
      {
        id: "toronto-extra-1",
        name: "LED világítás rendszer",
        description: "Teljes LED világítás az autóbeálló területén",
        price: 290000,
      },
      {
        id: "toronto-extra-2",
        name: "Napelemes tetőszerkezet",
        description: "1,5 kW teljesítményű napelem rendszer a tetőn",
        price: 1750000,
      },
      {
        id: "toronto-extra-3",
        name: "Nagyobb méretű változat",
        description: "Kibővített méret: 7m x 7m",
        price: 1250000,
      },
      {
        id: "toronto-extra-4",
        name: "Zárható tároló",
        description: "Oldalsó zárható tárolórész",
        price: 950000,
      },
      {
        id: "toronto-extra-5",
        name: "Prémium burkolat",
        description: "Időjárásálló, prémium külső burkolat",
        price: 580000,
      },
    ],
  },
};
