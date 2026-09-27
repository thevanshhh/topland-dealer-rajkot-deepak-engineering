/**
 * TOPLAND DEALER Rajkot (Deepak Engineering Store) — Master Data Model
 * Rajkot, Gujarat, India
 */

export const COMPANY = {
  name: "TOPLAND DEALER Rajkot (Deepak Engineering Store)",
  tagline: "Electric generator shop & Engineering Works",
  established: 2008,
  yearsInOperation: "18+",
  proprietor: "Management Team & Works Director",
  gst: "24AAACG1092F1ZK",
  phoneDisplay: "+91 281 222 3758",
  phoneRaw: "+912812223758",
  waNumber: "912812223758",
  email: "contact@toplanddealerrajko.in",
  address: "Dhebar Rd, opp. Central bus station, Rajputpara, Rajkot, Gujarat 360001, India",
  addressShort: "Rajkot, Gujarat",
  coordinates: "22.3039\u00b0 N, 70.8022\u00b0 E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "20+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "topland-dealer-rajkot-deepak-engineering-carbide-cutters",
    "code": "TL-01",
    "name": "Solid Carbide End Mills & CNC Milling Cutters",
    "category": "Cutting Tools",
    "spec": "Micro-grain tungsten carbide cutters with TiAlN/AlCrN nano-coatings for high-speed precision machining of hardened alloys.",
    "specsList": [
      {
        "label": "Diameter Range",
        "val": "1 mm to 25 mm (2 / 4 / 6 Flutes)"
      },
      {
        "label": "Hardness Capability",
        "val": "Up to HRC 65 Hardened Steels"
      },
      {
        "label": "Shank Tolerance",
        "val": "DIN 6535 HA / HB Precision h6"
      },
      {
        "label": "Coating",
        "val": "Multi-Layer TiAlN Heat Resistant"
      }
    ],
    "price": "\u20b91,450",
    "priceUnit": "/ piece"
  },
  {
    "id": "topland-dealer-rajkot-deepak-engineering-tool-holders",
    "code": "TL-02",
    "name": "Precision CNC Spindle Tool Holders & Collet Chucks",
    "category": "Tooling Systems",
    "spec": "BT40, BT50, and HSK high-rigidity balanced tool holders engineered for vibration-free high-RPM milling performance.",
    "specsList": [
      {
        "label": "Taper Standard",
        "val": "BT40 / BT50 / HSK-A63"
      },
      {
        "label": "Dynamic Balance",
        "val": "G2.5 at 25,000 RPM"
      },
      {
        "label": "Runout Accuracy",
        "val": "< 0.003 mm at Collet Mouth"
      },
      {
        "label": "Collet Series",
        "val": "ER16, ER25, ER32, ER40 & Hydro"
      }
    ],
    "price": "\u20b93,900",
    "priceUnit": "/ unit"
  },
  {
    "id": "topland-dealer-rajkot-deepak-engineering-spares-bearings",
    "code": "TL-03",
    "name": "Heavy Duty Spindle Bearings & Machine Spare Parts",
    "category": "Industrial Spares",
    "spec": "High-precision angular contact, cylindrical roller, and thrust bearings engineered for demanding machine spindle loads.",
    "specsList": [
      {
        "label": "Precision Class",
        "val": "ISO P5 / P4 High Precision"
      },
      {
        "label": "Dynamic Load",
        "val": "Up to 150 kN Heavy Duty"
      },
      {
        "label": "Max Speed",
        "val": "Up to 18,000 RPM Grease/Oil"
      },
      {
        "label": "Sealing",
        "val": "Non-contact High Speed Labyrinth"
      }
    ],
    "price": "\u20b92,800",
    "priceUnit": "/ set"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}
