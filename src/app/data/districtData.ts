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


export const karnatakaDistrictsData: DistrictInfo[] = [
  {
    "id": "bidar",
    "name": "Bidar",
    "marathiName": "ಬೀದರ್",
    "headquarters": "Bidar",
    "image": "/assets/districts/karnataka/bidar.jpg",
    "cx": 479.5,
    "cy": 57.9,
    "link": "/district/bidar"
  },
  {
    "id": "kalaburagi",
    "name": "Kalaburagi",
    "marathiName": "ಕಲಬುರಗಿ",
    "headquarters": "Kalaburagi (Gulbarga)",
    "image": "/assets/districts/karnataka/kalaburagi.jpg",
    "cx": 444.6,
    "cy": 125.4,
    "link": "/district/kalaburagi"
  },
  {
    "id": "belagavi",
    "name": "Belagavi",
    "marathiName": "ಬೆಳಗಾವಿ",
    "headquarters": "Belagavi (Belgaum)",
    "image": "/assets/districts/karnataka/belagavi.jpg",
    "cx": 257.5,
    "cy": 219.8,
    "link": "/district/belagavi"
  },
  {
    "id": "yadgir",
    "name": "Yadgir",
    "marathiName": "ಯಾದಗಿರಿ",
    "headquarters": "Yadgir",
    "image": "/assets/districts/karnataka/yadgir.jpg",
    "cx": 457.1,
    "cy": 177.3,
    "link": "/district/yadgir"
  },
  {
    "id": "bagalkote",
    "name": "Bagalkote",
    "marathiName": "ಬಾಗಲಕೋಟೆ",
    "headquarters": "Bagalkote",
    "image": "/assets/districts/karnataka/bagalkote.jpg",
    "cx": 337.7,
    "cy": 221.7,
    "link": "/district/bagalkote"
  },
  {
    "id": "raichur",
    "name": "Raichur",
    "marathiName": "ರಾಯಚೂರು",
    "headquarters": "Raichur",
    "image": "/assets/districts/karnataka/raichur.jpg",
    "cx": 450.1,
    "cy": 226.7,
    "link": "/district/raichur"
  },
  {
    "id": "koppal",
    "name": "Koppal",
    "marathiName": "ಕೊಪ್ಪಳ",
    "headquarters": "Koppal",
    "image": "/assets/districts/karnataka/koppal.jpg",
    "cx": 382.1,
    "cy": 269,
    "link": "/district/koppal"
  },
  {
    "id": "gadag",
    "name": "Gadag",
    "marathiName": "ಗದುಗ",
    "headquarters": "Gadag-Betageri",
    "image": "/assets/districts/karnataka/gadag.jpg",
    "cx": 338.6,
    "cy": 280.7,
    "link": "/district/gadag"
  },
  {
    "id": "ballari",
    "name": "Ballari",
    "marathiName": "ಬಳ್ಳಾರಿ",
    "headquarters": "Ballari (Bellary)",
    "image": "/assets/districts/karnataka/ballari.jpg",
    "cx": 409.7,
    "cy": 323,
    "link": "/district/ballari"
  },
  {
    "id": "dharwad",
    "name": "Dharwad",
    "marathiName": "ಧಾರವಾಡ",
    "headquarters": "Dharwad",
    "image": "/assets/districts/karnataka/dharwad.jpg",
    "cx": 292.4,
    "cy": 296.2,
    "link": "/district/dharwad"
  },
  {
    "id": "uttarakannada",
    "name": "Uttara Kannada",
    "marathiName": "ಉತ್ತರ ಕನ್ನಡ",
    "headquarters": "Karwar",
    "image": "/assets/districts/karnataka/uttarakannada.jpg",
    "cx": 248.7,
    "cy": 349.1,
    "link": "/district/uttarakannada"
  },
  {
    "id": "haveri",
    "name": "Haveri",
    "marathiName": "ಹಾವೇರಿ",
    "headquarters": "Haveri",
    "image": "/assets/districts/karnataka/haveri.jpg",
    "cx": 317.5,
    "cy": 347.5,
    "link": "/district/haveri"
  },
  {
    "id": "chitradurga",
    "name": "Chitradurga",
    "marathiName": "ಚಿತ್ರದುರ್ಗ",
    "headquarters": "Chitradurga",
    "image": "/assets/districts/karnataka/chitradurga.jpg",
    "cx": 421.3,
    "cy": 389.8,
    "link": "/district/chitradurga"
  },
  {
    "id": "davanagere",
    "name": "Davanagere",
    "marathiName": "ದಾವಣಗೆರೆ",
    "headquarters": "Davanagere",
    "image": "/assets/districts/karnataka/davanagere.jpg",
    "cx": 366.6,
    "cy": 378.1,
    "link": "/district/davanagere"
  },
  {
    "id": "shivamogga",
    "name": "Shivamogga",
    "marathiName": "ಶಿವಮೊಗ್ಗ",
    "headquarters": "Shivamogga (Shimoga)",
    "image": "/assets/districts/karnataka/shivamogga.jpg",
    "cx": 297.2,
    "cy": 413.1,
    "link": "/district/shivamogga"
  },
  {
    "id": "udupi",
    "name": "Udupi",
    "marathiName": "ಉಡುಪಿ",
    "headquarters": "Udupi",
    "image": "/assets/districts/karnataka/udupi.jpg",
    "cx": 271.9,
    "cy": 463.2,
    "link": "/district/udupi"
  },
  {
    "id": "chikkamagaluru",
    "name": "Chikkamagaluru",
    "marathiName": "ಚಿಕ್ಕಮಗಳೂರು",
    "headquarters": "Chikkamagaluru",
    "image": "/assets/districts/karnataka/chikkamagaluru.jpg",
    "cx": 340.7,
    "cy": 466.3,
    "link": "/district/chikkamagaluru"
  },
  {
    "id": "chikkaballapura",
    "name": "Chikkaballapura",
    "marathiName": "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
    "headquarters": "Chikkaballapura",
    "image": "/assets/districts/karnataka/chikkaballapura.jpg",
    "cx": 534.6,
    "cy": 458.6,
    "link": "/district/chikkaballapura"
  },
  {
    "id": "hassan",
    "name": "Hassan",
    "marathiName": "ಹಾಸನ",
    "headquarters": "Hassan",
    "image": "/assets/districts/karnataka/hassan.jpg",
    "cx": 380.6,
    "cy": 512.4,
    "link": "/district/hassan"
  },
  {
    "id": "kolar",
    "name": "Kolar",
    "marathiName": "ಕೋಲಾರ",
    "headquarters": "Kolar",
    "image": "/assets/districts/karnataka/kolar.jpg",
    "cx": 567.7,
    "cy": 495.1,
    "link": "/district/kolar"
  },
  {
    "id": "bengalururural",
    "name": "Bengaluru Rural",
    "marathiName": "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
    "headquarters": "Bengaluru",
    "image": "/assets/districts/karnataka/bengalururural.jpg",
    "cx": 515.6,
    "cy": 490.1,
    "link": "/district/bengalururural"
  },
  {
    "id": "dakshinakannada",
    "name": "Dakshina Kannada",
    "marathiName": "ದಕ್ಷಿಣ ಕನ್ನಡ",
    "headquarters": "Mangaluru",
    "image": "/assets/districts/karnataka/dakshinakannada.jpg",
    "cx": 303,
    "cy": 523.9,
    "link": "/district/dakshinakannada"
  },
  {
    "id": "bengaluruurban",
    "name": "Bengaluru Urban",
    "marathiName": "ಬೆಂಗಳೂರು ನಗರ",
    "headquarters": "Bengaluru",
    "image": "/assets/districts/karnataka/bengaluruurban.jpg",
    "cx": 512.4,
    "cy": 515.3,
    "link": "/district/bengaluruurban"
  },
  {
    "id": "kodagu",
    "name": "Kodagu",
    "marathiName": "ಕೊಡಗು",
    "headquarters": "Madikeri",
    "image": "/assets/districts/karnataka/kodagu.jpg",
    "cx": 351.1,
    "cy": 558.6,
    "link": "/district/kodagu"
  },
  {
    "id": "chamarajanagara",
    "name": "Chamarajanagara",
    "marathiName": "ಚಾಮರಾಜನಗರ",
    "headquarters": "Chamarajanagara",
    "image": "/assets/districts/karnataka/chamarajanagara.jpg",
    "cx": 461.9,
    "cy": 600.2,
    "link": "/district/chamarajanagara"
  },
  {
    "id": "tumakuru",
    "name": "Tumakuru",
    "marathiName": "ತುಮಕೂರು",
    "headquarters": "Tumakuru (Tumkur)",
    "image": "/assets/districts/karnataka/tumakuru.jpg",
    "cx": 463.6,
    "cy": 454.1,
    "link": "/district/tumakuru"
  },
  {
    "id": "ramanagara",
    "name": "Ramanagara",
    "marathiName": "ರಾಮನಗರ",
    "headquarters": "Ramanagara",
    "image": "/assets/districts/karnataka/ramanagara.jpg",
    "cx": 488.8,
    "cy": 529.3,
    "link": "/district/ramanagara"
  },
  {
    "id": "mandya",
    "name": "Mandya",
    "marathiName": "ಮಂಡ್ಯ",
    "headquarters": "Mandya",
    "image": "/assets/districts/karnataka/mandya.jpg",
    "cx": 442.9,
    "cy": 545.6,
    "link": "/district/mandya"
  },
  {
    "id": "mysuru",
    "name": "Mysuru",
    "marathiName": "ಮೈಸೂರು",
    "headquarters": "Mysuru (Mysore)",
    "image": "/assets/districts/karnataka/mysuru.jpg",
    "cx": 420.4,
    "cy": 575.8,
    "link": "/district/mysuru"
  },
  {
    "id": "vijayapura",
    "name": "Vijayapura",
    "marathiName": "ವಿಜಯಪುರ",
    "headquarters": "Vijayapura (Bijapur)",
    "image": "/assets/districts/karnataka/vijayapura.jpg",
    "cx": 366,
    "cy": 157.7,
    "link": "/district/vijayapura"
  }
];

export const madhyaPradeshDistrictsData: DistrictInfo[] = [
  {
    "id": "anuppur",
    "name": "Anuppur",
    "marathiName": "अनूपपुर",
    "headquarters": "Anuppur",
    "image": "/assets/districts/madhyapradesh/anuppur.jpg",
    "cx": 702.3,
    "cy": 394.6,
    "link": "/district/anuppur"
  },
  {
    "id": "ashoknagar",
    "name": "Ashoknagar",
    "marathiName": "अशोकनगर",
    "headquarters": "Ashoknagar",
    "image": "/assets/districts/madhyapradesh/ashoknagar.jpg",
    "cx": 348.1,
    "cy": 267.4,
    "link": "/district/ashoknagar"
  },
  {
    "id": "balaghat",
    "name": "Balaghat",
    "marathiName": "बालाघाट",
    "headquarters": "Balaghat",
    "image": "/assets/districts/madhyapradesh/balaghat.jpg",
    "cx": 575.6,
    "cy": 515.9,
    "link": "/district/balaghat"
  },
  {
    "id": "barwani",
    "name": "Barwani",
    "marathiName": "बड़वानी",
    "headquarters": "Barwani",
    "image": "/assets/districts/madhyapradesh/barwani.jpg",
    "cx": 91.8,
    "cy": 524.5,
    "link": "/district/barwani"
  },
  {
    "id": "betul",
    "name": "Betul",
    "marathiName": "बैतूल",
    "headquarters": "Betul",
    "image": "/assets/districts/madhyapradesh/betul.jpg",
    "cx": 344.4,
    "cy": 501.4,
    "link": "/district/betul"
  },
  {
    "id": "bhind",
    "name": "Bhind",
    "marathiName": "भिंड",
    "headquarters": "Bhind",
    "image": "/assets/districts/madhyapradesh/bhind.jpg",
    "cx": 429.9,
    "cy": 115.7,
    "link": "/district/bhind"
  },
  {
    "id": "bhopal",
    "name": "Bhopal",
    "marathiName": "भोपाल",
    "headquarters": "Bhopal",
    "image": "/assets/districts/madhyapradesh/bhopal.jpg",
    "cx": 309.7,
    "cy": 368.4,
    "link": "/district/bhopal"
  },
  {
    "id": "burhanpur",
    "name": "Burhanpur",
    "marathiName": "बुरहानपुर",
    "headquarters": "Burhanpur",
    "image": "/assets/districts/madhyapradesh/burhanpur.jpg",
    "cx": 209,
    "cy": 554.1,
    "link": "/district/burhanpur"
  },
  {
    "id": "chhatarpur",
    "name": "Chhatarpur",
    "marathiName": "छतरपुर",
    "headquarters": "Chhatarpur",
    "image": "/assets/districts/madhyapradesh/chhatarpur.jpg",
    "cx": 500.3,
    "cy": 251.4,
    "link": "/district/chhatarpur"
  },
  {
    "id": "chhindwara",
    "name": "Chhindwara",
    "marathiName": "छिंदवाड़ा",
    "headquarters": "Chhindwara",
    "image": "/assets/districts/madhyapradesh/chhindwara.jpg",
    "cx": 430.1,
    "cy": 478.3,
    "link": "/district/chhindwara"
  },
  {
    "id": "damoh",
    "name": "Damoh",
    "marathiName": "दमोह",
    "headquarters": "Damoh",
    "image": "/assets/districts/madhyapradesh/damoh.jpg",
    "cx": 492.1,
    "cy": 343.3,
    "link": "/district/damoh"
  },
  {
    "id": "datia",
    "name": "Datia",
    "marathiName": "दतिया",
    "headquarters": "Datia",
    "image": "/assets/districts/madhyapradesh/datia.jpg",
    "cx": 419.1,
    "cy": 155.8,
    "link": "/district/datia"
  },
  {
    "id": "dewas",
    "name": "Dewas",
    "marathiName": "देवास",
    "headquarters": "Dewas",
    "image": "/assets/districts/madhyapradesh/dewas.jpg",
    "cx": 227.9,
    "cy": 429.4,
    "link": "/district/dewas"
  },
  {
    "id": "dhar",
    "name": "Dhar",
    "marathiName": "धार",
    "headquarters": "Dhar",
    "image": "/assets/districts/madhyapradesh/dhar.jpg",
    "cx": 109.4,
    "cy": 448.1,
    "link": "/district/dhar"
  },
  {
    "id": "dindori",
    "name": "Dindori",
    "marathiName": "डिंडोरी",
    "headquarters": "Dindori",
    "image": "/assets/districts/madhyapradesh/dindori.jpg",
    "cx": 630.1,
    "cy": 424.8,
    "link": "/district/dindori"
  },
  {
    "id": "khandwaeastnimar",
    "name": "Khandwa (East Nimar)",
    "marathiName": "खंडवा",
    "headquarters": "Khandwa",
    "image": "/assets/districts/madhyapradesh/khandwaeastnimar.jpg",
    "cx": 236.5,
    "cy": 489.6,
    "link": "/district/khandwaeastnimar"
  },
  {
    "id": "guna",
    "name": "Guna",
    "marathiName": "गुना",
    "headquarters": "Guna",
    "image": "/assets/districts/madhyapradesh/guna.jpg",
    "cx": 294.9,
    "cy": 279.7,
    "link": "/district/guna"
  },
  {
    "id": "gwalior",
    "name": "Gwalior",
    "marathiName": "ग्वालियर",
    "headquarters": "Gwalior",
    "image": "/assets/districts/madhyapradesh/gwalior.jpg",
    "cx": 374.2,
    "cy": 143.7,
    "link": "/district/gwalior"
  },
  {
    "id": "harda",
    "name": "Harda",
    "marathiName": "हरदा",
    "headquarters": "Harda",
    "image": "/assets/districts/madhyapradesh/harda.jpg",
    "cx": 281.4,
    "cy": 478.3,
    "link": "/district/harda"
  },
  {
    "id": "narmadapuramhoshangabad",
    "name": "Narmadapuram (Hoshangabad)",
    "marathiName": "नर्मदापुरम",
    "headquarters": "Narmadapuram",
    "image": "/assets/districts/madhyapradesh/narmadapuramhoshangabad.jpg",
    "cx": 364.9,
    "cy": 446.1,
    "link": "/district/narmadapuramhoshangabad"
  },
  {
    "id": "indore",
    "name": "Indore",
    "marathiName": "इंदौर",
    "headquarters": "Indore",
    "image": "/assets/districts/madhyapradesh/indore.jpg",
    "cx": 179.9,
    "cy": 438.6,
    "link": "/district/indore"
  },
  {
    "id": "jabalpur",
    "name": "Jabalpur",
    "marathiName": "जबलपुर",
    "headquarters": "Jabalpur",
    "image": "/assets/districts/madhyapradesh/jabalpur.jpg",
    "cx": 537.1,
    "cy": 394.3,
    "link": "/district/jabalpur"
  },
  {
    "id": "jhabua",
    "name": "Jhabua",
    "marathiName": "झाबुआ",
    "headquarters": "Jhabua",
    "image": "/assets/districts/madhyapradesh/jhabua.jpg",
    "cx": 47.9,
    "cy": 461.5,
    "link": "/district/jhabua"
  },
  {
    "id": "katni",
    "name": "Katni",
    "marathiName": "कटनी",
    "headquarters": "Katni",
    "image": "/assets/districts/madhyapradesh/katni.jpg",
    "cx": 568.2,
    "cy": 347,
    "link": "/district/katni"
  },
  {
    "id": "mandla",
    "name": "Mandla",
    "marathiName": "मंडला",
    "headquarters": "Mandla",
    "image": "/assets/districts/madhyapradesh/mandla.jpg",
    "cx": 572.4,
    "cy": 436.6,
    "link": "/district/mandla"
  },
  {
    "id": "mandsaur",
    "name": "Mandsaur",
    "marathiName": "मंदसौर",
    "headquarters": "Mandsaur",
    "image": "/assets/districts/madhyapradesh/mandsaur.jpg",
    "cx": 138,
    "cy": 305.9,
    "link": "/district/mandsaur"
  },
  {
    "id": "morena",
    "name": "Morena",
    "marathiName": "मुरैना",
    "headquarters": "Morena",
    "image": "/assets/districts/madhyapradesh/morena.jpg",
    "cx": 352.9,
    "cy": 114.5,
    "link": "/district/morena"
  },
  {
    "id": "narsinghpur",
    "name": "Narsinghpur",
    "marathiName": "नरसिंहपुर",
    "headquarters": "Narsinghpur",
    "image": "/assets/districts/madhyapradesh/narsinghpur.jpg",
    "cx": 451,
    "cy": 414.8,
    "link": "/district/narsinghpur"
  },
  {
    "id": "neemuch",
    "name": "Neemuch",
    "marathiName": "नीमच",
    "headquarters": "Neemuch",
    "image": "/assets/districts/madhyapradesh/neemuch.jpg",
    "cx": 105.5,
    "cy": 261.1,
    "link": "/district/neemuch"
  },
  {
    "id": "panna",
    "name": "Panna",
    "marathiName": "पन्ना",
    "headquarters": "Panna",
    "image": "/assets/districts/madhyapradesh/panna.jpg",
    "cx": 557.1,
    "cy": 283.2,
    "link": "/district/panna"
  },
  {
    "id": "raisen",
    "name": "Raisen",
    "marathiName": "रायसेन",
    "headquarters": "Raisen",
    "image": "/assets/districts/madhyapradesh/raisen.jpg",
    "cx": 377.3,
    "cy": 384.9,
    "link": "/district/raisen"
  },
  {
    "id": "rajgarh",
    "name": "Rajgarh",
    "marathiName": "राजगढ़",
    "headquarters": "Rajgarh",
    "image": "/assets/districts/madhyapradesh/rajgarh.jpg",
    "cx": 245.8,
    "cy": 341.6,
    "link": "/district/rajgarh"
  },
  {
    "id": "ratlam",
    "name": "Ratlam",
    "marathiName": "रतलाम",
    "headquarters": "Ratlam",
    "image": "/assets/districts/madhyapradesh/ratlam.jpg",
    "cx": 112.8,
    "cy": 366.4,
    "link": "/district/ratlam"
  },
  {
    "id": "rewa",
    "name": "Rewa",
    "marathiName": "रीवा",
    "headquarters": "Rewa",
    "image": "/assets/districts/madhyapradesh/rewa.jpg",
    "cx": 676.9,
    "cy": 247.2,
    "link": "/district/rewa"
  },
  {
    "id": "sagar",
    "name": "Sagar",
    "marathiName": "सागर",
    "headquarters": "Sagar",
    "image": "/assets/districts/madhyapradesh/sagar.jpg",
    "cx": 426.2,
    "cy": 340.3,
    "link": "/district/sagar"
  },
  {
    "id": "satna",
    "name": "Satna",
    "marathiName": "सतना",
    "headquarters": "Satna",
    "image": "/assets/districts/madhyapradesh/satna.jpg",
    "cx": 604.9,
    "cy": 267.7,
    "link": "/district/satna"
  },
  {
    "id": "sehore",
    "name": "Sehore",
    "marathiName": "सीहोर",
    "headquarters": "Sehore",
    "image": "/assets/districts/madhyapradesh/sehore.jpg",
    "cx": 281.2,
    "cy": 416.7,
    "link": "/district/sehore"
  },
  {
    "id": "seoni",
    "name": "Seoni",
    "marathiName": "सिवनी",
    "headquarters": "Seoni",
    "image": "/assets/districts/madhyapradesh/seoni.jpg",
    "cx": 508.8,
    "cy": 469.2,
    "link": "/district/seoni"
  },
  {
    "id": "shahdol",
    "name": "Shahdol",
    "marathiName": "शहडोल",
    "headquarters": "Shahdol",
    "image": "/assets/districts/madhyapradesh/shahdol.jpg",
    "cx": 666.7,
    "cy": 371.2,
    "link": "/district/shahdol"
  },
  {
    "id": "shajapur",
    "name": "Shajapur",
    "marathiName": "शाजापुर",
    "headquarters": "Shajapur",
    "image": "/assets/districts/madhyapradesh/shajapur.jpg",
    "cx": 216.9,
    "cy": 360.8,
    "link": "/district/shajapur"
  },
  {
    "id": "sheopur",
    "name": "Sheopur",
    "marathiName": "श्योपुर",
    "headquarters": "Sheopur",
    "image": "/assets/districts/madhyapradesh/sheopur.jpg",
    "cx": 290.1,
    "cy": 166.6,
    "link": "/district/sheopur"
  },
  {
    "id": "shivpuri",
    "name": "Shivpuri",
    "marathiName": "शिवपुरी",
    "headquarters": "Shivpuri",
    "image": "/assets/districts/madhyapradesh/shivpuri.jpg",
    "cx": 341,
    "cy": 201.8,
    "link": "/district/shivpuri"
  },
  {
    "id": "sidhi",
    "name": "Sidhi",
    "marathiName": "सीधी",
    "headquarters": "Sidhi",
    "image": "/assets/districts/madhyapradesh/sidhi.jpg",
    "cx": 723.4,
    "cy": 307.4,
    "link": "/district/sidhi"
  },
  {
    "id": "tikamgarh",
    "name": "Tikamgarh",
    "marathiName": "टीकमगढ़",
    "headquarters": "Tikamgarh",
    "image": "/assets/districts/madhyapradesh/tikamgarh.jpg",
    "cx": 441.5,
    "cy": 222.6,
    "link": "/district/tikamgarh"
  },
  {
    "id": "ujjain",
    "name": "Ujjain",
    "marathiName": "उज्जैन",
    "headquarters": "Ujjain",
    "image": "/assets/districts/madhyapradesh/ujjain.jpg",
    "cx": 170.3,
    "cy": 382.5,
    "link": "/district/ujjain"
  },
  {
    "id": "umaria",
    "name": "Umaria",
    "marathiName": "उमरिया",
    "headquarters": "Umaria",
    "image": "/assets/districts/madhyapradesh/umaria.jpg",
    "cx": 618.3,
    "cy": 358.2,
    "link": "/district/umaria"
  },
  {
    "id": "vidisha",
    "name": "Vidisha",
    "marathiName": "विदिशा",
    "headquarters": "Vidisha",
    "image": "/assets/districts/madhyapradesh/vidisha.jpg",
    "cx": 354.4,
    "cy": 337.9,
    "link": "/district/vidisha"
  },
  {
    "id": "khargonewestnimar",
    "name": "Khargone (West Nimar)",
    "marathiName": "खरगोन",
    "headquarters": "Khargone",
    "image": "/assets/districts/madhyapradesh/khargonewestnimar.jpg",
    "cx": 176.4,
    "cy": 495.9,
    "link": "/district/khargonewestnimar"
  }
];

