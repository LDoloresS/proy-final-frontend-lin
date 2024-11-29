const productListData = [
  {
    "id": 1,
    "nombre": "Calentador magnífico",
    "descripcion": "Calienta agua dia y nada mas",
    "aspectostecnicos": "No hace nada mas que calentar agua a 5000 grados centigrados en 5 seg",
    "aplicacion": "Calienta agua",
    "precio": 75.00,
    "imagen": "calentador.png",
    "marca": { "id": 1 },
    "categoria": { "id": 3 }
  },
  {
    "id": 2,
    "nombre": "Cerámica tipo piedra",
    "descripcion": "Cuadro de cerámica con apariencia a piedra",
    "aspectostecnicos": "Útil para pisos y paredes",
    "aplicacion": "Embellece la casa",
    "precio": 10.00,
    "imagen": "ceramica1.jpg",
    "marca": { "id": 1 },
    "categoria": { "id": 2 }
  },
  {
    "id": 4,
    "nombre": "Grifo minimalista",
    "descripcion": "Grifo con apariencia minimalista de una sola entrada",
    "aspectostecnicos": "Muy bonito",
    "aplicacion": "Tira agua y se ve lindo",
    "precio": 45.00,
    "imagen": "grifo1.png",
    "marca": { "id": 1 },
    "categoria": { "id": 5 }
  },
  {
    "id": 7,
    "nombre": "Horno con discos",
    "descripcion": "Hornito con dos disco encima para una cocina pequenna y completa",
    "aspectostecnicos": "Tosta y cocina",
    "aplicacion": "Cocica muy chivamente",
    "precio": 260.00,
    "imagen": "hornito.png",
    "marca": { "id": 1 },
    "categoria": { "id": 1 }
  },
  {
    "id": 8,
    "nombre": "Lavado simple metal",
    "descripcion": "Lavado sencillo de un hueco",
    "aspectostecnicos": "Superficie deslizante",
    "aplicacion": "Lavar los platos",
    "precio": 30,
    "imagen": "lavado2.jpg",
    "marca": { "id": 1 },
    "categoria": { "id": 1 }
  },
  {
    "id": 10,
    "nombre": "Madera ceramica",
    "descripcion": "Piso ceramico con color de madera",
    "aspectostecnicos": "De montado fácil y sin pegamento",
    "aplicacion": "Ser piso",
    "precio": 17,
    "imagen": "madera1.jpg",
    "marca": { "id": 1 },
    "categoria": { "id": 2 }
  },
  {
    "id": 12,
    "nombre": "Microondas",
    "descripcion": "Microondas con temporizador de ruedita",
    "aspectostecnicos": "Varias potencias y de 110v",
    "aplicacion": "Calienta rápidamente",
    "precio": 350,
    "imagen": "microondas.png",
    "marca": { "id": 1 },
    "categoria": { "id": 3 }
  },
  {
    "id": 15,
    "nombre": "Keyless Variable Speed Corded Drill (DR260C)",
    "descripcion": "Taladro rojo",
    "aspectostecnicos": "Amps: 5.2 ampsrnChuck Size: 3/8 in.rnChuck Type: KeylessrnMaximum Speed: 1500 rpm",
    "aplicacion": "Powerful and Compact On Board Bit Storage Includes Double Ended Screwdriver Bit",
    "precio": 15.00,
    "imagen": "drill1.jpg",
    "marca": { "id": 2 },
    "categoria": { "id": 5 }
  },
  {
    "id": 16,
    "nombre": "Speed Mouse Detail Sander with Dust Collection",
    "descripcion": "Duster rojo de una velocidad",
    "aspectostecnicos": "Amps: 1.2 amps",
    "aplicacion": "Includes: finger attachment and sanding pad",
    "precio": 20.00,
    "imagen": "duster1.jpg",
    "marca": { "id": 3 },
    "categoria": { "id": 4 }
  },
  {
    "id": 17,
    "nombre": "Lari 30in Gas Fire Table",
    "descripcion": "Product Type: Fire TablernAssembled Depth: 30 in.rnAssembled Width: 30 in.rnAssembled Height: 24 in.rnHousing Material: Steel",
    "aspectostecnicos": "Electronic Ignition: NornScreen Included: NornAssembly Required: Yes",
    "aplicacion": "Power or Fuel Type: PropanernTotal BTU: 40000 BTUrn360 Fire View: Yes",
    "precio": 75.00,
    "imagen": "firetable1.jpg",
    "marca": { "id": 2 },
    "categoria": { "id": 5 }
  },
  {
    "id": 18,
    "nombre": "Living Accents Green Folding Wood Adirondack Chair",
    "descripcion": "Number of Pieces: 1 pc.rnProduct Type: Adirondack ChairrnColor Family: Green",
    "aspectostecnicos": "Assembled Depth: 31.5 in.rnAssembled Height: 35.23 in.rnAssembled Width: 29.5 in.",
    "aplicacion": "Weather Resistant: YesrnWeight Capacity: 250 lb.rnSeating Capacity: 1",
    "precio": 20.00,
    "imagen": "sillaverde.jpg",
    "marca": { "id": 2 },
    "categoria": { "id": 5 }
  },
  {
    "id": 19,
    "nombre": "Quikshade 12 ft x 12 Ft Weekender Instant Canopy",
    "descripcion": "Canopy Color Family: AssortedrnCanopy Material: PolyesterrnProduct Type: Canopy",
    "aspectostecnicos": "Assembled Height: 10 ft.rnAssembled Width: 12 ft.rnAssembled Length: 12 ft.",
    "aplicacion": "Style: WeekenderrnFrame Material: SteelrnShade/sun protection",
    "precio": 60.00,
    "imagen": "canopy1.jpg",
    "marca": { "id": 2 },
    "categoria": { "id": 2 }
  },
  {
    "id": 23,
    "nombre": "Alicate",
    "descripcion": "Cubierta con gebe",
    "aspectostecnicos": "Color amarillo",
    "aplicacion": "Cortar",
    "precio": 14,
    "imagen": "alicate.jpg",
    "marca": { "id": 3 },
    "categoria": { "id": 3 }
  },
  {
    "id": 24,
    "nombre": "Martillo",
    "descripcion": "Martillo de cabeza de acero",
    "aspectostecnicos": "Mango de madera",
    "aplicacion": "Clavar",
    "precio": 23,
    "imagen": "martillo.jpg",
    "marca": { "id": 3 },
    "categoria": { "id": 2 }
  }
]

export default productListData;