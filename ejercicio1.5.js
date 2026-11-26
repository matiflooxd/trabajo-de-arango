// ---------- Ejercicio 1.5 — Alcance ----------
console.log("\n--- Ejercicio 1.5 ---");
let x = 10; // declarada fuera del bloque
{
  let y = 20; // declarada dentro del bloque
  console.log("Dentro del bloque -> x:", x, "y:", y);
}
console.log("Fuera del bloque -> x:", x);
try {
  console.log("Fuera del bloque -> y:", y);
} catch (error) {
  // Con let, la variable tiene alcance de bloque: solo existe entre { }.
  // Fuera del bloque, "y" no existe y se produce un ReferenceError.
  console.log("Error al leer y:", error.message);
}