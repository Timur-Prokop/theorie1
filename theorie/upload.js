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
  question: "Mag u kort stilstaan op een bushalteplaats om iemand uit te laten stappen?",
  imageUrl: "",
  answers: [
    { text: "Ja, als er geen bus nadert", isCorrect: true },
    { text: "Nee, parkeren en stilstaan zijn hier altijd verboden", isCorrect: false },
    { text: "Alleen als u volledig op de stoep staat", isCorrect: false }
  ],
  why: "Stilstaan mag kort, zolang u de bus niet hindert.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли кратко остановиться на остановке автобуса, чтобы высадить пассажира?",
    answers: [
      "Да, если автобус не подъезжает",
      "Нет, здесь всегда запрещена остановка",
      "Только если вы полностью на тротуаре"
    ],
    why: "Короткая остановка допускается, если не создаётся помех автобусу."
  },
  enTranslation: {
    question: "Are you allowed to stop briefly at a bus stop to drop off someone?",
    answers: [
      "Yes, if no bus is approaching",
      "No, stopping and parking are always forbidden here",
      "Only if you stand fully on the sidewalk"
    ],
    why: "Brief stopping is allowed as long as you do not hinder a bus."
  }
},


{
  id: 125,
  question: "Wat betekent een gele doorgetrokken streep langs de stoeprand?",
  imageUrl: "",
  answers: [
    { text: "Verbod om stil te staan", isCorrect: true },
    { text: "Verbod om te parkeren maar stilstaan mag", isCorrect: false },
    { text: "Alleen parkeren voor bewoners", isCorrect: false }
  ],
  why: "Een gele doorgetrokken streep betekent: stilstaan verboden.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Что означает жёлтая сплошная линия у бордюра?",
    answers: [
      "Запрет остановки",
      "Запрет парковки, но остановка разрешена",
      "Парковка только для жителей"
    ],
    why: "Жёлтая сплошная линия означает: остановка запрещена."
  },
  enTranslation: {
    question: "What does a solid yellow line along the curb mean?",
    answers: [
      "Stopping is forbidden",
      "Parking forbidden but stopping allowed",
      "Parking for residents only"
    ],
    why: "A solid yellow line means stopping is prohibited."
  }
},


{
  id: 126,
  question: "Waar mag u niet parkeren, maar wel kort stilstaan?",
  imageUrl: "",
  answers: [
    { text: "Langs een gele onderbroken streep", isCorrect: true },
    { text: "Voor een uitrit", isCorrect: false },
    { text: "Op een zebrapad", isCorrect: false }
  ],
  why: "Gele onderbroken streep = parkeren verboden, stilstaan toegestaan.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Где запрещено парковаться, но разрешена короткая остановка?",
    answers: [
      "Возле жёлтой прерывистой линии",
      "Перед выездом",
      "На пешеходном переходе"
    ],
    why: "Жёлтая прерывистая линия = парковка запрещена, остановка разрешена."
  },
  enTranslation: {
    question: "Where is parking forbidden but brief stopping allowed?",
    answers: [
      "Next to a broken yellow line",
      "In front of a driveway",
      "On a crosswalk"
    ],
    why: "A broken yellow line means parking is forbidden, stopping allowed."
  }
},


{
  id: 127,
  question: "U wilt parkeren in een woonwijk. Waar moet u vooral op letten?",
  imageUrl: "",
  answers: [
    { text: "Of u niemand hindert en verkeersborden volgt", isCorrect: true },
    { text: "Of uw auto recht staat", isCorrect: false },
    { text: "Of de straat mooi breed oogt", isCorrect: false }
  ],
  why: "Parkeren mag als u niet hindert en borden volgt.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Вы хотите припарковаться в жилой зоне. На что нужно обращать внимание?",
    answers: [
      "Чтобы не создавать помех и следовать знакам",
      "Чтобы машина стояла ровно",
      "Чтобы улица казалась достаточно широкой"
    ],
    why: "Парковка возможна, если нет препятствий и соблюдаются знаки."
  },
  enTranslation: {
    question: "You want to park in a residential area. What matters most?",
    answers: [
      "That you do not hinder anyone and follow signs",
      "That your car stands perfectly straight",
      "That the street looks wide enough"
    ],
    why: "Parking is allowed if you do not hinder and follow the signs."
  }
},


{
  id: 128,
  question: "Mag u parkeren binnen 5 meter van een kruispunt?",
  imageUrl: "",
  answers: [
    { text: "Nee, dit is verboden", isCorrect: true },
    { text: "Ja, als u langs een woonhuis staat", isCorrect: false },
    { text: "Ja, als het donker is", isCorrect: false }
  ],
  why: "Binnen 5 meter van een kruispunt parkeren is verboden.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться ближе 5 метров к перекрёстку?",
    answers: [
      "Нет, это запрещено",
      "Да, если рядом жилой дом",
      "Да, если темно"
    ],
    why: "Парковка ближе 5 метров к перекрёстку запрещена."
  },
  enTranslation: {
    question: "May you park within 5 meters of an intersection?",
    answers: [
      "No, this is forbidden",
      "Yes, if near a house",
      "Yes, if it's dark"
    ],
    why: "Parking within 5 meters of an intersection is forbidden."
  }
},


{
  id: 129,
  question: "Mag u stilstaan op een fietsstrook?",
  imageUrl: "",
  answers: [
    { text: "Nee, dit hindert fietsers", isCorrect: true },
    { text: "Ja, als u het kort doet", isCorrect: false },
    { text: "Ja, als u de alarmlichten aanzet", isCorrect: false }
  ],
  why: "Fietsstrook moet vrij blijven.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли останавливаться на велополосе?",
    answers: [
      "Нет, это мешает велосипедистам",
      "Да, если ненадолго",
      "Да, если включить аварийку"
    ],
    why: "Велополоса должна оставаться свободной."
  },
  enTranslation: {
    question: "May you stop on a cycle lane?",
    answers: [
      "No, it obstructs cyclists",
      "Yes, if briefly",
      "Yes, with hazard lights on"
    ],
    why: "A cycle lane must remain unobstructed."
  }
},


{
  id: 130,
  question: "Waar moet u rekening mee houden bij parkeren op een helling?",
  imageUrl: "",
  answers: [
    { text: "Wielen naar de stoeprand draaien indien mogelijk", isCorrect: true },
    { text: "Auto uitzetten met versnelling in neutraal", isCorrect: false },
    { text: "Handrem niet gebruiken bij nat weer", isCorrect: false }
  ],
  why: "Wielen draaien voorkomt wegrollen.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "О чём нужно помнить при парковке на уклоне?",
    answers: [
      "Повернуть колёса к бордюру, если возможно",
      "Оставить машину на нейтрали",
      "Не использовать ручник в дождь"
    ],
    why: "Повернутые колёса предотвращают скатывание."
  },
  enTranslation: {
    question: "What should you consider when parking on a slope?",
    answers: [
      "Turn wheels towards the curb if possible",
      "Leave car in neutral gear",
      "Avoid handbrake when wet"
    ],
    why: "Turning wheels prevents rolling away."
  }
},


{
  id: 131,
  question: "Mag u parkeren op een plek waar uw auto het zicht belemmert?",
  imageUrl: "",
  answers: [
    { text: "Nee, dit kan gevaarlijk zijn", isCorrect: true },
    { text: "Ja, als het kort is", isCorrect: false },
    { text: "Ja, mits u alarmlichten aanzet", isCorrect: false }
  ],
  why: "Belemmering van zicht is onveilig.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться там, где автомобиль закрывает обзор?",
    answers: [
      "Нет, это опасно",
      "Да, если ненадолго",
      "Да, если включить аварийку"
    ],
    why: "Затруднение обзора — это небезопасно."
  },
  enTranslation: {
    question: "May you park where your car blocks visibility?",
    answers: [
      "No, this is dangerous",
      "Yes, if briefly",
      "Yes, if hazard lights are on"
    ],
    why: "Blocking visibility is unsafe."
  }
},


{
  id: 132,
  question: "Is het toegestaan om te parkeren op een gehandicaptenparkeerplaats?",
  imageUrl: "",
  answers: [
    { text: "Alleen met geldige gehandicaptenkaart", isCorrect: true },
    { text: "Ja, als u maar even blijft", isCorrect: false },
    { text: "Ja, als bord het niet verbiedt", isCorrect: false }
  ],
  why: "Gehandicaptenplek alleen met kaart.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться на месте для инвалидов?",
    answers: [
      "Только с действующей инвалидной картой",
      "Да, если ненадолго",
      "Да, если нет запретного знака"
    ],
    why: "Место для инвалидов — только по карте."
  },
  enTranslation: {
    question: "May you park in a disabled parking spot?",
    answers: [
      "Only with a valid disabled permit",
      "Yes, if briefly",
      "Yes, if no sign forbids it"
    ],
    why: "Disabled parking requires a valid permit."
  }
},


{
  id: 133,
  question: "Mag u stilstaan op een parkeerverbodszone?",
  imageUrl: "",
  answers: [
    { text: "Ja, stilstaan mag, parkeren niet", isCorrect: true },
    { text: "Nee, stilstaan en parkeren zijn beide verboden", isCorrect: false },
    { text: "Alleen 's avonds", isCorrect: false }
  ],
  why: "Parkeerverbod ≠ stilstandverbod.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли остановиться в зоне запрета парковки?",
    answers: [
      "Да, остановка разрешена, парковка — нет",
      "Нет, и остановка и парковка запрещены",
      "Можно только вечером"
    ],
    why: "Запрет парковки ≠ запрет остановки."
  },
  enTranslation: {
    question: "May you stop in a no-parking zone?",
    answers: [
      "Yes, stopping allowed, parking not",
      "No, both stopping and parking forbidden",
      "Only in the evening"
    ],
    why: "A parking ban is not the same as a stopping ban."
  }
},


{
  id: 134,
  question: "Mag u stilstaan op een brug als er geen verkeer nadert?",
  imageUrl: "",
  answers: [
    { text: "Nee, stilstaan op een brug is verboden", isCorrect: true },
    { text: "Ja, zolang u niemand hindert", isCorrect: false },
    { text: "Ja, maar alleen met alarmlichten", isCorrect: false }
  ],
  why: "Op bruggen stilstaan is verboden vanwege veiligheid.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли останавливаться на мосту, если нет движения?",
    answers: [
      "Нет, остановка на мосту запрещена",
      "Да, если никому не мешаете",
      "Да, только с аварийкой"
    ],
    why: "Остановка на мосту запрещена по соображениям безопасности."
  },
  enTranslation: {
    question: "May you stop on a bridge if no traffic is approaching?",
    answers: [
      "No, stopping on a bridge is forbidden",
      "Yes, if you don't hinder anyone",
      "Yes, with hazard lights"
    ],
    why: "Stopping on bridges is unsafe and forbidden."
  }
},
{
  id: 135,
  question: "Mag u parkeren voor een inrit?",
  imageUrl: "",
  answers: [
    { text: "Nee, u blokkeert de toegang", isCorrect: true },
    { text: "Ja, als niemand kijkt", isCorrect: false },
    { text: "Ja, als u maar kort blijft", isCorrect: false }
  ],
  why: "Inritten moeten vrij blijven.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться перед въездом/выездом?",
    answers: [
      "Нет, вы блокируете доступ",
      "Да, если никто не видит",
      "Да, если ненадолго"
    ],
    why: "Въезды должны быть свободны."
  },
  enTranslation: {
    question: "May you park in front of a driveway?",
    answers: [
      "No, you block access",
      "Yes, if nobody sees",
      "Yes, if briefly"
    ],
    why: "Driveways must remain accessible."
  }
},
{
  id: 136,
  question: "Mag u stilstaan op een vluchthaven (vluchtstrook) buiten noodsituaties?",
  imageUrl: "",
  answers: [
    { text: "Nee, alleen bij pech of nood", isCorrect: true },
    { text: "Ja, als u moe bent", isCorrect: false },
    { text: "Ja, als het regent", isCorrect: false }
  ],
  why: "Vluchtstrook is voor noodsituaties.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли останавливаться на аварийной полосе без необходимости?",
    answers: [
      "Нет, только в случае поломки или аварии",
      "Да, если вы устали",
      "Да, если идёт дождь"
    ],
    why: "Аварийная полоса — только для экстренных случаев."
  },
  enTranslation: {
    question: "May you stop on the emergency lane without an emergency?",
    answers: [
      "No, only in case of breakdown or emergency",
      "Yes, if you're tired",
      "Yes, if it rains"
    ],
    why: "Emergency lane is for emergencies only."
  }
},
{
  id: 137,
  question: "Waar mag u absoluut niet parkeren op een smalle straat?",
  imageUrl: "",
  answers: [
    { text: "Tegenover een andere geparkeerde auto als doorgang te smal wordt", isCorrect: true },
    { text: "Langs een speelplaats", isCorrect: false },
    { text: "Naast een vuilcontainer", isCorrect: false }
  ],
  why: "Parkeren mag niet als doorgang te smal wordt.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Где нельзя парковаться на узкой улице?",
    answers: [
      "Напротив другой машины, если проезд становится слишком узким",
      "Возле детской площадки",
      "Возле мусорного контейнера"
    ],
    why: "Нельзя парковаться так, чтобы проезд был слишком узким."
  },
  enTranslation: {
    question: "Where is parking absolutely not allowed on a narrow street?",
    answers: [
      "Opposite another parked vehicle if the passage becomes too narrow",
      "Next to a playground",
      "Beside a trash container"
    ],
    why: "Parking must not block the passage."
  }
},
{
  id: 138,
  question: "Mag u parkeren op een plek waar een bord 'Verboden te parkeren' staat?",
  imageUrl: "",
  answers: [
    { text: "Nee, dat is verboden", isCorrect: true },
    { text: "Ja, als u het kort doet", isCorrect: false },
    { text: "Ja, met alarmlichten", isCorrect: false }
  ],
  why: "Het bord geeft een parkeerverbod aan.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться там, где стоит знак «Парковка запрещена»?",
    answers: [
      "Нет, запрещено",
      "Да, если ненадолго",
      "Да, с аварийкой"
    ],
    why: "Знак указывает на запрет парковки."
  },
  enTranslation: {
    question: "May you park where a 'No parking' sign is placed?",
    answers: [
      "No, it is forbidden",
      "Yes, if briefly",
      "Yes, with hazard lights"
    ],
    why: "The sign indicates a parking ban."
  }
},
{
  id: 139,
  question: "Mag u even stilstaan op een zebrapad?",
  imageUrl: "",
  answers: [
    { text: "Nee, zebrapad moet vrij blijven", isCorrect: true },
    { text: "Ja, als niemand oversteekt", isCorrect: false },
    { text: "Ja, voor minder dan 10 seconden", isCorrect: false }
  ],
  why: "Een zebrapad mag nooit geblokkeerd worden.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли кратко остановиться на пешеходном переходе?",
    answers: [
      "Нет, он должен быть свободным",
      "Да, если никто не переходит",
      "Да, если меньше чем на 10 секунд"
    ],
    why: "Переход не должен быть блокирован."
  },
  enTranslation: {
    question: "May you stop briefly on a crosswalk?",
    answers: [
      "No, it must remain clear",
      "Yes, if no one is crossing",
      "Yes, for less than 10 seconds"
    ],
    why: "A crosswalk must remain unobstructed."
  }
},
{
  id: 140,
  question: "Mag u parkeren op een plaats waar de stoep is verlaagd voor rolstoelgebruikers?",
  imageUrl: "",
  answers: [
    { text: "Nee, dat hindert oversteken", isCorrect: true },
    { text: "Ja, als het nacht is", isCorrect: false },
    { text: "Ja, als u waarschuwingslichten gebruikt", isCorrect: false }
  ],
  why: "Verlaagde stoep moet vrij blijven.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться на месте, где тротуар опущен для инвалидных колясок?",
    answers: [
      "Нет, это мешает переходу",
      "Да, если ночью",
      "Да, если включить аварийку"
    ],
    why: "Опущенный тротуар должен быть доступен."
  },
  enTranslation: {
    question: "May you park where the curb is lowered for wheelchair users?",
    answers: [
      "No, it blocks crossing",
      "Yes, at night",
      "Yes, with hazard lights"
    ],
    why: "Lowered curb must remain accessible."
  }
},
{
  id: 141,
  question: "Mag u stilstaan op een plaats waar een bord 'Verboden stil te staan' staat?",
  imageUrl: "",
  answers: [
    { text: "Nee, stilstaan is hier verboden", isCorrect: true },
    { text: "Ja, parkeren niet maar stilstaan wel", isCorrect: false },
    { text: "Ja, als u de motor laat draaien", isCorrect: false }
  ],
  why: "Het bord verbiedt stilstaan volledig.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли остановиться там, где стоит знак «Остановка запрещена»?",
    answers: [
      "Нет, остановка запрещена",
      "Да, парковка запрещена, но остановка разрешена",
      "Да, если двигатель работает"
    ],
    why: "Знак полностью запрещает остановку."
  },
  enTranslation: {
    question: "May you stop where a 'No stopping' sign is placed?",
    answers: [
      "No, stopping is forbidden",
      "Yes, parking not allowed but stopping allowed",
      "Yes, if engine is running"
    ],
    why: "The sign fully prohibits stopping."
  }
},
{
  id: 142,
  question: "Waar mag u niet parkeren in verband met brandweertoegang?",
  imageUrl: "",
  answers: [
    { text: "Voor brandweerhydranten of reddingszones", isCorrect: true },
    { text: "Langs een school", isCorrect: false },
    { text: "Tegenover een winkel", isCorrect: false }
  ],
  why: "Brandweerzones moeten vrij blijven.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Где нельзя парковаться из-за доступа пожарной службы?",
    answers: [
      "Перед пожарными гидрантами или зонами спасения",
      "Возле школы",
      "Напротив магазина"
    ],
    why: "Пожарные зоны должны быть свободны."
  },
  enTranslation: {
    question: "Where is parking not allowed due to fire access?",
    answers: [
      "In front of hydrants or emergency zones",
      "Next to a school",
      "Opposite a shop"
    ],
    why: "Fire access zones must remain clear."
  }
},
{
  id: 143,
  question: "Wanneer is dubbel parkeren toegestaan?",
  imageUrl: "",
  answers: [
    { text: "Nooit, het veroorzaakt gevaar", isCorrect: true },
    { text: "Alleen 's avonds", isCorrect: false },
    { text: "Als de straat breed is", isCorrect: false }
  ],
  why: "Dubbel parkeren hindert verkeer.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Когда разрешена двойная парковка?",
    answers: [
      "Никогда, это опасно",
      "Только вечером",
      "Если улица широкая"
    ],
    why: "Двойная парковка мешает движению."
  },
  enTranslation: {
    question: "When is double parking allowed?",
    answers: [
      "Never, it causes danger",
      "Only in the evening",
      "If the street is wide"
    ],
    why: "Double parking obstructs traffic."
  }
},
{
  id: 144,
  question: "Mag u parkeren op een plek waar u een verkeersbord gedeeltelijk bedekt?",
  imageUrl: "",
  answers: [
    { text: "Nee, verkeersborden moeten zichtbaar blijven", isCorrect: true },
    { text: "Ja, als u kort blijft", isCorrect: false },
    { text: "Ja, als bord aan de andere kant staat", isCorrect: false }
  ],
  why: "Verkeersborden moeten altijd zichtbaar zijn.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться так, чтобы частично закрывать дорожный знак?",
    answers: [
      "Нет, знаки должны оставаться видимыми",
      "Да, если ненадолго",
      "Да, если знак с другой стороны"
    ],
    why: "Знаки должны быть полностью видны."
  },
  enTranslation: {
    question: "May you park where you partially block a traffic sign?",
    answers: [
      "No, signs must remain visible",
      "Yes, if briefly",
      "Yes, if sign is on the other side"
    ],
    why: "Traffic signs must remain visible."
  }
},
{
  id: 145,
  question: "Mag u parkeren op een kruising van fietspaden?",
  imageUrl: "",
  answers: [
    { text: "Nee, dit blokkeert fietsverkeer", isCorrect: true },
    { text: "Ja, als het rustig is", isCorrect: false },
    { text: "Ja, als u waarschuwingslichten aanzet", isCorrect: false }
  ],
  why: "Fietsverkeer moet vrije doorgang hebben.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться на перекрёстке велодорожек?",
    answers: [
      "Нет, это блокирует велодвижение",
      "Да, если тихо",
      "Да, если включить аварийку"
    ],
    why: "Велодвижение должно быть свободным."
  },
  enTranslation: {
    question: "May you park on a bicycle path crossing?",
    answers: [
      "No, it blocks cyclists",
      "Yes, if it's calm",
      "Yes, with hazard lights"
    ],
    why: "Cyclists must have free passage."
  }
},
{
  id: 146,
  question: "Mag u stilstaan om iemand op te halen op een plaats met parkeerverbod?",
  imageUrl: "",
  answers: [
    { text: "Ja, kort stilstaan mag", isCorrect: true },
    { text: "Nee, niets mag hier", isCorrect: false },
    { text: "Ja, alleen met motor uit", isCorrect: false }
  ],
  why: "Parkeerverbod betekent geen langdurig stilstaan, maar korte stop mag.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли остановиться, чтобы забрать человека, в зоне запрета парковки?",
    answers: [
      "Да, краткая остановка разрешена",
      "Нет, ничего нельзя",
      "Да, только с выключенным мотором"
    ],
    why: "Запрет парковки не запрещает короткую остановку."
  },
  enTranslation: {
    question: "May you stop briefly to pick someone up in a no-parking zone?",
    answers: [
      "Yes, brief stopping is allowed",
      "No, nothing allowed here",
      "Yes, only with engine off"
    ],
    why: "Parking ban does not forbid brief stopping."
  }
},
{
  id: 147,
  question: "Mag u parkeren bij een bushalte als er 40 meter vrije ruimte blijft?",
  imageUrl: "",
  answers: [
    { text: "Ja, buiten de halte-zone mag dat", isCorrect: true },
    { text: "Nee, helemaal niet", isCorrect: false },
    { text: "Alleen met noodlicht", isCorrect: false }
  ],
  why: "Zolang u buiten de halte-strook blijft, mag parkeren.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться возле автобусной остановки, если остаётся 40 метров свободного места?",
    answers: [
      "Да, вне зоны остановки это разрешено",
      "Нет, вовсе нельзя",
      "Только с аварийкой"
    ],
    why: "Парковка вне зоны остановки разрешена."
  },
  enTranslation: {
    question: "May you park near a bus stop if 40 meters are left free?",
    answers: [
      "Yes, outside the stop zone it's allowed",
      "No, not at all",
      "Only with hazard lights"
    ],
    why: "Parking outside the marked stop zone is allowed."
  }
},
{
  id: 148,
  question: "Mag u parkeren op een plek waar een bord 'Einde parkeerverbod' staat?",
  imageUrl: "",
  answers: [
    { text: "Ja, parkeren is weer toegestaan", isCorrect: true },
    { text: "Nee, het verbod geldt nog steeds", isCorrect: false },
    { text: "Alleen 's nachts", isCorrect: false }
  ],
  why: "Het bord geeft einde van parkeerverbod aan.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться там, где стоит знак «Конец запрета парковки»?",
    answers: [
      "Да, парковка снова разрешена",
      "Нет, запрет всё ещё действует",
      "Только ночью"
    ],
    why: "Знак указывает на конец запрета."
  },
  enTranslation: {
    question: "May you park where a 'End of parking prohibition' sign is placed?",
    answers: [
      "Yes, parking is allowed again",
      "No, the prohibition still applies",
      "Only at night"
    ],
    why: "The sign indicates the end of the prohibition."
  }
},
{
  id: 149,
  question: "Mag u parkeren langs een groenstrook als er geen bord staat?",
  imageUrl: "",
  answers: [
    { text: "Ja, tenzij anders aangegeven", isCorrect: true },
    { text: "Nee, dit is altijd verboden", isCorrect: false },
    { text: "Alleen op zondag", isCorrect: false }
  ],
  why: "Zonder verbod mag parkeren.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться возле зелёной зоны, если нет знаков?",
    answers: [
      "Да, если нет запрета",
      "Нет, всегда запрещено",
      "Только по воскресеньям"
    ],
    why: "Без знака запрета парковка разрешена."
  },
  enTranslation: {
    question: "May you park next to a green area if no sign is present?",
    answers: [
      "Yes, unless otherwise indicated",
      "No, always forbidden",
      "Only on Sunday"
    ],
    why: "Parking is allowed if no prohibition exists."
  }
},
{
  id: 150,
  question: "Waar is parkeren toegestaan in een 30 km-zone?",
  imageUrl: "",
  answers: [
    { text: "Op aangegeven parkeervakken", isCorrect: true },
    { text: "Overal waar u wilt", isCorrect: false },
    { text: "Alleen op stoepen", isCorrect: false }
  ],
  why: "Parkeren alleen op aangewezen plekken.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Где разрешена парковка в зоне 30 км/ч?",
    answers: [
      "На обозначенных парковочных местах",
      "Где угодно",
      "Только на тротуаре"
    ],
    why: "В зоне 30 парковка — только на выделенных местах."
  },
  enTranslation: {
    question: "Where is parking allowed in a 30 km zone?",
    answers: [
      "In marked parking spaces",
      "Anywhere you want",
      "Only on sidewalks"
    ],
    why: "Parking only on designated places."
  }
},
{
  id: 151,
  question: "Mag u stilstaan naast een geparkeerde auto (dubbel stilstaan)?",
  imageUrl: "",
  answers: [
    { text: "Nee, dit belemmert het verkeer", isCorrect: true },
    { text: "Ja, voor maximaal 5 minuten", isCorrect: false },
    { text: "Ja, als u de alarmlichten gebruikt", isCorrect: false }
  ],
  why: "Dubbel stilstaan belemmert verkeer.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли остановиться рядом с припаркованной машиной (двойная остановка)?",
    answers: [
      "Нет, это мешает движению",
      "Да, максимум на 5 минут",
      "Да, с аварийкой"
    ],
    why: "Двойная остановка мешает движению."
  },
  enTranslation: {
    question: "May you stop next to a parked car (double stopping)?",
    answers: [
      "No, this obstructs traffic",
      "Yes, for max 5 minutes",
      "Yes, with hazard lights"
    ],
    why: "Double stopping obstructs traffic."
  }
},
{
  id: 152,
  question: "Waar mag u niet parkeren vanwege gevaar voor voetgangers?",
  imageUrl: "",
  answers: [
    { text: "Op trottoirs", isCorrect: true },
    { text: "Bij een supermarkt", isCorrect: false },
    { text: "Naast een boom", isCorrect: false }
  ],
  why: "Trottoirs zijn voor voetgangers.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Где нельзя парковаться из-за опасности для пешеходов?",
    answers: [
      "На тротуарах",
      "Возле супермаркета",
      "Возле дерева"
    ],
    why: "Тротуар — зона пешеходов."
  },
  enTranslation: {
    question: "Where is parking not allowed due to pedestrian safety?",
    answers: [
      "On sidewalks",
      "Near a supermarket",
      "Next to a tree"
    ],
    why: "Sidewalks are for pedestrians."
  }
},
{
  id: 153,
  question: "Mag u parkeren langs een voorrangsweg buiten de bebouwde kom?",
  imageUrl: "",
  answers: [
    { text: "Ja, indien veilige zichtbaarheid blijft", isCorrect: true },
    { text: "Nee, nooit", isCorrect: false },
    { text: "Alleen in regen", isCorrect: false }
  ],
  why: "Parkeren mag als zicht voldoende blijft.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться на главной дороге вне населённого пункта?",
    answers: [
      "Да, если остаётся хорошая видимость",
      "Нет, никогда",
      "Только в дождь"
    ],
    why: "Парковка разрешена при достаточной видимости."
  },
  enTranslation: {
    question: "May you park along a priority road outside town?",
    answers: [
      "Yes, if visibility is safe",
      "No, never",
      "Only in rain"
    ],
    why: "Parking is allowed with safe visibility."
  }
},

{
  id: 154,
  question: "Mag u kort stilstaan op een plaats met parkeerverbod om iemand op te halen?",
  imageUrl: "",
  answers: [
    { text: "Ja, stilstaan mag als u niemand hindert", isCorrect: true },
    { text: "Nee, stilstaan en parkeren zijn beide verboden", isCorrect: false },
    { text: "Ja, maar alleen als u de motor uitzet", isCorrect: false }
  ],
  why: "Parkeerverbod betekent géén langdurig parkeren, maar kort stilstaan mag.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли кратко остановиться в зоне запрета парковки, чтобы забрать человека?",
    answers: [
      "Да, если не создаёте помех",
      "Нет, остановка и парковка запрещены",
      "Да, только если заглушить двигатель"
    ],
    why: "Запрет парковки не означает запрет остановки."
  },
  enTranslation: {
    question: "May you stop briefly in a no-parking zone to pick someone up?",
    answers: [
      "Yes, if you do not hinder anyone",
      "No, both stopping and parking are forbidden",
      "Yes, only if you turn off the engine"
    ],
    why: "A parking ban does not forbid short stopping."
  }
},

{
  id: 155,
  question: "U staat stil op een weg met druk verkeer. Wanneer is dit toegestaan?",
  imageUrl: "",
  answers: [
    { text: "Alleen bij noodsituaties of filevorming", isCorrect: true },
    { text: "Altijd als uw alarmsignaal aan staat", isCorrect: false },
    { text: "Als u minder dan 10 seconden blijft staan", isCorrect: false }
  ],
  why: "Stilstaan op drukke rijbaan mag alleen bij nood of file.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Когда разрешено стоять на дороге с интенсивным движением?",
    answers: [
      "Только при аварии или пробке",
      "Всегда, если включена аварийка",
      "Если стоять менее 10 секунд"
    ],
    why: "На оживлённой дороге можно стоять только по необходимости."
  },
  enTranslation: {
    question: "When is it allowed to stand still on a busy road?",
    answers: [
      "Only in emergencies or traffic jams",
      "Always if hazard lights are on",
      "If you stay under 10 seconds"
    ],
    why: "Stopping on a busy road is allowed only out of necessity."
  }
},

{
  id: 156,
  question: "Mag u parkeren op een plek waar u 5 meter van een kruispunt afstaat?",
  imageUrl: "",
  answers: [
    { text: "Ja, buiten de 5 meter grens mag dit", isCorrect: true },
    { text: "Nee, u moet minimaal 10 meter afstand houden", isCorrect: false },
    { text: "Alleen als er geen bebording is", isCorrect: false }
  ],
  why: "De wettelijke grens is 5 meter. Buiten deze afstand mag parkeren.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться в 5 метрах от перекрёстка?",
    answers: [
      "Да, за пределами 5 метров разрешено",
      "Нет, нужно минимум 10 метров",
      "Только если нет знаков"
    ],
    why: "Правило — не ближе 5 метров."
  },
  enTranslation: {
    question: "May you park at 5 meters distance from a junction?",
    answers: [
      "Yes, beyond the 5-meter rule it is allowed",
      "No, minimum is 10 meters",
      "Only if there are no signs"
    ],
    why: "The legal limit is 5 meters."
  }
},

{
  id: 157,
  question: "Mag u stilstaan op een fietsstrook wanneer u links wilt afslaan?",
  imageUrl: "",
  answers: [
    { text: "Ja, als u moet voorsorteren en geen fietsers hindert", isCorrect: true },
    { text: "Nee, u mag nooit op een fietsstrook rijden of stilstaan", isCorrect: false },
    { text: "Ja, maar alleen met knipperlicht aan", isCorrect: false }
  ],
  why: "Voorsorteren kan soms via fietsstrook als dit wettelijk is toegestaan en veilig.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли остановиться на велополосе при подготовке к левому повороту?",
    answers: [
      "Да, если нужно перестроиться и не мешаете велосипедистам",
      "Нет, никогда нельзя",
      "Да, только с включённым поворотником"
    ],
    why: "Иногда перестроение через велополосу разрешено."
  },
  enTranslation: {
    question: "May you stop on a cycle lane when preparing to turn left?",
    answers: [
      "Yes, if you must position yourself and do not hinder cyclists",
      "No, never allowed",
      "Yes, only with indicator on"
    ],
    why: "Positioning may allow temporary use if safe."
  }
},

{
  id: 158,
  question: "U wilt parkeren op een voorrangsweg buiten de bebouwde kom. Wanneer mag dat?",
  imageUrl: "",
  answers: [
    { text: "Alleen als u volledig buiten de rijbaan parkeert", isCorrect: true },
    { text: "Altijd, zolang u richting aangeeft", isCorrect: false },
    { text: "Alleen als het donker is", isCorrect: false }
  ],
  why: "Buiten de rijbaan (op berm) mag u parkeren, mits veilig.",
  ruTranslation: {
    question: "Когда можно парковаться на главной дороге вне населённого пункта?",
    answers: [
      "Только полностью вне проезжей части",
      "Всегда, если включён поворотник",
      "Только ночью"
    ],
    why: "Парковаться можно только вне дороги, на обочине."
  },
  enTranslation: {
    question: "When may you park on a priority road outside town?",
    answers: [
      "Only if fully outside the roadway",
      "Always, if signaling",
      "Only at night"
    ],
    why: "Parking must be off the roadway."
  }
},

{
  id: 159,
  question: "Mag u parkeren in een zone waar laden en lossen is toegestaan?",
  imageUrl: "",
  answers: [
    { text: "Nee, parkeren mag alleen buiten deze tijden/zone", isCorrect: true },
    { text: "Ja, als u minder dan 5 minuten blijft", isCorrect: false },
    { text: "Ja, als u in de auto blijft zitten", isCorrect: false }
  ],
  why: "Laden/lossen = actief bezig zijn, niet parkeren.",
  topic: "stilstaan_en_parkeren",
  ruTranslation: {
    question: "Можно ли парковаться в зоне загрузки/разгрузки?",
    answers: [
      "Нет, парковка разрешена только вне этих зон/времени",
      "Да, если менее 5 минут",
      "Да, если остаться внутри машины"
    ],
    why: "Загрузка/разгрузка — не парковка."
  },
  enTranslation: {
    question: "May you park in a loading/unloading zone?",
    answers: [
      "No, parking allowed only outside this zone/time",
      "Yes, if under 5 minutes",
      "Yes, if you stay inside the car"
    ],
    why: "Loading zones allow activity, not parking."
  }
},


// jouw autoooooooooooo
{
  id: 160,
  question: "Wat is de belangrijkste taak van een hoofdsteun?",
  imageUrl: "",
  answers: [
    { text: "Je nek beschermen bij een aanrijding", isCorrect: true },
    { text: "Extra comfort geven tijdens het rijden", isCorrect: false },
    { text: "Voorkomen dat je naar voren buigt", isCorrect: false }
  ],
  why: "De hoofdsteun beperkt nekletsel (whiplash) bij botsingen.",
  topic: "veiligheid_hoofdsteun",
  ruTranslation: {
    question: "Какова главная задача подголовника?",
    answers: [
      "Защищать шею при столкновении",
      "Повышать комфорт во время езды",
      "Не давать наклоняться вперёд"
    ],
    why: "Подголовник снижает риск травмы шеи (хлыстовой)."
  },
  enTranslation: {
    question: "What is the main function of a headrest?",
    answers: [
      "Protect your neck in a collision",
      "Provide extra comfort while driving",
      "Prevent you from leaning forward"
    ],
    why: "The headrest reduces whiplash injury in crashes."
  }
},
{
  id: 161,
  question: "Hoe stel je een hoofdsteun correct af?",
  imageUrl: "",
  answers: [
    { text: "Bovenzijde gelijk met de bovenkant van je hoofd", isCorrect: true },
    { text: "Zo laag mogelijk voor comfort", isCorrect: false },
    { text: "Met grote afstand tussen hoofd en steun", isCorrect: false }
  ],
  why: "Juiste hoogte en kleine afstand geven maximale bescherming.",
  topic: "veiligheid_hoofdsteun",
  ruTranslation: {
    question: "Как правильно отрегулировать подголовник?",
    answers: [
      "Верх подголовника на уровне вершины головы",
      "Как можно ниже ради комфорта",
      "С большим зазором между головой и опорой"
    ],
    why: "Правильная высота и малый зазор дают лучшую защиту."
  },
  enTranslation: {
    question: "How do you correctly adjust a headrest?",
    answers: [
      "Top aligned with the top of your head",
      "As low as possible for comfort",
      "With a large gap between head and rest"
    ],
    why: "Proper height and small gap provide best protection."
  }
},
{
  id: 162,
  question: "Wat veroorzaakt steenslag vooral bij hoge snelheid?",
  imageUrl: "",
  answers: [
    { text: "Opspringende steentjes van de voorligger", isCorrect: true },
    { text: "Te zacht asfalt door warm weer", isCorrect: false },
    { text: "Te hoge bandenspanning", isCorrect: false }
  ],
  why: "Losse steentjes kunnen ruit en lak beschadigen.",
  topic: "steenslag",
  ruTranslation: {
    question: "Что главным образом вызывает сколы от камней на высокой скорости?",
    answers: [
      "Камешки, отлетающие от впереди идущего",
      "Слишком мягкий асфальт из-за жары",
      "Слишком высокое давление в шинах"
    ],
    why: "Летящие камни повреждают стекло и лак."
  },
  enTranslation: {
    question: "What mainly causes stone chips at high speed?",
    answers: [
      "Stones thrown up by the vehicle ahead",
      "Asphalt softened by heat",
      "Excessively high tire pressure"
    ],
    why: "Loose stones can damage paint and windshield."
  }
},
{
  id: 163,
  question: "Hoe verklein je de kans op steenslag?",
  imageUrl: "",
  answers: [
    { text: "Voldoende afstand houden tot je voorligger", isCorrect: true },
    { text: "Iets sneller rijden om voorbij te gaan", isCorrect: false },
    { text: "Dichter achter grote voertuigen rijden", isCorrect: false }
  ],
  why: "Meer afstand = minder impact van opspringende steentjes.",
  topic: "steenslag",
  ruTranslation: {
    question: "Как снизить риск сколов от камней?",
    answers: [
      "Держать достаточную дистанцию до впереди идущего",
      "Ехать чуть быстрее, чтобы обогнать",
      "Прижиматься ближе к крупным авто"
    ],
    why: "Большая дистанция уменьшает удар камней."
  },
  enTranslation: {
    question: "How can you reduce the risk of stone chips?",
    answers: [
      "Keep sufficient distance from the vehicle ahead",
      "Drive slightly faster to pass",
      "Follow closely behind large vehicles"
    ],
    why: "More distance reduces stone impact."
  }
},
{
  id: 164,
  question: "Wie moeten een driepuntsgordel gebruiken?",
  imageUrl: "",
  answers: [
    { text: "Volwassenen en kinderen groter dan 1,35 m", isCorrect: true },
    { text: "Alleen volwassenen", isCorrect: false },
    { text: "Alleen kinderen onder 12 jaar", isCorrect: false }
  ],
  why: "Vanaf 1,35 m is de gewone gordel verplicht.",
  topic: "gordels",
  ruTranslation: {
    question: "Кто должен использовать трёхточечный ремень?",
    answers: [
      "Взрослые и дети выше 1,35 м",
      "Только взрослые",
      "Только дети младше 12 лет"
    ],
    why: "С ростом от 1,35 м обязателен обычный ремень."
  },
  enTranslation: {
    question: "Who must use a three-point seatbelt?",
    answers: [
      "Adults and children taller than 1.35 m",
      "Adults only",
      "Children under 12 only"
    ],
    why: "From 1.35 m the normal belt is mandatory."
  }
},
{
  id: 165,
  question: "Hoe draag je de diagonale gordel veilig?",
  imageUrl: "",
  answers: [
    { text: "Over het midden van de schouder, niet langs de hals", isCorrect: true },
    { text: "Over de bovenarm voor extra bewegingsruimte", isCorrect: false },
    { text: "Onder de arm door voor comfort", isCorrect: false }
  ],
  why: "De gordel mag de hals niet raken en moet strak aansluiten.",
  topic: "gordels",
  ruTranslation: {
    question: "Как безопасно носить диагональную часть ремня?",
    answers: [
      "По середине плеча, не у шеи",
      "По верхней части руки для свободы",
      "Под рукой ради комфорта"
    ],
    why: "Ремень не должен касаться шеи и должен прилегать плотно."
  },
  enTranslation: {
    question: "How should the diagonal belt be worn safely?",
    answers: [
      "Across the middle of the shoulder, not the neck",
      "Across the upper arm for more freedom",
      "Under the arm for comfort"
    ],
    why: "The belt must not touch the neck and should fit snugly."
  }
},
{
  id: 166,
  question: "Mag één autogordel door meerdere passagiers worden gebruikt?",
  imageUrl: "",
  answers: [
    { text: "Nee, elke passagier moet een eigen gordel hebben", isCorrect: true },
    { text: "Ja, als het een korte rit is", isCorrect: false },
    { text: "Ja, als er geen zitplaatsen meer zijn", isCorrect: false }
  ],
  why: "Een gordel is voor één persoon bedoeld.",
  topic: "gordels",
  ruTranslation: {
    question: "Можно ли пристёгивать нескольких пассажиров одним ремнём?",
    answers: [
      "Нет, у каждого должен быть свой ремень",
      "Да, если поездка короткая",
      "Да, если нет мест"
    ],
    why: "Один ремень рассчитан на одного человека."
  },
  enTranslation: {
    question: "May one seatbelt be used by multiple passengers?",
    answers: [
      "No, each passenger must have a separate belt",
      "Yes, for a short trip",
      "Yes, if no seats are left"
    ],
    why: "A belt is designed for one person only."
  }
},
{
  id: 167,
  question: "Waar mag een passagier zitten?",
  imageUrl: "",
  answers: [
    { text: "Alleen op een daarvoor bestemde zitplaats", isCorrect: true },
    { text: "Op een geïmproviseerde plek zonder gordel", isCorrect: false },
    { text: "In de laadruimte als de snelheid laag is", isCorrect: false }
  ],
  why: "Improviseren is verboden; zitplaats en gordel zijn vereist.",
  topic: "zitplaatsen",
  ruTranslation: {
    question: "Где может сидеть пассажир?",
    answers: [
      "Только на предназначенном сиденье",
      "На импровизированном месте без ремня",
      "В грузовом отсеке при низкой скорости"
    ],
    why: "Импровизированные места запрещены; требуется сиденье и ремень."
  },
  enTranslation: {
    question: "Where may a passenger sit?",
    answers: [
      "Only on an approved seat",
      "On an improvised spot without a belt",
      "In the cargo area at low speed"
    ],
    why: "Improvised seating is forbidden; seat and belt are required."
  }
},
{
  id: 168,
  question: "Wanneer moet een kind kleiner dan 1,35 m een kinderzitje gebruiken?",
  imageUrl: "",
  answers: [
    { text: "Altijd, met een goedgekeurd systeem", isCorrect: true },
    { text: "Alleen buiten de bebouwde kom", isCorrect: false },
    { text: "Alleen tijdens lange ritten", isCorrect: false }
  ],
  why: "Kinderbeveiligingssysteem is verplicht tot 1,35 m.",
  topic: "kinderzitje",
  ruTranslation: {
    question: "Когда ребёнок ниже 1,35 м должен сидеть в детском кресле?",
    answers: [
      "Всегда, в одобренной системе",
      "Только вне населённого пункта",
      "Только в дальних поездках"
    ],
    why: "Детская удерживающая система обязательна до 1,35 м."
  },
  enTranslation: {
    question: "When must a child under 1.35 m use a child seat?",
    answers: [
      "Always, in an approved system",
      "Only outside built-up areas",
      "Only on long trips"
    ],
    why: "Child restraints are mandatory up to 1.35 m."
  }
},
{
  id: 169,
  question: "Mag je een kinderzitje plaatsen bij een (geactiveerde) airbag?",
  imageUrl: "",
  answers: [
    { text: "Nee, het risico op ernstig letsel is groot", isCorrect: true },
    { text: "Ja, als het zitje vooruit is gericht", isCorrect: false },
    { text: "Ja, als het kind ouder dan 3 jaar is", isCorrect: false }
  ],
  why: "Een actieve airbag kan een kind zwaar verwonden.",
  topic: "kinderzitje",
  ruTranslation: {
    question: "Можно ли ставить детское кресло рядом с активной подушкой безопасности?",
    answers: [
      "Нет, риск тяжёлых травм высок",
      "Да, если кресло вперёд",
      "Да, если ребёнку больше 3 лет"
    ],
    why: "Активная подушка может сильно травмировать ребёнка."
  },
  enTranslation: {
    question: "May you place a child seat next to an active airbag?",
    answers: [
      "No, the risk of severe injury is high",
      "Yes, if the seat is forward-facing",
      "Yes, if the child is older than 3"
    ],
    why: "An active airbag can seriously injure a child."
  }
},
{
  id: 170,
  question: "Welke uitzonderingen bestaan er op het gebruik van een kinderzitje?",
  imageUrl: "",
  answers: [
    { text: "Incidenteel vervoer zonder beschikbaar zitje binnen redelijke afstand", isCorrect: true },
    { text: "Als het kind een jas draagt", isCorrect: false },
    { text: "Als de rit korter dan 5 minuten is", isCorrect: false }
  ],
  why: "De wet kent beperkte uitzonderingen voor incidentele ritten.",
  topic: "kinderzitje",
  ruTranslation: {
    question: "Какие исключения есть из правила об обязательном детском кресле?",
    answers: [
      "Случайная поездка без доступного кресла на разумном расстоянии",
      "Если ребёнок в куртке",
      "Если поездка короче 5 минут"
    ],
    why: "Закон допускает ограниченные исключения для редких поездок."
  },
  enTranslation: {
    question: "What are exceptions to the child seat requirement?",
    answers: [
      "Incidental transport without a seat reasonably available",
      "If the child wears a coat",
      "If the trip is under 5 minutes"
    ],
    why: "Law allows limited exceptions for incidental trips."
  }
},
{
  id: 171,
  question: "Waarom is de dode hoek gevaarlijk, vooral rechts van voertuigen?",
  imageUrl: "",
  answers: [
    { text: "Kwetsbare weggebruikers kunnen daar onzichtbaar zijn", isCorrect: true },
    { text: "Daar is de spiegel juist beter afgesteld", isCorrect: false },
    { text: "Bestuurders kijken daar nooit", isCorrect: false }
  ],
  why: "Rechts bevinden zich vaak fietsers/voetgangers buiten zicht.",
  topic: "dode_hoek",
  ruTranslation: {
    question: "Почему мёртвая зона опасна, особенно справа от авто?",
    answers: [
      "Уязвимые участники могут быть невидимы",
      "Там зеркало настроено лучше",
      "Водители туда никогда не смотрят"
    ],
    why: "Справа часто находятся велосипедисты/пешеходы вне обзора."
  },
  enTranslation: {
    question: "Why is the blind spot dangerous, especially on the right side?",
    answers: [
      "Vulnerable users may be invisible there",
      "Mirrors are better adjusted there",
      "Drivers never look there"
    ],
    why: "Cyclists/pedestrians often sit outside view on the right."
  }
},
{
  id: 172,
  question: "Wat is een klapband?",
  imageUrl: "",
  answers: [
    { text: "Een band die beschadigd raakt en abrupt leegloopt", isCorrect: true },
    { text: "Een band met weinig profiel", isCorrect: false },
    { text: "Een band die langzaam spanning verliest", isCorrect: false }
  ],
  why: "Plots drukverlies zorgt voor een 'klap'.",
  topic: "banden_klapband",
  ruTranslation: {
    question: "Что такое «klapband» (разрыв шины)?",
    answers: [
      "Шина повреждается и резко сдувается",
      "Шина с малым протектором",
      "Шина, медленно теряющая давление"
    ],
    why: "Внезапная потеря давления сопровождается хлопком."
  },
  enTranslation: {
    question: "What is a blowout (klapband)?",
    answers: [
      "A tire that gets damaged and deflates abruptly",
      "A tire with low tread",
      "A tire that slowly loses pressure"
    ],
    why: "Sudden pressure loss causes a 'blow'."
  }
},
{
  id: 173,
  question: "Wat is een belangrijke oorzaak van een klapband bij personenauto's?",
  imageUrl: "",
  answers: [
    { text: "Te lage bandenspanning die warmte opbouwt", isCorrect: true },
    { text: "Te veel profiel op de band", isCorrect: false },
    { text: "Rijden met cruisecontrol", isCorrect: false }
  ],
  why: "Lage spanning → vervorming → wrijving → warmte → zwakte.",
  topic: "banden_klapband",
  ruTranslation: {
    question: "Важная причина разрыва шины у легковых авто?",
    answers: [
      "Слишком низкое давление, вызывающее нагрев",
      "Слишком глубокий протектор",
      "Езда с круиз-контролем"
    ],
    why: "Низкое давление → деформация → трение → нагрев → слабость."
  },
  enTranslation: {
    question: "A key cause of a tire blowout in cars?",
    answers: [
      "Too low pressure causing heat build-up",
      "Too much tread depth",
      "Driving with cruise control"
    ],
    why: "Low pressure → deformation → friction → heat → weakness."
  }
},
{
  id: 174,
  question: "Wat moet je doen bij een klapband tijdens het rijden?",
  imageUrl: "",
  answers: [
    { text: "Stuur recht houden en rustig uitrollen/afremmen", isCorrect: true },
    { text: "Direct maximaal remmen", isCorrect: false },
    { text: "Snel naar de berm sturen", isCorrect: false }
  ],
  why: "Rustige correcties houden het voertuig stabiel.",
  topic: "banden_klapband",
  ruTranslation: {
    question: "Что делать при разрыве шины на ходу?",
    answers: [
      "Держать руль прямо и плавно замедляться",
      "Сразу тормозить максимально",
      "Резко уводить на обочину"
    ],
    why: "Плавные действия сохраняют устойчивость авто."
  },
  enTranslation: {
    question: "What should you do when a tire blows out while driving?",
    answers: [
      "Keep steering straight and decelerate gently",
      "Brake at maximum immediately",
      "Steer sharply to the shoulder"
    ],
    why: "Calm corrections keep the vehicle stable."
  }
},
{
  id: 175,
  question: "Waarom kan ongerepareerde steenslag tot roest leiden?",
  imageUrl: "",
  answers: [
    { text: "Beschadigde lak laat vocht en zout doordringen", isCorrect: true },
    { text: "De ruit verliest isolatie", isCorrect: false },
    { text: "De bandenspanning daalt sneller", isCorrect: false }
  ],
  why: "Open laklaag geeft corrosie een kans.",
  topic: "steenslag",
  ruTranslation: {
    question: "Почему неустранённые сколы могут привести к коррозии?",
    answers: [
      "Повреждённый лак пропускает влагу и соль",
      "Стекло теряет изоляцию",
      "Давление в шинах падает быстрее"
    ],
    why: "Оголённое покрытие позволяет начаться коррозии."
  },
  enTranslation: {
    question: "Why can unrepaired stone chips lead to rust?",
    answers: [
      "Damaged paint allows moisture and salt to penetrate",
      "The windshield loses insulation",
      "Tire pressure drops faster"
    ],
    why: "Exposed metal gives corrosion a chance."
  }
},
{
  id: 176,
  question: "Wat geldt voor de heupgordel volgens het advies?",
  imageUrl: "",
  answers: [
    { text: "Hij moet over de bovenbenen lopen, niet over de buik", isCorrect: true },
    { text: "Hij mag losjes over de buik liggen", isCorrect: false },
    { text: "Hij hoort boven de navel te liggen", isCorrect: false }
  ],
  why: "Een lage heupgordel verdeelt krachten veilig.",
  topic: "gordels",
  ruTranslation: {
    question: "Как правильно проходит поясная часть ремня?",
    answers: [
      "По верхней части бёдер, не по животу",
      "Можно свободно по животу",
      "Должна лежать выше пупка"
    ],
    why: "Низкое положение безопаснее распределяет нагрузку."
  },
  enTranslation: {
    question: "What is recommended for the lap belt?",
    answers: [
      "It should sit over the thighs, not the abdomen",
      "It may lie loosely over the belly",
      "It should be above the navel"
    ],
    why: "Low position distributes forces more safely."
  }
},
{
  id: 177,
  question: "Mag je een passagier vervoeren op een plek zonder gordel?",
  imageUrl: "",
  answers: [
    { text: "Nee, iedereen moet een gordel gebruiken", isCorrect: true },
    { text: "Ja, als de rit incidenteel is", isCorrect: false },
    { text: "Ja, als de snelheid laag is", isCorrect: false }
  ],
  why: "Zonder gordel vervoer van passagiers is niet toegestaan.",
  topic: "zitplaatsen_gordels",
  ruTranslation: {
    question: "Можно ли перевозить пассажира на месте без ремня?",
    answers: [
      "Нет, все должны использовать ремни",
      "Да, если поездка редкая",
      "Да, если скорость низкая"
    ],
    why: "Перевозка без ремня не допускается."
  },
  enTranslation: {
    question: "May you transport a passenger in a place without a belt?",
    answers: [
      "No, everyone must use a belt",
      "Yes, if the trip is incidental",
      "Yes, if speed is low"
    ],
    why: "Carrying passengers without a belt is not allowed."
  }
},
{
  id: 178,
  question: "Wat is verstandig bij winterse omstandigheden met kans op steenslag?",
  imageUrl: "",
  answers: [
    { text: "Extra afstand houden vanwege losrakende asfaltkorrels", isCorrect: true },
    { text: "Dichter achter de voorligger rijden voor beschutting", isCorrect: false },
    { text: "Alleen ruitenwissers vaker gebruiken", isCorrect: false }
  ],
  why: "Bij vorst kunnen korrels loskomen; afstand helpt.",
  topic: "steenslag_winter",
  ruTranslation: {
    question: "Что разумно делать зимой из-за риска сколов?",
    answers: [
      "Держать увеличенную дистанцию из-за отлетающих гранул асфальта",
      "Держаться ближе к впереди идущему для «укрытия»",
      "Просто чаще включать дворники"
    ],
    why: "При морозе частицы асфальта могут отрываться; помогает дистанция."
  },
  enTranslation: {
    question: "What is sensible in winter regarding stone-chip risk?",
    answers: [
      "Keep extra distance due to loose asphalt granules",
      "Follow closer for shelter",
      "Just use the wipers more often"
    ],
    why: "Frost can loosen asphalt; distance reduces hits."
  }
},
{
  id: 179,
  question: "Waarom is stilstaan in de dode hoek van een vrachtauto riskant?",
  imageUrl: "",
  answers: [
    { text: "De chauffeur ziet je niet en kan wegrijden of afslaan", isCorrect: true },
    { text: "Je remweg wordt langer", isCorrect: false },
    { text: "Je brandstofverbruik stijgt", isCorrect: false }
  ],
  why: "Onzichtbaarheid naast/voor de truck leidt tot aanrijdingsgevaar.",
  topic: "dode_hoek_gedrag",
  ruTranslation: {
    question: "Почему опасно останавливаться в мёртвой зоне грузовика?",
    answers: [
      "Водитель вас не видит и может тронуться/повернуть",
      "Ваш тормозной путь увеличится",
      "Расход топлива вырастет"
    ],
    why: "Невидимость рядом/впереди грузовика создаёт риск столкновения."
  },
  enTranslation: {
    question: "Why is stopping in a truck’s blind spot risky?",
    answers: [
      "The driver cannot see you and may move off or turn",
      "Your braking distance becomes longer",
      "Your fuel consumption increases"
    ],
    why: "Being invisible beside/in front of a truck risks a collision."
  }
},

// manouwers !!!!!!!!!!!!!!!!!!!!!!!!!!
{
  id: 180,
  question: "Wat is het verschil tussen voorbijgaan en inhalen?",
  imageUrl: "",
  answers: [
    { text: "Voorbijgaan is langs een stilstaand voertuig, inhalen langs een rijdend voertuig", isCorrect: true },
    { text: "Er is geen verschil, het betekent hetzelfde", isCorrect: false },
    { text: "Inhalen is alleen toegestaan binnen de bebouwde kom", isCorrect: false }
  ],
  why: "Een obstakel voorbijrijden heet ‘voorbijgaan’, een rijdend voertuig inhalen heet ‘inhalen’.",
  topic: "inhalen",
  ruTranslation: {
    question: "В чём разница между 'voorbijgaan' и 'inhalen'?",
    answers: [
      "‘Voorbijgaan’ — объезд стоящего авто, ‘inhalen’ — обгон движущегося",
      "Разницы нет, это одно и то же",
      "Обгон разрешён только в черте города"
    ],
    why: "Объезд стоящего — voorbijgaan, обгон движущегося — inhalen."
  },
  enTranslation: {
    question: "What is the difference between ‘voorbijgaan’ and ‘inhalen’?",
    answers: [
      "Passing a stationary vehicle vs overtaking a moving one",
      "No difference, same meaning",
      "Overtaking is only allowed in built-up areas"
    ],
    why: "Passing a standing vehicle is ‘voorbijgaan’; overtaking is ‘inhalen’."
  }
},
{
  id: 181,
  question: "Wanneer mag je niet inhalen?",
  imageUrl: "",
  answers: [
    { text: "Bij een inhaalverbod of doorgetrokken streep", isCorrect: true },
    { text: "Wanneer het zicht goed is", isCorrect: false },
    { text: "Wanneer de weg breed is", isCorrect: false }
  ],
  why: "Bij bord F1 of een doorgetrokken streep is inhalen verboden.",
  topic: "inhalen",
  ruTranslation: {
    question: "Когда обгон запрещён?",
    answers: [
      "При знаке «обгон запрещён» или сплошной линии",
      "Когда видимость хорошая",
      "Когда дорога широкая"
    ],
    why: "Обгон запрещён при знаке F1 или сплошной линии."
  },
  enTranslation: {
    question: "When is overtaking not allowed?",
    answers: [
      "At a no-overtaking sign or solid line",
      "When visibility is good",
      "When the road is wide"
    ],
    why: "No overtaking at sign F1 or solid line."
  }
},
{
  id: 182,
  question: "Wat bepaalt de lengte van de inhaalafstand?",
  imageUrl: "",
  answers: [
    { text: "Het snelheidsverschil tussen jou en het in te halen voertuig", isCorrect: true },
    { text: "De breedte van de weg", isCorrect: false },
    { text: "De weersomstandigheden", isCorrect: false }
  ],
  why: "Kleiner snelheidsverschil = langere inhaalafstand.",
  topic: "inhalen",
  ruTranslation: {
    question: "Что определяет длину дистанции для обгона?",
    answers: [
      "Разница в скорости между вами и обгоняемым",
      "Ширина дороги",
      "Погодные условия"
    ],
    why: "Чем меньше разница в скорости, тем длиннее дистанция для обгона."
  },
  enTranslation: {
    question: "What determines the length of the overtaking distance?",
    answers: [
      "The speed difference between you and the vehicle ahead",
      "The road width",
      "The weather conditions"
    ],
    why: "Smaller speed difference means a longer overtaking distance."
  }
},
{
  id: 183,
  question: "Wat moet je doen als je een inhaalmanoeuvre niet veilig kunt afronden?",
  imageUrl: "",
  answers: [
    { text: "De manoeuvre afbreken en teruggaan", isCorrect: true },
    { text: "Harder rijden om het te halen", isCorrect: false },
    { text: "Toeteren om de ander te waarschuwen", isCorrect: false }
  ],
  why: "Je mag geen risico nemen bij tegemoetkomend verkeer.",
  topic: "inhalen",
  ruTranslation: {
    question: "Что делать, если нельзя безопасно завершить обгон?",
    answers: [
      "Прекратить манёвр и вернуться в полосу",
      "Ускориться, чтобы успеть",
      "Посигналить для предупреждения"
    ],
    why: "Нельзя рисковать при встречном движении."
  },
  enTranslation: {
    question: "What should you do if you cannot complete the overtaking safely?",
    answers: [
      "Abort the manoeuvre and return to your lane",
      "Speed up to finish it",
      "Use the horn to warn others"
    ],
    why: "Never take risks with oncoming traffic."
  }
},
{
  id: 184,
  question: "Wanneer mag je vlak voor een voetgangersoversteekplaats inhalen?",
  imageUrl: "",
  answers: [
    { text: "Nooit", isCorrect: true },
    { text: "Alleen als er geen voetgangers zijn", isCorrect: false },
    { text: "Alleen bij groen licht", isCorrect: false }
  ],
  why: "Inhalen bij of vlak voor een VOP is verboden.",
  topic: "inhalen",
  ruTranslation: {
    question: "Можно ли обгонять прямо перед пешеходным переходом?",
    answers: [
      "Никогда",
      "Только если нет пешеходов",
      "Только на зелёный свет"
    ],
    why: "Обгон перед переходом запрещён."
  },
  enTranslation: {
    question: "May you overtake just before a pedestrian crossing?",
    answers: [
      "Never",
      "Only if no pedestrians are present",
      "Only with green light"
    ],
    why: "Overtaking near crossings is prohibited."
  }
},
{
  id: 185,
  question: "Wat moet je doen na het inhalen?",
  imageUrl: "",
  answers: [
    { text: "Zo snel mogelijk veilig terugkeren naar de eigen rijstrook", isCorrect: true },
    { text: "Direct voor het ingehaalde voertuig inschieten", isCorrect: false },
    { text: "Langs de andere rijstrook blijven rijden", isCorrect: false }
  ],
  why: "Je moet het ingehaalde voertuig niet ‘snijden’.",
  topic: "inhalen",
  ruTranslation: {
    question: "Что нужно сделать после обгона?",
    answers: [
      "Безопасно вернуться на свою полосу как можно скорее",
      "Резко перестроиться прямо перед обгоняемым",
      "Продолжать ехать по другой полосе"
    ],
    why: "Нельзя подрезать обгоняемый автомобиль."
  },
  enTranslation: {
    question: "What should you do after overtaking?",
    answers: [
      "Return safely to your lane as soon as possible",
      "Cut directly in front of the overtaken car",
      "Stay on the other lane"
    ],
    why: "Never cut off the overtaken vehicle."
  }
},
{
  id: 186,
  question: "Wat wordt bedoeld met bijzondere manoeuvres?",
  imageUrl: "",
  answers: [
    { text: "Handelingen waarbij je alle andere weggebruikers moet laten voorgaan", isCorrect: true },
    { text: "Alle manoeuvres bij hoge snelheid", isCorrect: false },
    { text: "Alleen het parkeren of keren", isCorrect: false }
  ],
  why: "Bij bijzondere manoeuvres geldt: iedereen gaat voor.",
  topic: "bijzondere_manoeuvres",
  ruTranslation: {
    question: "Что означает 'особые манёвры'?",
    answers: [
      "Действия, при которых нужно уступить всем участникам движения",
      "Манёвры только на высокой скорости",
      "Только парковка или разворот"
    ],
    why: "При особых манёврах уступают всем."
  },
  enTranslation: {
    question: "What are 'special manoeuvres'?",
    answers: [
      "Actions where you must yield to all other road users",
      "All high-speed manoeuvres",
      "Only parking or turning"
    ],
    why: "During special manoeuvres you must let everyone go first."
  }
},
{
  id: 187,
  question: "Welke manoeuvre hoort bij bijzondere manoeuvres?",
  imageUrl: "",
  answers: [
    { text: "Achteruitrijden", isCorrect: true },
    { text: "Rijden op de snelweg", isCorrect: false },
    { text: "Afremmen voor een bocht", isCorrect: false }
  ],
  why: "Achteruitrijden valt onder bijzondere manoeuvres.",
  topic: "bijzondere_manoeuvres",
  ruTranslation: {
    question: "Какой манёвр считается особым?",
    answers: [
      "Движение задним ходом",
      "Движение по автомагистрали",
      "Замедление перед поворотом"
    ],
    why: "Движение задним ходом относится к особым манёврам."
  },
  enTranslation: {
    question: "Which manoeuvre is considered a special manoeuvre?",
    answers: [
      "Reversing",
      "Driving on the motorway",
      "Braking before a bend"
    ],
    why: "Reversing is a special manoeuvre."
  }
},
{
  id: 188,
  question: "Wat moet je doen bij het wegrijden uit een parkeervak?",
  imageUrl: "",
  answers: [
    { text: "Alle weggebruikers voor laten gaan", isCorrect: true },
    { text: "Snel invoegen zonder richting aan te geven", isCorrect: false },
    { text: "Eerst claxoneren om te waarschuwen", isCorrect: false }
  ],
  why: "Wegrijden is een bijzondere manoeuvre, dus iedereen heeft voorrang.",
  topic: "wegrijden",
  ruTranslation: {
    question: "Что нужно сделать, выезжая из парковочного места?",
    answers: [
      "Уступить всем участникам движения",
      "Быстро выехать без сигнала поворота",
      "Посигналить для предупреждения"
    ],
    why: "Выезд — особый манёвр, уступают всем."
  },
  enTranslation: {
    question: "What should you do when driving off from a parking space?",
    answers: [
      "Yield to all road users",
      "Merge quickly without signaling",
      "Honk to warn others"
    ],
    why: "Driving off is a special manoeuvre — everyone else has priority."
  }
},
{
  id: 189,
  question: "Wat moet je doen voordat je wegrijdt?",
  imageUrl: "",
  answers: [
    { text: "Richting aangeven en controleren of je niemand hindert", isCorrect: true },
    { text: "Altijd eerst toeteren", isCorrect: false },
    { text: "Eerst versnellen om snel weg te zijn", isCorrect: false }
  ],
  why: "Voordat je wegrijdt, moet je richting aangeven en goed kijken.",
  topic: "wegrijden",
  ruTranslation: {
    question: "Что нужно сделать перед началом движения?",
    answers: [
      "Включить поворотник и убедиться, что никому не мешаешь",
      "Сначала подать звуковой сигнал",
      "Сразу ускориться"
    ],
    why: "Перед выездом нужно включить сигнал и осмотреться."
  },
  enTranslation: {
    question: "What must you do before driving away?",
    answers: [
      "Signal and check you do not hinder anyone",
      "Always honk first",
      "Accelerate immediately"
    ],
    why: "Before moving off, signal and check surroundings."
  }
},
{
  id: 190,
  question: "Wat betekent voorsorteren?",
  imageUrl: "",
  answers: [
    { text: "Op tijd de juiste positie op de weg innemen om af te slaan", isCorrect: true },
    { text: "Altijd rechts blijven rijden", isCorrect: false },
    { text: "Langzamer rijden dan toegestaan", isCorrect: false }
  ],
  why: "Voorsorteren is voorbereiden op een afslag.",
  topic: "af_slaan_voorsorteren",
  ruTranslation: {
    question: "Что значит 'voorsorteren'?",
    answers: [
      "Заранее занять правильное положение на дороге для поворота",
      "Всегда держаться правее",
      "Ехать медленнее разрешённого"
    ],
    why: "Voorsorteren — подготовка к повороту."
  },
  enTranslation: {
    question: "What does ‘voorsorteren’ mean?",
    answers: [
      "Taking the correct position early to turn",
      "Always keeping to the right",
      "Driving slower than allowed"
    ],
    why: "Voorsorteren means preparing for a turn."
  }
},

{
  id: 191,
  question: "Wanneer heet het 'voorbijgaan' en niet 'inhalen'?",
  imageUrl: "",
  answers: [
    { text: "Als je langs een stilstaand voertuig rijdt", isCorrect: true },
    { text: "Als je op de linker rijstrook rijdt", isCorrect: false },
    { text: "Als je sneller rijdt dan het overige verkeer", isCorrect: false }
  ],
  why: "Langs een stilstaand obstakel = voorbijgaan; langs een rijdend voertuig = inhalen.",
  topic: "inhalen_basis",
  ruTranslation: {
    question: "Когда это называется 'voorbijgaan', а не 'inhalen'?",
    answers: [
      "Когда объезжаешь стоящее транспортное средство",
      "Когда едешь по левой полосе",
      "Когда едешь быстрее общего потока"
    ],
    why: "Объезд стоящего — voorbijgaan; обгон движущегося — inhalen."
  },
  enTranslation: {
    question: "When is it called ‘passing by’ (voorbijgaan) rather than ‘overtaking’ (inhalen)?",
    answers: [
      "When you drive past a stationary vehicle",
      "When you drive on the left lane",
      "When you drive faster than the traffic flow"
    ],
    why: "Past a stationary obstacle = passing; past a moving vehicle = overtaking."
  }
},
{
  id: 192,
  question: "Wat bepaalt vooral hoe lang de inhaalafstand is?",
  imageUrl: "",
  answers: [
    { text: "Het snelheidsverschil met het in te halen voertuig", isCorrect: true },
    { text: "De breedte van de vluchtstrook", isCorrect: false },
    { text: "De kleur van de auto die je inhaalt", isCorrect: false }
  ],
  why: "Hoe kleiner het snelheidsverschil, hoe langer de inhaalafstand.",
  topic: "inhalen_afstand",
  ruTranslation: {
    question: "Что главным образом определяет длину дистанции обгона?",
    answers: [
      "Разница скоростей с обгоняемой машиной",
      "Ширина аварийной полосы",
      "Цвет обгоняемого автомобиля"
    ],
    why: "Чем меньше разница скоростей, тем длиннее дистанция обгона."
  },
  enTranslation: {
    question: "What mainly determines the length of the overtaking distance?",
    answers: [
      "The speed difference with the vehicle you overtake",
      "The width of the hard shoulder",
      "The colour of the vehicle being overtaken"
    ],
    why: "Smaller speed difference = longer overtaking distance."
  }
},
{
  id: 193,
  question: "Wanneer moet je een begonnen inhaalmanoeuvre afbreken?",
  imageUrl: "",
  answers: [
    { text: "Als je het niet veilig vóór tegemoetkomend verkeer kunt afronden", isCorrect: true },
    { text: "Als je al naast het andere voertuig rijdt", isCorrect: false },
    { text: "Als je richtingaanwijzer uitvalt", isCorrect: false }
  ],
  why: "Kun je niet tijdig invoegen vóór tegemoetkomend verkeer, dan breek je af.",
  topic: "inhalen_veiligheid",
  ruTranslation: {
    question: "Когда нужно прервать начатый обгон?",
    answers: [
      "Если нельзя безопасно завершить до встречного потока",
      "Если уже едешь рядом с другим авто",
      "Если перестал работать поворотник"
    ],
    why: "Если не успеваешь безопасно вернуться — прекращай манёвр."
  },
  enTranslation: {
    question: "When must you abort an overtaking manoeuvre?",
    answers: [
      "When you cannot finish safely before oncoming traffic",
      "When you are already alongside the other vehicle",
      "When your indicator stops working"
    ],
    why: "If you cannot merge back safely in time, abort."
  }
},
{
  id: 194,
  question: "Wanneer mag je NIET inhalen volgens de regels?",
  imageUrl: "",
  answers: [
    { text: "Bij een doorgetrokken streep die je zou moeten overschrijden", isCorrect: true },
    { text: "Op een brede, overzichtelijke rechte weg", isCorrect: false },
    { text: "Als de zon laag staat", isCorrect: false }
  ],
  why: "Een doorgetrokken streep aan jouw kant mag je niet overschrijden.",
  topic: "inhalen_verboden",
  ruTranslation: {
    question: "Когда обгон ЗАПРЕЩЁН по правилам?",
    answers: [
      "При сплошной линии, которую придётся пересечь",
      "На широкой прямой дороге с хорошим обзором",
      "Когда низкое солнце"
    ],
    why: "Сплошную линию со своей стороны пересекать нельзя."
  },
  enTranslation: {
    question: "When is overtaking NOT allowed according to the rules?",
    answers: [
      "When you would have to cross a solid line on your side",
      "On a wide, straight, visible road",
      "When the sun is low"
    ],
    why: "You may not cross a solid line on your side."
  }
},
{
  id: 195,
  question: "Mag je vlak vóór of op een voetgangersoversteekplaats (VOP) inhalen?",
  imageUrl: "",
  answers: [
    { text: "Nee, inhalen bij of vlak vóór een VOP is verboden", isCorrect: true },
    { text: "Ja, als er geen voetgangers zijn", isCorrect: false },
    { text: "Ja, als je links voldoende ruimte hebt", isCorrect: false }
  ],
  why: "Bij of vlak vóór een VOP mag je geen inhaalmanoeuvre starten.",
  topic: "inhalen_verboden",
  ruTranslation: {
    question: "Можно ли обгонять прямо перед или на пешеходном переходе?",
    answers: [
      "Нет, обгон там запрещён",
      "Да, если пешеходов нет",
      "Да, если слева достаточно места"
    ],
    why: "Перед/на переходе нельзя начинать обгон."
  },
  enTranslation: {
    question: "May you overtake just before or on a pedestrian crossing?",
    answers: [
      "No, overtaking there is prohibited",
      "Yes, if no pedestrians are present",
      "Yes, if there is space on the left"
    ],
    why: "You must not start overtaking at or just before a crossing."
  }
},
{
  id: 196,
  question: "Welke situaties worden in de tekst genoemd als extra risicovol om in te halen?",
  imageUrl: "",
  answers: [
    { text: "Op een kruispunt, vóór een helling of voor een onoverzichtelijke bocht", isCorrect: true },
    { text: "Op een autosnelweg met drie rijstroken", isCorrect: false },
    { text: "Op een rotonde", isCorrect: false }
  ],
  why: "Deze plekken beperken zicht of ruimte en maken inhalen gevaarlijk.",
  topic: "inhalen_gevaren",
  ruTranslation: {
    question: "Какие ситуации названы особо опасными для обгона?",
    answers: [
      "На перекрёстке, перед подъёмом или перед «слепым» поворотом",
      "На автостраде с тремя полосами",
      "На кольцевой развязке"
    ],
    why: "Там ограничен обзор/пространство, обгон опасен."
  },
  enTranslation: {
    question: "Which situations are mentioned as extra risky for overtaking?",
    answers: [
      "At a junction, before a hill, or before a blind bend",
      "On a motorway with three lanes",
      "On a roundabout"
    ],
    why: "These locations limit sight/space and make overtaking dangerous."
  }
},
{
  id: 197,
  question: "Wat doe je bij afronden van de inhaalmanoeuvre?",
  imageUrl: "",
  answers: [
    { text: "Kort richting aangeven en terug naar je eigen weggedeelte wanneer je de voorzijde van de ingehaalde auto ziet", isCorrect: true },
    { text: "Onmiddellijk naar rechts sturen zodra je voorbij bent", isCorrect: false },
    { text: "Lang links blijven om afstand te houden", isCorrect: false }
  ],
  why: "Pas terug wanneer je de voorzijde van de ingehaalde auto in je binnenspiegel ziet.",
  topic: "inhalen_afronden",
  ruTranslation: {
    question: "Как правильно завершить обгон?",
    answers: [
      "Коротко включить сигнал и вернуться, когда видишь передок обгоняемой в зеркале",
      "Сразу уйти вправо, как только обогнал",
      "Оставаться слева подольше"
    ],
    why: "Возвращайся, когда видишь переднюю часть обгоняемого в зеркале."
  },
  enTranslation: {
    question: "How do you properly finish an overtaking manoeuvre?",
    answers: [
      "Signal briefly and return when you see the front of the overtaken car in your mirror",
      "Immediately steer right once past",
      "Stay left longer to keep distance"
    ],
    why: "Return only when you can see the vehicle’s front in your interior mirror."
  }
},
{
  id: 198,
  question: "Wat is een 'bijzondere manoeuvre' volgens de opsomming?",
  imageUrl: "",
  answers: [
    { text: "Wegrijden, keren of achteruitrijden", isCorrect: true },
    { text: "Remmen voor een file", isCorrect: false },
    { text: "Snelheid aanpassen aan het weer", isCorrect: false }
  ],
  why: "De lijst noemt o.a. wegrijden, keren, achteruitrijden, uitrit oprijden, van strook wisselen.",
  topic: "bijzondere_manoeuvres",
  ruTranslation: {
    question: "Что относится к 'особым манёврам' по списку?",
    answers: [
      "Начало движения, разворот или движение задним ходом",
      "Торможение перед пробкой",
      "Адаптация скорости к погоде"
    ],
    why: "В списке: выезд, разворот, задний ход, выезд с/на проезжую, смена полосы."
  },
  enTranslation: {
    question: "Which is a ‘special manoeuvre’ according to the list?",
    answers: [
      "Moving off, turning around, or reversing",
      "Braking for a traffic jam",
      "Adjusting speed to the weather"
    ],
    why: "The list includes moving off, turning, reversing, entering/leaving the carriageway, lane change."
  }
},
{
  id: 199,
  question: "Wat is de hoofdregel tijdens een bijzondere manoeuvre?",
  imageUrl: "",
  answers: [
    { text: "Je laat alle overige weggebruikers voorgaan", isCorrect: true },
    { text: "Je hebt voorrang als je richting aangeeft", isCorrect: false },
    { text: "Je mag altijd stapvoets blijven rijden", isCorrect: false }
  ],
  why: "Bijzondere manoeuvre = iedereen voor laten gaan, ook voetgangers.",
  topic: "bijzondere_manoeuvres",
  ruTranslation: {
    question: "Главное правило при особом манёвре?",
    answers: [
      "Уступаешь всем остальным участникам движения",
      "Имеешь приоритет, если включил поворотник",
      "Всегда можно ехать тихоходом"
    ],
    why: "При особом манёвре уступают всем (включая пешеходов)."
  },
  enTranslation: {
    question: "What is the main rule during a special manoeuvre?",
    answers: [
      "You must let all other road users go first",
      "You have priority if you indicate",
      "You may always proceed at walking pace"
    ],
    why: "During special manoeuvres you yield to everyone, including pedestrians."
  }
},
{
  id: 200,
  question: "Wat moet je doen bij wegrijden uit een parkeervak?",
  imageUrl: "",
  answers: [
    { text: "Richting aangeven en alleen wegrijden als je niemand hindert", isCorrect: true },
    { text: "Snel optrekken om tussen het verkeer te komen", isCorrect: false },
    { text: "Eerst claxoneren om te waarschuwen", isCorrect: false }
  ],
  why: "Wegrijden is een bijzondere manoeuvre: kijk goed en hinder niemand.",
  topic: "wegrijden",
  ruTranslation: {
    question: "Что делать, выезжая с парковочного места?",
    answers: [
      "Подать сигнал и выезжать, только если никому не мешаешь",
      "Резко ускориться, чтобы втиснуться в поток",
      "Сначала посигналить"
    ],
    why: "Выезд — особый манёвр: нужно убедиться, что не мешаешь."
  },
  enTranslation: {
    question: "What should you do when moving off from a parking bay?",
    answers: [
      "Indicate and only move if you do not hinder anyone",
      "Accelerate quickly to merge",
      "Honk first to warn others"
    ],
    why: "Moving off is a special manoeuvre: check and avoid hindrance."
  }
},
{
  id: 201,
  question: "Waar sorteer je links voor op een weg met tegengesteld verkeer?",
  imageUrl: "",
  answers: [
    { text: "Zoveel mogelijk tegen de wegas", isCorrect: true },
    { text: "Midden op jouw rijstrook", isCorrect: false },
    { text: "Zoveel mogelijk rechts", isCorrect: false }
  ],
  why: "Links voorsorteren: zo dicht mogelijk bij de as van de weg.",
  topic: "voorsorteren_links",
  ruTranslation: {
    question: "Где занимать место при подготовке к левому повороту на двусторонней дороге?",
    answers: [
      "Как можно ближе к осевой линии",
      "По центру своей полосы",
      "Как можно правее"
    ],
    why: "Для левого поворота становись ближе к осевой."
  },
  enTranslation: {
    question: "Where do you position for a left turn on a two-way road?",
    answers: [
      "As close to the road centre line as possible",
      "In the middle of your lane",
      "As far right as possible"
    ],
    why: "For left turns you pre-position near the centre line."
  }
},
{
  id: 202,
  question: "Hoe sorteer je rechts voor op een gewone weg?",
  imageUrl: "",
  answers: [
    { text: "Zoveel mogelijk rechts tegen stoep of berm", isCorrect: true },
    { text: "Dicht bij de wegas", isCorrect: false },
    { text: "Midden op de rijbaan", isCorrect: false }
  ],
  why: "Rechts voorsorteren: zo veel mogelijk rechts.",
  topic: "voorsorteren_rechts",
  ruTranslation: {
    question: "Как занимать позицию для правого поворота на обычной дороге?",
    answers: [
      "Как можно правее у бордюра/обочины",
      "Ближе к осевой линии",
      "По центру проезжей части"
    ],
    why: "Для правого поворота становись как можно правее."
  },
  enTranslation: {
    question: "How do you position for a right turn on a normal road?",
    answers: [
      "As far right as possible near the curb or verge",
      "Close to the road centre line",
      "In the middle of the carriageway"
    ],
    why: "For right turns, keep as far right as possible."
  }
},
{
  id: 203,
  question: "Hoe sorteer je links voor op een eenrichtingsweg of gescheiden rijbanen?",
  imageUrl: "",
  answers: [
    { text: "Zoveel mogelijk links", isCorrect: true },
    { text: "Altijd rechts blijven", isCorrect: false },
    { text: "Altijd precies in het midden", isCorrect: false }
  ],
  why: "Bij eenrichtingswegen/gescheiden rijbanen: links voorsorteren = links houden.",
  topic: "voorsorteren_links",
  ruTranslation: {
    question: "Как занимать позицию для левого поворота на односторонней или дороге с разделением?",
    answers: [
      "Как можно левее",
      "Всегда держаться правее",
      "Всегда строго по центру"
    ],
    why: "На односторонней/с разделением — становись слева."
  },
  enTranslation: {
    question: "How do you position for a left turn on a one-way or divided road?",
    answers: [
      "As far left as possible",
      "Always keep right",
      "Always exactly in the centre"
    ],
    why: "On one-way/divided roads you pre-position left."
  }
},
{
  id: 204,
  question: "Hoe positioneer je op een weg met fietsstrook met doorgetrokken streep (rechtsaf)?",
  imageUrl: "",
  answers: [
    { text: "Zoveel mogelijk tegen de streep, zonder de fietsstrook te gebruiken", isCorrect: true },
    { text: "Over de fietsstrook rijden om voor te sorteren", isCorrect: false },
    { text: "Halverwege tussen streep en as", isCorrect: false }
  ],
  why: "Bij doorgetrokken streep mag je de fietsstrook niet gebruiken.",
  topic: "voorsorteren_fietsstrook",
  ruTranslation: {
    question: "Как занять позицию на дороге с велополосой и сплошной линией (для поворота направо)?",
    answers: [
      "Как можно ближе к линии, не заезжая на велополосу",
      "Ехать по велополосе для перестроения",
      "Стать посередине между линией и осевой"
    ],
    why: "При сплошной линии пользоваться велополосой нельзя."
  },
  enTranslation: {
    question: "How do you position on a road with a cycle lane and solid line (turning right)?",
    answers: [
      "As close to the line as possible without using the cycle lane",
      "Drive on the cycle lane to pre-position",
      "Halfway between line and centre"
    ],
    why: "A solid line means you cannot use the cycle lane."
  }
},
{
  id: 205,
  question: "Hoe positioneer je op een weg met fietsstrook met onderbroken streep (rechtsaf)?",
  imageUrl: "",
  answers: [
    { text: "Op de fietsstrook als je (snor)fietsers niet hindert, anders ernaast", isCorrect: true },
    { text: "Nooit op de fietsstrook", isCorrect: false },
    { text: "Altijd midden op de rijbaan", isCorrect: false }
  ],
  why: "Bij onderbroken streep mag je voorsorteren op de fietsstrook mits je fietsers niet hindert.",
  topic: "voorsorteren_fietsstrook",
  ruTranslation: {
    question: "Как занять позицию на дороге с велополосой и прерывистой линией (направо)?",
    answers: [
      "На велополосе, если не мешаешь (мопед)велосипедистам, иначе рядом",
      "Никогда не заезжать на велополосу",
      "Всегда по центру проезжей"
    ],
    why: "При прерывистой можно перестроиться на велополосу, не мешая велосипедистам."
  },
  enTranslation: {
    question: "How do you position on a road with a cycle lane and broken line (turning right)?",
    answers: [
      "On the cycle lane if you do not hinder (moped)cyclists, otherwise next to it",
      "Never on the cycle lane",
      "Always in the middle of the carriageway"
    ],
    why: "A broken line allows pre-positioning on the cycle lane if you don’t hinder cyclists."
  }
},
{
  id: 206,
  question: "Waarom moet je voorsorteren volgens de tekst?",
  imageUrl: "",
  answers: [
    { text: "Om de doorstroming te bevorderen en onveilige situaties te vermijden", isCorrect: true },
    { text: "Alleen om sneller weg te rijden bij groen", isCorrect: false },
    { text: "Om minder richting aan te hoeven geven", isCorrect: false }
  ],
  why: "Juist voorsorteren helpt doorstroming en veiligheid.",
  topic: "voorsorteren_nut",
  ruTranslation: {
    question: "Зачем нужно предварительное перестроение (voorsorteren)?",
    answers: [
      "Чтобы улучшить поток и избежать опасных ситуаций",
      "Только чтобы быстрее тронуться на зелёный",
      "Чтобы реже включать поворотник"
    ],
    why: "Правильная позиция улучшает поток и безопасность."
  },
  enTranslation: {
    question: "Why should you pre-position (voorsorteren) according to the text?",
    answers: [
      "To improve traffic flow and avoid unsafe situations",
      "Only to start faster at green",
      "To indicate less often"
    ],
    why: "Correct positioning supports flow and safety."
  }
},
{
  id: 207,
  question: "Je wilt inhalen maar er kan tegemoetkomend verkeer verschijnen. Wat doe je eerst?",
  imageUrl: "",
  answers: [
    { text: "Snelheid en afstand van tegemoetkomend verkeer goed inschatten", isCorrect: true },
    { text: "Direct naar de andere rijstrook sturen", isCorrect: false },
    { text: "Toeteren zodat de ander langzamer rijdt", isCorrect: false }
  ],
  why: "Je moet vooraf beoordelen of de inhaalafstand veilig is.",
  topic: "inhalen_tegenligger",
  ruTranslation: {
    question: "Ты хочешь обогнать, но возможно появится встречный. Что сначала сделать?",
    answers: [
      "Точно оценить скорость и расстояние встречного",
      "Сразу выехать на встречную полосу",
      "Посигналить, чтобы другой сбросил скорость"
    ],
    why: "Сначала оцени безопасную дистанцию обгона."
  },
  enTranslation: {
    question: "You want to overtake but oncoming traffic may appear. What do you do first?",
    answers: [
      "Estimate the speed and distance of oncoming traffic carefully",
      "Immediately steer into the opposite lane",
      "Honk so the other slows down"
    ],
    why: "Assess whether the overtaking distance is safe beforehand."
  }
},
{
  id: 208,
  question: "Wanneer mag je een inhaalmanoeuvre starten ten opzichte van bord F1 (inhaalverbod)?",
  imageUrl: "",
  answers: [
    { text: "Pas ná het einde van de verbodszone, niet vlak vóór het bord", isCorrect: true },
    { text: "Vlak vóór het bord als je al sneller rijdt", isCorrect: false },
    { text: "Altijd, zolang je richting aangeeft", isCorrect: false }
  ],
  why: "Je mag niet vlak vóór een inhaalverbodbord met inhalen beginnen.",
  topic: "inhalen_verbodsbord",
  ruTranslation: {
    question: "Когда можно начать обгон относительно знака F1 «обгон запрещён»?",
    answers: [
      "Только после окончания зоны запрета, не прямо перед знаком",
      "Прямо перед знаком, если уже быстрее едешь",
      "Всегда можно, если включил поворотник"
    ],
    why: "Нельзя начинать обгон непосредственно перед знаком запрета."
  },
  enTranslation: {
    question: "When may you start overtaking with respect to sign F1 (no overtaking)?",
    answers: [
      "Only after the end of the restriction, not just before the sign",
      "Just before the sign if you already drive faster",
      "Always, as long as you indicate"
    ],
    why: "You may not start an overtaking manoeuvre right before the sign."
  }
},
{
  id: 209,
  question: "Wat is verstandig als een ander voertuig jou inhaalt?",
  imageUrl: "",
  answers: [
    { text: "Snelheid en positie zo houden dat inhalen veilig kan", isCorrect: true },
    { text: "Versnellen om te voorkomen dat hij voorbijgaat", isCorrect: false },
    { text: "Naar links sturen om ruimte te nemen", isCorrect: false }
  ],
  why: "Help mee aan een veilige afronding; niet versnellen of hinderen.",
  topic: "inhalen_door_anderen",
  ruTranslation: {
    question: "Что разумно делать, когда тебя обгоняют?",
    answers: [
      "Сохранять скорость и позицию, чтобы обгон прошёл безопасно",
      "Ускориться, чтобы не дать обогнать",
      "Сместиться влево, заняв место"
    ],
    why: "Помоги безопасному завершению — не мешай и не ускоряйся."
  },
  enTranslation: {
    question: "What is sensible when another vehicle overtakes you?",
    answers: [
      "Maintain speed and position so it can be done safely",
      "Accelerate to prevent the pass",
      "Steer left to take space"
    ],
    why: "Facilitate a safe completion; don’t accelerate or hinder."
  }
},
{
  id: 210,
  question: "Waarom is ‘inhalen voor een helling’ vaak verboden/onveilig?",
  imageUrl: "",
  answers: [
    { text: "Omdat het zicht op tegemoetkomend verkeer beperkt is", isCorrect: true },
    { text: "Omdat voertuigen bergop altijd langzamer rijden", isCorrect: false },
    { text: "Omdat de weg breder wordt", isCorrect: false }
  ],
  why: "Voor een helling is het zicht beperkt; risico op botsing is groter.",
  topic: "inhalen_gevaren",
  ruTranslation: {
    question: "Почему обгон перед подъёмом часто запрещён/опасен?",
    answers: [
      "Потому что ограничен обзор встречного движения",
      "Потому что на подъёме машины всегда медленнее",
      "Потому что дорога шире"
    ],
    why: "Перед подъёмом обзор ограничен — выше риск столкновения."
  },
  enTranslation: {
    question: "Why is ‘overtaking before a hill’ often prohibited/unsafe?",
    answers: [
      "Because visibility of oncoming traffic is limited",
      "Because vehicles always drive slower uphill",
      "Because the road becomes wider"
    ],
    why: "Before a hill your view is limited; collision risk increases."
  }
},

{
  id: 211,
  question: "Wanneer moet een benzine- of elektrische personenauto (in gebruik na 1 januari 2005) voor het eerst APK gekeurd worden?",
  imageUrl: "",
  answers: [
    { text: "Na 4 jaar", isCorrect: true },
    { text: "Na 3 jaar", isCorrect: false },
    { text: "Na 2 jaar", isCorrect: false }
  ],
  why: "Schema voor benzine/elektrisch na 01-01-2005: eerst na 4 jaar, daarna 2-2-1-1.",
  topic: "apk",
  ruTranslation: {
    question: "Когда впервые проходить APK для бензинового/электро авто, выпущенного после 01.01.2005?",
    answers: ["Через 4 года", "Через 3 года", "Через 2 года"],
    why: "Для бензин/электро после 01.01.2005: сначала через 4 года, затем 2-2-1-1."
  },
  enTranslation: {
    question: "When is the first APK inspection for a petrol/electric car (in use after 1 Jan 2005)?",
    answers: ["After 4 years", "After 3 years", "After 2 years"],
    why: "Scheme for petrol/electric after 01-01-2005: first after 4 years, then 2-2-1-1."
  }
},
{
  id: 212,
  question: "Wat is het verdere APK-schema voor benzine/elektrisch na de eerste keuring (na 4 jaar)?",
  imageUrl: "",
  answers: [
    { text: "Na 2 jaar opnieuw, daarna nog eens 2 jaar, vervolgens jaarlijks", isCorrect: true },
    { text: "Elk jaar meteen", isCorrect: false },
    { text: "Nooit meer nodig", isCorrect: false }
  ],
  why: "Patroon: 4, 2, 2, 1, 1, …",
  topic: "apk",
  ruTranslation: {
    question: "Какой дальнейший график APK для бензин/электро после первой проверки (через 4 года)?",
    answers: ["Через 2 года, потом ещё через 2, затем ежегодно", "Сразу ежегодно", "Больше не нужно"],
    why: "Последовательность: 4, 2, 2, 1, 1…"
  },
  enTranslation: {
    question: "What is the subsequent APK scheme for petrol/electric after the first (at 4 years)?",
    answers: ["Again after 2 years, then 2 years, then yearly", "Immediately yearly", "Never again"],
    why: "Pattern: 4, 2, 2, 1, 1…"
  }
},
{
  id: 213,
  question: "Wanneer moet een diesel-, gasauto of een auto (benzine) van vóór 1 januari 2005 voor het eerst APK gekeurd worden?",
  imageUrl: "",
  answers: [
    { text: "Na 3 jaar, daarna jaarlijks", isCorrect: true },
    { text: "Na 4 jaar, daarna 2-jaarlijks", isCorrect: false },
    { text: "Na 2 jaar, daarna jaarlijks", isCorrect: false }
  ],
  why: "Voor diesel/gas en oudere benzine: eerste na 3 jaar, daarna elk jaar.",
  topic: "apk",
  ruTranslation: {
    question: "Когда впервые проходить APK для дизель/газ, либо бензин до 01.01.2005?",
    answers: ["Через 3 года, затем ежегодно", "Через 4 года, затем раз в 2 года", "Через 2 года, затем ежегодно"],
    why: "Для дизеля/газа и старых бензиновых: сначала через 3 года, потом ежегодно."
  },
  enTranslation: {
    question: "When is the first APK for diesel/gas cars or petrol cars from before 1 Jan 2005?",
    answers: ["After 3 years, then yearly", "After 4 years, then every 2 years", "After 2 years, then yearly"],
    why: "Diesel/gas & older petrol: first after 3 years, then every year."
  }
},
{
  id: 214,
  question: "Mag je rijden zonder geldige APK?",
  imageUrl: "",
  answers: [
    { text: "Nee, je kunt een boete krijgen en je mag niet rijden", isCorrect: true },
    { text: "Ja, zolang je naar de keuring rijdt", isCorrect: false },
    { text: "Ja, als je verzekering dit dekt", isCorrect: false }
  ],
  why: "Rijden zonder geldige APK is verboden; RDW/politie kan beboeten.",
  topic: "apk",
  ruTranslation: {
    question: "Можно ли ездить без действующей APK?",
    answers: ["Нет, это штраф и ездить нельзя", "Да, если едешь на техосмотр", "Да, если страховая покрывает"],
    why: "Езда без APK запрещена, возможен штраф."
  },
  enTranslation: {
    question: "May you drive without a valid APK?",
    answers: ["No, you can be fined and may not drive", "Yes, if heading to inspection", "Yes, if insurance covers it"],
    why: "Driving without valid APK is prohibited; fines apply."
  }
},
{
  id: 215,
  question: "Wat betekent een rood oliedruk-lampje tijdens het rijden?",
  imageUrl: "",
  answers: [
    { text: "Oliedruk/olieniveau probleem: direct stoppen om motorschade te voorkomen", isCorrect: true },
    { text: "Alleen dat je olie binnenkort moet verversen", isCorrect: false },
    { text: "Dat de ruitenwisser geen vloeistof heeft", isCorrect: false }
  ],
  why: "Rood = ernstig. Oliedruk: direct veilig stoppen.",
  topic: "waarschuwingslampjes_rood",
  ruTranslation: {
    question: "Что означает красная лампа масла во время движения?",
    answers: ["Проблема с давлением/уровнем масла: срочно остановиться", "Скоро менять масло", "Нет жидкости в омывателе"],
    why: "Красный = серьёзно: остановиться, чтобы избежать повреждений."
  },
  enTranslation: {
    question: "What does a red oil pressure light mean while driving?",
    answers: ["Oil pressure/level issue: stop immediately to avoid engine damage", "Just change oil soon", "Washer fluid empty"],
    why: "Red = serious. Stop safely."
  }
},
{
  id: 216,
  question: "Een rood (P) lampje brandt tijdens het rijden. Wat betekent dit meestal?",
  imageUrl: "",
  answers: [
    { text: "Handrem is ingeschakeld of probleem met remsysteem", isCorrect: true },
    { text: "ABS is actief", isCorrect: false },
    { text: "Cruisecontrol staat aan", isCorrect: false }
  ],
  why: "Rood rem-pictogram: handrem aan of remsysteemstoring.",
  topic: "waarschuwingslampjes_rood",
  ruTranslation: {
    question: "Горит красная лампа (P) во время движения. Что это обычно?",
    answers: ["Ручник включён или неисправность тормозов", "Работает ABS", "Включён круиз-контроль"],
    why: "Красный символ тормозов: ручник/неисправность системы."
  },
  enTranslation: {
    question: "A red (P) light is on while driving. What does this usually mean?",
    answers: ["Parking brake engaged or brake system fault", "ABS is active", "Cruise control is on"],
    why: "Red brake symbol: handbrake or brake fault."
  }
},
{
  id: 217,
  question: "Wat betekent een rood acculampje dat blijft branden?",
  imageUrl: "",
  answers: [
    { text: "Storing in accu of dynamo/laadsysteem", isCorrect: true },
    { text: "Ruitensproeier leeg", isCorrect: false },
    { text: "Bandenspanning te laag", isCorrect: false }
  ],
  why: "Laadsysteemstoring: zo snel mogelijk laten controleren.",
  topic: "waarschuwingslampjes_rood",
  ruTranslation: {
    question: "Что означает горящая красная лампа аккумулятора?",
    answers: ["Неисправность аккумулятора/генератора", "Пустой омыватель", "Низкое давление в шинах"],
    why: "Неисправность зарядной системы — требуется проверка."
  },
  enTranslation: {
    question: "What does a red battery light that stays on mean?",
    answers: ["Fault in battery/alternator (charging system)", "Washer fluid empty", "Low tire pressure"],
    why: "Charging system fault: have it checked."
  }
},
{
  id: 218,
  question: "Een rood lampje met gordelsymbool brandt. Wat geeft dit aan?",
  imageUrl: "",
  answers: [
    { text: "Een passagier heeft zijn veiligheidsgordel niet om", isCorrect: true },
    { text: "De airbags zijn uitgeschakeld", isCorrect: false },
    { text: "De gordel zit te strak", isCorrect: false }
  ],
  why: "Gordelwaarschuwing: passagier moet gordel vastklikken.",
  topic: "waarschuwingslampjes_rood",
  ruTranslation: {
    question: "Горит красная лампа с ремнём. Что это значит?",
    answers: ["Пассажир не пристёгнут", "Подушки отключены", "Ремень слишком тугой"],
    why: "Предупреждение о ремнях — нужно пристегнуться."
  },
  enTranslation: {
    question: "A red seatbelt light is on. What does it indicate?",
    answers: ["A passenger is not wearing the seatbelt", "Airbags are disabled", "The belt is too tight"],
    why: "Seatbelt warning: buckle up."
  }
},
{
  id: 219,
  question: "Wat betekent een rood airbag-lampje?",
  imageUrl: "",
  answers: [
    { text: "Storing met de airbag, laat dit snel nakijken", isCorrect: true },
    { text: "Airbag is juist geactiveerd voor botsing", isCorrect: false },
    { text: "Airbag is standaard uit bij lage snelheid", isCorrect: false }
  ],
  why: "Rood = storing, veiligheidssysteem kan niet werken.",
  topic: "waarschuwingslampjes_rood",
  ruTranslation: {
    question: "Что означает красная лампа подушки безопасности?",
    answers: ["Неисправность эйрбэга — срочно проверить", "Эйрбэг активирован перед ударом", "На малой скорости подушка всегда отключена"],
    why: "Красный = неисправность, система может не сработать."
  },
  enTranslation: {
    question: "What does a red airbag light mean?",
    answers: ["Fault in airbag system — check soon", "Airbag is pre-armed for crash", "Airbag is always off at low speed"],
    why: "Red = fault; safety system may not operate."
  }
},
{
  id: 220,
  question: "Wat doe je bij een rood koelvloeistoftemperatuur-lampje?",
  imageUrl: "",
  answers: [
    { text: "Zo snel mogelijk veilig stoppen om oververhitting te voorkomen", isCorrect: true },
    { text: "De verwarming hoger zetten en doorrijden", isCorrect: false },
    { text: "Snelheid verhogen voor meer rijwind", isCorrect: false }
  ],
  why: "Oververhitting kan motor ernstig beschadigen.",
  topic: "waarschuwingslampjes_rood",
  ruTranslation: {
    question: "Что делать при красной лампе перегрева?",
    answers: ["Как можно скорее безопасно остановиться", "Включить печку сильнее и ехать дальше", "Увеличить скорость для обдува"],
    why: "Перегрев сильно повреждает двигатель."
  },
  enTranslation: {
    question: "What should you do with a red coolant temperature light?",
    answers: ["Stop safely as soon as possible to avoid overheating", "Turn heater up and continue", "Increase speed for airflow"],
    why: "Overheating can severely damage the engine."
  }
},
{
  id: 221,
  question: "Wat betekent een rood deur-open lampje?",
  imageUrl: "",
  answers: [
    { text: "Een portier staat open", isCorrect: true },
    { text: "De kofferbak is te vol", isCorrect: false },
    { text: "De kindervergrendeling is actief", isCorrect: false }
  ],
  why: "Rood deursymbool: controleer en sluit het portier.",
  topic: "waarschuwingslampjes_rood",
  ruTranslation: {
    question: "Что означает красная лампа «дверь открыта»?",
    answers: ["Одна из дверей открыта", "Багажник переполнен", "Детский замок активен"],
    why: "Проверь и закрой дверь."
  },
  enTranslation: {
    question: "What does a red door-open light mean?",
    answers: ["A door is open", "Trunk is overloaded", "Child lock is active"],
    why: "Check and close the door."
  }
},
{
  id: 222,
  question: "Wat betekent een rood driehoekje met uitroepteken (knipperend of brandend)?",
  imageUrl: "",
  answers: [
    { text: "Waarschuwingslichten staan aan of algemene ernstige waarschuwing", isCorrect: true },
    { text: "Richtingaanwijzer links staat aan", isCorrect: false },
    { text: "Cruisecontrol staat aan", isCorrect: false }
  ],
  why: "Driehoek = gevarendriehoek/waarschuwing: stop veilig indien nodig.",
  topic: "waarschuwingslampjes_rood",
  ruTranslation: {
    question: "Что означает красный треугольник с восклицательным знаком?",
    answers: ["Включены аварийные огни или серьёзное предупреждение", "Левый поворотник включён", "Круиз-контроль включён"],
    why: "Символ опасности — при необходимости остановись безопасно."
  },
  enTranslation: {
    question: "What does a red triangle with exclamation mark indicate?",
    answers: ["Hazard lights on or general serious warning", "Left indicator on", "Cruise control on"],
    why: "Triangle = hazard; stop safely if needed."
  }
},
{
  id: 223,
  question: "Wat geeft een oranje brandstofpomp-lampje aan?",
  imageUrl: "",
  answers: [
    { text: "Brandstofniveau laag: zo snel mogelijk tanken", isCorrect: true },
    { text: "Brandstofdop staat open", isCorrect: false },
    { text: "Motor is te koud", isCorrect: false }
  ],
  why: "Oranje = niet-ernstig maar aandacht vereist.",
  topic: "waarschuwingslampjes_oranje",
  ruTranslation: {
    question: "Что показывает оранжевая лампа с насосом?",
    answers: ["Малый уровень топлива: заправиться как можно скорее", "Крышка бака открыта", "Двигатель холодный"],
    why: "Оранжевый — несрочно, но требует внимания."
  },
  enTranslation: {
    question: "What does an orange fuel pump light indicate?",
    answers: ["Low fuel level: refuel as soon as possible", "Fuel cap open", "Engine too cold"],
    why: "Orange = not critical but needs attention."
  }
},
{
  id: 224,
  question: "ABS-lampje (oranje) brandt continu. Wat doe je?",
  imageUrl: "",
  answers: [
    { text: "Naar garage; remmen werken, maar ABS is mogelijk uit", isCorrect: true },
    { text: "Direct stoppen op de vluchtstrook", isCorrect: false },
    { text: "Niet remmen totdat het lampje uitgaat", isCorrect: false }
  ],
  why: "ABS-storing: auto kan remmen, maar blokkeerpreventie werkt mogelijk niet.",
  topic: "waarschuwingslampjes_oranje",
  ruTranslation: {
    question: "Горит оранжевая лампа ABS. Как поступить?",
    answers: ["Поехать в сервис; тормоза есть, но ABS может не работать", "Сразу остановиться на обочине", "Не тормозить, пока лампа не погаснет"],
    why: "Неисправность ABS: обычные тормоза работают."
  },
  enTranslation: {
    question: "Orange ABS light stays on. What should you do?",
    answers: ["Go to a garage; brakes work but ABS may be off", "Stop immediately on the hard shoulder", "Avoid braking until it goes off"],
    why: "ABS fault: normal brakes remain, ABS may not."
  }
},
{
  id: 225,
  question: "Wat betekent een oranje slip/ijsvloksymbool?",
  imageUrl: "",
  answers: [
    { text: "Gevaar voor slippen, buitentemperatuur (rond/below) vriespunt", isCorrect: true },
    { text: "Sneeuwkettingen verplicht", isCorrect: false },
    { text: "ESP is uitgeschakeld", isCorrect: false }
  ],
  why: "Waarschuwt voor gladheid/temperatuur onder nul.",
  topic: "waarschuwingslampjes_oranje",
  ruTranslation: {
    question: "Что означает оранжевый символ скольжения/снежинки?",
    answers: ["Опасность скольжения, температура около/ниже нуля", "Обязательны цепи", "Отключена система ESP"],
    why: "Предупреждение о гололёде/морозе."
  },
  enTranslation: {
    question: "What does an orange slippery road/snowflake symbol mean?",
    answers: ["Risk of skidding, temperature around/below freezing", "Snow chains mandatory", "ESP is off"],
    why: "Warns for icy conditions."
  }
},
{
  id: 226,
  question: "Wat betekent een oranje motorstoringslampje (check engine)?",
  imageUrl: "",
  answers: [
    { text: "Er is iets mis met de motor; laat de auto snel nakijken", isCorrect: true },
    { text: "De motor is klaar voor sportstand", isCorrect: false },
    { text: "Het is een serviceherinnering zonder storing", isCorrect: false }
  ],
  why: "Motormanagement waarschuwt voor storing.",
  topic: "waarschuwingslampjes_oranje",
  ruTranslation: {
    question: "Что означает оранжевая лампа неисправности двигателя?",
    answers: ["Проблема с мотором; нужно проверить", "Двигатель готов к спорт-режиму", "Это просто напоминание о сервисе"],
    why: "Система управления двигателем сигнализирует о неисправности."
  },
  enTranslation: {
    question: "What does an orange check-engine light mean?",
    answers: ["Something is wrong with the engine; have it checked", "Engine ready for sport mode", "Just a service reminder"],
    why: "Engine management reports a fault."
  }
},
{
  id: 227,
  question: "Een oranje bandenspanningslampje brandt. Wat betekent dit sinds 1 november 2014?",
  imageUrl: "",
  answers: [
    { text: "TPMS detecteert lage bandenspanning; controleer/lucht bijvullen", isCorrect: true },
    { text: "Je banden zijn te warm", isCorrect: false },
    { text: "Sneeuwbanden zijn verplicht", isCorrect: false }
  ],
  why: "TPMS is verplicht; waarschuwt voor lage druk.",
  topic: "waarschuwingslampjes_oranje",
  ruTranslation: {
    question: "Горит оранжевая лампа давления шин. Что это означает с 01.11.2014?",
    answers: ["TPMS обнаружил низкое давление — проверь/подкачай", "Шины перегреты", "Обязательны зимние шины"],
    why: "TPMS обязателен и предупреждает о низком давлении."
  },
  enTranslation: {
    question: "Orange tire pressure light on. What does this mean since 1 Nov 2014?",
    answers: ["TPMS detects low pressure; check/inflate", "Tires are too hot", "Winter tires mandatory"],
    why: "TPMS is mandatory; warns for low pressure."
  }
},
{
  id: 228,
  question: "Welke verlichting is 'dimlicht'?",
  imageUrl: "",
  answers: [
    { text: "Standaard koplamplicht voor normaal rijden in het donker", isCorrect: true },
    { text: "Groot licht dat tegenliggers kan verblinden", isCorrect: false },
    { text: "Stadslicht dat alleen als parkeerlicht dient", isCorrect: false }
  ],
  why: "Dimlicht is basisrijverlichting in het donker.",
  topic: "verlichting",
  ruTranslation: {
    question: "Что такое «ближний свет» (dimlicht)?",
    answers: ["Обычный свет для езды в тёмное время", "Дальний свет, слепящий встречных", "Габариты/парковочный свет"],
    why: "Ближний — основная фара для ночной езды."
  },
  enTranslation: {
    question: "What is 'dimlicht'?",
    answers: ["Standard low beam for normal night driving", "High beam that can dazzle oncoming", "City/parking light"],
    why: "Low beam is the basic night lighting."
  }
},
{
  id: 229,
  question: "Wanneer mag je mistlicht vóór gebruiken volgens de tekst?",
  imageUrl: "",
  answers: [
    { text: "Alleen als het zicht minder is dan 200 meter", isCorrect: true },
    { text: "Altijd in de regen", isCorrect: false },
    { text: "Alleen buiten de bebouwde kom", isCorrect: false }
  ],
  why: "Mistlicht voor: bij zeer slecht zicht (<200 m).",
  topic: "verlichting",
  ruTranslation: {
    question: "Когда разрешено передние противотуманки?",
    answers: ["Только при видимости менее 200 м", "Всегда в дождь", "Только вне города"],
    why: "Передний туман — при очень плохой видимости (<200 м)."
  },
  enTranslation: {
    question: "When may you use front fog lights?",
    answers: ["Only when visibility is less than 200 m", "Always in rain", "Only outside urban areas"],
    why: "Front fog: for very poor visibility."
  }
},
{
  id: 230,
  question: "Wanneer mag je mistachterlicht gebruiken?",
  imageUrl: "",
  answers: [
    { text: "Alleen als het zicht minder is dan 50 meter bij sneeuw of mist", isCorrect: true },
    { text: "Bij harde regen altijd", isCorrect: false },
    { text: "Wanneer je op de snelweg rijdt", isCorrect: false }
  ],
  why: "Mistachterlicht: zeer beperkt zicht (<50 m) bij sneeuw/mist.",
  topic: "verlichting",
  ruTranslation: {
    question: "Когда можно включать задний противотуманный свет?",
    answers: ["Только при видимости < 50 м в снегу/тумане", "Всегда при сильном дожде", "При движении по автостраде"],
    why: "Задний туман — только при очень плохой видимости."
  },
  enTranslation: {
    question: "When may you use the rear fog light?",
    answers: ["Only when visibility is under 50 m in snow or fog", "Always in heavy rain", "When on a motorway"],
    why: "Rear fog is for extremely poor visibility."
  }
},
{
  id: 231,
  question: "Wat betekenen de groene pijlen links/rechts op het dashboard?",
  imageUrl: "",
  answers: [
    { text: "Richtingaanwijzers zijn actief", isCorrect: true },
    { text: "Cruisecontrol is ingesteld", isCorrect: false },
    { text: "Start-stopsysteem is ingeschakeld", isCorrect: false }
  ],
  why: "Groene pijlen = knipperlichten aan.",
  topic: "verlichting",
  ruTranslation: {
    question: "Что означают зелёные стрелки на панели?",
    answers: ["Включены указатели поворота", "Включён круиз-контроль", "Активна система старт-стоп"],
    why: "Зелёные стрелки — поворотники."
  },
  enTranslation: {
    question: "What do the green arrows on the dashboard indicate?",
    answers: ["Turn indicators are active", "Cruise control is set", "Start-stop is engaged"],
    why: "Green arrows = indicators."
  }
},
{
  id: 232,
  question: "Wat betekent een oranje ruitensproeiervloeistof-lampje?",
  imageUrl: "",
  answers: [
    { text: "Vloeistof bijna leeg: bijvullen", isCorrect: true },
    { text: "Ruitenwisser kapot", isCorrect: false },
    { text: "Voorruitverwarming aan", isCorrect: false }
  ],
  why: "Bijna leeg → vul de sproeier bij.",
  topic: "overige_lampjes",
  ruTranslation: {
    question: "Что означает оранжевая лампа омывателя?",
    answers: ["Жидкость почти закончилась — долить", "Сломался дворник", "Включён обогрев лобового"],
    why: "Почти пустой бачок — нужно долить."
  },
  enTranslation: {
    question: "What does the orange washer fluid light mean?",
    answers: ["Fluid almost empty: refill", "Wiper broken", "Windscreen heater on"],
    why: "Refill the reservoir."
  }
},
{
  id: 233,
  question: "Welk lampje geeft aan dat de voorruitverwarming aanstaat?",
  imageUrl: "",
  answers: [
    { text: "Een oranje symbool met gebogen lijnen naar boven", isCorrect: true },
    { text: "Een rood driehoekje", isCorrect: false },
    { text: "Een groen lampje met pijlen", isCorrect: false }
  ],
  why: "Voorruitverwarming: eigen pictogram met warmtegolven.",
  topic: "overige_lampjes",
  ruTranslation: {
    question: "Какой индикатор показывает включённый обогрев лобового стекла?",
    answers: ["Оранжевый символ с изогнутыми вверх линиями", "Красный треугольник", "Зелёные стрелки"],
    why: "У обогрева лобового — свой пиктограммы с «волнами»."
  },
  enTranslation: {
    question: "Which light shows the windscreen heater is on?",
    answers: ["An orange symbol with upward curved lines", "A red triangle", "Green arrows"],
    why: "Windscreen heater has its own wavy-line icon."
  }
},
{
  id: 234,
  question: "Wat is het doel van het start-stopsysteem (A-symbool)?",
  imageUrl: "",
  answers: [
    { text: "Motor automatisch uitschakelen bij stilstaan om brandstof te besparen", isCorrect: true },
    { text: "Auto automatisch laten remmen bij obstakels", isCorrect: false },
    { text: "Cruisesnelheid vasthouden", isCorrect: false }
  ],
  why: "Start-stop bespaart brandstof bij stilstand.",
  topic: "overige_lampjes",
  ruTranslation: {
    question: "Зачем система старт-стоп (символ A)?",
    answers: ["Автоматически глушит мотор на остановках для экономии", "Автоматом тормозит перед препятствиями", "Удерживает крейсерскую скорость"],
    why: "Старт-стоп экономит топливо на стоянке."
  },
  enTranslation: {
    question: "What is the purpose of the start-stop system (A symbol)?",
    answers: ["Automatically switches off engine when stationary to save fuel", "Automatically brakes for obstacles", "Holds cruising speed"],
    why: "Start-stop saves fuel at standstill."
  }
},
{
  id: 235,
  question: "Wat is de minimale wettelijke profieldiepte voor banden van personenauto's?",
  imageUrl: "",
  answers: [
    { text: "1,6 mm (2 mm wordt geadviseerd)", isCorrect: true },
    { text: "2,5 mm", isCorrect: false },
    { text: "0,8 mm", isCorrect: false }
  ],
  why: "Wet: minimaal 1,6 mm; advies: min. 2 mm.",
  topic: "voertuigeisen_banden",
  ruTranslation: {
    question: "Какова минимальная законная глубина протектора для легковых авто?",
    answers: ["1,6 мм (рекомендуется ≥ 2 мм)", "2,5 мм", "0,8 мм"],
    why: "Закон: 1,6 мм, рекомендация: не менее 2 мм."
  },
  enTranslation: {
    question: "What is the legal minimum tread depth for car tires?",
    answers: ["1.6 mm (2 mm advised)", "2.5 mm", "0.8 mm"],
    why: "Law: 1.6 mm; advice: at least 2 mm."
  }
},
{
  id: 236,
  question: "Welke afmetingen mag een personenauto inclusief lading niet overschrijden?",
  imageUrl: "",
  answers: [
    { text: "Max. breedte 2,55 m, hoogte 4 m, lengte 12 m", isCorrect: true },
    { text: "Max. breedte 2,2 m, hoogte 3 m, lengte 10 m", isCorrect: false },
    { text: "Max. breedte 3 m, hoogte 4,5 m, lengte 15 m", isCorrect: false }
  ],
  why: "Dit zijn de belangrijke maatlimieten volgens overzicht.",
  topic: "voertuigeisen_afmetingen",
  ruTranslation: {
    question: "Какие габариты авто с грузом нельзя превышать?",
    answers: ["Ширина 2,55 м, высота 4 м, длина 12 м", "Ширина 2,2 м, высота 3 м, длина 10 м", "Ширина 3 м, высота 4,5 м, длина 15 м"],
    why: "Это ключевые предельные размеры."
  },
  enTranslation: {
    question: "What maximum dimensions may a car incl. load not exceed?",
    answers: ["Width 2.55 m, height 4 m, length 12 m", "Width 2.2 m, height 3 m, length 10 m", "Width 3 m, height 4.5 m, length 15 m"],
    why: "These are the key size limits."
  }
},
{
  id: 237,
  question: "Welke items zijn volgens het overzicht niet verplicht in de auto?",
  imageUrl: "",
  answers: [
    { text: "Gevarendriehoek, brandblusser, EHBO-set, veiligheidshesje, reservelampen", isCorrect: true },
    { text: "Claxon, ruitenwisser, remsysteem", isCorrect: false },
    { text: "Verlichting, kentekenplaten", isCorrect: false }
  ],
  why: "Deze items worden als ‘niet verplicht’ genoemd.",
  topic: "voertuigeisen_niet_verplicht",
  ruTranslation: {
    question: "Какие предметы НЕ обязательны в автомобиле?",
    answers: ["Аварийный треугольник, огнетушитель, аптечка, жилет, запасные лампы", "Сигнал, дворники, тормозная система", "Фары, номера"],
    why: "В списке они отмечены как необязательные."
  },
  enTranslation: {
    question: "Which items are NOT mandatory in the car?",
    answers: ["Warning triangle, fire extinguisher, first aid kit, safety vest, spare bulbs", "Horn, wiper, brake system", "Lights, license plates"],
    why: "These items are stated as not compulsory."
  }
},
{
  id: 238,
  question: "Waarom hebben banden met weinig profiel minder grip en langere remweg?",
  imageUrl: "",
  answers: [
    { text: "Ze voeren water slechter af; meer kans op aquaplaning", isCorrect: true },
    { text: "Ze worden automatisch harder opgepompt", isCorrect: false },
    { text: "Ze zijn lichter en rollen verder", isCorrect: false }
  ],
  why: "Minder profiel = slechtere waterafvoer → minder grip.",
  topic: "banden_grip",
  ruTranslation: {
    question: "Почему шины с малым протектором хуже держат и дольше тормозят?",
    answers: ["Хуже отводят воду; выше риск аквапланирования", "Их автоматически накачивает сильнее", "Они легче и катятся дальше"],
    why: "Мало канавок — вода не уходит, сцепление хуже."
  },
  enTranslation: {
    question: "Why do low-tread tires have less grip and longer braking distance?",
    answers: ["They evacuate water worse; more aquaplaning risk", "They are auto-inflated more", "They are lighter and roll longer"],
    why: "Less tread = poorer water drainage → less grip."
  }
},
{
  id: 239,
  question: "Welke profieldiepte wordt voor winterbanden geadviseerd?",
  imageUrl: "",
  answers: [
    { text: "Minstens 4 mm", isCorrect: true },
    { text: "1,6 mm (wettelijk minimum)", isCorrect: false },
    { text: "2 mm", isCorrect: false }
  ],
  why: "Advies voor winterbanden: ≥ 4 mm.",
  topic: "winterbanden",
  ruTranslation: {
    question: "Какая глубина протектора рекомендуется для зимних шин?",
    answers: ["Не менее 4 мм", "1,6 мм (законный минимум)", "2 мм"],
    why: "Рекомендация для зимних шин — ≥ 4 мм."
  },
  enTranslation: {
    question: "What tread depth is advised for winter tires?",
    answers: ["At least 4 mm", "1.6 mm (legal minimum)", "2 mm"],
    why: "Advice for winter tires: ≥ 4 mm."
  }
},
{
  id: 240,
  question: "Wanneer zijn winterbanden aan te raden volgens de tekst?",
  imageUrl: "",
  answers: [
    { text: "Bij temperaturen kouder dan 7 °C", isCorrect: true },
    { text: "Alleen bij sneeuw op de weg", isCorrect: false },
    { text: "Alleen op bergwegen", isCorrect: false }
  ],
  why: "Onder ~7 °C presteren winterbanden beter.",
  topic: "winterbanden",
  ruTranslation: {
    question: "Когда рекомендовано использовать зимние шины?",
    answers: ["При температурах ниже 7 °C", "Только при снежном покрытии", "Только в горах"],
    why: "Ниже ~7 °C зимние шины эффективнее."
  },
  enTranslation: {
    question: "When are winter tires recommended?",
    answers: ["At temperatures below 7 °C", "Only when snow is on the road", "Only on mountain roads"],
    why: "Below ~7 °C winter tires perform better."
  }
},
{
  id: 241,
  question: "Wat is het effect van winterbanden bij warme temperaturen?",
  imageUrl: "",
  answers: [
    { text: "Ze zorgen voor een langere remweg dan zomerbanden", isCorrect: true },
    { text: "Ze remmen juist korter dan zomerbanden", isCorrect: false },
    { text: "Er is geen verschil", isCorrect: false }
  ],
  why: "In warmte zijn winterbanden minder efficiënt.",
  topic: "winterbanden",
  ruTranslation: {
    question: "Что происходит с тормозным путём зимних шин в тепло?",
    answers: ["Он длиннее, чем у летних", "Он короче, чем у летних", "Разницы нет"],
    why: "В тёплую погоду зимние шины менее эффективны."
  },
  enTranslation: {
    question: "What is the effect of winter tires in warm temperatures?",
    answers: ["They have a longer braking distance than summer tires", "They brake shorter than summer tires", "No difference"],
    why: "Winter tires are less efficient in warmth."
  }
},
{
  id: 242,
  question: "Wat doet ABS (Anti Blokkeer Systeem) bij een noodstop?",
  imageUrl: "",
  answers: [
    { text: "Het voorkomt blokkeren van wielen door snel te pulseren", isCorrect: true },
    { text: "Het vergroot de remweg altijd", isCorrect: false },
    { text: "Het schakelt de remmen uit", isCorrect: false }
  ],
  why: "ABS regelt remdruk zodat wielen blijven rollen en je kunt sturen.",
  topic: "abs",
  ruTranslation: {
    question: "Что делает ABS при экстренном торможении?",
    answers: ["Предотвращает блокировку колёс, быстро пульсируя", "Всегда увеличивает тормозной путь", "Отключает тормоза"],
    why: "ABS регулирует давление — колёса катятся, управляемость сохраняется."
  },
  enTranslation: {
    question: "What does ABS do during an emergency stop?",
    answers: ["Prevents wheel lock by rapidly pulsing", "Always increases braking distance", "Disables the brakes"],
    why: "ABS modulates pressure so wheels keep rolling and you can steer."
  }
},
{
  id: 243,
  question: "Wat moet je doen met het rempedaal als ABS ingrijpt?",
  imageUrl: "",
  answers: [
    { text: "Stevig blijven intrappen ondanks trillen van het pedaal", isCorrect: true },
    { text: "Snel pompend remmen met je voet", isCorrect: false },
    { text: "Remmen loslaten", isCorrect: false }
  ],
  why: "Niet pompen; ABS pompt voor jou. Houd druk vast.",
  topic: "abs",
  ruTranslation: {
    question: "Что делать с педалью тормоза, когда срабатывает ABS?",
    answers: ["Сильно держать нажатой, несмотря на вибрацию", "Быстро «качать» педаль", "Отпустить тормоз"],
    why: "Не нужно качать — ABS делает это сам. Держи давление."
  },
  enTranslation: {
    question: "What should you do with the brake pedal when ABS activates?",
    answers: ["Keep firm pressure despite pedal vibration", "Pump the pedal quickly", "Release the brake"],
    why: "Do not pump; ABS does it. Maintain pressure."
  }
},
{
  id: 244,
  question: "Welke spiegels zijn verplicht volgens het overzicht?",
  imageUrl: "",
  answers: [
    { text: "Linker buitenspiegel, rechter buitenspiegel (sinds 2010) en binnenspiegel", isCorrect: true },
    { text: "Alleen een binnenspiegel", isCorrect: false },
    { text: "Alleen linkerbuitenspiegel", isCorrect: false }
  ],
  why: "Er worden drie spiegels genoemd als eis.",
  topic: "voertuigeisen_spiegels",
  ruTranslation: {
    question: "Какие зеркала обязательны?",
    answers: ["Левое наружное, правое (с 2010) и салонное", "Только салонное", "Только левое наружное"],
    why: "Перечислены три обязательных зеркала."
  },
  enTranslation: {
    question: "Which mirrors are mandatory?",
    answers: ["Left exterior, right exterior (since 2010), and interior mirror", "Interior mirror only", "Left exterior only"],
    why: "Three mirrors are listed as requirements."
  }
},
{
  id: 245,
  question: "Welke systemen/onderdelen worden als 'belangrijke eisen' genoemd?",
  imageUrl: "",
  answers: [
    { text: "Verlichting, remsysteem, claxon, ruitenwisser en sproeier", isCorrect: true },
    { text: "Airco, stoelverwarming, navigatie", isCorrect: false },
    { text: "Panoramadak, getinte ramen", isCorrect: false }
  ],
  why: "Deze onderdelen staan onder ‘Belangrijke eisen’.",
  topic: "voertuigeisen",
  ruTranslation: {
    question: "Какие элементы указаны как «важные требования»?",
    answers: ["Освещение, тормоза, звуковой сигнал, дворник и омыватель", "Кондиционер, подогрев сидений, навигация", "Панорамная крыша, тонировка"],
    why: "Они перечислены в разделе «Важные требования»."
  },
  enTranslation: {
    question: "Which items are listed as 'important requirements'?",
    answers: ["Lighting, braking system, horn, wiper and washer", "Aircon, seat heating, navigation", "Panoramic roof, tinted windows"],
    why: "These are listed under 'Important requirements'."
  }
},
{
  id: 246,
  question: "Wat betekent een blauw lampje met symbool voor groot licht?",
  imageUrl: "",
  answers: [
    { text: "Groot licht staat aan", isCorrect: true },
    { text: "Dimlicht staat aan", isCorrect: false },
    { text: "Mistlicht achter staat aan", isCorrect: false }
  ],
  why: "Blauw symbool = groot licht.",
  topic: "verlichting",
  ruTranslation: {
    question: "Что означает синяя лампа дальнего света?",
    answers: ["Включён дальний свет", "Включён ближний", "Включён задний противотуманный"],
    why: "Синий символ — дальний свет."
  },
  enTranslation: {
    question: "What does the blue high-beam light mean?",
    answers: ["High beam is on", "Low beam is on", "Rear fog is on"],
    why: "Blue symbol = high beam."
  }
},
{
  id: 247,
  question: "Wat betekent een oranje symbool voor cruisecontrol?",
  imageUrl: "",
  answers: [
    { text: "Cruisecontrol is geactiveerd of stand-by", isCorrect: true },
    { text: "Snelheidslimiet detectie is uit", isCorrect: false },
    { text: "ESP is geactiveerd", isCorrect: false }
  ],
  why: "Het icoon geeft aan dat de snelheid wordt vastgehouden.",
  topic: "overige_lampjes",
  ruTranslation: {
    question: "Что значит оранжевый индикатор круиз-контроля?",
    answers: ["Круиз включён или в режиме ожидания", "Отключено распознавание знаков", "Активна система ESP"],
    why: "Иконка показывает удержание скорости."
  },
  enTranslation: {
    question: "What does the orange cruise control icon indicate?",
    answers: ["Cruise control is active or on standby", "Speed limit detection is off", "ESP is active"],
    why: "Icon shows speed is being maintained."
  }
},
{
  id: 248,
  question: "Welke lampjes vallen onder 'verlichting' volgens het overzicht?",
  imageUrl: "",
  answers: [
    { text: "Dimlicht, groot licht, richtingaanwijzers, stadslicht, mistlichten", isCorrect: true },
    { text: "Alleen groot licht", isCorrect: false },
    { text: "Alleen richtingaanwijzers en stadslicht", isCorrect: false }
  ],
  why: "De lijst toont meerdere soorten verlichting.",
  topic: "verlichting",
  ruTranslation: {
    question: "Какие огни входят в раздел «освещение»?",
    answers: ["Ближний, дальний, поворотники, габариты, туманки", "Только дальний", "Только поворотники и габариты"],
    why: "В списке указаны разные виды освещения."
  },
  enTranslation: {
    question: "Which lights are under 'lighting' in the overview?",
    answers: ["Low/high beam, indicators, sidelights, fog lights", "High beam only", "Indicators and sidelights only"],
    why: "Multiple types are listed."
  }
},
{
  id: 249,
  question: "Wat gebeurt er als je met een rood lampje doorrijdt dat een ernstig probleem aangeeft?",
  imageUrl: "",
  answers: [
    { text: "Je riskeert schade of onveiligheid; zoek direct een veilige stopplaats", isCorrect: true },
    { text: "Er gebeurt niets; rood is alleen advies", isCorrect: false },
    { text: "De auto schakelt vanzelf uit", isCorrect: false }
  ],
  why: "Rood = onmiddellijk handelen of veilig stoppen.",
  topic: "waarschuwingslampjes_rood",
  ruTranslation: {
    question: "Что будет, если продолжать ехать с красной серьёзной лампой?",
    answers: ["Риск поломки и опасности; немедленно остановись безопасно", "Ничего — красный это лишь совет", "Авто само выключится"],
    why: "Красный — требуются немедленные действия."
  },
  enTranslation: {
    question: "What if you continue driving with a red serious warning light?",
    answers: ["Risk of damage/unsafe; stop safely immediately", "Nothing — red is only advice", "The car will switch off automatically"],
    why: "Red means act/stop now."
  }
},
{
  id: 250,
  question: "Welke van onderstaande hoort bij 'belangrijke eisen' voor zicht?",
  imageUrl: "",
  answers: [
    { text: "Voldoende zicht aan de voorkant en zijkanten", isCorrect: true },
    { text: "Getinte ruiten verplicht", isCorrect: false },
    { text: "Alleen panoramadak", isCorrect: false }
  ],
  why: "Goed zicht voor en opzij is expliciet genoemd.",
  topic: "voertuigeisen_zicht",
  ruTranslation: {
    question: "Что относится к важным требованиям по видимости?",
    answers: ["Достаточная видимость спереди и по сторонам", "Обязательная тонировка", "Только панорамная крыша"],
    why: "Хорошая обзорность вперёд и по бокам — обязательна."
  },
  enTranslation: {
    question: "Which belongs to 'important requirements' for visibility?",
    answers: ["Sufficient visibility at front and sides", "Mandatory tinted windows", "Panoramic roof only"],
    why: "Good front/side visibility is explicitly listed."
  }
},

// UIstekende ladingggggggggggggg

{
  id: 251,
  question: "Wat is een hoofdvoorwaarde voor het vervoeren van lading?",
  imageUrl: "",
  answers: [
    { text: "De lading mag het zicht van de bestuurder niet belemmeren", isCorrect: true },
    { text: "De lading mag de claxon bedekken", isCorrect: false },
    { text: "De lading mag het kenteken gedeeltelijk bedekken", isCorrect: false }
  ],
  why: "Zicht van de bestuurder mag niet worden belemmerd.",
  topic: "lading_algemeen",
  ruTranslation: {
    question: "Главное условие перевозки груза?",
    answers: [
      "Груз не должен ограничивать обзор водителю",
      "Груз может закрывать звуковой сигнал",
      "Груз может частично закрывать номер"
    ],
    why: "Обзор водителя не должен ухудшаться."
  },
  enTranslation: {
    question: "What is a key requirement when carrying load?",
    answers: [
      "The load must not obstruct the driver’s view",
      "The load may cover the horn",
      "The load may partly cover the license plate"
    ],
    why: "The driver’s view must remain unobstructed."
  }
},
{
  id: 252,
  question: "Wat geldt voor het vastzetten van lading?",
  imageUrl: "",
  answers: [
    { text: "De lading moet goed vastgemaakt zijn en niemand in gevaar brengen", isCorrect: true },
    { text: "Alleen zware lading hoeft te worden vastgezet", isCorrect: false },
    { text: "Vastzetten is niet nodig bij korte ritten", isCorrect: false }
  ],
  why: "Onvoldoende zekeren kan onveiligheid veroorzaken.",
  topic: "lading_algemeen",
  ruTranslation: {
    question: "Что верно про крепление груза?",
    answers: [
      "Груз должен быть закреплён и не создавать опасности",
      "Только тяжёлый груз нужно крепить",
      "Крепить не нужно при коротких поездках"
    ],
    why: "Плохо закреплённый груз опасен."
  },
  enTranslation: {
    question: "What applies to securing the load?",
    answers: [
      "It must be properly secured and not endanger anyone",
      "Only heavy loads must be secured",
      "Securing is unnecessary for short trips"
    ],
    why: "Poorly secured load is unsafe."
  }
},
{
  id: 253,
  question: "Mag lading de kentekenplaat of verlichting bedekken?",
  imageUrl: "",
  answers: [
    { text: "Nee, kenteken en verlichting moeten zichtbaar blijven", isCorrect: true },
    { text: "Ja, als je sneller dan 50 km/h rijdt", isCorrect: false },
    { text: "Ja, zolang de achterruit vrij blijft", isCorrect: false }
  ],
  why: "Kenteken en verlichting moeten vrij blijven.",
  topic: "lading_algemeen",
  ruTranslation: {
    question: "Можно ли закрывать номерной знак или светотехнику грузом?",
    answers: [
      "Нет, они должны быть видимыми",
      "Да, если едешь быстрее 50 км/ч",
      "Да, если заднее стекло открыто"
    ],
    why: "Номера и огни должны быть видны."
  },
  enTranslation: {
    question: "May load cover the license plate or lights?",
    answers: [
      "No, both must remain visible",
      "Yes, if you drive over 50 km/h",
      "Yes, if the rear window is clear"
    ],
    why: "Plates and lights must not be covered."
  }
},
{
  id: 254,
  question: "Wat is de maximale breedte van een personenauto inclusief lading op een verharde weg?",
  imageUrl: "",
  answers: [
    { text: "2,55 meter", isCorrect: true },
    { text: "2,20 meter", isCorrect: false },
    { text: "3,00 meter", isCorrect: false }
  ],
  why: "Maximale breedte personenauto (incl. lading) is 2,55 m.",
  topic: "afmetingen_persauto",
  ruTranslation: {
    question: "Максимальная ширина легкового автомобиля с грузом на асфальте?",
    answers: ["2,55 м", "2,20 м", "3,00 м"],
    why: "Предельная ширина — 2,55 м."
  },
  enTranslation: {
    question: "What is the maximum width of a passenger car incl. load on paved roads?",
    answers: ["2.55 m", "2.20 m", "3.00 m"],
    why: "Max width for a passenger car incl. load is 2.55 m."
  }
},
{
  id: 255,
  question: "Wat is de maximale breedte op een onverharde weg voor een personenauto incl. lading?",
  imageUrl: "",
  answers: [
    { text: "2,20 meter", isCorrect: true },
    { text: "2,55 meter", isCorrect: false },
    { text: "2,00 meter", isCorrect: false }
  ],
  why: "Op een onverharde weg max. 2,20 m breed.",
  topic: "afmetingen_persauto",
  ruTranslation: {
    question: "Максимальная ширина на грунтовой дороге (с грузом)?",
    answers: ["2,20 м", "2,55 м", "2,00 м"],
    why: "На грунтовке — не шире 2,20 м."
  },
  enTranslation: {
    question: "What is the maximum width on an unpaved road for a car incl. load?",
    answers: ["2.20 m", "2.55 m", "2.00 m"],
    why: "On unpaved roads the limit is 2.20 m."
  }
},
{
  id: 256,
  question: "Wat is de maximale hoogte van een personenauto inclusief lading?",
  imageUrl: "",
  answers: [
    { text: "4 meter", isCorrect: true },
    { text: "3,5 meter", isCorrect: false },
    { text: "4,5 meter", isCorrect: false }
  ],
  why: "Maximale hoogte is 4 m.",
  topic: "afmetingen_persauto",
  ruTranslation: {
    question: "Максимальная высота легкового автомобиля с грузом?",
    answers: ["4 м", "3,5 м", "4,5 м"],
    why: "Предельная высота — 4 м."
  },
  enTranslation: {
    question: "What is the maximum height of a passenger car incl. load?",
    answers: ["4 m", "3.5 m", "4.5 m"],
    why: "Maximum height is 4 m."
  }
},
{
  id: 257,
  question: "Wat is de maximale lengte van een personenauto inclusief lading (zonder aanhanger)?",
  imageUrl: "",
  answers: [
    { text: "12 meter", isCorrect: true },
    { text: "10 meter", isCorrect: false },
    { text: "18 meter", isCorrect: false }
  ],
  why: "Maximale lengte auto (zonder aanhanger) is 12 m.",
  topic: "afmetingen_persauto",
  ruTranslation: {
    question: "Максимальная длина легкового авто с грузом (без прицепа)?",
    answers: ["12 м", "10 м", "18 м"],
    why: "Предельная длина авто — 12 м."
  },
  enTranslation: {
    question: "What is the maximum length of a passenger car incl. load (no trailer)?",
    answers: ["12 m", "10 m", "18 m"],
    why: "Maximum car length is 12 m."
  }
},
{
  id: 258,
  question: "Wat is de maximale totale lengte van auto met aanhangwagen samen?",
  imageUrl: "",
  answers: [
    { text: "18 meter", isCorrect: true },
    { text: "16 meter", isCorrect: false },
    { text: "12 meter", isCorrect: false }
  ],
  why: "Auto + aanhanger samen: max. 18 m.",
  topic: "afmetingen_combinatie",
  ruTranslation: {
    question: "Максимальная общая длина авто с прицепом?",
    answers: ["18 м", "16 м", "12 м"],
    why: "Авто + прицеп = не более 18 м."
  },
  enTranslation: {
    question: "What is the maximum total length of car plus trailer?",
    answers: ["18 m", "16 m", "12 m"],
    why: "Car + trailer together may be up to 18 m."
  }
},
{
  id: 259,
  question: "Wat is deelbare lading volgens de definitie?",
  imageUrl: "",
  answers: [
    { text: "Lading die je redelijkerwijs kleiner kunt maken of demonteren", isCorrect: true },
    { text: "Lading die je nooit mag vervoeren", isCorrect: false },
    { text: "Lading die altijd op een aanhanger moet", isCorrect: false }
  ],
  why: "Voorbeeld: pakket dat je kunt opdelen/demonteren.",
  topic: "lading_definities",
  ruTranslation: {
    question: "Что такое делимый груз?",
    answers: [
      "Груз, который можно разумно уменьшить/разобрать",
      "Груз, который запрещён к перевозке",
      "Груз, который всегда везут только на прицепе"
    ],
    why: "Пример — посылка, которую можно разделить."
  },
  enTranslation: {
    question: "What is divisible load?",
    answers: [
      "Load that can reasonably be reduced or dismantled",
      "Load that may never be transported",
      "Load that must always be on a trailer"
    ],
    why: "Example: a package that can be split."
  }
},
{
  id: 260,
  question: "Wat is ondeelbare lading volgens de definitie?",
  imageUrl: "",
  answers: [
    { text: "Lading die je niet kunt opsplitsen zonder buitensporige kosten/risico", isCorrect: true },
    { text: "Altijd lichte lading", isCorrect: false },
    { text: "Alleen gevaarlijke stoffen", isCorrect: false }
  ],
  why: "Voorbeeld: paal of ladder.",
  topic: "lading_definities",
  ruTranslation: {
    question: "Что такое неделимый груз?",
    answers: [
      "Груз, который нельзя разделить без чрезмерных затрат/риска",
      "Всегда лёгкий груз",
      "Только опасные материалы"
    ],
    why: "Пример — столб или лестница."
  },
  enTranslation: {
    question: "What is indivisible load?",
    answers: [
      "Load that cannot be split without excessive cost/risk",
      "Always light cargo",
      "Only hazardous materials"
    ],
    why: "Example: a pole or a ladder."
  }
},
{
  id: 261,
  question: "Hoe ver mag deelbare lading aan de voorkant van een personenauto uitsteken?",
  imageUrl: "",
  answers: [
    { text: "Helemaal niet", isCorrect: true },
    { text: "Maximaal 50 centimeter", isCorrect: false },
    { text: "Maximaal 1 meter", isCorrect: false }
  ],
  why: "Deelbare lading mag niet vóór uitsteken bij personenauto/aanhanger.",
  topic: "uitstekend_persauto",
  ruTranslation: {
    question: "Насколько может выступать делимый груз спереди легкового авто?",
    answers: ["Никак — не допускается", "До 50 см", "До 1 м"],
    why: "Делимый груз спереди выступать не должен."
  },
  enTranslation: {
    question: "How far may divisible load protrude at the front of a passenger car?",
    answers: ["Not at all", "Up to 50 cm", "Up to 1 m"],
    why: "Divisible load may not protrude at the front."
  }
},
{
  id: 262,
  question: "Hoe ver mag ondeelbare lading aan de voorkant van een personenauto uitsteken?",
  imageUrl: "",
  answers: [
    { text: "Maximaal 1 meter", isCorrect: true },
    { text: "Maximaal 2 meter", isCorrect: false },
    { text: "Helemaal niet", isCorrect: false }
  ],
  why: "Voor personenauto: ondeelbaar vooraan max. 1 m.",
  topic: "uitstekend_persauto",
  ruTranslation: {
    question: "Насколько может выступать неделимый груз спереди легкового авто?",
    answers: ["До 1 м", "До 2 м", "Совсем не может"],
    why: "Для легкового: спереди неделимый — максимум 1 м."
  },
  enTranslation: {
    question: "How far may indivisible load protrude at the front of a passenger car?",
    answers: ["Up to 1 m", "Up to 2 m", "Not at all"],
    why: "Indivisible load at the front: max 1 m."
  }
},
{
  id: 263,
  question: "Hoeveel mag lading (deelbaar of ondeelbaar) aan de achterkant van een personenauto uitsteken?",
  imageUrl: "",
  answers: [
    { text: "Niet meer dan 1 meter", isCorrect: true },
    { text: "Tot 2 meter", isCorrect: false },
    { text: "Geen beperking", isCorrect: false }
  ],
  why: "Achteraan: max. 1 m voor personenauto.",
  topic: "uitstekend_persauto",
  ruTranslation: {
    question: "Насколько может выступать груз сзади легкового автомобиля?",
    answers: ["Не более 1 м", "До 2 м", "Без ограничений"],
    why: "Сзади: максимум 1 м."
  },
  enTranslation: {
    question: "How far may load protrude at the rear of a passenger car?",
    answers: ["No more than 1 m", "Up to 2 m", "No limit"],
    why: "Rear overhang for passenger car: max 1 m."
  }
},
{
  id: 264,
  question: "Hoe ver mag lading aan de zijkanten van een personenauto uitsteken?",
  imageUrl: "",
  answers: [
    { text: "Niet meer dan 20 cm aan elke zijde", isCorrect: true },
    { text: "Maximaal 40 cm per zijde", isCorrect: false },
    { text: "Geen zijwaartse beperking", isCorrect: false }
  ],
  why: "Zijdelings: max. 20 cm per zijde.",
  topic: "uitstekend_persauto",
  ruTranslation: {
    question: "Насколько может выступать груз по бокам легкового авто?",
    answers: ["Не более 20 см с каждой стороны", "До 40 см на сторону", "Без ограничения по бокам"],
    why: "Боковой вынос: максимум 20 см."
  },
  enTranslation: {
    question: "How far may load protrude at the sides of a passenger car?",
    answers: ["No more than 20 cm per side", "Up to 40 cm per side", "No lateral limit"],
    why: "Side overhang: max 20 cm per side."
  }
},
{
  id: 265,
  question: "Wanneer moet uitstekende lading worden gemarkeerd met een rood-wit markeringsbord?",
  imageUrl: "",
  answers: [
    { text: "Als de lading > 1 m in de lengte voor- of achteraan uitsteekt", isCorrect: true },
    { text: "Altijd bij elke uitstekende lading", isCorrect: false },
    { text: "Alleen wanneer het overdag is", isCorrect: false }
  ],
  why: "Lengte-uitsteken > 1 m vereist markering.",
  topic: "markering_lading",
  ruTranslation: {
    question: "Когда надо обозначать выступающий груз красно-белым щитом?",
    answers: [
      "Если выступает более 1 м по длине спереди или сзади",
      "Всегда при любом выступании",
      "Только днём"
    ],
    why: "При выносе по длине > 1 м требуется маркировка."
  },
  enTranslation: {
    question: "When must protruding load be marked with a red-white board?",
    answers: [
      "When it protrudes more than 1 m in length at front or rear",
      "Always for any protrusion",
      "Only during daytime"
    ],
    why: "Length overhang >1 m requires marking."
  }
},
{
  id: 266,
  question: "Hoe groot moet het markeringsbord minimaal zijn?",
  imageUrl: "",
  answers: [
    { text: "Ten minste 42 × 42 cm", isCorrect: true },
    { text: "Minstens 30 × 30 cm", isCorrect: false },
    { text: "Minstens 50 × 20 cm", isCorrect: false }
  ],
  why: "Minimale maat: 42 bij 42 cm.",
  topic: "markering_lading",
  ruTranslation: {
    question: "Какой минимальный размер щита-разметки?",
    answers: ["Не менее 42 × 42 см", "Не менее 30 × 30 см", "Не менее 50 × 20 см"],
    why: "Минимум — 42×42 см."
  },
  enTranslation: {
    question: "What is the minimum size of the marking board?",
    answers: ["At least 42 × 42 cm", "At least 30 × 30 cm", "At least 50 × 20 cm"],
    why: "Minimum dimension is 42 by 42 cm."
  }
},
{
  id: 267,
  question: "Moet je ook markeren bij breedte-uitsteken van de lading?",
  imageUrl: "",
  answers: [
    { text: "Ja, als de lading > 10 cm in de breedte uitsteekt (niet bij personenauto)", isCorrect: true },
    { text: "Nee, markeren is alleen voor lengte-uitsteken", isCorrect: false },
    { text: "Alleen bij droog weer", isCorrect: false }
  ],
  why: "Bij >10 cm breedte-uitsteken markeren, behalve bij personenauto.",
  topic: "markering_lading",
  ruTranslation: {
    question: "Нужно ли маркировать при выступе по ширине?",
    answers: [
      "Да, если выступ более 10 см (к легковым это не относится)",
      "Нет, маркируют только длину",
      "Только в сухую погоду"
    ],
    why: "При ширине >10 см нужна маркировка, кроме легковых."
  },
  enTranslation: {
    question: "Must you mark width overhang as well?",
    answers: [
      "Yes, if overhang > 10 cm (not for passenger cars)",
      "No, marking is only for length",
      "Only in dry weather"
    ],
    why: "Width overhang >10 cm requires marking, except for passenger cars."
  }
},
{
  id: 268,
  question: "Wat is ’s nachts verplicht bij een markeringsbord?",
  imageUrl: "",
  answers: [
    { text: "Wit licht aan de voorkant en rood licht aan de achterkant van het voertuig", isCorrect: true },
    { text: "Alleen reflectoren zijn voldoende", isCorrect: false },
    { text: "Twee witte lichten achter", isCorrect: false }
  ],
  why: "Bij nacht: voor wit licht, achter rood licht.",
  topic: "markering_lading",
  ruTranslation: {
    question: "Что обязательно ночью при щите-разметке?",
    answers: [
      "Белый огонь спереди и красный сзади у автомобиля",
      "Достаточно только отражателей",
      "Два белых огня сзади"
    ],
    why: "Ночью: спереди белый, сзади красный свет."
  },
  enTranslation: {
    question: "What is mandatory at night with a marking board?",
    answers: [
      "White light at the front and red light at the rear of the vehicle",
      "Reflectors only are sufficient",
      "Two white lights at the rear"
    ],
    why: "At night: white front, red rear light."
  }
},
{
  id: 269,
  question: "Mag lading aan de voorkant van een aanhangwagen (dissel) uitsteken?",
  imageUrl: "",
  answers: [
    { text: "Nee, aan de voorkant van de aanhangwagen mag lading niet uitsteken", isCorrect: true },
    { text: "Ja, tot 1 meter", isCorrect: false },
    { text: "Ja, onbeperkt bij ondeelbare lading", isCorrect: false }
  ],
  why: "Voorzijde aanhanger: geen uitsteken.",
  topic: "uitstekend_aanhanger",
  ruTranslation: {
    question: "Можно ли выступать грузу спереди прицепа (в районе дышла)?",
    answers: [
      "Нет, спереди прицепа груз выступать не должен",
      "Да, до 1 м",
      "Да, без ограничений для неделимого"
    ],
    why: "Спереди прицепа вынос запрещён."
  },
  enTranslation: {
    question: "May load protrude at the front of a trailer (drawbar)?",
    answers: [
      "No, load may not protrude at the trailer’s front",
      "Yes, up to 1 m",
      "Yes, unlimited for indivisible load"
    ],
    why: "No front overhang on trailers."
  }
},
{
  id: 270,
  question: "Hoeveel mag deelbare lading zijdelings aan een aanhangwagen uitsteken?",
  imageUrl: "",
  answers: [
    { text: "Maximaal 20 cm per zijde", isCorrect: true },
    { text: "Maximaal 40 cm per zijde", isCorrect: false },
    { text: "Niet beperkt", isCorrect: false }
  ],
  why: "Zijdelings deelbaar: max 20 cm per zijde.",
  topic: "uitstekend_aanhanger",
  ruTranslation: {
    question: "Насколько может выступать делимый груз по бокам прицепа?",
    answers: ["До 20 см с каждой стороны", "До 40 см", "Без ограничений"],
    why: "Для делимого груза — максимум 20 см."
  },
  enTranslation: {
    question: "How far may divisible load protrude sideways on a trailer?",
    answers: ["Up to 20 cm per side", "Up to 40 cm per side", "No limit"],
    why: "Side overhang for divisible load: max 20 cm."
  }
},
{
  id: 271,
  question: "Mag ondeelbare lading meer dan 20 cm zijdelings aan een aanhangwagen uitsteken?",
  imageUrl: "",
  answers: [
    { text: "Ja, zolang de aanhangwagen niet breder is dan 3 meter", isCorrect: true },
    { text: "Nee, nooit", isCorrect: false },
    { text: "Ja, onbeperkt", isCorrect: false }
  ],
  why: "Voorwaarde: totale breedte aanhanger ≤ 3 m.",
  topic: "uitstekend_aanhanger",
  ruTranslation: {
    question: "Можно ли неделимому грузу выступать более 20 см по бокам прицепа?",
    answers: [
      "Да, если ширина прицепа не более 3 м",
      "Нет, никогда",
      "Да, без ограничений"
    ],
    why: "Условие — ширина прицепа не более 3 м."
  },
  enTranslation: {
    question: "May indivisible load protrude more than 20 cm sideways on a trailer?",
    answers: [
      "Yes, provided the trailer is not wider than 3 m",
      "No, never",
      "Yes, without limits"
    ],
    why: "Condition: trailer width ≤ 3 m."
  }
},
{
  id: 272,
  question: "Hoeveel mag deelbare lading achter een aanhangwagen uitsteken?",
  imageUrl: "",
  answers: [
    { text: "Niet meer dan 1 meter", isCorrect: true },
    { text: "Tot 2 meter", isCorrect: false },
    { text: "Onbeperkt", isCorrect: false }
  ],
  why: "Achter aanhanger: deelbaar max 1 m.",
  topic: "uitstekend_aanhanger",
  ruTranslation: {
    question: "Насколько может выступать делимый груз сзади прицепа?",
    answers: ["Не более 1 м", "До 2 м", "Без ограничений"],
    why: "Для делимого — максимум 1 м."
  },
  enTranslation: {
    question: "How far may divisible load protrude at the rear of a trailer?",
    answers: ["No more than 1 m", "Up to 2 m", "Unlimited"],
    why: "Rear overhang for divisible load: max 1 m."
  }
},
{
  id: 273,
  question: "Onder welke voorwaarden mag ondeelbare lading meer dan 1 meter achter een aanhangwagen uitsteken?",
  imageUrl: "",
  answers: [
    { text: "Maximaal de helft van de aanhangwagenlengte achter de achteras, met een max van 5 m", isCorrect: true },
    { text: "Tot 3 m zonder verdere eisen", isCorrect: false },
    { text: "Alleen als er geen markeringsbord is", isCorrect: false }
  ],
  why: "Voorwaarde: ≤ ½ lengte achter as, max 5 m.",
  topic: "uitstekend_aanhanger",
  ruTranslation: {
    question: "При каких условиях неделимый груз может выступать сзади прицепа более 1 м?",
    answers: [
      "Не более половины длины прицепа за задней осью, максимум 5 м",
      "До 3 м без условий",
      "Только если нет щита-разметки"
    ],
    why: "Условие — ≤ половины длины за осью, максимум 5 м."
  },
  enTranslation: {
    question: "Under what conditions may indivisible load exceed 1 m rear overhang on a trailer?",
    answers: [
      "At most half the trailer length behind the rear axle, max 5 m",
      "Up to 3 m without conditions",
      "Only if no marking board is used"
    ],
    why: "Condition: ≤ ½ length behind axle, max 5 m."
  }
},
{
  id: 274,
  question: "Mag ondeelbare lading op een aanhangwagen verder uitsteken dan deelbare lading?",
  imageUrl: "",
  answers: [
    { text: "Ja, voor aanhangwagens mag ondeelbare lading verder uitsteken", isCorrect: true },
    { text: "Nee, voor beiden geldt altijd dezelfde grens", isCorrect: false },
    { text: "Alleen aan de voorkant", isCorrect: false }
  ],
  why: "In de tekst staat dat ondeelbaar verder mag dan deelbaar op aanhangwagen.",
  topic: "uitstekend_aanhanger",
  ruTranslation: {
    question: "Может ли неделимый груз выступать дальше, чем делимый, на прицепе?",
    answers: [
      "Да, для прицепов неделимый груз может выступать дальше",
      "Нет, всегда одинаковые пределы",
      "Только спереди"
    ],
    why: "Указано, что на прицепе неделимый может выступать больше."
  },
  enTranslation: {
    question: "May indivisible load protrude further than divisible load on a trailer?",
    answers: [
      "Yes, indivisible may protrude further on trailers",
      "No, the same limits always apply",
      "Only at the front"
    ],
    why: "Text states indivisible may extend further on trailers."
  }
},
{
  id: 275,
  question: "Welke uitspraak over markering bij personenauto’s is juist?",
  imageUrl: "",
  answers: [
    { text: "Breedte-uitsteken > 10 cm hoeft bij personenauto niet met een bord te worden gemarkeerd", isCorrect: true },
    { text: "Elke breedte-uitsteken moet met bord bij personenauto", isCorrect: false },
    { text: "Markering is alleen bij vrachtwagens verplicht", isCorrect: false }
  ],
  why: "Uitzondering: breedte-markering geldt niet voor personenauto.",
  topic: "markering_lading",
  ruTranslation: {
    question: "Что верно про маркировку ширины для легкового авто?",
    answers: [
      "Выступ по ширине > 10 см не требует щита для легкового",
      "Любой боковой выступ требует щита у легкового",
      "Маркировку делают только на грузовиках"
    ],
    why: "Исключение: правило ширины не для легковых."
  },
  enTranslation: {
    question: "Which statement about marking on passenger cars is correct?",
    answers: [
      "Width overhang >10 cm does not require a board on passenger cars",
      "Any width overhang requires a board on cars",
      "Marking applies only to trucks"
    ],
    why: "Exception: width-marking rule excludes passenger cars."
  }
},
{
  id: 276,
  question: "Wat is verstandig bij lange ondeelbare lading op het dak (personenauto)?",
  imageUrl: "",
  answers: [
    { text: "Draag de lading gecentreerd en goed vastgezet binnen de toegestane uitsteekmaten", isCorrect: true },
    { text: "Alleen vooraan vastmaken is voldoende", isCorrect: false },
    { text: "Strakker spannen dan het dak aankan", isCorrect: false }
  ],
  why: "Veilig zekeren en binnen grenzen blijven.",
  topic: "lading_praktijk",
  ruTranslation: {
    question: "Как правильно везти длинный неделимый груз на крыше легкового?",
    answers: [
      "По центру, надёжно закрепив, в пределах допустимых выносов",
      "Достаточно закрепить только спереди",
      "Стягивать сильнее, чем выдержит крыша"
    ],
    why: "Надёжное крепление и соблюдение лимитов."
  },
  enTranslation: {
    question: "What is sensible with long indivisible roof load (car)?",
    answers: [
      "Carry centered and well secured within allowed overhangs",
      "Only tie at the front",
      "Tighten beyond the roof’s capacity"
    ],
    why: "Secure properly and stay within limits."
  }
},
{
  id: 277,
  question: "Welke maatregel hoort bij nachtelijke markering van uitstekende lading?",
  imageUrl: "",
  answers: [
    { text: "Voor wit licht bij de lading/voorkant, achter rood licht", isCorrect: true },
    { text: "Twee rode lichten vooraan", isCorrect: false },
    { text: "Blauw licht aan beide kanten", isCorrect: false }
  ],
  why: "Overeenkomstig de nachtregels voor markering.",
  topic: "markering_lading",
  ruTranslation: {
    question: "Какая мера относится к ночной маркировке выступающего груза?",
    answers: [
      "Спереди — белый свет, сзади — красный",
      "Два красных огня спереди",
      "Синий свет по бокам"
    ],
    why: "Следует правилам ночной маркировки."
  },
  enTranslation: {
    question: "Which measure applies to night-time marking of protruding load?",
    answers: [
      "White light at the front, red light at the rear",
      "Two red lights at the front",
      "Blue lights on both sides"
    ],
    why: "Matches the night marking rules."
  }
},
{
  id: 278,
  question: "Welke combinatie van regels voor personenauto is correct?",
  imageUrl: "",
  answers: [
    { text: "Voor: deelbaar 0 m/ondeelbaar 1 m; Zijkant: 20 cm; Achter: 1 m", isCorrect: true },
    { text: "Voor: 1 m voor alles; Zijkant: 40 cm; Achter: 2 m", isCorrect: false },
    { text: "Voor: 0 m; Zijkant: onbeperkt; Achter: 0,5 m", isCorrect: false }
  ],
  why: "Dit vat de personenauto-limieten samen.",
  topic: "uitstekend_persauto",
  ruTranslation: {
    question: "Какая комбинация правил для легкового правильная?",
    answers: [
      "Спереди: делимый 0 м/неделимый 1 м; сбоку: 20 см; сзади: 1 м",
      "Спереди: 1 м для всего; сбоку: 40 см; сзади: 2 м",
      "Спереди: 0 м; сбоку: без ограничений; сзади: 0,5 м"
    ],
    why: "Это сводные лимиты для легкового."
  },
  enTranslation: {
    question: "Which set of rules for passenger cars is correct?",
    answers: [
      "Front: divisible 0 m/indivisible 1 m; Side: 20 cm; Rear: 1 m",
      "Front: 1 m for all; Side: 40 cm; Rear: 2 m",
      "Front: 0 m; Side: unlimited; Rear: 0.5 m"
    ],
    why: "This summarises the car limits."
  }
},
{
  id: 279,
  question: "Welke situatie vereist geen markeringsbord voor een personenauto?",
  imageUrl: "",
  answers: [
    { text: "Zijwaartse uitsteken van 12 cm bij daglicht", isCorrect: true },
    { text: "Achteruitsteken van 1,5 m", isCorrect: false },
    { text: "Vooruitsteken van 1,2 m ondeelbaar", isCorrect: false }
  ],
  why: "Breedte-markering geldt niet bij personenauto; 12 cm zijdelings vereist geen bord.",
  topic: "markering_lading",
  ruTranslation: {
    question: "Какая ситуация не требует щита у легкового?",
    answers: [
      "Боковой вынос 12 см днём",
      "Задний вынос 1,5 м",
      "Передний вынос 1,2 м (неделимый)"
    ],
    why: "Правило ширины для легковых не действует."
  },
  enTranslation: {
    question: "Which situation does NOT require a board for a passenger car?",
    answers: [
      "12 cm side overhang in daylight",
      "1.5 m rear overhang",
      "1.2 m front overhang (indivisible)"
    ],
    why: "Width marking doesn’t apply to passenger cars."
  }
},
{
  id: 280,
  question: "Welke uitspraak over veiligheid bij lading is juist?",
  imageUrl: "",
  answers: [
    { text: "Controleer na een korte rit opnieuw of sjorbanden nog strak zitten", isCorrect: true },
    { text: "Bij lage snelheid is zekeren niet nodig", isCorrect: false },
    { text: "Een dakdrager mag altijd tot 3 m breed beladen worden", isCorrect: false }
  ],
  why: "Sjorbanden kunnen zich zetten; hercontrole verhoogt veiligheid.",
  topic: "lading_praktijk",
  ruTranslation: {
    question: "Какое утверждение по безопасности груза верно?",
    answers: [
      "После короткой поездки стоит проверить натяжение ремней",
      "На малой скорости крепить не надо",
      "Багажник на крыше всегда можно грузить до 3 м шириной"
    ],
    why: "Ремни могут ослабнуть — проверка повышает безопасность."
  },
  enTranslation: {
    question: "Which safety statement about load is correct?",
    answers: [
      "After a short drive, recheck that tie-downs are tight",
      "At low speed securing is unnecessary",
      "A roof rack may always be loaded up to 3 m wide"
    ],
    why: "Straps may settle; rechecking improves safety."
  }
},

// verlichting !!!!!!

{
  id: 281,
  question: "Wanneer moet je verlichting gebruiken?",
  imageUrl: "",
  answers: [
    { text: "’s Nachts en overdag bij slecht zicht, binnen en buiten de bebouwde kom", isCorrect: true },
    { text: "Alleen ’s nachts buiten de bebouwde kom", isCorrect: false },
    { text: "Alleen wanneer het regent", isCorrect: false }
  ],
  why: "Verlichting gebruik je ’s nachts én bij slecht zicht, overal.",
  topic: "verlichting_algemeen",
  ruTranslation: {
    question: "Когда нужно включать освещение?",
    answers: [
      "Ночью и днём при плохой видимости, везде",
      "Только ночью вне населённых пунктов",
      "Только во время дождя"
    ],
    why: "Фары нужны ночью и при плохой видимости в любое время и месте."
  },
  enTranslation: {
    question: "When must you use lights?",
    answers: [
      "At night and during poor visibility, everywhere",
      "Only at night outside built-up areas",
      "Only when it rains"
    ],
    why: "Lights are required at night and in poor visibility."
  }
},
{
  id: 282,
  question: "Wat is dimlicht?",
  imageUrl: "",
  answers: [
    { text: "Een naar beneden gerichte lichtbundel voor normaal rijden in donker/slecht zicht", isCorrect: true },
    { text: "Een fel licht dat bedoeld is om te seinen", isCorrect: false },
    { text: "Een lamp die alleen bij parkeren gebruikt wordt", isCorrect: false }
  ],
  why: "Dimlicht is de standaard rijverlichting in het donker.",
  topic: "dimlicht",
  ruTranslation: {
    question: "Что такое ближний свет (dimlicht)?",
    answers: [
      "Направленный вниз пучок для обычной езды в темноте/при плохой видимости",
      "Яркий свет только для подачи сигналов",
      "Лампа только для стоянки"
    ],
    why: "Ближний — базовый свет для движения ночью."
  },
  enTranslation: {
    question: "What is low beam (dimlicht)?",
    answers: [
      "A downward beam for normal driving in the dark/poor visibility",
      "A bright light only for flashing",
      "A lamp used only when parked"
    ],
    why: "Low beam is the standard night-driving light."
  }
},
{
  id: 283,
  question: "Wanneer is het gebruik van dimlicht verplicht?",
  imageUrl: "",
  answers: [
    { text: "In het donker en bij slecht zicht", isCorrect: true },
    { text: "Alleen in een tunnel", isCorrect: false },
    { text: "Alleen bij mist", isCorrect: false }
  ],
  why: "Dimlicht aan in donker én bij beperkt zicht.",
  topic: "dimlicht",
  ruTranslation: {
    question: "Когда обязателен ближний свет?",
    answers: [
      "В темноте и при плохой видимости",
      "Только в туннеле",
      "Только в тумане"
    ],
    why: "Ближний включают и ночью, и при ограниченной видимости."
  },
  enTranslation: {
    question: "When is low beam mandatory?",
    answers: [
      "In the dark and with poor visibility",
      "Only in a tunnel",
      "Only in fog"
    ],
    why: "Use low beam in darkness and poor visibility."
  }
},
{
  id: 284,
  question: "Mag je dimlichten uit laten terwijl mistlichten branden?",
  imageUrl: "",
  answers: [
    { text: "Ja, dimlichten hoeven niet aan als mistlichten aanstaan", isCorrect: true },
    { text: "Nee, dimlicht moet altijd samen met mistlicht", isCorrect: false },
    { text: "Alleen buiten de bebouwde kom", isCorrect: false }
  ],
  why: "De tekst vermeldt dat dimlichten niet aan hoeven als mistlichten branden.",
  topic: "dimlicht_mistlicht",
  ruTranslation: {
    question: "Можно ли ехать с одними противотуманными без ближнего?",
    answers: [
      "Да, ближний необязателен при включённых туманках",
      "Нет, туманки всегда вместе с ближним",
      "Только вне города"
    ],
    why: "Указано, что при включённых туманках ближний не обязателен."
  },
  enTranslation: {
    question: "May you keep low beam off while fog lights are on?",
    answers: [
      "Yes, low beam need not be on when fog lights are on",
      "No, low beam must always be with fog lights",
      "Only outside built-up areas"
    ],
    why: "Text states low beam isn’t required when fog lights are used."
  }
},
{
  id: 285,
  question: "Waarvoor gebruik je stadslicht (parkeerlicht)?",
  imageUrl: "",
  answers: [
    { text: "Alleen bij stilstaan of parkeren", isCorrect: true },
    { text: "Om beter te zien in het donker tijdens het rijden", isCorrect: false },
    { text: "Als vervanging van groot licht", isCorrect: false }
  ],
  why: "Stadslicht is bedoeld voor stilstand/parkeren.",
  topic: "stadslicht",
  ruTranslation: {
    question: "Для чего используют габаритный/парковочный свет?",
    answers: [
      "Только при остановке или парковке",
      "Чтобы лучше видеть при езде ночью",
      "Как замену дальнего света"
    ],
    why: "Габариты используются при стоянке."
  },
  enTranslation: {
    question: "What is sidelights/parking lights used for?",
    answers: [
      "Only when stationary or parked",
      "To see better while driving at night",
      "As a replacement for high beam"
    ],
    why: "Parking lights are for when standing still."
  }
},
{
  id: 286,
  question: "Waar moet je stadslicht en achterlicht voeren als je in het donker stilstaat/geparkeerd staat?",
  imageUrl: "",
  answers: [
    { text: "Op rijbaan buiten de bebouwde kom of op (vlucht)strook langs autoweg/snelweg", isCorrect: true },
    { text: "Overal binnen de bebouwde kom", isCorrect: false },
    { text: "Alleen op privéterrein", isCorrect: false }
  ],
  why: "Dit zijn expliciet genoemde plaatsen.",
  topic: "stadslicht",
  ruTranslation: {
    question: "Где нужно включать габариты/задний свет при остановке в темноте?",
    answers: [
      "На проезжей части вне города или на (вне)полосе вдоль авто- и скоростной дороги",
      "Везде внутри города",
      "Только на частной территории"
    ],
    why: "Перечислены конкретные места."
  },
  enTranslation: {
    question: "Where must you use sidelights/rear lights when stationary at night?",
    answers: [
      "On the carriageway outside built-up areas or on (hard)shoulders by motor roads",
      "Everywhere within built-up areas",
      "Only on private property"
    ],
    why: "These locations are explicitly mentioned."
  }
},
{
  id: 287,
  question: "Wanneer mag je groot licht voeren?",
  imageUrl: "",
  answers: [
    { text: "Alleen als er geen ander verkeer in de buurt is", isCorrect: true },
    { text: "Altijd ’s nachts, ongeacht verkeer", isCorrect: false },
    { text: "Alleen binnen de bebouwde kom", isCorrect: false }
  ],
  why: "Groot licht kan verblinden; gebruik het zonder ander verkeer.",
  topic: "groot_licht",
  ruTranslation: {
    question: "Когда можно использовать дальний свет?",
    answers: [
      "Только когда рядом нет других участников движения",
      "Всегда ночью независимо от трафика",
      "Только в городе"
    ],
    why: "Дальний может ослеплять — используйте без соседнего трафика."
  },
  enTranslation: {
    question: "When may you use high beam?",
    answers: [
      "Only when no other traffic is nearby",
      "Always at night regardless of traffic",
      "Only in urban areas"
    ],
    why: "High beam can dazzle; use when no one’s around."
  }
},
{
  id: 288,
  question: "Wanneer mag je géén groot licht voeren?",
  imageUrl: "",
  answers: [
    { text: "Overdag, bij tegenkomend verkeer en als je dicht achter een ander rijdt", isCorrect: true },
    { text: "Alleen op snelwegen", isCorrect: false },
    { text: "Bij mist", isCorrect: false }
  ],
  why: "Deze drie situaties zijn expliciet genoemd.",
  topic: "groot_licht",
  ruTranslation: {
    question: "Когда нельзя пользоваться дальним светом?",
    answers: [
      "Днём, при встречных и когда едешь близко сзади",
      "Только на автомагистралях",
      "В тумане"
    ],
    why: "Три запрета указаны напрямую."
  },
  enTranslation: {
    question: "When must you not use high beam?",
    answers: [
      "During the day, with oncoming traffic, and when close behind another vehicle",
      "Only on motorways",
      "In fog"
    ],
    why: "These three cases are listed explicitly."
  }
},
{
  id: 289,
  question: "Wanneer gebruik je mistlicht vóór?",
  imageUrl: "",
  answers: [
    { text: "Bij ernstig belemmerd zicht door mist, sneeuwval of regen, met richtlijn < 200 m", isCorrect: true },
    { text: "Altijd bij lichte regen", isCorrect: false },
    { text: "Alleen op onverharde wegen", isCorrect: false }
  ],
  why: "Mistlicht voor: bij ernstig beperkt zicht; richtlijn minder dan 200 m.",
  topic: "mistlicht_voor",
  ruTranslation: {
    question: "Когда включают передние противотуманные фары?",
    answers: [
      "При сильно ограниченной видимости из-за тумана/снега/дождя, ориентир < 200 м",
      "Всегда при небольшом дожде",
      "Только на грунтовых дорогах"
    ],
    why: "Передний туман — при серьёзно плохой видимости (<200 м)."
  },
  enTranslation: {
    question: "When do you use front fog lights?",
    answers: [
      "When visibility is seriously reduced by fog/snow/rain; guideline <200 m",
      "Always in light rain",
      "Only on unpaved roads"
    ],
    why: "Front fog is for seriously reduced visibility (<200 m)."
  }
},
{
  id: 290,
  question: "Wanneer mag je mistachterlicht gebruiken?",
  imageUrl: "",
  answers: [
    { text: "Als het zicht minder is dan 50 meter door mist of sneeuwval", isCorrect: true },
    { text: "Bij slecht zicht door regen", isCorrect: false },
    { text: "Altijd samen met groot licht", isCorrect: false }
  ],
  why: "Mistachterlicht: < 50 m zicht bij sneeuw/mist; niet bij regen.",
  topic: "mistlicht_achter",
  ruTranslation: {
    question: "Когда разрешён задний противотуманный свет?",
    answers: [
      "При видимости < 50 м из-за тумана или снегопада",
      "При плохой видимости из-за дождя",
      "Всегда вместе с дальним"
    ],
    why: "Задний туман — при <50 м, дождь не повод."
  },
  enTranslation: {
    question: "When may you use the rear fog light?",
    answers: [
      "When visibility is under 50 m due to fog or snowfall",
      "In poor visibility due to rain",
      "Always together with high beam"
    ],
    why: "Rear fog is for <50 m in fog/snow; not for rain."
  }
},
{
  id: 291,
  question: "Wat zijn dagrijlichten (DRL) en sinds wanneer verplicht op nieuwe auto’s?",
  imageUrl: "",
  answers: [
    { text: "Lichten voor zichtbaarheid overdag; verplicht op nieuwe auto’s sinds 2011", isCorrect: true },
    { text: "Extra groot licht; verplicht sinds 2001", isCorrect: false },
    { text: "Parkeerlichten; verplicht sinds 1997", isCorrect: false }
  ],
  why: "DRL maken je overdag beter zichtbaar; verplicht vanaf 2011 voor nieuwe modellen.",
  topic: "dagrijlichten",
  ruTranslation: {
    question: "Что такое дневные ходовые огни и с какого года обязательны на новых авто?",
    answers: [
      "Огни видимости днём; обязательны для новых авто с 2011",
      "Это дальний свет; обязателен с 2001",
      "Это габариты; обязательны с 1997"
    ],
    why: "ДХО повышают видимость днём; для новых моделей — с 2011."
  },
  enTranslation: {
    question: "What are DRLs and since when are they mandatory on new cars?",
    answers: [
      "Daytime running lights; mandatory for new cars since 2011",
      "Extra high beam; mandatory since 2001",
      "Parking lights; mandatory since 1997"
    ],
    why: "DRLs improve daytime visibility; mandatory since 2011."
  }
},
{
  id: 292,
  question: "Mogen dagrijlichten tegelijk branden met andere verlichting aan de voorzijde?",
  imageUrl: "",
  answers: [
    { text: "Nee, DRL mogen niet tegelijk branden met andere voorlichten", isCorrect: true },
    { text: "Ja, altijd samen met dimlicht", isCorrect: false },
    { text: "Alleen samen met groot licht", isCorrect: false }
  ],
  why: "DRL niet tegelijk met andere voorzijde-verlichting.",
  topic: "dagrijlichten",
  ruTranslation: {
    question: "Можно ли чтобы ДХО горели одновременно с другими передними фарами?",
    answers: [
      "Нет, ДХО не должны гореть вместе с другими передними огнями",
      "Да, всегда вместе с ближним",
      "Только вместе с дальним"
    ],
    why: "ДХО не совмещают с другими передними источниками."
  },
  enTranslation: {
    question: "May DRLs be on simultaneously with other front lights?",
    answers: [
      "No, DRLs must not be on together with other front lighting",
      "Yes, always with low beam",
      "Only with high beam"
    ],
    why: "DRLs are not combined with other front lights."
  }
},
{
  id: 293,
  question: "Wat geldt voor kentekenplaatverlichting en achterlichten?",
  imageUrl: "",
  answers: [
    { text: "Ze moeten altijd branden bij gebruik van dimlicht, groot licht, stadslicht of mistlicht", isCorrect: true },
    { text: "Alleen verplicht met groot licht", isCorrect: false },
    { text: "Niet nodig met DRL", isCorrect: false }
  ],
  why: "Bij genoemde voorverlichting branden kenteken- en achterlichten mee.",
  topic: "achter_kenteken_verlichting",
  ruTranslation: {
    question: "Что верно про подсветку номера и задние огни?",
    answers: [
      "Они должны гореть всегда при включённом ближнем/дальнем/габаритах/туманках",
      "Только вместе с дальним",
      "Не нужны с ДХО"
    ],
    why: "При перечисленных передних огнях задние и подсветка номера включены."
  },
  enTranslation: {
    question: "What applies to license plate and rear lights?",
    answers: [
      "They must always be on when low, high, parking or fog lights are used",
      "Only required with high beam",
      "Not needed with DRLs"
    ],
    why: "They accompany the mentioned front lights."
  }
},
{
  id: 294,
  question: "Wanneer gebruik je alarmlichten (waarschuwingslichten)?",
  imageUrl: "",
  answers: [
    { text: "Bij pech, gevaarlijke/ slecht zichtbare stopplaats of bij filevorming op de snelweg", isCorrect: true },
    { text: "Om een inhaalmanoeuvre aan te kondigen", isCorrect: false },
    { text: "Altijd bij parkeren", isCorrect: false }
  ],
  why: "Dit zijn de drie expliciet genoemde situaties.",
  topic: "alarmlichten",
  ruTranslation: {
    question: "Когда включают аварийную сигнализацию?",
    answers: [
      "При поломке, остановке в опасном/плохо видимом месте, при образовании пробки на шоссе",
      "Чтобы предупредить об обгоне",
      "Всегда при парковке"
    ],
    why: "Три перечисленные ситуации."
  },
  enTranslation: {
    question: "When do you use hazard warning lights?",
    answers: [
      "For breakdown, dangerous/poorly visible stops, or forming queues on the motorway",
      "To announce an overtaking manoeuvre",
      "Always when parking"
    ],
    why: "These three cases are specified."
  }
},
{
  id: 295,
  question: "Wanneer moet je de richtingaanwijzer gebruiken?",
  imageUrl: "",
  answers: [
    { text: "Bij elke belangrijke zijdelingse verplaatsing", isCorrect: true },
    { text: "Alleen bij afslaan", isCorrect: false },
    { text: "Alleen bij het verlaten van een rotonde", isCorrect: false }
  ],
  why: "Plicht geldt voor alle belangrijke zijwaartse verplaatsingen.",
  topic: "richtingaanwijzer",
  ruTranslation: {
    question: "Когда нужно пользоваться поворотником?",
    answers: [
      "При любом значимом боковом перемещении",
      "Только при повороте",
      "Только при съезде с кольца"
    ],
    why: "Обязанность распространяется на все важные манёвры вбок."
  },
  enTranslation: {
    question: "When must you use the indicator?",
    answers: [
      "At every important lateral movement",
      "Only when turning",
      "Only when leaving a roundabout"
    ],
    why: "It’s required for all significant lateral shifts."
  }
},
{
  id: 296,
  question: "Noem een voorbeeld van een zijdelingse verplaatsing waarbij je móét richting aangeven.",
  imageUrl: "",
  answers: [
    { text: "Wisselen van rijstrook", isCorrect: true },
    { text: "Rechtuit blijven rijden", isCorrect: false },
    { text: "Snelheid aanpassen", isCorrect: false }
  ],
  why: "Rijstrookwissel is expliciet genoemd.",
  topic: "richtingaanwijzer",
  ruTranslation: {
    question: "Назови пример бокового перемещения, где ОБЯЗАТЕЛЕН поворотник.",
    answers: [
      "Смена полосы",
      "Движение прямо",
      "Снижение/увеличение скорости"
    ],
    why: "Смена полосы указана напрямую."
  },
  enTranslation: {
    question: "Give an example of a lateral move where you must indicate.",
    answers: [
      "Changing lanes",
      "Continuing straight",
      "Adjusting speed"
    ],
    why: "Lane change is explicitly listed."
  }
},
{
  id: 297,
  question: "Wat doe je met de richtingaanwijzer na het afronden van de verplaatsing?",
  imageUrl: "",
  answers: [
    { text: "Direct weer uitschakelen", isCorrect: true },
    { text: "Nog 10 seconden laten knipperen", isCorrect: false },
    { text: "Aan laten tot de volgende kruising", isCorrect: false }
  ],
  why: "Na afronden zet je de richtingaanwijzer direct uit.",
  topic: "richtingaanwijzer",
  ruTranslation: {
    question: "Что делать с поворотником после завершения манёвра?",
    answers: [
      "Сразу выключить",
      "Оставить на 10 секунд",
      "Держать до следующего перекрёстка"
    ],
    why: "После завершения манёвра поворотник выключают сразу."
  },
  enTranslation: {
    question: "What do you do with the indicator after completing the move?",
    answers: [
      "Switch it off immediately",
      "Leave it on for 10 seconds",
      "Keep it on until the next junction"
    ],
    why: "Turn it off right after the manoeuvre."
  }
},
{
  id: 298,
  question: "Bij welke van deze handelingen moet je richting aangeven?",
  imageUrl: "",
  answers: [
    { text: "Inhalen of voorsorteren", isCorrect: true },
    { text: "Rijden met constante snelheid", isCorrect: false },
    { text: "Remmen voor een verkeersdrempel", isCorrect: false }
  ],
  why: "Inhalen en voorsorteren zijn genoemde zijverplaatsingen.",
  topic: "richtingaanwijzer",
  ruTranslation: {
    question: "При каких действиях нужно включать поворотник?",
    answers: [
      "При обгоне или предварительном перестроении",
      "При движении с постоянной скоростью",
      "При торможении перед лежачим"
    ],
    why: "Обгон и перестроение — это боковые перемещения."
  },
  enTranslation: {
    question: "For which actions must you indicate?",
    answers: [
      "Overtaking or pre-positioning",
      "Driving at constant speed",
      "Braking for a speed bump"
    ],
    why: "Overtaking and pre-positioning are lateral moves."
  }
},
{
  id: 299,
  question: "Welke handeling vraagt óók om richting aangeven?",
  imageUrl: "",
  answers: [
    { text: "Wegrijden", isCorrect: true },
    { text: "Stoppen voor rood licht", isCorrect: false },
    { text: "Rijden in een file", isCorrect: false }
  ],
  why: "Wegrijden is genoemd; je laat anderen weten wat je doet.",
  topic: "richtingaanwijzer",
  ruTranslation: {
    question: "Какое действие тоже требует включать поворотник?",
    answers: [
      "Начало движения (выезд)",
      "Остановка на красный",
      "Езда в пробке"
    ],
    why: "Выезд — из списка обязательных случаев."
  },
  enTranslation: {
    question: "Which action also requires indicating?",
    answers: [
      "Moving off",
      "Stopping at a red light",
      "Driving in a traffic jam"
    ],
    why: "Moving off is on the list."
  }
},
{
  id: 300,
  question: "Moet je richting aangeven bij het oprijden of verlaten van de doorgaande rijbaan?",
  imageUrl: "",
  answers: [
    { text: "Ja, bij beide handelingen", isCorrect: true },
    { text: "Alleen bij verlaten", isCorrect: false },
    { text: "Alleen op autosnelwegen", isCorrect: false }
  ],
  why: "Beide staan genoemd als voorbeelden.",
  topic: "richtingaanwijzer",
  ruTranslation: {
    question: "Нужно ли включать поворотник при выезде на/с основной проезжей части?",
    answers: [
      "Да, в обоих случаях",
      "Только при съезде",
      "Только на автострадах"
    ],
    why: "Оба случая перечислены."
  },
  enTranslation: {
    question: "Must you indicate when entering or leaving the main carriageway?",
    answers: [
      "Yes, for both actions",
      "Only when leaving",
      "Only on motorways"
    ],
    why: "Both are listed examples."
  }
},
{
  id: 301,
  question: "Wat doe je met richtingaanwijzer op een rotonde?",
  imageUrl: "",
  answers: [
    { text: "Richting aangeven bij het verlaten van de rotonde", isCorrect: true },
    { text: "Continu links laten knipperen tijdens de hele rotonde", isCorrect: false },
    { text: "Geen richting nodig op rotondes", isCorrect: false }
  ],
  why: "Expliciet: bij het verlaten richting aangeven.",
  topic: "richtingaanwijzer_rotonde",
  ruTranslation: {
    question: "Как использовать поворотник на кольце?",
    answers: [
      "Включить при съезде с круга",
      "Держать левый мигающим всё время",
      "На круге поворотник не нужен"
    ],
    why: "Прямо указано — при съезде."
  },
  enTranslation: {
    question: "How do you use indicators on a roundabout?",
    answers: [
      "Indicate when leaving the roundabout",
      "Keep left indicator on all the way",
      "No indicator needed"
    ],
    why: "Explicitly: indicate on exit."
  }
},
{
  id: 302,
  question: "Mag je rijden met een auto waarvan de verlichting niet werkt?",
  imageUrl: "",
  answers: [
    { text: "Nee, je mag niet rijden met defecte verlichting (ook overdag niet)", isCorrect: true },
    { text: "Ja, zolang het droog is", isCorrect: false },
    { text: "Ja, als je alarmlichten aan zijn", isCorrect: false }
  ],
  why: "Defecte verlichting = niet rijden.",
  topic: "verlichting_eis",
  ruTranslation: {
    question: "Можно ли ехать на авто с неработающим освещением?",
    answers: [
      "Нет, ездить нельзя (даже днём)",
      "Да, если сухо",
      "Да, если включена аварийка"
    ],
    why: "С неисправным освещением ездить нельзя."
  },
  enTranslation: {
    question: "May you drive a car with defective lights?",
    answers: [
      "No, you may not drive (even during the day)",
      "Yes, if it’s dry",
      "Yes, if hazard lights are on"
    ],
    why: "Defective lighting means do not drive."
  }
},
{
  id: 303,
  question: "Hoeveel dimlichten en grote lichten moet een personenauto hebben (voorzijde)?",
  imageUrl: "",
  answers: [
    { text: "2 dimlichten en 2 grote lichten", isCorrect: true },
    { text: "1 dimlicht en 1 groot licht", isCorrect: false },
    { text: "4 dimlichten en 2 grote lichten", isCorrect: false }
  ],
  why: "Opsomming: twee dimlichten en twee grote lichten.",
  topic: "verplichte_verlichting",
  ruTranslation: {
    question: "Сколько ближнего и дальнего света должно быть спереди у легкового?",
    answers: [
      "Два ближних и два дальних",
      "По одному ближнему и дальнему",
      "Четыре ближних и два дальних"
    ],
    why: "В списке: по две фары каждого типа."
  },
  enTranslation: {
    question: "How many low and high beams must a car have (front)?",
    answers: [
      "2 low beams and 2 high beams",
      "1 low and 1 high beam",
      "4 low beams and 2 high beams"
    ],
    why: "List states two low and two high beams."
  }
},
{
  id: 304,
  question: "Hoeveel richtingaanwijzers aan de voorzijde en achterzijde worden genoemd?",
  imageUrl: "",
  answers: [
    { text: "2 voor en (voor auto’s na 31-12-1997) 2 achter", isCorrect: true },
    { text: "1 voor en 1 achter", isCorrect: false },
    { text: "4 voor en 4 achter", isCorrect: false }
  ],
  why: "Opsomming specificeert twee voor en twee achter (na 31-12-1997).",
  topic: "verplichte_verlichting",
  ruTranslation: {
    question: "Сколько указателей поворота спереди и сзади указано?",
    answers: [
      "2 спереди и (для авто после 31-12-1997) 2 сзади",
      "По одному спереди и сзади",
      "По четыре спереди и сзади"
    ],
    why: "В перечне: два спереди и два сзади (для новых авто)."
  },
  enTranslation: {
    question: "How many indicators at the front and rear are listed?",
    answers: [
      "2 front and (for cars after 31-12-1997) 2 rear",
      "1 front and 1 rear",
      "4 front and 4 rear"
    ],
    why: "List specifies two front and two rear (post 31-12-1997)."
  }
},
{
  id: 305,
  question: "Welke waarschuwingslichten (alarmlichten) eis geldt volgens de lijst?",
  imageUrl: "",
  answers: [
    { text: "Alarmlichten zijn verplicht voor auto’s na 31 december 1997", isCorrect: true },
    { text: "Alarmlichten zijn niet toegestaan", isCorrect: false },
    { text: "Alarmlichten alleen voor vrachtwagens", isCorrect: false }
  ],
  why: "De opsomming noemt alarmlichten als verplicht (na datum).",
  topic: "verplichte_verlichting",
  ruTranslation: {
    question: "Какое требование к аварийной сигнализации указано?",
    answers: [
      "Аварийка обязательна для авто после 31-12-1997",
      "Аварийка запрещена",
      "Аварийка только для грузовиков"
    ],
    why: "В перечне аварийка обязательна для новых авто."
  },
  enTranslation: {
    question: "What requirement for hazard lights is listed?",
    answers: [
      "Hazard lights are mandatory for cars after 31 Dec 1997",
      "Hazard lights are not allowed",
      "Hazard lights only for trucks"
    ],
    why: "List marks hazards as mandatory after that date."
  }
},
{
  id: 306,
  question: "Welke achterzijde-verlichting wordt genoemd als verplicht?",
  imageUrl: "",
  answers: [
    { text: "2 achterlichten en 2 remlichten", isCorrect: true },
    { text: "1 achterlicht en 1 remlicht", isCorrect: false },
    { text: "3 achterlichten en 1 remlicht", isCorrect: false }
  ],
  why: "De lijst noemt twee achterlichten en twee remlichten.",
  topic: "verplichte_verlichting",
  ruTranslation: {
    question: "Какие задние огни указаны как обязательные?",
    answers: [
      "2 габарита сзади и 2 стоп-сигнала",
      "По одному габариту и стоп-сигналу",
      "3 габарита и 1 стоп-сигнал"
    ],
    why: "В списке — по два."
  },
  enTranslation: {
    question: "Which rear lights are mandatory according to the list?",
    answers: [
      "2 rear lights and 2 brake lights",
      "1 rear and 1 brake light",
      "3 rear lights and 1 brake light"
    ],
    why: "List states two rear lights and two brake lights."
  }
},
{
  id: 307,
  question: "Welke verlichting hoort bij het kenteken achter?",
  imageUrl: "",
  answers: [
    { text: "1 achterkentekenplaatverlichting", isCorrect: true },
    { text: "2 achterkentekenlampen verplicht", isCorrect: false },
    { text: "Geen, alleen reflectors", isCorrect: false }
  ],
  why: "De lijst noemt één kentekenplaatverlichting achter.",
  topic: "verplichte_verlichting",
  ruTranslation: {
    question: "Какая подсветка обязательна для заднего номера?",
    answers: [
      "1 лампа подсветки номерного знака сзади",
      "Обязательны 2 лампы подсветки",
      "Никакой — только отражатели"
    ],
    why: "Перечень указывает одну подсветку номера сзади."
  },
  enTranslation: {
    question: "What lighting is required for the rear license plate?",
    answers: [
      "1 rear license plate light",
      "2 license plate lights mandatory",
      "None, reflectors only"
    ],
    why: "List mentions one rear plate light."
  }
},
{
  id: 308,
  question: "Welke extra lichten kunnen verplicht zijn afhankelijk van bouwjaar/lengte?",
  imageUrl: "",
  answers: [
    { text: "Zijmarkeringslichten en ambergele retroreflectoren (voor auto’s > 6 m, na genoemde data)", isCorrect: true },
    { text: "Neonondervloerlichten", isCorrect: false },
    { text: "Blauwe zwaailampen", isCorrect: false }
  ],
  why: "De lijst noemt zijmarkeringslichten/retroreflectoren voor lange voertuigen.",
  topic: "verplichte_verlichting",
  ruTranslation: {
    question: "Какие дополнительные огни могут быть обязательны в зависимости от года/длины?",
    answers: [
      "Боковые габаритные огни и янтарные отражатели (для авто > 6 м, после указанных дат)",
      "Неон под днищем",
      "Синие маяки"
    ],
    why: "Для длинных авто перечислены боковые огни/отражатели."
  },
  enTranslation: {
    question: "Which additional lights may be mandatory depending on year/length?",
    answers: [
      "Side marker lights and amber retroreflectors (for vehicles >6 m, after stated dates)",
      "Neon underglow",
      "Blue beacons"
    ],
    why: "List includes side markers/reflectors for long vehicles."
  }
},
{
  id: 309,
  question: "Wat is het derde remlicht en voor welke auto’s verplicht?",
  imageUrl: "",
  answers: [
    { text: "Een extra remlicht, verplicht voor auto’s na september 2001", isCorrect: true },
    { text: "Een remlicht linksvoor, verplicht sinds 1990", isCorrect: false },
    { text: "Een mistachterlicht, verplicht voor alle auto’s", isCorrect: false }
  ],
  why: "De lijst noemt het derde remlicht voor auto’s na 09/2001.",
  topic: "verplichte_verlichting",
  ruTranslation: {
    question: "Что такое третий стоп-сигнал и для каких авто обязателен?",
    answers: [
      "Дополнительный стоп-сигнал, обязателен для авто после сентября 2001",
      "Передний левый стоп-сигнал, обязателен с 1990",
      "Задний противотуманный, обязателен для всех"
    ],
    why: "Указано: третий стоп-сигнал — для авто после 09/2001."
  },
  enTranslation: {
    question: "What is the third brake light and for which cars is it mandatory?",
    answers: [
      "An extra brake light, mandatory for cars after Sept 2001",
      "A left front brake light, mandatory since 1990",
      "A rear fog light, mandatory for all cars"
    ],
    why: "List mentions third brake light for cars after 09/2001."
  }
},
{
  id: 310,
  question: "Welke uitspraak over verkeerd gebruik van verlichting is juist?",
  imageUrl: "",
  answers: [
    { text: "Verkeerd of niet gebruiken van verlichting kan gevaarlijk zijn", isCorrect: true },
    { text: "Onjuiste verlichting is alleen een esthetisch probleem", isCorrect: false },
    { text: "Overdag maakt verlichting nooit uit", isCorrect: false }
  ],
  why: "In de tekst staat dat verkeerd/niet gebruiken gevaarlijk kan zijn.",
  topic: "verlichting_veiligheid",
  ruTranslation: {
    question: "Какое утверждение о неправильном использовании света верно?",
    answers: [
      "Неправильное или отсутствующее освещение может быть опасным",
      "Ошибочное освещение — только эстетическая проблема",
      "Днём освещение никогда не важно"
    ],
    why: "В тексте сказано, что неправильное/неиспользование опасно."
  },
  enTranslation: {
    question: "Which statement about incorrect light use is correct?",
    answers: [
      "Incorrect or no use of lights can be dangerous",
      "Wrong lighting is only an aesthetic issue",
      "Lighting never matters during the day"
    ],
    why: "Text warns that wrong/no lighting can be hazardous."
  }
},
// verkeerslichten met images
{
  id: 311,
  question: "Welk lampje zie je hier en waarvoor gebruik je het?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/dashbord6_jbqcc7.png", // stadslicht / parkeerlicht (groen)
  answers: [
    { text: "Stadslicht (parkeerlicht): gebruik je alleen bij stilstaan/parkeren", isCorrect: true },
    { text: "Dimlicht: gebruik je tijdens het rijden in het donker", isCorrect: false },
    { text: "Groot licht: voor maximale verlichting op lege wegen", isCorrect: false }
  ],
  why: "Het pictogram met twee groene bogen is het stads-/parkeerlicht; niet bedoeld om mee te rijden.",
  topic: "dashboard_icons",
  ruTranslation: {
    question: "Какой это индикатор и для чего он используется?",
    answers: [
      "Габариты/парковочный свет: только при остановке/парковке",
      "Ближний свет: для движения в темноте",
      "Дальний свет: для пустых дорог"
    ],
    why: "Две зелёные «полудуги» — габариты; не для движения."
  },
  enTranslation: {
    question: "Which light is this and what is it for?",
    answers: [
      "Sidelights/parking lights: used only when stationary/parked",
      "Low beam: used when driving in the dark",
      "High beam: for empty roads"
    ],
    why: "Two green arcs = parking lights; not for driving."
  }
},
{
  id: 312,
  question: "Wat betekent het als dit groene pijlen-lampje knippert?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/dashbord7_lccspl.png", // richtingaanwijzers
  answers: [
    { text: "Richtingaanwijzers zijn ingeschakeld", isCorrect: true },
    { text: "Alarmlichten staan aan", isCorrect: false },
    { text: "Cruisecontrol is actief", isCorrect: false }
  ],
  why: "Twee groene pijlen horen bij de knipperlichten (links/rechts).",
  topic: "dashboard_icons",
  ruTranslation: {
    question: "Что означает мигание зелёных стрелок?",
    answers: [
      "Включены указатели поворота",
      "Включена аварийка",
      "Активен круиз-контроль"
    ],
    why: "Две зелёные стрелки — поворотники."
  },
  enTranslation: {
    question: "What does the flashing green arrows icon mean?",
    answers: [
      "Turn indicators are on",
      "Hazard lights are on",
      "Cruise control is active"
    ],
    why: "Two green arrows indicate indicators."
  }
},
{
  id: 313,
  question: "Wanneer mag je dit amberkleurige mistachterlicht gebruiken?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/dashbord8_ctghwq.png", // mistachterlicht (amber)
  answers: [
    { text: "Alleen als het zicht < 50 meter is door mist of sneeuwval", isCorrect: true },
    { text: "Bij zware regen en zicht 150 meter", isCorrect: false },
    { text: "Altijd samen met groot licht", isCorrect: false }
  ],
  why: "Mistachterlicht is fel en kan verblinden; gebruik alleen bij < 50 m in mist/sneeuw.",
  topic: "dashboard_icons",
  ruTranslation: {
    question: "Когда можно включать этот жёлтый задний противотуманный?",
    answers: [
      "Только при видимости < 50 м из-за тумана или снегопада",
      "При сильном дожде и видимости 150 м",
      "Всегда вместе с дальним"
    ],
    why: "Задний туман очень яркий — только при < 50 м в тумане/снегу."
  },
  enTranslation: {
    question: "When may you use this amber rear fog light?",
    answers: [
      "Only when visibility is < 50 m due to fog or snowfall",
      "In heavy rain with 150 m visibility",
      "Always together with high beam"
    ],
    why: "Rear fog is very bright; use only <50 m in fog/snow."
  }
},
{
  id: 314,
  question: "Dit groene mistlampje hoort bij de voorkant. Wat is de richtlijn voor gebruik?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/dashbord9_ortggn.png", // mistlicht vóór (groen)
  answers: [
    { text: "Bij ernstig belemmerd zicht; richtlijn minder dan 200 meter", isCorrect: true },
    { text: "Alleen op onverharde wegen", isCorrect: false },
    { text: "Altijd samen met groot licht", isCorrect: false }
  ],
  why: "Mistlamp vóór: voor ernstig beperkt zicht (fog/sneeuw/hevige regen), ~<200 m.",
  topic: "dashboard_icons",
  ruTranslation: {
    question: "Это зелёный передний противотуманный. Когда его включать?",
    answers: [
      "При сильно ограниченной видимости; ориентир < 200 м",
      "Только на грунтовке",
      "Всегда вместе с дальним"
    ],
    why: "Передний туман — при сильно плохой видимости (~<200 м)."
  },
  enTranslation: {
    question: "This green icon is the front fog light. When to use it?",
    answers: [
      "When visibility is seriously reduced; guideline <200 m",
      "Only on unpaved roads",
      "Always with high beam"
    ],
    why: "Front fog is for severely reduced visibility (~<200 m)."
  }
},
{
  id: 315,
  question: "Wat betekent dit blauwe lampje op het dashboard?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/dashbord10_ckob74.png", // groot licht (blauw)
  answers: [
    { text: "Groot licht staat aan", isCorrect: true },
    { text: "Dimlicht staat aan", isCorrect: false },
    { text: "Dagrijverlichting staat aan", isCorrect: false }
  ],
  why: "Blauw koplamp-symbool = groot licht (high beam).",
  topic: "dashboard_icons",
  ruTranslation: {
    question: "Что означает эта синяя лампа на панели?",
    answers: [
      "Включён дальний свет",
      "Включён ближний свет",
      "Горят дневные ходовые огни"
    ],
    why: "Синий символ фары — дальний свет."
  },
  enTranslation: {
    question: "What does this blue dashboard light mean?",
    answers: [
      "High beam is on",
      "Low beam is on",
      "Daytime running lights are on"
    ],
    why: "Blue headlamp icon = high beam."
  }
},
{
  id: 316,
  question: "Dit groene koplamp-symbool met drie strepen betekent…",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/dashbord11_p0dnpr.png", // dimlicht (groen)
  answers: [
    { text: "Dimlicht (low beam) staat aan", isCorrect: true },
    { text: "Stadslicht staat aan", isCorrect: false },
    { text: "Parkeersensoren zijn actief", isCorrect: false }
  ],
  why: "Groen koplamp-icoon met horizontale strepen = dimlicht.",
  topic: "dashboard_icons",
  ruTranslation: {
    question: "Этот зелёный символ с тремя линиями означает…",
    answers: [
      "Включён ближний свет",
      "Горят габариты",
      "Активны парктроники"
    ],
    why: "Зелёная фара с линиями — ближний свет."
  },
  enTranslation: {
    question: "This green headlamp icon with three lines means…",
    answers: [
      "Low beam is on",
      "Sidelights are on",
      "Parking sensors active"
    ],
    why: "Green headlamp with lines = low beam."
  }
},
{
  id: 317,
  question: "Wat moet je doen met groot licht (blauw lampje) bij tegenliggers?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/dashbord10_ckob74.png",
  answers: [
    { text: "Tijdig uitschakelen om verblinding te voorkomen", isCorrect: true },
    { text: "Aan laten voor beter zicht", isCorrect: false },
    { text: "Kortstondig langer seinken", isCorrect: false }
  ],
  why: "Groot licht mag niet bij tegenliggers vanwege verblindingsgevaar.",
  topic: "dashboard_use_rules",
  ruTranslation: {
    question: "Что делать с дальним светом при встречных?",
    answers: [
      "Заранее выключить, чтобы не ослеплять",
      "Оставить включённым для лучшего обзора",
      "Дольше поморгать"
    ],
    why: "Дальний свет ослепляет встречных — выключи вовремя."
  },
  enTranslation: {
    question: "What should you do with high beam when traffic approaches?",
    answers: [
      "Switch it off in time to avoid dazzling",
      "Keep it on for better view",
      "Flash it for longer"
    ],
    why: "High beam must not dazzle oncoming traffic."
  }
},
{
  id: 318,
  question: "Mag je mistachterlicht gebruiken bij hevige regen?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/dashbord8_ctghwq.png",
  answers: [
    { text: "Nee, het mag niet bij slecht zicht door regen", isCorrect: true },
    { text: "Ja, altijd bij regen", isCorrect: false },
    { text: "Ja, maar alleen binnen de bebouwde kom", isCorrect: false }
  ],
  why: "Regel: mistachterlicht niet gebruiken bij regen; alleen bij <50 m in mist/sneeuw.",
  topic: "dashboard_use_rules",
  ruTranslation: {
    question: "Можно ли использовать задний противотуманный при сильном дожде?",
    answers: [
      "Нет, при дожде нельзя",
      "Да, всегда при дожде",
      "Да, но только в городе"
    ],
    why: "Задний туман — не для дождя; только <50 м в тумане/снегу."
  },
  enTranslation: {
    question: "May you use the rear fog light in heavy rain?",
    answers: [
      "No, not for rain",
      "Yes, always in rain",
      "Yes, but only in urban areas"
    ],
    why: "Rear fog is not for rain; only <50 m in fog/snow."
  }
},
{
  id: 319,
  question: "Wat geven de alarmlichten (rode driehoek) aan en wanneer gebruik je ze?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/dashbord17_g7ky7o.png", // hazard
  answers: [
    { text: "Waarschuwingslichten: bij pech, gevaarlijke stopplaats of filevorming op snelweg", isCorrect: true },
    { text: "Sportstand is geactiveerd", isCorrect: false },
    { text: "Snelheidsregelaar is ingeschakeld", isCorrect: false }
  ],
  why: "Rood driehoek-symbool = hazard lights; drie duidelijke gebruikssituaties.",
  topic: "dashboard_icons",
  ruTranslation: {
    question: "Что означает красный треугольник и когда его включают?",
    answers: [
      "Аварийная сигнализация: при поломке, опасной остановке или образовании пробки на шоссе",
      "Включён спортивный режим",
      "Активирован ограничитель скорости"
    ],
    why: "Красный треугольник — аварийка; три типичных случая применения."
  },
  enTranslation: {
    question: "What does the red triangle mean and when do you use it?",
    answers: [
      "Hazard lights: for breakdown, dangerous stop, or queue forming on the motorway",
      "Sport mode is active",
      "Speed limiter engaged"
    ],
    why: "Red triangle = hazards; three standard use cases."
  }
},
{
  id: 320,
  question: "Welke combinatie is toegestaan: mistlicht vóór en dimlicht?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/dashbord11_p0dnpr.png",
  answers: [
    { text: "Je mag het mistlicht vóór voeren zonder dat de dimlichten aan hoeven", isCorrect: true },
    { text: "Mistlicht vóór is alleen toegestaan mét groot licht", isCorrect: false },
    { text: "Mistlicht vóór mag alleen samen met stadslicht", isCorrect: false }
  ],
  why: "Volgens tekst hoeven dimlichten niet aan te staan als mistlichten aan zijn.",
  topic: "dashboard_use_rules",
  ruTranslation: {
    question: "Какая комбинация допустима: передний туман и ближний?",
    answers: [
      "Можно включать передние туманки, ближний при этом не обязателен",
      "Передние туманки разрешены только с дальним",
      "Передние туманки — только вместе с габаритами"
    ],
    why: "Указано, что ближний необязателен, если включены туманки."
  },
  enTranslation: {
    question: "Which combo is permitted: front fog and low beam?",
    answers: [
      "You may run front fog lights without having to switch on low beam",
      "Front fog is only allowed with high beam",
      "Front fog only together with parking lights"
    ],
    why: "Text says low beam is not required when fog lights are on."
  }
},

// verkeersregelaar

{
  id: 321,
  question: "Wat betekent dit algemene stopteken van de verkeersregelaar?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/regelaar7_snuj0n.png",
  answers: [
    { text: "Je moet stoppen", isCorrect: true },
    { text: "Je mag langzaam doorrijden", isCorrect: false },
    { text: "Je hebt voorrang", isCorrect: false }
  ],
  why: "Opgestoken hand = altijd stoppen.",
  topic: "aanwijzingen_verkeersregelaar",
  ruTranslation: {
    question: "Что означает этот общий сигнал остановки?",
    answers: ["Вы должны остановиться", "Можно медленно проехать", "У вас приоритет"],
    why: "Поднятая рука = всегда стоп."
  },
  enTranslation: {
    question: "What does this general stop signal mean?",
    answers: ["You must stop", "You may pass slowly", "You have priority"],
    why: "Raised hand = always stop."
  }
},
{
  id: 322,
  question: "Moet het verkeer dat de verkeersregelaar van voren nadert hier stoppen?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/regelaar3_rwsggr.png",
  answers: [
    { text: "Ja", isCorrect: true },
    { text: "Nee", isCorrect: false },
    { text: "Alleen bij rood licht", isCorrect: false }
  ],
  why: "Uitgestoken arm naar voren betekent stoppen voor verkeer van voren.",
  topic: "aanwijzingen_verkeersregelaar",
  ruTranslation: {
    question: "Должны ли водители, приближающиеся спереди, остановиться?",
    answers: ["Да", "Нет", "Только при красном"],
    why: "Рука вытянута вперёд = остановка."
  },
  enTranslation: {
    question: "Must vehicles approaching from the front stop?",
    answers: ["Yes", "No", "Only at red light"],
    why: "Arm extended forward = stop."
  }
},
{
  id: 323,
  question: "Moet het verkeer dat de verkeersregelaar van achteren nadert hier stoppen?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/regelaar2_g8ntxy.png",
  answers: [
    { text: "Ja, het verkeer van achteren moet stoppen", isCorrect: true },
    { text: "Nee, alleen verkeer van voren", isCorrect: false },
    { text: "Nee, iedereen mag doorrijden", isCorrect: false }
  ],
  why: "Arm naar links = stop voor verkeer dat van achteren komt.",
  topic: "aanwijzingen_verkeersregelaar",
  ruTranslation: {
    question: "Должны ли водители, приближающиеся сзади, остановиться?",
    answers: ["Да", "Нет, только спереди", "Нет, все могут ехать"],
    why: "Рука вытянута в сторону = стоп для тех, кто сзади."
  },
  enTranslation: {
    question: "Must vehicles approaching from behind stop?",
    answers: ["Yes", "No, only front traffic", "No, all may continue"],
    why: "Arm extended to the side = stop for rear traffic."
  }
},
{
  id: 324,
  question: "Wat betekent dit teken met beide armen zijwaarts gestrekt?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/regelaar3_rwsggr.png",
  answers: [
    { text: "Stop voor verkeer van voren én van achteren", isCorrect: true },
    { text: "Alle verkeer mag doorrijden", isCorrect: false },
    { text: "Alleen verkeer van rechts moet stoppen", isCorrect: false }
  ],
  why: "Beide armen zijwaarts = stop vanuit beide richtingen.",
  topic: "aanwijzingen_verkeersregelaar",
  ruTranslation: {
    question: "Что означает сигнал с двумя вытянутыми в стороны руками?",
    answers: ["Стоп спереди и сзади", "Все могут ехать", "Стоп только справа"],
    why: "Две руки в стороны = стоп с обеих направлений."
  },
  enTranslation: {
    question: "What does this signal with both arms sideways mean?",
    answers: ["Stop from front and rear", "All traffic may continue", "Only right traffic stops"],
    why: "Both arms sideways = stop from both directions."
  }
},
{
  id: 325,
  question: "Moet het verkeer dat de verkeersregelaar van rechts nadert hier stoppen?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/regelaar4_qfhsrj.png",
  answers: [
    { text: "Ja, verkeer van rechts moet stoppen", isCorrect: true },
    { text: "Nee, verkeer van rechts mag doorrijden", isCorrect: false },
    { text: "Alleen links moet stoppen", isCorrect: false }
  ],
  why: "De arm wijst naar links → rechts verkeer moet stoppen.",
  topic: "aanwijzingen_verkeersregelaar",
  ruTranslation: {
    question: "Должны ли водители справа остановиться?",
    answers: ["Да", "Нет", "Только слева"],
    why: "Рука указывает влево → справа стоп."
  },
  enTranslation: {
    question: "Must drivers approaching from the right stop?",
    answers: ["Yes", "No", "Only left side stops"],
    why: "Arm pointing left = stop for right traffic."
  }
},
{
  id: 326,
  question: "Wat betekent deze opgeheven arm van de verkeersregelaar?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/regelaar6_rhphaj.png",
  answers: [
    { text: "Stop voor verkeer in alle richtingen", isCorrect: true },
    { text: "Snelheid verminderen", isCorrect: false },
    { text: "Alleen afslaand verkeer stoppen", isCorrect: false }
  ],
  why: "Opgestoken arm = kruispunt vrijmaken.",
  topic: "aanwijzingen_verkeersregelaar",
  ruTranslation: {
    question: "Что означает поднятая вверх рука регулировщика?",
    answers: ["Стоп для всех направлений", "Уменьшить скорость", "Стоп только поворачивающим"],
    why: "Поднятая рука = очистить перекрёсток."
  },
  enTranslation: {
    question: "What does the raised hand of the traffic controller mean?",
    answers: ["Stop for all directions", "Reduce speed", "Stop turning traffic only"],
    why: "Raised hand = clear the intersection."
  }
},
{
  id: 327,
  question: "Wat betekent dit gebaar van de verkeersregelaar?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/regelaar5_twdxla.png",
  answers: [
    { text: "Je moet snelheid verminderen", isCorrect: true },
    { text: "Je moet stoppen", isCorrect: false },
    { text: "Je mag versnellen", isCorrect: false }
  ],
  why: "Cirkelende beweging = snelheid minderen.",
  topic: "aanwijzingen_verkeersregelaar",
  ruTranslation: {
    question: "Что означает это круговое движение рукой?",
    answers: ["Уменьшить скорость", "Остановиться", "Ускориться"],
    why: "Круг рукой = снизить скорость."
  },
  enTranslation: {
    question: "What does this circular hand movement mean?",
    answers: ["Reduce speed", "Stop", "Speed up"],
    why: "Circular motion = reduce speed."
  }
},
{
  id: 328,
  question: "Voor wie moet je hier stoppen?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/bord_img_ufx8xw.png",
  answers: [
    { text: "Voor de verkeersbrigadier met stopteken", isCorrect: true },
    { text: "Alleen voor voetgangers", isCorrect: false },
    { text: "Je hoeft niet te stoppen", isCorrect: false }
  ],
  why: "Stopbord omhoog = verplicht stoppen.",
  topic: "aanwijzingen_verkeersregelaar",
  ruTranslation: {
    question: "Для кого вы должны остановиться?",
    answers: ["Для школьного регулировщика с жезлом", "Только для пешеходов", "Останавливаться не нужно"],
    why: "Поднятый знак = стоп обязательно."
  },
  enTranslation: {
    question: "Who must you stop for here?",
    answers: ["For the crossing guard with stop sign", "Only pedestrians", "Stopping not required"],
    why: "Raised sign = mandatory stop."
  }
},
{
  id: 329,
  question: "Wat staat hoger in de volgorde van prioriteit?",
  imageUrl: "",
  answers: [
    { text: "Aanwijzingen van bevoegde personen", isCorrect: true },
    { text: "Verkeerslichten", isCorrect: false },
    { text: "Verkeersregels", isCorrect: false }
  ],
  why: "Bevoegde personen hebben altijd de hoogste prioriteit.",
  topic: "prioriteit",
  ruTranslation: {
    question: "Что выше в порядке приоритетов?",
    answers: ["Указания уполномоченных лиц", "Светофоры", "Правила"],
    why: "Указания регулировщика важнее всего."
  },
  enTranslation: {
    question: "What has the highest priority?",
    answers: ["Instructions from authorized persons", "Traffic lights", "Traffic rules"],
    why: "Authorized personnel have top priority."
  }
},
{
  id: 330,
  question: "Welke volgorde van prioriteit is correct?",
  imageUrl: "",
  answers: [
    { text: "Bevoegde personen → verkeerslichten → borden → regels", isCorrect: true },
    { text: "Verkeerslichten → borden → regels → personen", isCorrect: false },
    { text: "Regels → borden → personen → verkeerslichten", isCorrect: false }
  ],
  why: "Dit is de officiële volgorde.",
  topic: "prioriteit",
  ruTranslation: {
    question: "Какая последовательность приоритетов верная?",
    answers: ["Регулировщик → светофор → знаки → правила", "Светофор → знаки → правила → регулировщик", "Правила → знаки → регулировщик → светофор"],
    why: "Это официальная последовательность."
  },
  enTranslation: {
    question: "Which priority order is correct?",
    answers: ["Controller → lights → signs → rules", "Lights → signs → rules → controller", "Rules → signs → controller → lights"],
    why: "This is the official order."
  }
},

// weggen en weggedeelten
{
  id: 331,
  question: "Wat geeft bord J9 aan bij een rotonde?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J9_sopt8x.png",
  answers: [
    { text: "Het geeft aan dat je een rotonde nadert", isCorrect: true },
    { text: "Het geeft een verplichte rijrichting aan", isCorrect: false },
    { text: "Het geeft aan dat je voorrang hebt", isCorrect: false }
  ],
  why: "Bord J9 waarschuwt voor een rotonde.",
  topic: "rotonde",
  ruTranslation: {
    question: "Что показывает знак J9 у кольцевой развязки?",
    answers: [
      "Он указывает, что вы приближаетесь к круговому движению",
      "Он указывает обязательное направление движения",
      "Он указывает, что у вас есть приоритет"
    ],
    why: "Знак J9 предупреждает о приближении к кольцу."
  },
  enTranslation: {
    question: "What does sign J9 indicate at a roundabout?",
    answers: [
      "It indicates you are approaching a roundabout",
      "It indicates a mandatory driving direction",
      "It indicates you have priority"
    ],
    why: "Sign J9 warns you about an upcoming roundabout."
  }
},

{
  id: 332,
  question: "Wat betekent bord D1 bij een rotonde?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/D1_zb_r9megv.png",
  answers: [
    { text: "Je moet de aangegeven rijrichting volgen", isCorrect: true },
    { text: "Je moet stoppen voor de rotonde", isCorrect: false },
    { text: "Je hebt voorrang op de rotonde", isCorrect: false }
  ],
  why: "Bord D1 verplicht tot het volgen van de aangegeven richting.",
  topic: "rotonde",
  ruTranslation: {
    question: "Что означает знак D1 на круговом движении?",
    answers: [
      "Вы должны следовать указанному направлению",
      "Вы должны остановиться перед кругом",
      "У вас приоритет на круге"
    ],
    why: "Знак D1 обязывает следовать направлению движения."
  },
  enTranslation: {
    question: "What does sign D1 mean at a roundabout?",
    answers: [
      "You must follow the indicated direction",
      "You must stop before the roundabout",
      "You have priority on the roundabout"
    ],
    why: "Sign D1 makes following the required direction mandatory."
  }
},

{
  id: 333,
  question: "Wanneer geef je richting aan naar rechts bij een rotonde?",
  imageUrl: "",
  answers: [
    { text: "Als je de rotonde bij de eerste afslag wilt verlaten", isCorrect: true },
    { text: "Als je rechtdoor wilt", isCorrect: false },
    { text: "Als je linksaf wilt", isCorrect: false }
  ],
  why: "Bij het nemen van de eerste afslag geef je direct richting aan.",
  topic: "rotonde",
  ruTranslation: {
    question: "Когда вы включаете правый поворотник на круговом движении?",
    answers: [
      "Когда хотите съехать на первом съезде",
      "Когда хотите ехать прямо",
      "Когда хотите повернуть налево"
    ],
    why: "На первом съезде включают правый поворотник при подъезде."
  },
  enTranslation: {
    question: "When do you signal right at a roundabout?",
    answers: [
      "When exiting at the first exit",
      "When going straight",
      "When turning left"
    ],
    why: "For the first exit, you signal right before entering."
  }
},

{
  id: 334,
  question: "Mag je links en rechts inhalen op een rotonde?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/rotonde_img_t9kgao.png",
  answers: [
    { text: "Ja, dat mag", isCorrect: true },
    { text: "Nee, je mag alleen links inhalen", isCorrect: false },
    { text: "Nee, je mag alleen rechts inhalen", isCorrect: false }
  ],
  why: "Rond een rotonde mag je links én rechts inhalen.",
  topic: "rotonde",
  ruTranslation: {
    question: "Можно ли обгонять слева и справа на круговом движении?",
    answers: [
      "Да, можно",
      "Нет, только слева",
      "Нет, только справа"
    ],
    why: "На круге разрешён обгон с обеих сторон."
  },
  enTranslation: {
    question: "Are you allowed to overtake on both sides at a roundabout?",
    answers: [
      "Yes, you are allowed",
      "No, only on the left",
      "No, only on the right"
    ],
    why: "On roundabouts you may overtake on both sides."
  }
},

{
  id: 335,
  question: "Wat is een kenmerk van een kleine rotonde?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/rotonde_img_t9kgao.png",
  answers: [
    { text: "Hij heeft meestal één rijstrook", isCorrect: true },
    { text: "Hij heeft altijd meerdere rijstroken", isCorrect: false },
    { text: "Hij ligt alleen buiten de bebouwde kom", isCorrect: false }
  ],
  why: "Een kleine rotonde heeft meestal één rijstrook.",
  topic: "rotonde",
  ruTranslation: {
    question: "Какой признак маленького кольца?",
    answers: [
      "Как правило, имеет одну полосу",
      "Всегда имеет несколько полос",
      "Располагается только вне города"
    ],
    why: "Маленькое кольцо обычно имеет одну полосу."
  },
  enTranslation: {
    question: "What is a characteristic of a small roundabout?",
    answers: [
      "It usually has one lane",
      "It always has multiple lanes",
      "It is only located outside town"
    ],
    why: "A small roundabout usually has only one lane."
  }
},

{
  id: 336,
  question: "Wat is een kenmerk van een grote rotonde?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/rotonde_img_t9kgao.png",
  answers: [
    { text: "Deze heeft vaak meerdere rijstroken", isCorrect: true },
    { text: "Deze heeft geen voorsorteerpijlen", isCorrect: false },
    { text: "Deze mag je niet verlaten met richting aangeven", isCorrect: false }
  ],
  why: "Grote rotondes hebben vaak meerdere rijstroken.",
  topic: "rotonde",
  ruTranslation: {
    question: "Какой признак большого кольца?",
    answers: [
      "Часто имеет несколько полос",
      "Не имеет стрелок разметки",
      "Съезжать нельзя с поворотником"
    ],
    why: "Большие кольца обычно имеют несколько полос."
  },
  enTranslation: {
    question: "What is a characteristic of a large roundabout?",
    answers: [
      "It often has multiple lanes",
      "It has no pre-sorting arrows",
      "You may not use indicators when exiting"
    ],
    why: "Large roundabouts often include multiple lanes."
  }
},

{
  id: 337,
  question: "Wat is een belangrijk kenmerk van een turborotonde?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/turborotonde_ianila.png",
  answers: [
    { text: "Je kunt er niet van rijstrook wisselen", isCorrect: true },
    { text: "Je moet er altijd stoppen", isCorrect: false },
    { text: "Hij heeft maar één rijstrook", isCorrect: false }
  ],
  why: "Op een turborotonde kun je geen rijstrook wisselen.",
  topic: "rotonde",
  ruTranslation: {
    question: "Что важно знать о турбокольце?",
    answers: [
      "Нельзя менять полосу",
      "Всегда нужно останавливаться",
      "Там только одна полоса"
    ],
    why: "На турбокольце нельзя менять полосу."
  },
  enTranslation: {
    question: "What is important about a turbo roundabout?",
    answers: [
      "You cannot change lanes",
      "You must always stop",
      "It has only one lane"
    ],
    why: "Lane changing is not possible on a turbo roundabout."
  }
},

{
  id: 338,
  question: "Wat is een kenmerk van een erftoegangsweg?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/erftoegangsweh_buiten_e96lc3.png",
  answers: [
    { text: "Inhalen is toegestaan", isCorrect: true },
    { text: "De maximumsnelheid is altijd 80 km/u", isCorrect: false },
    { text: "Alleen auto's mogen er rijden", isCorrect: false }
  ],
  why: "Erftoegangswegen hebben lage snelheid en inhalen mag vaak.",
  topic: "wegen",
  ruTranslation: {
    question: "Какой признак сельской дороги (erftoegangsweg)?",
    answers: [
      "Обгон разрешён",
      "Ограничение скорости всегда 80 км/ч",
      "Разрешён только автомобильный транспорт"
    ],
    why: "На таких дорогах обгон обычно разрешён."
  },
  enTranslation: {
    question: "What is a feature of an access road (erftoegangsweg)?",
    answers: [
      "Overtaking is allowed",
      "Speed limit is always 80 km/h",
      "Only cars are allowed to use it"
    ],
    why: "These roads often allow overtaking."
  }
},

{
  id: 339,
  question: "Op welke weg mag je landbouwvoertuigen verwachten?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/erftoegangsweg_cfuneo.png",
  answers: [
    { text: "Op een erftoegangsweg", isCorrect: true },
    { text: "Op een autosnelweg", isCorrect: false },
    { text: "Op een autoweg", isCorrect: false }
  ],
  why: "Op erftoegangswegen komt alle soorten verkeer voor.",
  topic: "wegen",
  ruTranslation: {
    question: "На какой дороге можно ожидать сельхозтехнику?",
    answers: [
      "На erftoegangsweg",
      "На автостраде",
      "На autoweg"
    ],
    why: "На таких дорогах встречаются все виды транспорта."
  },
  enTranslation: {
    question: "On which road can you expect agricultural vehicles?",
    answers: [
      "On an access road (erftoegangsweg)",
      "On a motorway",
      "On an expressway"
    ],
    why: "All types of traffic may appear on access roads."
  }
},

{
  id: 340,
  question: "Wat is de maximumsnelheid op een gebiedsontsluitingsweg buiten de bebouwde kom?",
  imageUrl: "",
  answers: [
    { text: "Meestal 80 km/u", isCorrect: true },
    { text: "Meestal 50 km/u", isCorrect: false },
    { text: "Meestal 100 km/u", isCorrect: false }
  ],
  why: "Op gebiedsontsluitingswegen buiten de kom is 80 km/u standaard.",
  topic: "wegen",
  ruTranslation: {
    question: "Какова скорость на gebiedsontsluitingsweg вне города?",
    answers: [
      "Обычно 80 км/ч",
      "Обычно 50 км/ч",
      "Обычно 100 км/ч"
    ],
    why: "На таких дорогах вне города обычно 80 км/ч."
  },
  enTranslation: {
    question: "What is the speed limit on an arterial road (gebiedsontsluitingsweg) outside built-up areas?",
    answers: [
      "Usually 80 km/h",
      "Usually 50 km/h",
      "Usually 100 km/h"
    ],
    why: "Outside towns, these roads typically have an 80 km/h limit."
  }
},

{
  id: 341,
  question: "Wat betekent een doorgetrokken asstreep?",
  imageUrl: "",
  answers: [
    { text: "Inhalen is verboden", isCorrect: true },
    { text: "Parkeren is verboden", isCorrect: false },
    { text: "Je moet stoppen", isCorrect: false }
  ],
  why: "Een doorgetrokken asstreep verbiedt inhalen.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Что означает сплошная осевая линия?",
    answers: [
      "Обгон запрещён",
      "Парковка запрещена",
      "Нужно остановиться"
    ],
    why: "Сплошная линия запрещает обгон."
  },
  enTranslation: {
    question: "What does a continuous center line mean?",
    answers: [
      "Overtaking is prohibited",
      "Parking is prohibited",
      "You must stop"
    ],
    why: "A solid line means you cannot overtake."
  }
},

{
  id: 342,
  question: "Welke voertuigen mogen niet rijden op een autosnelweg?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/autoweg_img_a9efwx.png",
  answers: [
    { text: "Landbouwvoertuigen", isCorrect: true },
    { text: "Auto’s", isCorrect: false },
    { text: "Vrachtwagens", isCorrect: false }
  ],
  why: "Langzame voertuigen, zoals landbouwvoertuigen, mogen niet op autosnelwegen.",
  topic: "snelweg",
  ruTranslation: {
    question: "Какие транспортные средства не могут ездить по автостраде?",
    answers: [
      "Сельхозтехника",
      "Легковые автомобили",
      "Грузовики"
    ],
    why: "Медленный транспорт запрещён."
  },
  enTranslation: {
    question: "Which vehicles are not allowed on a motorway?",
    answers: [
      "Agricultural vehicles",
      "Cars",
      "Trucks"
    ],
    why: "Slow vehicles like tractors are forbidden."
  }
},

{
  id: 343,
  question: "Wat is de maximumsnelheid op een autosnelweg tenzij anders aangegeven?",
  imageUrl: "",
  answers: [
    { text: "130 km/u", isCorrect: true },
    { text: "100 km/u", isCorrect: false },
    { text: "80 km/u", isCorrect: false }
  ],
  why: "De algemene maximumsnelheid is 130 km/u.",
  topic: "snelweg",
  ruTranslation: {
    question: "Какова скорость на автостраде, если не указано иное?",
    answers: [
      "130 км/ч",
      "100 км/ч",
      "80 км/ч"
    ],
    why: "Общая скорость — 130 км/ч."
  },
  enTranslation: {
    question: "What is the default speed limit on a motorway?",
    answers: [
      "130 km/h",
      "100 km/h",
      "80 km/h"
    ],
    why: "Default motorway limit is 130 km/h."
  }
},

{
  id: 344,
  question: "Waarom kan een brug bij lage temperaturen eerder glad zijn?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/J15_czatjh.png",
  answers: [
    { text: "Omdat een brug geen warmte vasthoudt", isCorrect: true },
    { text: "Omdat er meer verkeer rijdt", isCorrect: false },
    { text: "Omdat bruggen altijd van hout zijn", isCorrect: false }
  ],
  why: "Bruggen koelen sneller af omdat ze geen bodemwarmte hebben.",
  topic: "bruggen",
  ruTranslation: {
    question: "Почему мосты замерзают быстрее?",
    answers: [
      "Потому что они не удерживают тепло",
      "Потому что там больше машин",
      "Потому что они деревянные"
    ],
    why: "Мосты охлаждаются быстрее из-за отсутствия контакта с землёй."
  },
  enTranslation: {
    question: "Why do bridges freeze faster?",
    answers: [
      "Because they don’t retain heat",
      "Because traffic is heavier",
      "Because they are made of wood"
    ],
    why: "Bridges cool faster since they lack ground heat."
  }
},

{
  id: 345,
  question: "Wat moet je doen voordat je een tunnel inrijdt?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/L13_xchoyr.png",
  answers: [
    { text: "Je dimlichten aanzetten", isCorrect: true },
    { text: "Je groot licht aanzetten", isCorrect: false },
    { text: "Je alarmlichten aanzetten", isCorrect: false }
  ],
  why: "Dimlicht zorgt voor goede zichtbaarheid in tunnels.",
  topic: "tunnels",
  ruTranslation: {
    question: "Что нужно сделать перед въездом в тоннель?",
    answers: [
      "Включить ближний свет",
      "Включить дальний свет",
      "Включить аварийку"
    ],
    why: "Ближний свет обеспечивает видимость."
  },
  enTranslation: {
    question: "What must you do before entering a tunnel?",
    answers: [
      "Turn on dipped beam headlights",
      "Turn on high beam",
      "Turn on hazard lights"
    ],
    why: "Dipped beams provide visibility in tunnels."
  }
},

{
  id: 346,
  question: "Wat doe je als je in een tunnel stilstaat door een file?",
  imageUrl: "",
  answers: [
    { text: "Je zet de motor uit", isCorrect: true },
    { text: "Je zet groot licht aan", isCorrect: false },
    { text: "Je gaat achteruit rijden", isCorrect: false }
  ],
  why: "Bij stilstaan in een tunnel moet de motor worden uitgezet.",
  topic: "tunnels",
  ruTranslation: {
    question: "Что делать, если вы остановились в тоннеле из-за пробки?",
    answers: [
      "Выключить двигатель",
      "Включить дальний свет",
      "Сдать назад"
    ],
    why: "В тоннеле при остановке двигатель выключают."
  },
  enTranslation: {
    question: "What should you do if standing still in a tunnel due to traffic?",
    answers: [
      "Turn off the engine",
      "Turn on high beam",
      "Reverse"
    ],
    why: "Engine must be off when stopped in a tunnel."
  }
},

{
  id: 347,
  question: "Wat is een kenmerk van een dijkweg?",
  imageUrl: "",
  answers: [
    { text: "De weg is vaak smal en bochtig", isCorrect: true },
    { text: "Er zijn altijd drie rijstroken", isCorrect: false },
    { text: "Er zijn altijd stoplichten", isCorrect: false }
  ],
  why: "Dijkwegen zijn smal en bochtig door hun ligging op dijken.",
  topic: "wegen",
  ruTranslation: {
    question: "Какой признак дамбовой дороги (dijkweg)?",
    answers: [
      "Дорога узкая и извилистая",
      "Всегда три полосы",
      "Всегда есть светофоры"
    ],
    why: "Дамбы узкие и извилистые."
  },
  enTranslation: {
    question: "What is a characteristic of a dike road?",
    answers: [
      "The road is narrow and winding",
      "It always has three lanes",
      "It always has traffic lights"
    ],
    why: "Dike roads tend to be narrow and curvy."
  }
},

{
  id: 348,
  question: "Wat geeft bord C2 aan?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C2_duqkwc.png",
  answers: [
    { text: "Eenrichtingsweg: inrijden verboden", isCorrect: true },
    { text: "Verplichte richting", isCorrect: false },
    { text: "Parkeren verboden", isCorrect: false }
  ],
  why: "Bord C2 betekent dat je deze richting niet in mag rijden.",
  topic: "borden",
  ruTranslation: {
    question: "Что показывает знак C2?",
    answers: [
      "Одностороннее движение: въезд запрещён",
      "Обязательное направление",
      "Парковка запрещена"
    ],
    why: "Знак C2 означает запрет въезда."
  },
  enTranslation: {
    question: "What does sign C2 indicate?",
    answers: [
      "One-way street: no entry",
      "Mandatory direction",
      "Parking prohibited"
    ],
    why: "Sign C2 means you may not enter from this side."
  }
},

{
  id: 349,
  question: "Mag je keren op een eenrichtingsweg?",
  imageUrl: "",
  answers: [
    { text: "Nee, dit is verboden", isCorrect: true },
    { text: "Ja, maar alleen 's nachts", isCorrect: false },
    { text: "Ja, als er geen verkeer is", isCorrect: false }
  ],
  why: "Op een eenrichtingsweg mag je niet keren.",
  topic: "regels",
  ruTranslation: {
    question: "Можно ли разворачиваться на односторонней дороге?",
    answers: [
      "Нет, запрещено",
      "Да, только ночью",
      "Да, если нет машин"
    ],
    why: "Разворот запрещён на одностороннем движении."
  },
  enTranslation: {
    question: "May you turn around on a one-way street?",
    answers: [
      "No, it's prohibited",
      "Yes, only at night",
      "Yes, if no traffic is present"
    ],
    why: "Turning around is not allowed on a one-way street."
  }
},

{
  id: 350,
  question: "Waardoor wordt een bocht veiliger gemaakt?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/bocht_mcaaba.png",
  answers: [
    { text: "Door positieve wegverkanting", isCorrect: true },
    { text: "Door hogere snelheid", isCorrect: false },
    { text: "Door extra bochten", isCorrect: false }
  ],
  why: "Positieve verkanting verlaagt de kans op slippen.",
  topic: "bochten",
  ruTranslation: {
    question: "Что делает поворот безопаснее?",
    answers: [
      "Положительный уклон дороги",
      "Высокая скорость",
      "Дополнительные повороты"
    ],
    why: "Положительный уклон уменьшает риск заноса."
  },
  enTranslation: {
    question: "What makes a curve safer?",
    answers: [
      "Positive road banking",
      "Higher speed",
      "More curves"
    ],
    why: "Positive banking helps prevent slipping."
  }
},

{
  id: 351,
  question: "Wat is centrifugale kracht?",
  imageUrl: "",
  answers: [
    { text: "De kracht die je naar buiten duwt in een bocht", isCorrect: true },
    { text: "De kracht die je naar binnen trekt", isCorrect: false },
    { text: "De kracht die snelheid vermindert", isCorrect: false }
  ],
  why: "Centrifugale kracht duwt voertuigen naar buiten in een bocht.",
  topic: "fysica",
  ruTranslation: {
    question: "Что такое центробежная сила?",
    answers: [
      "Сила, выталкивающая наружу в повороте",
      "Сила, тянущая внутрь",
      "Сила, уменьшающая скорость"
    ],
    why: "Центробежная сила выталкивает машину наружу."
  },
  enTranslation: {
    question: "What is centrifugal force?",
    answers: [
      "The force pushing you outward in a curve",
      "The force pulling inward",
      "The force reducing speed"
    ],
    why: "Centrifugal force pushes outward in curves."
  }
},

{
  id: 352,
  question: "Wat moet je doen op een smalle weg met tegenliggers?",
  imageUrl: "",
  answers: [
    { text: "Beiden moeten uitwijken of wachten", isCorrect: true },
    { text: "Altijd rechtsaf slaan", isCorrect: false },
    { text: "Altijd stoppen en toeteren", isCorrect: false }
  ],
  why: "Op smalle wegen moet men elkaar de ruimte geven.",
  topic: "wegen",
  ruTranslation: {
    question: "Что делать на узкой дороге при встречном движении?",
    answers: [
      "Обе стороны должны уступать или ждать",
      "Всегда поворачивать направо",
      "Всегда останавливаться и сигналить"
    ],
    why: "На узких дорогах нужно уступать место."
  },
  enTranslation: {
    question: "What must you do on a narrow road with oncoming traffic?",
    answers: [
      "Both must give way or wait",
      "Always turn right",
      "Always stop and honk"
    ],
    why: "Narrow roads require cooperation to pass."
  }
},

{
  id: 353,
  question: "Wat is de maximumsnelheid in een 30 km-zone?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/30zone_n0ty1k.png",
  answers: [
    { text: "30 km/u", isCorrect: true },
    { text: "50 km/u", isCorrect: false },
    { text: "60 km/u", isCorrect: false }
  ],
  why: "In een 30 km-zone mag je maximaal 30 km/u.",
  topic: "zones",
  ruTranslation: {
    question: "Какова скорость в зоне 30 км/ч?",
    answers: [
      "30 км/ч",
      "50 км/ч",
      "60 км/ч"
    ],
    why: "В зоне 30 км/ч максимально 30."
  },
  enTranslation: {
    question: "What is the maximum speed in a 30 km zone?",
    answers: [
      "30 km/h",
      "50 km/h",
      "60 km/h"
    ],
    why: "The limit is 30 km/h."
  }
},

{
  id: 354,
  question: "Wat is een kenmerk van een erf?",
  imageUrl: "",
  answers: [
    { text: "Voetgangers mogen de hele weg gebruiken", isCorrect: true },
    { text: "Je mag 50 km/u rijden", isCorrect: false },
    { text: "Alleen auto's mogen er rijden", isCorrect: false }
  ],
  why: "In een erf zijn voetgangers hoofdgebruikers.",
  topic: "zones",
  ruTranslation: {
    question: "Какой признак жилой зоны (erf)?",
    answers: [
      "Пешеходы могут использовать всю дорогу",
      "Можно ехать 50 км/ч",
      "Разрешены только машины"
    ],
    why: "Пешеходы — главные пользователи."
  },
  enTranslation: {
    question: "What is a feature of a residential zone (erf)?",
    answers: [
      "Pedestrians may use the entire road",
      "You may drive 50 km/h",
      "Only cars may enter"
    ],
    why: "Pedestrians have priority in an erf."
  }
},

{
  id: 355,
  question: "Wat is de maximumsnelheid in een erf?",
  imageUrl: "",
  answers: [
    { text: "15 km/u", isCorrect: true },
    { text: "30 km/u", isCorrect: false },
    { text: "50 km/u", isCorrect: false }
  ],
  why: "De maximumsnelheid in een erf is 15 km/u.",
  topic: "zones",
  ruTranslation: {
    question: "Какова скорость в жилой зоне (erf)?",
    answers: [
      "15 км/ч",
      "30 км/ч",
      "50 км/ч"
    ],
    why: "В жилой зоне максимум 15."
  },
  enTranslation: {
    question: "What is the speed limit in an erf?",
    answers: [
      "15 km/h",
      "30 km/h",
      "50 km/h"
    ],
    why: "The limit is 15 km/h."
  }
},

{
  id: 356,
  question: "Wat is een fietsstraat?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/autogast_sc6iqc.png",
  answers: [
    { text: "Een straat waar fietsers voorrang hebben", isCorrect: true },
    { text: "Een straat alleen voor auto's", isCorrect: false },
    { text: "Een straat waar parkeren verplicht is", isCorrect: false }
  ],
  why: "In een fietsstraat zijn fietsers de hoofdgebruikers.",
  topic: "fietsen",
  ruTranslation: {
    question: "Что такое велосипедная улица (fietsstraat)?",
    answers: [
      "Улица, где у велосипедистов приоритет",
      "Улица только для машин",
      "Улица с обязательной парковкой"
    ],
    why: "В таких зонах велосипедисты главные."
  },
  enTranslation: {
    question: "What is a bicycle street?",
    answers: [
      "A street where cyclists have priority",
      "A street for cars only",
      "A street where parking is mandatory"
    ],
    why: "Cyclists dominate on bicycle streets."
  }
},

{
  id: 357,
  question: "Mogen auto's gebruikmaken van een fietsstraat?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/autogast_sc6iqc.png",
  answers: [
    { text: "Ja, maar ze zijn ondergeschikt aan fietsers", isCorrect: true },
    { text: "Nee, auto's zijn verboden", isCorrect: false },
    { text: "Ja, auto's hebben er voorrang", isCorrect: false }
  ],
  why: "Auto’s moeten zich aanpassen aan fietsers.",
  topic: "fietsen",
  ruTranslation: {
    question: "Могут ли машины ездить по велосипедной улице?",
    answers: [
      "Да, но они подчинены велосипедистам",
      "Нет, запрещено",
      "Да, у них приоритет"
    ],
    why: "Машины обязаны уступать велосипедистам."
  },
  enTranslation: {
    question: "May cars use a bicycle street?",
    answers: [
      "Yes, but they must give priority to cyclists",
      "No, cars are forbidden",
      "Yes, cars have priority"
    ],
    why: "Cars must yield to cyclists in a bicycle street."
  }
},

// verkeerstekens



{
  id: 358,
  question: "Wat betekenen haaientanden op de weg?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/driehoek_wctwsx.png",
  answers: [
    { text: "Je moet bestuurders op de kruisende weg voorrang geven", isCorrect: true },
    { text: "Je hebt altijd voorrang", isCorrect: false },
    { text: "Hier mag je parkeren", isCorrect: false }
  ],
  why: "Haaientanden betekenen dat je moet stoppen en voorrang verlenen.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Что означают акульи зубы на дороге?",
    answers: [
      "Ты должен уступить дорогу транспортным средствам на пересекаемой дороге",
      "Ты всегда имеешь приоритет",
      "Здесь можно парковаться"
    ],
    why: "Акульи зубы означают необходимость уступить дорогу."
  },
  enTranslation: {
    question: "What do shark teeth road markings indicate?",
    answers: [
      "You must give priority to vehicles on the crossing road",
      "You always have priority",
      "Parking is allowed here"
    ],
    why: "Shark teeth indicate that you must yield."
  }
},
{
  id: 359,
  question: "Mag je stilstaan op een fietsstrook?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/fietstrook_nxqyfy.png",
  answers: [
    { text: "Nee, je mag nooit stilstaan op een fietsstrook", isCorrect: true },
    { text: "Ja, maar alleen als er geen fietsers zijn", isCorrect: false },
    { text: "Ja, maar alleen kort", isCorrect: false }
  ],
  why: "Stilstaan of parkeren op een fietsstrook is verboden.",
  topic: "fietsmarkering",
  ruTranslation: {
    question: "Можно ли остановиться на велосипедной полосе?",
    answers: [
      "Нет, никогда нельзя останавливаться",
      "Да, если нет велосипедистов",
      "Да, но только на короткое время"
    ],
    why: "Остановка или парковка на велополосе запрещена."
  },
  enTranslation: {
    question: "Are you allowed to stop on a bicycle lane?",
    answers: [
      "No, stopping is never allowed",
      "Yes, if no cyclists are present",
      "Yes, but only briefly"
    ],
    why: "Stopping or parking on a bicycle lane is prohibited."
  }
},
{
  id: 360,
  question: "Heeft een suggestiestrook een juridische status?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/suggestiestrook_mbegmm.png",
  answers: [
    { text: "Nee, een suggestiestrook heeft geen juridische status", isCorrect: true },
    { text: "Ja, dezelfde als een fietsstrook", isCorrect: false },
    { text: "Alleen binnen de bebouwde kom", isCorrect: false }
  ],
  why: "Een suggestiestrook lijkt op een fietsstrook maar heeft geen wettelijke status.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Имеет ли полоса-подсказка юридический статус?",
    answers: [
      "Нет, она не имеет юридического статуса",
      "Да, такой же как у велополосы",
      "Только в городской зоне"
    ],
    why: "Полоса подсказка не имеет юридической силы, она только рекомендация."
  },
  enTranslation: {
    question: "Does a suggestion lane have legal status?",
    answers: [
      "No, a suggestion lane has no legal status",
      "Yes, the same as a bike lane",
      "Only inside built-up areas"
    ],
    why: "A suggestion lane looks like a bike lane but has no legal status."
  }
},
{
  id: 361,
  question: "Wat is verboden bij een zebrapad?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/zebrapad_sho6uj.png",
  answers: [
    { text: "Inhalen vlak voor of op een zebrapad", isCorrect: true },
    { text: "Stoppen om voetgangers voorrang te geven", isCorrect: false },
    { text: "Rijden met 30 km/u", isCorrect: false }
  ],
  why: "Inhalen bij een zebrapad is gevaarlijk en verboden.",
  topic: "Voetgangers",
  ruTranslation: {
    question: "Что запрещено у пешеходного перехода?",
    answers: [
      "Обгон перед или на переходе",
      "Остановиться, чтобы пропустить пешеходов",
      "Ехать 30 км/ч"
    ],
    why: "Обгон у перехода запрещён."
  },
  enTranslation: {
    question: "What is prohibited near a zebra crossing?",
    answers: [
      "Overtaking before or on the zebra crossing",
      "Stopping for pedestrians",
      "Driving 30 km/h"
    ],
    why: "Overtaking near a zebra crossing is prohibited."
  }
},
{
  id: 362,
  question: "Waarvoor waarschuwt een zigzag-streep?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/zigzag_zrtgop.png",
  answers: [
    { text: "Voor gevaar zoals een oversteekplaats of rijbaanversmalling", isCorrect: true },
    { text: "Voor een parkeervak", isCorrect: false },
    { text: "Dat je mag keren", isCorrect: false }
  ],
  why: "Zigzag-strepen betekenen extra opletten.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Для чего служит зигзагообразная линия?",
    answers: [
      "Для предупреждения об опасности (переход, сужение и т.д.)",
      "Обозначает парковку",
      "Разрешает разворот"
    ],
    why: "Зигзаг — предупреждение об опасности."
  },
  enTranslation: {
    question: "What does a zigzag marking warn for?",
    answers: [
      "Danger, such as crossing or road narrowing",
      "Parking space",
      "A U-turn is allowed"
    ],
    why: "A zigzag line means caution."
  }
},
{
  id: 363,
  question: "Mag je hier inhalen?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/doorgetrokkenEnNot_gmzi0b.png",
  answers: [
    { text: "Nee, je mag de streep niet overschrijden", isCorrect: true },
    { text: "Ja, altijd", isCorrect: false },
    { text: "Ja, alleen om af te slaan", isCorrect: false }
  ],
  why: "Een doorgetrokken streep betekent: niet overschrijden.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Можно ли пересекать сплошную линию?",
    answers: [
      "Нет, пересекать нельзя",
      "Да, всегда можно",
      "Да, только при повороте"
    ],
    why: "Сплошная — пересекать нельзя."
  },
  enTranslation: {
    question: "Are you allowed to cross a solid line?",
    answers: [
      "No, you may not cross it",
      "Yes, always",
      "Yes, only when turning"
    ],
    why: "A solid line means no crossing."
  }
},
{
  id: 364,
  question: "Wanneer mag je inhalen bij een onderbroken streep?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/doorgetrokkenEnNot_gmzi0b.png",
  answers: [
    { text: "Wanneer het veilig kan", isCorrect: true },
    { text: "Wanneer het handig voor je is", isCorrect: false },
    { text: "Nooit", isCorrect: false }
  ],
  why: "Onderbroken streep betekent dat manoeuvres toegestaan zijn mits veilig.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Когда можно обгонять при прерывистой линии?",
    answers: [
      "Когда это безопасно",
      "Всегда",
      "Никогда"
    ],
    why: "Прерывистая разрешает обгон при безопасности."
  },
  enTranslation: {
    question: "When may you overtake with a broken line?",
    answers: [
      "When it is safe to do so",
      "Always",
      "Never"
    ],
    why: "Broken lines allow overtaking if safe."
  }
},
{
  id: 365,
  question: "Mag je een puntstuk berijden?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/puntstuk_ymxsgp.png",
  answers: [
    { text: "Nee, tenzij het deel is van een geopende spitsstrook", isCorrect: true },
    { text: "Ja, altijd", isCorrect: false },
    { text: "Ja, als je wilt parkeren", isCorrect: false }
  ],
  why: "Een puntstuk markeert verboden terrein behalve bij geopende spitsstroken.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Можно ли заезжать на островок-разметку?",
    answers: [
      "Нет, только если это часть открытой полосы",
      "Да, всегда",
      "Да, для парковки"
    ],
    why: "На разметку-остров нельзя заезжать."
  },
  enTranslation: {
    question: "Are you allowed to drive on a gore area (puntstuk)?",
    answers: [
      "No, unless it is part of an opened extra lane",
      "Yes, always",
      "Yes, to park"
    ],
    why: "Gore areas are normally prohibited."
  }
},
{
  id: 366,
  question: "Wat moet je doen bij een voetgangersoversteekplaats?",
  imageUrl: "",
  answers: [
    { text: "Voetgangers laten oversteken", isCorrect: true },
    { text: "Doorrijden, omdat voetgangers jouw moeten voorlaten", isCorrect: false },
    { text: "Claxonneren", isCorrect: false }
  ],
  why: "Voetgangers hebben voorrang bij een zebrapad.",
  topic: "voetgangers",
  ruTranslation: {
    question: "Что нужно сделать у пешеходного перехода?",
    answers: [
      "Пропустить пешеходов",
      "Ускориться",
      "Посигналить"
    ],
    why: "Пешеходы имеют приоритет."
  },
  enTranslation: {
    question: "What must you do at a pedestrian crossing?",
    answers: [
      "Let pedestrians cross",
      "Accelerate",
      "Honk"
    ],
    why: "Pedestrians have priority."
  }
},
{
  id: 367,
  question: "Welk soort voertuig gebruikt een fietsstrook?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/fietstrook_nxqyfy.png",
  answers: [
    { text: "Fietsers en snorfietsers", isCorrect: true },
    { text: "Alle voertuigen", isCorrect: false },
    { text: "Alleen voetgangers", isCorrect: false }
  ],
  why: "Fietsstroken zijn bedoeld voor traag verkeer met wielen.",
  topic: "fietsmarkering",
  ruTranslation: {
    question: "Кто может пользоваться велополосой?",
    answers: [
      "Велосипедисты и мокики",
      "Все транспортные средства",
      "Только пешеходы"
    ],
    why: "Велополоса предназначена только для велотранспорта."
  },
  enTranslation: {
    question: "Who uses a bicycle lane?",
    answers: [
      "Cyclists and moped riders",
      "All traffic",
      "Only pedestrians"
    ],
    why: "A bicycle lane is only for bikes and mopeds."
  }
},
{
  id: 368,
  question: "Waar mag je parkeren bij een zebrapad?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/zebrapad_sho6uj.png",
  answers: [
    { text: "Minimaal 5 meter ervandaan", isCorrect: true },
    { text: "Direct erop", isCorrect: false },
    { text: "1 meter afstand is genoeg", isCorrect: false }
  ],
  why: "Parkeren binnen 5 meter van een zebrapad is verboden.",
  topic: "parkeren",
  ruTranslation: {
    question: "Где можно парковаться возле пешеходного перехода?",
    answers: [
      "Не ближе чем 5 метров",
      "Прямо на переходе",
      "В метре достаточно"
    ],
    why: "Парковка ближе 5 метров запрещена."
  },
  enTranslation: {
    question: "Where are you allowed to park near a pedestrian crossing?",
    answers: [
      "At least 5 meters away",
      "Directly on it",
      "1 meter is enough"
    ],
    why: "Parking within 5 meters is prohibited."
  }
},
{
  id: 369,
  question: "Hoe herken je een suggestiestrook?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/suggestiestrook_mbegmm.png",
  answers: [
    { text: "Hij lijkt op een fietsstrook maar heeft geen fiets-symbool", isCorrect: true },
    { text: "Door rode kleur en fietspictogram", isCorrect: false },
    { text: "Door parkeerborden erop", isCorrect: false }
  ],
  why: "Een suggestiestrook heeft geen witte fietsmarkering.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Как распознать подсказочную дорожку?",
    answers: [
      "Она похожа на велополосу, но без символа велосипеда",
      "По красной разметке и велосипедному знаку",
      "По парковочным знакам"
    ],
    why: "У неё нет символа велосипеда."
  },
  enTranslation: {
    question: "How do you recognize a suggestion lane?",
    answers: [
      "It looks like a bike lane but without a bicycle symbol",
      "By red paint and bicycle icons",
      "By parking signs"
    ],
    why: "A suggestion lane has no bicycle marking."
  }
},
{
  id: 370,
  question: "Welke streep betekent dat inhalen verboden is?",
  imageUrl: "",
  answers: [
    { text: "Doorgetrokken streep", isCorrect: true },
    { text: "Onderbroken streep", isCorrect: false },
    { text: "Zigzag-lijn", isCorrect: false }
  ],
  why: "Een doorgetrokken streep betekent rijstrookgrens die je niet mag kruisen.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Какая линия означает запрет обгона?",
    answers: [
      "Сплошная линия",
      "Прерывистая линия",
      "Зигзаг-разметка"
    ],
    why: "Сплошная запрещает пересечение и обгон."
  },
  enTranslation: {
    question: "Which marking means overtaking is prohibited?",
    answers: [
      "A solid line",
      "A broken line",
      "A zigzag line"
    ],
    why: "A solid line prohibits lane crossing."
  }
},
{
  id: 371,
  question: "Hoe gedraag je je bij een verdrijvingsvlak?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/puntstuk_ymxsgp.png",
  answers: [
    { text: "Je rijdt er niet overheen", isCorrect: true },
    { text: "Je gebruikt het als extra rijstrook", isCorrect: false },
    { text: "Parkeren is toegestaan", isCorrect: false }
  ],
  why: "Een verdrijvingsvlak mag je niet gebruiken als rijvlak.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Как нужно поступать при разметке-островке?",
    answers: [
      "Не заезжать на неё",
      "Можно использовать как полосу",
      "Можно парковаться"
    ],
    why: "Разметка-островок запрещена для движения."
  },
  enTranslation: {
    question: "How should you behave at a gore marking?",
    answers: [
      "Do not drive over it",
      "Use it as extra traffic lane",
      "Parking allowed"
    ],
    why: "You are not allowed to use it as a driving lane."
  }
},
{
  id: 372,
  question: "Wat moet je doen bij haaientanden?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/driehoek_wctwsx.png",
  answers: [
    { text: "Voorrang verlenen", isCorrect: true },
    { text: "Harder rijden", isCorrect: false },
    { text: "Inhalen", isCorrect: false }
  ],
  why: "Haaientanden betekenen voorrang verlenen.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Что нужно делать при разметке «акульи зубы»?",
    answers: [
      "Уступить дорогу",
      "Ускориться",
      "Обгонять"
    ],
    why: "Акульи зубы означают уступить движение."
  },
  enTranslation: {
    question: "What must you do at shark teeth markings?",
    answers: [
      "Give way",
      "Speed up",
      "Overtake"
    ],
    why: "Shark teeth mean yield."
  }
},

{
  id: 373,
  question: "Mag je rijden op een busstrook?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/busstrook_vifgoz.png",
  answers: [
    { text: "Nee, een busstrook is alleen voor bussen", isCorrect: true },
    { text: "Ja, als er geen bus aankomt", isCorrect: false },
    { text: "Ja, maar alleen om te parkeren", isCorrect: false }
  ],
  why: "Een busstrook is exclusief bedoeld voor lijnbussen.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Можно ли ехать по автобусной полосе (BUS of LIJNBUS)?",
    answers: [
      "Нет, она только для автобусов",
      "Да, если автобус не приближается",
      "Да, только чтобы припарковаться"
    ],
    why: "Автобусная полоса предназначена только для общественного транспорта."
  },
  enTranslation: {
    question: "Are you allowed to drive on a bus lane?",
    answers: [
      "No, it is only for buses",
      "Yes, if no bus is approaching",
      "Yes, but only to park"
    ],
    why: "A bus lane is exclusively for public transport buses."
  }
},
{
  id: 374,
  question: "Wat is een busbaan?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/busbaan_slqecs.png",
  answers: [
    { text: "Een rijstrook die fysiek is gescheiden van andere banen", isCorrect: true },
    { text: "Een strook naast de fietsstrook", isCorrect: false },
    { text: "Een zone waar parkeren is toegestaan", isCorrect: false }
  ],
  why: "Een busbaan ligt apart van de normale rijbaan.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Что такое автобусная дорога (Busbaan)?",
    answers: [
      "Отдельная выделенная полоса, отделённая от дороги",
      "Полоса рядом с велосипедной дорожкой",
      "Место, где можно парковаться"
    ],
    why: "Busbaan отделена от других полос движения."
  },
  enTranslation: {
    question: "What is a bus lane (busbaan)?",
    answers: [
      "A physically separated lane for buses",
      "A lane next to a bike lane",
      "A place where parking is allowed"
    ],
    why: "A busbaan is separated from the regular roadway."
  }
},
{
  id: 375,
  question: "Wat betekent een gele onderbroken streep langs de weg?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/gele_onderbroken_naolj9.png",
  answers: [
    { text: "Parkeren verboden, maar laden en lossen toegestaan", isCorrect: true },
    { text: "Volledig parkeren toegestaan", isCorrect: false },
    { text: "Stilstaan verboden", isCorrect: false }
  ],
  why: "Een gele onderbroken streep betekent parkeerverbod, laden en lossen mag.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Что означает жёлтая прерывистая линия вдоль дороги?",
    answers: [
      "Парковка запрещена, но загрузка/разгрузка разрешена",
      "Можно парковаться без ограничений",
      "Остановка запрещена"
    ],
    why: "Жёлтая пунктирная линия означает запрет на парковку, но можно остановиться для загрузки."
  },
  enTranslation: {
    question: "What does a yellow broken line along the road mean?",
    answers: [
      "Parking forbidden, loading/unloading allowed",
      "Parking allowed freely",
      "Stopping forbidden"
    ],
    why: "A yellow broken line means no parking, but loading/unloading is allowed."
  }
},
{
  id: 376,
  question: "Wat betekent een gele doorgetrokken streep langs de weg?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/doorgetroken_streep_v9fvab.png",
  answers: [
    { text: "Stilstaan en parkeren verboden", isCorrect: true },
    { text: "Alleen parkeren verboden", isCorrect: false },
    { text: "Niets, het is puur decoratie", isCorrect: false }
  ],
  why: "Een doorgetrokken gele lijn betekent geen stilstand of parkeren.",
  topic: "wegmarkering",
  ruTranslation: {
    question: "Что означает жёлтая сплошная линия вдоль дороги?",
    answers: [
      "Запрещены остановка и парковка",
      "Только парковка запрещена",
      "Ничего, просто разметка"
    ],
    why: "Жёлтая сплошная линия означает полный запрет остановки и парковки."
  },
  enTranslation: {
    question: "What does a yellow solid line along the road mean?",
    answers: [
      "Stopping and parking are forbidden",
      "Only parking is forbidden",
      "Nothing, just decoration"
    ],
    why: "A solid yellow line means no stopping and no parking."
  }
},
{
  id: 377,
  question: "Wat betekent een groen verkeerslicht?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/verkeerslichten_dsmohg.png",
  answers: [
    { text: "Je mag doorrijden", isCorrect: true },
    { text: "Je moet stoppen", isCorrect: false },
    { text: "Je mag alleen rechtsaf slaan", isCorrect: false }
  ],
  why: "Groen betekent dat je mag rijden, tenzij onveilig.",
  topic: "verkeerslichten",
  ruTranslation: {
    question: "Что означает зелёный свет светофора?",
    answers: [
      "Можно ехать",
      "Нужно остановиться",
      "Можно только повернуть направо"
    ],
    why: "Зелёный свет разрешает движение, если безопасно."
  },
  enTranslation: {
    question: "What does a green traffic light mean?",
    answers: [
      "You may proceed",
      "You must stop",
      "You may only turn right"
    ],
    why: "Green means you may continue driving if safe."
  }
},
{
  id: 378,
  question: "Wat betekent een oranje verkeerslicht?",
  imageUrl: "",
  answers: [
    { text: "Stoppen, tenzij stoppen niet veilig mogelijk is", isCorrect: true },
    { text: "Altijd doorrijden", isCorrect: false },
    { text: "Parkeren", isCorrect: false }
  ],
  why: "Oranje betekent dat je moet stoppen tenzij dat gevaarlijk is.",
  topic: "verkeerslichten",
  ruTranslation: {
    question: "Что означает жёлтый свет светофора?",
    answers: [
      "Остановиться, если это безопасно",
      "Всегда продолжать движение",
      "Парковаться"
    ],
    why: "Жёлтый свет означает: готовься остановиться, если это безопасно."
  },
  enTranslation: {
    question: "What does an amber light mean?",
    answers: [
      "Stop unless stopping is unsafe",
      "Always continue driving",
      "Use it as a parking sign"
    ],
    why: "Amber means stop, unless stopping is unsafe."
  }
},
{
  id: 379,
  question: "Waarvoor geldt een verkeerslicht met pijl?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/stoplicht_pijl_egxsbe.png",
  answers: [
    { text: "Alleen voor de richting van de pijl", isCorrect: true },
    { text: "Voor alle verkeersrichtingen", isCorrect: false },
    { text: "Alleen voor voetgangers", isCorrect: false }
  ],
  why: "Een pijllicht geldt uitsluitend voor de aangegeven rijrichting.",
  topic: "verkeerslichten",
  ruTranslation: {
    question: "Для чего действует светофор со стрелкой?",
    answers: [
      "Только для направления стрелки",
      "Для всех направлений",
      "Только для пешеходов"
    ],
    why: "Светофор со стрелкой действует только в указанном направлении."
  },
  enTranslation: {
    question: "A traffic light with an arrow applies to:",
    answers: [
      "Only the direction of the arrow",
      "All directions",
      "Pedestrians only"
    ],
    why: "Arrow traffic lights apply only to the indicated direction."
  }
},
{
  id: 380,
  question: "Wat betekent een rood knipperlicht bij een spooroverweg?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/weg2_k5vajn.png",
  answers: [
    { text: "Stoppen", isCorrect: true },
    { text: "Doorrijden", isCorrect: false },
    { text: "U mag parkeren", isCorrect: false }
  ],
  why: "Rood knipperlicht betekent dat de overweg gesloten is.",
  topic: "spoorovergang",
  ruTranslation: {
    question: "Что означает красный мигающий сигнал на железнодорожном переезде?",
    answers: [
      "Остановиться",
      "Продолжать движение",
      "Можно парковаться"
    ],
    why: "Красный мигающий сигнал означает: переезд закрыт."
  },
  enTranslation: {
    question: "What does a red flashing railway signal mean?",
    answers: [
      "Stop",
      "Continue driving",
      "Parking allowed"
    ],
    why: "A flashing red light means the crossing is closed."
  }
},
{
  id: 381,
  question: "Wat betekent een wit knipperlicht bij een spooroverweg?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/weg1_zw2dnk.png",
  answers: [
    { text: "Je mag doorrijden", isCorrect: true },
    { text: "Stoppen verplicht", isCorrect: false },
    { text: "Alleen fietsen", isCorrect: false }
  ],
  why: "Wit knipperlicht betekent dat de overweg vrij is.",
  topic: "spoorovergang",
  ruTranslation: {
    question: "Что означает белый мигающий сигнал на переезде?",
    answers: [
      "Можно ехать",
      "Остановка обязательна",
      "Можно ехать только на велосипеде"
    ],
    why: "Белый мигающий сигнал означает: путь свободен."
  },
  enTranslation: {
    question: "What does a flashing white railway signal mean?",
    answers: [
      "You may proceed",
      "Stopping is required",
      "Only cyclists may pass"
    ],
    why: "A flashing white light means the crossing is clear."
  }
},
{
  id: 382,
  question: "Wat moet je doen als het licht uit staat bij een spooroverweg?",
  imageUrl: "",
  answers: [
    { text: "Voorzichtig oversteken", isCorrect: true },
    { text: "Altijd stoppen", isCorrect: false },
    { text: "Hard doorrijden", isCorrect: false }
  ],
  why: "Als er geen signaal is, moet je zelf beoordelen of de overgang veilig is.",
  topic: "spoorovergang",
  ruTranslation: {
    question: "Что делать, если сигнализация на переезде не работает?",
    answers: [
      "Аккуратно переехать, убедившись в безопасности",
      "Всегда остановиться и ждать сигнал",
      "Проехать быстрее"
    ],
    why: "Если сигнализация не работает — водитель должен сам убедиться в безопасности."
  },
  enTranslation: {
    question: "What should you do if a railway crossing light is off?",
    answers: [
      "Cross carefully",
      "Always stop and wait",
      "Drive faster"
    ],
    why: "If the signal is off, you must decide whether it is safe to cross."
  }
},

// weeeeeeeeeeeeeeeeeeeeeeeeeer

{
  id: 383,
  question: "Wat moet je doen bij zware regenval?",
  imageUrl: "",
  answers: [
    { text: "Snelheid aanpassen en meer afstand houden", isCorrect: true },
    { text: "Dichter achter je voorganger rijden", isCorrect: false },
    { text: "Je grootlicht inschakelen", isCorrect: false }
  ],
  why: "Regen zorgt voor minder zicht en grip, dus afstand en snelheid aanpassen.",
  topic: "weer",
  ruTranslation: {
    question: "Что нужно делать при сильном дожде?",
    answers: ["Снизить скорость и увеличить дистанцию", "Ехать ближе к впереди идущей машине", "Включить дальний свет"],
    why: "Дождь снижает обзор и сцепление, поэтому нужна большая дистанция и меньшая скорость."
  },
  enTranslation: {
    question: "What should you do in heavy rain?",
    answers: ["Reduce speed and increase distance", "Drive closer to the vehicle ahead", "Use high beams"],
    why: "Rain reduces visibility and grip, so distance and speed must be adjusted."
  }
},
{
  id: 384,
  question: "Wat moet je vooral vermijden bij aquaplaning?",
  imageUrl: "",
  answers: [
    { text: "Remmen", isCorrect: true },
    { text: "Het gas loslaten", isCorrect: false },
    { text: "De koppeling intrappen (bij handgeschakeld)", isCorrect: false }
  ],
  why: "Remmen kan slip verergeren; gas loslaten en koppeling gebruiken is juist.",
  topic: "weer",
  ruTranslation: {
    question: "Что особенно нельзя делать при аквапланировании?",
    answers: ["Тормозить", "Отпустить газ", "Выжать сцепление"],
    why: "Торможение ухудшает скольжение. Нужно отпустить газ и выжать сцепление."
  },
  enTranslation: {
    question: "What should you avoid during aquaplaning?",
    answers: ["Braking", "Letting go of the throttle", "Pressing the clutch"],
    why: "Braking makes skidding worse. Let off the gas and use the clutch."
  }
},
{
  id: 385,
  question: "Wat moet je doen bij gladheid door sneeuw of ijs?",
  imageUrl: "",
  answers: [
    { text: "Rustig rijden en geleidelijk remmen", isCorrect: true },
    { text: "Hard remmen", isCorrect: false },
    { text: "Dichter bij elkaar rijden", isCorrect: false }
  ],
  why: "Plotselinge bewegingen veroorzaken slip.",
  topic: "weer",
  ruTranslation: {
    question: "Как нужно ездить при гололеде и снегу?",
    answers: ["Ехать плавно и тормозить постепенно", "Тормозить резко", "Сокращать дистанцию"],
    why: "Резкие маневры вызывают скольжение."
  },
  enTranslation: {
    question: "How should you drive on snowy or icy roads?",
    answers: ["Drive calmly and brake gradually", "Brake hard", "Reduce distance"],
    why: "Sudden movements cause slipping."
  }
},
{
  id: 386,
  question: "Waarom moet je je snelheid halveren bij gladheid?",
  imageUrl: "",
  answers: [
    { text: "Omdat de remweg langer wordt", isCorrect: true },
    { text: "Omdat je motor harder moet werken", isCorrect: false },
    { text: "Omdat er minder verkeer is", isCorrect: false }
  ],
  why: "Op glad wegdek wordt de remweg veel langer.",
  topic: "weer",
  ruTranslation: {
    question: "Почему нужно в 2 раза снижать скорость при гололеде?",
    answers: ["Потому что тормозной путь увеличивается", "Потому что двигатель работает тяжелее", "Потому что на дороге меньше машин"],
    why: "На скользкой дороге тормозной путь значительно увеличивается."
  },
  enTranslation: {
    question: "Why should you reduce speed by half in slippery conditions?",
    answers: ["Because the braking distance becomes longer", "Because the engine works harder", "Because there is less traffic"],
    why: "Braking distance increases significantly on slippery roads."
  }
},
{
  id: 387,
  question: "Wat moet je doen als je ruiten beslaan?",
  imageUrl: "",
  answers: [
    { text: "Airco of verwarming naar de ramen richten", isCorrect: true },
    { text: "Ramen openen", isCorrect: false },
    { text: "Sneller gaan rijden", isCorrect: false }
  ],
  why: "Condens moet verwijderd worden om zicht te verbeteren.",
  topic: "weer",
  ruTranslation: {
    question: "Что делать, если стекла запотевают?",
    answers: ["Направить кондиционер/отопление на стекла", "Открыть окна", "Увеличить скорость"],
    why: "Нужно избавиться от конденсата для лучшей видимости."
  },
  enTranslation: {
    question: "What should you do if your windows fog up?",
    answers: ["Use A/C or heating directed at the windows", "Open windows", "Drive faster"],
    why: "Condensation must be removed to restore visibility."
  }
},
{
  id: 388,
  question: "Wat is verstandig bij storm en harde wind?",
  imageUrl: "",
  answers: [
    { text: "Beide handen aan het stuur houden", isCorrect: true },
    { text: "Zo snel mogelijk rijden", isCorrect: false },
    { text: "Dichter bij fietsers rijden", isCorrect: false }
  ],
  why: "Wind kan je voertuig uit balans brengen.",
  topic: "weer",
  ruTranslation: {
    question: "Что делать при сильном ветре?",
    answers: ["Держать обе руки на руле", "Ехать как можно быстрее", "Приближаться к велосипедистам"],
    why: "Ветер может легко сместить автомобиль."
  },
  enTranslation: {
    question: "What is wise during strong winds?",
    answers: ["Keep both hands on the wheel", "Drive as fast as possible", "Drive close to cyclists"],
    why: "Wind can push vehicles off course."
  }
},
{
  id: 389,
  question: "Wanneer gebruik je winterbanden?",
  imageUrl: "",
  answers: [
    { text: "Bij temperaturen onder 7°C", isCorrect: true },
    { text: "Alleen bij droog weer", isCorrect: false },
    { text: "Alleen tijdens zware storm", isCorrect: false }
  ],
  why: "Winterbanden zorgen voor beter grip bij kou.",
  topic: "weer",
  ruTranslation: {
    question: "Когда нужно использовать зимние шины?",
    answers: ["При температуре ниже 7°C", "Только в сухую погоду", "Только при сильном шторме"],
    why: "Зимние шины дают лучшее сцепление при низких температурах."
  },
  enTranslation: {
    question: "When should you use winter tires?",
    answers: ["Below 7°C", "Only in dry weather", "Only during storms"],
    why: "Winter tires provide better grip in cold."
  }
},
{
  id: 390,
  question: "Welke bandenprofiel is minimaal wettelijk verplicht?",
  imageUrl: "",
  answers: [
    { text: "1,6 mm", isCorrect: true },
    { text: "0,5 mm", isCorrect: false },
    { text: "3 mm", isCorrect: false }
  ],
  why: "Het profiel moet minimaal 1,6mm zijn voor voldoende grip.",
  topic: "weer",
  ruTranslation: {
    question: "Какая минимальная глубина протектора по закону?",
    answers: ["1,6 мм", "0,5 мм", "3 мм"],
    why: "Минимум 1,6 мм для безопасного сцепления."
  },
  enTranslation: {
    question: "What is the legally required minimum tire tread depth?",
    answers: ["1.6 mm", "0.5 mm", "3 mm"],
    why: "1.6 mm is required for safe grip."
  }
},
{
  id: 391,
  question: "Wat doe je als de wind je auto opzij duwt?",
  imageUrl: "",
  answers: [
    { text: "Rustig tegensturen", isCorrect: true },
    { text: "Hard remmen", isCorrect: false },
    { text: "Loslaten van het stuur", isCorrect: false }
  ],
  why: "Kleine stuurcorrecties geven controle.",
  topic: "weer",
  ruTranslation: {
    question: "Что делать, если ветер сдвигает машину в сторону?",
    answers: ["Аккуратно подруливать", "Резко тормозить", "Отпустить руль"],
    why: "Мягкие корректировки руля помогают удерживать контроль."
  },
  enTranslation: {
    question: "What to do if wind pushes your car sideways?",
    answers: ["Steer gently against it", "Brake hard", "Let go of the wheel"],
    why: "Small steering corrections keep control."
  }
},
{
  id: 392,
  question: "Waarom moet je extra opletten op bruggen bij vorst?",
  imageUrl: "",
  answers: [
    { text: "Bruggen bevriezen sneller", isCorrect: true },
    { text: "Bruggen zijn altijd drukker", isCorrect: false },
    { text: "Bruggen hebben slechter zicht", isCorrect: false }
  ],
  why: "Bruggen koelen sneller af waardoor ze sneller glad worden.",
  topic: "weer",
  ruTranslation: {
    question: "Почему нужно особенно осторожно на мостах при морозе?",
    answers: ["Мосты замерзают быстрее", "На мостах всегда больше трафика", "На мостах хуже обзор"],
    why: "Мосты остывают быстрее и становятся скользкими."
  },
  enTranslation: {
    question: "Why be extra careful on bridges in frost?",
    answers: ["Bridges freeze faster", "Bridges are always busier", "Bridges have worse visibility"],
    why: "Bridges cool faster and become slippery sooner."
  }
},
{
  id: 393,
  question: "Wat kan aquaplaning veroorzaken?",
  imageUrl: "",
  answers: [
    { text: "Te hoge snelheid bij veel water op de weg", isCorrect: true },
    { text: "Volle tank", isCorrect: false },
    { text: "Nieuwe banden", isCorrect: false }
  ],
  why: "De banden kunnen het water niet meer afvoeren bij hoge snelheid.",
  topic: "weer",
  ruTranslation: {
    question: "Что вызывает аквапланирование?",
    answers: ["Слишком высокая скорость при большом количестве воды", "Полный бак", "Новые шины"],
    why: "При высокой скорости шины не успевают отводить воду."
  },
  enTranslation: {
    question: "What causes aquaplaning?",
    answers: ["High speed with a lot of water on the road", "Full fuel tank", "New tires"],
    why: "Tires can't displace water fast enough at high speed."
  }
},
{
  id: 394,
  question: "Hoe herken je aquaplaning?",
  imageUrl: "",
  answers: [
    { text: "Je voelt geen stuurcontrole meer", isCorrect: true },
    { text: "De auto wordt luider", isCorrect: false },
    { text: "De auto versnelt vanzelf", isCorrect: false }
  ],
  why: "De wielen verliezen contact met het wegdek.",
  topic: "weer",
  ruTranslation: {
    question: "Как распознать аквапланирование?",
    answers: ["Пропадает управление", "Машина становится громче", "Машина сама ускоряется"],
    why: "Колеса теряют контакт с дорогой."
  },
  enTranslation: {
    question: "How do you recognize aquaplaning?",
    answers: ["You lose steering control", "The car becomes louder", "The car accelerates automatically"],
    why: "Wheels lose contact with the road."
  }
},
{
  id: 395,
  question: "Wat moet je doen bij mist?",
  imageUrl: "",
  answers: [
    { text: "Dimlicht inschakelen", isCorrect: true },
    { text: "Grootlicht inschakelen", isCorrect: false },
    { text: "Dichter op je voorganger rijden", isCorrect: false }
  ],
  why: "Grootlicht reflecteert in de mist en vermindert zicht.",
  topic: "weer",
  ruTranslation: {
    question: "Что делать в тумане?",
    answers: ["Включить ближний свет", "Включить дальний свет", "Сократить дистанцию с другими машинами"],
    why: "Дальний свет отражается в тумане и ухудшает видимость."
  },
  enTranslation: {
    question: "What should you do in fog?",
    answers: ["Use low beam headlights", "Use high beams", "Reduce distance to others"],
    why: "High beams reflect back in fog and reduce visibility."
  }
},
{
  id: 396,
  question: "Wat is gevaarlijk bij harde zijwind?",
  imageUrl: "",
  answers: [
    { text: "Bestuurders van vrachtwagens en aanhangers kunnen uit balans raken", isCorrect: true },
    { text: "Auto’s rijden altijd langzamer", isCorrect: false },
    { text: "Je verbruikt minder brandstof", isCorrect: false }
  ],
  why: "Grote voertuigen vangen veel wind en kunnen omvallen.",
  topic: "weer",
  ruTranslation: {
    question: "Что опасно при сильном боковом ветре?",
    answers: ["Грузовики и прицепы могут потерять устойчивость", "Все машины едут медленнее", "Расход топлива меньше"],
    why: "Большие машины ловят много ветра и могут опрокинуться."
  },
  enTranslation: {
    question: "What is dangerous during strong side wind?",
    answers: ["Trucks and trailers can lose balance", "Cars always drive slower", "Fuel consumption drops"],
    why: "Large vehicles catch more wind and can tip."
  }
},
{
  id: 397,
  question: "Waarom moet je oppassen na een korte regenbui?",
  imageUrl: "",
  answers: [
    { text: "Olie en vuil maken de weg extra glad", isCorrect: true },
    { text: "Er is altijd minder verkeer", isCorrect: false },
    { text: "De weg koelt nooit af", isCorrect: false }
  ],
  why: "Olie mengt met water en vermindert grip.",
  topic: "weer",
  ruTranslation: {
    question: "Почему нужно быть осторожным после короткого дождя?",
    answers: ["Масло и грязь делают дорогу особенно скользкой", "Движение уменьшается", "Дорога никогда не остывает"],
    why: "Масло смешивается с водой и снижает сцепление."
  },
  enTranslation: {
    question: "Why be careful after a short rain?",
    answers: ["Oil and dirt make the road extra slippery", "There is always less traffic", "The road never cools"],
    why: "Oil mixes with water and reduces grip."
  }
},

// autoweg !!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!


{
id: 398,
question: "Waarmee wordt het begin van een autosnelweg aangegeven?",
imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/G1_zb_zi26vo.png",
answers: [
{ text: "Met bord G1 met viaduct-symbool", isCorrect: true },
{ text: "Met bord G3 met auto-symbool", isCorrect: false },
{ text: "Met een groen matrixbord boven de weg", isCorrect: false }
],
why: "Een autosnelweg begint waar bord G1 staat.",
topic: "autosnelweg",
ruTranslation: {
question: "Чем обозначается начало автострады?",
answers: [
"Знаком G1 с изображением эстакады",
"Знаком G3 с машинкой",
"Зелёным табло над дорогой"
],
why: "Автострада начинается там, где стоит знак G1."
},
enTranslation: {
question: "How is the start of a motorway indicated?",
answers: [
"With sign G1 showing a viaduct symbol",
"With sign G3 with a car symbol",
"With a green matrix sign above the road"
],
why: "A motorway starts where sign G1 is placed."
}
},
{
id: 399,
question: "Wat is de algemene maximumsnelheid op een autosnelweg, tenzij anders aangegeven?",
imageUrl: "",
answers: [
{ text: "130 km/uur", isCorrect: true },
{ text: "120 km/uur", isCorrect: false },
{ text: "100 km/uur", isCorrect: false }
],
why: "Standaard mag je 130 km/uur rijden op de autosnelweg, tenzij borden iets anders aangeven.",
topic: "autosnelweg",
ruTranslation: {
question: "Какое общее ограничение скорости на автостраде, если не указано иное?",
answers: [
"130 км/ч",
"120 км/ч",
"100 км/ч"
],
why: "По умолчанию на автостраде разрешено 130 км/ч, если знаки не указывают другое."
},
enTranslation: {
question: "What is the general speed limit on a motorway unless stated otherwise?",
answers: [
"130 km/h",
"120 km/h",
"100 km/h"
],
why: "By default you may drive 130 km/h on motorways unless signs say otherwise."
}
},
{
id: 400,
question: "Welke minimumsnelheid geldt voor motorvoertuigen op de autosnelweg?",
imageUrl: "",
answers: [
{ text: "Ze moeten ten minste 60 km/uur kunnen rijden", isCorrect: true },
{ text: "Ze moeten ten minste 45 km/uur kunnen rijden", isCorrect: false },
{ text: "Er geldt geen minimale snelheid", isCorrect: false }
],
why: "Op autosnelwegen zijn alleen motorvoertuigen toegestaan die minimaal 60 km/uur kunnen rijden.",
topic: "autosnelweg",
ruTranslation: {
question: "Какое минимальное требование по скорости для ТС на автостраде?",
answers: [
"Они должны быть способны ехать минимум 60 км/ч",
"Они должны быть способны ехать минимум 45 км/ч",
"Минимальной скорости нет"
],
why: "На автостраду допускаются только ТС, способные ехать не менее 60 км/ч."
},
enTranslation: {
question: "What minimum speed must motor vehicles be able to reach on a motorway?",
answers: [
"They must be able to drive at least 60 km/h",
"They must be able to drive at least 45 km/h",
"There is no minimum speed"
],
why: "Only vehicles that can reach at least 60 km/h are allowed on motorways."
}
},
{
id: 401,
question: "Waarmee wordt het begin van een autoweg aangegeven?",
imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/G3_w5l5s3.png",
answers: [
{ text: "Met bord G3 met een witte auto op blauw veld", isCorrect: true },
{ text: "Met bord G1", isCorrect: false },
{ text: "Met een rond snelheidsbord 100", isCorrect: false }
],
why: "Een autoweg begint waar bord G3 staat.",
topic: "autoweg",
ruTranslation: {
question: "Чем обозначается начало автодороги (autoweg)?",
answers: [
"Знаком G3 с белой машиной на синем фоне",
"Знаком G1",
"Круглым знаком скорости 100"
],
why: "Autoweg начинается там, где установлен знак G3."
},
enTranslation: {
question: "How is the start of an expressway (autoweg) indicated?",
answers: [
"With sign G3 showing a white car on blue",
"With sign G1",
"With a round 100 km/h sign"
],
why: "An autoweg starts where sign G3 is placed."
}
},
{
id: 402,
question: "Wat is normaal de maximumsnelheid op een autoweg buiten de bebouwde kom (tenzij anders aangegeven)?",
imageUrl: "",
answers: [
{ text: "100 km/uur", isCorrect: true },
{ text: "80 km/uur", isCorrect: false },
{ text: "120 km/uur", isCorrect: false }
],
why: "Voor autowegen geldt buiten de bebouwde kom meestal 100 km/uur.",
topic: "autoweg",
ruTranslation: {
question: "Какое обычное ограничение скорости на autoweg вне населённого пункта (если не указано иное)?",
answers: [
"100 км/ч",
"80 км/ч",
"120 км/ч"
],
why: "Для autoweg вне города обычно действует 100 км/ч."
},
enTranslation: {
question: "What is the usual speed limit on an autoweg outside built-up areas (unless stated otherwise)?",
answers: [
"100 km/h",
"80 km/h",
"120 km/h"
],
why: "On autowegen outside towns the usual limit is 100 km/h."
}
},
{
id: 403,
question: "Wat is op zowel autosnelweg als autoweg verboden?",
imageUrl: "",
answers: [
{ text: "Keren, achteruit rijden en stilstaan (behalve bij een file)", isCorrect: true },
{ text: "Inhalen op de linkerrijstrook", isCorrect: false },
{ text: "Rijden met 100 km/uur", isCorrect: false }
],
why: "Keren, achteruit rijden en onnodig stilstaan zijn verboden op deze wegen.",
topic: "autosnelweg_autoweg_verboden",
ruTranslation: {
question: "Что запрещено как на автостраде, так и на autoweg?",
answers: [
"Разворот, движение задним ходом и остановка (кроме пробки)",
"Обгон по левой полосе",
"Ехать 100 км/ч"
],
why: "Развороты, задний ход и ненужная остановка запрещены на этих дорогах."
},
enTranslation: {
question: "What is prohibited on both motorways and autowegen?",
answers: [
"U-turns, reversing and stopping (except in a traffic jam)",
"Overtaking on the left lane",
"Driving at 100 km/h"
],
why: "U-turns, reversing and unnecessary stopping are forbidden on these roads."
}
},
{
id: 404,
question: "Waar mogen auto’s met aanhanger langer dan 7 meter en vrachtauto’s rijden op een autosnelweg met drie rijstroken per richting?",
imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/spitsstrook_open_bgz182.png",
answers: [
{ text: "Alleen op de twee meest rechts gelegen rijstroken", isCorrect: true },
{ text: "Alleen op de linkerrijstrook", isCorrect: false },
{ text: "Op alle rijstroken zonder beperking", isCorrect: false }
],
why: "Lange combinaties en vrachtauto’s mogen alleen de twee rechterrijstroken gebruiken.",
topic: "rijstroken",
ruTranslation: {
question: "Где могут ездить связки дольше 7 м и грузовики на автостраде с тремя полосами в направлении?",
answers: [
"Только по двум правым полосам",
"Только по левой полосе",
"По всем полосам без ограничений"
],
why: "Длинные составы и грузовики могут пользоваться только двумя правыми полосами."
},
enTranslation: {
question: "Where may combinations longer than 7 m and lorries drive on a motorway with three lanes per direction?",
answers: [
"Only on the two right-hand lanes",
"Only on the left lane",
"On all lanes without restriction"
],
why: "Long combinations and lorries may only use the two rightmost lanes."
}
},
{
id: 405,
question: "Wat is een rijbaan volgens de definitie?",
imageUrl: "",
answers: [
{ text: "Een voor rijdende voertuigen bestemd weggedeelte zonder fietspaden en brom/fietspaden", isCorrect: true },
{ text: "Elke strook tussen twee witte lijnen", isCorrect: false },
{ text: "De gehele weg inclusief berm", isCorrect: false }
],
why: "De rijbaan is het deel van de weg bestemd voor rijdende voertuigen, exclusief fiets- en bromfietspaden.",
topic: "weg_rijbaan",
ruTranslation: {
question: "Что такое проезжая часть (rijbaan) по определению?",
answers: [
"Часть дороги для движущихся ТС, без велодорожек и веломопедных дорожек",
"Любая полоса между двумя белыми линиями",
"Вся дорога вместе с обочиной"
],
why: "Rijbaan — это часть дороги для ТС, не включая велодорожки."
},
enTranslation: {
question: "What is a ‘rijbaan’ according to the definition?",
answers: [
"The part of the road for moving vehicles, excluding cycle and moped tracks",
"Any strip between two white lines",
"The whole road including verge"
],
why: "The rijbaan is the part intended for vehicles, without cycle tracks."
}
},
{
id: 406,
question: "Wat is een doorgaande rijbaan?",
imageUrl: "",
answers: [
{ text: "De rijbaan zonder invoeg- en uitrijstroken", isCorrect: true },
{ text: "De rijbaan met de meeste rijstroken", isCorrect: false },
{ text: "Een rijbaan alleen voor vrachtverkeer", isCorrect: false }
],
why: "De doorgaande rijbaan is het deel zonder invoeg- en uitrijstroken.",
topic: "doorgaande_rijbaan",
ruTranslation: {
question: "Что такое «doorgaande rijbaan»?",
answers: [
"Проезжая часть без полос разгона и съезда",
"Полоса с наибольшим количеством рядов",
"Проезжая часть только для грузовиков"
],
why: "Doorgaande rijbaan — это часть дороги без полос въезда и выезда."
},
enTranslation: {
question: "What is the ‘doorgaande rijbaan’?",
answers: [
"The carriageway without entry and exit lanes",
"The carriageway with the most lanes",
"A carriageway only for lorries"
],
why: "The doorgaande rijbaan is the part without entry or exit lanes."
}
},
{
id: 407,
question: "Wat is een rijstrook?",
imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/C23-01_gkxdwt.png",
answers: [
{ text: "Een deel van de rijbaan gemarkeerd met een doorgetrokken of onderbroken streep", isCorrect: true },
{ text: "Een aparte weg naast de rijbaan", isCorrect: false },
{ text: "Een stoep voor voetgangers", isCorrect: false }
],
why: "Een rijbaan kan bestaan uit meerdere rijstroken die door strepen zijn aangeduid.",
topic: "rijstrook",
ruTranslation: {
question: "Что такое полоса движения (rijstrook)?",
answers: [
"Часть проезжей части, обозначенная сплошной или прерывистой линией",
"Отдельная дорога рядом с проезжей частью",
"Тротуар для пешеходов"
],
why: "Проезжая часть может состоять из нескольких полос, обозначенных линиями."
},
enTranslation: {
question: "What is a traffic lane (rijstrook)?",
answers: [
"Part of the carriageway marked by a solid or broken line",
"A separate road next to the carriageway",
"A pavement for pedestrians"
],
why: "A rijbaan can consist of several lanes marked with lines."
}
},
{
id: 408,
question: "Waarvoor is de vluchtstrook langs een autosnelweg bestemd?",
imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/L14_hdcf7f.png",
answers: [
{ text: "Voor noodgevallen of pech", isCorrect: true },
{ text: "Voor langzaam verkeer", isCorrect: false },
{ text: "Als parkeerstrook bij drukte", isCorrect: false }
],
why: "De vluchtstrook is uitsluitend bedoeld voor noodsituaties of pechgevallen.",
topic: "vluchtstrook",
ruTranslation: {
question: "Для чего предназначена полоса аварийной остановки (vluchtstrook) на автостраде?",
answers: [
"Для аварийных ситуаций и поломок",
"Для медленного транспорта",
"Как парковка при большом трафике"
],
why: "Vluchtstrook используется только при аварии или неисправности."
},
enTranslation: {
question: "What is the hard shoulder (vluchtstrook) on a motorway for?",
answers: [
"For emergencies or breakdowns",
"For slow vehicles",
"As parking space in heavy traffic"
],
why: "The hard shoulder is reserved for emergencies and breakdowns only."
}
},
{
id: 409,
question: "Wat mag je niet doen op de vluchtstrook als er geen noodsituatie is?",
imageUrl: "",
answers: [
{ text: "Rijden of parkeren", isCorrect: true },
{ text: "Even stilstaan om te bellen", isCorrect: false },
{ text: "Langzaam doorrijden met alarmlichten", isCorrect: false }
],
why: "Zonder noodzaak mag je de vluchtstrook niet gebruiken om te rijden of te parkeren.",
topic: "vluchtstrook",
ruTranslation: {
question: "Что нельзя делать на полосе аварийной остановки, если нет чрезвычайной ситуации?",
answers: [
"Ездить или парковаться",
"Ненадолго остановиться, чтобы позвонить",
"Медленно ехать с аварийкой"
],
why: "Без необходимости нельзя ездить или парковаться на vluchtstrook."
},
enTranslation: {
question: "What are you not allowed to do on the hard shoulder if there is no emergency?",
answers: [
"Drive or park",
"Stop briefly to make a call",
"Drive slowly with hazard lights on"
],
why: "Without necessity you may not drive or park on the hard shoulder."
}
},
{
id: 410,
question: "Wat is een spitsstrook?",
imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/spitsstrook_open_bgz182.png",
answers: [
{ text: "Een vluchtstrook die bij drukte tijdelijk als rijstrook wordt gebruikt", isCorrect: true },
{ text: "Een aparte rijstrook alleen voor bussen", isCorrect: false },
{ text: "Een rijstrook voor landbouwverkeer", isCorrect: false }
],
why: "Bij drukte kan de vluchtstrook als spitsstrook worden opengesteld.",
topic: "spitsstrook",
ruTranslation: {
question: "Что такое полоса «spitsstrook»?",
answers: [
"Это полоса аварийной остановки, которую при загруженности временно используют как ряд движения",
"Отдельная полоса только для автобусов",
"Полоса для сельхозтехники"
],
why: "При загруженности vluchtstrook могут открыть как spitsstrook."
},
enTranslation: {
question: "What is a ‘spitsstrook’?",
answers: [
"A hard shoulder that is temporarily used as a traffic lane in busy periods",
"A separate lane only for buses",
"A lane for agricultural vehicles"
],
why: "In heavy traffic the hard shoulder can be opened as a spitsstrook."
}
},
{
id: 411,
question: "Hoe gebruik je een spitsstrook wanneer deze open is?",
imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/spitsstrook_open_bgz182.png",
answers: [
{ text: "Je rijdt er zo veel mogelijk rechts en je mag over de doorgetrokken lijn en puntstukken rijden", isCorrect: true },
{ text: "Je mag er alleen rijden als je langzamer dan 50 km/uur rijdt", isCorrect: false },
{ text: "Je gebruikt de spitsstrook alleen om in te halen", isCorrect: false }
],
why: "Bij een open spitsstrook moet je hem als normale rijstrook gebruiken, zo rechts mogelijk.",
topic: "spitsstrook",
ruTranslation: {
question: "Как нужно пользоваться полосой spitsstrook, когда она открыта?",
answers: [
"Ехать по ней как можно правее, разрешено переезжать сплошную и «островки» разметки",
"Ехать по ней можно только медленнее 50 км/ч",
"Использовать её только для обгона"
],
why: "Открытую spitsstrook используют как обычную полосу, двигаясь максимально справа."
},
enTranslation: {
question: "How should you use a spitsstrook when it is open?",
answers: [
"Drive on it as far right as possible and you may cross the solid line and hatched area",
"Use it only if you drive slower than 50 km/h",
"Use it only for overtaking"
],
why: "When open, a spitsstrook is used as a normal lane, as far right as possible."
}
},
{
id: 412,
question: "Wanneer is de spitsstrook gesloten en mag je die niet gebruiken?",
imageUrl: "",
answers: [
{ text: "Als er een rood kruis boven de strook brandt of er geen groene pijl zichtbaar is", isCorrect: true },
{ text: "Alleen ’s nachts", isCorrect: false },
{ text: "Alleen bij regen", isCorrect: false }
],
why: "Een rood kruis of het ontbreken van een groene pijl betekent dat de spitsstrook gesloten is.",
topic: "spitsstrook",
ruTranslation: {
question: "Когда полоса spitsstrook считается закрытой и её нельзя использовать?",
answers: [
"Когда над полосой горит красный крест или нет зелёной стрелки",
"Только ночью",
"Только во время дождя"
],
why: "Красный крест или отсутствие зелёной стрелки означает, что полоса закрыта."
},
enTranslation: {
question: "When is the spitsstrook closed and you may not use it?",
answers: [
"When a red cross is lit above it or no green arrow is shown",
"Only at night",
"Only when it rains"
],
why: "A red cross or no green arrow means the spitsstrook is closed."
}
},
{
id: 413,
question: "Wat is een plusstrook?",
imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/autosnelweg1_dcjrg9.png",
answers: [
{ text: "Een extra, vaak smallere linkerrijstrook die uit bestaande rijstroken wordt gehaald", isCorrect: true },
{ text: "Een aparte strook naast de vluchtstrook voor hulpdiensten", isCorrect: false },
{ text: "Een speciale strook alleen voor vrachtwagens", isCorrect: false }
],
why: "Een plusstrook is een extra rijstrook aan de linkerkant, meestal smaller dan de overige rijstroken.",
topic: "plusstrook",
ruTranslation: {
question: "Что такое plusstrook?",
answers: [
"Дополнительная, обычно более узкая левая полоса, сделанная за счёт существующих рядов",
"Отдельная полоса рядом с аварийной для служб",
"Специальная полоса только для грузовиков"
],
why: "Plusstrook — дополнительная левая полоса, как правило уже остальных."
},
enTranslation: {
question: "What is a plusstrook?",
answers: [
"An extra, often narrower left lane created from the existing lanes",
"A separate lane next to the hard shoulder for emergency services",
"A special lane only for lorries"
],
why: "A plusstrook is an extra left-hand lane, usually narrower than the others."
}
},
{
id: 414,
question: "Waarvoor is een vluchthaven langs autosnelweg of autoweg bedoeld?",
imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/L14_hdcf7f.png",
answers: [
{ text: "Alleen voor noodgevallen of pech", isCorrect: true },
{ text: "Als korte parkeerplaats voor pauze", isCorrect: false },
{ text: "Voor het keren van voertuigen", isCorrect: false }
],
why: "Een vluchthaven of pechhaven is alleen bestemd voor gebruik in noodgevallen.",
topic: "vluchthaven",
ruTranslation: {
question: "Для чего предназначен карман vluchthaven на автостраде/autoweg?",
answers: [
"Только для аварий и поломок",
"Как короткая парковка для отдыха",
"Чтобы развернуть автомобиль"
],
why: "Vluchthaven используют только в чрезвычайных ситуациях."
},
enTranslation: {
question: "What is an emergency bay (vluchthaven) along a motorway or autoweg for?",
answers: [
"Only for emergencies or breakdowns",
"As a short parking place for a break",
"For turning vehicles around"
],
why: "A vluchthaven is intended solely for emergency use."
}
},
{
id: 415,
question: "Wat is een invoegstrook?",
imageUrl: "",
answers: [
{ text: "Een met blokmarkering afgescheiden strook om de doorgaande rijbaan op te rijden", isCorrect: true },
{ text: "Een strook om de rijbaan te verlaten", isCorrect: false },
{ text: "Een parkeerstrook naast de rijbaan", isCorrect: false }
],
why: "De invoegstrook is bedoeld om in te voegen op de doorgaande rijbaan.",
topic: "invoegstrook",
ruTranslation: {
question: "Что такое полоса разгона (invoegstrook)?",
answers: [
"Отделённая блок-разметкой полоса для выезда на основную проезжую часть",
"Полоса для съезда с дороги",
"Парковочная полоса рядом с проезжей частью"
],
why: "Invoegstrook предназначена для вливания в основной поток."
},
enTranslation: {
question: "What is an entry lane (invoegstrook)?",
answers: [
"A lane separated by block markings to join the through carriageway",
"A lane to leave the road",
"A parking lane next to the carriageway"
],
why: "The invoegstrook is used to merge onto the main carriageway."
}
},
{
id: 416,
question: "Hoe gebruik je een invoegstrook op de autosnelweg het beste?",
imageUrl: "",
answers: [
{ text: "Snelheid aanpassen, richting aangeven en vloeiend invoegen in het verkeer", isCorrect: true },
{ text: "Op de invoegstrook remmen tot stilstand en wachten tot het leeg is", isCorrect: false },
{ text: "Zo snel mogelijk naar de linkerrijstrook sturen", isCorrect: false }
],
why: "Je gebruikt de invoegstrook om op snelheid te komen en veilig in te voegen.",
topic: "invoegstrook",
ruTranslation: {
question: "Как правильнее всего пользоваться полосой разгона на автостраде?",
answers: [
"Подстроить скорость, включить поворотник и плавно влиться в поток",
"Затормозить до полной остановки и ждать, пока всё освободится",
"Сразу перестроиться на левую полосу"
],
why: "Полоса разгона нужна, чтобы набрать скорость и безопасно влиться в поток."
},
enTranslation: {
question: "What is the best way to use an entry lane on the motorway?",
answers: [
"Match your speed, indicate and merge smoothly into traffic",
"Brake to a standstill and wait until it is empty",
"Steer to the left lane as quickly as possible"
],
why: "The entry lane is for getting up to speed and merging safely."
}
},
{
id: 417,
question: "Wat is een uitrijstrook?",
imageUrl: "",
answers: [
{ text: "Een met blokmarkering afgescheiden strook om de doorgaande rijbaan te verlaten", isCorrect: true },
{ text: "Een strook om de rijbaan op te rijden", isCorrect: false },
{ text: "Een strook voor stilstaand verkeer", isCorrect: false }
],
why: "De uitrijstrook is bedoeld om de snelweg of autoweg veilig te verlaten.",
topic: "uitrijstrook",
ruTranslation: {
question: "Что такое полоса съезда (uitrijstrook)?",
answers: [
"Отделённая блок-разметкой полоса для безопасного съезда с основной проезжей части",
"Полоса для въезда на дорогу",
"Полоса для стоящих автомобилей"
],
why: "Uitrijstrook предназначена для безопасного съезда с автострады или autoweg."
},
enTranslation: {
question: "What is an exit lane (uitrijstrook)?",
answers: [
"A lane with block markings to leave the through carriageway",
"A lane to enter the road",
"A lane for stationary vehicles"
],
why: "The uitrijstrook is used to leave the motorway or autoweg safely."
}
},
{
id: 418,
question: "Hoe gebruik je een uitrijstrook op de autosnelweg correct?",
imageUrl: "",
answers: [
{ text: "Op tijd richting aangeven en pas op de uitrijstrook snelheid verminderen", isCorrect: true },
{ text: "Vlak voor de afrit op de rijbaan hard remmen", isCorrect: false },
{ text: "Zonder richting aan te geven ineens naar de afrit sturen", isCorrect: false }
],
why: "Remmen doe je zoveel mogelijk op de uitrijstrook, niet op de doorgaande rijbaan.",
topic: "uitrijstrook",
ruTranslation: {
question: "Как правильно пользоваться полосой съезда на автостраде?",
answers: [
"Заранее включить поворотник и снижать скорость уже на полосе съезда",
"Сильно тормозить прямо перед выездом ещё на основной полосе",
"Резко свернуть на съезд без поворотника"
],
why: "Тормозить нужно в основном на полосе съезда, а не на основной дороге."
},
enTranslation: {
question: "How do you correctly use an exit lane on the motorway?",
answers: [
"Indicate in time and only reduce speed on the exit lane itself",
"Brake hard on the main lane just before the exit",
"Suddenly steer towards the exit without indicating"
],
why: "Most braking should be done on the exit lane, not on the through carriageway."
}
},
{
id: 419,
question: "Wat mag je doen als er plotseling een file ontstaat op de autosnelweg?",
imageUrl: "",
answers: [
{ text: "Je mag kort je alarmlichten inschakelen om achteropkomend verkeer te waarschuwen", isCorrect: true },
{ text: "Je moet direct naar de vluchtstrook uitwijken", isCorrect: false },
{ text: "Je mag keren om de file te vermijden", isCorrect: false }
],
why: "Bij een plotselinge file mag je kort de alarmlichten gebruiken als waarschuwing.",
topic: "file",
ruTranslation: {
question: "Что можно сделать, если на автостраде внезапно образовалась пробка?",
answers: [
"Коротко включить аварийную сигнализацию, чтобы предупредить сзади",
"Сразу уйти на полосу аварийной остановки",
"Развернуться, чтобы объехать пробку"
],
why: "При внезапной пробке можно ненадолго включить аварийку как предупреждение."
},
enTranslation: {
question: "What may you do when a traffic jam suddenly forms on the motorway?",
answers: [
"Briefly switch on your hazard lights to warn following traffic",
"Immediately move onto the hard shoulder",
"Make a U-turn to avoid the jam"
],
why: "For a sudden queue you may briefly use hazard lights as a warning."
}
},
{
id: 420,
question: "Hoe mogen motorrijders zich gedragen in een file op de autosnelweg?",
imageUrl: "",
answers: [
{ text: "Ze mogen langzaam tussen de meest linkse rijstroken doorrijden, met snelheidsverschil maximaal 10 km/uur", isCorrect: true },
{ text: "Ze moeten net als auto’s in de rij blijven staan", isCorrect: false },
{ text: "Ze mogen met elke snelheid over de vluchtstrook rijden", isCorrect: false }
],
why: "Motorrijders mogen voorzichtig tussen de file doorrijden, maar met beperkt snelheidsverschil.",
topic: "motorrijders_file",
ruTranslation: {
question: "Как могут вести себя мотоциклисты в пробке на автостраде?",
answers: [
"Они могут медленно ехать между крайними левыми рядами, с разницей скорости не более 10 км/ч",
"Они должны стоять в пробке как машины",
"Они могут ехать по аварийной полосе с любой скоростью"
],
why: "Мотоциклистам разрешено осторожно ехать между рядами, но с небольшим превышением скорости."
},
enTranslation: {
question: "How may motorcyclists behave in a traffic jam on the motorway?",
answers: [
"They may ride slowly between the leftmost lanes with a speed difference of max 10 km/h",
"They must queue like cars",
"They may ride on the hard shoulder at any speed"
],
why: "Motorcyclists may carefully filter between lanes with limited speed difference."
}
},
{
id: 421,
question: "Hoe houd je als automobilist rekening met motorrijders in een file?",
imageUrl: "",
answers: [
{ text: "Laat wat extra ruimte tussen auto’s en wijk zo mogelijk iets uit naar rechts of links", isCorrect: true },
{ text: "Blijf strak tegen de rijstrookmarkering rijden zodat zij er niet langs kunnen", isCorrect: false },
{ text: "Zet je alarmlichten aan en wissel vaak van rijstrook", isCorrect: false }
],
why: "Door iets ruimte te geven help je motorrijders veilig tussen de file door te rijden.",
topic: "motorrijders_file",
ruTranslation: {
question: "Как водителю автомобиля учитывать мотоциклистов в пробке?",
answers: [
"Оставлять немного больше расстояния и по возможности смещаться чуть вправо или влево",
"Ехать вплотную к разметке, чтобы они не проехали",
"Включить аварийку и часто менять ряд"
],
why: "Небольшой зазор помогает мотоциклистам безопасно проехать между рядами."
},
enTranslation: {
question: "How should you as a car driver take motorcyclists into account in a jam?",
answers: [
"Leave some extra space and, if possible, move slightly to the side",
"Drive very close to the lane markings so they cannot pass",
"Switch on hazard lights and change lanes often"
],
why: "By giving a little room you help motorcyclists pass safely between the queues."
}
},
{
id: 422,
question: "Uit welke weggedeelten kan een 'weg' volgens de definitie bestaan?",
imageUrl: "",
answers: [
{ text: "Rijbanen, in- en uitrijstroken, vluchtstroken, fietspaden, voetpaden en bermen", isCorrect: true },
{ text: "Alleen rijbanen en parkeerterreinen", isCorrect: false },
{ text: "Alleen rijstroken en trottoirs", isCorrect: false }
],
why: "In de beschrijving worden al deze onderdelen genoemd als mogelijke delen van een weg.",
topic: "weg_onderdelen",
ruTranslation: {
question: "Из каких частей по определению может состоять «дорога» (weg)?",
answers: [
"Проезжие части, полосы въезда/съезда, аварийные полосы, велодорожки, тротуары и обочины",
"Только проезжая часть и парковки",
"Только полосы движения и тротуары"
],
why: "В описании перечислены все эти элементы как части дороги."
},
enTranslation: {
question: "Which elements can a ‘road’ (weg) consist of according to the definition?",
answers: [
"Carriageways, entry and exit lanes, hard shoulders, cycle paths, footpaths and verges",
"Only carriageway and car parks",
"Only traffic lanes and pavements"
],
why: "All these parts are mentioned as possible components of a road."
}
},

// manoeuvres !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!


{
  id: 423,
  question: "Wanneer mag je rechts inhalen?",
  imageUrl: "",
  answers: [
    { text: "In een file of wanneer iemand links voorsorteert", isCorrect: true },
    { text: "Alleen op een autosnelweg", isCorrect: false },
    { text: "Nooit, rechts inhalen is altijd verboden", isCorrect: false }
  ],
  why: "Rechts inhalen mag o.a. in een file en als iemand links voorsorteert.",
  topic: "Inhalen",
  ruTranslation: {
    question: "Когда разрешено обгонять справа?",
    answers: ["В пробке или если впереди кто-то поворачивает налево", "Только на автостраде", "Никогда, обгон справа всегда запрещён"],
    why: "Справа можно обгонять в пробке или когда автомобиль сортирует налево."
  },
  enTranslation: {
    question: "When is overtaking on the right allowed?",
    answers: ["In a traffic jam or when someone is preparing to turn left", "Only on the motorway", "Never, right-side overtaking is always forbidden"],
    why: "Right overtaking is allowed in a jam or if someone is indicating left."
  }
},
{
  id: 424,
  question: "Wat is de inhaalafstand?",
  imageUrl: "",
  answers: [
    { text: "De afstand die je nodig hebt om veilig in te halen", isCorrect: true },
    { text: "De afstand tot de auto achter je", isCorrect: false },
    { text: "De afstand tot de berm", isCorrect: false }
  ],
  why: "De inhaalafstand is de totale afstand die je nodig hebt om veilig voorbij te gaan.",
  topic: "Inhalen",
  ruTranslation: {
    question: "Что такое дистанция обгона?",
    answers: ["Расстояние, необходимое для безопасного обгона", "Расстояние до машины сзади", "Расстояние до обочины"],
    why: "Дистанция обгона — это расстояние, которое необходимо, чтобы безопасно завершить манёвр."
  },
  enTranslation: {
    question: "What is the overtaking distance?",
    answers: ["The distance needed to safely overtake", "Distance to the vehicle behind you", "Distance to the shoulder"],
    why: "It's the distance required to safely complete the overtaking manoeuvre."
  }
},
{
  id: 425,
  question: "Wanneer mag je niet inhalen?",
  imageUrl: "",
  answers: [
    { text: "Bij bord F1 of bij een voetgangersoversteekplaats", isCorrect: true },
    { text: "Op een autosnelweg", isCorrect: false },
    { text: "Als je harder rijdt dan de ander", isCorrect: false }
  ],
  why: "Bij bord F1 en bij een zebrapad mag je nooit inhalen.",
  topic: "Inhalen",
  ruTranslation: {
    question: "Когда запрещено обгонять?",
    answers: ["При знаке F1 или возле пешеходного перехода", "На автостраде", "Если едешь быстрее другого"],
    why: "Знак F1 и пешеходный переход запрещают обгон."
  },
  enTranslation: {
    question: "When is overtaking prohibited?",
    answers: ["When sign F1 is present or near a pedestrian crossing", "On a motorway", "If you drive faster than someone else"],
    why: "With sign F1 and near a zebra crossing overtaking is forbidden."
  }
},
{
  id: 426,
  question: "Wat moet je doen tijdens een bijzondere manoeuvre?",
  imageUrl: "",
  answers: [
    { text: "Altijd al het overige verkeer voor laten gaan", isCorrect: true },
    { text: "Altijd gas bijgeven", isCorrect: false },
    { text: "Alleen spiegels controleren", isCorrect: false }
  ],
  why: "Bij bijzondere manoeuvres moet je iedereen voor laten gaan.",
  topic: "Bijzondere manoeuvres",
  ruTranslation: {
    question: "Что нужно делать при специальном манёвре?",
    answers: ["Всегда уступать остальному движению", "Всегда увеличивать газ", "Только смотреть в зеркала"],
    why: "При специальных манёврах нужно уступать всем."
  },
  enTranslation: {
    question: "What should you do during a special manoeuvre?",
    answers: ["Always yield to all other road users", "Always accelerate", "Only check mirrors"],
    why: "During special manoeuvres you must let everyone go first."
  }
},
{
  id: 427,
  question: "Wat is 'wegrijden' volgens de regels?",
  imageUrl: "",
  answers: [
    { text: "Een bijzondere manoeuvre waarbij je moet voorrang verlenen", isCorrect: true },
    { text: "Gewoon verder rijden", isCorrect: false },
    { text: "Alleen op een snelweg van rijstrook wisselen", isCorrect: false }
  ],
  why: "Wegrijden uit stilstand is een bijzondere manoeuvre.",
  topic: "Manoeuvres",
  ruTranslation: {
    question: "Что означает 'трогаться' по правилам?",
    answers: ["Это специальный манёвр, где нужно уступить", "Это просто продолжить движение", "Это смена полосы на автостраде"],
    why: "Начало движения — это особый манёвр."
  },
  enTranslation: {
    question: "What does 'pulling away' mean in traffic rules?",
    answers: ["A special manoeuvre where you must yield", "Just continuing your drive", "Changing lanes on the motorway"],
    why: "Pulling away counts as a special manoeuvre."
  }
},
{
  id: 428,
  question: "Wanneer mag je een tram rechts inhalen?",
  imageUrl: "",
  answers: [
    { text: "Altijd, tenzij anders aangegeven", isCorrect: true },
    { text: "Nooit", isCorrect: false },
    { text: "Alleen op een autosnelweg", isCorrect: false }
  ],
  why: "Een tram mag je meestal rechts voorbij.",
  topic: "Inhalen",
  ruTranslation: {
    question: "Когда можно обгонять трамвай справа?",
    answers: ["Всегда, если нет другого указания", "Никогда", "Только на автостраде"],
    why: "В большинстве случаев трамвай можно обгонять справа."
  },
  enTranslation: {
    question: "When may you overtake a tram on the right?",
    answers: ["Always unless stated otherwise", "Never", "Only on a motorway"],
    why: "A tram can usually be overtaken on the right."
  }
},
{
  id: 429,
  question: "Mag je vlak vóór bord F1 beginnen met inhalen?",
  imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/F1_cpqb2d.png",
  answers: [
    { text: "Nee, dat is verboden", isCorrect: true },
    { text: "Ja, als je snel genoeg bent", isCorrect: false },
    { text: "Alleen op een rotonde", isCorrect: false }
  ],
  why: "Je mag niet vlak voor bord F1 starten met inhalen.",
  topic: "Inhalen",
  ruTranslation: {
    question: "Можно ли начать обгон прямо перед знаком F1?",
    answers: ["Нет, это запрещено", "Да, если успеваешь", "Только на круговом движении"],
    why: "Нельзя начинать обгон перед знаком F1."
  },
  enTranslation: {
    question: "May you start overtaking right before sign F1?",
    answers: ["No, that is forbidden", "Yes, if you are fast enough", "Only on a roundabout"],
    why: "You may not start overtaking just before sign F1."
  }
},






{
id: 430,
question: "Wat moet je eerst doen voordat je een inhaalmanoeuvre begint?",
imageUrl: "https://res.cloudinary.com/dinthdifl/image/upload/inhalen_1_bauj8v.png",
answers: [
{ text: "Controleren of inhalen veilig kan in spiegels en dode hoek", isCorrect: true },
{ text: "Eerst claxonneren", isCorrect: false },
{ text: "Direct naar de andere rijstrook sturen", isCorrect: false }
],
why: "Je moet altijd eerst goed controleren of inhalen veilig is.",
topic: "Inhalen",
ruTranslation: {
question: "Что нужно сделать перед началом обгона?",
answers: ["Проверить по зеркалам и мёртвой зоне, безопасен ли обгон", "Сначала посигналить", "Сразу выехать на встречную полосу"],
why: "Перед обгоном нужно убедиться в безопасности манёвра."
},
enTranslation: {
question: "What must you do before starting an overtaking manoeuvre?",
answers: ["Check mirrors and blind spot to see if it is safe", "Sound the horn first", "Immediately steer to the other lane"],
why: "You must always check if overtaking is safe."
}
},
{
id: 431,
question: "Wanneer is de inhaalafstand LANG?",
imageUrl: "",
answers: [
{ text: "Als je slechts een beetje sneller rijdt dan het voertuig voor je", isCorrect: true },
{ text: "Als je veel sneller rijdt dan het andere voertuig", isCorrect: false },
{ text: "Als de weg omlaag loopt", isCorrect: false }
],
why: "Bij klein snelheidsverschil heb je een lange inhaalafstand nodig.",
topic: "Inhaalafstand",
ruTranslation: {
question: "Когда дистанция обгона считается ДЛИННОЙ?",
answers: ["Когда ты едешь лишь немного быстрее впереди идущего автомобиля", "Когда ты едешь намного быстрее другого автомобиля", "Когда дорога идёт под уклон"],
why: "При небольшом разнице скоростей для обгона нужно больше расстояния."
},
enTranslation: {
question: "When is the overtaking distance LONG?",
answers: ["When you drive only slightly faster than the vehicle in front", "When you drive much faster than the other vehicle", "When the road goes downhill"],
why: "With a small speed difference you need a long overtaking distance."
}
},
{
id: 432,
question: "Wat moet je doen als je tijdens het inhalen tegemoetkomend verkeer ziet naderen?",
imageUrl: "",
answers: [
{ text: "De inhaalmanoeuvre afbreken en teruggaan naar je eigen rijstrook", isCorrect: true },
{ text: "Harder gaan rijden om toch te kunnen inhalen", isCorrect: false },
{ text: "In het midden van de weg blijven rijden", isCorrect: false }
],
why: "Je mag geen gevaar veroorzaken voor tegemoetkomend verkeer.",
topic: "Inhaalmanoeuvre",
ruTranslation: {
question: "Что нужно сделать, если во время обгона ты видишь встречный автомобиль?",
answers: ["Прекратить обгон и вернуться на свою полосу", "Ускориться, чтобы успеть обогнать", "Остаться посередине дороги"],
why: "Нельзя создавать опасность для встречного транспорта."
},
enTranslation: {
question: "What should you do if you see oncoming traffic while overtaking?",
answers: ["Abort the overtaking and return to your lane", "Drive faster to finish the overtake", "Stay in the middle of the road"],
why: "You may not endanger oncoming traffic."
}
},
{
id: 433,
question: "Wanneer heb je een KORTE inhaalafstand nodig?",
imageUrl: "",
answers: [
{ text: "Als je veel sneller rijdt dan het voertuig dat je wilt inhalen", isCorrect: true },
{ text: "Als je slechts 5 km/u sneller rijdt", isCorrect: false },
{ text: "Als je op een kruispunt inhaalt", isCorrect: false }
],
why: "Bij groot snelheidsverschil is de inhaalafstand korter.",
topic: "Inhaalafstand",
ruTranslation: {
question: "Когда требуется КОРОТКАЯ дистанция обгона?",
answers: ["Когда ты едешь намного быстрее обгоняемого автомобиля", "Когда ты всего на 5 км/ч быстрее", "Когда обгоняешь на перекрёстке"],
why: "При большой разнице скорости требуется меньше расстояния."
},
enTranslation: {
question: "When do you need a SHORT overtaking distance?",
answers: ["When you drive much faster than the vehicle you overtake", "When you are only 5 km/h faster", "When you overtake at a junction"],
why: "With a big speed difference the required distance is shorter."
}
},
{
id: 434,
question: "Hoe rond je een inhaalmanoeuvre goed af?",
imageUrl: "",
answers: [
{ text: "Pas teruggaan als je de voorkant van het ingehaalde voertuig in je binnenspiegel ziet", isCorrect: true },
{ text: "Direct na het inhalen scherp naar rechts sturen", isCorrect: false },
{ text: "Zonder richting aan te geven terugsturen", isCorrect: false }
],
why: "Je moet voldoende afstand houden en tijdig richting aangeven.",
topic: "Inhalen",
ruTranslation: {
question: "Как правильно закончить манёвр обгона?",
answers: ["Возвращаться вправо только когда видишь переднюю часть обгоняемой машины в салонном зеркале", "Сразу резко уводить машину вправо после обгона", "Возвращаться без указателя поворота"],
why: "Нужно держать достаточную дистанцию и вовремя включать поворотник."
},
enTranslation: {
question: "How do you correctly finish an overtaking manoeuvre?",
answers: ["Return right only when you see the front of the overtaken car in your interior mirror", "Steer sharply right immediately after passing", "Steer back without signalling"],
why: "You must keep enough distance and signal in time."
}
},
{
id: 435,
question: "Mag je inhalen vlak vóór of op een onoverzichtelijke bocht?",
imageUrl: "",
answers: [
{ text: "Nee, dat kan een gevaarlijke situatie opleveren", isCorrect: true },
{ text: "Ja, als je claxonneert", isCorrect: false },
{ text: "Ja, als je iets harder rijdt dan de ander", isCorrect: false }
],
why: "Inhalen mag niet als je het overzicht verliest.",
topic: "Inhalen",
ruTranslation: {
question: "Можно ли обгонять непосредственно перед или в не обзорном повороте?",
answers: ["Нет, это может привести к опасной ситуации", "Да, если посигналить", "Да, если ехать чуть быстрее"],
why: "Обгон запрещён там, где отсутствует обзор."
},
enTranslation: {
question: "May you overtake just before or in a blind bend?",
answers: ["No, it can cause a dangerous situation", "Yes, if you use the horn", "Yes, if you drive a bit faster"],
why: "You may not overtake where you cannot see far enough."
}
},
{
id: 436,
question: "Welke handeling is GEEN bijzondere manoeuvre?",
imageUrl: "",
answers: [
{ text: "Rechtdoor rijden op een rechte weg", isCorrect: true },
{ text: "Wegrijden uit een parkeervak", isCorrect: false },
{ text: "Achteruitrijden", isCorrect: false }
],
why: "Gewoon rechtdoor rijden is geen bijzondere manoeuvre.",
topic: "Bijzondere manoeuvres",
ruTranslation: {
question: "Какое действие НЕ является специальным манёвром?",
answers: ["Движение прямо по прямой дороге", "Выезд из парковочного места", "Движение задним ходом"],
why: "Обычное движение прямо не считается особым манёвром."
},
enTranslation: {
question: "Which action is NOT a special manoeuvre?",
answers: ["Driving straight ahead on a straight road", "Pulling away from a parking space", "Reversing"],
why: "Simply driving straight is not a special manoeuvre."
}
},
{
id: 437,
question: "Wat moet je doen bij het wegrijden uit een parkeervak langs de rijbaan?",
imageUrl: "",
answers: [
{ text: "Alle weggebruikers voor laten gaan en pas wegrijden als niemand wordt gehinderd", isCorrect: true },
{ text: "Direct invoegen, anderen moeten jou voorrang geven", isCorrect: false },
{ text: "Alleen op voetgangers letten", isCorrect: false }
],
why: "Wegrijden is een bijzondere manoeuvre, je hebt geen voorrang.",
topic: "Wegrijden",
ruTranslation: {
question: "Что нужно делать при выезде из парковочного места вдоль дороги?",
answers: ["Уступить всем участникам движения и трогаться только когда никому не мешаешь", "Сразу выезжать, другие обязаны уступить", "Следить только за пешеходами"],
why: "Выезд с парковки — особый манёвр, при котором у тебя нет преимущества."
},
enTranslation: {
question: "What must you do when pulling out of a parking space along the road?",
answers: ["Let all road users go first and move off only when you hinder nobody", "Merge immediately, others must give you priority", "Only watch for pedestrians"],
why: "Pulling away is a special manoeuvre; you do not have priority."
}
},
{
id: 438,
question: "Hoe moet je LINKS voorsorteren op een weg met tegenliggers?",
imageUrl: "",
answers: [
{ text: "Zo veel mogelijk tegen de aslijn van de weg", isCorrect: true },
{ text: "In het midden van je rijstrook blijven", isCorrect: false },
{ text: "Zo veel mogelijk naar rechts gaan", isCorrect: false }
],
why: "Bij links afslaan ga je zo veel mogelijk links op je rijhelft staan.",
topic: "Afslaan en voorsorteren",
ruTranslation: {
question: "Как нужно занимать положение для левого поворота на двусторонней дороге?",
answers: ["Максимально близко к осевой линии дороги", "Оставаться в центре своей полосы", "Максимально смещаться вправо"],
why: "При левом повороте нужно смещаться как можно левее на своей половине дороги."
},
enTranslation: {
question: "How should you position for turning LEFT on a two-way road?",
answers: ["As close as possible to the centre line", "Stay in the middle of your lane", "Move as far right as possible"],
why: "For a left turn you move as far left as possible on your side."
}
},
{
id: 439,
question: "Hoe moet je RECHTS voorsorteren op een gewone weg?",
imageUrl: "",
answers: [
{ text: "Zo veel mogelijk rechts tegen de stoep of berm", isCorrect: true },
{ text: "In het midden van de rijbaan", isCorrect: false },
{ text: "Zo veel mogelijk links", isCorrect: false }
],
why: "Bij rechts afslaan sorteer je zo ver mogelijk rechts voor.",
topic: "Afslaan en voorsorteren",
ruTranslation: {
question: "Как нужно занимать положение для правого поворота на обычной дороге?",
answers: ["Максимально справа, у тротуара или обочины", "В центре проезжей части", "Максимально слева"],
why: "При правом повороте нужно заранее сместиться как можно правее."
},
enTranslation: {
question: "How should you position for a RIGHT turn on a normal road?",
answers: ["As far right as possible, near kerb or verge", "In the middle of the carriageway", "As far left as possible"],
why: "For a right turn you prepare as far right as possible."
}
},
{
id: 440,
question: "Hoe voorsorteer je op een weg met fietsstrook en doorgetrokken streep als je rechtsaf wilt?",
imageUrl: "",
answers: [
{ text: "Zo veel mogelijk rechts tegen de streep, zonder de fietsstrook op te rijden", isCorrect: true },
{ text: "Over de fietsstrook rijden", isCorrect: false },
{ text: "In het midden van de rijbaan blijven", isCorrect: false }
],
why: "De fietsstrook met doorgetrokken streep mag je niet gebruiken.",
topic: "Afslaan en voorsorteren",
ruTranslation: {
question: "Как нужно занимать положение для правого поворота при наличии велосипедной полосы с сплошной линией?",
answers: ["Максимально справа у линии, не заезжая на велополосу", "Ехать по велополосе", "Оставаться в центре проезжей части"],
why: "На велосипедную полосу со сплошной линией выезжать нельзя."
},
enTranslation: {
question: "How do you position for a right turn with a cycle lane and solid line?",
answers: ["As far right as possible next to the line, without entering the cycle lane", "Drive on the cycle lane", "Stay in the middle of the carriageway"],
why: "You may not use a cycle lane with a solid line."
}
},
{
id: 441,
question: "Wat moet je doen voordat je van rijstrook wisselt?",
imageUrl: "",
answers: [
{ text: "Spiegels en dode hoek controleren en richting aangeven", isCorrect: true },
{ text: "Alleen richting aangeven", isCorrect: false },
{ text: "Alleen naar voren kijken", isCorrect: false }
],
why: "Rijstrook wisselen is een bijzondere manoeuvre, daarom extra goed kijken.",
topic: "Rijstrook wisselen",
ruTranslation: {
question: "Что нужно сделать перед сменой полосы движения?",
answers: ["Проверить зеркала и мёртвую зону и включить поворотник", "Только включить поворотник", "Смотреть только вперёд"],
why: "Смена полосы — особый манёвр, требующий дополнительного контроля."
},
enTranslation: {
question: "What must you do before changing lanes?",
answers: ["Check mirrors and blind spot and use the indicator", "Only use the indicator", "Only look ahead"],
why: "Changing lanes is a special manoeuvre, so you must check carefully."
}
},
{
id: 442,
question: "Is inhalen op een kruispunt toegestaan?",
imageUrl: "",
answers: [
{ text: "Nee, meestal niet vanwege het verhoogde risico", isCorrect: true },
{ text: "Ja, altijd", isCorrect: false },
{ text: "Alleen als je links inhaalt", isCorrect: false }
],
why: "Op kruispunten kunnen onverwacht weggebruikers opduiken, daarom geen inhaalmanoeuvre.",
topic: "Inhalen",
ruTranslation: {
question: "Разрешён ли обгон на перекрёстке?",
answers: ["Нет, в большинстве случаев из-за повышенного риска", "Да, всегда", "Только при обгоне слева"],
why: "На перекрёстке могут внезапно появиться участники движения, поэтому обгон там запрещён."
},
enTranslation: {
question: "Is overtaking at a junction allowed?",
answers: ["No, mostly not because of higher risk", "Yes, always", "Only when overtaking on the left"],
why: "Unexpected road users may appear at junctions, so overtaking is not allowed."
}
},
{
id: 443,
question: "Hoe ga je een stilstaand voertuig dat een obstakel vormt voorbij?",
imageUrl: "",
answers: [
{ text: "Je rijdt er rustig omheen: dat heet voorbijgaan, geen inhalen", isCorrect: true },
{ text: "Je mag hier nooit langsrijden", isCorrect: false },
{ text: "Je moet altijd toeteren en gas geven", isCorrect: false }
],
why: "Een obstakel voorbijrijden wordt niet als inhalen gezien, maar moet wel veilig gebeuren.",
topic: "Voorbijgaan",
ruTranslation: {
question: "Как объехать стоящее транспортное средство, являющееся препятствием?",
answers: ["Спокойно объехать его — это называется объезд, а не обгон", "Никогда нельзя проезжать мимо", "Всегда нужно сигналить и ускоряться"],
why: "Объезд препятствия не считается обгоном, но он должен быть безопасным."
},
enTranslation: {
question: "How do you pass a stationary vehicle that forms an obstacle?",
answers: ["Drive calmly around it; this is passing, not overtaking", "You may never pass it", "You must always honk and accelerate"],
why: "Passing an obstacle is not overtaking, but must be done safely."
}
},
{
id: 444,
question: "Mag je een stilstaand voertuig dat voor een verkeerslicht wacht, inhalen?",
imageUrl: "",
answers: [
{ text: "Nee, dat wordt als inhalen gezien en is hier ongewenst", isCorrect: true },
{ text: "Ja, altijd", isCorrect: false },
{ text: "Alleen als je haast hebt", isCorrect: false }
],
why: "Een stilstaand voertuig bij een licht mag je niet zomaar voorbijrijden.",
topic: "Inhalen",
ruTranslation: {
question: "Можно ли обгонять стоящий перед светофором автомобиль?",
answers: ["Нет, это считается обгоном и здесь нежелательно", "Да, всегда", "Только если ты спешишь"],
why: "Проезжать мимо автомобиля, ожидающего у светофора, нельзя."
},
enTranslation: {
question: "May you overtake a vehicle waiting at traffic lights?",
answers: ["No, it is seen as overtaking and is undesirable here", "Yes, always", "Only if you are in a hurry"],
why: "You may not simply pass a vehicle waiting at lights."
}
},
{
id: 445,
question: "Welke van de onderstaande handelingen is een bijzondere manoeuvre?",
imageUrl: "",
answers: [
{ text: "Vanaf een inrit de weg oprijden", isCorrect: true },
{ text: "Met 100 km/u op de autosnelweg rijden", isCorrect: false },
{ text: "In een file langzaam doorrijden", isCorrect: false }
],
why: "Vanaf een inrit de weg oprijden is een bijzondere manoeuvre.",
topic: "Bijzondere manoeuvres",
ruTranslation: {
question: "Какое из действий ниже является специальным манёвром?",
answers: ["Выезд на дорогу с подъездной дорожки/двора", "Движение по автостраде со скоростью 100 км/ч", "Медленное движение в пробке"],
why: "Выезд с прилегающей территории считается особым манёвром."
},
enTranslation: {
question: "Which of the following actions is a special manoeuvre?",
answers: ["Driving onto the road from a driveway", "Driving 100 km/h on the motorway", "Driving slowly in a traffic jam"],
why: "Leaving a driveway to enter the road is a special manoeuvre."
}
},
{
id: 446,
question: "Wat is bij afslaan extra belangrijk voor de verkeersdoorstroming?",
imageUrl: "",
answers: [
{ text: "Dat je tijdig en op de juiste plaats voorsorteert", isCorrect: true },
{ text: "Dat je zo laat mogelijk richting aangeeft", isCorrect: false },
{ text: "Dat je midden op de rijbaan blijft rijden", isCorrect: false }
],
why: "Goed voorsorteren bevordert de doorstroming en voorkomt gevaar.",
topic: "Afslaan en voorsorteren",
ruTranslation: {
question: "Что особенно важно для хорошей пропускной способности при повороте?",
answers: ["Заранее и правильно занять положение на полосе (сортировка)", "Как можно позже включать поворотник", "Оставаться посередине проезжей части"],
why: "Правильная сортировка улучшает движение и уменьшает риск."
},
enTranslation: {
question: "What is especially important for traffic flow when turning?",
answers: ["Positioning in time and at the correct place (pre-sorting)", "Signalling as late as possible", "Staying in the middle of the carriageway"],
why: "Good positioning improves flow and reduces danger."
}
},
{
id: 447,
question: "Moeten fietsers en snorfietsers bij het inhalen ook rekening houden met jou als automobilist?",
imageUrl: "",
answers: [
{ text: "Ja, maar zij mogen jou vaak rechts inhalen", isCorrect: true },
{ text: "Nee, zij hebben nooit verplichtingen", isCorrect: false },
{ text: "Alleen snorfietsers, fietsers niet", isCorrect: false }
],
why: "Fietsers en snorfietsers moeten zich ook aan de regels houden, maar mogen jou wel rechts voorbij.",
topic: "Inhalen door fietsers",
ruTranslation: {
question: "Должны ли велосипедисты и мопедисты при обгоне тоже учитывать тебя как водителя авто?",
answers: ["Да, но они часто могут обгонять тебя справа", "Нет, на них не распространяются обязанности", "Только мопедисты, велосипедисты — нет"],
why: "Велосипедисты и мопедисты тоже обязаны соблюдать правила, но им разрешён обгон справа."
},
enTranslation: {
question: "Do cyclists and moped riders also have to take you into account when overtaking you as a car driver?",
answers: ["Yes, but they are often allowed to overtake you on the right", "No, they never have obligations", "Only moped riders, not cyclists"],
why: "Cyclists and moped riders must follow the rules too, but may pass you on the right."
}
},


// weggebruikers !!!!!!!!!!!!!!!!!!








];
mongoose.connect('mongodb://localhost:27017/proeftoets')
  .then(async () => {
    await Question.deleteMany(); 
    await Question.insertMany(questions);
    console.log('✅ Вопросы загружены');
    mongoose.disconnect();
  })
  .catch(console.error);
