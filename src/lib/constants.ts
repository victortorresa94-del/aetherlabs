// src/lib/constants.ts
export const WA_NUMBER_E164 = "34627281459"; // <- tu número en formato E.164 (sin +)
export const WA_CHAT_URL = `https://wa.me/${WA_NUMBER_E164}`;
export const WA_DEFAULT_MSG = "Hola%2C%20quiero%20crear%20mi%20IA.";
export const WA_CHAT_WITH_MSG = `${WA_CHAT_URL}?text=${WA_DEFAULT_MSG}`;
