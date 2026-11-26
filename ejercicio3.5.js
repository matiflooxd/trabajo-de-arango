// ---------- Ejercicio 3.5 — Dividir y unir ----------
console.log("\n--- Ejercicio 3.5 ---");
let csv = "manzana,pera,uva,mango,banano";
let frutas = csv.split(",");
console.log("Array:", frutas);
console.log("Cantidad de elementos:", frutas.length);
console.log("Unido con '-':", frutas.join("-"));
