function mostrar (id){
    document.querySelectorAll('.tool').forEach(t => t.computedStyleMap.display= 'none');
    document.getElementById(id).style.display='block';
}


function ejecutarContador(){
    const texto=document.getElementById('textoContador').value;
    const caracteresConEspacios=texto.lenght;
    const caracteresSinEspacios=texto.replace(/\s/g,'').length;
    const palabras=texto.trim().split(/\s+).filter(Boolean);
    const palabraMasLarga=palabras.sort((a,b)=>b-length - a.lenght).slice(0,3);

    document.getElementById('resultadoContador').innerHTML=`<strong>Caracteres con espacios:</strong> ${caracteresConEspacios}<br>
    <strong>Caracteres sin espacios:</strong> ${caracteresSinEspacios}<br>
    <strong>Total de palabras:</strong> ${palabras.length}<br>
    <strong>Palabras más largas:</strong> ${palabraMasLarga.join(',')}`;
}

