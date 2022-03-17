import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 600,
	height: 748
});

//nos avisa cuando se cambia de tamaño
window.addEventListener("resize",()=>{
	console.log("resized!");
	const scaleX = window.innerHeight / app.screen.width; //ancho de la pantalla 920 divido mi juego
	const scaleY = window.innerHeight / app.screen.height; //largo de la pantalla 362
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	//calcular margen
	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px"; 

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";



});
window.dispatchEvent(new Event ("resize"));

//- Agregar loader para precargar imagenes
Loader.shared.add({url: "taz.png", name:"mytaz"});
Loader.shared.add({url: "cap.png", name: "Yourcap"});

//Arrow Functions - Cuando termine de descargar las imagenes, ejecuta esta funcion
Loader.shared.onComplete.add(()=>{
 //-Agregar imagen
 const clampy: Sprite = Sprite.from("mytaz");

 console.log("Hola mundo!", clampy.width, clampy.height);

 clampy.anchor.set(0.1);

 

 const Yourcap: Sprite = Sprite.from("Yourcap");

 
 Yourcap.position.set(200,0.3)
 Yourcap.scale.set(0.5);

 const mytazWithMat: Container = new Container();

 mytazWithMat.addChild(clampy);
 mytazWithMat.addChild(Yourcap);

 mytazWithMat.scale.set(0.5);
 mytazWithMat.x = 200;
 mytazWithMat.y = 300;

 console.log(Yourcap.toGlobal(new Point()));
 console.log(Yourcap.parent.toGlobal(Yourcap.position));

 const aux = Yourcap.parent.toLocal(new Point(0,0));
 Yourcap.position.x= aux.x;
 Yourcap.position.y= aux.y;

 app.stage.addChild(mytazWithMat);
 

});

Loader.shared.load();

