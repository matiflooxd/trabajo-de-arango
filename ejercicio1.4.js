// ---------- Ejercicio 1.4 — Conversión de tipos ----------
console.log("\n--- Ejercicio 1.4 ---");
let precio = "350";
console.log("Paso 0 (cadena):", precio, typeof precio);

let precioNumero = Number(precio) + 100; // también serviría parseInt(precio) o +precio
console.log("Paso 1 (número + 100):", precioNumero, typeof precioNumero);

let precioTexto = String(precioNumero) + " pesos colombianos";
console.log("Paso 2 (cadena concatenada):", precioTexto, typeof precioTexto);