export const rajasthanDistrictsData: DistrictInfo[] = [
  {
    "id": "ajmer",
    "name": "Ajmer",
    "marathiName": "अजमेर",
    "headquarters": "Ajmer",
    "image": "/assets/districts/rajasthan/ajmer.jpg",
    "cx": 470.6,
    "cy": 361.7,
    "link": "/district/ajmer"
  },
  {
    "id": "alwar",
    "name": "Alwar",
    "marathiName": "अलवर",
    "headquarters": "Alwar",
    "image": "/assets/districts/rajasthan/alwar.jpg",
    "cx": 637.8,
    "cy": 246,
    "link": "/district/alwar"
  },
  {
    "id": "banswara",
    "name": "Banswara",
    "marathiName": "बांसवाड़ा",
    "headquarters": "Banswara",
    "image": "/assets/districts/rajasthan/banswara.jpg",
    "cx": 448.7,
    "cy": 596.6,
    "link": "/district/banswara"
  },
  {
    "id": "baran",
    "name": "Baran",
    "marathiName": "बारां",
    "headquarters": "Baran",
    "image": "/assets/districts/rajasthan/baran.jpg",
    "cx": 655.6,
    "cy": 466,
    "link": "/district/baran"
  },
  {
    "id": "barmer",
    "name": "Barmer",
    "marathiName": "बाड़मेर",
    "headquarters": "Barmer",
    "image": "/assets/districts/rajasthan/barmer.jpg",
    "cx": 197.3,
    "cy": 398.4,
    "link": "/district/barmer"
  },
  {
    "id": "bharatpur",
    "name": "Bharatpur",
    "marathiName": "भरतपुर",
    "headquarters": "Bharatpur",
    "image": "/assets/districts/rajasthan/bharatpur.jpg",
    "cx": 686,
    "cy": 265.5,
    "link": "/district/bharatpur"
  },
  {
    "id": "bhilwara",
    "name": "Bhilwara",
    "marathiName": "भीलवाड़ा",
    "headquarters": "Bhilwara",
    "image": "/assets/districts/rajasthan/bhilwara.jpg",
    "cx": 465.6,
    "cy": 425.7,
    "link": "/district/bhilwara"
  },
  {
    "id": "bikaner",
    "name": "Bikaner",
    "marathiName": "बीकानेर",
    "headquarters": "Bikaner",
    "image": "/assets/districts/rajasthan/bikaner.jpg",
    "cx": 348.4,
    "cy": 197.1,
    "link": "/district/bikaner"
  },
  {
    "id": "bundi",
    "name": "Bundi",
    "marathiName": "बूंदी",
    "headquarters": "Bundi",
    "image": "/assets/districts/rajasthan/bundi.jpg",
    "cx": 564.8,
    "cy": 422.8,
    "link": "/district/bundi"
  },
  {
    "id": "chittaurgarh",
    "name": "Chittorgarh",
    "marathiName": "चित्तौड़गढ़",
    "headquarters": "Chittorgarh",
    "image": "/assets/districts/rajasthan/chittaurgarh.jpg",
    "cx": 479.3,
    "cy": 495.8,
    "link": "/district/chittaurgarh"
  },
  {
    "id": "churu",
    "name": "Churu",
    "marathiName": "चूरू",
    "headquarters": "Churu",
    "image": "/assets/districts/rajasthan/churu.jpg",
    "cx": 467.2,
    "cy": 182.6,
    "link": "/district/churu"
  },
  {
    "id": "dausa",
    "name": "Dausa",
    "marathiName": "दौसा",
    "headquarters": "Dausa",
    "image": "/assets/districts/rajasthan/dausa.jpg",
    "cx": 631,
    "cy": 300.8,
    "link": "/district/dausa"
  },
  {
    "id": "dhaulpur",
    "name": "Dholpur",
    "marathiName": "धौलपुर",
    "headquarters": "Dholpur",
    "image": "/assets/districts/rajasthan/dhaulpur.jpg",
    "cx": 731.1,
    "cy": 316.9,
    "link": "/district/dhaulpur"
  },
  {
    "id": "dungarpur",
    "name": "Dungarpur",
    "marathiName": "डूंगरपुर",
    "headquarters": "Dungarpur",
    "image": "/assets/districts/rajasthan/dungarpur.jpg",
    "cx": 397.8,
    "cy": 571.1,
    "link": "/district/dungarpur"
  },
  {
    "id": "ganganagar",
    "name": "Sri Ganganagar",
    "marathiName": "श्रीगंगानगर",
    "headquarters": "Sri Ganganagar",
    "image": "/assets/districts/rajasthan/ganganagar.jpg",
    "cx": 373.4,
    "cy": 100.2,
    "link": "/district/ganganagar"
  },
  {
    "id": "hanumangarh",
    "name": "Hanumangarh",
    "marathiName": "हनुमानगढ़",
    "headquarters": "Hanumangarh",
    "image": "/assets/districts/rajasthan/hanumangarh.jpg",
    "cx": 474.7,
    "cy": 106.7,
    "link": "/district/hanumangarh"
  },
  {
    "id": "jaipur",
    "name": "Jaipur",
    "marathiName": "जयपुर",
    "headquarters": "Jaipur",
    "image": "/assets/districts/rajasthan/jaipur.jpg",
    "cx": 562.3,
    "cy": 290.4,
    "link": "/district/jaipur"
  },
  {
    "id": "jaisalmer",
    "name": "Jaisalmer",
    "marathiName": "जैसलमेर",
    "headquarters": "Jaisalmer",
    "image": "/assets/districts/rajasthan/jaisalmer.jpg",
    "cx": 170,
    "cy": 304.5,
    "link": "/district/jaisalmer"
  },
  {
    "id": "jalor",
    "name": "Jalore",
    "marathiName": "जालौर",
    "headquarters": "Jalore",
    "image": "/assets/districts/rajasthan/jalor.jpg",
    "cx": 255.8,
    "cy": 457.8,
    "link": "/district/jalor"
  },
  {
    "id": "jhalawar",
    "name": "Jhalawar",
    "marathiName": "झालावाड़",
    "headquarters": "Jhalawar",
    "image": "/assets/districts/rajasthan/jhalawar.jpg",
    "cx": 591.5,
    "cy": 528.7,
    "link": "/district/jhalawar"
  },
  {
    "id": "jhunjhunun",
    "name": "Jhunjhunu",
    "marathiName": "झुंझुनूं",
    "headquarters": "Jhunjhunu",
    "image": "/assets/districts/rajasthan/jhunjhunun.jpg",
    "cx": 541.6,
    "cy": 196.2,
    "link": "/district/jhunjhunun"
  },
  {
    "id": "jodhpur",
    "name": "Jodhpur",
    "marathiName": "जोधपुर",
    "headquarters": "Jodhpur",
    "image": "/assets/districts/rajasthan/jodhpur.jpg",
    "cx": 325.7,
    "cy": 320.8,
    "link": "/district/jodhpur"
  },
  {
    "id": "karauli",
    "name": "Karauli",
    "marathiName": "करौली",
    "headquarters": "Karauli",
    "image": "/assets/districts/rajasthan/karauli.jpg",
    "cx": 664.1,
    "cy": 334.4,
    "link": "/district/karauli"
  },
  {
    "id": "kota",
    "name": "Kota",
    "marathiName": "कोटा",
    "headquarters": "Kota",
    "image": "/assets/districts/rajasthan/kota.jpg",
    "cx": 597.8,
    "cy": 449.3,
    "link": "/district/kota"
  },
  {
    "id": "nagaur",
    "name": "Nagaur",
    "marathiName": "नागौर",
    "headquarters": "Nagaur",
    "image": "/assets/districts/rajasthan/nagaur.jpg",
    "cx": 423,
    "cy": 286.5,
    "link": "/district/nagaur"
  },
  {
    "id": "pali",
    "name": "Pali",
    "marathiName": "पाली",
    "headquarters": "Pali",
    "image": "/assets/districts/rajasthan/pali.jpg",
    "cx": 372.6,
    "cy": 395.5,
    "link": "/district/pali"
  },
  {
    "id": "rajsamand",
    "name": "Rajsamand",
    "marathiName": "राजसमंद",
    "headquarters": "Rajsamand",
    "image": "/assets/districts/rajasthan/rajsamand.jpg",
    "cx": 407.9,
    "cy": 443,
    "link": "/district/rajsamand"
  },
  {
    "id": "sawaimadhopur",
    "name": "Sawai Madhopur",
    "marathiName": "सवाई माधोपुर",
    "headquarters": "Sawai Madhopur",
    "image": "/assets/districts/rajasthan/sawaimadhopur.jpg",
    "cx": 618,
    "cy": 357.3,
    "link": "/district/sawaimadhopur"
  },
  {
    "id": "sikar",
    "name": "Sikar",
    "marathiName": "सीकर",
    "headquarters": "Sikar",
    "image": "/assets/districts/rajasthan/sikar.jpg",
    "cx": 521.5,
    "cy": 238,
    "link": "/district/sikar"
  },
  {
    "id": "sirohi",
    "name": "Sirohi",
    "marathiName": "सिरोही",
    "headquarters": "Sirohi",
    "image": "/assets/districts/rajasthan/sirohi.jpg",
    "cx": 304.2,
    "cy": 481.6,
    "link": "/district/sirohi"
  },
  {
    "id": "tonk",
    "name": "Tonk",
    "marathiName": "टोंक",
    "headquarters": "Tonk",
    "image": "/assets/districts/rajasthan/tonk.jpg",
    "cx": 564.1,
    "cy": 365.6,
    "link": "/district/tonk"
  },
  {
    "id": "udaipur",
    "name": "Udaipur",
    "marathiName": "उदयपुर",
    "headquarters": "Udaipur",
    "image": "/assets/districts/rajasthan/udaipur.jpg",
    "cx": 397.2,
    "cy": 512.1,
    "link": "/district/udaipur"
  }
];




export const uttarPradeshDistrictsData: DistrictInfo[] = [
  {
    "id": "amroha",
    "name": "Amroha",
    "marathiName": "अमरोहा",
    "headquarters": "Amroha",
    "image": "/assets/districts/uttarpradesh/amroha.jpg",
    "cx": 181.9,
    "cy": 179.8,
    "link": "/district/amroha"
  },
  {
    "id": "hapur",
    "name": "Hapur",
    "marathiName": "हापुड़",
    "headquarters": "Hapur",
    "image": "/assets/districts/uttarpradesh/hapur.jpg",
    "cx": 139.2,
    "cy": 187.4,
    "link": "/district/hapur"
  },
  {
    "id": "bareilly",
    "name": "Bareilly",
    "marathiName": "बरेली",
    "headquarters": "Bareilly",
    "image": "/assets/districts/uttarpradesh/bareilly.jpg",
    "cx": 277.5,
    "cy": 209.7,
    "link": "/district/bareilly"
  },
  {
    "id": "pilibhit",
    "name": "Pilibhit",
    "marathiName": "पीलीभीत",
    "headquarters": "Pilibhit",
    "image": "/assets/districts/uttarpradesh/pilibhit.jpg",
    "cx": 319.4,
    "cy": 206.5,
    "link": "/district/pilibhit"
  },
  {
    "id": "bulandshahr",
    "name": "Bulandshahr",
    "marathiName": "बुलंदशहर",
    "headquarters": "Bulandshahr",
    "image": "/assets/districts/uttarpradesh/bulandshahr.jpg",
    "cx": 153.1,
    "cy": 221.9,
    "link": "/district/bulandshahr"
  },
  {
    "id": "gautambuddhanagar",
    "name": "Gautam Buddha Nagar",
    "marathiName": "गौतम बुद्ध नगर",
    "headquarters": "Gautam Buddha Nagar",
    "image": "/assets/districts/uttarpradesh/gautambuddhanagar.jpg",
    "cx": 111.1,
    "cy": 217.9,
    "link": "/district/gautambuddhanagar"
  },
  {
    "id": "lakhimpurkheri",
    "name": "Lakhimpur Kheri",
    "marathiName": "Lakhimpur Kheri",
    "headquarters": "Lakhimpur Kheri",
    "image": "/assets/districts/uttarpradesh/lakhimpurkheri.jpg",
    "cx": 386.3,
    "cy": 243.4,
    "link": "/district/lakhimpurkheri"
  },
  {
    "id": "budaun",
    "name": "Budaun",
    "marathiName": "बदायूं",
    "headquarters": "Budaun",
    "image": "/assets/districts/uttarpradesh/budaun.jpg",
    "cx": 243.8,
    "cy": 241.8,
    "link": "/district/budaun"
  },
  {
    "id": "bahraich",
    "name": "Bahraich",
    "marathiName": "बहराइच",
    "headquarters": "Bahraich",
    "image": "/assets/districts/uttarpradesh/bahraich.jpg",
    "cx": 458.4,
    "cy": 281.9,
    "link": "/district/bahraich"
  },
  {
    "id": "shahjahanpur",
    "name": "Shahjahanpur",
    "marathiName": "शाहजहांपुर",
    "headquarters": "Shahjahanpur",
    "image": "/assets/districts/uttarpradesh/shahjahanpur.jpg",
    "cx": 307.8,
    "cy": 255.3,
    "link": "/district/shahjahanpur"
  },
  {
    "id": "aligarh",
    "name": "Aligarh",
    "marathiName": "अलीगढ़",
    "headquarters": "Aligarh",
    "image": "/assets/districts/uttarpradesh/aligarh.jpg",
    "cx": 154.8,
    "cy": 257,
    "link": "/district/aligarh"
  },
  {
    "id": "kasganj",
    "name": "Kasganj",
    "marathiName": "कासगंज",
    "headquarters": "Kasganj",
    "image": "/assets/districts/uttarpradesh/kasganj.jpg",
    "cx": 223.6,
    "cy": 270.5,
    "link": "/district/kasganj"
  },
  {
    "id": "mathura",
    "name": "Mathura",
    "marathiName": "मथुरा",
    "headquarters": "Mathura",
    "image": "/assets/districts/uttarpradesh/mathura.jpg",
    "cx": 122.1,
    "cy": 288.4,
    "link": "/district/mathura"
  },
  {
    "id": "shrawasti",
    "name": "Shrawasti",
    "marathiName": "Shrawasti",
    "headquarters": "Shrawasti",
    "image": "/assets/districts/uttarpradesh/shrawasti.jpg",
    "cx": 489.8,
    "cy": 278.7,
    "link": "/district/shrawasti"
  },
  {
    "id": "sitapur",
    "name": "Sitapur",
    "marathiName": "सीतापुर",
    "headquarters": "Sitapur",
    "image": "/assets/districts/uttarpradesh/sitapur.jpg",
    "cx": 406.1,
    "cy": 293.8,
    "link": "/district/sitapur"
  },
  {
    "id": "hathras",
    "name": "Hathras",
    "marathiName": "हाथरस",
    "headquarters": "Hathras",
    "image": "/assets/districts/uttarpradesh/hathras.jpg",
    "cx": 161.7,
    "cy": 288,
    "link": "/district/hathras"
  },
  {
    "id": "etah",
    "name": "Etah",
    "marathiName": "एटा",
    "headquarters": "Etah",
    "image": "/assets/districts/uttarpradesh/etah.jpg",
    "cx": 214.3,
    "cy": 293.5,
    "link": "/district/etah"
  },
  {
    "id": "hardoi",
    "name": "Hardoi",
    "marathiName": "हरदोई",
    "headquarters": "Hardoi",
    "image": "/assets/districts/uttarpradesh/hardoi.jpg",
    "cx": 341.1,
    "cy": 309,
    "link": "/district/hardoi"
  },
  {
    "id": "farrukhabad",
    "name": "Farrukhabad",
    "marathiName": "फर्रुखाबाद",
    "headquarters": "Farrukhabad",
    "image": "/assets/districts/uttarpradesh/farrukhabad.jpg",
    "cx": 276.2,
    "cy": 297.9,
    "link": "/district/farrukhabad"
  },
  {
    "id": "firozabad",
    "name": "Firozabad",
    "marathiName": "फिरोजाबाद",
    "headquarters": "Firozabad",
    "image": "/assets/districts/uttarpradesh/firozabad.jpg",
    "cx": 196.9,
    "cy": 324.3,
    "link": "/district/firozabad"
  },
  {
    "id": "siddharthnagar",
    "name": "Siddharthnagar",
    "marathiName": "सिद्धार्थनगर",
    "headquarters": "Siddharthnagar",
    "image": "/assets/districts/uttarpradesh/siddharthnagar.jpg",
    "cx": 568.2,
    "cy": 317.4,
    "link": "/district/siddharthnagar"
  },
  {
    "id": "mainpuri",
    "name": "Mainpuri",
    "marathiName": "मैनपुरी",
    "headquarters": "Mainpuri",
    "image": "/assets/districts/uttarpradesh/mainpuri.jpg",
    "cx": 239.8,
    "cy": 322.4,
    "link": "/district/mainpuri"
  },
  {
    "id": "maharajganj",
    "name": "Maharajganj",
    "marathiName": "महाराजगंज",
    "headquarters": "Maharajganj",
    "image": "/assets/districts/uttarpradesh/maharajganj.jpg",
    "cx": 632.5,
    "cy": 325.7,
    "link": "/district/maharajganj"
  },
  {
    "id": "agra",
    "name": "Agra",
    "marathiName": "आगरा",
    "headquarters": "Agra",
    "image": "/assets/districts/uttarpradesh/agra.jpg",
    "cx": 158.9,
    "cy": 335.2,
    "link": "/district/agra"
  },
  {
    "id": "gonda",
    "name": "Gonda",
    "marathiName": "गोंडा",
    "headquarters": "Gonda",
    "image": "/assets/districts/uttarpradesh/gonda.jpg",
    "cx": 507.6,
    "cy": 327.2,
    "link": "/district/gonda"
  },
  {
    "id": "barabanki",
    "name": "Barabanki",
    "marathiName": "बाराबंकी",
    "headquarters": "Barabanki",
    "image": "/assets/districts/uttarpradesh/barabanki.jpg",
    "cx": 440.6,
    "cy": 339.5,
    "link": "/district/barabanki"
  },
  {
    "id": "kushinagar",
    "name": "Kushinagar",
    "marathiName": "कुशीनगर",
    "headquarters": "Kushinagar",
    "image": "/assets/districts/uttarpradesh/kushinagar.jpg",
    "cx": 664.1,
    "cy": 345.1,
    "link": "/district/kushinagar"
  },
  {
    "id": "kannauj",
    "name": "Kannauj",
    "marathiName": "कन्नौज",
    "headquarters": "Kannauj",
    "image": "/assets/districts/uttarpradesh/kannauj.jpg",
    "cx": 297.9,
    "cy": 337.4,
    "link": "/district/kannauj"
  },
  {
    "id": "lucknow",
    "name": "Lucknow",
    "marathiName": "लखनऊ",
    "headquarters": "Lucknow",
    "image": "/assets/districts/uttarpradesh/lucknow.jpg",
    "cx": 402.9,
    "cy": 349.7,
    "link": "/district/lucknow"
  },
  {
    "id": "basti",
    "name": "Basti",
    "marathiName": "बस्ती",
    "headquarters": "Basti",
    "image": "/assets/districts/uttarpradesh/basti.jpg",
    "cx": 557.7,
    "cy": 348.5,
    "link": "/district/basti"
  },
  {
    "id": "gorakhpur",
    "name": "Gorakhpur",
    "marathiName": "गोरखपुर",
    "headquarters": "Gorakhpur",
    "image": "/assets/districts/uttarpradesh/gorakhpur.jpg",
    "cx": 616.5,
    "cy": 360.8,
    "link": "/district/gorakhpur"
  },
  {
    "id": "santkabirnagar",
    "name": "Sant Kabir Nagar",
    "marathiName": "संत कबीर नगर",
    "headquarters": "Sant Kabir Nagar",
    "image": "/assets/districts/uttarpradesh/santkabirnagar.jpg",
    "cx": 590.4,
    "cy": 351.8,
    "link": "/district/santkabirnagar"
  },
  {
    "id": "unnao",
    "name": "Unnao",
    "marathiName": "उन्नाव",
    "headquarters": "Unnao",
    "image": "/assets/districts/uttarpradesh/unnao.jpg",
    "cx": 379,
    "cy": 369.8,
    "link": "/district/unnao"
  },
  {
    "id": "etawah",
    "name": "Etawah",
    "marathiName": "इटावा",
    "headquarters": "Etawah",
    "image": "/assets/districts/uttarpradesh/etawah.jpg",
    "cx": 243.6,
    "cy": 357.7,
    "link": "/district/etawah"
  },
  {
    "id": "kanpurnagar",
    "name": "Kanpur Nagar",
    "marathiName": "कानपुर नगर",
    "headquarters": "Kanpur Nagar",
    "image": "/assets/districts/uttarpradesh/kanpurnagar.jpg",
    "cx": 336.5,
    "cy": 383.4,
    "link": "/district/kanpurnagar"
  },
  {
    "id": "auraiya",
    "name": "Auraiya",
    "marathiName": "औरैया",
    "headquarters": "Auraiya",
    "image": "/assets/districts/uttarpradesh/auraiya.jpg",
    "cx": 279.2,
    "cy": 364.4,
    "link": "/district/auraiya"
  },
  {
    "id": "ayodhya",
    "name": "Ayodhya",
    "marathiName": "अयोध्या",
    "headquarters": "Ayodhya",
    "image": "/assets/districts/uttarpradesh/ayodhya.jpg",
    "cx": 497.7,
    "cy": 370.1,
    "link": "/district/ayodhya"
  },
  {
    "id": "kanpurdehat",
    "name": "Kanpur Dehat",
    "marathiName": "कानपुर देहात",
    "headquarters": "Kanpur Dehat",
    "image": "/assets/districts/uttarpradesh/kanpurdehat.jpg",
    "cx": 315.7,
    "cy": 385.1,
    "link": "/district/kanpurdehat"
  },
  {
    "id": "deoria",
    "name": "Deoria",
    "marathiName": "देवरिया",
    "headquarters": "Deoria",
    "image": "/assets/districts/uttarpradesh/deoria.jpg",
    "cx": 658.8,
    "cy": 388.6,
    "link": "/district/deoria"
  },
  {
    "id": "sultanpur",
    "name": "Sultanpur",
    "marathiName": "सुल्तानपुर",
    "headquarters": "Sultanpur",
    "image": "/assets/districts/uttarpradesh/sultanpur.jpg",
    "cx": 523.7,
    "cy": 403,
    "link": "/district/sultanpur"
  },
  {
    "id": "ambedkarnagar",
    "name": "Ambedkar Nagar",
    "marathiName": "अम्बेडकर नगर",
    "headquarters": "Ambedkar Nagar",
    "image": "/assets/districts/uttarpradesh/ambedkarnagar.jpg",
    "cx": 556.8,
    "cy": 391.1,
    "link": "/district/ambedkarnagar"
  },
  {
    "id": "raebareli",
    "name": "Rae Bareli",
    "marathiName": "Rae Bareli",
    "headquarters": "Rae Bareli",
    "image": "/assets/districts/uttarpradesh/raebareli.jpg",
    "cx": 423,
    "cy": 401.6,
    "link": "/district/raebareli"
  },
  {
    "id": "jalaun",
    "name": "Jalaun",
    "marathiName": "जालौन",
    "headquarters": "Jalaun",
    "image": "/assets/districts/uttarpradesh/jalaun.jpg",
    "cx": 271.3,
    "cy": 417.4,
    "link": "/district/jalaun"
  },
  {
    "id": "azamgarh",
    "name": "Azamgarh",
    "marathiName": "आजमगढ़",
    "headquarters": "Azamgarh",
    "image": "/assets/districts/uttarpradesh/azamgarh.jpg",
    "cx": 590.1,
    "cy": 418.3,
    "link": "/district/azamgarh"
  },
  {
    "id": "mau",
    "name": "Mau",
    "marathiName": "मऊ",
    "headquarters": "Mau",
    "image": "/assets/districts/uttarpradesh/mau.jpg",
    "cx": 636.6,
    "cy": 423.8,
    "link": "/district/mau"
  },
  {
    "id": "fatehpur",
    "name": "Fatehpur",
    "marathiName": "फतेहपुर",
    "headquarters": "Fatehpur",
    "image": "/assets/districts/uttarpradesh/fatehpur.jpg",
    "cx": 392.7,
    "cy": 437.8,
    "link": "/district/fatehpur"
  },
  {
    "id": "ballia",
    "name": "Ballia",
    "marathiName": "बलिया",
    "headquarters": "Ballia",
    "image": "/assets/districts/uttarpradesh/ballia.jpg",
    "cx": 680.4,
    "cy": 438.1,
    "link": "/district/ballia"
  },
  {
    "id": "jaunpur",
    "name": "Jaunpur",
    "marathiName": "जौनपुर",
    "headquarters": "Jaunpur",
    "image": "/assets/districts/uttarpradesh/jaunpur.jpg",
    "cx": 550.5,
    "cy": 446.5,
    "link": "/district/jaunpur"
  },
  {
    "id": "jhansi",
    "name": "Jhansi",
    "marathiName": "झांसी",
    "headquarters": "Jhansi",
    "image": "/assets/districts/uttarpradesh/jhansi.jpg",
    "cx": 227.7,
    "cy": 472.4,
    "link": "/district/jhansi"
  },
  {
    "id": "banda",
    "name": "Banda",
    "marathiName": "बांदा",
    "headquarters": "Banda",
    "image": "/assets/districts/uttarpradesh/banda.jpg",
    "cx": 367.8,
    "cy": 481.2,
    "link": "/district/banda"
  },
  {
    "id": "ghazipur",
    "name": "Ghazipur",
    "marathiName": "गाजीपुर",
    "headquarters": "Ghazipur",
    "image": "/assets/districts/uttarpradesh/ghazipur.jpg",
    "cx": 637.1,
    "cy": 459.5,
    "link": "/district/ghazipur"
  },
  {
    "id": "kaushambi",
    "name": "Kaushambi",
    "marathiName": "कौशांबी",
    "headquarters": "Kaushambi",
    "image": "/assets/districts/uttarpradesh/kaushambi.jpg",
    "cx": 448.7,
    "cy": 466.8,
    "link": "/district/kaushambi"
  },
  {
    "id": "prayagraj",
    "name": "Prayagraj",
    "marathiName": "प्रयागराज",
    "headquarters": "Prayagraj",
    "image": "/assets/districts/uttarpradesh/prayagraj.jpg",
    "cx": 496.1,
    "cy": 480.6,
    "link": "/district/prayagraj"
  },
  {
    "id": "varanasi",
    "name": "Varanasi",
    "marathiName": "वाराणसी",
    "headquarters": "Varanasi",
    "image": "/assets/districts/uttarpradesh/varanasi.jpg",
    "cx": 577.4,
    "cy": 478.9,
    "link": "/district/varanasi"
  },
  {
    "id": "chitrakoot",
    "name": "Chitrakoot",
    "marathiName": "चित्रकूट",
    "headquarters": "Chitrakoot",
    "image": "/assets/districts/uttarpradesh/chitrakoot.jpg",
    "cx": 419.3,
    "cy": 497.6,
    "link": "/district/chitrakoot"
  },
  {
    "id": "chandauli",
    "name": "Chandauli",
    "marathiName": "चंदौली",
    "headquarters": "Chandauli",
    "image": "/assets/districts/uttarpradesh/chandauli.jpg",
    "cx": 609.8,
    "cy": 500.8,
    "link": "/district/chandauli"
  },
  {
    "id": "bhadohi",
    "name": "Bhadohi",
    "marathiName": "भदोही",
    "headquarters": "Bhadohi",
    "image": "/assets/districts/uttarpradesh/bhadohi.jpg",
    "cx": 537.9,
    "cy": 479.6,
    "link": "/district/bhadohi"
  },
  {
    "id": "mirzapur",
    "name": "Mirzapur",
    "marathiName": "मिर्जापुर",
    "headquarters": "Mirzapur",
    "image": "/assets/districts/uttarpradesh/mirzapur.jpg",
    "cx": 547.6,
    "cy": 513.5,
    "link": "/district/mirzapur"
  },
  {
    "id": "lalitpur",
    "name": "Lalitpur",
    "marathiName": "ललितपुर",
    "headquarters": "Lalitpur",
    "image": "/assets/districts/uttarpradesh/lalitpur.jpg",
    "cx": 201.1,
    "cy": 545.6,
    "link": "/district/lalitpur"
  },
  {
    "id": "sonbhadra",
    "name": "Sonbhadra",
    "marathiName": "सोनभद्र",
    "headquarters": "Sonbhadra",
    "image": "/assets/districts/uttarpradesh/sonbhadra.jpg",
    "cx": 588.6,
    "cy": 553.1,
    "link": "/district/sonbhadra"
  },
  {
    "id": "amethi",
    "name": "Amethi",
    "marathiName": "अमेठी",
    "headquarters": "Amethi",
    "image": "/assets/districts/uttarpradesh/amethi.jpg",
    "cx": 469.8,
    "cy": 397.7,
    "link": "/district/amethi"
  },
  {
    "id": "ghaziabad",
    "name": "Ghaziabad",
    "marathiName": "गाजियाबाद",
    "headquarters": "Ghaziabad",
    "image": "/assets/districts/uttarpradesh/ghaziabad.jpg",
    "cx": 102.5,
    "cy": 183.8,
    "link": "/district/ghaziabad"
  },
  {
    "id": "sambhal",
    "name": "Sambhal",
    "marathiName": "संभल",
    "headquarters": "Sambhal",
    "image": "/assets/districts/uttarpradesh/sambhal.jpg",
    "cx": 201.2,
    "cy": 208.8,
    "link": "/district/sambhal"
  },
  {
    "id": "mahoba",
    "name": "Mahoba",
    "marathiName": "महोबा",
    "headquarters": "Mahoba",
    "image": "/assets/districts/uttarpradesh/mahoba.jpg",
    "cx": 294.5,
    "cy": 483.6,
    "link": "/district/mahoba"
  },
  {
    "id": "saharanpur",
    "name": "Saharanpur",
    "marathiName": "सहारनपुर",
    "headquarters": "Saharanpur",
    "image": "/assets/districts/uttarpradesh/saharanpur.jpg",
    "cx": 111.3,
    "cy": 80.8,
    "link": "/district/saharanpur"
  },
  {
    "id": "bijnor",
    "name": "Bijnor",
    "marathiName": "बिजनौर",
    "headquarters": "Bijnor",
    "image": "/assets/districts/uttarpradesh/bijnor.jpg",
    "cx": 189.4,
    "cy": 132.9,
    "link": "/district/bijnor"
  },
  {
    "id": "muzaffarnagar",
    "name": "Muzaffarnagar",
    "marathiName": "मुजफ्फरनगर",
    "headquarters": "Muzaffarnagar",
    "image": "/assets/districts/uttarpradesh/muzaffarnagar.jpg",
    "cx": 126,
    "cy": 123.9,
    "link": "/district/muzaffarnagar"
  },
  {
    "id": "baghpat",
    "name": "Baghpat",
    "marathiName": "बागपत",
    "headquarters": "Baghpat",
    "image": "/assets/districts/uttarpradesh/baghpat.jpg",
    "cx": 91.1,
    "cy": 158.9,
    "link": "/district/baghpat"
  },
  {
    "id": "meerut",
    "name": "Meerut",
    "marathiName": "मेरठ",
    "headquarters": "Meerut",
    "image": "/assets/districts/uttarpradesh/meerut.jpg",
    "cx": 128.1,
    "cy": 161.6,
    "link": "/district/meerut"
  },
  {
    "id": "moradabad",
    "name": "Moradabad",
    "marathiName": "मुरादाबाद",
    "headquarters": "Moradabad",
    "image": "/assets/districts/uttarpradesh/moradabad.jpg",
    "cx": 219.5,
    "cy": 174.1,
    "link": "/district/moradabad"
  },
  {
    "id": "rampur",
    "name": "Rampur",
    "marathiName": "रामपुर",
    "headquarters": "Rampur",
    "image": "/assets/districts/uttarpradesh/rampur.jpg",
    "cx": 245.6,
    "cy": 178.4,
    "link": "/district/rampur"
  },
  {
    "id": "shamli",
    "name": "Shamli",
    "marathiName": "शामली",
    "headquarters": "Shamli",
    "image": "/assets/districts/uttarpradesh/shamli.jpg",
    "cx": 87.9,
    "cy": 120,
    "link": "/district/shamli"
  },
  {
    "id": "balrampur",
    "name": "Balrampur",
    "marathiName": "बलरामपुर",
    "headquarters": "Balrampur",
    "image": "/assets/districts/uttarpradesh/balrampur.jpg",
    "cx": 536.2,
    "cy": 303.9,
    "link": "/district/balrampur"
  },
  {
    "id": "hamirpur",
    "name": "Hamirpur",
    "marathiName": "हमीरपुर",
    "headquarters": "Hamirpur",
    "image": "/assets/districts/uttarpradesh/hamirpur.jpg",
    "cx": 311.6,
    "cy": 444.8,
    "link": "/district/hamirpur"
  },
  {
    "id": "pratapgarh",
    "name": "Pratapgarh",
    "marathiName": "प्रतापगढ़",
    "headquarters": "Pratapgarh",
    "image": "/assets/districts/uttarpradesh/pratapgarh.jpg",
    "cx": 488.3,
    "cy": 434,
    "link": "/district/pratapgarh"
  }
];


