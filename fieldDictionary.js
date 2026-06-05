/**
 * AmtAssist – fieldDictionary.js
 * German bureaucratic form field recognizer and explainer.
 * Covers: ELSTER, Meldeamt, Ausländerbehörde, Jobcenter, Krankenversicherung
 */

export const FIELD_DICTIONARY = {
  // ── Personal Data ──────────────────────────────────────────────
  steueridentifikationsnummer: {
    de: "Ihre 11-stellige Steuer-ID vom Finanzamt. Steht auf Ihrem Einkommensteuerbescheid.",
    en: "Your 11-digit tax ID from the Finanzamt. Found on your income tax notice.",
    regex: /steuer.?id|steuer.?identifikation|tin/i,
    format: "XXXXXXXXXXX (11 digits)",
    required: true,
  },
  steuernummer: {
    de: "Ihre persönliche Steuernummer vom zuständigen Finanzamt. Format je nach Bundesland unterschiedlich.",
    en: "Your personal tax number assigned by your local Finanzamt. Format varies by state.",
    regex: /steuernummer|steuernr\.?/i,
    format: "XX/XXX/XXXXX",
    required: true,
  },
  sozialversicherungsnummer: {
    de: "12-stellige SVNR auf Ihrer Versicherungskarte. Beginnt mit Ihrem Geburtsdatum.",
    en: "12-digit social security number on your insurance card. Starts with your birth date.",
    regex: /sozialversicherung|svnr|rentenversicherung/i,
    format: "XXXXXXXXXX (12 chars)",
    required: false,
  },
  geburtsdatum: {
    de: "Ihr Geburtsdatum im Format TT.MM.JJJJ (z.B. 15.03.1990).",
    en: "Your date of birth in DD.MM.YYYY format (e.g. 15.03.1990).",
    regex: /geburtsdatum|geburts.?datum|birth.?date|dob/i,
    format: "DD.MM.YYYY",
    required: true,
  },
  geburtsort: {
    de: "Die Stadt/Gemeinde, in der Sie geboren wurden.",
    en: "The city/municipality where you were born.",
    regex: /geburtsort|geburts.?ort|birth.?place/i,
    format: "Stadtname",
    required: true,
  },
  staatsangehörigkeit: {
    de: "Ihre Staatsbürgerschaft. Deutsche Staatsangehörigkeit = 'deutsch'.",
    en: "Your nationality/citizenship. German = 'deutsch'.",
    regex: /staatsangehörigkeit|nationalität|citizenship|nationality/i,
    format: "z.B. deutsch, türkisch",
    required: true,
  },
  familienstand: {
    de: "Ihr Familienstand: ledig, verheiratet, geschieden, verwitwet, eingetragene Lebenspartnerschaft.",
    en: "Your marital status: single, married, divorced, widowed, civil partnership.",
    regex: /familienstand|marital.?status/i,
    format: "ledig | verheiratet | geschieden",
    required: true,
  },
  // ── Address ────────────────────────────────────────────────────
  postleitzahl: {
    de: "Ihre 5-stellige Postleitzahl (PLZ). Pflichtfeld für Adressangaben.",
    en: "Your 5-digit postal code (PLZ). Required for address fields.",
    regex: /postleitzahl|plz|postal.?code|zip/i,
    format: "XXXXX (5 digits)",
    required: true,
  },
  hausnummer: {
    de: "Hausnummer Ihrer Wohnadresse. Kann Buchstaben enthalten (z.B. 12a).",
    en: "House number of your address. Can include letters (e.g. 12a).",
    regex: /hausnummer|haus.?nr|house.?number/i,
    format: "z.B. 12, 12a, 12b",
    required: true,
  },
  // ── Employment ─────────────────────────────────────────────────
  bruttoeinkommen: {
    de: "Ihr Bruttogehalt vor Steuer- und Sozialversicherungsabzügen.",
    en: "Your gross salary before tax and social security deductions.",
    regex: /brutto.?einkommen|brutto.?gehalt|gross.?income|gross.?salary/i,
    format: "EUR (z.B. 3500,00)",
    required: false,
  },
  arbeitgeber: {
    de: "Name und Adresse Ihres aktuellen Arbeitgebers.",
    en: "Name and address of your current employer.",
    regex: /arbeitgeber|employer/i,
    format: "Firmenname",
    required: false,
  },
  beschäftigungsverhältnis: {
    de: "Art Ihrer Beschäftigung: Vollzeit, Teilzeit, Minijob, Selbständig, etc.",
    en: "Type of employment: full-time, part-time, mini-job, self-employed, etc.",
    regex: /beschäftigungs.?verhältnis|employment.?type|art.?der.?beschäftigung/i,
    format: "Vollzeit | Teilzeit | Minijob",
    required: false,
  },
  // ── ELSTER / Tax ───────────────────────────────────────────────
  anlage_n: {
    de: "Anlage N: Einnahmen aus nichtselbständiger Arbeit (Lohn/Gehalt). Für jeden Arbeitgeber ausfüllen.",
    en: "Anlage N: Income from employment. Fill in for each employer.",
    regex: /anlage.?n\b/i,
    format: "ELSTER Formular",
    required: false,
  },
  anlage_kind: {
    de: "Anlage Kind: Angaben zu Ihrem Kind/Ihren Kindern für Kinderfreibetrag und Kindergeld.",
    en: "Anlage Kind: Information about your child/children for child allowances.",
    regex: /anlage.?kind/i,
    format: "ELSTER Formular",
    required: false,
  },
  werbungskosten: {
    de: "Werbungskosten: Berufsbedingte Ausgaben (Fahrtkosten, Arbeitsmittel, etc.). Mindest-Pauschale 1.230 € (2024).",
    en: "Work-related expenses (commuting, tools, etc.). Minimum flat rate 1,230 € (2024).",
    regex: /werbungskosten/i,
    format: "EUR",
    required: false,
  },
  // ── Ausländerbehörde ───────────────────────────────────────────
  aufenthaltstitel: {
    de: "Ihr aktueller Aufenthaltstitel (z.B. Niederlassungserlaubnis, Aufenthaltserlaubnis).",
    en: "Your current residence permit type (e.g. permanent settlement permit, temporary permit).",
    regex: /aufenthalts.?titel|residence.?permit|aufenthalts.?erlaubnis/i,
    format: "z.B. §18a AufenthG",
    required: false,
  },
  reisepassnummer: {
    de: "Nummer Ihres Reisepasses oder Personalausweises.",
    en: "Your passport or national ID number.",
    regex: /reisepass|pass.?nummer|passport|ausweis.?nummer/i,
    format: "z.B. C01X00T47",
    required: false,
  },
  einreisedatum: {
    de: "Datum Ihrer ersten Einreise nach Deutschland.",
    en: "Date of your first entry into Germany.",
    regex: /einreise.?datum|entry.?date|datum.?einreise/i,
    format: "DD.MM.YYYY",
    required: false,
  },
};

/**
 * Find matching field entry for a given label string.
 * @param {string} label - The form field label text
 * @returns {{ key: string, data: object } | null}
 */
export function findField(label) {
  const normalized = label.trim().toLowerCase();
  for (const [key, data] of Object.entries(FIELD_DICTIONARY)) {
    if (data.regex.test(normalized)) {
      return { key, data };
    }
  }
  return null;
}

/**
 * Get all field keys grouped by category.
 */
export const FIELD_CATEGORIES = {
  personal: ["steueridentifikationsnummer", "steuernummer", "sozialversicherungsnummer", "geburtsdatum", "geburtsort", "staatsangehörigkeit", "familienstand"],
  address:  ["postleitzahl", "hausnummer"],
  employment: ["bruttoeinkommen", "arbeitgeber", "beschäftigungsverhältnis"],
  tax: ["anlage_n", "anlage_kind", "werbungskosten"],
  immigration: ["aufenthaltstitel", "reisepassnummer", "einreisedatum"],
};
