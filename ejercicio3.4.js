// ---------- Ejercicio 3.4 — Extracción y reemplazo ----------
console.log("\n--- Ejercicio 3.4 ---");
let cadena = "JavaScript es difícil";
// "JavaScript es " tiene 14 caracteres, así que "difícil" empieza en el índice 14
console.log("Extraída con slice:", cadena.slice(14));
console.log("Reemplazo:", cadena.replace("difícil", "poderoso"));