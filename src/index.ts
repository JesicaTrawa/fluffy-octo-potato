import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

//- Agregar loader para precargar imagenes
Loader.shared.add({url: "turtle.png", name:"myturtle"});
Loader.shared.add({url: "clampy.png", name: "clampy"});

//Arrow Functions - Cuando termine de descargar las imagenes, ejecuta esta funcion
Loader.shared.onComplete.add(()=>{
 //-Agregar imagen
 const clampy: Sprite = Sprite.from("myturtle");

 console.log("Hola mundo!", clampy.width, clampy.height);

 clampy.anchor.set(0.1);

 clampy.x = 0;
 clampy.y = 0.5;

 app.stage.addChild(clampy);

});

Loader.shared.load();

