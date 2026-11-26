// ---------- Ejercicio 2.4 — Incremento y decremento ----------
console.log("\n--- Ejercicio 2.4 ---");
let contador = 10;

// Postfijo (contador++): devuelve el valor ACTUAL y luego incrementa.
console.log("contador++ ->", contador++); // imprime 10
console.log("contador ahora vale:", contador); // 11

// Prefijo (++contador): incrementa primero y luego devuelve el valor.
console.log("++contador ->", ++contador); // imprime 12

// Postfijo (contador--): devuelve el valor actual y luego decrementa.
console.log("contador-- ->", contador--); // imprime 12
console.log("contador ahora vale:", contador); // 11

// Prefijo (--contador): decrementa primero y luego devuelve el valor.
console.log("--contador ->", --contador); // imprime 10