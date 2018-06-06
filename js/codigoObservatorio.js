//lectura del jquery
//jQuery(document).ready(function($){
//    console.log('ready');
//});

//JSON
//
//
//{} Object
//[] list
//"", '' String
//1,21.2 numero
//
//obj = {'lista':}
$(document).ready(function(){
    var i = 0;
    $.ajax({
        url: 'json/data.json',
        type: 'GET', 
        dataType: 'json',
        data:{},
        success: function(data, textStatus, xhr){
            console.log(data);
            console.log(data.name);
            $.each(data.data, function(index, docInves){
                var div = '<tr class="docenteInves">';
                div += "<td style='width: 3%;'>"+data.data[i].id+"</td>";
                div += "<th style='width: 10%;'><center>"+data.data[i].fecha+"</center></th>";
                div += "<td style='width: 27%;'>"+data.data[i].ubicacion+"</td>";
                div += "<td style='width: 27%;'>"+data.data[i].primerNombreVictima+" "+data.data[i].segundoNombreVictima+" "+data.data[i].primerApellidoVictima+" "+data.data[i].segundoApelidoVictima+"</td>";
                div += "<td>"+data.data[i].nacionalidadVictima+"</td>";
                div +=    "<td>";
                div +=        "<div class='container'>";
                div +=            "<center><button onclick=document.getElementById('caso"+data.data[i].id+"').style.display='block' style='cursor:wait;'>Ver más</button></center>";
                div +=                "<div class='modal' id=\"caso"+data.data[i].id+"\">";
                div +=                    "<div class='modal-content' id='action'>";
                div +=                          "<span class='button display-topright'><samp onclick=document.getElementById('caso"+data.data[i].id+"').style.display='none' class='icon-x' id=\"boton"+data.data[i].id+"\"></samp></span>";
                div +=                       "<div class='container' id='container'>";
                div +=                          "<center><h2 id='header"+data.data[i].id+"' style='line-height: 3;'> Caso #"+data.data[i].id+" <br>Victoma: "+data.data[i].primerNombreVictima+" "+data.data[i].segundoNombreVictima+" "+data.data[i].primerApellidoVictima+" "+data.data[i].segundoApelidoVictima+"</h2></center>";
                div +=                       "</div>";    
                div +=                       "<div id='info"+data.data[i].id+"' style='padding:2em;'></div>";
                div +=                    "</div>";
                div +=                "</div>";
                div +=        "</div>";
                div +=    "</td>";
                div +='</tr>';          
                console.log(div);
                $("#results").append(div); 
                //$("#header"+data.data[i].id).append("<img src='img/woman.png' alt='Logo de Mujer' style='position:absolute;margin-top:-3em;margin-left:-30em;width: 12%;'>");
                
                var divModal = "";
                divModal += "<div style='overflow: scroll; padding:2em;'>";
                divModal +=     "<span><Strong>Fecha: </Strong>"+data.data[i].fecha+"</span><br>";
                divModal +=     "<br><span><Strong>País: </Strong>"+data.data[i].pais+"</span><br><br>";
                divModal +=     "<span><Strong>Cuidad: </Strong>"+data.data[i].ciudad+"</span><br><br>";
                divModal +=     "<span><Strong>calles: </Strong>"+data.data[i].ubicacion+"</span><br><br>";
                divModal +=     "<span> <Strong>hora: </Strong>"+data.data[i].hora+"</span><br><br>";
                divModal +=     "<span> <Strong>Edad: </Strong>"+data.data[i].edad+"</span><br>";
                divModal +=    "_________________________________________________________________________";
                divModal +=     "<p><Strong>Nombres de la victima: </Strong>"+data.data[i].primerNombreVictima+" "+data.data[i].segundoNombreVictima+" "+data.data[i].primerApellidoVictima+" "+data.data[i].segundoApelidoVictima+"</p>";
                divModal +=     "<p><Strong>Nacionalidad de la victima: </Strong>"+data.data[i].nacionalidadVictima+"</p>";
                divModal +=    "__________________________________________________________________________";
                divModal +=     "<p><Strong>Nombres del agresor: </Strong>"+data.data[i].primerNombreAgresor+" "+data.data[i].segundoNombreAgresor+" "+data.data[i].primerApellidoAgresor+" "+data.data[i].segundoApelidoAgresor+"</p>";
                divModal +=     "<p><Strong>Nacionalidad del agresor: </Strong>"+data.data[i].nacionalidadAgresor+"</p>";
                divModal +=    "__________________________________________________________________________";
                divModal += "</div>";
                divModal += "</div>";
                $("#info"+data.data[i].id).append(divModal);
                
                i++;
                
                
                
               
                
            });//end each group
        },
        error: function(data) {
          alert('Error');
        }
    });//end ajax
});
