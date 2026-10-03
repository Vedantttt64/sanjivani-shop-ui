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


