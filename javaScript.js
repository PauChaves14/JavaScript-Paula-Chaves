let opcion = "quien es mas grande";
while (opcion !== "salir") {
opcion = prompt("Ingrese un equipo (salir para terminar):");
switch (opcion) {
    case "1":
    alert("River Plate");
    break;
    case "2":
    alert("Boca Jrs");
    break;
    case "3":
    alert("Talleres");
    break;
    case "salir":
    alert("Saliendo del programa..");
    break;
    default:
    alert("Opción inválida");
}
}
alert("Fin del programa");