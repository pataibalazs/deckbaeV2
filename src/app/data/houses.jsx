// data/products.js
export const products = {
  "santa-cruz": {
    name: "Santa Cruz - 56m²",
    basePrice: 29380000,
    price: "Bruttó: 29.380.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Ház",
        src: "/pictures/houses/santa-cruz/1.png",
        alt: "Santa Cruz könnyűszerkezetes ház modern terasszal és medencével",
      },
      {
        id: 2,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/2.png",
        alt: "Kültéri nyári konyha modern faburkolattal és beépített pulttal",
      },
      {
        id: 3,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/3.png",
        alt: "Santa Cruz ház hátsó nézete faborítású homlokzattal",
      },
      {
        id: 4,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/4.png",
        alt: "Könnyűszerkezetes ház oldalnézete zöldövezeti környezetben",
      },
      {
        id: 5,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/5.png",
        alt: "Santa Cruz ház modern nyílászárókkal és faburkolattal",
      },
      {
        id: 6,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/6.png",
        alt: "Könnyűszerkezetes ház medencével és terasszal – előnézet",
      },
      {
        id: 7,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/7.png",
        alt: "Prémium amerikai konyha étkezőrésszel a Santa Cruz házban",
      },
      {
        id: 8,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/8.png",
        alt: "Elegáns márvány pultos konyha kialakítás belső térben",
      },
      {
        id: 9,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/9.png",
        alt: "Santa Cruz nappali tágas belső térrel és dekorációval",
      },
      {
        id: 10,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/10.png",
        alt: "Világos nappali tolóajtós üvegfallal és fa mennyezettel",
      },
      {
        id: 11,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/11.png",
        alt: "Modern nappali kandallóval és kilátással a kertre",
      },
      {
        id: 12,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/12.png",
        alt: "Hangulatos belső tér dekoratív faliképekkel",
      },
      {
        id: 13,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/13.png",
        alt: "Santa Cruz könnyűszerkezetes ház esti megvilágításban",
      },
      {
        id: 14,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/14.png",
        alt: "Santa Cruz ház 3D alaprajz konyhával és fürdővel",
      },
      {
        id: 15,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/15.png",
        alt: "Santa Cruz ház klasszikus alaprajz szobafelosztással",
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
    <p>Ez a letisztult, modern ihletésű könnyűszerkezetes ház tökéletes választás azok számára,
akik kényelmet és nyugalmat szeretnének otthonukban, elérhető áron. A tágas, világos
terek, a természetközeli kialakítás és az opcionálisan választható wellness részleg
garantálják a pihenést és feltöltődést a mindennapokban. Ez az otthon lehetőséget kínál arra, hogy saját wellness részleggel élvezd a
mindennapi pihenést, elérhető áron. Tökéletes hétvégi háznak, állandó otthonnak
vagy befektetésnek. Lépj kapcsolatba velünk további információért!</p>
  `,
    details: [
      {
        name: "Tulajdonságok",
        items: [
          "Alap 25-centiméteres szigetelés.",
          "Három oldalas kandalló a meghitt hangulatért.",
          "Klímás fűtés-hűtés, elektromos padlófűtés a fürdőszobában.",
          "Nagy nyitott amerikai konyha.",
          "Külön nyári konyha pulttal és mosogatóval a kültéri kényelmet szolgálva.",
          "SPC padlóburkolat és járólap burkolat választható.",
          "Használható vendégházként és nyaralóként is.",
          "Alapfelszereltségként kültéri zuhanyzó a maximális komfortért.",
        ],
      },
    ],
    extras: [
      {
        id: "sc-extra-2",
        name: "Gáz csomag",
        description: "Kondenzációs gázkazán, Fűtés, Melegvíz készítés, Padlófűtési rendszer",
        price: 3200000,
        scrollToId: "gas-package",
      },
      {
        id: "sc-extra-3",
        name: "Napelem / Akkumulátor / Hőszivattyú csomag",
        description: "12kW Napelem rendszer. 12kW Akkumulátor energia tároló. 5kW Hőszivattyú (melegvíz+padlófűtés)",
        price: 10500000,
        scrollToId: "solar-package",
      },
      {
        id: "sc-extra-4",
        name: "Prémium csomag",
        description: "Luxus Konyhabútor.  Kő munkapultok.  Választható prémium fa vagy csempe padlóburkolatok. Minőségi Csaptelepek és szerelvények. Időt álló fa vagy aluminium nyílászárók.",
        price: 9390000,
        scrollToId: "premium-package",
      },
    ],
  },

  oslo: {
    name: "Oslo - 91m²",
    basePrice: 39900000,
    price: "Bruttó: 39.900.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Ház",
        src: "/pictures/houses/oslo/1.png",
        alt: "Oslo könnyűszerkezetes ház fekete homlokzattal és fedett terasszal",
      },
      {
        id: 2,
        name: "Minta",
        src: "/pictures/houses/oslo/2.png",
        alt: "Oslo ház alaprajz elölnézeti homlokzattal",
      },
      {
        id: 3,
        name: "Ház",
        src: "/pictures/houses/oslo/3.png",
        alt: "Oslo ház oldalsó nézet, modern tetővonallal",
      },
      {
        id: 4,
        name: "Minta",
        src: "/pictures/houses/oslo/4.png",
        alt: "Oslo ház hátsó homlokzati tervrajz ablakos megoldással",
      },
      {
        id: 5,
        name: "Ház",
        src: "/pictures/houses/oslo/5.png",
        alt: "Modern Oslo ház jobb oldali nézete, sötét tetővel",
      },
      {
        id: 6,
        name: "Minta",
        src: "/pictures/houses/oslo/6.png",
        alt: "Oslo ház belső alaprajz két hálószobával és fedett terasszal",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    description: `
    <p>Ez a kompakt, mégis tágas könnyűszerkezetes ház ötvözi a modern minimalizmust és a
klasszikus vidéki hangulatot. A letisztult fekete külső burkolat, a fedett veranda és a
természetes anyagok meleg, otthonos légkört teremtenek.
Elegáns, modern és energiatakarékos otthon - tökéletes választás családoknak vagy
nyaralónak!</p>
  `,
    details: [
      {
        name: "Tulajdonságok",
        items: [
          "Alap 25-centiméteres szigetelés.",
          "Tágas amerikai konyha.",
          "Klímás fűtés-hűtés, elektromos padlófűtés a fürdőszobában.",
          "Látszó bontott gerendák a természetes hangulatért.",
          "SPC padlóburkolat és járólap burkolat választható.",
          "Opcionális házcsatlakozású garázs.",
        ],
      },
    ],
    extras: [
      {
        id: "oslo-extra-1",
        name: "Garázs",
        description: "2 autós garázsbeálló. Házhoz csatlakozó, designban illeszkedő garázs.",
        price: 7800000,
        scrollToId: "garage-package",
      },
      {
        id: "oslo-extra-2",
        name: "Gáz csomag",
        description: "Kondenzációs gázkazán, Fűtés, Melegvíz készítés, Padlófűtési rendszer.",
        price: 3875000,
        scrollToId: "gas-package",
      },
      {
        id: "oslo-extra-3",
        name: "Napelem / Akkumulátor / Hőszivattyú csomag",
        description: "18kW Napelem rendszer. 18kW Akkumulátor energia tároló. 10kW Hőszivattyú (melegvíz+padlófűtés).",
        price: 14500000,
        scrollToId: "solar-package",
      },
      {
        id: "oslo-extra-4",
        name: "Prémium csomag",
        description: "Luxus konyhabútor. Kő munkapultok. Választható prémium fa vagy csempe padlóburkolatok. Minőségi csaptelepek és szerelvények. Időt álló fa vagy aluminium nyílászárók.",
        price: 11800000,
        scrollToId: "premium-package",
      },
    ],
  },

  montana: {
    name: "Montana - 80m²",
    basePrice: 38650000,
    price: "Bruttó 38.650.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Ház külső",
        src: "/pictures/houses/montana/2.png",
        alt: "Montana könnyűszerkezetes ház külső homlokzata modern dizájnnal",
      },
      {
        id: 2,
        name: "Alaprajz",
        src: "/pictures/houses/montana/1.png",
        alt: "Montana ház alaprajz amerikai konyhával és két hálószobával",
      },
      {
        id: 3,
        name: "Nappali",
        src: "/pictures/houses/montana/3.png",
        alt: "Tágas nappali látszó gerendákkal és modern bútorzattal",
      },
      {
        id: 4,
        name: "Konyha",
        src: "/pictures/houses/montana/4.png",
        alt: "Nyitott konyha és étkezőrész fa gerendás mennyezettel",
      },
      {
        id: 5,
        name: "Hálószoba",
        src: "/pictures/houses/montana/5.png",
        alt: "Fő hálószoba természetes fényben, modern berendezéssel",
      },
      {
        id: 6,
        name: "Fürdőszoba",
        src: "/pictures/houses/montana/6.png",
        alt: "Fürdőszoba kialakítás üvegfallal és esőztető zuhannyal",
      },
      {
        id: 7,
        name: "Terasz",
        src: "/pictures/houses/montana/7.png",
        alt: "Fedett fa terasz ülősarokkal és kerti kilátással",
      },
      {
        id: 8,
        name: "Oldalnézet",
        src: "/pictures/houses/montana/8.png",
        alt: "Montana ház oldalnézete sötét színű burkolattal",
      },
      {
        id: 9,
        name: "Étkezőtér",
        src: "/pictures/houses/montana/9.png",
        alt: "Étkezőtér fa asztallal és nagy ablakfelületekkel",
      },
      {
        id: 10,
        name: "Második hálószoba",
        src: "/pictures/houses/montana/10.png",
        alt: "Második hálószoba világos enteriőrrel és zöld kilátással",
      },
      {
        id: 11,
        name: "Bejárat",
        src: "/pictures/houses/montana/11.png",
        alt: "Montana ház bejárata fa pillérekkel és burkolattal",
      },
      {
        id: 12,
        name: "Részlet",
        src: "/pictures/houses/montana/12.png",
        alt: "Montana ház építészeti részlet modern fa díszítéssel",
      },
      {
        id: 13,
        name: "Hátsó nézet",
        src: "/pictures/houses/montana/13.png",
        alt: "Montana ház hátsó homlokzata kertkapcsolattal",
      },
      {
        id: 14,
        name: "Légi felvétel",
        src: "/pictures/houses/montana/14.png",
        alt: "Légi felvétel a Montana típusú könnyűszerkezetes házról",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    description: `
    <p>Ez a modern, mégis meleg és otthonos könnyűszerkezetes ház tökéletes választás
azoknak, akik értékelik a természetes anyagokat és az energiahatékony megoldásokat. A
látszó bontott gerendák, a tágas amerikai konyha és a nagy nyílászárók világos,
barátságos életteret biztosítanak.
Kiváló választás otthonnak vagy nyaralónak – modern megoldásokkal és természetközeli
stílussal!</p>
  `,
    details: [
      {
        name: "Tulajdonságok",
        items: [
          "Alap 25-centiméteres szigetelés.",
          "Tágas amerikai konyha.",
          "Klímás fűtés-hűtés, elektromos padlófűtés a fürdőszobában.",
          "Látszó bontott gerendák a természetes hangulatért.",
          "SPC padlóburkolat és járólap burkolat választható.",
        ],
      },
    ],
    extras: [
      {
        id: "montana-extra-1",
        name: "Gáz csomag",
        description: "Kondenzációs gázkazán. fűtés. melegvíz készítés. padlófűtési rendszer.",
        price: 3500000,
        scrollToId: "gas-package",
      },
      {
        id: "montana-extra-2",
        name: "Napelem / Akkumulátor / Hőszivattyú csomag",
        description: "18kW Napelem rendszer. 18kW Akkumulátor energia tároló. 10kW Hőszivattyú (melegvíz+padlófűtés).",
        price: 13700000,
        scrollToId: "solar-package",
      },
      {
        id: "montana-extra-3",
        name: "Prémium csomag",
        description: "Luxus Konyhabútor.  Kő munkapultok.  Választható prémium fa vagy csempe padlóburkolatok. Minőségi csaptelepek és szerelvények. Időt álló fa vagy aluminium nyílászárók.",
        price: 11000000,
        scrollToId: "premium-package",
      },
    ],
  },

  dallas: {
    name: "Dallas - 98m²",
    basePrice: 47300000,
    price: "Bruttó 47.300.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Ház",
        src: "/pictures/houses/dallas/1.png",
        alt: "Dallas könnyűszerkezetes ház kő és fa homlokzattal, előkerttel",
      },
      {
        id: 2,
        name: "Ház",
        src: "/pictures/houses/dallas/2.png",
        alt: "Klasszikus vidéki stílusú Dallas ház fedett terasszal és kerttel",
      },
      {
        id: 3,
        name: "Ház",
        src: "/pictures/houses/dallas/3.png",
        alt: "Dallas ház előnézeti tervrajz, kő és fa kombinációval",
      },
      {
        id: 4,
        name: "Ház",
        src: "/pictures/houses/dallas/4.png",
        alt: "Dallas ház oldalnézeti homlokzata, fekete tetőszerkezettel",
      },
      {
        id: 5,
        name: "Ház",
        src: "/pictures/houses/dallas/5.png",
        alt: "Dallas hátsó homlokzat fa és fém elemekkel",
      },
      {
        id: 6,
        name: "Ház",
        src: "/pictures/houses/dallas/6.png",
        alt: "Dallas ház hátsó nézet sötét burkolattal és teraszajtóval",
      },
      {
        id: 7,
        name: "Ház",
        src: "/pictures/houses/dallas/7.png",
        alt: "Dallas ház alaprajza 98 négyzetméteres elrendezéssel",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    description: `
    <p>Ez a lenyűgöző, kő-tégla és faelemekkel díszített könnyűszerkezetes ház ötvözi a
klasszikus vidéki stílust a modern kényelemmel. A nagy fedett terasz, a tágas
nyílászárók és a természetközeli kialakítás ideális otthont biztosítanak egész évben.
Tökéletes választás családi otthonnak, nyaralónak vagy befektetésnek. Kérjen további
információt!</p>
  `,
    details: [
      {
        name: "Tulajdonságok",
        items: [
          "Alap 25-centiméteres szigetelés.",
          "Tágas amerikai konyha.",
          "Klímás fűtés-hűtés, elektromos padlófűtés a fürdőszobában.",
          "Látszó bontott gerendák a természetes hangulatért.",
          "SPC padlóburkolat és járólap burkolat választható.",
        ],
      },
    ],
    extras: [
      {
        id: "dallas-extra-1",
        name: "Gáz csomag",
        description: "Komplett gázfűtési rendszer telepítéssel",
        price: 3900000,
        scrollToId: "gas-package",
      },
      {
        id: "dallas-extra-2",
        name: "Napelem / Akkumulátor / Hőszivattyú csomag",
        description: "18kW Napelem rendszer. 18kW Akkumulátor energia tároló. 10kW Hőszivattyú (melegvíz+padlófűtés).",
        price: 14700000,
        scrollToId: "solar-package",
      },
      {
        id: "dallas-extra-3",
        name: "Prémium csomag",
        description: "Luxus Konyhabútor.  Kő munkapultok.  Választható prémium fa vagy csempe padlóburkolatok. Minőségi Csaptelepek és szerelvények. Időt álló fa vagy aluminium nyílászárók.",
        price: 11800000,
        scrollToId: "premium-package",
      },
    ],
  },

  helsinki: {
    name: "Helsinki - 128m²",
    basePrice: 59200000,
    price: "Bruttó 59.200.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Ház",
        src: "/pictures/houses/helsinki/1.png",
        alt: "Helsinki ház modern fa burkolattal, természetes környezetben",
      },
      {
        id: 2,
        name: "Terv",
        src: "/pictures/houses/helsinki/2.png",
        alt: "Helsinki könnyűszerkezetes ház alaprajz, 128m² beosztással",
      },
      {
        id: 3,
        name: "Nappali",
        src: "/pictures/houses/helsinki/3.png",
        alt: "Tágas nappali skandináv stílusban, természetes fényben",
      },
      {
        id: 4,
        name: "Konyha",
        src: "/pictures/houses/helsinki/4.png",
        alt: "Modern Helsinki konyha természetes anyagokkal és világítással",
      },
      {
        id: 5,
        name: "Fürdőszoba",
        src: "/pictures/houses/helsinki/5.png",
        alt: "Fürdőszoba kialakítás fa bútorral és tágas zuhanyzóval",
      },
      {
        id: 6,
        name: "Hátsó nézet",
        src: "/pictures/houses/helsinki/6.png",
        alt: "Helsinki hátsó homlokzat thermo fenyő burkolattal",
      },
      {
        id: 7,
        name: "Terasz",
        src: "/pictures/houses/helsinki/7.png",
        alt: "Fedett terasz skandináv dizájnnal és kültéri pihenőrésszel",
      },
      {
        id: 8,
        name: "Hálószoba",
        src: "/pictures/houses/helsinki/8.png",
        alt: "Helsinki ház hálószobája világos ablakokkal és fa bútorzattal",
      },
      {
        id: 9,
        name: "Légi felvétel",
        src: "/pictures/houses/helsinki/9.png",
        alt: "Légi felvétel a Helsinki típusú könnyűszerkezetes házról",
      },
      {
        id: 10,
        name: "Étkező",
        src: "/pictures/houses/helsinki/10.png",
        alt: "Étkező és nappali nyitott térrel, modern enteriőrrel",
      },
      {
        id: 11,
        name: "Részlet",
        src: "/pictures/houses/helsinki/11.png",
        alt: "Építészeti homlokzati részlet a Helsinki házról",
      },
      {
        id: 12,
        name: "Bejárat",
        src: "/pictures/houses/helsinki/12.png",
        alt: "Helsinki ház bejárati oldal, modern fa borítással",
      },
      {
        id: 13,
        name: "Belső tér",
        src: "/pictures/houses/helsinki/13.png",
        alt: "Helsinki ház belső tér átlátása, nappali és konyha nézettel",
      },
      {
        id: 14,
        name: "Gyerekszoba",
        src: "/pictures/houses/helsinki/14.png",
        alt: "Modern gyerekszoba fa burkolattal és világos ablakokkal",
      },
      {
        id: 15,
        name: "Előszoba",
        src: "/pictures/houses/helsinki/15.png",
        alt: "Előszoba és közlekedő terület, skandináv belső dizájn",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    description: `
    <p>Ez a stílusos, modern könnyűszerkezetes ház tökéletes választás azok számára, akik
kényelmes, energiahatékony és természetközeli otthonra vágynak. A letisztult,
skandináv ihletésű dizájn, a nagy üvegfelületek és a minőségi anyagok garantálják a
kellemes lakóérzetet.</p>
  `,
    details: [
      {
        name: "Tulajdonságok",
        items: [
          "Alap 25-centiméteres szigetelés.",
          "Tágas amerikai konyha.",
          "Klímás fűtés-hűtés, elektromos padlófűtés a fürdőszobában.",
          "Látszó bontott gerendák a természetes hangulatért.",
          "SPC padlóburkolat és járólap burkolat választható.",
        ],
      },
    ],
    extras: [
      {
        id: "helsinki-extra-1",
        name: "Gáz csomag",
        description: "Kondenzációs gázkazán. Fűtés. Melegvíz készítés. Padlófűtési rendszer",
        price: 4900000,
        scrollToId: "gas-package",
      },
      {
        id: "helsinki-extra-2",
        name: "Napelem / Akkumulátor / Hőszivattyú csomag",
        description: "24kW Napelem rendszer. 30kW Akkumulátor energia tároló. 16kW Hőszivattyú (melegvíz+padlófűtés).",
        price: 19500000,
        scrollToId: "solar-package",
      },
      {
        id: "helsinki-extra-3",
        name: "Prémium csomag",
        description: "Luxus Konyhabútor.  Kő munkapultok.  Választható prémium fa vagy csempe padlóburkolatok. Minőségi Csaptelepek és szerelvények. Időt álló fa vagy aluminium nyílászárók.",
        price: 14350000,
        scrollToId: "premium-package",
      },
    ],
  },
};
