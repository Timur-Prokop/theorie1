const mongoose = require('mongoose');
const Question = require('./models_Question');

const questions = [
  {
    id: 1,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/A1_rs59nu.png",
    "answers": [
    { "text": "Maximumsnelheid", "isCorrect": true },
    { "text": "Adviessnelheid", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 2,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/A2_nami9x.png",
    "answers": [
    { "text": "Einde van maximumsnelheid", "isCorrect": true },
    { "text": "Einde van adviessnelheid", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 3,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/A3_jr7v9e.png",
    "answers": [
    { "text": "70 km/u is de verplichte maximumsnelheid", "isCorrect": true },
    { "text": "70 km/u is een adviessnelheid", "isCorrect": false },
    { "text": "Je mag maximaal 70 km/u rijden, maar alleen als het regent", "isCorrect": false }
    ],
    topic: "borden"
  },


  {
    id: 4,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/A4_lv3j3a.png",
    "answers": [
    { "text": "Adviessnelheid van 50 km/u", "isCorrect": true },
    { "text": "Verplichte maximumsnelheid van 50 km/u", "isCorrect": false },
    { "text": "Minimumsnelheid van 50 km/u", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 5,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/B2_ryx4xt.png",
    "answers": [
    { "text": "Einde van de voorrangsweg", "isCorrect": true },
    { "text": "Je moet voorrang geven aan rechts", "isCorrect": false },
    { "text": "Begin van een voorrangsweg", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 6,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/B3_jbaxl3.png",
    "answers": [
    { "text": "Op het volgende kruispunt heb je voorrang", "isCorrect": true },
    { "text": "Je moet voorrang geven aan rechts en links", "isCorrect": false },
    { "text": "Einde van de voorrangsweg", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 7,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/B6_cxtjab.png",
    "answers": [
    { "text": "Je moet voorrang verlenen aan bestuurders op de kruisende weg", "isCorrect": true },
    { "text": "Jij hebt voorrang op het kruispunt", "isCorrect": false },
    { "text": "Alleen fietsers hebben voorrang", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 8,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/B7_vvep6e.png",
    "answers": [
    { "text": "Je moet stoppen en voorrang verlenen aan bestuurders op de kruisende weg", "isCorrect": true },
    { "text": "Je mag alleen stoppen als er verkeer aankomt", "isCorrect": false },
    { "text": "Je hebt altijd voorrang na een korte stop", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 9,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/BB3_zppzrq.png",
    "answers": [
    { "text": "Om de juiste volgafstand te kunnen inschatten", "isCorrect": true },
    { "text": "Om de maximumsnelheid aan te geven", "isCorrect": false },
    { "text": "Als waarschuwing voor scherpe bochten", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 10,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/BF5_frvl3o.png",
    "answers": [
    { "text": "Je moet voorrang geven aan tegenliggers", "isCorrect": true },
    { "text": "Er is tweerichtingsverkeer toegestaan", "isCorrect": false },
    { "text": "Je hebt voorrang op tegenliggers", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 11,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/BF5_frvl3o.png",
    "answers": [
    { "text": "Je moet voorrang geven aan tegenliggers", "isCorrect": true },
    { "text": "Er is tweerichtingsverkeer toegestaan", "isCorrect": false },
    { "text": "Je hebt voorrang op tegenliggers", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 12,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/BF6_stwvjx.png",
    "answers": [
    { "text": "Tegenliggers moeten voorrang geven aan jou", "isCorrect": true },
    { "text": "Tegenliggers hebben voorrang op jou", "isCorrect": false },
    { "text": "Er is tweerichtingsverkeer toegestaan", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 13,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C22b_irzyc1.png",
    "answers": [
    { "text": "U verlaat de milieuzone", "isCorrect": true },
    { "text": "U rijdt een milieuzone binnen", "isCorrect": false },
    { "text": "Hier begint een snelheidsbeperking vanwege luchtkwaliteit", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 14,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C22c_smbmp4.png",
    "answers": [
    { "text": "Verboden voor vrachtwagens en bestelwagens zwaarder dan 3,5 ton", "isCorrect": true },
    { "text": "Parkeerverbod voor voertuigen met een aanhanger", "isCorrect": false },
    { "text": "Alleen toegestaan voor elektrische bestelwagens", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 15,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C22d_k1fjae.png",
    "answers": [
    { "text": "Einde van het verbod voor vrachtwagens en bestelwagens zwaarder dan 3,5 ton", "isCorrect": true },
    { "text": "Verboden voor vrachtwagens en bestelwagens zwaarder dan 3,5 ton", "isCorrect": false },
    { "text": "Verbod voor de autos met een aanhanger", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 16,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C23-01_fztpv6.png",
    "answers": [
    { "text": "Rijbaan met drie rijstroken in dezelfde richting", "isCorrect": true },
    { "text": "Verkeersopstopping op drie rijstroken", "isCorrect": false },
    { "text": "Verplichte rijrichting naar links op de rechterrijstrook", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 16,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C23-03_jlz4g2.png",
    "answers": [
    { "text": "De rechterrijstrook is afgesloten; verkeer moet gebruikmaken van de andere twee rijstroken", "isCorrect": true },
    { "text": "Verkeer mag alleen gebruikmaken van de derde rijstrook", "isCorrect": false },
    { "text": "Alle rijstroken mogen vrij gebruikt worden", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 17,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C1_gwazdb.png",
    "answers": [
    { "text": "Verboden voor alle voertuigen in beide richtingen", "isCorrect": true },
    { "text": "Alleen toegestaan voor openbaar vervoer", "isCorrect": false },
    { "text": "Verboden toegang voor vrachtwagens en motorfietsen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 18,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C2_bt992y.png",
    "answers": [
    { "text": "Eenrichtingsweg / Verboden in te rijden", "isCorrect": true },
    { "text": "Verboden te parkeren aan deze zijde van de weg", "isCorrect": false },
    { "text": "Eenrichtingsweg / Toegestaan om in te rijden", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 19,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C3_qryrhf.png",
    "answers": [
    { "text": "Eenrichtingsweg / Toegestaan om in te rijden", "isCorrect": true },
    { "text": "Toegestaan om aan deze zijde van de weg te stoppen", "isCorrect": false },
    { "text": "Eenrichtingsweg / Verboden in te rijden", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 20,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C6_wyneqm.png",
    "answers": [
    { "text": "Verboden voor auto's en andere motorvoertuigen met meer dan twee wielen", "isCorrect": true },
    { "text": "", "isCorrect": false },
    { "text": "Verboden toegang aleen voor lichte auto's", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 21,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C7_msb3vb.png",
    "answers": [
    { "text": "Verboden voor vrachtauto’s", "isCorrect": true },
    { "text": "Verboden voor auto's en andere motorvoertuigen met meer dan twee wielen", "isCorrect": false },
    { "text": "Verboden voor alle voertuigen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 22,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C8_wksymm.png",
    "answers": [
    { "text": "Verboden voor landbouw- en bosbouwtrekkers", "isCorrect": true },
    { "text": "Alleen toegestaan voor landbouwverkeer", "isCorrect": false },
    { "text": "Verboden voor alle motorvoertuigen die lichter dan 3,5 ton zijn", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 23,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C9_ro7blv.png",
    "answers": [
    { "text": "Verboden voor landbouwvoertuigen, bromfietsen en fietsen", "isCorrect": true },
    { "text": "Verboden voor landbouwvoertuigen, snorfietsen en fietsen", "isCorrect": false },
    { "text": "Verboden voor alle motorvoertuigen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 24,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C10_ejylfw.png",
    "answers": [
    { "text": "Verboden voor motorvoertuigen met aanhangwagen", "isCorrect": true },
    { "text": "Alleen toegestaan voor voertuigen met aanhanger", "isCorrect": false },
    { "text": "Verboden voor vrachtwagens zonder aanhanger", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 25,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C11_hthsqe.png",
    "answers": [
    { "text": "Verboden voor motorfietsen", "isCorrect": true },
    { "text": "Alleen toegestaan voor bromfietsen", "isCorrect": false },
    { "text": "Verboden voor auto’s en vrachtwagens", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 26,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C12_Zone_ekc70r.png",
    "answers": [
    { "text": "Verboden voor vervuilende motorvoertuigen die niet aan de milieunormen voldoen", "isCorrect": true },
    { "text": "Verboden voor alle gemotoriseerde voertuigen", "isCorrect": false },
    { "text": "Alleen toegang voor elektrische motorfietse", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 27,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C15_u8xv9p.png",
    "answers": [
    { "text": "Verboden voor fietsen en bromfietsen", "isCorrect": true },
    { "text": "Alleen toegestaan voor elektrische fietsen", "isCorrect": false },
    { "text": "Verboden voor motorvoertuigen op twee wielen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 28,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C16_rtyyfz.png",
    "answers": [
    { "text": "Verboden voor voetgangers", "isCorrect": true },
    { "text": "Verplichte looproute voor voetgangers", "isCorrect": false },
    { "text": "Alleen toegestaan voor fietsers en voetgangers", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 29,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C17_qp9udc.png",
    "answers": [
    { "text": "Verboden voor voertuigen langer dan 10 meter", "isCorrect": true },
    { "text": "Minimale volgafstand van 10 meter vereist", "isCorrect": false },
    { "text": "Verboden voor voertuigen korter dan 10 meter", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 30,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C21_u5s40o.png",
    "answers": [
    { "text": "Verboden voor voertuigen met een toegestane maximum massa van meer dan 5,4 ton", "isCorrect": true },

    { "text": "Verboden voor voertuigen die op dit moment minder dan 5,4 ton wegen", "isCorrect": false },

    { "text": "Alleen toegestaan voor voertuigen met aanhanger", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 31,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C18_jv7dmb.png",
    "answers": [
    { "text": "Verboden voor voertuigen die, inclusief lading, breder zijn dan 2,3 meter", "isCorrect": true },
    { "text": "Voertuigen moeten minimaal 2,3 meter breed zijn", "isCorrect": false },
    { "text": "Verboden voor voertuigen die breder zijn dan 2,3 meter (zonder lading)", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 32,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C19_zfqlht.png",
    "answers": [
    { "text": "Verboden voor voertuigen hoger dan 3,1 meter, inclusief lading", "isCorrect": true },
    { "text": "Verboden voor voertuigen hoger dan 3,1 meter (zonder lading)", "isCorrect": false },
    { "text": "Verboden voor voertuigen die, inclusief lading, breder zijn dan 3,1 meter", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 33,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C22_ttqywq.png",
    "answers": [
    { "text": "Verboden voor vrachtauto’s met gevaarlijke stoffen", "isCorrect": true },
    { "text": "Verboden voor vrachtauto’s met aanhanger", "isCorrect": false },
    { "text": "Verboden voor landbouwvoertuigen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 34,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C22a_yaeyxy.png",
    "answers": [
    { "text": "Verboden toegang voor vervuilende voertuigen", "isCorrect": true },
    { "text": "Parkeerzone voor milieuvriendelijke auto's", "isCorrect": false },
    { "text": "Verplichte route voor elektrisch verkeer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 35,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/DF13_rg6dt2.png",
    "answers": [
    { "text": "Verplichte route voor bussen", "isCorrect": true },
    { "text": "Verboden voor bussen", "isCorrect": false },
    { "text": "Parkeerplaats voor touringcars", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 36,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/DF14_lpd83a.png",
    "answers": [
    { "text": "Einde van verplichte busroute", "isCorrect": true },
    { "text": "Begin van een busbaan", "isCorrect": false },
    { "text": "Verboden voor bussen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 37,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/DG7_ygdzkv.png",
    "answers": [
    { "text": "Verplichte route voor voetgangers", "isCorrect": true },
    { "text": "Oversteekplaats voor voetgangers", "isCorrect": false },
    { "text": "Verboden voor voetgangers", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 38,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/DG10_lnrc3h.png",
    "answers": [
    { "text": "Einde van verplicht ruiterpad", "isCorrect": true },
    { "text": "Begin van een fietspad", "isCorrect": false },
    { "text": "Verboden voor ruiters", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 39,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/DG11_g6rptr.png",
    "answers": [
    { "text": "Verplicht fietspad", "isCorrect": true },
    { "text": "Verboden voor gemotoriseerde voertuigen", "isCorrect": false },
    { "text": "Fietsen toegestaan, maar niet verplicht", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 40,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/DG12_ptul4a.png",
    "answers": [
    { "text": "Einde van verplicht fietspad", "isCorrect": true },
    { "text": "Begin van een fietsstraat", "isCorrect": false },
    { "text": "Verboden voor fietsen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 41,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/DG12a_waxmfy.png",
    "answers": [
    { "text": "Pad verplicht voor fietsers en bromfietsers", "isCorrect": true },
    { "text": "Fietsers en bromfietsers mogen hier oversteken", "isCorrect": false },
    { "text": "Pad uitsluitend voor fietsers", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 42,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/D1_zb_fsa4q7.png",
    "answers": [
    { "text": "Verplichte rijrichting in een rotonde", "isCorrect": true },
    { "text": "Verkeersplein met voorrang voor rechts", "isCorrect": false },
    { "text": "U rijdt eenrichtingsverkeer binnen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 43,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/D2_zb_hul2ub.png",
    "answers": [
    { "text": "Verplicht om pijl te volgen", "isCorrect": true },
    { "text": "Verplicht links afslaan", "isCorrect": false },
    { "text": "Verbod om links af te slaan", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 44,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/D7_p0zztn.png",
    "answers": [
    { "text": "Verplichte rijrichting: links of rechts", "isCorrect": true },
    { "text": "Je mag alleen links afslaan", "isCorrect": false },
    { "text": "Je hebt keuze om links of rechts te parkeren", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 45,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/DF11_etwaim.png",
    "answers": [
    { "text": "Verplicht voor landbouwvoertuigen", "isCorrect": true },
    { "text": "Verboden voor alle motorvoertuigen", "isCorrect": false },
    { "text": "Verplicht voor vrachtwagens en bussen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 46,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/DF12_mhuapz.png",
    "answers": [
    { "text": "Einde van verplichte route voor landbouwvoertuigen", "isCorrect": true },
    { "text": "Verbod voor landbouwvoertuigen", "isCorrect": false },
    { "text": "Begin van een landbouwgebied", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 47,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/E5_rc1gky.png",
    "answers": [
    { "text": "Parkeerplaats alleen voor taxi's", "isCorrect": true },
    { "text": "Parkeerverbod voor taxi’s", "isCorrect": false },
    { "text": "Parkeerplaats voor auto's met parkeerschijf", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 48,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/E6_zljvpg.png",
    "answers": [
    { "text": "Parkeerplaats voor voertuigen met een gehandicaptenkaart", "isCorrect": true },
    { "text": "Parkeerverbod voor rolstoelen", "isCorrect": false },
    { "text": "Parkeerplaats voor ziekenwagens", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 49,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/E7_b1xqun.png",
    "answers": [
    { "text": "Parkeerplaats voor laden en lossen", "isCorrect": true },
    { "text": "Parkeerplaats voor bestelwagens", "isCorrect": false },
    { "text": "Parkeerplaats voor leveringen na 18:00 uur", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 50,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/E12_nazyqg.png",
    "answers": [
    { "text": "Parkeerplaats met mogelijkheid tot overstappen op het openbaar vervoer", "isCorrect": true },
    { "text": "Parkeerplaats voor taxi's en bussen", "isCorrect": false },
    { "text": "Parkeerplaats alleen tijdens spitsuren", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 51,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/E1_mb_sm67me.png",
    "answers": [
    { "text": "Verbod om te parkeren", "isCorrect": true },
    { "text": "Verbod om stil te staan", "isCorrect": false },
    { "text": "Parkeren toegestaan met parkeerschijf", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 52,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/E1_Zone_pl42dn.png",
    "answers": [
    { "text": "Begin van een zone waar parkeren verboden is", "isCorrect": true },
    { "text": "Verboden om te stoppen in deze straat", "isCorrect": false },
    { "text": "Parkeerzone alleen voor vergunninghouders", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 53,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/E2_mb_d2d70x.png",
    "answers": [
    { "text": "Verboden om stil te staan", "isCorrect": true },
    { "text": "Parkeren toegestaan met gevarenlichten", "isCorrect": false },
    { "text": "Verboden om te parkeren tussen 8:00 en 18:00", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 54,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/E3_gkc2hl.png",
    "answers": [
    { "text": "Verbod voor fietsen en bromfietsen", "isCorrect": true },
    { "text": "Alleen toegestaan voor elektrische fietsen", "isCorrect": false },
    { "text": "Fietsers moeten hier afstappen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 55,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/E4_muskf8.png",
    "answers": [
    { "text": "Toegestane parkeerplaats voor alle voertuigen", "isCorrect": true },
    { "text": "Parkeren alleen toegestaan voor bewoners", "isCorrect": false },
    { "text": "Parkeerplaats alleen met parkeerschijf", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 56,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/F3_fwxxny.png",
    "answers": [
    { "text": "Toegestane parkeerplaats voor alle voertuigen", "isCorrect": true },
    { "text": "Parkeerplaats alleen voor taxi's", "isCorrect": false },
    { "text": "Verboden om te parkeren zonder vergunning", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 57,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/F4_giuaey.png",
    "answers": [
    { "text": "Einde van inhaalverbod voor vrachtwagens", "isCorrect": true },
    { "text": "Begin van inhaalverbod voor vrachtwagens", "isCorrect": false },
    { "text": "Einde van alle snelheidsbeperkingen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 58,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/F7_u9vik2.png",
    "answers": [
    { "text": "Verboden om te keren (U-bocht te maken)", "isCorrect": true },
    { "text": "Verplicht om te keren", "isCorrect": false },
    { "text": "Alleen keren toegestaan voor bestemmingsverkeer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 59,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/F8_ddw0dy.png",
    "answers": [
    { "text": "Einde van alle verboden en beperkingen", "isCorrect": true },
    { "text": "Begin van een snelheidszone", "isCorrect": false },
    { "text": "Einde van een autosnelweg", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 60,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/F9_n5mpor.png",
    "answers": [
    { "text": "Einde van de adviessnelheid op een autosnelweg", "isCorrect": true },
    { "text": "Verbod op inhalen", "isCorrect": false },
    { "text": "Einde van de snelheidslimiet van 50 km/u", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 61,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/F10_dnmzb7.png",
    "answers": [
    { "text": "Verboden in te rijden (eenrichtingsverkeer – tegen de richting in)", "isCorrect": true },
    { "text": "Inrijden toegestaan alleen voor openbaar vervoer", "isCorrect": false },
    { "text": "Verplicht om te stoppen voor alle verkeer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 62,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/F1_fajkfj.png",
    "answers": [
    { "text": "Verbod voor motorvoertuigen om elkaar in te halen", "isCorrect": true },
    { "text": "Verplichte rijrichting voor vrachtverkeer", "isCorrect": false },
    { "text": "Alleen personenauto’s mogen hier inhalen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 63,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/F2_yne3vz.png",
    "answers": [
    { "text": "Einde van het inhaalverbod voor motorvoertuigen", "isCorrect": true },
    { "text": "Verbod voor vrachtwagens om in te halen", "isCorrect": false },
    { "text": "Einde van een snelheidsbeperking van 70 km/u", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 64,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/G14_fyzgup.png",
    "answers": [
    { "text": "Einde van het verplicht fietspad", "isCorrect": true },
    { "text": "Fietsers verplicht afstappen", "isCorrect": false },
    { "text": "Begin van een voetpad voor fietsers", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 65,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/H1_k0qvot.png",
    "answers": [
    { "text": "Begin van de bebouwde kom van Helmond", "isCorrect": true },
    { "text": "Gemeentegrens van Helmond", "isCorrect": false },
    { "text": "Verkeersbord met toeristische route door Helmond", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 66,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/H2_inwlle.png",
    "answers": [
    { "text": "Einde van de bebouwde kom van Helmond", "isCorrect": true },
    { "text": "Begin van de gemeente Helmond", "isCorrect": false },
    { "text": "Einde van een toeristisch gebied", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 67,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/G1_zb_chvhra.png",
    "answers": [
    { "text": "Begin van een autosnelweg", "isCorrect": true },
    { "text": "Einde van een autosnelweg", "isCorrect": false },
    { "text": "Verplichte minimumsnelheid van 100 km/u", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 68,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/G2_zb_kqqyet.png",
    "answers": [
    { "text": "Einde van een autosnelweg", "isCorrect": true },
    { "text": "Begin van een autoweg", "isCorrect": false },
    { "text": "Verbod voor motorvoertuigen om door te rijden", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 69,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/G3_nvekna.png",
    "answers": [
    { "text": "Begin van een autoweg", "isCorrect": true },
    { "text": "Parkeerplaats voor personenauto’s", "isCorrect": false },
    { "text": "Verplichte rijrichting voor auto’s", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 70,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/G4_kdfglh.png",
    "answers": [
    { "text": "Einde van een autoweg", "isCorrect": true },
    { "text": "Verbod voor motorvoertuigen", "isCorrect": false },
    { "text": "Begin van een parkeerverbodszone", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 71,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/G5_mikgxl.png",
    "answers": [
    { "text": "Begin van een woonerf", "isCorrect": true },
    { "text": "Verplicht om stapvoets te rijden", "isCorrect": false },
    { "text": "Verboden voor doorgaand verkeer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 72,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "",
    "answers": [
    { "text": "Begin van een woonerf", "isCorrect": true },
    { "text": "Verplicht om stapvoets te rijden", "isCorrect": false },
    { "text": "Verboden voor doorgaand verkeer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 73,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/G6_mb_yh6sff.png",
    "answers": [
    { "text": "Einde van een woonerf", "isCorrect": true },
    { "text": "Verbod voor voetgangers en spelende kinderen", "isCorrect": false },
    { "text": "Begin van een zone met snelheidsbeperking", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 74,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/G13_jiybuv.png",
    "answers": [
    { "text": "Einde van het verplicht fietspad", "isCorrect": true },
    { "text": "Fietsers verboden in deze zone", "isCorrect": false },
    { "text": "Fietspad alleen toegestaan buiten de spits", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 75,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J2_focvn6.png",
    "answers": [
    { "text": "Gevaarlijke bocht naar rechts", "isCorrect": true },
    { "text": "Verplicht afslaan naar rechts", "isCorrect": false },
    { "text": "Einde van eenrichtingsverkeer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 76,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J4_knpfch.png",
    "answers": [
    { "text": "S-bocht, eerst naar rechts", "isCorrect": true },
    { "text": "Verplicht rechtsaf, daarna linksaf", "isCorrect": false },
    { "text": "Gevaarlijke rotonde nadert", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 77,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J6_msrw5d.png",
    "answers": [
    { "text": "Waarschuwing voor een stijging van 10%", "isCorrect": true },
    { "text": "Waarschuwing voor een afdaling van 10%", "isCorrect": false },
    { "text": "Verplichte versnelling bij helling", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 78,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J7_gaeali.png",
    "answers": [
    { "text": "Waarschuwing voor een afdaling van 10%", "isCorrect": true },
    { "text": "Waarschuwing voor een stijging van 10%", "isCorrect": false },
    { "text": "Verbod om te remmen op de helling", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 79,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J8_kb72py.png",
    "answers": [
    { "text": "Kruispunt van gelijkwaardige wegen", "isCorrect": true },
    { "text": "Voorrangskruispunt", "isCorrect": false },
    { "text": "Verkeerslichtregeling op kruising", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 80,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J9_k4c3uk.png",
    "answers": [
    { "text": "Waarschuwing voor een rotonde", "isCorrect": true },
    { "text": "Verplichte rijrichting naar rechts", "isCorrect": false },
    { "text": "Verkeersplein verboden voor vrachtauto’s", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 81,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J10_dgsnno.png",
    "answers": [
    { "text": "Waarschuwing voor een overweg met slagbomen", "isCorrect": true },
    { "text": "Waarschuwing voor een tolpoort", "isCorrect": false },
    { "text": "Oversteekplaats voor landbouwverkeer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 82,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J11_komzhr.png",
    "answers": [
    { "text": "Waarschuwing voor een overweg zonder slagbomen", "isCorrect": true },
    { "text": "Spoorwegovergang met stoplicht", "isCorrect": false },
    { "text": "Toegang alleen voor spoorwegverkeer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 83,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J12_jnnafa.png",
    "answers": [
    { "text": "Overweg met meerdere spoorlijnen", "isCorrect": true },
    { "text": "Overweg met één spoorlijn", "isCorrect": false },
    { "text": "Spoorwegovergang met slagbomen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 84,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J13_pffpw0.png",
    "answers": [
    { "text": "Overweg met drie of meer spoorlijnen", "isCorrect": true },
    { "text": "Spoorwegovergang zonder waarschuwingslichten", "isCorrect": false },
    { "text": "Waarschuwing voor metrospoor of trambaan", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 85,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J15_vywlif.png",
    "answers": [
    { "text": "Waarschuwing voor een beweegbare brug", "isCorrect": true },
    { "text": "Waarschuwing voor een tunnel", "isCorrect": false },
    { "text": "Brug alleen toegankelijk voor openbaar vervoer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 86,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J16_pz0dxd.png",
    "answers": [
    { "text": "Waarschuwing voor wegwerkzaamheden", "isCorrect": true },
    { "text": "Verbod om te stoppen wegens bouwzone", "isCorrect": false },
    { "text": "Verkeersregelaar in dienst", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 87,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J17_eqimrv.png",
    "answers": [
    { "text": "Waarschuwing voor versmalling van de rijbaan aan beide zijden", "isCorrect": true },
    { "text": "Waarschuwing voor wegverbreding", "isCorrect": false },
    { "text": "Rijstrook alleen voor landbouwvoertuigen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 88,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J18_esqzbe.png",
    "answers": [
    { "text": "Waarschuwing voor versmalling van de rijbaan aan de rechterzijde", "isCorrect": true },
    { "text": "Begin van eenrichtingsverkeer aan de rechterkant", "isCorrect": false },
    { "text": "Rechts voorsorteren verplicht", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 89,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J20_owge6z.png",
    "answers": [
    { "text": "Waarschuwing voor slipgevaar", "isCorrect": true },
    { "text": "Bochtige weg met verhoogde snelheid", "isCorrect": false },
    { "text": "Verplichte snelheid onder de 30 km/u", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 90,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J21_lhxlkr.png",
    "answers": [
    { "text": "Waarschuwing voor overstekende kinderen", "isCorrect": true },
    { "text": "Speelzone voor kinderen", "isCorrect": false },
    { "text": "Voetgangersoversteekplaats", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 91,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J21__school_xlakza.png",
    "answers": [
    { "text": "Waarschuwing voor schoolgaande kinderen", "isCorrect": true },
    { "text": "Verplichte stop bij schoolgebied", "isCorrect": false },
    { "text": "Speelstraat alleen voor voetgangers", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 92,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J22_fdu9zb.png",
    "answers": [
    { "text": "Waarschuwing voor een oversteekplaats voor voetgangers", "isCorrect": true },
    { "text": "Voetgangers verboden", "isCorrect": false },
    { "text": "Verplichte stop voor voetgangers", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 93,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J24_qdzymf.png",
    "answers": [
    { "text": "Waarschuwing voor overstekende of kruisende fietsers", "isCorrect": true },
    { "text": "Verplichte route voor fietsers", "isCorrect": false },
    { "text": "Verbod voor motorvoertuigen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 94,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J25_rvodcf.png",
    "answers": [
    { "text": "Waarschuwing voor losliggend grind of steenslag", "isCorrect": true },
    { "text": "Verplicht om lichten te dimmen", "isCorrect": false },
    { "text": "Gevaar voor wegsleepregeling", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 95,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J26_btectg.png",
    "answers": [
    { "text": "Waarschuwing voor een kade of oever zonder vangrail", "isCorrect": true },
    { "text": "Brug in slechte staat", "isCorrect": false },
    { "text": "Gevaar voor overstroming bij regen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 96,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J27_q6nlhy.png",
    "answers": [
    { "text": "Waarschuwing voor overstekend wild (herten)", "isCorrect": true },
    { "text": "Verboden toegang voor dieren", "isCorrect": false },
    { "text": "Bosgebied met jachttoestemming", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 97,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J29_m6npie.png",
    "answers": [
    { "text": "Waarschuwing voor een weg met tweerichtingsverkeer", "isCorrect": true },
    { "text": "Begin van eenrichtingsweg", "isCorrect": false },
    { "text": "Voorrang voor tegemoetkomend verkeer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 98,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J31_rborup.png",
    "answers": [
    { "text": "Waarschuwing voor zijwind of sterke windstoten", "isCorrect": true },
    { "text": "Verplichte rijrichting bij storm", "isCorrect": false },
    { "text": "Waarschuwing voor naderende stormvloed", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 99,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J33_s8y4t7.png",
    "answers": [
    { "text": "Waarschuwing voor filevorming", "isCorrect": true },
    { "text": "Verplichte minimumafstand tussen voertuigen", "isCorrect": false },
    { "text": "Waarschuwing voor parkeerterrein met rijen auto's", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 100,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J30_zt6b66.png",
    "answers": [
    { "text": "Waarschuwing voor laagvliegende vliegtuigen", "isCorrect": true },
    { "text": "Route naar het dichtstbijzijnde vliegveld", "isCorrect": false },
    { "text": "Verboden voor luchtverkeer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 101,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J32_yrolte.png",
    "answers": [
    { "text": "Waarschuwing: Verkeerslichten ahead", "isCorrect": true },
    { "text": "Verkeerslichten zijn buiten werking", "isCorrect": false },
    { "text": "Alleen toegang voor bussen bij groen licht", "isCorrect": false }
    ],
    topic: "borden"
  },


  {
    id: 102,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J34_is5frg.png",
    "answers": [
    { "text": "Waarschuwing: Slechte of zachte berm", "isCorrect": true },
    { "text": "Auto’s kunnen hier slippen", "isCorrect": false },
    { "text": "Rijbaan versmalt plotseling aan de rechterkant", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 103,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J1_catrdv.png",
    "answers": [
    { "text": "Waarschuwing: Slecht wegdek of hobbelige weg", "isCorrect": true },
    { "text": "Waarschuwing voor een rotonde", "isCorrect": false },
    { "text": "Waarschuwing voor verkeerslichten", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 104,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J37_qzhlpa.png",
    "answers": [
    { "text": "Algemeen gevaar, uitleg staat op het onderbord", "isCorrect": true },
    { "text": "Altijd stoppen", "isCorrect": false },
    { "text": "Voorrang aan besturders van rechts geven", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 105,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J38_ztnced.png",
    "answers": [
    { "text": "Verhoogd wegdek (verkeersdrempel)", "isCorrect": true },
    { "text": "Snelheidslimiet op heuvelachtig terrein", "isCorrect": false },
    { "text": "Gevaarlijke helling", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 106,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J35_qumgah.png",
    "answers": [
    { "text": "Kans op glad wegdek bij nat weer", "isCorrect": true },
    { "text": "Gevaar voor slecht zicht", "isCorrect": false },
    { "text": "Kans op regenachtig weer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 107,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J36_ngs5wq.png",
    "answers": [
    { "text": "Gevaar voor sneeuw of ijzel", "isCorrect": true },
    { "text": "Winterbanden verplicht", "isCorrect": false },
    { "text": "Sneeuwkettingen vereist", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 108,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/K10_gc9x8m.png",
    "answers": [
    { "text": "Bewegwijzering binnen de bebouwde kom", "isCorrect": true },
    { "text": "Route voor fitsers buiten de beboude kom", "isCorrect": false },
    { "text": "Richtingaanwijzer op een autosnelweg", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 109,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/K14_n4dzma.png",
    "answers": [
    { "text": "Omleidingsroute in noordelijke richting", "isCorrect": true },
    { "text": "Volg deze rijstrook voor doorgaand verkeer", "isCorrect": false },
    { "text": "Verbod om links of rechts af te slaan", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 110,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "",
    "answers": [
    { "text": "Afstanden naar steden via een autosnelweg", "isCorrect": true },
    { "text": "Richting naar tankstations en parkeerplaatsen", "isCorrect": false },
    { "text": "Alternatieve route voor vrachtverkeer", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 111,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/L16_kk9sba.png",
    "answers": [
    { "text": "Noodtelefoon in de buurt", "isCorrect": true },
    { "text": "Informatiebord over mobiele dekking", "isCorrect": false },
    { "text": "Verboden te bellen tijdens het rijden", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 112,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/L2_gsglls.png",
    "answers": [
    { "text": "Oversteekplaats voor voetgangers", "isCorrect": true },
    { "text": "Verboden voor voetgangers", "isCorrect": false },
    { "text": "Waarschuwing voor kinderen", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 113,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/L8_mb_yefc7a.png",
    "answers": [
    { "text": "Doodlopende weg", "isCorrect": true },
    { "text": "Verboden in te rijden", "isCorrect": false },
    { "text": "Weg met beperkte doorgang", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 114,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/L9_hqdw3t.png",
    "answers": [
    { "text": "De zijweg rechts is een doodlopende weg", "isCorrect": true },
    { "text": "Je mag alleen rechtdoor rijden", "isCorrect": false },
    { "text": "Rechtdoor is een doodlopende weg", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 115,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/L13_z0ojxs.png",
    "answers": [
    { "text": "De tunnel die je binnenrijdt is 17 km lang", "isCorrect": true },
    { "text": "Er komt een tunnel aan die 17 km verderop ligt", "isCorrect": false },
    { "text": "Je rijdt over 17 km door een tunne", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 116,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/L14_eiwljq.png",
    "answers": [
    { "text": "Uitwijkplaats of pechhaven", "isCorrect": true },
    { "text": "Parkeerplaats voor vrachtwagens", "isCorrect": false },
    { "text": "Invoegstrook naar de snelweg", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 117,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/L19__links_vtvfv6.png",
    "answers": [
    { "text": "Nooduitgang bevindt zich over 50 meter naar links", "isCorrect": true },
    { "text": "Over 50 meter mag je naar links afslaan", "isCorrect": false },
    { "text": "Begin van een wandelpad naar links over 50 meter", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 118,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/L21_yrgxki.png",
    "answers": [
    { "text": "Tegenliggers moeten uitwijken voor jou", "isCorrect": true },
    { "text": "Jij moet uitwijken voor tegenliggers", "isCorrect": false },
    { "text": "Beide richtingen moeten afwisselend doorrijden", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 119,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/NL-E34_htdh91.png",
    "answers": [
    { "text": "Je rijdt op of richting Europese route E34", "isCorrect": true },
    { "text": "Dit is een afritnummer op snelweg E34", "isCorrect": false },
    { "text": "Snelheidslimiet van 34 km/u op deze weg", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 120,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/OB1_fz1qug.png",
    "answers": [
    { "text": "Pad uitsluitend bestemd voor ruiters", "isCorrect": true },
    { "text": "Paarden verboden", "isCorrect": false },
    { "text": "Verplicht fietspad met paarden toegestaan", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 121,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/OB2_nfn87s.png",
    "answers": [
    { "text": "Alleen voertuigen van milieuklasse 4 of hoger zijn toegestaan", "isCorrect": true },
    { "text": "Alleen elektrische voertuigen zijn toegestaan", "isCorrect": false },
    { "text": "Voertuigen van bouwjaar 2004 of ouder zijn toegestaan", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 122,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/OB60_dnwwbp.png",
    "answers": [
    { "text": "Aanhangwagens zijn hier verboden", "isCorrect": true },
    { "text": "Alleen voertuigen met aanhanger mogen hier rijden", "isCorrect": false },
    { "text": "De verkeersregel erboven geldt niet voor aanhangwagens", "isCorrect": false }
    ],
    topic: "borden"
  },

  {
    id: 123,
    question: "Wat betekent dit verkeersbord?",
    imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/OB65_mrjosm.png",
    "answers": [
    { "text": "De verkeersregel erboven geldt niet voor brommobielen", "isCorrect": true },
    { "text": "Alleen brommobielen zijn toegestaan", "isCorrect": false },
    { "text": "Bromfietsen en scooters zijn hier verboden ", "isCorrect": false }
    ],
    topic: "borden"
  },




  // stilstaan en parkeren
  {
  id: 124,
  question: "",
  imageUrl: "",
  answers: [
    { text: "Verboden toegang voor voertuigen", isCorrect: true },
    { text: "Einde van alle verboden", isCorrect: false },
    { text: "Eenrichtingsverkeer", isCorrect: false }
  ],
  why: "Dit bord geeft aan dat alle voertuigen verboden zijn om verder te rijden.",
  topic: "stilstaanENparkeren",
  ruTranslation: {
    question: "Что означает этот дорожный знак?",
    answers: [
      "Запрещено движение для всех транспортных средств",
      "Конец всех ограничений",
      "Одностороннее движение"
    ],
    why: "Этот знак означает запрет движения для всех транспортных средств."
  },
  enTranslation: {
    question: "What does this traffic sign mean?",
    answers: [
      "No entry for any vehicles",
      "End of all restrictions",
      "One-way traffic"
    ],
    why: "This sign indicates that all vehicles are prohibited from proceeding."
  }
}



];


mongoose.connect('mongodb://localhost:27017/proeftoets')
  .then(async () => {
    await Question.deleteMany(); 
    await Question.insertMany(questions);
    console.log('✅ Вопросы загружены');
    mongoose.disconnect();
  })
  .catch(console.error);
