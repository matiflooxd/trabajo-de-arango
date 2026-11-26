// ---------- Ejercicio 2.2 — Comparación ----------
console.log("\n--- Ejercicio 2.2 ---");
let n1 = 10;
let n2 = 20;
console.log("n1 == n2:", n1 == n2);
console.log("n1 === n2:", n1 === n2);
console.log("n1 != n2:", n1 != n2);
console.log("n1 !== n2:", n1 !== n2);
console.log("n1 > n2:", n1 > n2);
console.log("n1 < n2:", n1 < n2);
console.log("n1 >= n2:", n1 >= n2);
console.log("n1 <= n2:", n1 <= n2);

console.log("5 == '5':", 5 == "5");   // true
console.log("5 === '5':", 5 === "5"); // false
// Diferencia: == compara solo el valor y convierte los tipos (coerción),
// por eso 5 == "5" es true. === compara valor Y tipo, y como number y string
// son tipos distintos, da false. Se recomienda usar siempre ===.
