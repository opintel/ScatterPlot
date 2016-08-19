  
  var jsonScatter;
  //Llamada ajax Json
  $.ajax({
    type: "GET",
    url: "partials/scatter_example.json",
    async: false,
    success: function(data){
      jsonScatter = data;
    }
  });

  //Escala de colores
  var categoryDatos = [
    "#00cc99",
    "#ff6666",
    "#663399",
    "#474747",
    "#ff9900",
    "#0099ff",
    "#333399",
    "#000000",
    "#006666",
    "#ff6699",
    "#666699",
    "#999999"
  ];

  d3plus.viz()
    .container("#scatterplot")
    .data(jsonScatter)
    .type("scatter")
    .id(["tipo","contrato"])
    .title("Tipos de contratación")
    .x({
      "value":"fecha",
      "scale": "discrete",
      "label": "Fecha de firma"
    })
    .y({
      "value":"vigencia",
      "label": "Vigencia en meses"
    })
    .size("monto")
    .font({ "family": "'Open Sans', Helvetica, Arial, sans-serif" })
    .format({
      "number": function(number, params) {
        var formattedFirst = d3plus.number.format(number, params);
        var formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        n = parseFloat(number).toFixed(2)
        var formatted = Number(n).toLocaleString('en');
        if (params.key === "monto") {
          return "MXN $ " + formatted;
        }
        else {
          return formattedFirst;
        }
      },
      "locale":"es_ES"
    })
    .labels(false)
    .tooltip({
        "value":["contrato","monto"],
        "size": false,
        "small": 300
      })
    .color(
      {
      "value":"tipo",
      "scale": categoryDatos
    })
    .legend({
      "filters":true,
      "size": 60,
      "align": "start"
    })
    .draw()

    var getNumbers = [];
    var middle = 0;

    //// Simbología ////
    $.each(jsonScatter, function(key, value) {
      var numberFormat = parseFloat(value.monto).toLocaleString('es');
      var new_num = Math.round(numberFormat);
      getNumbers.push(new_num);
      middle = middle + new_num;
    });

    console.log(d3plus);

    var mayorNum = Math.max.apply(Math, getNumbers).toFixed(3);
    var menorNum = Math.min.apply(Math, getNumbers).toFixed(3);
    var middleOp = middle / jsonScatter.length;
    var middleEnd = Math.round(middleOp).toFixed(3)

    $("#legendBig").html( mayorNum.replace(".", ",") );
    $("#legendMd").html( middleEnd.replace(".", ",") );
    $("#legendSm").html( menorNum.replace(".", ",") );