export const chhattisgarhDistrictsData: DistrictInfo[] = [
  {
    "id": "balod",
    "name": "Balod",
    "marathiName": "बालोद",
    "headquarters": "Balod",
    "image": "/assets/districts/chhattisgarh/balod.jpg",
    "cx": 294.6,
    "cy": 339.2,
    "link": "/district/balod"
  },
  {
    "id": "balodabazar",
    "name": "Baloda Bazar",
    "marathiName": "बलौदा बाजार",
    "headquarters": "Baloda Bazar",
    "image": "/assets/districts/chhattisgarh/balodabazar.jpg",
    "cx": 387.4,
    "cy": 272.2,
    "link": "/district/balodabazar"
  },
  {
    "id": "balrampur",
    "name": "Balrampur",
    "marathiName": "बलरामपुर",
    "headquarters": "Balrampur",
    "image": "/assets/districts/chhattisgarh/balrampur.jpg",
    "cx": 506.6,
    "cy": 84.7,
    "link": "/district/balrampur"
  },
  {
    "id": "bastar",
    "name": "Bastar",
    "marathiName": "बस्तर",
    "headquarters": "Bastar",
    "image": "/assets/districts/chhattisgarh/bastar.jpg",
    "cx": 378.5,
    "cy": 493.3,
    "link": "/district/bastar"
  },
  {
    "id": "bemetara",
    "name": "Bemetara",
    "marathiName": "बेमेतरा",
    "headquarters": "Bemetara",
    "image": "/assets/districts/chhattisgarh/bemetara.jpg",
    "cx": 318.5,
    "cy": 251.2,
    "link": "/district/bemetara"
  },
  {
    "id": "bijapur",
    "name": "Bijapur",
    "marathiName": "बीजापुर",
    "headquarters": "Bijapur",
    "image": "/assets/districts/chhattisgarh/bijapur.jpg",
    "cx": 249,
    "cy": 539.8,
    "link": "/district/bijapur"
  },
  {
    "id": "bilaspur",
    "name": "Bilaspur",
    "marathiName": "बिलासपुर",
    "headquarters": "Bilaspur",
    "image": "/assets/districts/chhattisgarh/bilaspur.jpg",
    "cx": 378.8,
    "cy": 206,
    "link": "/district/bilaspur"
  },
  {
    "id": "dakshinbastardantewada",
    "name": "Dakshin Bastar Dantewada",
    "marathiName": "दंतेवाड़ा (दक्षिण बस्तर)",
    "headquarters": "Dakshin Bastar Dantewada",
    "image": "/assets/districts/chhattisgarh/dakshinbastardantewada.jpg",
    "cx": 311.1,
    "cy": 505.6,
    "link": "/district/dakshinbastardantewada"
  },
  {
    "id": "dhamtari",
    "name": "Dhamtari",
    "marathiName": "धमतरी",
    "headquarters": "Dhamtari",
    "image": "/assets/districts/chhattisgarh/dhamtari.jpg",
    "cx": 345.1,
    "cy": 354.2,
    "link": "/district/dhamtari"
  },
  {
    "id": "durg",
    "name": "Durg",
    "marathiName": "दुर्ग",
    "headquarters": "Durg",
    "image": "/assets/districts/chhattisgarh/durg.jpg",
    "cx": 310.2,
    "cy": 300.1,
    "link": "/district/durg"
  },
  {
    "id": "gariaband",
    "name": "Gariaband",
    "marathiName": "गरियाबंद",
    "headquarters": "Gariaband",
    "image": "/assets/districts/chhattisgarh/gariaband.jpg",
    "cx": 398.9,
    "cy": 389.5,
    "link": "/district/gariaband"
  },
  {
    "id": "gaurelapendramarwahi",
    "name": "Gaurela-Pendra-Marwahi",
    "marathiName": "गौरेला-पेंड्रा-मरवाही",
    "headquarters": "Gaurela-Pendra-Marwahi",
    "image": "/assets/districts/chhattisgarh/gaurelapendramarwahi.jpg",
    "cx": 367,
    "cy": 143,
    "link": "/district/gaurelapendramarwahi"
  },
  {
    "id": "janjgirchampa",
    "name": "Janjgir-Champa",
    "marathiName": "जांजगीर-चांपा",
    "headquarters": "Janjgir-Champa",
    "image": "/assets/districts/chhattisgarh/janjgirchampa.jpg",
    "cx": 427,
    "cy": 223.2,
    "link": "/district/janjgirchampa"
  },
  {
    "id": "jashpur",
    "name": "Jashpur",
    "marathiName": "जशपुर",
    "headquarters": "Jashpur",
    "image": "/assets/districts/chhattisgarh/jashpur.jpg",
    "cx": 539.9,
    "cy": 156.9,
    "link": "/district/jashpur"
  },
  {
    "id": "kabirdham",
    "name": "Kabirdham",
    "marathiName": "कबीरधाम (कवर्धा)",
    "headquarters": "Kabirdham",
    "image": "/assets/districts/chhattisgarh/kabirdham.jpg",
    "cx": 289.2,
    "cy": 220.2,
    "link": "/district/kabirdham"
  },
  {
    "id": "khairagarhchhuikhadangandai",
    "name": "Khairagarh-Chhuikhadan-Gandai",
    "marathiName": "खैरागढ़-छुईखदान-गंडई",
    "headquarters": "Khairagarh-Chhuikhadan-Gandai",
    "image": "/assets/districts/chhattisgarh/khairagarhchhuikhadangandai.jpg",
    "cx": 267.8,
    "cy": 265,
    "link": "/district/khairagarhchhuikhadangandai"
  },
  {
    "id": "kondagaon",
    "name": "Kondagaon",
    "marathiName": "कोंडागांव",
    "headquarters": "Kondagaon",
    "image": "/assets/districts/chhattisgarh/kondagaon.jpg",
    "cx": 344.4,
    "cy": 433.8,
    "link": "/district/kondagaon"
  },
  {
    "id": "korba",
    "name": "Korba",
    "marathiName": "कोरबा",
    "headquarters": "Korba",
    "image": "/assets/districts/chhattisgarh/korba.jpg",
    "cx": 422.5,
    "cy": 181,
    "link": "/district/korba"
  },
  {
    "id": "koriya",
    "name": "Koriya",
    "marathiName": "कोरिया",
    "headquarters": "Koriya",
    "image": "/assets/districts/chhattisgarh/koriya.jpg",
    "cx": 412.8,
    "cy": 84.3,
    "link": "/district/koriya"
  },
  {
    "id": "mahasamund",
    "name": "Mahasamund",
    "marathiName": "महासमुंद",
    "headquarters": "Mahasamund",
    "image": "/assets/districts/chhattisgarh/mahasamund.jpg",
    "cx": 435.7,
    "cy": 300.1,
    "link": "/district/mahasamund"
  },
  {
    "id": "manendragarhchirimiribharatpur",
    "name": "Manendragarh-Chirimiri-Bharatpur",
    "marathiName": "मनेंद्रगढ़-चिरमिरी-भरतपुर",
    "headquarters": "Manendragarh-Chirimiri-Bharatpur",
    "image": "/assets/districts/chhattisgarh/manendragarhchirimiribharatpur.jpg",
    "cx": 373.1,
    "cy": 83.6,
    "link": "/district/manendragarhchirimiribharatpur"
  },
  {
    "id": "mohlamanpurambagarhchowki",
    "name": "Mohla-Manpur-Ambagarh Chowki",
    "marathiName": "मोहला-मानपुर-अं.चौकी",
    "headquarters": "Mohla-Manpur-Ambagarh Chowki",
    "image": "/assets/districts/chhattisgarh/mohlamanpurambagarhchowki.jpg",
    "cx": 251.3,
    "cy": 364.8,
    "link": "/district/mohlamanpurambagarhchowki"
  },
  {
    "id": "mungeli",
    "name": "Mungeli",
    "marathiName": "मुंगेली",
    "headquarters": "Mungeli",
    "image": "/assets/districts/chhattisgarh/mungeli.jpg",
    "cx": 346.1,
    "cy": 203.6,
    "link": "/district/mungeli"
  },
  {
    "id": "narayanpur",
    "name": "Narayanpur",
    "marathiName": "नारायणपुर",
    "headquarters": "Narayanpur",
    "image": "/assets/districts/chhattisgarh/narayanpur.jpg",
    "cx": 277.3,
    "cy": 447.1,
    "link": "/district/narayanpur"
  },
  {
    "id": "raigarh",
    "name": "Raigarh",
    "marathiName": "रायगढ़",
    "headquarters": "Raigarh",
    "image": "/assets/districts/chhattisgarh/raigarh.jpg",
    "cx": 496.2,
    "cy": 206.8,
    "link": "/district/raigarh"
  },
  {
    "id": "raipur",
    "name": "Raipur",
    "marathiName": "रायपुर",
    "headquarters": "Raipur",
    "image": "/assets/districts/chhattisgarh/raipur.jpg",
    "cx": 353.9,
    "cy": 289.8,
    "link": "/district/raipur"
  },
  {
    "id": "rajnandgaon",
    "name": "Rajnandgaon",
    "marathiName": "राजनांदगांव",
    "headquarters": "Rajnandgaon",
    "image": "/assets/districts/chhattisgarh/rajnandgaon.jpg",
    "cx": 269.1,
    "cy": 310,
    "link": "/district/rajnandgaon"
  },
  {
    "id": "sakti",
    "name": "Sakti",
    "marathiName": "सक्ती",
    "headquarters": "Sakti",
    "image": "/assets/districts/chhattisgarh/sakti.jpg",
    "cx": 461.2,
    "cy": 232.2,
    "link": "/district/sakti"
  },
  {
    "id": "sarangarhbilaigarh",
    "name": "Sarangarh-Bilaigarh",
    "marathiName": "सारंगढ़-बिलाईगढ़",
    "headquarters": "Sarangarh-Bilaigarh",
    "image": "/assets/districts/chhattisgarh/sarangarhbilaigarh.jpg",
    "cx": 465.8,
    "cy": 271,
    "link": "/district/sarangarhbilaigarh"
  },
  {
    "id": "sukma",
    "name": "Sukma",
    "marathiName": "सुकमा",
    "headquarters": "Sukma",
    "image": "/assets/districts/chhattisgarh/sukma.jpg",
    "cx": 310.3,
    "cy": 578.7,
    "link": "/district/sukma"
  },
  {
    "id": "surajpur",
    "name": "Surajpur",
    "marathiName": "सूरजपुर",
    "headquarters": "Surajpur",
    "image": "/assets/districts/chhattisgarh/surajpur.jpg",
    "cx": 447.1,
    "cy": 93.1,
    "link": "/district/surajpur"
  },
  {
    "id": "surguja",
    "name": "Surguja",
    "marathiName": "सरगुजा",
    "headquarters": "Surguja",
    "image": "/assets/districts/chhattisgarh/surguja.jpg",
    "cx": 485,
    "cy": 140.3,
    "link": "/district/surguja"
  },
  {
    "id": "uttarbastarkanker",
    "name": "Uttar Bastar Kanker",
    "marathiName": "उत्तर बस्तर कांकेर",
    "headquarters": "Uttar Bastar Kanker",
    "image": "/assets/districts/chhattisgarh/uttarbastarkanker.jpg",
    "cx": 279.2,
    "cy": 405.6,
    "link": "/district/uttarbastarkanker"
  }
];


export const telanganaDistrictsData: DistrictInfo[] = [
  {
    "id": "adilabad",
    "name": "Adilabad",
    "marathiName": "ఆదిలాబాద్",
    "headquarters": "Adilabad",
    "image": "/assets/districts/telangana/adilabad.jpg",
    "cx": 298.2,
    "cy": 97.5,
    "link": "/district/adilabad"
  },
  {
    "id": "bhadradrikothagudem",
    "name": "Bhadradri Kothagudem",
    "marathiName": "భద్రాద్రి కొత్తగూడెం",
    "headquarters": "Bhadradri Kothagudem",
    "image": "/assets/districts/telangana/bhadradrikothagudem.jpg",
    "cx": 601.2,
    "cy": 351.4,
    "link": "/district/bhadradrikothagudem"
  },
  {
    "id": "hanamkonda",
    "name": "Hanamkonda",
    "marathiName": "హనుమకొండ",
    "headquarters": "Hanamkonda",
    "image": "/assets/districts/telangana/hanamkonda.jpg",
    "cx": 431.5,
    "cy": 304.7,
    "link": "/district/hanamkonda"
  },
  {
    "id": "hyderabad",
    "name": "Hyderabad",
    "marathiName": "హైదరాబాద్",
    "headquarters": "Hyderabad",
    "image": "/assets/districts/telangana/hyderabad.jpg",
    "cx": 287.2,
    "cy": 391.4,
    "link": "/district/hyderabad",
    "hasCallout": true,
    "labelX": 187,
    "labelY": 406
  },
  {
    "id": "jagtial",
    "name": "Jagtial",
    "marathiName": "జగిత్యాల",
    "headquarters": "Jagtial",
    "image": "/assets/districts/telangana/jagtial.jpg",
    "cx": 346.9,
    "cy": 197.2,
    "link": "/district/jagtial"
  },
  {
    "id": "jangaon",
    "name": "Jangaon",
    "marathiName": "జనగాం",
    "headquarters": "Jangaon",
    "image": "/assets/districts/telangana/jangaon.jpg",
    "cx": 400.5,
    "cy": 345.7,
    "link": "/district/jangaon"
  },
  {
    "id": "jayashankarbhupalpally",
    "name": "Jayashankar Bhupalpally",
    "marathiName": "జయశంకర్ భూపాలపల్లి",
    "headquarters": "Jayashankar Bhupalpally",
    "image": "/assets/districts/telangana/jayashankarbhupalpally.jpg",
    "cx": 478,
    "cy": 240,
    "link": "/district/jayashankarbhupalpally"
  },
  {
    "id": "jogulambagadwal",
    "name": "Jogulamba Gadwal",
    "marathiName": "జోగులాంబ గద్వాల్",
    "headquarters": "Jogulamba Gadwal",
    "image": "/assets/districts/telangana/jogulambagadwal.jpg",
    "cx": 195.5,
    "cy": 577.9,
    "link": "/district/jogulambagadwal"
  },
  {
    "id": "kamareddy",
    "name": "Kamareddy",
    "marathiName": "కామారెడ్డి",
    "headquarters": "Kamareddy",
    "image": "/assets/districts/telangana/kamareddy.jpg",
    "cx": 229.1,
    "cy": 266.5,
    "link": "/district/kamareddy"
  },
  {
    "id": "karimnagar",
    "name": "Karimnagar",
    "marathiName": "కరీంనగర్",
    "headquarters": "Karimnagar",
    "image": "/assets/districts/telangana/karimnagar.jpg",
    "cx": 389.3,
    "cy": 252.5,
    "link": "/district/karimnagar"
  },
  {
    "id": "khammam",
    "name": "Khammam",
    "marathiName": "ఖమ్మం",
    "headquarters": "Khammam",
    "image": "/assets/districts/telangana/khammam.jpg",
    "cx": 552,
    "cy": 419.9,
    "link": "/district/khammam"
  },
  {
    "id": "kumurambheemasifabad",
    "name": "Kumuram Bheem Asifabad",
    "marathiName": "కుమురం భీం ఆసిఫాబాద్",
    "headquarters": "Kumuram Bheem Asifabad",
    "image": "/assets/districts/telangana/kumurambheemasifabad.jpg",
    "cx": 413.4,
    "cy": 119,
    "link": "/district/kumurambheemasifabad"
  },
  {
    "id": "mahabubabad",
    "name": "Mahabubabad",
    "marathiName": "మహబూబాబాద్",
    "headquarters": "Mahabubabad",
    "image": "/assets/districts/telangana/mahabubabad.jpg",
    "cx": 488.3,
    "cy": 357.9,
    "link": "/district/mahabubabad"
  },
  {
    "id": "mahabubnagar",
    "name": "Mahabubnagar",
    "marathiName": "మహబూబ్‌నగర్",
    "headquarters": "Mahabubnagar",
    "image": "/assets/districts/telangana/mahabubnagar.jpg",
    "cx": 219.2,
    "cy": 479.3,
    "link": "/district/mahabubnagar"
  },
  {
    "id": "mancherial",
    "name": "Mancherial",
    "marathiName": "మంచిర్యాల",
    "headquarters": "Mancherial",
    "image": "/assets/districts/telangana/mancherial.jpg",
    "cx": 425,
    "cy": 162.7,
    "link": "/district/mancherial"
  },
  {
    "id": "medak",
    "name": "Medak",
    "marathiName": "మెదక్",
    "headquarters": "Medak",
    "image": "/assets/districts/telangana/medak.jpg",
    "cx": 254.6,
    "cy": 313.1,
    "link": "/district/medak"
  },
  {
    "id": "medchalmalkajgiri",
    "name": "Medchal-Malkajgiri",
    "marathiName": "మేడ్చల్ మల్కాజ్‌గిరి",
    "headquarters": "Medchal-Malkajgiri",
    "image": "/assets/districts/telangana/medchalmalkajgiri.jpg",
    "cx": 297.8,
    "cy": 375,
    "link": "/district/medchalmalkajgiri"
  },
  {
    "id": "mulugu",
    "name": "Mulugu",
    "marathiName": "ములుగు",
    "headquarters": "Mulugu",
    "image": "/assets/districts/telangana/mulugu.jpg",
    "cx": 543.8,
    "cy": 277.5,
    "link": "/district/mulugu"
  },
  {
    "id": "nagarkurnool",
    "name": "Nagarkurnool",
    "marathiName": "నాగర్‌కర్నూల్",
    "headquarters": "Nagarkurnool",
    "image": "/assets/districts/telangana/nagarkurnool.jpg",
    "cx": 299.5,
    "cy": 525.8,
    "link": "/district/nagarkurnool"
  },
  {
    "id": "nalgonda",
    "name": "Nalgonda",
    "marathiName": "నల్గొండ",
    "headquarters": "Nalgonda",
    "image": "/assets/districts/telangana/nalgonda.jpg",
    "cx": 368.2,
    "cy": 463,
    "link": "/district/nalgonda"
  },
  {
    "id": "narayanpet",
    "name": "Narayanpet",
    "marathiName": "నారాయణపేట",
    "headquarters": "Narayanpet",
    "image": "/assets/districts/telangana/narayanpet.jpg",
    "cx": 162.8,
    "cy": 489.6,
    "link": "/district/narayanpet"
  },
  {
    "id": "nirmal",
    "name": "Nirmal",
    "marathiName": "నిర్మల్",
    "headquarters": "Nirmal",
    "image": "/assets/districts/telangana/nirmal.jpg",
    "cx": 267.4,
    "cy": 151.8,
    "link": "/district/nirmal"
  },
  {
    "id": "nizamabad",
    "name": "Nizamabad",
    "marathiName": "నిజామాబాద్",
    "headquarters": "Nizamabad",
    "image": "/assets/districts/telangana/nizamabad.jpg",
    "cx": 258.7,
    "cy": 211.2,
    "link": "/district/nizamabad"
  },
  {
    "id": "peddapalli",
    "name": "Peddapalli",
    "marathiName": "పెద్దపల్లి",
    "headquarters": "Peddapalli",
    "image": "/assets/districts/telangana/peddapalli.jpg",
    "cx": 420.1,
    "cy": 220.2,
    "link": "/district/peddapalli"
  },
  {
    "id": "rajannasircilla",
    "name": "Rajanna Sircilla",
    "marathiName": "రాజన్న సిరిసిల్ల",
    "headquarters": "Rajanna Sircilla",
    "image": "/assets/districts/telangana/rajannasircilla.jpg",
    "cx": 326.8,
    "cy": 250,
    "link": "/district/rajannasircilla"
  },
  {
    "id": "rangareddy",
    "name": "Rangareddy",
    "marathiName": "రంగారెడ్డి",
    "headquarters": "Rangareddy",
    "image": "/assets/districts/telangana/rangareddy.jpg",
    "cx": 279.9,
    "cy": 426,
    "link": "/district/rangareddy"
  },
  {
    "id": "sangareddy",
    "name": "Sangareddy",
    "marathiName": "సంగారెడ్డి",
    "headquarters": "Sangareddy",
    "image": "/assets/districts/telangana/sangareddy.jpg",
    "cx": 212.9,
    "cy": 335.4,
    "link": "/district/sangareddy"
  },
  {
    "id": "siddipet",
    "name": "Siddipet",
    "marathiName": "సిద్ధిపేట",
    "headquarters": "Siddipet",
    "image": "/assets/districts/telangana/siddipet.jpg",
    "cx": 342.4,
    "cy": 302.6,
    "link": "/district/siddipet"
  },
  {
    "id": "suryapet",
    "name": "Suryapet",
    "marathiName": "సూర్యాపేట",
    "headquarters": "Suryapet",
    "image": "/assets/districts/telangana/suryapet.jpg",
    "cx": 460.4,
    "cy": 420,
    "link": "/district/suryapet"
  },
  {
    "id": "vikarabad",
    "name": "Vikarabad",
    "marathiName": "వికారాబాద్",
    "headquarters": "Vikarabad",
    "image": "/assets/districts/telangana/vikarabad.jpg",
    "cx": 187.9,
    "cy": 414,
    "link": "/district/vikarabad"
  },
  {
    "id": "wanaparthy",
    "name": "Wanaparthy",
    "marathiName": "వనపర్తి",
    "headquarters": "Wanaparthy",
    "image": "/assets/districts/telangana/wanaparthy.jpg",
    "cx": 228,
    "cy": 545,
    "link": "/district/wanaparthy"
  },
  {
    "id": "warangal",
    "name": "Warangal",
    "marathiName": "వరంగల్",
    "headquarters": "Warangal",
    "image": "/assets/districts/telangana/warangal.jpg",
    "cx": 459.2,
    "cy": 318.5,
    "link": "/district/warangal"
  },
  {
    "id": "yadadribhuvanagiri",
    "name": "Yadadri Bhuvanagiri",
    "marathiName": "యాదాద్రి భువనగిరి",
    "headquarters": "Yadadri Bhuvanagiri",
    "image": "/assets/districts/telangana/yadadribhuvanagiri.jpg",
    "cx": 359.6,
    "cy": 387.9,
    "link": "/district/yadadribhuvanagiri"
  }
];


