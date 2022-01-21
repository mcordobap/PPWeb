//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el primer punto.
function unfade(element) {
    var op = 0.1;  // Opacidad inicial
    element.style.display = 'block'; //Muesta el elemento como bloque
    var timer = setInterval(function () { //Tiempo de duración de la función
        if (op >= 0.65){ //Opacidad final
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")"; 
        op += op * 0.1;//Suma incremental
    }, 10);
}
function fadein(element) {
    var op = 0.1;  // Opacidad inicial
    element.style.display = 'block'; //Muesta el elemento como bloque
    var timer = setInterval(function () { //Tiempo de duración de la función
        if (op >= 1){ //Opacidad final
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")"; 
        op += op * 0.1;//Suma incremental
    }, 10);
}
function hide(){
	var element =document.getElementById('Information');//Especifica el elemento a ocultar en una variable
	var op=window.getComputedStyle(element).getPropertyValue("opacity");//Lee la opacidad del objeto
	var Button = document.getElementById('Button');//Especifica el botón
	if (op > 0){//Establece la condición para ocultar si la opacidad es mayor a cero y mostrar si esta es igual a cero
		op=0;
		Button.innerHTML = 'Mostrar'; //Cambia el texto del botón
	}else {
		op=0.65;
		Button.innerHTML = 'Ocultar';
	}
	element.style.opacity=op;//Dependiendo del caso le asigna a Information (información del lugar del mapa) la opacidad requerida.
}
function Punto1() {
	/*Se crean variables para facilitar la lectura y disminuir la cantidad de caracteres*/
	var fondo=document.getElementById("ContainerInfo");
	var contenido=document.getElementById("Information");
	contenido.scrollIntoView(); /*Se mueve la pantalla hacia el contenido*/
	fondo.style.background="0 cover no-repeat"; /*Se coloca para realizar el cambio de imagen y dimensionarla*/
	fondo.style.backgroundImage="url('Img/imgMap/hofburg-palace.jpeg')"; /*Se establece la imagen de fondo, fuente en referencias*/
	if (window.screen.width>600){
		fondo.style.height = "70%"; /*Se establece una altura relativa para el contenedor de imagen para dispositivos como tablet, portátil o escritorio*/	
	}else{
		fondo.style.height = "5%"; /*Se establece una altura relativa para el contenedor de imagen si el dispositivo es móvil*/
	}
	fondo.style.transitionDelay="1s"; /*Se genera un delay o retraso en la animación*/
	contenido.style.height = "70%"; /*Se establece una altura relativa para el contenedor del texto*/
	contenido.style.backgroundColor="#000000"; /*Da el color al contenedor de texto*/
	contenido.style.opacity = "0"; /*Da una opacidad inicial para observar la animación*/
	contenido.style.color="white"; /*Cambia el color de la letra para mayor contraste*/
	contenido.innerHTML = 'El <b> Palacio Imperial de Hofburg </b>, fue durante siglos la sede de los <a href="pg_four.html#Habsburgo">Habsburgo</a>, gobernantes de Austria hasta el final de la Primera Guerra Mundial. Gran parte de la historia europea se escribió aquí, en particular por la emperatriz María y, durante un tiempo, el Emperador de Alemania. Los principales edificios del complejo del palacio reflejan más de 700 años de historia <a href="pg_three.html#Arq">arquitectónica</a>; casi todos los gobernantes austríacos desde 1275 ordenaron adiciones o modificaciones al palacio.Como resultado, el Hofburg muestra muchos estilos arquitectónicos diferentes, desde el gótico al renacimiento, del barroco al rococó, y una pizca de clasicismo en buena medida.Junto con sus numerosas plazas y jardines, el Palacio Imperial de Hofburg ocupa un área de casi 24 hectáreas y es como una «ciudad dentro de una ciudad», con 18 grupos de edificios, 19 patios y 2600 habitaciones.'; /*Se cambia el contenido del texto*/
	contenido.style.position = "relative"; /*Se cambia el tipo de posición del contenedor para moverlo*/ 
	contenido.style.left = "0%"; /*Se mueve contenedor a la derecha para observar la imagen*/
	setTimeout(() => {unfade(contenido)}, 2000); /*Se utiliza la función unfade para darle opacidad al contenedor y se le establece un tiempo de espera para observar la imagen al comienzo completamente*/	
}

//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el segundo punto.
function Punto2() {
	/*Se crean variables para facilitar la lectura y disminuir la cantidad de caracteres*/
	var fondo=document.getElementById("ContainerInfo");
	var contenido=document.getElementById("Information");
	contenido.scrollIntoView(); /*Se mueve la pantalla hacia el contenido*/
	fondo.style.background="0 cover no-repeat";
	fondo.style.backgroundImage="url('Img/imgMap/CityHall.jpg')"; /*Se establece la imagen de fondo, fuente en referencias*/
	if (window.screen.width>600){
		fondo.style.height = "70%"; /*Se establece una altura relativa para el contenedor de imagen para dispositivos como tablet, portátil o escritorio*/	
	}else{
		fondo.style.height = "5%"; /*Se establece una altura relativa para el contenedor de imagen si el dispositivo es móvil*/
	}
	fondo.style.transitionDelay="1s"; /*Se genera un delay o retraso en la animación*/
	contenido.style.height = "70%"; /*Se establece una altura relativa para el contenedor del texto*/
	contenido.style.backgroundColor="#000000"; /*Da el color al contenedor de texto*/
	contenido.style.opacity = "0"; /*Da una opacidad inicial para observar la animación*/
	contenido.style.color="white"; /*Cambia el color de la letra para mayor contraste*/
	contenido.innerHTML = 'El <b>Ayuntamiento de Viena </b>fue construido entre 1872 y 1883 y es una construcción magnífica: se utilizaron unos 30 millones de ladrillos y más de 40.000 metros cúbicos de piedra natural. El patio del ayuntamiento, portificado con arcadas, es uno de los patios interiores más grandes de Europa con 2.804 m². La sala de fiestas tiene una longitud de 71 metros, un ancho de 20 metros y una altura de 18,5 metros. Si las autoridades encargadas de la protección contra incendios lo hubieran permitido, habrían podido bailar vals 1.500 parejas al mismo tiempo.<br>La altura de la torre es de 97,9 m, sobre la que se asienta el hombre de hierro del ayuntamiento, de 3,40 m de alto con el estandarte de 6 m, que se ha convertido en uno de los símbolos de Viena. Talla de pie: 63. El Ayuntamiento de Viena es la sede de la alcaldía y el centro de conferencias del senado de la ciudad/gobierno federal y consejo municipal/parlamento federal.'; /*Se cambia el contenido del texto*/
	contenido.style.position = "relative"; /*Se cambia el tipo de posición del contenedor para moverlo*/ 
	contenido.style.left = "55%"; /*Se mueve contenedor a la derecha para observar la imagen*/
	setTimeout(() => {unfade(contenido)}, 2000); /*Se utiliza la función unfade para darle opacidad al contenedor y se le establece un tiempo de espera para observar la imagen al comienzo completamente*/	
}

//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el tercer punto.
function Punto3() {
	/*Se crean variables para facilitar la lectura y disminuir la cantidad de caracteres*/
	var fondo=document.getElementById("ContainerInfo");
	var contenido=document.getElementById("Information");
	contenido.scrollIntoView(); /*Se mueve la pantalla hacia el contenido*/
	fondo.style.background="0 cover no-repeat";
	fondo.style.backgroundImage="url('Img/imgMap/Musikverein.jpg')"; /*Se establece la imagen de fondo, fuente en referencias*/
	if (window.screen.width>600){
		fondo.style.height = "70%"; /*Se establece una altura relativa para el contenedor de imagen para dispositivos como tablet, portátil o escritorio*/	
	}else{
		fondo.style.height = "5%"; /*Se establece una altura relativa para el contenedor de imagen si el dispositivo es móvil*/
	}
	fondo.style.transitionDelay="1s"; /*Se genera un delay o retraso en la animación*/
	contenido.style.height = "70%"; /*Se establece una altura relativa para el contenedor del texto*/
	contenido.style.backgroundColor="#000000"; /*Da el color al contenedor de texto*/
	contenido.style.opacity = "0"; /*Da una opacidad inicial para observar la animación*/
	contenido.style.color="white"; /*Cambia el color de la letra para mayor contraste*/
	contenido.innerHTML = 'La Gran Sala del <b>Musikverein</b>, también conocida como la Sala Dorada, es famosa por su suntuoso contenido. Apolo y las musas son el objeto de todas las miradas, y las columnas han recibido la forma de mujeres de la Antigüedad. Su diseño es incomparable, además de la acústica de la sala. La sensación que el sonido transmite es única en todo el mundo. Todos los años, en la Gran Sala del Musikverein tiene lugar el Concierto de Año Nuevo de la Orquesta Filarmónica de Viena, que es retransmitido para un público de millones a nivel internacional. En cualquier caso, durante los restantes 364 días del año, el Musikverein sigue ofreciendo conciertos de nivel superior. Sin embargo, hace ya mucho tiempo que dejó de ser solo un templo del Clasicismo.'; /*Se cambia el contenido del texto*/
	contenido.style.position = "relative"; /*Se cambia el tipo de posición del contenedor para moverlo*/ 
	contenido.style.left = "1%"; /*Se mueve contenedor a la derecha para observar la imagen*/
	setTimeout(() => {unfade(contenido)}, 2000); /*Se utiliza la función unfade para darle opacidad al contenedor y se le establece un tiempo de espera para observar la imagen al comienzo completamente*/
}

//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el cuarto punto.
function Punto4() {
	/*Se crean variables para facilitar la lectura y disminuir la cantidad de caracteres*/
	var fondo=document.getElementById("ContainerInfo");
	var contenido=document.getElementById("Information");
	contenido.scrollIntoView(); /*Se mueve la pantalla hacia el contenido*/
	fondo.style.background="0 cover no-repeat";
	fondo.style.backgroundImage="url('Img/imgMap/IglesiaDeSanCarlosBorromeo.jpg')"; /*Se establece la imagen de fondo, fuente en referencias*/
	if (window.screen.width>600){
		fondo.style.height = "70%"; /*Se establece una altura relativa para el contenedor de imagen para dispositivos como tablet, portátil o escritorio*/	
	}else{
		fondo.style.height = "5%"; /*Se establece una altura relativa para el contenedor de imagen si el dispositivo es móvil*/
	}
	fondo.style.transitionDelay="1s"; /*Se genera un delay o retraso en la animación*/
	contenido.style.height = "70%"; /*Se establece una altura relativa para el contenedor del texto*/
	contenido.style.backgroundColor="#000000"; /*Da el color al contenedor de texto*/
	contenido.style.opacity = "0"; /*Da una opacidad inicial para observar la animación*/
	contenido.style.color="white"; /*Cambia el color de la letra para mayor contraste*/
	contenido.innerHTML = 'La <b>Iglesia de san Carlos Borromeo</b> (en alemán, Karlskirche) es una iglesia barroca de Viena, constituye una obra maestra del eclecticismo barroco, en el que se combinan diferentes estilos: la fachada central representa un pórtico griego, las columnas a su lado son de inspiración barroca y sobre la entrada domina una gigantesca cúpula. Los dos pabellones laterales muestran influencias del barroco romano y decoración oriental. 1 El edificio tiene una altura de 80 metros por unos 60 de ancho y constituye el segundo templo más amplio de la capital después de la catedral de San Esteban.<br>En el exterior destaca el frontis en el que se incluyen las dos columnas citadas, con relieves que muestran periodos de la vida de San Carlos Borromeo. Están inspiradas en la columna Trajana de Roma y su decoración espiral presenta escenas de la vida de San Carlos Borromeo. El tema que se representa en la columna izquierda es la constancia y el valor en la de la derecha.'; /*Se cambia el contenido del texto*/
	contenido.style.position = "relative"; /*Se cambia el tipo de posición del contenedor para moverlo*/ 
	contenido.style.left = "0%"; /*Se mueve contenedor a la derecha para observar la imagen*/
	setTimeout(() => {unfade(contenido)}, 2000); /*Se utiliza la función unfade para darle opacidad al contenedor y se le establece un tiempo de espera para observar la imagen al comienzo completamente*/
}
function Punto5() {
	/*Se crean variables para facilitar la lectura y disminuir la cantidad de caracteres*/
	var fondo=document.getElementById("ContainerInfo");
	var contenido=document.getElementById("Information");
	contenido.scrollIntoView(); /*Se mueve la pantalla hacia el contenido*/
	fondo.style.background="0 cover no-repeat";
	fondo.style.backgroundImage="url('Img/imgMap/Museumsquartier_Kunsthalle_Wien.jpg')"; /*Se establece la imagen de fondo, fuente en referencias*/
	if (window.screen.width>600){
		fondo.style.height = "70%"; /*Se establece una altura relativa para el contenedor de imagen para dispositivos como tablet, portátil o escritorio*/	
	}else{
		fondo.style.height = "5%"; /*Se establece una altura relativa para el contenedor de imagen si el dispositivo es móvil*/
	}
	fondo.style.transitionDelay="1s"; /*Se genera un delay o retraso en la animación*/
	contenido.style.height = "70%"; /*Se establece una altura relativa para el contenedor del texto*/
	contenido.style.backgroundColor="#000000"; /*Da el color al contenedor de texto*/
	contenido.style.opacity = "0"; /*Da una opacidad inicial para observar la animación*/
	contenido.style.color="white"; /*Cambia el color de la letra para mayor contraste*/
	contenido.innerHTML = 'La <b>Kunsthalle Wien</b> exhibe piezas de arte contemporáneo de la más alta categoría en el MuseumsQuartier (Barrio de los Museos) y en la Karlsplatz. Para aquellos turistas interesados en el <a href="pg_three.html#Arts">arte</a>, la Kunsthalle Wien ha de ser de paso obligado en su programa.<br>La Kunsthalle Wien en el MuseumsQuartier, cerca del Hofburg, girará en torno a presentaciones de arte internacional, contemporáneo y moderno. Este es un espacio para toda la riqueza del arte internacional del presente y otras temáticas contemporáneas relacionadas. Para ello, desarrolla formatos innovadores de exposición y comunicación. El programa divulgativo ofrece, a distintos niveles, posibilidades de acceso a la presentación, posibilita una entrelazamiento entre la praxis artística y la reflexión teórica y fomenta la discusión de cuestiones actuales relacionadas con la vida cotidiana.'; /*Se cambia el contenido del texto*/
	contenido.style.position = "relative"; /*Se cambia el tipo de posición del contenedor para moverlo*/ 
	contenido.style.left = "0%"; /*Se mueve contenedor a la derecha para observar la imagen*/
	setTimeout(() => {unfade(contenido)}, 2000); /*Se utiliza la función unfade para darle opacidad al contenedor y se le establece un tiempo de espera para observar la imagen al comienzo completamente*/
}
function Punto6() {
	/*Se crean variables para facilitar la lectura y disminuir la cantidad de caracteres*/
	var fondo=document.getElementById("ContainerInfo");
	var contenido=document.getElementById("Information");
	contenido.scrollIntoView(); /*Se mueve la pantalla hacia el contenido*/
	fondo.style.background="0 cover no-repeat";
	fondo.style.backgroundImage="url('Img/imgMap/SoundOfVienna.jpg')"; /*Se establece la imagen de fondo, fuente en referencias*/
	if (window.screen.width>600){
		fondo.style.height = "70%"; /*Se establece una altura relativa para el contenedor de imagen para dispositivos como tablet, portátil o escritorio*/	
	}else{
		fondo.style.height = "5%"; /*Se establece una altura relativa para el contenedor de imagen si el dispositivo es móvil*/
	}
	fondo.style.transitionDelay="1s"; /*Se genera un delay o retraso en la animación*/
	contenido.style.height = "70%"; /*Se establece una altura relativa para el contenedor del texto*/
	contenido.style.backgroundColor="#000000"; /*Da el color al contenedor de texto*/
	contenido.style.opacity = "0"; /*Da una opacidad inicial para observar la animación*/
	contenido.style.color="white"; /*Cambia el color de la letra para mayor contraste*/
	contenido.innerHTML = 'El <b>Kursalon</b> acoge conciertos diarios de Strauss & Mozart realizados por la Orquesta Alt-Wien acompañada por destacados cantantes de ópera y bailarines de ballet. Puedes sentir el mismo ambiente animado y restos del amado lugar del vals vienés y más, allá por 1868.	En 1857, el emperador Francisco José I había ordenado que las antiguas fortificaciones fueran demolidas y que se construyera el Ring Boulevard como parte de la necesaria expansión de la ciudad. El City Park adyacente se diseñó al estilo de un parque paisajístico inglés.	El Kursalon estaba destinado a aumentar el valor recreativo del City Park, que es, hasta hoy, uno de los parques urbanos vieneses más grandes, ofreciendo aguas curativas hasta 1867. Como este concepto no fue aceptado, el primer concierto de Johann Strauss (hijo ) tuvo lugar.	La población vienesa anhelaba un recinto que sirviera como espacio para disfrutar de actividades recreativas. Durante el siglo XIX ha cobrado vida una nueva disposición de “Wasserglacis”: el Kursalon. Poco después de su inauguración, el magnífico edificio se llenó de animados bailes y conciertos. En 1868, los conciertos de paseo de los hermanos Strauss transformaron rápidamente el Kursalon en el lugar de referencia de la sociedad vienesa.'; /*Se cambia el contenido del texto*/
	contenido.style.position = "relative"; /*Se cambia el tipo de posición del contenedor para moverlo*/ 
	contenido.style.left = "0%"; /*Se mueve contenedor a la derecha para observar la imagen*/
	setTimeout(() => {unfade(contenido)}, 2000); /*Se utiliza la función unfade para darle opacidad al contenedor y se le establece un tiempo de espera para observar la imagen al comienzo completamente*/
}
function Punto7() {
	/*Se crean variables para facilitar la lectura y disminuir la cantidad de caracteres*/
	var fondo=document.getElementById("ContainerInfo");
	var contenido=document.getElementById("Information");
	contenido.scrollIntoView(); /*Se mueve la pantalla hacia el contenido*/
	fondo.style.background="0 cover no-repeat";
	fondo.style.backgroundImage="url('Img/imgMap/Voltiva.jpg')"; /*Se establece la imagen de fondo, fuente en referencias*/
	if (window.screen.width>600){
		fondo.style.height = "70%"; /*Se establece una altura relativa para el contenedor de imagen para dispositivos como tablet, portátil o escritorio*/	
	}else{
		fondo.style.height = "5%"; /*Se establece una altura relativa para el contenedor de imagen si el dispositivo es móvil*/
	}
	fondo.style.transitionDelay="1s"; /*Se genera un delay o retraso en la animación*/
	contenido.style.height = "70%"; /*Se establece una altura relativa para el contenedor del texto*/
	contenido.style.backgroundColor="#000000"; /*Da el color al contenedor de texto*/
	contenido.style.opacity = "0"; /*Da una opacidad inicial para observar la animación*/
	contenido.style.color="white"; /*Cambia el color de la letra para mayor contraste*/
	contenido.innerHTML = 'La <b>majestuosa Iglesia Votiva (Votiv Kirche)</b> es una de las construcciones sacras de estilo neogótico más importantes del mundo. Una de sus principales características exteriores son sus dos torres gemelas de 99 metros en forma de aguja. En 1853, el emperador Francisco José fue atacado por un hombre que intentó asesinarlo con un estilete. Tras el frustrado intento de asesinato, se abrió una colecta para construir un templo en el lugar en el que ocurrió el atentado. Las obras comenzaron en 1853 y fue inaugurada en 1879 con motivo de las bodas de plata de la pareja real. <br> Como se puede advertir por su apariencia exterior, la Iglesia Votiva tiene un interior formado por altos techos que le aportan un aspecto estilizado y elegante. Se trata de un templo muy claro y lleno de luz proyectada por sus enormes vidrieras.	En el interior del templo se conserva el sarcófago renacentista de Nikla Salm, comandante al mando de las tropas austriacas durante el asedio turco de 1529.'; /*Se cambia el contenido del texto*/
	contenido.style.position = "relative"; /*Se cambia el tipo de posición del contenedor para moverlo*/ 
	contenido.style.left = "0%"; /*Se mueve contenedor a la derecha para observar la imagen*/
	setTimeout(() => {unfade(contenido)}, 2000); /*Se utiliza la función unfade para darle opacidad al contenedor y se le establece un tiempo de espera para observar la imagen al comienzo completamente*/
}
function Punto8() {
	/*Se crean variables para facilitar la lectura y disminuir la cantidad de caracteres*/
	var fondo=document.getElementById("ContainerInfo");
	var contenido=document.getElementById("Information");
	contenido.scrollIntoView(); /*Se mueve la pantalla hacia el contenido*/
	fondo.style.background="0 cover no-repeat";
	fondo.style.backgroundImage="url('Img/imgMap/Maria am Gestade.jpg')"; /*Se establece la imagen de fondo, fuente en referencias*/
	if (window.screen.width>600){
		fondo.style.height = "70%"; /*Se establece una altura relativa para el contenedor de imagen para dispositivos como tablet, portátil o escritorio*/	
	}else{
		fondo.style.height = "5%"; /*Se establece una altura relativa para el contenedor de imagen si el dispositivo es móvil*/
	}
	fondo.style.transitionDelay="1s"; /*Se genera un delay o retraso en la animación*/
	contenido.style.height = "70%"; /*Se establece una altura relativa para el contenedor del texto*/
	contenido.style.backgroundColor="#000000"; /*Da el color al contenedor de texto*/
	contenido.style.opacity = "0"; /*Da una opacidad inicial para observar la animación*/
	contenido.style.color="white"; /*Cambia el color de la letra para mayor contraste*/
	contenido.innerHTML = 'Se trata de uno de los monumentos más antiguos de Viena. <b>Maria am Gestade</b> es una iglesia gótica decorada a base de inmensas vidrieras en un coro de 51 m. de altura. Se menciona su existencia desde 1158, aunque el edificio actual data del siglo XIV, siendo restaurada en el siglo XIX. Cuenta con una historia muy variada y fue utilizada por las tropas de Napoleón como arsenal, en 1809. En el interior, las naves están decoradas con altares góticos y estatuas medievales barrocas modernas y se completa con una grandiosa bóveda. El coro tiene dos paneles de finales del gótico, hacia el 1460, mostrando la Crucifixión, la Anunciación y la Coronación de la Virgen. Tras el altar mayor, las vidrieras medievales conservan muchos fragmentos originales. En el lado septentrional del coro hay una capilla con un hermoso altar policromado de piedra del año 1520. La fachada destaca por su tracería gótica rematada con una aguja de filigrana.'; /*Se cambia el contenido del texto*/
	contenido.style.position = "relative"; /*Se cambia el tipo de posición del contenedor para moverlo*/ 
	contenido.style.left = "0%"; /*Se mueve contenedor a la derecha para observar la imagen*/
	setTimeout(() => {unfade(contenido)}, 2000); /*Se utiliza la función unfade para darle opacidad al contenedor y se le establece un tiempo de espera para observar la imagen al comienzo completamente*/
}
function Punto9() {
	/*Se crean variables para facilitar la lectura y disminuir la cantidad de caracteres*/
	var fondo=document.getElementById("ContainerInfo");
	var contenido=document.getElementById("Information");
	contenido.scrollIntoView(); /*Se mueve la pantalla hacia el contenido*/
	fondo.style.background="0 cover no-repeat";
	fondo.style.backgroundImage="url('Img/imgMap/Museo de Artes Aplicadas.jpg')"; /*Se establece la imagen de fondo, fuente en referencias*/
	if (window.screen.width>600){
		fondo.style.height = "70%"; /*Se establece una altura relativa para el contenedor de imagen para dispositivos como tablet, portátil o escritorio*/	
	}else{
		fondo.style.height = "5%"; /*Se establece una altura relativa para el contenedor de imagen si el dispositivo es móvil*/
	}
	fondo.style.transitionDelay="1s"; /*Se genera un delay o retraso en la animación*/
	contenido.style.height = "70%"; /*Se establece una altura relativa para el contenedor del texto*/
	contenido.style.backgroundColor="#000000"; /*Da el color al contenedor de texto*/
	contenido.style.opacity = "0"; /*Da una opacidad inicial para observar la animación*/
	contenido.style.color="white"; /*Cambia el color de la letra para mayor contraste*/
	contenido.innerHTML = 'En el <b>MAK</b> dan prioridad al diseño. El museo exhibe muebles, objetos de cristal y porcelana, plata y textiles desde el medievo hasta hoy. Artesanía valiosa de Wiener Werkstätte, muebles de madera alabeada de Thonet y piezas especiales de estilo Jugenstil como el bosquejo con hojas doradas realizado por Gustav Klimt para el fresco en el palacio Stoclet en Bruselas.<br>Las sillas de madera alabeada de Thonet, que aún utilizan los cafés vieneses hoy en día, y sillones tapizados que abarcan un periodo desde la época medieval hasta el presente invitan a sentarse. Sofás estilo Biedermeier en rosa, verde, amarillo o verde sorprenden por su colorido, pues el Biedermeier es conocido como la cuna del diseño por sus formas sencillas y claras.'; /*Se cambia el contenido del texto*/
	contenido.style.position = "relative"; /*Se cambia el tipo de posición del contenedor para moverlo*/ 
	contenido.style.left = "0%"; /*Se mueve contenedor a la derecha para observar la imagen*/
	setTimeout(() => {unfade(contenido)}, 2000); /*Se utiliza la función unfade para darle opacidad al contenedor y se le establece un tiempo de espera para observar la imagen al comienzo completamente*/
}
function Punto10() {
	/*Se crean variables para facilitar la lectura y disminuir la cantidad de caracteres*/
	var fondo=document.getElementById("ContainerInfo");
	var contenido=document.getElementById("Information");
	contenido.scrollIntoView(); /*Se mueve la pantalla hacia el contenido*/
	fondo.style.background="0 cover no-repeat";
	fondo.style.backgroundImage="url('Img/imgMap/Restaurante.webp')"; /*Se establece la imagen de fondo, fuente en referencias*/
	if (window.screen.width>600){
		fondo.style.height = "70%"; /*Se establece una altura relativa para el contenedor de imagen para dispositivos como tablet, portátil o escritorio*/	
	}else{
		fondo.style.height = "5%"; /*Se establece una altura relativa para el contenedor de imagen si el dispositivo es móvil*/
	}
	fondo.style.transitionDelay="1s"; /*Se genera un delay o retraso en la animación*/
	contenido.style.height = "70%"; /*Se establece una altura relativa para el contenedor del texto*/
	contenido.style.backgroundColor="#000000"; /*Da el color al contenedor de texto*/
	contenido.style.opacity = "0"; /*Da una opacidad inicial para observar la animación*/
	contenido.style.color="white"; /*Cambia el color de la letra para mayor contraste*/
	contenido.innerHTML = 'En cuanto a <b>restaurantes</b>, si hay algo que haga de Viena un lugar tan especial, desde luego es su cocina. Su diversidad culinaria no tiene parangón, ya que incorpora las influencias de los antiguos países unidos bajo la corona de los Habsburgo. Con platos tradicionales que van desde el escalope a la vienesa hasta el gulasch. Y con una verdadera, llamémosla así, «gastronomía de batalla». O dicho de otra manera: para comer bien en Viena no hace falta ir a un restaurante de lujo. Los sobrios mesones también valen. No en vano, cada restaurante vienés tiene un alma bondadosa, un camarero o camarera, un patrón o una jefa de cocina de buen corazón que se ocupan de que no falte una hospitalidad especial y convierte los restaurantes en lugares de encuentro perfectos, tanto para los vieneses como para turistas y viajeros.'; /*Se cambia el contenido del texto*/
	contenido.style.position = "relative"; /*Se cambia el tipo de posición del contenedor para moverlo*/ 
	contenido.style.left = "0%"; /*Se mueve contenedor a la derecha para observar la imagen*/
	setTimeout(() => {unfade(contenido)}, 2000); /*Se utiliza la función unfade para darle opacidad al contenedor y se le establece un tiempo de espera para observar la imagen al comienzo completamente*/
}