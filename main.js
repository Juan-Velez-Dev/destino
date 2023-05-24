const buttonSend = document.querySelector('#button-send');
const answer = document.querySelector('#answer');

let cites = [
  'Hoy decido honrarme a mi mismo porque así honro al universo',
  'Me enfoco en los aprendizajes que me hacen fluir y crecer',
  'Mi felicidad depende de la calidad de mis pensamientos, por eso pienso bonito',
  'Soy un canal de luz y recibo la asistencia de los ángeles en todo momento',
  'Me maravillo ante mi propio cuermo, Amor ser quien soy!',
  'Estoy en paz con mi propio ser',
  'De todas las cosas que llevo puestas, mi actitud es la mas importante',
  'Me amo y disfruto mi compañia',
  'Acepto todo pensamiento positivo que inunda mi mente de felicidad, prosperidad, salud fisica, mental y espiritual'
]

let lasNumber = 0;

function rand () {
  let rnd = Math.floor(Math.random() * cites.length);
  if (rnd != lasNumber) {
    answer.innerText = `"${cites[rnd]}"`;;
    lasNumber = rnd;
  } else {
    rand();
  }
}

buttonSend.addEventListener('click', rand);;