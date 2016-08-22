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
  
- `partials/scatter_example.json`<br>- **Json base** para definir los valores que mostrará la visualización, se debe respetar la **estructura** y los **nombres** o `keys` de los valores.<br><br>

- `js/scatter.js`<br>- Javascript que contiene las funcionalidades **necesarias** para dibujar la visualización.
<br><br>

Para probar las visualizaciones en local, es necesario montar el proyecto en un servidor web local como Apache.