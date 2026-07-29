export interface DistrictInfo {
  id: string;
  name: string;
  marathiName: string;
  headquarters: string;
  image: string;
  cx: number;
  cy: number;
  labelX?: number;
  labelY?: number;
  hasCallout?: boolean;
  link: string;
}

export const maharashtraDistrictsData: DistrictInfo[] = [
  {
    id: "ahilyanagar",
    name: "Ahilyanagar",
    marathiName: "अहिल्यानगर",
    headquarters: "Ahilyanagar (Ahmednagar)",
    image: "/assets/districts/maharashtra/ahilyanagar.jpg",
    cx: 204.7,
    cy: 300.8,
    link: "/district/ahilyanagar"
  },
  {
    id: "akola",
    name: "Akola",
    marathiName: "अकोला",
    headquarters: "Akola",
    image: "/assets/districts/maharashtra/akola.jpg",
    cx: 434,
    cy: 157.3,
    link: "/district/akola"
  },
  {
    id: "amravati",
    name: "Amravati",
    marathiName: "अमरावती",
    headquarters: "Amravati",
    image: "/assets/districts/maharashtra/amravati.jpg",
    cx: 468.1,
    cy: 121.9,
    link: "/district/amravati"
  },
  {
    id: "chhatrapatisambhajinagar",
    name: "Chhatrapati Sambhajinagar",
    marathiName: "छत्रपती संभाजीनगर",
    headquarters: "Chhatrapati Sambhajinagar (Aurangabad)",
    image: "/assets/districts/maharashtra/chhatrapatisambhajinagar.jpg",
    cx: 269,
    cy: 223.7,
    link: "/district/chhatrapatisambhajinagar"
  },
  {
    id: "beed",
    name: "Beed",
    marathiName: "बीड",
    headquarters: "Beed",
    image: "/assets/districts/maharashtra/beed.jpg",
    cx: 309.8,
    cy: 316.1,
    link: "/district/beed"
  },
  {
    id: "bhandara",
    name: "Bhandara",
    marathiName: "भंडारा",
    headquarters: "Bhandara",
    image: "/assets/districts/maharashtra/bhandara.jpg",
    cx: 669.2,
    cy: 124.8,
    link: "/district/bhandara"
  },
  {
    id: "buldhana",
    name: "Buldhana",
    marathiName: "बुलढाणा",
    headquarters: "Buldhana",
    image: "/assets/districts/maharashtra/buldhana.jpg",
    cx: 363.8,
    cy: 174.8,
    link: "/district/buldhana"
  },
  {
    id: "chandrapur",
    name: "Chandrapur",
    marathiName: "चंद्रपूर",
    headquarters: "Chandrapur",
    image: "/assets/districts/maharashtra/chandrapur.jpg",
    cx: 635,
    cy: 216.9,
    link: "/district/chandrapur"
  },
  {
    id: "dhule",
    name: "Dhule",
    marathiName: "धुळे",
    headquarters: "Dhule",
    image: "/assets/districts/maharashtra/dhule.jpg",
    cx: 198.2,
    cy: 124.1,
    link: "/district/dhule"
  },
  {
    id: "gadchiroli",
    name: "Gadchiroli",
    marathiName: "गडचिरोली",
    headquarters: "Gadchiroli",
    image: "/assets/districts/maharashtra/gadchiroli.jpg",
    cx: 717.9,
    cy: 247.4,
    link: "/district/gadchiroli"
  },
  {
    id: "gondia",
    name: "Gondia",
    marathiName: "गोंदिया",
    headquarters: "Gondia",
    image: "/assets/districts/maharashtra/gondia.jpg",
    cx: 710.8,
    cy: 122.8,
    link: "/district/gondia"
  },
  {
    id: "hingoli",
    name: "Hingoli",
    marathiName: "हिंगोली",
    headquarters: "Hingoli",
    image: "/assets/districts/maharashtra/hingoli.jpg",
    cx: 420.1,
    cy: 266.5,
    link: "/district/hingoli"
  },
  {
    id: "jalgaon",
    name: "Jalgaon",
    marathiName: "जळगाव",
    headquarters: "Jalgaon",
    image: "/assets/districts/maharashtra/jalgaon.jpg",
    cx: 292.6,
    cy: 150,
    link: "/district/jalgaon"
  },
  {
    id: "jalna",
    name: "Jalna",
    marathiName: "जालना",
    headquarters: "Jalna",
    image: "/assets/districts/maharashtra/jalna.jpg",
    cx: 335.8,
    cy: 233,
    link: "/district/jalna"
  },
  {
    id: "kolhapur",
    name: "Kolhapur",
    marathiName: "कोल्हापूर",
    headquarters: "Kolhapur",
    image: "/assets/districts/maharashtra/kolhapur.jpg",
    cx: 168.1,
    cy: 543.2,
    link: "/district/kolhapur"
  },
  {
    id: "latur",
    name: "Latur",
    marathiName: "लातूर",
    headquarters: "Latur",
    image: "/assets/districts/maharashtra/latur.jpg",
    cx: 397.5,
    cy: 373.4,
    link: "/district/latur"
  },
  {
    id: "mumbaicity",
    name: "Mumbai City",
    marathiName: "मुंबई शहर",
    headquarters: "Mumbai",
    image: "/assets/districts/maharashtra/mumbaicity.jpg",
    cx: 52,
    cy: 322,
    labelX: -5,
    labelY: 345,
    hasCallout: true,
    link: "/district/mumbaicity"
  },
  {
    id: "mumbaisuburban",
    name: "Mumbai Suburban",
    marathiName: "मुंबई उपनगर",
    headquarters: "Bandra East",
    image: "/assets/districts/maharashtra/mumbaisuburban.jpg",
    cx: 48,
    cy: 298,
    labelX: -10,
    labelY: 282,
    hasCallout: true,
    link: "/district/mumbaisuburban"
  },
  {
    id: "nagpur",
    name: "Nagpur",
    marathiName: "नागपूर",
    headquarters: "Nagpur",
    image: "/assets/districts/maharashtra/nagpur.jpg",
    cx: 595.3,
    cy: 122.1,
    link: "/district/nagpur"
  },
  {
    id: "nanded",
    name: "Nanded",
    marathiName: "नांदेड",
    headquarters: "Nanded",
    image: "/assets/districts/maharashtra/nanded.jpg",
    cx: 478.2,
    cy: 307,
    link: "/district/nanded"
  },
  {
    id: "nandurbar",
    name: "Nandurbar",
    marathiName: "नंदुरबार",
    headquarters: "Nandurbar",
    image: "/assets/districts/maharashtra/nandurbar.jpg",
    cx: 166.6,
    cy: 89.5,
    link: "/district/nandurbar"
  },
  {
    id: "nashik",
    name: "Nashik",
    marathiName: "नाशिक",
    headquarters: "Nashik",
    image: "/assets/districts/maharashtra/nashik.jpg",
    cx: 159,
    cy: 205.5,
    link: "/district/nashik"
  },
  {
    id: "dharashiv",
    name: "Dharashiv",
    marathiName: "धाराशिव",
    headquarters: "Dharashiv (Osmanabad)",
    image: "/assets/districts/maharashtra/dharashiv.jpg",
    cx: 333.8,
    cy: 389.9,
    link: "/district/dharashiv"
  },
  {
    id: "palghar",
    name: "Palghar",
    marathiName: "पालघर",
    headquarters: "Palghar",
    image: "/assets/districts/maharashtra/palghar.jpg",
    cx: 68.1,
    cy: 247.1,
    link: "/district/palghar"
  },
  {
    id: "parbhani",
    name: "Parbhani",
    marathiName: "परभणी",
    headquarters: "Parbhani",
    image: "/assets/districts/maharashtra/parbhani.jpg",
    cx: 390,
    cy: 289.3,
    link: "/district/parbhani"
  },
  {
    id: "pune",
    name: "Pune",
    marathiName: "पुणे",
    headquarters: "Pune",
    image: "/assets/districts/maharashtra/pune.jpg",
    cx: 172.7,
    cy: 347.3,
    link: "/district/pune"
  },
  {
    id: "raigad",
    name: "Raigad",
    marathiName: "रायगड",
    headquarters: "Alibag",
    image: "/assets/districts/maharashtra/raigad.jpg",
    cx: 83.4,
    cy: 361.1,
    link: "/district/raigad"
  },
  {
    id: "ratnagiri",
    name: "Ratnagiri",
    marathiName: "रत्नागिरी",
    headquarters: "Ratnagiri",
    image: "/assets/districts/maharashtra/ratnagiri.jpg",
    cx: 101.1,
    cy: 469.5,
    link: "/district/ratnagiri"
  },
  {
    id: "sangli",
    name: "Sangli",
    marathiName: "सांगली",
    headquarters: "Sangli",
    image: "/assets/districts/maharashtra/sangli.jpg",
    cx: 212.3,
    cy: 479.5,
    link: "/district/sangli"
  },
  {
    id: "satara",
    name: "Satara",
    marathiName: "सातारा",
    headquarters: "Satara",
    image: "/assets/districts/maharashtra/satara.jpg",
    cx: 170.6,
    cy: 437.8,
    link: "/district/satara"
  },
  {
    id: "sindhudurg",
    name: "Sindhudurg",
    marathiName: "सिंधुदुर्ग",
    headquarters: "Oros",
    image: "/assets/districts/maharashtra/sindhudurg.jpg",
    cx: 129.2,
    cy: 572.5,
    link: "/district/sindhudurg"
  },
  {
    id: "solapur",
    name: "Solapur",
    marathiName: "सोलापूर",
    headquarters: "Solapur",
    image: "/assets/districts/maharashtra/solapur.jpg",
    cx: 287.1,
    cy: 418.6,
    link: "/district/solapur"
  },
  {
    id: "thane",
    name: "Thane",
    marathiName: "ठाणे",
    headquarters: "Thane",
    image: "/assets/districts/maharashtra/thane.jpg",
    cx: 87,
    cy: 283.1,
    link: "/district/thane"
  },
  {
    id: "wardha",
    name: "Wardha",
    marathiName: "वर्धा",
    headquarters: "Wardha",
    image: "/assets/districts/maharashtra/wardha.jpg",
    cx: 567,
    cy: 151.6,
    link: "/district/wardha"
  },
  {
    id: "washim",
    name: "Washim",
    marathiName: "वाशिम",
    headquarters: "Washim",
    image: "/assets/districts/maharashtra/washim.jpg",
    cx: 433.4,
    cy: 199.8,
    link: "/district/washim"
  },
  {
    id: "yavatmal",
    name: "Yavatmal",
    marathiName: "यवतमाळ",
    headquarters: "Yavatmal",
    image: "/assets/districts/maharashtra/yavatmal.jpg",
    cx: 529.3,
    cy: 219.9,
    link: "/district/yavatmal"
  }
];
