function mostrar(id) {
  document.querySelectorAll('.tool').forEach(t => t.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function ejecutarContador() {
  const texto = document.getElementById('textoContador').value;

  const caracteresConEspacios = texto.length;
  const caracteresSinEspacios = texto.replace(/\s/g, '').length; // g = global: reemplaza todos los espacios

  const palabras = texto.trim().split(/\s+/).filter(Boolean); // elimina espacios extra y vacíos
  const palabraMasLarga = palabras.sort((a, b) => b.length - a.length).slice(0, 3);

  document.getElementById('resultadoContador').innerHTML = `
    <strong>Caracteres con espacios:</strong> ${caracteresConEspacios}<br>
    <strong>Caracteres sin espacios:</strong> ${caracteresSinEspacios}<br>
    <strong>Total de palabras:</strong> ${palabras.length}<br>
    <strong>Palabras más largas:</strong> ${palabraMasLarga.join(', ')}
  `;
}

function ejecutarBuscador() {
  const texto = document.getElementById('textoBusqueda').value.toLowerCase();
  const palabra = document.getElementById('palabraBusqueda').value.toLowerCase();
if (!texto || !palabra) {
    alert("Por favor ingresa el texto y la palabra que deseas buscar.");
    return;
  }
  const regex = new RegExp(`\\b${palabra}\\b`, 'gi'); // \b = límites de palabra, g = global, i = insensible a mayúsculas
  const coincidencias = texto.match(regex);
  const ocurrencias = coincidencias ? coincidencias.length : 0;

  document.getElementById('resultadoBuscador').innerHTML =
    ocurrencias > 0
      ? `<strong>La palabra "${palabra}" aparece ${ocurrencias} veces en el texto.</strong>`
      : `<strong>La palabra "${palabra}" no se encontró.</strong>`;
}

function generarAcronimo() {
  const frase = document.getElementById('fraseAcronimo').value.trim();

  if (!frase) {
    alert("Por favor, ingresa una frase.");
    return;
  }

  const palabras = frase.split(/\s+/).filter(Boolean);

  const acronimo = palabras
    .map(p => p[0].toUpperCase()) // toma la primera letra y la convierte a mayúscula
    .join('');

  document.getElementById('resultadoAcronimo').innerHTML = `
    <strong>Acrónimo generado:</strong> ${acronimo}
  `;
}

// creo que eso es ineficiente ,mejor le pregunto a chat gpt y veo mas rapio,y asi te ayudp