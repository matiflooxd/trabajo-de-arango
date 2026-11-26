// ---------- Ejercicio 1.3 — Reasignación y constantes ----------
console.log("\n--- Ejercicio 1.3 ---");
let contadorLet = 1;
contadorLet = 2;
contadorLet = 3;
console.log("let reasignada dos veces:", contadorLet); // 3

const contadorConst = 1;
try {
  contadorConst = 2; // Esto lanza un error
} catch (error) {
  // Observación: con const NO se puede reasignar. JavaScript lanza
  // "TypeError: Assignment to constant variable." y el valor sigue siendo 1.
  console.log("Error con const:", error.message);
}
console.log("const sigue valiendo:", contadorConst);