export const andhraPradeshDistrictsData: DistrictInfo[] = [
  {
    "id": "allurisitharamaraju",
    "name": "Alluri Sitharama Raju",
    "marathiName": "అల్లూరి సీతారామరాజు",
    "headquarters": "Paderu",
    "image": "/assets/districts/andhrapradesh/allurisitharamaraju.jpg",
    "cx": 535.6,
    "cy": 139,
    "link": "/district/allurisitharamaraju"
  },
  {
    "id": "anakapalli",
    "name": "Anakapalli",
    "marathiName": "అనకాపల్లి",
    "headquarters": "Anakapalle",
    "image": "/assets/districts/andhrapradesh/anakapalli.jpg",
    "cx": 575,
    "cy": 178,
    "link": "/district/anakapalli"
  },
  {
    "id": "anantapuramu",
    "name": "Ananthapuramu",
    "marathiName": "అనంతపురం",
    "headquarters": "Anantapur",
    "image": "/assets/districts/andhrapradesh/anantapuramu.jpg",
    "cx": 127.3,
    "cy": 415.9,
    "link": "/district/anantapuramu"
  },
  {
    "id": "annamayya",
    "name": "Annamayya",
    "marathiName": "అన్నమయ్య",
    "headquarters": "Rayachoti",
    "image": "/assets/districts/andhrapradesh/annamayya.jpg",
    "cx": 218.9,
    "cy": 506.4,
    "link": "/district/annamayya"
  },
  {
    "id": "bapatla",
    "name": "Bapatla",
    "marathiName": "బాపట్ల",
    "headquarters": "Bapatla",
    "image": "/assets/districts/andhrapradesh/bapatla.jpg",
    "cx": 371.9,
    "cy": 326.1,
    "link": "/district/bapatla"
  },
  {
    "id": "chittoor",
    "name": "Chittoor",
    "marathiName": "చిత్తూరు",
    "headquarters": "Chittoor",
    "image": "/assets/districts/andhrapradesh/chittoor.jpg",
    "cx": 249.7,
    "cy": 553.9,
    "link": "/district/chittoor"
  },
  {
    "id": "eastgodavari",
    "name": "East Godavari",
    "marathiName": "తూర్పు గోదావరి",
    "headquarters": "Rajamahendravaram",
    "image": "/assets/districts/andhrapradesh/eastgodavari.jpg",
    "cx": 483.4,
    "cy": 226.2,
    "link": "/district/eastgodavari"
  },
  {
    "id": "eluru",
    "name": "Eluru",
    "marathiName": "ఏలూరు",
    "headquarters": "Eluru",
    "image": "/assets/districts/andhrapradesh/eluru.jpg",
    "cx": 436.2,
    "cy": 232.8,
    "link": "/district/eluru"
  },
  {
    "id": "guntur",
    "name": "Guntur",
    "marathiName": "గుంటూరు",
    "headquarters": "Guntur",
    "image": "/assets/districts/andhrapradesh/guntur.jpg",
    "cx": 372.6,
    "cy": 294.9,
    "link": "/district/guntur"
  },
  {
    "id": "kakinada",
    "name": "Kakinada",
    "marathiName": "కాకినాడ",
    "headquarters": "Kakinada",
    "image": "/assets/districts/andhrapradesh/kakinada.jpg",
    "cx": 533.7,
    "cy": 227.4,
    "link": "/district/kakinada"
  },
  {
    "id": "konaseema",
    "name": "Konaseema",
    "marathiName": "కోనసీమ",
    "headquarters": "Amalapuram",
    "image": "/assets/districts/andhrapradesh/konaseema.jpg",
    "cx": 512.5,
    "cy": 265.8,
    "link": "/district/konaseema"
  },
  {
    "id": "krishna",
    "name": "Krishna",
    "marathiName": "కృష్ణా",
    "headquarters": "Machilipatnam",
    "image": "/assets/districts/andhrapradesh/krishna.jpg",
    "cx": 428,
    "cy": 295.8,
    "link": "/district/krishna"
  },
  {
    "id": "kurnool",
    "name": "Kurnool",
    "marathiName": "కర్నూలు",
    "headquarters": "Kurnool",
    "image": "/assets/districts/andhrapradesh/kurnool.jpg",
    "cx": 142.4,
    "cy": 350.5,
    "link": "/district/kurnool"
  },
  {
    "id": "nandyal",
    "name": "Nandyal",
    "marathiName": "నంద్యాల",
    "headquarters": "Nandyal",
    "image": "/assets/districts/andhrapradesh/nandyal.jpg",
    "cx": 181.6,
    "cy": 360.8,
    "link": "/district/nandyal"
  },
  {
    "id": "sripottisriramulunellore",
    "name": "Nellore (SPSR)",
    "marathiName": "నెల్లూరు (ఎస్పీఎస్ఆర్)",
    "headquarters": "Nellore",
    "image": "/assets/districts/andhrapradesh/sripottisriramulunellore.jpg",
    "cx": 320.5,
    "cy": 424.2,
    "link": "/district/sripottisriramulunellore"
  },
  {
    "id": "ntr",
    "name": "NTR (Vijayawada)",
    "marathiName": "ఎన్టీఆర్ జిల్లా",
    "headquarters": "Vijayawada",
    "image": "/assets/districts/andhrapradesh/ntr.jpg",
    "cx": 371.4,
    "cy": 234.6,
    "link": "/district/ntr"
  },
  {
    "id": "palnadu",
    "name": "Palnadu",
    "marathiName": "పల్నాడు",
    "headquarters": "Narasaraopeta",
    "image": "/assets/districts/andhrapradesh/palnadu.jpg",
    "cx": 320.1,
    "cy": 280.1,
    "link": "/district/palnadu"
  },
  {
    "id": "parvathipurammanyam",
    "name": "Parvathipuram Manyam",
    "marathiName": "పార్వతీపురం మన్యం",
    "headquarters": "Parvathipuram",
    "image": "/assets/districts/andhrapradesh/parvathipurammanyam.jpg",
    "cx": 636.3,
    "cy": 75.9,
    "link": "/district/parvathipurammanyam"
  },
  {
    "id": "prakasam",
    "name": "Prakasam",
    "marathiName": "ప్రకాశం",
    "headquarters": "Ongole",
    "image": "/assets/districts/andhrapradesh/prakasam.jpg",
    "cx": 305.5,
    "cy": 362.9,
    "link": "/district/prakasam"
  },
  {
    "id": "srisathyasai",
    "name": "Sri Sathya Sai",
    "marathiName": "శ్రీ సత్యసాయి",
    "headquarters": "Puttaparthi",
    "image": "/assets/districts/andhrapradesh/srisathyasai.jpg",
    "cx": 135.8,
    "cy": 482.3,
    "link": "/district/srisathyasai"
  },
  {
    "id": "srikakulam",
    "name": "Srikakulam",
    "marathiName": "శ్రీకాకుళం",
    "headquarters": "Srikakulam",
    "image": "/assets/districts/andhrapradesh/srikakulam.jpg",
    "cx": 701.9,
    "cy": 87.1,
    "link": "/district/srikakulam"
  },
  {
    "id": "tirupati",
    "name": "Tirupati",
    "marathiName": "తిరుపతి",
    "headquarters": "Tirupati",
    "image": "/assets/districts/andhrapradesh/tirupati.jpg",
    "cx": 311.3,
    "cy": 508.7,
    "link": "/district/tirupati"
  },
  {
    "id": "visakhapatnam",
    "name": "Visakhapatnam",
    "marathiName": "విశాఖపట్నం",
    "headquarters": "Visakhapatnam",
    "image": "/assets/districts/andhrapradesh/visakhapatnam.jpg",
    "cx": 621.7,
    "cy": 164.7,
    "link": "/district/visakhapatnam"
  },
  {
    "id": "vizianagaram",
    "name": "Vizianagaram",
    "marathiName": "విజయనగరం",
    "headquarters": "Vizianagaram",
    "image": "/assets/districts/andhrapradesh/vizianagaram.jpg",
    "cx": 631.5,
    "cy": 120.6,
    "link": "/district/vizianagaram"
  },
  {
    "id": "westgodavari",
    "name": "West Godavari",
    "marathiName": "పశ్చిమ గోదావరి",
    "headquarters": "Bhimavaram",
    "image": "/assets/districts/andhrapradesh/westgodavari.jpg",
    "cx": 467.6,
    "cy": 266.1,
    "link": "/district/westgodavari"
  },
  {
    "id": "ysr",
    "name": "YSR (Kadapa)",
    "marathiName": "వైఎస్సార్ (కడప)",
    "headquarters": "Kadapa",
    "image": "/assets/districts/andhrapradesh/ysr.jpg",
    "cx": 210,
    "cy": 428,
    "link": "/district/ysr"
  }
];


export const gujaratDistrictsData: DistrictInfo[] = [
  {
    "id": "ahmedabad",
    "name": "Ahmedabad",
    "marathiName": "અમદાવાદ",
    "headquarters": "Ahmedabad",
    "image": "/assets/districts/gujarat/ahmedabad.jpg",
    "cx": 509.4,
    "cy": 278.8,
    "link": "/district/ahmedabad"
  },
  {
    "id": "amreli",
    "name": "Amreli",
    "marathiName": "અમરેલી",
    "headquarters": "Amreli",
    "image": "/assets/districts/gujarat/amreli.jpg",
    "cx": 393.7,
    "cy": 432.7,
    "link": "/district/amreli"
  },
  {
    "id": "anand",
    "name": "Anand",
    "marathiName": "આણંદ",
    "headquarters": "Anand",
    "image": "/assets/districts/gujarat/anand.jpg",
    "cx": 564.8,
    "cy": 315.9,
    "link": "/district/anand"
  },
  {
    "id": "aravalli",
    "name": "Aravalli",
    "marathiName": "અરવલ્લી",
    "headquarters": "Modasa",
    "image": "/assets/districts/gujarat/aravalli.jpg",
    "cx": 623.2,
    "cy": 206.8,
    "link": "/district/aravalli"
  },
  {
    "id": "banaskantha",
    "name": "Banaskantha",
    "marathiName": "બનાસકાંઠા",
    "headquarters": "Palanpur",
    "image": "/assets/districts/gujarat/banaskantha.jpg",
    "cx": 478.4,
    "cy": 117.5,
    "link": "/district/banaskantha"
  },
  {
    "id": "bharuch",
    "name": "Bharuch",
    "marathiName": "ભરૂચ",
    "headquarters": "Bharuch",
    "image": "/assets/districts/gujarat/bharuch.jpg",
    "cx": 592.6,
    "cy": 398.3,
    "link": "/district/bharuch"
  },
  {
    "id": "bhavnagar",
    "name": "Bhavnagar",
    "marathiName": "ભાવનગર",
    "headquarters": "Bhavnagar",
    "image": "/assets/districts/gujarat/bhavnagar.jpg",
    "cx": 461.3,
    "cy": 423.1,
    "link": "/district/bhavnagar"
  },
  {
    "id": "botad",
    "name": "Botad",
    "marathiName": "બોટાદ",
    "headquarters": "Botad",
    "image": "/assets/districts/gujarat/botad.jpg",
    "cx": 447.1,
    "cy": 363.6,
    "link": "/district/botad"
  },
  {
    "id": "chhotaudaipur",
    "name": "Chhota Udaipur",
    "marathiName": "છોટા ઉદેપુર",
    "headquarters": "Chhota Udaipur",
    "image": "/assets/districts/gujarat/chhotaudaipur.jpg",
    "cx": 690.1,
    "cy": 343.1,
    "link": "/district/chhotaudaipur"
  },
  {
    "id": "dahod",
    "name": "Dahod",
    "marathiName": "દાહોદ",
    "headquarters": "Dahod",
    "image": "/assets/districts/gujarat/dahod.jpg",
    "cx": 711.3,
    "cy": 270.2,
    "link": "/district/dahod"
  },
  {
    "id": "dang",
    "name": "Dang",
    "marathiName": "ડાંગ",
    "headquarters": "Ahwa",
    "image": "/assets/districts/gujarat/dang.jpg",
    "cx": 670.5,
    "cy": 507.1,
    "link": "/district/dang"
  },
  {
    "id": "devbhumidwarka",
    "name": "Devbhoomi Dwarka",
    "marathiName": "દેવભૂમિ દ્વારકા",
    "headquarters": "Khambhalia",
    "image": "/assets/districts/gujarat/devbhumidwarka.jpg",
    "cx": 195.8,
    "cy": 352.5,
    "link": "/district/devbhumidwarka"
  },
  {
    "id": "gandhinagar",
    "name": "Gandhinagar",
    "marathiName": "ગાંધીનગર",
    "headquarters": "Gandhinagar",
    "image": "/assets/districts/gujarat/gandhinagar.jpg",
    "cx": 558.1,
    "cy": 232.4,
    "link": "/district/gandhinagar",
    "hasCallout": true,
    "labelX": 603,
    "labelY": 214
  },
  {
    "id": "girsomnath",
    "name": "Gir Somnath",
    "marathiName": "ગીર સોમનાથ",
    "headquarters": "Veraval",
    "image": "/assets/districts/gujarat/girsomnath.jpg",
    "cx": 340.2,
    "cy": 486.6,
    "link": "/district/girsomnath"
  },
  {
    "id": "jamnagar",
    "name": "Jamnagar",
    "marathiName": "જામનગર",
    "headquarters": "Jamnagar",
    "image": "/assets/districts/gujarat/jamnagar.jpg",
    "cx": 281.8,
    "cy": 325.1,
    "link": "/district/jamnagar"
  },
  {
    "id": "junagadh",
    "name": "Junagadh",
    "marathiName": "જૂનાગઢ",
    "headquarters": "Junagadh",
    "image": "/assets/districts/gujarat/junagadh.jpg",
    "cx": 307.1,
    "cy": 439.7,
    "link": "/district/junagadh"
  },
  {
    "id": "kheda",
    "name": "Kheda",
    "marathiName": "ખેડા",
    "headquarters": "Nadiad",
    "image": "/assets/districts/gujarat/kheda.jpg",
    "cx": 584,
    "cy": 280.3,
    "link": "/district/kheda"
  },
  {
    "id": "kutch",
    "name": "Kutch",
    "marathiName": "કચ્છ",
    "headquarters": "Bhuj",
    "image": "/assets/districts/gujarat/kutch.jpg",
    "cx": 305.4,
    "cy": 199.6,
    "link": "/district/kutch"
  },
  {
    "id": "mahisagar",
    "name": "Mahisagar",
    "marathiName": "મહીસાગર",
    "headquarters": "Lunawada",
    "image": "/assets/districts/gujarat/mahisagar.jpg",
    "cx": 668.3,
    "cy": 241.4,
    "link": "/district/mahisagar"
  },
  {
    "id": "mehsana",
    "name": "Mehsana",
    "marathiName": "મહેસાણા",
    "headquarters": "Mehsana",
    "image": "/assets/districts/gujarat/mehsana.jpg",
    "cx": 528.6,
    "cy": 197.8,
    "link": "/district/mehsana"
  },
  {
    "id": "morbi",
    "name": "Morbi",
    "marathiName": "મોરબી",
    "headquarters": "Morbi",
    "image": "/assets/districts/gujarat/morbi.jpg",
    "cx": 361.4,
    "cy": 275.4,
    "link": "/district/morbi"
  },
  {
    "id": "narmada",
    "name": "Narmada",
    "marathiName": "નર્મદા",
    "headquarters": "Rajpipla",
    "image": "/assets/districts/gujarat/narmada.jpg",
    "cx": 666.3,
    "cy": 399.1,
    "link": "/district/narmada"
  },
  {
    "id": "navsari",
    "name": "Navsari",
    "marathiName": "નવસારી",
    "headquarters": "Navsari",
    "image": "/assets/districts/gujarat/navsari.jpg",
    "cx": 605.7,
    "cy": 500.2,
    "link": "/district/navsari"
  },
  {
    "id": "panchmahal",
    "name": "Panchmahal",
    "marathiName": "પંચમહાલ",
    "headquarters": "Godhra",
    "image": "/assets/districts/gujarat/panchmahal.jpg",
    "cx": 663,
    "cy": 293.7,
    "link": "/district/panchmahal"
  },
  {
    "id": "patan",
    "name": "Patan",
    "marathiName": "પાટણ",
    "headquarters": "Patan",
    "image": "/assets/districts/gujarat/patan.jpg",
    "cx": 456.4,
    "cy": 167.3,
    "link": "/district/patan"
  },
  {
    "id": "porbandar",
    "name": "Porbandar",
    "marathiName": "પોરબંદર",
    "headquarters": "Porbandar",
    "image": "/assets/districts/gujarat/porbandar.jpg",
    "cx": 237.2,
    "cy": 406.3,
    "link": "/district/porbandar"
  },
  {
    "id": "rajkot",
    "name": "Rajkot",
    "marathiName": "રાજકોટ",
    "headquarters": "Rajkot",
    "image": "/assets/districts/gujarat/rajkot.jpg",
    "cx": 341.3,
    "cy": 363.7,
    "link": "/district/rajkot"
  },
  {
    "id": "sabarkantha",
    "name": "Sabarkantha",
    "marathiName": "સાબરકાંઠા",
    "headquarters": "Himmatnagar",
    "image": "/assets/districts/gujarat/sabarkantha.jpg",
    "cx": 599.1,
    "cy": 171.3,
    "link": "/district/sabarkantha"
  },
  {
    "id": "surat",
    "name": "Surat",
    "marathiName": "સુરત",
    "headquarters": "Surat",
    "image": "/assets/districts/gujarat/surat.jpg",
    "cx": 607.3,
    "cy": 457.8,
    "link": "/district/surat"
  },
  {
    "id": "surendranagar",
    "name": "Surendranagar",
    "marathiName": "સુરેન્દ્રનગર",
    "headquarters": "Surendranagar",
    "image": "/assets/districts/gujarat/surendranagar.jpg",
    "cx": 434.5,
    "cy": 279.7,
    "link": "/district/surendranagar"
  },
  {
    "id": "tapi",
    "name": "Tapi",
    "marathiName": "તાપી",
    "headquarters": "Vyara",
    "image": "/assets/districts/gujarat/tapi.jpg",
    "cx": 678.7,
    "cy": 461,
    "link": "/district/tapi"
  },
  {
    "id": "vadodara",
    "name": "Vadodara",
    "marathiName": "વડોદરા",
    "headquarters": "Vadodara",
    "image": "/assets/districts/gujarat/vadodara.jpg",
    "cx": 623,
    "cy": 344.5,
    "link": "/district/vadodara"
  },
  {
    "id": "valsad",
    "name": "Valsad",
    "marathiName": "વલસાડ",
    "headquarters": "Valsad",
    "image": "/assets/districts/gujarat/valsad.jpg",
    "cx": 602.3,
    "cy": 558,
    "link": "/district/valsad"
  }
];


export const tamilNaduDistrictsData: DistrictInfo[] = [
  {
    "id": "ariyalur",
    "name": "Ariyalur",
    "marathiName": "அரியலூர்",
    "headquarters": "Ariyalur",
    "image": "/assets/districts/tamilnadu/ariyalur.jpg",
    "cx": 497.2,
    "cy": 290.1,
    "link": "/district/ariyalur"
  },
  {
    "id": "chengalpattu",
    "name": "Chengalpattu",
    "marathiName": "செங்கல்பட்டு",
    "headquarters": "Chengalpattu",
    "image": "/assets/districts/tamilnadu/chengalpattu.jpg",
    "cx": 578.9,
    "cy": 130.9,
    "link": "/district/chengalpattu"
  },
  {
    "id": "chennai",
    "name": "Chennai",
    "marathiName": "சென்னை",
    "headquarters": "Chennai",
    "image": "/assets/districts/tamilnadu/chennai.jpg",
    "cx": 605.9,
    "cy": 90.1,
    "link": "/district/chennai",
    "hasCallout": true,
    "labelX": 648,
    "labelY": 78
  },
  {
    "id": "coimbatore",
    "name": "Coimbatore",
    "marathiName": "கோயம்புத்தூர்",
    "headquarters": "Coimbatore",
    "image": "/assets/districts/tamilnadu/coimbatore.jpg",
    "cx": 259.8,
    "cy": 320.5,
    "link": "/district/coimbatore"
  },
  {
    "id": "cuddalore",
    "name": "Cuddalore",
    "marathiName": "கடலூர்",
    "headquarters": "Cuddalore",
    "image": "/assets/districts/tamilnadu/cuddalore.jpg",
    "cx": 524.4,
    "cy": 244.6,
    "link": "/district/cuddalore"
  },
  {
    "id": "dharmapuri",
    "name": "Dharmapuri",
    "marathiName": "தருமபுரி",
    "headquarters": "Dharmapuri",
    "image": "/assets/districts/tamilnadu/dharmapuri.jpg",
    "cx": 392.6,
    "cy": 183.8,
    "link": "/district/dharmapuri"
  },
  {
    "id": "dindigul",
    "name": "Dindigul",
    "marathiName": "திண்டுக்கல்",
    "headquarters": "Dindigul",
    "image": "/assets/districts/tamilnadu/dindigul.jpg",
    "cx": 350.2,
    "cy": 365.6,
    "link": "/district/dindigul"
  },
  {
    "id": "erode",
    "name": "Erode",
    "marathiName": "ஈரோடு",
    "headquarters": "Erode",
    "image": "/assets/districts/tamilnadu/erode.jpg",
    "cx": 307.1,
    "cy": 250.2,
    "link": "/district/erode"
  },
  {
    "id": "kallakurichi",
    "name": "Kallakurichi",
    "marathiName": "கள்ளக்குறிச்சி",
    "headquarters": "Kallakurichi",
    "image": "/assets/districts/tamilnadu/kallakurichi.jpg",
    "cx": 476.9,
    "cy": 220.1,
    "link": "/district/kallakurichi"
  },
  {
    "id": "kancheepuram",
    "name": "Kancheepuram",
    "marathiName": "காஞ்சிபுரம்",
    "headquarters": "Kancheepuram",
    "image": "/assets/districts/tamilnadu/kancheepuram.jpg",
    "cx": 565.4,
    "cy": 109.7,
    "link": "/district/kancheepuram"
  },
  {
    "id": "kanniyakumari",
    "name": "Kanniyakumari",
    "marathiName": "கன்னியாகுமரி",
    "headquarters": "Nagercoil",
    "image": "/assets/districts/tamilnadu/kanniyakumari.jpg",
    "cx": 301.7,
    "cy": 593.4,
    "link": "/district/kanniyakumari"
  },
  {
    "id": "karur",
    "name": "Karur",
    "marathiName": "கரூர்",
    "headquarters": "Karur",
    "image": "/assets/districts/tamilnadu/karur.jpg",
    "cx": 376.1,
    "cy": 325,
    "link": "/district/karur"
  },
  {
    "id": "krishnagiri",
    "name": "Krishnagiri",
    "marathiName": "கிருஷ்ணகிரி",
    "headquarters": "Krishnagiri",
    "image": "/assets/districts/tamilnadu/krishnagiri.jpg",
    "cx": 375.9,
    "cy": 149.5,
    "link": "/district/krishnagiri"
  },
  {
    "id": "madurai",
    "name": "Madurai",
    "marathiName": "மதுரை",
    "headquarters": "Madurai",
    "image": "/assets/districts/tamilnadu/madurai.jpg",
    "cx": 372.5,
    "cy": 421.7,
    "link": "/district/madurai"
  },
  {
    "id": "mayiladuthurai",
    "name": "Mayiladuthurai",
    "marathiName": "மயிலாடுதுறை",
    "headquarters": "Mayiladuthurai",
    "image": "/assets/districts/tamilnadu/mayiladuthurai.jpg",
    "cx": 548.5,
    "cy": 287.8,
    "link": "/district/mayiladuthurai"
  },
  {
    "id": "nagapattinam",
    "name": "Nagapattinam",
    "marathiName": "நாகப்பட்டினம்",
    "headquarters": "Nagapattinam",
    "image": "/assets/districts/tamilnadu/nagapattinam.jpg",
    "cx": 550.5,
    "cy": 352,
    "link": "/district/nagapattinam"
  },
  {
    "id": "namakkal",
    "name": "Namakkal",
    "marathiName": "நாமக்கல்",
    "headquarters": "Namakkal",
    "image": "/assets/districts/tamilnadu/namakkal.jpg",
    "cx": 382.2,
    "cy": 270,
    "link": "/district/namakkal"
  },
  {
    "id": "perambalur",
    "name": "Perambalur",
    "marathiName": "பெரம்பலூர்",
    "headquarters": "Perambalur",
    "image": "/assets/districts/tamilnadu/perambalur.jpg",
    "cx": 462.5,
    "cy": 276.2,
    "link": "/district/perambalur"
  },
  {
    "id": "pudukkottai",
    "name": "Pudukkottai",
    "marathiName": "புதுக்கோட்டை",
    "headquarters": "Pudukkottai",
    "image": "/assets/districts/tamilnadu/pudukkottai.jpg",
    "cx": 458.7,
    "cy": 374.9,
    "link": "/district/pudukkottai"
  },
  {
    "id": "ramanathapuram",
    "name": "Ramanathapuram",
    "marathiName": "ராமநாதபுரம்",
    "headquarters": "Ramanathapuram",
    "image": "/assets/districts/tamilnadu/ramanathapuram.jpg",
    "cx": 449.6,
    "cy": 466.8,
    "link": "/district/ramanathapuram"
  },
  {
    "id": "ranipet",
    "name": "Ranipet",
    "marathiName": "ராணிப்பேட்டை",
    "headquarters": "Ranipet",
    "image": "/assets/districts/tamilnadu/ranipet.jpg",
    "cx": 524.1,
    "cy": 94.5,
    "link": "/district/ranipet"
  },
  {
    "id": "salem",
    "name": "Salem",
    "marathiName": "சேலம்",
    "headquarters": "Salem",
    "image": "/assets/districts/tamilnadu/salem.jpg",
    "cx": 399.9,
    "cy": 236.7,
    "link": "/district/salem"
  },
  {
    "id": "sivaganga",
    "name": "Sivaganga",
    "marathiName": "சிவகங்கை",
    "headquarters": "Sivaganga",
    "image": "/assets/districts/tamilnadu/sivaganga.jpg",
    "cx": 429.6,
    "cy": 417.9,
    "link": "/district/sivaganga"
  },
  {
    "id": "tenkasi",
    "name": "Tenkasi",
    "marathiName": "தென்காசி",
    "headquarters": "Tenkasi",
    "image": "/assets/districts/tamilnadu/tenkasi.jpg",
    "cx": 314.8,
    "cy": 509.5,
    "link": "/district/tenkasi"
  },
  {
    "id": "thanjavur",
    "name": "Thanjavur",
    "marathiName": "தஞ்சாவூர்",
    "headquarters": "Thanjavur",
    "image": "/assets/districts/tamilnadu/thanjavur.jpg",
    "cx": 502.9,
    "cy": 342.7,
    "link": "/district/thanjavur"
  },
  {
    "id": "thenilgiris",
    "name": "The Nilgiris",
    "marathiName": "நீலகிரி",
    "headquarters": "Udhagamandalam",
    "image": "/assets/districts/tamilnadu/thenilgiris.jpg",
    "cx": 222.4,
    "cy": 257.6,
    "link": "/district/thenilgiris"
  },
  {
    "id": "theni",
    "name": "Theni",
    "marathiName": "தேனி",
    "headquarters": "Theni",
    "image": "/assets/districts/tamilnadu/theni.jpg",
    "cx": 306.1,
    "cy": 425.5,
    "link": "/district/theni"
  },
  {
    "id": "thoothukudi",
    "name": "Thoothukudi",
    "marathiName": "தூத்துக்குடி",
    "headquarters": "Thoothukudi",
    "image": "/assets/districts/tamilnadu/thoothukudi.jpg",
    "cx": 364.4,
    "cy": 529.8,
    "link": "/district/thoothukudi"
  },
  {
    "id": "tiruchirappalli",
    "name": "Tiruchirappalli",
    "marathiName": "திருச்சிராப்பள்ளி",
    "headquarters": "Tiruchirappalli",
    "image": "/assets/districts/tamilnadu/tiruchirappalli.jpg",
    "cx": 428.6,
    "cy": 319.7,
    "link": "/district/tiruchirappalli"
  },
  {
    "id": "tirunelveli",
    "name": "Tirunelveli",
    "marathiName": "திருநெல்வேலி",
    "headquarters": "Tirunelveli",
    "image": "/assets/districts/tamilnadu/tirunelveli.jpg",
    "cx": 324.3,
    "cy": 560.2,
    "link": "/district/tirunelveli"
  },
  {
    "id": "tirupathur",
    "name": "Tirupathur",
    "marathiName": "திருப்பத்தூர்",
    "headquarters": "Tirupathur",
    "image": "/assets/districts/tamilnadu/tirupathur.jpg",
    "cx": 438.6,
    "cy": 134.2,
    "link": "/district/tirupathur"
  },
  {
    "id": "tiruppur",
    "name": "Tiruppur",
    "marathiName": "திருப்பூர்",
    "headquarters": "Tiruppur",
    "image": "/assets/districts/tamilnadu/tiruppur.jpg",
    "cx": 304.7,
    "cy": 327,
    "link": "/district/tiruppur"
  },
  {
    "id": "tiruvallur",
    "name": "Tiruvallur",
    "marathiName": "திருவள்ளூர்",
    "headquarters": "Tiruvallur",
    "image": "/assets/districts/tamilnadu/tiruvallur.jpg",
    "cx": 562.1,
    "cy": 67.6,
    "link": "/district/tiruvallur"
  },
  {
    "id": "tiruvannamalai",
    "name": "Tiruvannamalai",
    "marathiName": "திருவண்ணாமலை",
    "headquarters": "Tiruvannamalai",
    "image": "/assets/districts/tamilnadu/tiruvannamalai.jpg",
    "cx": 500.1,
    "cy": 152.2,
    "link": "/district/tiruvannamalai"
  },
  {
    "id": "tiruvarur",
    "name": "Tiruvarur",
    "marathiName": "திருவாரூர்",
    "headquarters": "Tiruvarur",
    "image": "/assets/districts/tamilnadu/tiruvarur.jpg",
    "cx": 532.6,
    "cy": 335.3,
    "link": "/district/tiruvarur"
  },
  {
    "id": "vellore",
    "name": "Vellore",
    "marathiName": "வேலூர்",
    "headquarters": "Vellore",
    "image": "/assets/districts/tamilnadu/vellore.jpg",
    "cx": 472.3,
    "cy": 100.2,
    "link": "/district/vellore"
  },
  {
    "id": "viluppuram",
    "name": "Viluppuram",
    "marathiName": "விழுப்புரம்",
    "headquarters": "Viluppuram",
    "image": "/assets/districts/tamilnadu/viluppuram.jpg",
    "cx": 531.2,
    "cy": 188.1,
    "link": "/district/viluppuram"
  },
  {
    "id": "virudhunagar",
    "name": "Virudhunagar",
    "marathiName": "விருதுநகர்",
    "headquarters": "Virudhunagar",
    "image": "/assets/districts/tamilnadu/virudhunagar.jpg",
    "cx": 363.8,
    "cy": 467,
    "link": "/district/virudhunagar"
  }
];

