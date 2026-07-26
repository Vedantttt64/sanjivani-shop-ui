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
    image: "/images/banner/b1.JPG",
    cx: 204.7,
    cy: 300.8,
    link: "/district/ahilyanagar"
  },
  {
    id: "akola",
    name: "Akola",
    marathiName: "अकोला",
    headquarters: "Akola",
    image: "/images/banner/b2.jpg",
    cx: 434,
    cy: 157.3,
    link: "/district/akola"
  },
  {
    id: "amravati",
    name: "Amravati",
    marathiName: "अमरावती",
    headquarters: "Amravati",
    image: "/images/banner/b3.jpg",
    cx: 468.1,
    cy: 121.9,
    link: "/district/amravati"
  },
  {
    id: "chhatrapatisambhajinagar",
    name: "Chhatrapati Sambhajinagar",
    marathiName: "छत्रपती संभाजीनगर",
    headquarters: "Chhatrapati Sambhajinagar (Aurangabad)",
    image: "/images/banner/b5.jpg",
    cx: 269,
    cy: 223.7,
    link: "/district/chhatrapatisambhajinagar"
  },
  {
    id: "beed",
    name: "Beed",
    marathiName: "बीड",
    headquarters: "Beed",
    image: "/images/food1.jpg",
    cx: 309.8,
    cy: 316.1,
    link: "/district/beed"
  },
  {
    id: "bhandara",
    name: "Bhandara",
    marathiName: "भंडारा",
    headquarters: "Bhandara",
    image: "/images/infrastr.jpeg",
    cx: 669.2,
    cy: 124.8,
    link: "/district/bhandara"
  },
  {
    id: "buldhana",
    name: "Buldhana",
    marathiName: "बुलढाणा",
    headquarters: "Buldhana",
    image: "/images/oldage1.jpg",
    cx: 363.8,
    cy: 174.8,
    link: "/district/buldhana"
  },
  {
    id: "chandrapur",
    name: "Chandrapur",
    marathiName: "चंद्रपूर",
    headquarters: "Chandrapur",
    image: "/images/plant.jpg",
    cx: 635,
    cy: 216.9,
    link: "/district/chandrapur"
  },
  {
    id: "dhule",
    name: "Dhule",
    marathiName: "धुळे",
    headquarters: "Dhule",
    image: "/images/rahul1.png",
    cx: 198.2,
    cy: 124.1,
    link: "/district/dhule"
  },
  {
    id: "gadchiroli",
    name: "Gadchiroli",
    marathiName: "गडचिरोली",
    headquarters: "Gadchiroli",
    image: "/images/skill.jpeg",
    cx: 717.9,
    cy: 247.4,
    link: "/district/gadchiroli"
  },
  {
    id: "gondia",
    name: "Gondia",
    marathiName: "गोंदिया",
    headquarters: "Gondia",
    image: "/images/women.jpg",
    cx: 710.8,
    cy: 122.8,
    link: "/district/gondia"
  },
  {
    id: "hingoli",
    name: "Hingoli",
    marathiName: "हिंगोली",
    headquarters: "Hingoli",
    image: "/images/covid19.jpg",
    cx: 420.1,
    cy: 266.5,
    link: "/district/hingoli"
  },
  {
    id: "jalgaon",
    name: "Jalgaon",
    marathiName: "जळगाव",
    headquarters: "Jalgaon",
    image: "/images/babu.jpeg",
    cx: 292.6,
    cy: 150,
    link: "/district/jalgaon"
  },
  {
    id: "jalna",
    name: "Jalna",
    marathiName: "जालना",
    headquarters: "Jalna",
    image: "/images/banner/b1.JPG",
    cx: 335.8,
    cy: 233,
    link: "/district/jalna"
  },
  {
    id: "kolhapur",
    name: "Kolhapur",
    marathiName: "कोल्हापूर",
    headquarters: "Kolhapur",
    image: "/images/banner/b2.jpg",
    cx: 168.1,
    cy: 543.2,
    link: "/district/kolhapur"
  },
  {
    id: "latur",
    name: "Latur",
    marathiName: "लातूर",
    headquarters: "Latur",
    image: "/images/Explore/Latur.png",
    cx: 397.5,
    cy: 373.4,
    link: "/district/latur"
  },
  {
    id: "mumbaicity",
    name: "Mumbai City",
    marathiName: "मुंबई शहर",
    headquarters: "Mumbai",
    image: "/images/Explore/Mumbai.png",
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
    image: "/images/Explore/Mumbai.png",
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
    image: "/images/banner/b3.jpg",
    cx: 595.3,
    cy: 122.1,
    link: "/district/nagpur"
  },
  {
    id: "nanded",
    name: "Nanded",
    marathiName: "नांदेड",
    headquarters: "Nanded",
    image: "/images/banner/b5.jpg",
    cx: 478.2,
    cy: 307,
    link: "/district/nanded"
  },
  {
    id: "nandurbar",
    name: "Nandurbar",
    marathiName: "नंदुरबार",
    headquarters: "Nandurbar",
    image: "/images/food1.jpg",
    cx: 166.6,
    cy: 89.5,
    link: "/district/nandurbar"
  },
  {
    id: "nashik",
    name: "Nashik",
    marathiName: "नाशिक",
    headquarters: "Nashik",
    image: "/images/infrastr.jpeg",
    cx: 159,
    cy: 205.5,
    link: "/district/nashik"
  },
  {
    id: "dharashiv",
    name: "Dharashiv",
    marathiName: "धाराशिव",
    headquarters: "Dharashiv (Osmanabad)",
    image: "/images/oldage1.jpg",
    cx: 333.8,
    cy: 389.9,
    link: "/district/dharashiv"
  },
  {
    id: "palghar",
    name: "Palghar",
    marathiName: "पालघर",
    headquarters: "Palghar",
    image: "/images/Explore/Palghar.png",
    cx: 68.1,
    cy: 247.1,
    link: "/district/palghar"
  },
  {
    id: "parbhani",
    name: "Parbhani",
    marathiName: "परभणी",
    headquarters: "Parbhani",
    image: "/images/plant.jpg",
    cx: 390,
    cy: 289.3,
    link: "/district/parbhani"
  },
  {
    id: "pune",
    name: "Pune",
    marathiName: "पुणे",
    headquarters: "Pune",
    image: "/images/babu.jpeg",
    cx: 172.7,
    cy: 347.3,
    link: "/district/pune"
  },
  {
    id: "raigad",
    name: "Raigad",
    marathiName: "रायगड",
    headquarters: "Alibag",
    image: "/images/Explore/Raigad.png",
    cx: 83.4,
    cy: 361.1,
    link: "/district/raigad"
  },
  {
    id: "ratnagiri",
    name: "Ratnagiri",
    marathiName: "रत्नागिरी",
    headquarters: "Ratnagiri",
    image: "/images/Explore/Ratnagiri.png",
    cx: 101.1,
    cy: 469.5,
    link: "/district/ratnagiri"
  },
  {
    id: "sangli",
    name: "Sangli",
    marathiName: "सांगली",
    headquarters: "Sangli",
    image: "/images/Explore/Sangli.png",
    cx: 212.3,
    cy: 479.5,
    link: "/district/sangli"
  },
  {
    id: "satara",
    name: "Satara",
    marathiName: "सातारा",
    headquarters: "Satara",
    image: "/images/Explore/Satara.png",
    cx: 170.6,
    cy: 437.8,
    link: "/district/satara"
  },
  {
    id: "sindhudurg",
    name: "Sindhudurg",
    marathiName: "सिंधुदुर्ग",
    headquarters: "Oros",
    image: "/images/Explore/Sindhudurg.png",
    cx: 129.2,
    cy: 572.5,
    link: "/district/sindhudurg"
  },
  {
    id: "solapur",
    name: "Solapur",
    marathiName: "सोलापूर",
    headquarters: "Solapur",
    image: "/images/Explore/Solapur.png",
    cx: 287.1,
    cy: 418.6,
    link: "/district/solapur"
  },
  {
    id: "thane",
    name: "Thane",
    marathiName: "ठाणे",
    headquarters: "Thane",
    image: "/images/Explore/Thane.png",
    cx: 87,
    cy: 283.1,
    link: "/district/thane"
  },
  {
    id: "wardha",
    name: "Wardha",
    marathiName: "वर्धा",
    headquarters: "Wardha",
    image: "/images/rahul1.png",
    cx: 567,
    cy: 151.6,
    link: "/district/wardha"
  },
  {
    id: "washim",
    name: "Washim",
    marathiName: "वाशिम",
    headquarters: "Washim",
    image: "/images/skill.jpeg",
    cx: 433.4,
    cy: 199.8,
    link: "/district/washim"
  },
  {
    id: "yavatmal",
    name: "Yavatmal",
    marathiName: "यवतमाळ",
    headquarters: "Yavatmal",
    image: "/images/women.jpg",
    cx: 529.3,
    cy: 219.9,
    link: "/district/yavatmal"
  }
];
