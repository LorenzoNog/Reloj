
const diaDeSemana = document.getElementById('dia');
const day = document.getElementById('fecha');
const month = document.getElementById('mes');
const year = document.getElementById('anio');
const hours = document.getElementById('horas');
const minutes = document.getElementById('minutos');
const AMPM = document.getElementById('amPm');
const seconds = document.getElementById('segundos');




function actualizarHora(){
  
  let fecha = new Date();
  let hora = fecha.getHours();
  let amPm;
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let diaSemana = fecha.getDay();
  let dia = fecha.getDate();
  let mes = fecha.getMonth();
  let anio = fecha.getFullYear();

  let semana = ['Domingo', 'Lunes', 'Mártes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  diaDeSemana.textContent = semana[diaSemana];
  day.textContent = dia;
  month.textContent = meses[mes];
  year.textContent = anio;
  hours.textContent = hora;
  minutes.textContent = minutos;
  seconds.textContent = segundos;
  
  if(hora>=12){
    AMPM.textContent = 'P.M.'
  }else{
    AMPM.textContent = 'A.M.'
  }

  if(minutos < 10){
    minutos.textContent = '0' + minutos;
  }
   
}

actualizarHora()
let intervalo = setInterval(actualizarHora,1000);