export const keralaDistrictsData: DistrictInfo[] = [
  {
    "id": "kasaragod",
    "name": "Kasaragod",
    "marathiName": "കാസർഗോഡ്",
    "headquarters": "Kasaragod",
    "image": "/assets/districts/kerala/kasaragod.jpg",
    "cx": 269.3,
    "cy": 59.8,
    "link": "/district/kasaragod"
  },
  {
    "id": "wayanad",
    "name": "Wayanad",
    "marathiName": "വയനാട്",
    "headquarters": "Kalpetta",
    "image": "/assets/districts/kerala/wayanad.jpg",
    "cx": 398.1,
    "cy": 169.3,
    "link": "/district/wayanad"
  },
  {
    "id": "kozhikode",
    "name": "Kozhikode",
    "marathiName": "കോഴിക്കോട്",
    "headquarters": "Kozhikode",
    "image": "/assets/districts/kerala/kozhikode.jpg",
    "cx": 365.4,
    "cy": 201.5,
    "link": "/district/kozhikode"
  },
  {
    "id": "malappuram",
    "name": "Malappuram",
    "marathiName": "മലപ്പുറം",
    "headquarters": "Malappuram",
    "image": "/assets/districts/kerala/malappuram.jpg",
    "cx": 405.7,
    "cy": 250.4,
    "link": "/district/malappuram"
  },
  {
    "id": "palakkad",
    "name": "Palakkad",
    "marathiName": "പാലക്കാട്",
    "headquarters": "Palakkad",
    "image": "/assets/districts/kerala/palakkad.jpg",
    "cx": 444.6,
    "cy": 286.7,
    "link": "/district/palakkad"
  },
  {
    "id": "thrissur",
    "name": "Thrissur",
    "marathiName": "തൃശ്ശൂർ",
    "headquarters": "Thrissur",
    "image": "/assets/districts/kerala/thrissur.jpg",
    "cx": 438.9,
    "cy": 333.3,
    "link": "/district/thrissur"
  },
  {
    "id": "idukki",
    "name": "Idukki",
    "marathiName": "ഇടുക്കി",
    "headquarters": "Painavu",
    "image": "/assets/districts/kerala/idukki.jpg",
    "cx": 525.3,
    "cy": 427.6,
    "link": "/district/idukki"
  },
  {
    "id": "ernakulam",
    "name": "Ernakulam",
    "marathiName": "എറണാകുളം",
    "headquarters": "Kakkanad",
    "image": "/assets/districts/kerala/ernakulam.jpg",
    "cx": 466.1,
    "cy": 389.1,
    "link": "/district/ernakulam"
  },
  {
    "id": "alappuzha",
    "name": "Alappuzha",
    "marathiName": "ആലപ്പുഴ",
    "headquarters": "Alappuzha",
    "image": "/assets/districts/kerala/alappuzha.jpg",
    "cx": 447.7,
    "cy": 476.5,
    "link": "/district/alappuzha",
    "hasCallout": true,
    "labelX": 375,
    "labelY": 485
  },
  {
    "id": "kottayam",
    "name": "Kottayam",
    "marathiName": "കോട്ടയം",
    "headquarters": "Kottayam",
    "image": "/assets/districts/kerala/kottayam.jpg",
    "cx": 471.6,
    "cy": 449.3,
    "link": "/district/kottayam"
  },
  {
    "id": "pathanamthitta",
    "name": "Pathanamthitta",
    "marathiName": "പത്തനംതിട്ട",
    "headquarters": "Pathanamthitta",
    "image": "/assets/districts/kerala/pathanamthitta.jpg",
    "cx": 493.4,
    "cy": 490.9,
    "link": "/district/pathanamthitta"
  },
  {
    "id": "kollam",
    "name": "Kollam",
    "marathiName": "കൊല്ലം",
    "headquarters": "Kollam",
    "image": "/assets/districts/kerala/kollam.jpg",
    "cx": 493.9,
    "cy": 535.7,
    "link": "/district/kollam"
  },
  {
    "id": "thiruvananthapuram",
    "name": "Thiruvananthapuram",
    "marathiName": "തിരുവനന്തപുരം",
    "headquarters": "Thiruvananthapuram",
    "image": "/assets/districts/kerala/thiruvananthapuram.jpg",
    "cx": 519.6,
    "cy": 577.7,
    "link": "/district/thiruvananthapuram"
  },
  {
    "id": "kannur",
    "name": "Kannur",
    "marathiName": "കണ്ണൂർ",
    "headquarters": "Kannur",
    "image": "/assets/districts/kerala/kannur.jpg",
    "cx": 324.1,
    "cy": 133,
    "link": "/district/kannur"
  }
];

export const haryanaDistrictsData: DistrictInfo[] = [
  {
    "id": "jhajjar",
    "name": "Jhajjar",
    "marathiName": "झज्जर",
    "headquarters": "Jhajjar",
    "image": "/assets/districts/haryana/jhajjar.jpg",
    "cx": 511.8,
    "cy": 445.4,
    "link": "/district/jhajjar"
  },
  {
    "id": "gurugram",
    "name": "Gurugram",
    "marathiName": "गुरुग्राम",
    "headquarters": "Gurugram",
    "image": "/assets/districts/haryana/gurugram.jpg",
    "cx": 564,
    "cy": 494.2,
    "link": "/district/gurugram"
  },
  {
    "id": "faridabad",
    "name": "Faridabad",
    "marathiName": "फरीदाबाद",
    "headquarters": "Faridabad",
    "image": "/assets/districts/haryana/faridabad.jpg",
    "cx": 635.9,
    "cy": 495.3,
    "link": "/district/faridabad"
  },
  {
    "id": "mahendragarh",
    "name": "Mahendragarh",
    "marathiName": "महेंद्रगढ़",
    "headquarters": "Narnaul",
    "image": "/assets/districts/haryana/mahendragarh.jpg",
    "cx": 416.6,
    "cy": 532.8,
    "link": "/district/mahendragarh"
  },
  {
    "id": "rewari",
    "name": "Rewari",
    "marathiName": "रेवाड़ी",
    "headquarters": "Rewari",
    "image": "/assets/districts/haryana/rewari.jpg",
    "cx": 487.7,
    "cy": 514.2,
    "link": "/district/rewari"
  },
  {
    "id": "nuh",
    "name": "Nuh",
    "marathiName": "नूंह (मेवात)",
    "headquarters": "Nuh",
    "image": "/assets/districts/haryana/nuh.jpg",
    "cx": 584.4,
    "cy": 562.5,
    "link": "/district/nuh"
  },
  {
    "id": "palwal",
    "name": "Palwal",
    "marathiName": "पलवल",
    "headquarters": "Palwal",
    "image": "/assets/districts/haryana/palwal.jpg",
    "cx": 639.8,
    "cy": 543.8,
    "link": "/district/palwal"
  },
  {
    "id": "charkhidadri",
    "name": "Charkhi Dadri",
    "marathiName": "चरखी दादरी",
    "headquarters": "Charkhi Dadri",
    "image": "/assets/districts/haryana/charkhidadri.jpg",
    "cx": 428.4,
    "cy": 452.9,
    "link": "/district/charkhidadri"
  },
  {
    "id": "yamunanagar",
    "name": "Yamunanagar",
    "marathiName": "यमुनानगर",
    "headquarters": "Yamunanagar",
    "image": "/assets/districts/haryana/yamunanagar.jpg",
    "cx": 621.2,
    "cy": 152.3,
    "link": "/district/yamunanagar"
  },
  {
    "id": "kurukshetra",
    "name": "Kurukshetra",
    "marathiName": "कुरुक्षेत्र",
    "headquarters": "Kurukshetra",
    "image": "/assets/districts/haryana/kurukshetra.jpg",
    "cx": 536.7,
    "cy": 188.1,
    "link": "/district/kurukshetra"
  },
  {
    "id": "kaithal",
    "name": "Kaithal",
    "marathiName": "कैथल",
    "headquarters": "Kaithal",
    "image": "/assets/districts/haryana/kaithal.jpg",
    "cx": 462.5,
    "cy": 223.7,
    "link": "/district/kaithal"
  },
  {
    "id": "sirsa",
    "name": "Sirsa",
    "marathiName": "सिरसा",
    "headquarters": "Sirsa",
    "image": "/assets/districts/haryana/sirsa.jpg",
    "cx": 205.8,
    "cy": 263.1,
    "link": "/district/sirsa"
  },
  {
    "id": "karnal",
    "name": "Karnal",
    "marathiName": "करनाल",
    "headquarters": "Karnal",
    "image": "/assets/districts/haryana/karnal.jpg",
    "cx": 558.4,
    "cy": 251.9,
    "link": "/district/karnal"
  },
  {
    "id": "jind",
    "name": "Jind",
    "marathiName": "जींद",
    "headquarters": "Jind",
    "image": "/assets/districts/haryana/jind.jpg",
    "cx": 449.4,
    "cy": 290.5,
    "link": "/district/jind"
  },
  {
    "id": "fatehabad",
    "name": "Fatehabad",
    "marathiName": "फतेहाबाद",
    "headquarters": "Fatehabad",
    "image": "/assets/districts/haryana/fatehabad.jpg",
    "cx": 312.8,
    "cy": 276.9,
    "link": "/district/fatehabad"
  },
  {
    "id": "hisar",
    "name": "Hisar",
    "marathiName": "हिसार",
    "headquarters": "Hisar",
    "image": "/assets/districts/haryana/hisar.jpg",
    "cx": 359.7,
    "cy": 338.1,
    "link": "/district/hisar"
  },
  {
    "id": "panipat",
    "name": "Panipat",
    "marathiName": "पानीपत",
    "headquarters": "Panipat",
    "image": "/assets/districts/haryana/panipat.jpg",
    "cx": 566.9,
    "cy": 313.9,
    "link": "/district/panipat"
  },
  {
    "id": "sonipat",
    "name": "Sonipat",
    "marathiName": "सोनीपत",
    "headquarters": "Sonipat",
    "image": "/assets/districts/haryana/sonipat.jpg",
    "cx": 556.5,
    "cy": 373.8,
    "link": "/district/sonipat"
  },
  {
    "id": "bhiwani",
    "name": "Bhiwani",
    "marathiName": "भिवानी",
    "headquarters": "Bhiwani",
    "image": "/assets/districts/haryana/bhiwani.jpg",
    "cx": 373,
    "cy": 419.5,
    "link": "/district/bhiwani"
  },
  {
    "id": "rohtak",
    "name": "Rohtak",
    "marathiName": "रोहतक",
    "headquarters": "Rohtak",
    "image": "/assets/districts/haryana/rohtak.jpg",
    "cx": 490.5,
    "cy": 399.3,
    "link": "/district/rohtak"
  },
  {
    "id": "panchkula",
    "name": "Panchkula",
    "marathiName": "पंचकूला",
    "headquarters": "Panchkula",
    "image": "/assets/districts/haryana/panchkula.jpg",
    "cx": 563.7,
    "cy": 76.4,
    "link": "/district/panchkula"
  },
  {
    "id": "ambala",
    "name": "Ambala",
    "marathiName": "अंबाला",
    "headquarters": "Ambala",
    "image": "/assets/districts/haryana/ambala.jpg",
    "cx": 554.5,
    "cy": 136.9,
    "link": "/district/ambala"
  }
];

export const punjabDistrictsData: DistrictInfo[] = [
  {
    "id": "gurdaspur",
    "name": "Gurdaspur",
    "marathiName": "ਗੁਰਦਾਸਪੁਰ",
    "headquarters": "Gurdaspur",
    "image": "/assets/districts/punjab/gurdaspur.jpg",
    "cx": 363.8,
    "cy": 142.3,
    "link": "/district/gurdaspur"
  },
  {
    "id": "hoshiarpur",
    "name": "Hoshiarpur",
    "marathiName": "ਹੁਸ਼ਿਆਰਪੁਰ",
    "headquarters": "Hoshiarpur",
    "image": "/assets/districts/punjab/hoshiarpur.jpg",
    "cx": 499.2,
    "cy": 226.9,
    "link": "/district/hoshiarpur"
  },
  {
    "id": "amritsar",
    "name": "Amritsar",
    "marathiName": "ਅੰਮ੍ਰਿਤਸਰ",
    "headquarters": "Amritsar",
    "image": "/assets/districts/punjab/amritsar.jpg",
    "cx": 301,
    "cy": 180.7,
    "link": "/district/amritsar"
  },
  {
    "id": "jalandhar",
    "name": "Jalandhar",
    "marathiName": "ਜਲੰਧਰ",
    "headquarters": "Jalandhar",
    "image": "/assets/districts/punjab/jalandhar.jpg",
    "cx": 425.2,
    "cy": 279.6,
    "link": "/district/jalandhar"
  },
  {
    "id": "tarntaran",
    "name": "Tarn Taran",
    "marathiName": "ਤਰਨ ਤਾਰਨ",
    "headquarters": "Tarn Taran Sahib",
    "image": "/assets/districts/punjab/tarntaran.jpg",
    "cx": 287.1,
    "cy": 260,
    "link": "/district/tarntaran"
  },
  {
    "id": "rupnagar",
    "name": "Rupnagar",
    "marathiName": "ਰੂਪਨਗਰ",
    "headquarters": "Rupnagar",
    "image": "/assets/districts/punjab/rupnagar.jpg",
    "cx": 614.6,
    "cy": 312.4,
    "link": "/district/rupnagar"
  },
  {
    "id": "shahidbhagatsinghnagar",
    "name": "Shahid Bhagat Singh Nagar",
    "marathiName": "ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ",
    "headquarters": "Nawanshahr",
    "image": "/assets/districts/punjab/shahidbhagatsinghnagar.jpg",
    "cx": 540.7,
    "cy": 301.5,
    "link": "/district/shahidbhagatsinghnagar"
  },
  {
    "id": "fazilka",
    "name": "Fazilka",
    "marathiName": "ਫ਼ਾਜ਼ਿਲਕਾ",
    "headquarters": "Fazilka",
    "image": "/assets/districts/punjab/fazilka.jpg",
    "cx": 156.2,
    "cy": 464.4,
    "link": "/district/fazilka"
  },
  {
    "id": "moga",
    "name": "Moga",
    "marathiName": "ਮੋਗਾ",
    "headquarters": "Moga",
    "image": "/assets/districts/punjab/moga.jpg",
    "cx": 354.7,
    "cy": 374,
    "link": "/district/moga"
  },
  {
    "id": "ludhiana",
    "name": "Ludhiana",
    "marathiName": "ਲੁਧਿਆਣਾ",
    "headquarters": "Ludhiana",
    "image": "/assets/districts/punjab/ludhiana.jpg",
    "cx": 487.8,
    "cy": 373.9,
    "link": "/district/ludhiana"
  },
  {
    "id": "sasnagar",
    "name": "S.A.S. Nagar",
    "marathiName": "ਐਸ.ਏ.ਐਸ. ਨਗਰ (ਮੋਹਾਲੀ)",
    "headquarters": "Sahibzada Ajit Singh Nagar (Mohali)",
    "image": "/assets/districts/punjab/sasnagar.jpg",
    "cx": 674.5,
    "cy": 403.6,
    "link": "/district/sasnagar"
  },
  {
    "id": "faridkot",
    "name": "Faridkot",
    "marathiName": "ਫ਼ਰੀਦਕੋਟ",
    "headquarters": "Faridkot",
    "image": "/assets/districts/punjab/faridkot.jpg",
    "cx": 277.1,
    "cy": 416.4,
    "link": "/district/faridkot"
  },
  {
    "id": "fatehgarhsahib",
    "name": "Fatehgarh Sahib",
    "marathiName": "ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ",
    "headquarters": "Fatehgarh Sahib",
    "image": "/assets/districts/punjab/fatehgarhsahib.jpg",
    "cx": 592.7,
    "cy": 399.6,
    "link": "/district/fatehgarhsahib"
  },
  {
    "id": "srimuktsarsahib",
    "name": "Sri Muktsar Sahib",
    "marathiName": "ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ",
    "headquarters": "Sri Muktsar Sahib",
    "image": "/assets/districts/punjab/srimuktsarsahib.jpg",
    "cx": 226.5,
    "cy": 468.3,
    "link": "/district/srimuktsarsahib"
  },
  {
    "id": "sangrur",
    "name": "Sangrur",
    "marathiName": "ਸੰਗਰੂਰ",
    "headquarters": "Sangrur",
    "image": "/assets/districts/punjab/sangrur.jpg",
    "cx": 486,
    "cy": 506,
    "link": "/district/sangrur"
  },
  {
    "id": "barnala",
    "name": "Barnala",
    "marathiName": "ਬਰਨਾਲਾ",
    "headquarters": "Barnala",
    "image": "/assets/districts/punjab/barnala.jpg",
    "cx": 417.7,
    "cy": 457,
    "link": "/district/barnala"
  },
  {
    "id": "bathinda",
    "name": "Bathinda",
    "marathiName": "ਬਠਿੰਡਾ",
    "headquarters": "Bathinda",
    "image": "/assets/districts/punjab/bathinda.jpg",
    "cx": 333.9,
    "cy": 499.8,
    "link": "/district/bathinda"
  },
  {
    "id": "patiala",
    "name": "Patiala",
    "marathiName": "ਪਟਿਆਲਾ",
    "headquarters": "Patiala",
    "image": "/assets/districts/punjab/patiala.jpg",
    "cx": 595.9,
    "cy": 482.1,
    "link": "/district/patiala"
  },
  {
    "id": "mansa",
    "name": "Mansa",
    "marathiName": "ਮਾਨਸਾ",
    "headquarters": "Mansa",
    "image": "/assets/districts/punjab/mansa.jpg",
    "cx": 402.5,
    "cy": 553.9,
    "link": "/district/mansa"
  },
  {
    "id": "ferozepur",
    "name": "Ferozepur",
    "marathiName": "ਫ਼ਿਰੋਜ਼ਪੁਰ",
    "headquarters": "Ferozepur",
    "image": "/assets/districts/punjab/ferozepur.jpg",
    "cx": 261,
    "cy": 346.7,
    "link": "/district/ferozepur"
  },
  {
    "id": "pathankot",
    "name": "Pathankot",
    "marathiName": "ਪਠਾਨਕੋਟ",
    "headquarters": "Pathankot",
    "image": "/assets/districts/punjab/pathankot.jpg",
    "cx": 438.4,
    "cy": 70.9,
    "link": "/district/pathankot"
  },
  {
    "id": "kapurthala",
    "name": "Kapurthala",
    "marathiName": "ਕਪੂਰਥਲਾ",
    "headquarters": "Kapurthala",
    "image": "/assets/districts/punjab/kapurthala.jpg",
    "cx": 387.9,
    "cy": 251.4,
    "link": "/district/kapurthala"
  },
  {
    "id": "malerkotla",
    "name": "Malerkotla",
    "marathiName": "ਮਲੇਰਕੋਟਲਾ",
    "headquarters": "Malerkotla",
    "image": "/assets/districts/punjab/malerkotla.jpg",
    "cx": 493.8,
    "cy": 414.5,
    "link": "/district/malerkotla"
  }
];

export const himachalPradeshDistrictsData: DistrictInfo[] = [
  {
    "id": "lahaulspiti",
    "name": "Lahaul & Spiti",
    "marathiName": "लाहौल और स्पीति",
    "headquarters": "Keylong",
    "image": "/assets/districts/himachalpradesh/lahaulspiti.jpg",
    "cx": 442,
    "cy": 185.2,
    "link": "/district/lahaulspiti"
  },
  {
    "id": "chamba",
    "name": "Chamba",
    "marathiName": "चंबा",
    "headquarters": "Chamba",
    "image": "/assets/districts/himachalpradesh/chamba.jpg",
    "cx": 218.8,
    "cy": 167.2,
    "link": "/district/chamba"
  },
  {
    "id": "kangra",
    "name": "Kangra",
    "marathiName": "कांगड़ा",
    "headquarters": "Dharamshala",
    "image": "/assets/districts/himachalpradesh/kangra.jpg",
    "cx": 213.5,
    "cy": 264.8,
    "link": "/district/kangra"
  },
  {
    "id": "kullu",
    "name": "Kullu",
    "marathiName": "कुल्लू",
    "headquarters": "Kullu",
    "image": "/assets/districts/himachalpradesh/kullu.jpg",
    "cx": 421.3,
    "cy": 303.4,
    "link": "/district/kullu"
  },
  {
    "id": "mandi",
    "name": "Mandi",
    "marathiName": "मंडी",
    "headquarters": "Mandi",
    "image": "/assets/districts/himachalpradesh/mandi.jpg",
    "cx": 324,
    "cy": 361.9,
    "link": "/district/mandi"
  },
  {
    "id": "kinnaur",
    "name": "Kinnaur",
    "marathiName": "किन्नौर",
    "headquarters": "Reckong Peo",
    "image": "/assets/districts/himachalpradesh/kinnaur.jpg",
    "cx": 617.5,
    "cy": 373.6,
    "link": "/district/kinnaur"
  },
  {
    "id": "una",
    "name": "Una",
    "marathiName": "ऊना",
    "headquarters": "Una",
    "image": "/assets/districts/himachalpradesh/una.jpg",
    "cx": 183.8,
    "cy": 372.9,
    "link": "/district/una"
  },
  {
    "id": "shimla",
    "name": "Shimla",
    "marathiName": "शिमला",
    "headquarters": "Shimla",
    "image": "/assets/districts/himachalpradesh/shimla.jpg",
    "cx": 460.4,
    "cy": 449.3,
    "link": "/district/shimla"
  },
  {
    "id": "solan",
    "name": "Solan",
    "marathiName": "सोलन",
    "headquarters": "Solan",
    "image": "/assets/districts/himachalpradesh/solan.jpg",
    "cx": 328.2,
    "cy": 477.6,
    "link": "/district/solan"
  },
  {
    "id": "sirmaur",
    "name": "Sirmaur",
    "marathiName": "सिरमौर",
    "headquarters": "Nahan",
    "image": "/assets/districts/himachalpradesh/sirmaur.jpg",
    "cx": 422.2,
    "cy": 555.7,
    "link": "/district/sirmaur"
  },
  {
    "id": "hamirpur",
    "name": "Hamirpur",
    "marathiName": "हमीरपुर",
    "headquarters": "Hamirpur",
    "image": "/assets/districts/himachalpradesh/hamirpur.jpg",
    "cx": 246.5,
    "cy": 351.6,
    "link": "/district/hamirpur"
  },
  {
    "id": "bilaspur",
    "name": "Bilaspur",
    "marathiName": "बिलासपुर",
    "headquarters": "Bilaspur",
    "image": "/assets/districts/himachalpradesh/bilaspur.jpg",
    "cx": 275.2,
    "cy": 409.3,
    "link": "/district/bilaspur"
  }
];

