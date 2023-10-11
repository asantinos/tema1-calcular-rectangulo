/**
 * Autor: Alejandro Santos García
 * Github repository: https://github.com/asantinos/tema1-calcular-rectangulo
 */

// DOMContentLoaded para que se cargue toda la web antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  // Almacenamos el botón y el div del resultado en constantes
  const calculateBtn = document.getElementById("calculate-btn");
  const result = document.getElementById("result");

  // Creamos una función para cuando se haga click en el botón
  calculateBtn.addEventListener("click", () => {
    // Almacenamos longitud y ancho insertados en los input
    const long = parseFloat(document.getElementById("long").value);
    const width = parseFloat(document.getElementById("width").value);

    // Comprobamos que los números introducidos sean válidos
    if (!isNaN(long) && !isNaN(width)) {
      // Operaciones para área, perímetro y diagonal
      let area = (long * width).toFixed(2);
      let perim = (2 * (long + width)).toFixed(2);
      let diagonal = Math.sqrt(Math.pow(long, 2) + Math.pow(width, 2)).toFixed(
        2
      );

      result.innerHTML = `
        <p>Área del rectángulo: ${area}</p>
        <p>Perímetro del rectángulo: ${perim}</p>
        <p>Diagonal del rectángulo: ${diagonal}</p>
      `;
    } else {
      // En caso de que no sean válidos, mostramos mensaje de error
      const erroMsg = "Por favor, ingrese valores válidos.";

      result.innerHTML = `
        <p>${erroMsg}</p>
      `;
    }
  });
});
