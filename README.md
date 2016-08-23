# ScatterPlot

Plantilla de visualización tipo Scatter plot.<br>
Descripción de archivos principales:

- `scatter.html` <br>- Archivo html en el que se importan principalmente:
  * Librería de la visualización
  * Archivo `js` con diversas funcionalidades (`js/scatter.js`)
  * **Contendor para la gráfica**, que en este caso se debe definir en el html como: `<div id="scatterplot"></div>`
  * **Contenedor para escalas**, es en donde se mostrará la descripción de los tamaños de las burbujas en el scatter plot y debe tener la siguiente estrucutra html:<br>
  ```
  <div class="col-sm-10 escala">

    <div class="col-sm-1 textLegendHard">Escala:</div>
    
    <div class="col-sm-2" id="circle-big"></div>
    <div class="col-sm-2 textLegend"><span id="legendBig"></span></div>

    <div class="col-sm-2" id="circle-medium"></div>
    <div class="col-sm-2 textLegend"><span id="legendMd"></span></div>

    <div class="col-sm-2" id="circle-small"></div>
    <div class="col-sm-2 textLegend"><span id="legendSm"></span></div>

  </div>
  ```
  <br>  
  
- `partials/scatter_example.json`<br>- **Json base** para definir los valores que mostrará la visualización.<br>

- `js/scatter.js`<br>- Javascript que contiene las funcionalidades **necesarias** para dibujar la visualización.
<br><br>

Para probar las visualizaciones en local, es necesario montar el proyecto en un servidor web local como Apache.

##Json base

El Json que consumirá la visualización debe estar en todo momento dentro del folder `partials` y debe tener asignado el nombre `scatter_example.json`<br>

La **estructura** debe ser igual a la del archivo `scatter_example.json`, si exisite alguna diferencia, por mínima que sea, la gráfica no se visualizará en el navegador.

Además los **nombres** o `keys` de los valores deben ser iguales a los dej Json de ejemplo para que estos se puedan mostrar en la visualización.

**Estructura**

```
{
  "titulo": "Tipos de contratación",
  "ejex": "Fecha de firma",
  "ejey": "Vigencia en meses",
  "unidad": "Pesos",
  "valores": [
    {
      "tipo": "Licitación",
      "monto": 12855,
      "vigencia": 50,
      "fecha": "12 Ene 2015",
      "contrato": "SO-005542-N23-2015"
    }
   ]
}
```

- "titulo" //Es la leyenda que se muestra en la parte superior de la gráfica
- "ejex" //Legenda del Eje X en la gráfica
- "ejey" //Legenda del Eje Y en la gráfica
- "unidad" //Se muestra como texto en la leyenda de la Escala en la parte inferior de la gráfica
- "valores" //Cada objeto dentro de este array dibuja una "burbuja" o "circulo" en el Scatter
- "tipo" //Valor por el cual se agrupan las "burbujas
- "monto" //Asigna el tamaño de la "burbuja"
- "vigencia" //Posición de la "burbuja" respecto al Eje Y
- "fecha" //Posición de la "burbuja" respecto al Eje X
- "contrato" //Valor que se muestra como texto dentro del Tooltip de cada burbuja