export const uttarakhandDistrictsData: DistrictInfo[] = [
  {
    "id": "uttarkashi",
    "name": "Uttarkashi",
    "marathiName": "उत्तरकाशी",
    "headquarters": "Uttarkashi",
    "image": "/assets/districts/uttarakhand/uttarkashi.jpg",
    "cx": 252.3,
    "cy": 143.8,
    "link": "/district/uttarkashi"
  },
  {
    "id": "chamoli",
    "name": "Chamoli",
    "marathiName": "चमोली",
    "headquarters": "Gopeshwar",
    "image": "/assets/districts/uttarakhand/chamoli.jpg",
    "cx": 448.9,
    "cy": 238.3,
    "link": "/district/chamoli"
  },
  {
    "id": "dehradun",
    "name": "Dehradun",
    "marathiName": "देहरादून",
    "headquarters": "Dehradun",
    "image": "/assets/districts/uttarakhand/dehradun.jpg",
    "cx": 114.8,
    "cy": 234.3,
    "link": "/district/dehradun"
  },
  {
    "id": "tehrigarhwal",
    "name": "Tehri Garhwal",
    "marathiName": "टिहरी गढ़वाल",
    "headquarters": "New Tehri",
    "image": "/assets/districts/uttarakhand/tehrigarhwal.jpg",
    "cx": 225.3,
    "cy": 253,
    "link": "/district/tehrigarhwal"
  },
  {
    "id": "rudraprayag",
    "name": "Rudraprayag",
    "marathiName": "रुद्रप्रयाग",
    "headquarters": "Rudraprayag",
    "image": "/assets/districts/uttarakhand/rudraprayag.jpg",
    "cx": 349.1,
    "cy": 240.8,
    "link": "/district/rudraprayag"
  },
  {
    "id": "pithoragarh",
    "name": "Pithoragarh",
    "marathiName": "पिथौरागढ़",
    "headquarters": "Pithoragarh",
    "image": "/assets/districts/uttarakhand/pithoragarh.jpg",
    "cx": 599.6,
    "cy": 325.1,
    "link": "/district/pithoragarh"
  },
  {
    "id": "bageshwar",
    "name": "Bageshwar",
    "marathiName": "बागेश्वर",
    "headquarters": "Bageshwar",
    "image": "/assets/districts/uttarakhand/bageshwar.jpg",
    "cx": 514,
    "cy": 348.1,
    "link": "/district/bageshwar"
  },
  {
    "id": "haridwar",
    "name": "Haridwar",
    "marathiName": "हरिद्वार",
    "headquarters": "Haridwar",
    "image": "/assets/districts/uttarakhand/haridwar.jpg",
    "cx": 120.3,
    "cy": 376.7,
    "link": "/district/haridwar"
  },
  {
    "id": "garhwal",
    "name": "Garhwal",
    "marathiName": "पौड़ी गढ़वाल",
    "headquarters": "Pauri",
    "image": "/assets/districts/uttarakhand/garhwal.jpg",
    "cx": 294.2,
    "cy": 352.7,
    "link": "/district/garhwal"
  },
  {
    "id": "almora",
    "name": "Almora",
    "marathiName": "अल्मोड़ा",
    "headquarters": "Almora",
    "image": "/assets/districts/uttarakhand/almora.jpg",
    "cx": 434.2,
    "cy": 406.3,
    "link": "/district/almora"
  },
  {
    "id": "nainital",
    "name": "Nainital",
    "marathiName": "नैनीताल",
    "headquarters": "Nainital",
    "image": "/assets/districts/uttarakhand/nainital.jpg",
    "cx": 441.4,
    "cy": 483.6,
    "link": "/district/nainital"
  },
  {
    "id": "champawat",
    "name": "Champawat",
    "marathiName": "चंपावत",
    "headquarters": "Champawat",
    "image": "/assets/districts/uttarakhand/champawat.jpg",
    "cx": 551.1,
    "cy": 498.9,
    "link": "/district/champawat"
  },
  {
    "id": "udhamsinghnagar",
    "name": "Udham Singh Nagar",
    "marathiName": "ऊधम सिंह नगर",
    "headquarters": "Rudrapur",
    "image": "/assets/districts/uttarakhand/udhamsinghnagar.jpg",
    "cx": 417.7,
    "cy": 542.4,
    "link": "/district/udhamsinghnagar"
  }
];

export const jammuAndKashmirDistrictsData: DistrictInfo[] = [
  {
    "id": "kupwara",
    "name": "Kupwara",
    "marathiName": "कुपवाड़ा / کپواڑہ",
    "headquarters": "Kupwara",
    "image": "/assets/districts/jammuandkashmir/kupwara.jpg",
    "cx": 213.4,
    "cy": 167.4,
    "link": "/district/kupwara"
  },
  {
    "id": "bandipore",
    "name": "Bandipore",
    "marathiName": "बांदीपोरा / بانڈی پورہ",
    "headquarters": "Bandipore",
    "image": "/assets/districts/jammuandkashmir/bandipore.jpg",
    "cx": 348.9,
    "cy": 180.2,
    "link": "/district/bandipore"
  },
  {
    "id": "baramulla",
    "name": "Baramulla",
    "marathiName": "बारामूला / بارہمولہ",
    "headquarters": "Baramulla",
    "image": "/assets/districts/jammuandkashmir/baramulla.jpg",
    "cx": 250.2,
    "cy": 230.3,
    "link": "/district/baramulla"
  },
  {
    "id": "ganderbal",
    "name": "Ganderbal",
    "marathiName": "गांदरबल / گاندربل",
    "headquarters": "Ganderbal",
    "image": "/assets/districts/jammuandkashmir/ganderbal.jpg",
    "cx": 390.5,
    "cy": 207.1,
    "link": "/district/ganderbal"
  },
  {
    "id": "anantnag",
    "name": "Anantnag",
    "marathiName": "अनंतनाग / اننت ناگ",
    "headquarters": "Anantnag",
    "image": "/assets/districts/jammuandkashmir/anantnag.jpg",
    "cx": 435.9,
    "cy": 296.3,
    "link": "/district/anantnag"
  },
  {
    "id": "kishtwar",
    "name": "Kishtwar",
    "marathiName": "किश्तवाड़ / کشتواڑ",
    "headquarters": "Kishtwar",
    "image": "/assets/districts/jammuandkashmir/kishtwar.jpg",
    "cx": 586.8,
    "cy": 350.6,
    "link": "/district/kishtwar"
  },
  {
    "id": "srinagar",
    "name": "Srinagar",
    "marathiName": "श्रीनगर / سرینگر",
    "headquarters": "Srinagar",
    "image": "/assets/districts/jammuandkashmir/srinagar.jpg",
    "cx": 364.7,
    "cy": 239.5,
    "link": "/district/srinagar"
  },
  {
    "id": "budgam",
    "name": "Budgam",
    "marathiName": "बडगाम / بڈگام",
    "headquarters": "Budgam",
    "image": "/assets/districts/jammuandkashmir/budgam.jpg",
    "cx": 309.9,
    "cy": 281.2,
    "link": "/district/budgam"
  },
  {
    "id": "pulwama",
    "name": "Pulwama",
    "marathiName": "पुलवामा / پلوامہ",
    "headquarters": "Pulwama",
    "image": "/assets/districts/jammuandkashmir/pulwama.jpg",
    "cx": 377.6,
    "cy": 281.5,
    "link": "/district/pulwama"
  },
  {
    "id": "poonch",
    "name": "Poonch",
    "marathiName": "पुंछ / پونچھ",
    "headquarters": "Poonch",
    "image": "/assets/districts/jammuandkashmir/poonch.jpg",
    "cx": 201,
    "cy": 312.4,
    "link": "/district/poonch"
  },
  {
    "id": "shopian",
    "name": "Shopian",
    "marathiName": "शोपियां / شوپیاں",
    "headquarters": "Shopian",
    "image": "/assets/districts/jammuandkashmir/shopian.jpg",
    "cx": 352.3,
    "cy": 316,
    "link": "/district/shopian"
  },
  {
    "id": "kulgam",
    "name": "Kulgam",
    "marathiName": "कुलगाम / کلگام",
    "headquarters": "Kulgam",
    "image": "/assets/districts/jammuandkashmir/kulgam.jpg",
    "cx": 365.9,
    "cy": 337.7,
    "link": "/district/kulgam"
  },
  {
    "id": "rajouri",
    "name": "Rajouri",
    "marathiName": "राजौरी / راجوری",
    "headquarters": "Rajouri",
    "image": "/assets/districts/jammuandkashmir/rajouri.jpg",
    "cx": 271.6,
    "cy": 411.4,
    "link": "/district/rajouri"
  },
  {
    "id": "ramban",
    "name": "Ramban",
    "marathiName": "रामबन / رام بن",
    "headquarters": "Ramban",
    "image": "/assets/districts/jammuandkashmir/ramban.jpg",
    "cx": 417,
    "cy": 400,
    "link": "/district/ramban"
  },
  {
    "id": "reasi",
    "name": "Reasi",
    "marathiName": "रियासी / ریاسی",
    "headquarters": "Reasi",
    "image": "/assets/districts/jammuandkashmir/reasi.jpg",
    "cx": 338.5,
    "cy": 426.6,
    "link": "/district/reasi"
  },
  {
    "id": "doda",
    "name": "Doda",
    "marathiName": "डोडा / ڈوڈہ",
    "headquarters": "Doda",
    "image": "/assets/districts/jammuandkashmir/doda.jpg",
    "cx": 531,
    "cy": 444.3,
    "link": "/district/doda"
  },
  {
    "id": "jammu",
    "name": "Jammu",
    "marathiName": "जम्मू / جموں",
    "headquarters": "Jammu",
    "image": "/assets/districts/jammuandkashmir/jammu.jpg",
    "cx": 330.8,
    "cy": 509.2,
    "link": "/district/jammu"
  },
  {
    "id": "kathua",
    "name": "Kathua",
    "marathiName": "कठुआ / کٹھوعہ",
    "headquarters": "Kathua",
    "image": "/assets/districts/jammuandkashmir/kathua.jpg",
    "cx": 490.2,
    "cy": 552.9,
    "link": "/district/kathua"
  },
  {
    "id": "udhampur",
    "name": "Udhampur",
    "marathiName": "उधमपुर / ادھم پور",
    "headquarters": "Udhampur",
    "image": "/assets/districts/jammuandkashmir/udhampur.jpg",
    "cx": 440.2,
    "cy": 493.2,
    "link": "/district/udhampur"
  },
  {
    "id": "samba",
    "name": "Samba",
    "marathiName": "सांबा / سانبہ",
    "headquarters": "Samba",
    "image": "/assets/districts/jammuandkashmir/samba.jpg",
    "cx": 398.2,
    "cy": 549.9,
    "link": "/district/samba"
  },
  {
    "id": "muzaffarabad",
    "name": "Muzaffarabad",
    "marathiName": "मुज़फ़्फ़राबाद / مظفر آباد",
    "headquarters": "Muzaffarabad",
    "image": "/assets/districts/jammuandkashmir/muzaffarabad.jpg",
    "cx": 167.3,
    "cy": 145,
    "link": "/district/muzaffarabad"
  },
  {
    "id": "mirpur",
    "name": "Mirpur",
    "marathiName": "मीरपुर / میرپور",
    "headquarters": "New Mirpur City",
    "image": "/assets/districts/jammuandkashmir/mirpur.jpg",
    "cx": 163.6,
    "cy": 410.8,
    "link": "/district/mirpur"
  }
];

export const odishaDistrictsData: DistrictInfo[] = [
  {
    "id": "bhadrak",
    "name": "Bhadrak",
    "marathiName": "ଭଦ୍ରକ",
    "headquarters": "Bhadrak",
    "image": "/assets/districts/odisha/bhadrak.jpg",
    "cx": 650.2,
    "cy": 227.5,
    "link": "/district/bhadrak"
  },
  {
    "id": "dhenkanal",
    "name": "Dhenkanal",
    "marathiName": "ଢେଙ୍କାନାଳ",
    "headquarters": "Dhenkanal",
    "image": "/assets/districts/odisha/dhenkanal.jpg",
    "cx": 528.7,
    "cy": 249.4,
    "link": "/district/dhenkanal"
  },
  {
    "id": "jajpur",
    "name": "Jajpur",
    "marathiName": "ଯାଜପୁର",
    "headquarters": "Panikoili / Jajpur",
    "image": "/assets/districts/odisha/jajpur.jpg",
    "cx": 601.8,
    "cy": 246.8,
    "link": "/district/jajpur"
  },
  {
    "id": "subarnapur",
    "name": "Subarnapur",
    "marathiName": "ସୁବର୍ଣ୍ଣପୁର",
    "headquarters": "Sonepur",
    "image": "/assets/districts/odisha/subarnapur.jpg",
    "cx": 327.6,
    "cy": 242.5,
    "link": "/district/subarnapur"
  },
  {
    "id": "nuapada",
    "name": "Nuapada",
    "marathiName": "ନୂଆପଡ଼ା",
    "headquarters": "Nuapada",
    "image": "/assets/districts/odisha/nuapada.jpg",
    "cx": 185.3,
    "cy": 291.6,
    "link": "/district/nuapada"
  },
  {
    "id": "balangir",
    "name": "Balangir",
    "marathiName": "ବଲାଙ୍ଗୀର",
    "headquarters": "Balangir",
    "image": "/assets/districts/odisha/balangir.jpg",
    "cx": 255.1,
    "cy": 279.5,
    "link": "/district/balangir"
  },
  {
    "id": "boudh",
    "name": "Boudh",
    "marathiName": "ବୌଦ୍ଧ",
    "headquarters": "Boudh",
    "image": "/assets/districts/odisha/boudh.jpg",
    "cx": 367.5,
    "cy": 276.6,
    "link": "/district/boudh"
  },
  {
    "id": "cuttack",
    "name": "Cuttack",
    "marathiName": "କଟକ",
    "headquarters": "Cuttack",
    "image": "/assets/districts/odisha/cuttack.jpg",
    "cx": 564,
    "cy": 298.9,
    "link": "/district/cuttack"
  },
  {
    "id": "kandhamal",
    "name": "Kandhamal",
    "marathiName": "କନ୍ଧମାଳ",
    "headquarters": "Phulbani",
    "image": "/assets/districts/odisha/kandhamal.jpg",
    "cx": 355.2,
    "cy": 335.5,
    "link": "/district/kandhamal"
  },
  {
    "id": "nayagarh",
    "name": "Nayagarh",
    "marathiName": "ନୟାଗଡ଼",
    "headquarters": "Nayagarh",
    "image": "/assets/districts/odisha/nayagarh.jpg",
    "cx": 471.9,
    "cy": 323.6,
    "link": "/district/nayagarh"
  },
  {
    "id": "khordha",
    "name": "Khordha",
    "marathiName": "ଖୋର୍ଦ୍ଧା",
    "headquarters": "Bhubaneswar / Khordha",
    "image": "/assets/districts/odisha/khordha.jpg",
    "cx": 529.1,
    "cy": 335.7,
    "link": "/district/khordha"
  },
  {
    "id": "kalahandi",
    "name": "Kalahandi",
    "marathiName": "କଳାହାଣ୍ଡି",
    "headquarters": "Bhawanipatna",
    "image": "/assets/districts/odisha/kalahandi.jpg",
    "cx": 243.6,
    "cy": 373.1,
    "link": "/district/kalahandi"
  },
  {
    "id": "jagatsinghpur",
    "name": "Jagatsinghpur",
    "marathiName": "ଜଗତସିଂହପୁର",
    "headquarters": "Jagatsinghpur",
    "image": "/assets/districts/odisha/jagatsinghpur.jpg",
    "cx": 623,
    "cy": 319.4,
    "link": "/district/jagatsinghpur"
  },
  {
    "id": "puri",
    "name": "Puri",
    "marathiName": "ପୁରୀ",
    "headquarters": "Puri",
    "image": "/assets/districts/odisha/puri.jpg",
    "cx": 559.1,
    "cy": 347.7,
    "link": "/district/puri"
  },
  {
    "id": "nabarangapur",
    "name": "Nabarangapur",
    "marathiName": "ନବରଙ୍ଗପୁର",
    "headquarters": "Nabarangpur",
    "image": "/assets/districts/odisha/nabarangapur.jpg",
    "cx": 159.4,
    "cy": 410.5,
    "link": "/district/nabarangapur"
  },
  {
    "id": "rayagada",
    "name": "Rayagada",
    "marathiName": "ରାୟଗଡ଼ା",
    "headquarters": "Rayagada",
    "image": "/assets/districts/odisha/rayagada.jpg",
    "cx": 283.8,
    "cy": 429.6,
    "link": "/district/rayagada"
  },
  {
    "id": "koraput",
    "name": "Koraput",
    "marathiName": "କୋରାପୁଟ",
    "headquarters": "Koraput",
    "image": "/assets/districts/odisha/koraput.jpg",
    "cx": 207.3,
    "cy": 485.6,
    "link": "/district/koraput"
  },
  {
    "id": "malkangiri",
    "name": "Malkangiri",
    "marathiName": "ମାଲକାନଗିରି",
    "headquarters": "Malkangiri",
    "image": "/assets/districts/odisha/malkangiri.jpg",
    "cx": 110.6,
    "cy": 555.7,
    "link": "/district/malkangiri"
  },
  {
    "id": "angul",
    "name": "Angul",
    "marathiName": "ଅନୁଗୋଳ",
    "headquarters": "Angul",
    "image": "/assets/districts/odisha/angul.jpg",
    "cx": 463.6,
    "cy": 215.7,
    "link": "/district/angul"
  },
  {
    "id": "kendrapara",
    "name": "Kendrapara",
    "marathiName": "କେନ୍ଦ୍ରାପଡ଼ା",
    "headquarters": "Kendrapara",
    "image": "/assets/districts/odisha/kendrapara.jpg",
    "cx": 652,
    "cy": 282.3,
    "link": "/district/kendrapara"
  },
  {
    "id": "ganjam",
    "name": "Ganjam",
    "marathiName": "ଗଞ୍ଜାମ",
    "headquarters": "Chhatrapur",
    "image": "/assets/districts/odisha/ganjam.jpg",
    "cx": 409.5,
    "cy": 398.3,
    "link": "/district/ganjam"
  },
  {
    "id": "gajapati",
    "name": "Gajapati",
    "marathiName": "ଗଜପତି",
    "headquarters": "Paralakhemundi",
    "image": "/assets/districts/odisha/gajapati.jpg",
    "cx": 371.4,
    "cy": 445.2,
    "link": "/district/gajapati"
  },
  {
    "id": "mayurbhanj",
    "name": "Mayurbhanj",
    "marathiName": "ମୟୂରଭଞ୍ଜ",
    "headquarters": "Baripada",
    "image": "/assets/districts/odisha/mayurbhanj.jpg",
    "cx": 635.4,
    "cy": 121.2,
    "link": "/district/mayurbhanj"
  },
  {
    "id": "sundargarh",
    "name": "Sundargarh",
    "marathiName": "ସୁନ୍ଦରଗଡ଼",
    "headquarters": "Sundargarh",
    "image": "/assets/districts/odisha/sundargarh.jpg",
    "cx": 402.3,
    "cy": 104,
    "link": "/district/sundargarh"
  },
  {
    "id": "kendujhar",
    "name": "Kendujhar",
    "marathiName": "କେନ୍ଦୁଝର",
    "headquarters": "Kendujhar",
    "image": "/assets/districts/odisha/kendujhar.jpg",
    "cx": 554.9,
    "cy": 171,
    "link": "/district/kendujhar"
  },
  {
    "id": "balasore",
    "name": "Balasore",
    "marathiName": "ବାଲେଶ୍ୱର",
    "headquarters": "Baleswar",
    "image": "/assets/districts/odisha/balasore.jpg",
    "cx": 697.2,
    "cy": 163.6,
    "link": "/district/balasore"
  },
  {
    "id": "jharsuguda",
    "name": "Jharsuguda",
    "marathiName": "ଝାରସୁଗୁଡ଼ା",
    "headquarters": "Jharsuguda",
    "image": "/assets/districts/odisha/jharsuguda.jpg",
    "cx": 338,
    "cy": 131.4,
    "link": "/district/jharsuguda"
  },
  {
    "id": "bargarh",
    "name": "Bargarh",
    "marathiName": "ବରଗଡ଼",
    "headquarters": "Bargarh",
    "image": "/assets/districts/odisha/bargarh.jpg",
    "cx": 264.5,
    "cy": 206.5,
    "link": "/district/bargarh"
  },
  {
    "id": "deogarh",
    "name": "Deogarh",
    "marathiName": "ଦେବଗଡ଼",
    "headquarters": "Deogarh",
    "image": "/assets/districts/odisha/deogarh.jpg",
    "cx": 438.6,
    "cy": 178,
    "link": "/district/deogarh"
  },
  {
    "id": "sambalpur",
    "name": "Sambalpur",
    "marathiName": "ସମ୍ବଲପୁର",
    "headquarters": "Sambalpur",
    "image": "/assets/districts/odisha/sambalpur.jpg",
    "cx": 388.9,
    "cy": 167.3,
    "link": "/district/sambalpur"
  }
];

export const jharkhandDistrictsData: DistrictInfo[] = [
  {
    "id": "sahibganj",
    "name": "Sahibganj",
    "marathiName": "साहिबगंज",
    "headquarters": "Sahibganj",
    "image": "/assets/districts/jharkhand/sahibganj.jpg",
    "cx": 712.7,
    "cy": 120.2,
    "link": "/district/sahibganj"
  },
  {
    "id": "godda",
    "name": "Godda",
    "marathiName": "गोड्डा",
    "headquarters": "Godda",
    "image": "/assets/districts/jharkhand/godda.jpg",
    "cx": 659.5,
    "cy": 145.2,
    "link": "/district/godda"
  },
  {
    "id": "pakur",
    "name": "Pakur",
    "marathiName": "पाकुड़",
    "headquarters": "Pakur",
    "image": "/assets/districts/jharkhand/pakur.jpg",
    "cx": 718.4,
    "cy": 180.1,
    "link": "/district/pakur"
  },
  {
    "id": "giridih",
    "name": "Giridih",
    "marathiName": "गिरिडीह",
    "headquarters": "Giridih",
    "image": "/assets/districts/jharkhand/giridih.jpg",
    "cx": 472.6,
    "cy": 228.6,
    "link": "/district/giridih"
  },
  {
    "id": "dumka",
    "name": "Dumka",
    "marathiName": "दुमका",
    "headquarters": "Dumka",
    "image": "/assets/districts/jharkhand/dumka.jpg",
    "cx": 648.6,
    "cy": 227.5,
    "link": "/district/dumka"
  },
  {
    "id": "deoghar",
    "name": "Deoghar",
    "marathiName": "देवघर",
    "headquarters": "Deoghar",
    "image": "/assets/districts/jharkhand/deoghar.jpg",
    "cx": 570.1,
    "cy": 223.5,
    "link": "/district/deoghar"
  },
  {
    "id": "palamu",
    "name": "Palamu",
    "marathiName": "पलामू",
    "headquarters": "Daltonganj (Medininagar)",
    "image": "/assets/districts/jharkhand/palamu.jpg",
    "cx": 175.9,
    "cy": 240.9,
    "link": "/district/palamu"
  },
  {
    "id": "chatra",
    "name": "Chatra",
    "marathiName": "चतरा",
    "headquarters": "Chatra",
    "image": "/assets/districts/jharkhand/chatra.jpg",
    "cx": 292,
    "cy": 254,
    "link": "/district/chatra"
  },
  {
    "id": "garhwa",
    "name": "Garhwa",
    "marathiName": "गढ़वा",
    "headquarters": "Garhwa",
    "image": "/assets/districts/jharkhand/garhwa.jpg",
    "cx": 103.9,
    "cy": 261.8,
    "link": "/district/garhwa"
  },
  {
    "id": "jamtara",
    "name": "Jamtara",
    "marathiName": "जामताड़ा",
    "headquarters": "Jamtara",
    "image": "/assets/districts/jharkhand/jamtara.jpg",
    "cx": 598.8,
    "cy": 277.8,
    "link": "/district/jamtara"
  },
  {
    "id": "dhanbad",
    "name": "Dhanbad",
    "marathiName": "धनबाद",
    "headquarters": "Dhanbad",
    "image": "/assets/districts/jharkhand/dhanbad.jpg",
    "cx": 526.6,
    "cy": 297.1,
    "link": "/district/dhanbad"
  },
  {
    "id": "latehar",
    "name": "Latehar",
    "marathiName": "लातेहार",
    "headquarters": "Latehar",
    "image": "/assets/districts/jharkhand/latehar.jpg",
    "cx": 220.5,
    "cy": 315.4,
    "link": "/district/latehar"
  },
  {
    "id": "bokaro",
    "name": "Bokaro",
    "marathiName": "बोकारो",
    "headquarters": "Bokaro Steel City",
    "image": "/assets/districts/jharkhand/bokaro.jpg",
    "cx": 456.1,
    "cy": 317.5,
    "link": "/district/bokaro"
  },
  {
    "id": "ramgarh",
    "name": "Ramgarh",
    "marathiName": "रामगढ़",
    "headquarters": "Ramgarh Cantonment",
    "image": "/assets/districts/jharkhand/ramgarh.jpg",
    "cx": 387.9,
    "cy": 328.5,
    "link": "/district/ramgarh"
  },
  {
    "id": "ranchi",
    "name": "Ranchi",
    "marathiName": "राँची",
    "headquarters": "Ranchi",
    "image": "/assets/districts/jharkhand/ranchi.jpg",
    "cx": 350.9,
    "cy": 378.8,
    "link": "/district/ranchi"
  },
  {
    "id": "lohardaga",
    "name": "Lohardaga",
    "marathiName": "लोहरदगा",
    "headquarters": "Lohardaga",
    "image": "/assets/districts/jharkhand/lohardaga.jpg",
    "cx": 250.8,
    "cy": 352.2,
    "link": "/district/lohardaga"
  },
  {
    "id": "gumla",
    "name": "Gumla",
    "marathiName": "गुमला",
    "headquarters": "Gumla",
    "image": "/assets/districts/jharkhand/gumla.jpg",
    "cx": 235.2,
    "cy": 416.8,
    "link": "/district/gumla"
  },
  {
    "id": "khunti",
    "name": "Khunti",
    "marathiName": "खूंटी",
    "headquarters": "Khunti",
    "image": "/assets/districts/jharkhand/khunti.jpg",
    "cx": 332.5,
    "cy": 437.6,
    "link": "/district/khunti"
  },
  {
    "id": "saraikelakharsawan",
    "name": "Saraikela-Kharsawan",
    "marathiName": "सरायकेला खरसावां",
    "headquarters": "Saraikela",
    "image": "/assets/districts/jharkhand/saraikelakharsawan.jpg",
    "cx": 439.8,
    "cy": 450.8,
    "link": "/district/saraikelakharsawan"
  },
  {
    "id": "eastsinghbhum",
    "name": "East Singhbhum",
    "marathiName": "पूर्वी सिंहभूम",
    "headquarters": "Jamshedpur",
    "image": "/assets/districts/jharkhand/eastsinghbhum.jpg",
    "cx": 536.2,
    "cy": 494.4,
    "link": "/district/eastsinghbhum"
  },
  {
    "id": "westsinghbhum",
    "name": "West Singhbhum",
    "marathiName": "पश्चिमी सिंहभूम",
    "headquarters": "Chaibasa",
    "image": "/assets/districts/jharkhand/westsinghbhum.jpg",
    "cx": 379.3,
    "cy": 518.9,
    "link": "/district/westsinghbhum"
  },
  {
    "id": "simdega",
    "name": "Simdega",
    "marathiName": "सिमडेगा",
    "headquarters": "Simdega",
    "image": "/assets/districts/jharkhand/simdega.jpg",
    "cx": 245.9,
    "cy": 482.6,
    "link": "/district/simdega"
  },
  {
    "id": "koderma",
    "name": "Koderma",
    "marathiName": "कोडरमा",
    "headquarters": "Koderma",
    "image": "/assets/districts/jharkhand/koderma.jpg",
    "cx": 401.7,
    "cy": 192.6,
    "link": "/district/koderma"
  },
  {
    "id": "hazaribagh",
    "name": "Hazaribagh",
    "marathiName": "हज़ारीबाग़",
    "headquarters": "Hazaribagh",
    "image": "/assets/districts/jharkhand/hazaribagh.jpg",
    "cx": 365,
    "cy": 260.4,
    "link": "/district/hazaribagh"
  }
];

