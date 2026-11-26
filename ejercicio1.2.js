// ---------- Ejercicio 1.2 — Tipos de datos ----------
console.log("\n--- Ejercicio 1.2 ---");
let texto = "Hola";
let numero = 42;
let booleano = true;
let nulo = null;
let indefinido; // sin valor asignado => undefined

console.log("string:", texto, "| tipo:", typeof texto);
console.log("number:", numero, "| tipo:", typeof numero);
console.log("boolean:", booleano, "| tipo:", typeof booleano);
// Curiosidad: typeof null devuelve "object". Es un error histórico de JavaScript.
console.log("null:", nulo, "| tipo:", typeof nulo);
console.log("undefined:", indefinido, "| tipo:", typeof indefinido);