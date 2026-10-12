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