export const biharDistrictsData: DistrictInfo[] = [
  {
    "id": "westchamparan",
    "name": "West Champaran",
    "marathiName": "पश्चिम चम्पारण",
    "headquarters": "Bettiah",
    "image": "/assets/districts/bihar/westchamparan.jpg",
    "cx": 180.8,
    "cy": 161.8,
    "link": "/district/westchamparan"
  },
  {
    "id": "eastchamparan",
    "name": "East Champaran",
    "marathiName": "पूर्वी चम्पारण",
    "headquarters": "Motihari",
    "image": "/assets/districts/bihar/eastchamparan.jpg",
    "cx": 281,
    "cy": 226.6,
    "link": "/district/eastchamparan"
  },
  {
    "id": "sitamarhi",
    "name": "Sitamarhi",
    "marathiName": "सीतामढ़ी",
    "headquarters": "Sitamarhi",
    "image": "/assets/districts/bihar/sitamarhi.jpg",
    "cx": 359.1,
    "cy": 240,
    "link": "/district/sitamarhi"
  },
  {
    "id": "sheohar",
    "name": "Sheohar",
    "marathiName": "शिवहर",
    "headquarters": "Sheohar",
    "image": "/assets/districts/bihar/sheohar.jpg",
    "cx": 326.9,
    "cy": 241.5,
    "link": "/district/sheohar"
  },
  {
    "id": "gopalganj",
    "name": "Gopalganj",
    "marathiName": "गोपालगंज",
    "headquarters": "Gopalganj",
    "image": "/assets/districts/bihar/gopalganj.jpg",
    "cx": 197.9,
    "cy": 250.1,
    "link": "/district/gopalganj"
  },
  {
    "id": "samastipur",
    "name": "Samastipur",
    "marathiName": "समस्तीपुर",
    "headquarters": "Samastipur",
    "image": "/assets/districts/bihar/samastipur.jpg",
    "cx": 416,
    "cy": 343.5,
    "link": "/district/samastipur"
  },
  {
    "id": "katihar",
    "name": "Katihar",
    "marathiName": "कटिहार",
    "headquarters": "Katihar",
    "image": "/assets/districts/bihar/katihar.jpg",
    "cx": 672.6,
    "cy": 375.3,
    "link": "/district/katihar"
  },
  {
    "id": "khagaria",
    "name": "Khagaria",
    "marathiName": "खगड़िया",
    "headquarters": "Khagaria",
    "image": "/assets/districts/bihar/khagaria.jpg",
    "cx": 508.9,
    "cy": 378.8,
    "link": "/district/khagaria"
  },
  {
    "id": "bhojpur",
    "name": "Bhojpur",
    "marathiName": "भोजपुर",
    "headquarters": "Arrah",
    "image": "/assets/districts/bihar/bhojpur.jpg",
    "cx": 210.3,
    "cy": 381,
    "link": "/district/bhojpur"
  },
  {
    "id": "buxar",
    "name": "Buxar",
    "marathiName": "बक्सर",
    "headquarters": "Buxar",
    "image": "/assets/districts/bihar/buxar.jpg",
    "cx": 150.7,
    "cy": 387.5,
    "link": "/district/buxar"
  },
  {
    "id": "darbhanga",
    "name": "Darbhanga",
    "marathiName": "दरभंगा",
    "headquarters": "Darbhanga",
    "image": "/assets/districts/bihar/darbhanga.jpg",
    "cx": 432.1,
    "cy": 297.3,
    "link": "/district/darbhanga"
  },
  {
    "id": "saharsa",
    "name": "Saharsa",
    "marathiName": "सहरसा",
    "headquarters": "Saharsa",
    "image": "/assets/districts/bihar/saharsa.jpg",
    "cx": 507.5,
    "cy": 337.2,
    "link": "/district/saharsa"
  },
  {
    "id": "kaimur",
    "name": "Kaimur",
    "marathiName": "कैमूर (भभुआ)",
    "headquarters": "Bhabua",
    "image": "/assets/districts/bihar/kaimur.jpg",
    "cx": 82,
    "cy": 444.6,
    "link": "/district/kaimur"
  },
  {
    "id": "rohtas",
    "name": "Rohtas",
    "marathiName": "रोहतास",
    "headquarters": "Sasaram",
    "image": "/assets/districts/bihar/rohtas.jpg",
    "cx": 132.4,
    "cy": 457.9,
    "link": "/district/rohtas"
  },
  {
    "id": "jamui",
    "name": "Jamui",
    "marathiName": "जमुई",
    "headquarters": "Jamui",
    "image": "/assets/districts/bihar/jamui.jpg",
    "cx": 464.9,
    "cy": 486.6,
    "link": "/district/jamui"
  },
  {
    "id": "banka",
    "name": "Banka",
    "marathiName": "बाँका",
    "headquarters": "Banka",
    "image": "/assets/districts/bihar/banka.jpg",
    "cx": 542.4,
    "cy": 479.8,
    "link": "/district/banka"
  },
  {
    "id": "nawada",
    "name": "Nawada",
    "marathiName": "नवादा",
    "headquarters": "Nawada",
    "image": "/assets/districts/bihar/nawada.jpg",
    "cx": 374.1,
    "cy": 480.4,
    "link": "/district/nawada"
  },
  {
    "id": "gaya",
    "name": "Gaya",
    "marathiName": "गया",
    "headquarters": "Gaya",
    "image": "/assets/districts/bihar/gaya.jpg",
    "cx": 268.9,
    "cy": 500.5,
    "link": "/district/gaya"
  },
  {
    "id": "munger",
    "name": "Munger",
    "marathiName": "मुंगेर",
    "headquarters": "Munger",
    "image": "/assets/districts/bihar/munger.jpg",
    "cx": 503.9,
    "cy": 423.8,
    "link": "/district/munger"
  },
  {
    "id": "vaishali",
    "name": "Vaishali",
    "marathiName": "वैशाली",
    "headquarters": "Hajipur",
    "image": "/assets/districts/bihar/vaishali.jpg",
    "cx": 341.8,
    "cy": 342,
    "link": "/district/vaishali"
  },
  {
    "id": "begusarai",
    "name": "Begusarai",
    "marathiName": "बेगूसराय",
    "headquarters": "Begusarai",
    "image": "/assets/districts/bihar/begusarai.jpg",
    "cx": 449.1,
    "cy": 379.6,
    "link": "/district/begusarai"
  },
  {
    "id": "bhagalpur",
    "name": "Bhagalpur",
    "marathiName": "भागलपुर",
    "headquarters": "Bhagalpur",
    "image": "/assets/districts/bihar/bhagalpur.jpg",
    "cx": 582,
    "cy": 411.9,
    "link": "/district/bhagalpur"
  },
  {
    "id": "lakhisarai",
    "name": "Lakhisarai",
    "marathiName": "लखीसराय",
    "headquarters": "Lakhisarai",
    "image": "/assets/districts/bihar/lakhisarai.jpg",
    "cx": 438.8,
    "cy": 433.1,
    "link": "/district/lakhisarai"
  },
  {
    "id": "sheikhpura",
    "name": "Sheikhpura",
    "marathiName": "शेखपुरा",
    "headquarters": "Sheikhpura",
    "image": "/assets/districts/bihar/sheikhpura.jpg",
    "cx": 403.1,
    "cy": 438.5,
    "link": "/district/sheikhpura"
  },
  {
    "id": "arwal",
    "name": "Arwal",
    "marathiName": "अरवल",
    "headquarters": "Arwal",
    "image": "/assets/districts/bihar/arwal.jpg",
    "cx": 238.1,
    "cy": 429.3,
    "link": "/district/arwal"
  },
  {
    "id": "jehanabad",
    "name": "Jehanabad",
    "marathiName": "जहानाबाद",
    "headquarters": "Jehanabad",
    "image": "/assets/districts/bihar/jehanabad.jpg",
    "cx": 289.5,
    "cy": 431.3,
    "link": "/district/jehanabad"
  },
  {
    "id": "nalanda",
    "name": "Nalanda",
    "marathiName": "नालंदा",
    "headquarters": "Bihar Sharif",
    "image": "/assets/districts/bihar/nalanda.jpg",
    "cx": 354.7,
    "cy": 422.6,
    "link": "/district/nalanda"
  },
  {
    "id": "patna",
    "name": "Patna",
    "marathiName": "पटना",
    "headquarters": "Patna",
    "image": "/assets/districts/bihar/patna.jpg",
    "cx": 330,
    "cy": 396.3,
    "link": "/district/patna"
  },
  {
    "id": "saran",
    "name": "Saran",
    "marathiName": "सारण",
    "headquarters": "Chhapra",
    "image": "/assets/districts/bihar/saran.jpg",
    "cx": 255.2,
    "cy": 325.5,
    "link": "/district/saran"
  },
  {
    "id": "siwan",
    "name": "Siwan",
    "marathiName": "सिवान",
    "headquarters": "Siwan",
    "image": "/assets/districts/bihar/siwan.jpg",
    "cx": 189.7,
    "cy": 283.3,
    "link": "/district/siwan"
  },
  {
    "id": "muzaffarpur",
    "name": "Muzaffarpur",
    "marathiName": "मुज़फ़्फ़रपुर",
    "headquarters": "Muzaffarpur",
    "image": "/assets/districts/bihar/muzaffarpur.jpg",
    "cx": 334.7,
    "cy": 281.5,
    "link": "/district/muzaffarpur"
  },
  {
    "id": "madhepura",
    "name": "Madhepura",
    "marathiName": "मधेपुरा",
    "headquarters": "Madhepura",
    "image": "/assets/districts/bihar/madhepura.jpg",
    "cx": 557,
    "cy": 345.4,
    "link": "/district/madhepura"
  },
  {
    "id": "araria",
    "name": "Araria",
    "marathiName": "अररिया",
    "headquarters": "Araria",
    "image": "/assets/districts/bihar/araria.jpg",
    "cx": 620.2,
    "cy": 282.6,
    "link": "/district/araria"
  },
  {
    "id": "supaul",
    "name": "Supaul",
    "marathiName": "सुपौल",
    "headquarters": "Supaul",
    "image": "/assets/districts/bihar/supaul.jpg",
    "cx": 535.6,
    "cy": 278.5,
    "link": "/district/supaul"
  },
  {
    "id": "madhubani",
    "name": "Madhubani",
    "marathiName": "मधुबनी",
    "headquarters": "Madhubani",
    "image": "/assets/districts/bihar/madhubani.jpg",
    "cx": 454.3,
    "cy": 263.5,
    "link": "/district/madhubani"
  },
  {
    "id": "purnia",
    "name": "Purnia",
    "marathiName": "पूर्णिया",
    "headquarters": "Purnea",
    "image": "/assets/districts/bihar/purnia.jpg",
    "cx": 640.1,
    "cy": 335.6,
    "link": "/district/purnia"
  },
  {
    "id": "kishanganj",
    "name": "Kishanganj",
    "marathiName": "किशनगंज",
    "headquarters": "Kishanganj",
    "image": "/assets/districts/bihar/kishanganj.jpg",
    "cx": 709.3,
    "cy": 274.1,
    "link": "/district/kishanganj"
  },
  {
    "id": "aurangabad",
    "name": "Aurangabad",
    "marathiName": "औरंगाबाद",
    "headquarters": "Aurangabad",
    "image": "/assets/districts/bihar/aurangabad.jpg",
    "cx": 201.5,
    "cy": 490.2,
    "link": "/district/aurangabad"
  }
];

export const westBengalDistrictsData: DistrictInfo[] = [
  {
    "id": "south24parganas",
    "name": "South 24 Parganas",
    "marathiName": "দক্ষিণ ২৪ পরগনা",
    "headquarters": "Alipore",
    "image": "/assets/districts/westbengal/south24parganas.jpg",
    "cx": 471.2,
    "cy": 586.5,
    "link": "/district/south24parganas"
  },
  {
    "id": "paschimmedinipur",
    "name": "Paschim Medinipur",
    "marathiName": "পশ্চিম মেদিনীপুর",
    "headquarters": "Medinipur",
    "image": "/assets/districts/westbengal/paschimmedinipur.jpg",
    "cx": 356.4,
    "cy": 534.5,
    "link": "/district/paschimmedinipur"
  },
  {
    "id": "purbamedinipur",
    "name": "Purba Medinipur",
    "marathiName": "পূর্ব মেদিনীপুর",
    "headquarters": "Tamluk",
    "image": "/assets/districts/westbengal/purbamedinipur.jpg",
    "cx": 384.8,
    "cy": 563.4,
    "link": "/district/purbamedinipur"
  },
  {
    "id": "jhargram",
    "name": "Jhargram",
    "marathiName": "ঝাড়গ্রাম",
    "headquarters": "Jhargram",
    "image": "/assets/districts/westbengal/jhargram.jpg",
    "cx": 306.1,
    "cy": 532.5,
    "link": "/district/jhargram"
  },
  {
    "id": "darjeeling",
    "name": "Darjeeling",
    "marathiName": "দার্জিলিং",
    "headquarters": "Darjeeling",
    "image": "/assets/districts/westbengal/darjeeling.jpg",
    "cx": 445.5,
    "cy": 68,
    "link": "/district/darjeeling"
  },
  {
    "id": "jalpaiguri",
    "name": "Jalpaiguri",
    "marathiName": "জলপাইগুড়ি",
    "headquarters": "Jalpaiguri",
    "image": "/assets/districts/westbengal/jalpaiguri.jpg",
    "cx": 494.4,
    "cy": 89.8,
    "link": "/district/jalpaiguri"
  },
  {
    "id": "dakshindinajpur",
    "name": "Dakshin Dinajpur",
    "marathiName": "দক্ষিণ দিনাজপুর",
    "headquarters": "Balurghat",
    "image": "/assets/districts/westbengal/dakshindinajpur.jpg",
    "cx": 476,
    "cy": 219.1,
    "link": "/district/dakshindinajpur"
  },
  {
    "id": "malda",
    "name": "Malda",
    "marathiName": "মালদা",
    "headquarters": "English Bazar",
    "image": "/assets/districts/westbengal/malda.jpg",
    "cx": 433,
    "cy": 237.7,
    "link": "/district/malda"
  },
  {
    "id": "murshidabad",
    "name": "Murshidabad",
    "marathiName": "মুর্শিদাবাদ",
    "headquarters": "Baharampur",
    "image": "/assets/districts/westbengal/murshidabad.jpg",
    "cx": 431.5,
    "cy": 346,
    "link": "/district/murshidabad"
  },
  {
    "id": "birbhum",
    "name": "Birbhum",
    "marathiName": "বীরভূম",
    "headquarters": "Suri",
    "image": "/assets/districts/westbengal/birbhum.jpg",
    "cx": 382.8,
    "cy": 360.5,
    "link": "/district/birbhum"
  },
  {
    "id": "nadia",
    "name": "Nadia",
    "marathiName": "নদিয়া",
    "headquarters": "Krishnanagar",
    "image": "/assets/districts/westbengal/nadia.jpg",
    "cx": 471.6,
    "cy": 411.5,
    "link": "/district/nadia"
  },
  {
    "id": "purbabardhaman",
    "name": "Purba Bardhaman",
    "marathiName": "পূর্ব বর্ধমান",
    "headquarters": "Bardhaman",
    "image": "/assets/districts/westbengal/purbabardhaman.jpg",
    "cx": 413.8,
    "cy": 424.9,
    "link": "/district/purbabardhaman"
  },
  {
    "id": "purulia",
    "name": "Purulia",
    "marathiName": "পুরুলিয়া",
    "headquarters": "Purulia",
    "image": "/assets/districts/westbengal/purulia.jpg",
    "cx": 252.6,
    "cy": 438.3,
    "link": "/district/purulia"
  },
  {
    "id": "bankura",
    "name": "Bankura",
    "marathiName": "বাঁকুড়া",
    "headquarters": "Bankura",
    "image": "/assets/districts/westbengal/bankura.jpg",
    "cx": 327.4,
    "cy": 456.3,
    "link": "/district/bankura"
  },
  {
    "id": "north24parganas",
    "name": "North 24 Parganas",
    "marathiName": "উত্তর ২৪ পরগনা",
    "headquarters": "Barasat",
    "image": "/assets/districts/westbengal/north24parganas.jpg",
    "cx": 495.8,
    "cy": 493.2,
    "link": "/district/north24parganas"
  },
  {
    "id": "hooghly",
    "name": "Hooghly",
    "marathiName": "হুগলি",
    "headquarters": "Chinsurah",
    "image": "/assets/districts/westbengal/hooghly.jpg",
    "cx": 416.9,
    "cy": 477.5,
    "link": "/district/hooghly"
  },
  {
    "id": "howrah",
    "name": "Howrah",
    "marathiName": "হাওড়া",
    "headquarters": "Howrah",
    "image": "/assets/districts/westbengal/howrah.jpg",
    "cx": 425.8,
    "cy": 512.6,
    "link": "/district/howrah"
  },
  {
    "id": "kolkata",
    "name": "Kolkata",
    "marathiName": "কলকাতা",
    "headquarters": "Kolkata",
    "image": "/assets/districts/westbengal/kolkata.jpg",
    "cx": 451.8,
    "cy": 512.3,
    "link": "/district/kolkata",
    "hasCallout": true,
    "labelX": 520,
    "labelY": 535
  },
  {
    "id": "alipurduar",
    "name": "Alipurduar",
    "marathiName": "আলিপুরদুয়ার",
    "headquarters": "Alipurduar",
    "image": "/assets/districts/westbengal/alipurduar.jpg",
    "cx": 574.2,
    "cy": 92.1,
    "link": "/district/alipurduar"
  },
  {
    "id": "paschimbardhaman",
    "name": "Paschim Bardhaman",
    "marathiName": "পশ্চিম বর্ধমান",
    "headquarters": "Asansol",
    "image": "/assets/districts/westbengal/paschimbardhaman.jpg",
    "cx": 332.5,
    "cy": 396.8,
    "link": "/district/paschimbardhaman"
  },
  {
    "id": "kalimpong",
    "name": "Kalimpong",
    "marathiName": "কালিম্পং",
    "headquarters": "Kalimpong",
    "image": "/assets/districts/westbengal/kalimpong.jpg",
    "cx": 478.3,
    "cy": 46.5,
    "link": "/district/kalimpong"
  },
  {
    "id": "coochbehar",
    "name": "Cooch Behar",
    "marathiName": "কোচবিহার",
    "headquarters": "Cooch Behar",
    "image": "/assets/districts/westbengal/coochbehar.jpg",
    "cx": 545.9,
    "cy": 122.7,
    "link": "/district/coochbehar"
  },
  {
    "id": "uttardinajpur",
    "name": "Uttar Dinajpur",
    "marathiName": "উত্তর দিনাজপুর",
    "headquarters": "Raiganj",
    "image": "/assets/districts/westbengal/uttardinajpur.jpg",
    "cx": 435.2,
    "cy": 163.6,
    "link": "/district/uttardinajpur"
  }
];

export const sikkimDistrictsData: DistrictInfo[] = [
  {
    "id": "mangan",
    "name": "Mangan",
    "marathiName": "मङ्गन",
    "headquarters": "Mangan",
    "image": "/assets/districts/sikkim/mangan.jpg",
    "cx": 462.3,
    "cy": 295.4,
    "link": "/district/mangan"
  },
  {
    "id": "gyalshing",
    "name": "Gyalshing",
    "marathiName": "ग्यालसिङ",
    "headquarters": "Gyalshing (Geyzing)",
    "image": "/assets/districts/sikkim/gyalshing.jpg",
    "cx": 193.4,
    "cy": 432,
    "link": "/district/gyalshing"
  },
  {
    "id": "soreng",
    "name": "Soreng",
    "marathiName": "सोरेङ",
    "headquarters": "Soreng",
    "image": "/assets/districts/sikkim/soreng.jpg",
    "cx": 211.8,
    "cy": 570.5,
    "link": "/district/soreng"
  },
  {
    "id": "namchi",
    "name": "Namchi",
    "marathiName": "नाम्ची",
    "headquarters": "Namchi",
    "image": "/assets/districts/sikkim/namchi.jpg",
    "cx": 378,
    "cy": 522.8,
    "link": "/district/namchi"
  },
  {
    "id": "gangtok",
    "name": "Gangtok",
    "marathiName": "गान्तोक",
    "headquarters": "Gangtok",
    "image": "/assets/districts/sikkim/gangtok.jpg",
    "cx": 512.5,
    "cy": 449.2,
    "link": "/district/gangtok"
  },
  {
    "id": "pakyong",
    "name": "Pakyong",
    "marathiName": "पाक्योङ",
    "headquarters": "Pakyong",
    "image": "/assets/districts/sikkim/pakyong.jpg",
    "cx": 516.8,
    "cy": 553.9,
    "link": "/district/pakyong"
  }
];

export const meghalayaDistrictsData: DistrictInfo[] = [
  {
    "id": "ribhoi",
    "name": "Ri Bhoi",
    "marathiName": "রি ভোই / Ri Bhoi",
    "headquarters": "Nongpoh",
    "image": "/assets/districts/meghalaya/ribhoi.jpg",
    "cx": 532.1,
    "cy": 247.6,
    "link": "/district/ribhoi"
  },
  {
    "id": "westkhasihills",
    "name": "West Khasi Hills",
    "marathiName": "পশ্চিম খাসি পাহাড় / West Khasi Hills",
    "headquarters": "Nongstoin",
    "image": "/assets/districts/meghalaya/westkhasihills.jpg",
    "cx": 368.6,
    "cy": 318.6,
    "link": "/district/westkhasihills"
  },
  {
    "id": "eastjaintiahills",
    "name": "East Jaintia Hills",
    "marathiName": "পূর্ব জয়ন্তীয়া পাহাড় / East Jaintia Hills",
    "headquarters": "Khliehriat",
    "image": "/assets/districts/meghalaya/eastjaintiahills.jpg",
    "cx": 694.6,
    "cy": 397,
    "link": "/district/eastjaintiahills"
  },
  {
    "id": "eastkhasihills",
    "name": "East Khasi Hills",
    "marathiName": "পূর্ব খাসি পাহাড় / East Khasi Hills",
    "headquarters": "Shillong",
    "image": "/assets/districts/meghalaya/eastkhasihills.jpg",
    "cx": 509.5,
    "cy": 376.4,
    "link": "/district/eastkhasihills"
  },
  {
    "id": "southgarohills",
    "name": "South Garo Hills",
    "marathiName": "দক্ষিণ গারো পাহাড় / South Garo Hills",
    "headquarters": "Baghmara",
    "image": "/assets/districts/meghalaya/southgarohills.jpg",
    "cx": 248.3,
    "cy": 386.3,
    "link": "/district/southgarohills"
  },
  {
    "id": "westgarohills",
    "name": "West Garo Hills",
    "marathiName": "পশ্চিম গারো পাহাড় / West Garo Hills",
    "headquarters": "Tura",
    "image": "/assets/districts/meghalaya/westgarohills.jpg",
    "cx": 123.7,
    "cy": 297.6,
    "link": "/district/westgarohills"
  },
  {
    "id": "eastgarohills",
    "name": "East Garo Hills",
    "marathiName": "পূর্ব গারো পাহাড় / East Garo Hills",
    "headquarters": "Williamnagar",
    "image": "/assets/districts/meghalaya/eastgarohills.jpg",
    "cx": 231.2,
    "cy": 309.9,
    "link": "/district/eastgarohills"
  },
  {
    "id": "westjaintiahills",
    "name": "West Jaintia Hills",
    "marathiName": "পশ্চিম জয়ন্তীয়া পাহাড় / West Jaintia Hills",
    "headquarters": "Jowai",
    "image": "/assets/districts/meghalaya/westjaintiahills.jpg",
    "cx": 642.9,
    "cy": 347.2,
    "link": "/district/westjaintiahills"
  },
  {
    "id": "southwestkhasihills",
    "name": "South West Khasi Hills",
    "marathiName": "দক্ষিণ পশ্চিম খাসি পাহাড় / South West Khasi Hills",
    "headquarters": "Mawkyrwat",
    "image": "/assets/districts/meghalaya/southwestkhasihills.jpg",
    "cx": 366.7,
    "cy": 384.5,
    "link": "/district/southwestkhasihills"
  },
  {
    "id": "northgarohills",
    "name": "North Garo Hills",
    "marathiName": "উত্তর গারো পাহাড় / North Garo Hills",
    "headquarters": "Resubelpara",
    "image": "/assets/districts/meghalaya/northgarohills.jpg",
    "cx": 257.2,
    "cy": 254.2,
    "link": "/district/northgarohills"
  },
  {
    "id": "southwestgarohills",
    "name": "South West Garo Hills",
    "marathiName": "দক্ষিণ পশ্চিম গারো পাহাড় / South West Garo Hills",
    "headquarters": "Ampati",
    "image": "/assets/districts/meghalaya/southwestgarohills.jpg",
    "cx": 85.2,
    "cy": 349.3,
    "link": "/district/southwestgarohills"
  }
];

