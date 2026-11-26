// ---------- Ejercicio 3.3 — Búsqueda en cadenas ----------
console.log("\n--- Ejercicio 3.3 ---");
let email = "usuario@dominio.com";
console.log("¿Incluye '@'?", email.includes("@"));          // true
console.log("Índice de 'dominio':", email.indexOf("dominio")); // 8
console.log("¿Termina con '.com'?", email.endsWith(".com"));  // true