export const assamDistrictsData: DistrictInfo[] = [
  {
    "id": "tinsukia",
    "name": "Tinsukia",
    "marathiName": "তিনিচুকীয়া",
    "headquarters": "Tinsukia",
    "image": "/assets/districts/assam/tinsukia.jpg",
    "cx": 720.1,
    "cy": 153.2,
    "link": "/district/tinsukia"
  },
  {
    "id": "dhemaji",
    "name": "Dhemaji",
    "marathiName": "ধেমা Carte / ধেমাজি",
    "headquarters": "Dhemaji",
    "image": "/assets/districts/assam/dhemaji.jpg",
    "cx": 607.2,
    "cy": 153.1,
    "link": "/district/dhemaji"
  },
  {
    "id": "dibrugarh",
    "name": "Dibrugarh",
    "marathiName": "ডিব্ৰুগড়",
    "headquarters": "Dibrugarh",
    "image": "/assets/districts/assam/dibrugarh.jpg",
    "cx": 655.8,
    "cy": 183.4,
    "link": "/district/dibrugarh"
  },
  {
    "id": "lakhimpur",
    "name": "Lakhimpur",
    "marathiName": "লখিমপুৰ",
    "headquarters": "North Lakhimpur",
    "image": "/assets/districts/assam/lakhimpur.jpg",
    "cx": 547.1,
    "cy": 200.5,
    "link": "/district/lakhimpur"
  },
  {
    "id": "sivasagar",
    "name": "Sivasagar",
    "marathiName": "শিৱসাগৰ",
    "headquarters": "Sivasagar",
    "image": "/assets/districts/assam/sivasagar.jpg",
    "cx": 608.5,
    "cy": 221.9,
    "link": "/district/sivasagar"
  },
  {
    "id": "jorhat",
    "name": "Jorhat",
    "marathiName": "যোৰহাট",
    "headquarters": "Jorhat",
    "image": "/assets/districts/assam/jorhat.jpg",
    "cx": 563.6,
    "cy": 253.8,
    "link": "/district/jorhat"
  },
  {
    "id": "sonitpur",
    "name": "Sonitpur",
    "marathiName": "শোণিতপুৰ",
    "headquarters": "Tezpur",
    "image": "/assets/districts/assam/sonitpur.jpg",
    "cx": 371.3,
    "cy": 249.5,
    "link": "/district/sonitpur"
  },
  {
    "id": "golaghat",
    "name": "Golaghat",
    "marathiName": "গোলাঘাট",
    "headquarters": "Golaghat",
    "image": "/assets/districts/assam/golaghat.jpg",
    "cx": 509.3,
    "cy": 279.3,
    "link": "/district/golaghat"
  },
  {
    "id": "udalguri",
    "name": "Udalguri",
    "marathiName": "ওদালগুৰি",
    "headquarters": "Udalguri",
    "image": "/assets/districts/assam/udalguri.jpg",
    "cx": 312.9,
    "cy": 257.5,
    "link": "/district/udalguri"
  },
  {
    "id": "chirang",
    "name": "Chirang",
    "marathiName": "চিৰাং",
    "headquarters": "Kajalgaon",
    "image": "/assets/districts/assam/chirang.jpg",
    "cx": 144.1,
    "cy": 266.9,
    "link": "/district/chirang"
  },
  {
    "id": "baksa",
    "name": "Baksa",
    "marathiName": "বাক্সা",
    "headquarters": "Mushalpur",
    "image": "/assets/districts/assam/baksa.jpg",
    "cx": 225.5,
    "cy": 266.3,
    "link": "/district/baksa"
  },
  {
    "id": "nagaon",
    "name": "Nagaon",
    "marathiName": "নগাঁও",
    "headquarters": "Nagaon",
    "image": "/assets/districts/assam/nagaon.jpg",
    "cx": 402.2,
    "cy": 289.4,
    "link": "/district/nagaon"
  },
  {
    "id": "kokrajhar",
    "name": "Kokrajhar",
    "marathiName": "কোকৰাঝাৰ",
    "headquarters": "Kokrajhar",
    "image": "/assets/districts/assam/kokrajhar.jpg",
    "cx": 90.5,
    "cy": 285.2,
    "link": "/district/kokrajhar"
  },
  {
    "id": "darrang",
    "name": "Darrang",
    "marathiName": "দৰং",
    "headquarters": "Mangaldoi",
    "image": "/assets/districts/assam/darrang.jpg",
    "cx": 305.1,
    "cy": 275.2,
    "link": "/district/darrang"
  },
  {
    "id": "barpeta",
    "name": "Barpeta",
    "marathiName": "বৰপেটা",
    "headquarters": "Barpeta",
    "image": "/assets/districts/assam/barpeta.jpg",
    "cx": 192.1,
    "cy": 283.4,
    "link": "/district/barpeta"
  },
  {
    "id": "nalbari",
    "name": "Nalbari",
    "marathiName": "নলবাৰী",
    "headquarters": "Nalbari",
    "image": "/assets/districts/assam/nalbari.jpg",
    "cx": 228.4,
    "cy": 287,
    "link": "/district/nalbari"
  },
  {
    "id": "morigaon",
    "name": "Morigaon",
    "marathiName": "মৰিগাঁও",
    "headquarters": "Morigaon",
    "image": "/assets/districts/assam/morigaon.jpg",
    "cx": 331.9,
    "cy": 300.2,
    "link": "/district/morigaon"
  },
  {
    "id": "kamrup",
    "name": "Kamrup",
    "marathiName": "কামৰূপ",
    "headquarters": "Amingaon",
    "image": "/assets/districts/assam/kamrup.jpg",
    "cx": 242.7,
    "cy": 314.6,
    "link": "/district/kamrup"
  },
  {
    "id": "bongaigaon",
    "name": "Bongaigaon",
    "marathiName": "বঙাইগাঁও",
    "headquarters": "Bongaigaon",
    "image": "/assets/districts/assam/bongaigaon.jpg",
    "cx": 141.2,
    "cy": 289.3,
    "link": "/district/bongaigaon"
  },
  {
    "id": "dhubri",
    "name": "Dhubri",
    "marathiName": "ধুবুৰী",
    "headquarters": "Dhubri",
    "image": "/assets/districts/assam/dhubri.jpg",
    "cx": 80,
    "cy": 307,
    "link": "/district/dhubri"
  },
  {
    "id": "kamrupmetropolitan",
    "name": "Kamrup Metropolitan",
    "marathiName": "কামৰূপ মহানগৰ",
    "headquarters": "Guwahati / Dispur",
    "image": "/assets/districts/assam/kamrupmetropolitan.jpg",
    "cx": 285.7,
    "cy": 315.8,
    "link": "/district/kamrupmetropolitan"
  },
  {
    "id": "goalpara",
    "name": "Goalpara",
    "marathiName": "গোৱালপাৰা",
    "headquarters": "Goalpara",
    "image": "/assets/districts/assam/goalpara.jpg",
    "cx": 139.7,
    "cy": 327.3,
    "link": "/district/goalpara"
  },
  {
    "id": "dimahasao",
    "name": "Dima Hasao",
    "marathiName": "ডিমা হাছাও",
    "headquarters": "Haflong",
    "image": "/assets/districts/assam/dimahasao.jpg",
    "cx": 414.4,
    "cy": 396,
    "link": "/district/dimahasao"
  },
  {
    "id": "cachar",
    "name": "Cachar",
    "marathiName": "কাছাৰ",
    "headquarters": "Silchar",
    "image": "/assets/districts/assam/cachar.jpg",
    "cx": 408.1,
    "cy": 474.6,
    "link": "/district/cachar"
  },
  {
    "id": "karimganj",
    "name": "Karimganj",
    "marathiName": "কৰিমগঞ্জ",
    "headquarters": "Karimganj",
    "image": "/assets/districts/assam/karimganj.jpg",
    "cx": 346.1,
    "cy": 485.7,
    "link": "/district/karimganj"
  },
  {
    "id": "hailakandi",
    "name": "Hailakandi",
    "marathiName": "হাইলাকান্দি",
    "headquarters": "Hailakandi",
    "image": "/assets/districts/assam/hailakandi.jpg",
    "cx": 367.4,
    "cy": 505,
    "link": "/district/hailakandi"
  },
  {
    "id": "charaideo",
    "name": "Charaideo",
    "marathiName": "চৰাইদেউ",
    "headquarters": "Sonari",
    "image": "/assets/districts/assam/charaideo.jpg",
    "cx": 654.7,
    "cy": 207.7,
    "link": "/district/charaideo"
  },
  {
    "id": "majuli",
    "name": "Majuli",
    "marathiName": "মাজুলী",
    "headquarters": "Garamur",
    "image": "/assets/districts/assam/majuli.jpg",
    "cx": 559.6,
    "cy": 217.1,
    "link": "/district/majuli"
  },
  {
    "id": "biswanath",
    "name": "Biswanath",
    "marathiName": "বিশ্বনাথ",
    "headquarters": "Biswanath Chariali",
    "image": "/assets/districts/assam/biswanath.jpg",
    "cx": 464.8,
    "cy": 237.4,
    "link": "/district/biswanath"
  },
  {
    "id": "hojai",
    "name": "Hojai",
    "marathiName": "হোজাই",
    "headquarters": "Hojai",
    "image": "/assets/districts/assam/hojai.jpg",
    "cx": 405.4,
    "cy": 333.3,
    "link": "/district/hojai"
  },
  {
    "id": "southsalmaramankachar",
    "name": "South Salmara Mankachar",
    "marathiName": "দক্ষিণ শালমৰা-মানকাচৰ",
    "headquarters": "Hatsingimari",
    "image": "/assets/districts/assam/southsalmaramankachar.jpg",
    "cx": 71.2,
    "cy": 354.3,
    "link": "/district/southsalmaramankachar"
  },
  {
    "id": "karbianglong",
    "name": "Karbi Anglong",
    "marathiName": "কাৰ্বি আংলং",
    "headquarters": "Diphu",
    "image": "/assets/districts/assam/karbianglong.jpg",
    "cx": 459.7,
    "cy": 306.8,
    "link": "/district/karbianglong"
  },
  {
    "id": "westkarbianglong",
    "name": "West Karbi Anglong",
    "marathiName": "পশ্চিম কাৰ্বি আংলং",
    "headquarters": "Hamren",
    "image": "/assets/districts/assam/westkarbianglong.jpg",
    "cx": 371.8,
    "cy": 346.5,
    "link": "/district/westkarbianglong"
  }
];

export const tripuraDistrictsData: DistrictInfo[] = [
  {
    "id": "northtripura",
    "name": "North Tripura",
    "marathiName": "উত্তর ত্রিপুরা / North Tripura",
    "headquarters": "Dharmanagar",
    "image": "/assets/districts/tripura/northtripura.jpg",
    "cx": 570.7,
    "cy": 196.2,
    "link": "/district/northtripura"
  },
  {
    "id": "dhalai",
    "name": "Dhalai",
    "marathiName": "ধলাই / Dhalai",
    "headquarters": "Ambassa",
    "image": "/assets/districts/tripura/dhalai.jpg",
    "cx": 469.6,
    "cy": 295.8,
    "link": "/district/dhalai"
  },
  {
    "id": "sepahijala",
    "name": "Sepahijala",
    "marathiName": "সিপাহীজলা / Sepahijala",
    "headquarters": "Bishramganj",
    "image": "/assets/districts/tripura/sepahijala.jpg",
    "cx": 252.9,
    "cy": 391.5,
    "link": "/district/sepahijala"
  },
  {
    "id": "gomati",
    "name": "Gomati",
    "marathiName": "গোমতী / Gomati",
    "headquarters": "Udaipur",
    "image": "/assets/districts/tripura/gomati.jpg",
    "cx": 355.9,
    "cy": 400.4,
    "link": "/district/gomati"
  },
  {
    "id": "khowai",
    "name": "Khowai",
    "marathiName": "খোয়াই / Khowai",
    "headquarters": "Khowai",
    "image": "/assets/districts/tripura/khowai.jpg",
    "cx": 361.6,
    "cy": 242.7,
    "link": "/district/khowai"
  },
  {
    "id": "westtripura",
    "name": "West Tripura",
    "marathiName": "পশ্চিম ত্রিপুরা / West Tripura",
    "headquarters": "Agartala",
    "image": "/assets/districts/tripura/westtripura.jpg",
    "cx": 268.2,
    "cy": 261.9,
    "link": "/district/westtripura"
  },
  {
    "id": "southtripura",
    "name": "South Tripura",
    "marathiName": "দক্ষিণ ত্রিপুরা / South Tripura",
    "headquarters": "Belonia",
    "image": "/assets/districts/tripura/southtripura.jpg",
    "cx": 317.3,
    "cy": 528.1,
    "link": "/district/southtripura"
  },
  {
    "id": "unakoti",
    "name": "Unakoti",
    "marathiName": "ঊনকোটি / Unakoti",
    "headquarters": "Kailashahar",
    "image": "/assets/districts/tripura/unakoti.jpg",
    "cx": 519.8,
    "cy": 163.7,
    "link": "/district/unakoti"
  }
];

export const mizoramDistrictsData: DistrictInfo[] = [
  {
    "id": "aizawl",
    "name": "Aizawl",
    "marathiName": "Aizawl / ऐज़ॉल",
    "headquarters": "Aizawl",
    "image": "/assets/districts/mizoram/aizawl.jpg",
    "cx": 400.4,
    "cy": 170.5,
    "link": "/district/aizawl"
  },
  {
    "id": "champhai",
    "name": "Champhai",
    "marathiName": "Champhai / चम्फाई",
    "headquarters": "Champhai",
    "image": "/assets/districts/mizoram/champhai.jpg",
    "cx": 489.4,
    "cy": 254.4,
    "link": "/district/champhai"
  },
  {
    "id": "kolasib",
    "name": "Kolasib",
    "marathiName": "Kôlasib / कोलासिब",
    "headquarters": "Kolasib",
    "image": "/assets/districts/mizoram/kolasib.jpg",
    "cx": 373.1,
    "cy": 103.1,
    "link": "/district/kolasib"
  },
  {
    "id": "lawngtlai",
    "name": "Lawngtlai",
    "marathiName": "Lâwngtlai / ल्वांगत्लाई",
    "headquarters": "Lawngtlai",
    "image": "/assets/districts/mizoram/lawngtlai.jpg",
    "cx": 358.2,
    "cy": 524.9,
    "link": "/district/lawngtlai"
  },
  {
    "id": "lunglei",
    "name": "Lunglei",
    "marathiName": "Lunglei / लुंगलेई",
    "headquarters": "Lunglei",
    "image": "/assets/districts/mizoram/lunglei.jpg",
    "cx": 350.3,
    "cy": 376.7,
    "link": "/district/lunglei"
  },
  {
    "id": "mamit",
    "name": "Mamit",
    "marathiName": "Mamit / मामित",
    "headquarters": "Mamit",
    "image": "/assets/districts/mizoram/mamit.jpg",
    "cx": 304,
    "cy": 209.3,
    "link": "/district/mamit"
  },
  {
    "id": "saiha",
    "name": "Siaha (Saiha)",
    "marathiName": "Siaha / सिहा",
    "headquarters": "Siaha",
    "image": "/assets/districts/mizoram/saiha.jpg",
    "cx": 440.4,
    "cy": 525.8,
    "link": "/district/saiha"
  },
  {
    "id": "serchhip",
    "name": "Serchhip",
    "marathiName": "Serchhip / सेरछिप",
    "headquarters": "Serchhip",
    "image": "/assets/districts/mizoram/serchhip.jpg",
    "cx": 414.2,
    "cy": 318.1,
    "link": "/district/serchhip"
  }
];

export const manipurDistrictsData: DistrictInfo[] = [
  {
    "id": "bishnupur",
    "name": "Bishnupur",
    "marathiName": "বিষ্ণুপুর (Bishnupur)",
    "headquarters": "Bishnupur",
    "image": "/assets/districts/manipur/bishnupur.jpg",
    "cx": 388,
    "cy": 408.7,
    "link": "/district/bishnupur"
  },
  {
    "id": "chandel",
    "name": "Chandel",
    "marathiName": "চান্দেল (Chandel)",
    "headquarters": "Chandel",
    "image": "/assets/districts/manipur/chandel.jpg",
    "cx": 473.8,
    "cy": 486.1,
    "link": "/district/chandel"
  },
  {
    "id": "churachandpur",
    "name": "Churachandpur",
    "marathiName": "চূড়াচাঁদপুর (Churachandpur)",
    "headquarters": "Churachandpur",
    "image": "/assets/districts/manipur/churachandpur.jpg",
    "cx": 248.7,
    "cy": 473.6,
    "link": "/district/churachandpur"
  },
  {
    "id": "imphaleast",
    "name": "Imphal East",
    "marathiName": "ইম্ফল পূর্ব (Imphal East)",
    "headquarters": "Porompat",
    "image": "/assets/districts/manipur/imphaleast.jpg",
    "cx": 338.7,
    "cy": 308.8,
    "link": "/district/imphaleast"
  },
  {
    "id": "senapati",
    "name": "Senapati",
    "marathiName": "সেনাপতি (Senapati)",
    "headquarters": "Senapati",
    "image": "/assets/districts/manipur/senapati.jpg",
    "cx": 454.5,
    "cy": 225,
    "link": "/district/senapati"
  },
  {
    "id": "tamenglong",
    "name": "Tamenglong",
    "marathiName": "তামেংলং (Tamenglong)",
    "headquarters": "Tamenglong",
    "image": "/assets/districts/manipur/tamenglong.jpg",
    "cx": 283,
    "cy": 257.3,
    "link": "/district/tamenglong"
  },
  {
    "id": "thoubal",
    "name": "Thoubal",
    "marathiName": "থৌবাল (Thoubal)",
    "headquarters": "Thoubal",
    "image": "/assets/districts/manipur/thoubal.jpg",
    "cx": 437.3,
    "cy": 396.5,
    "link": "/district/thoubal"
  },
  {
    "id": "ukhrul",
    "name": "Ukhrul",
    "marathiName": "উখরুল (Ukhrul)",
    "headquarters": "Ukhrul",
    "image": "/assets/districts/manipur/ukhrul.jpg",
    "cx": 584.2,
    "cy": 233.1,
    "link": "/district/ukhrul"
  },
  {
    "id": "imphalwest",
    "name": "Imphal West",
    "marathiName": "ইম্ফল পশ্চিম (Imphal West)",
    "headquarters": "Lamphelpat",
    "image": "/assets/districts/manipur/imphalwest.jpg",
    "cx": 408.4,
    "cy": 317.4,
    "link": "/district/imphalwest"
  }
];

export const nagalandDistrictsData: DistrictInfo[] = [
  {
    "id": "dimapur",
    "name": "Dimapur",
    "marathiName": "Dimapur / दिमापुर",
    "headquarters": "Dimapur",
    "image": "/assets/districts/nagaland/dimapur.jpg",
    "cx": 227.7,
    "cy": 423.8,
    "link": "/district/dimapur"
  },
  {
    "id": "kohima",
    "name": "Kohima",
    "marathiName": "Kohima / कोहिमा",
    "headquarters": "Kohima",
    "image": "/assets/districts/nagaland/kohima.jpg",
    "cx": 239,
    "cy": 491.5,
    "link": "/district/kohima"
  },
  {
    "id": "mokokchung",
    "name": "Mokokchung",
    "marathiName": "Mokokchung / मोकोकचुंग",
    "headquarters": "Mokokchung",
    "image": "/assets/districts/nagaland/mokokchung.jpg",
    "cx": 475,
    "cy": 210.8,
    "link": "/district/mokokchung"
  },
  {
    "id": "mon",
    "name": "Mon",
    "marathiName": "Mon / मोन",
    "headquarters": "Mon",
    "image": "/assets/districts/nagaland/mon.jpg",
    "cx": 637.9,
    "cy": 142.5,
    "link": "/district/mon"
  },
  {
    "id": "phek",
    "name": "Phek",
    "marathiName": "Phek / फेक",
    "headquarters": "Phek",
    "image": "/assets/districts/nagaland/phek.jpg",
    "cx": 489.7,
    "cy": 482,
    "link": "/district/phek"
  },
  {
    "id": "tuensang",
    "name": "Tuensang",
    "marathiName": "Tuensang / तुएनसांग",
    "headquarters": "Tuensang",
    "image": "/assets/districts/nagaland/tuensang.jpg",
    "cx": 582.6,
    "cy": 296.6,
    "link": "/district/tuensang"
  },
  {
    "id": "wokha",
    "name": "Wokha",
    "marathiName": "Wokha / वोखा",
    "headquarters": "Wokha",
    "image": "/assets/districts/nagaland/wokha.jpg",
    "cx": 371.4,
    "cy": 299.3,
    "link": "/district/wokha"
  },
  {
    "id": "zunheboto",
    "name": "Zunheboto",
    "marathiName": "Zünheboto / जुन्हेबोटो",
    "headquarters": "Zunheboto",
    "image": "/assets/districts/nagaland/zunheboto.jpg",
    "cx": 467.9,
    "cy": 355.2,
    "link": "/district/zunheboto"
  }
];





export const arunachalPradeshDistrictsData: DistrictInfo[] = [
  {
    "id": "changlang",
    "name": "Changlang",
    "marathiName": "Changlang / चांगलांग",
    "headquarters": "Changlang",
    "image": "/assets/districts/arunachalpradesh/changlang.jpg",
    "cx": 642.2,
    "cy": 414.3,
    "link": "/district/changlang"
  },
  {
    "id": "eastkameng",
    "name": "East Kameng",
    "marathiName": "East Kameng / पूर्व कामेंग",
    "headquarters": "Seppa",
    "image": "/assets/districts/arunachalpradesh/eastkameng.jpg",
    "cx": 217.1,
    "cy": 412.9,
    "link": "/district/eastkameng"
  },
  {
    "id": "eastsiang",
    "name": "East Siang",
    "marathiName": "East Siang / पूर्व सियांग",
    "headquarters": "Pasighat",
    "image": "/assets/districts/arunachalpradesh/eastsiang.jpg",
    "cx": 474.8,
    "cy": 313,
    "link": "/district/eastsiang"
  },
  {
    "id": "kurungkumey",
    "name": "Kurung Kumey",
    "marathiName": "Kurung Kumey / कुरुंग कुमे",
    "headquarters": "Koloriang",
    "image": "/assets/districts/arunachalpradesh/kurungkumey.jpg",
    "cx": 242.3,
    "cy": 326.4,
    "link": "/district/kurungkumey"
  },
  {
    "id": "lohit",
    "name": "Lohit",
    "marathiName": "Lohit / लोहित",
    "headquarters": "Tezu",
    "image": "/assets/districts/arunachalpradesh/lohit.jpg",
    "cx": 670.4,
    "cy": 339.4,
    "link": "/district/lohit"
  },
  {
    "id": "lowerdibangvalley",
    "name": "Lower Dibang Valley",
    "marathiName": "Lower Dibang Valley / निचली दिबांग घाटी",
    "headquarters": "Roing",
    "image": "/assets/districts/arunachalpradesh/lowerdibangvalley.jpg",
    "cx": 564.3,
    "cy": 290.9,
    "link": "/district/lowerdibangvalley"
  },
  {
    "id": "lowersubansiri",
    "name": "Lower Subansiri",
    "marathiName": "Lower Subansiri / निचला सुबनसिरी",
    "headquarters": "Ziro",
    "image": "/assets/districts/arunachalpradesh/lowersubansiri.jpg",
    "cx": 333.9,
    "cy": 369.9,
    "link": "/district/lowersubansiri"
  },
  {
    "id": "papumpare",
    "name": "Papum Pare",
    "marathiName": "Papum Pare / पपुम पारे",
    "headquarters": "Yupia",
    "image": "/assets/districts/arunachalpradesh/papumpare.jpg",
    "cx": 280.6,
    "cy": 425.4,
    "link": "/district/papumpare"
  },
  {
    "id": "tawang",
    "name": "Tawang",
    "marathiName": "Tawang / तवांग",
    "headquarters": "Tawang",
    "image": "/assets/districts/arunachalpradesh/tawang.jpg",
    "cx": 60.9,
    "cy": 373.4,
    "link": "/district/tawang"
  },
  {
    "id": "tirap",
    "name": "Tirap",
    "marathiName": "Tirap / तिरप",
    "headquarters": "Khonsa",
    "image": "/assets/districts/arunachalpradesh/tirap.jpg",
    "cx": 519.5,
    "cy": 467.5,
    "link": "/district/tirap"
  },
  {
    "id": "upperdibangvalley",
    "name": "Upper Dibang Valley",
    "marathiName": "Upper Dibang Valley / ऊपरी दिबांग घाटी",
    "headquarters": "Anini",
    "image": "/assets/districts/arunachalpradesh/upperdibangvalley.jpg",
    "cx": 592.7,
    "cy": 202.3,
    "link": "/district/upperdibangvalley"
  },
  {
    "id": "uppersiang",
    "name": "Upper Siang",
    "marathiName": "Upper Siang / ऊपरी सियांग",
    "headquarters": "Yingkiong",
    "image": "/assets/districts/arunachalpradesh/uppersiang.jpg",
    "cx": 466.7,
    "cy": 226.5,
    "link": "/district/uppersiang"
  },
  {
    "id": "uppersubansiri",
    "name": "Upper Subansiri",
    "marathiName": "Upper Subansiri / ऊपरी सुबनसिरी",
    "headquarters": "Daporijo",
    "image": "/assets/districts/arunachalpradesh/uppersubansiri.jpg",
    "cx": 325.9,
    "cy": 297.2,
    "link": "/district/uppersubansiri"
  },
  {
    "id": "westkameng",
    "name": "West Kameng",
    "marathiName": "West Kameng / पश्चिम कामेंग",
    "headquarters": "Bomdila",
    "image": "/assets/districts/arunachalpradesh/westkameng.jpg",
    "cx": 166.3,
    "cy": 401,
    "link": "/district/westkameng"
  },
  {
    "id": "westsiang",
    "name": "West Siang",
    "marathiName": "West Siang / पश्चिम सियांग",
    "headquarters": "Aalo (Along)",
    "image": "/assets/districts/arunachalpradesh/westsiang.jpg",
    "cx": 407.1,
    "cy": 319,
    "link": "/district/westsiang"
  }
];
