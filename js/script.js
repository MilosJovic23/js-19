//

//  Domaci

/*  Dodati dve nove klase "Plovilo" i "Letelica" -moraju naslediti "Vozilo"
*
*   U klasu vozilo dodati:
*       >Brzina
*       >Tezina
*
*   Klasa Plovilo
*       Tip: Jahta, Jedrenjak, Fregata
*
*   Klasa Letelica
*       Tip: Avion ili Helikopter
*       Bespilotna- true or false
*   
*/


let vozila = [];

class Vozilo {
	vrsta;
	boja;
	brzina;
	tezina;
	static VRSTE_VOZILA = ["automobil", "plovilo", "letelica"];

	constructor(vrsta, boja, brzina, tezina) {
		if (
			typeof vrsta === "undefined" ||
			typeof boja === "undefined" ||
			typeof brzina === "undefined" ||
			typeof tezina === "undefined"
		) {
			throw new Error("nise prosledili sve podatke");
		}
		if (!Vozilo.VRSTE_VOZILA.includes(vrsta)) {
			throw new Error(
				"Morate navesti vrstu vozila (automobil , plovilo ili letelica)"
			);
		}

		this.vrsta = vrsta;
		this.boja = boja;
		this.brzina = brzina;
		this.tezina = tezina;
	}

	ispis() {
		console.log(
			"boja auta je " +
				this.boja +
				" a vrsta je " +
				this.vrsta +
				" brizna je " +
				this.brzina +
				" ,tezina " +
				this.tezina
		);
	}
}

let vozilo = new Vozilo("plovilo", "plava", "300", "1400");
console.log(vozilo);

//

class Plovilo extends Vozilo {
	vrstaPlovila;
	static VRSTA = ["Jahta", "Jedrenjak", "Fregata"];
	constructor(vrstaPlovila,boja,tezina,brzina) {
        super("plovilo",boja,tezina,brzina);
		if (typeof vrstaPlovila === "undefined") {
			throw new Error("nisete prosledili sve podatke");
		}
		if (!Plovilo.VRSTA.includes(vrstaPlovila)) {
			throw new Error(
				"Vrsta plovila moze biti Jahta, Jedrenjak ili Fregata"
			);
		}
		this.vrstaPlovila = vrstaPlovila;
	}
}

let plovilo = new Plovilo("Jahta","plava","100km/h","4000kg");
console.log(plovilo);

//

class Letelica extends Vozilo {
	vrstaLetelice;
	bespilotna = Boolean;
	static VRSTA = ["Avion", "Helikopter"];
	constructor(vrstaLetelice, bespilotna,boja,brzina,tezina) {
        super("letelica",boja,brzina,tezina)
		if (typeof vrstaLetelice === "undefined") {
			throw new Error("nisete prosledili sve podatke");
		}
		if (!Letelica.VRSTA.includes(vrstaLetelice)) {
			throw new Error("Vrsta letelica moze biti Avion ili Helikopter");
		}
		if (typeof bespilotna === "undefined") {
			throw new Error("bespilotna letelica moze biti true or false");
		}
		this.vrstaLetelice = vrstaLetelice;
		this.bespilotna = bespilotna;
	}
}

let heli = new Letelica("Helikopter", false,"plava","200km/h","2000kg");
console.log(heli);

//

class Automobil extends Vozilo {
	marka;
	model;
	brojVrata;
	gorivo;
	static GORIVO = ["benzin", "dizel", "metan"];
	static BROJ_VRATA = [3, 5];
	
	constructor(marka, model, brojVrata, gorivo, vrsta, boja, brzina, tezina) {
		const markaAuta = ["Audi", "BMW", "Mercedes"];
		super("automobil", boja, brzina, tezina);
		const modelAudija = ["A4", "A6"];
		const modelBMW = ["M5", "M3", "X1"];
		const modelMercedesa = ["S-class", "SLS AMG", "G-class"];
		// console.log("test")
		if (!Automobil.BROJ_VRATA.includes(brojVrata)) {
			throw new Error("Broj vrata moze biti 3 ili 5");
		}
		if (!Automobil.GORIVO.includes(gorivo)) {
			throw new Error("gorivo moze biti benzin, dizel ili metan");
		}

		if (!markaAuta.includes(marka)) {
			throw new Error("marka auta moze biti Audi, BMW ili Mercedes");
		}
		if (markaAuta[0] === marka) {
			if (!modelAudija.includes(model)) {
				throw new Error("model auta moze biti A4 ili A6");
			}
		}
		if (markaAuta[1] === marka) {
			if (!modelBMW.includes(model)) {
				throw new Error("model auta moze biti M5 ili M3 ili X1");
			}
		}
		if (markaAuta[2] === marka) {
			if (!modelMercedesa.includes(model)) {
				throw new Error("model auta moze biti S-class ili SLS AMG ili G-class");
			}
		}
		this.brojVrata = brojVrata;
		this.gorivo = gorivo;
		this.model = model;
		this.marka = marka;
	}
	ispisAutomobil() {
		console.log(
			"marka auta je " +
				this.marka +
				" " +
				this.model +
				" , broj vrata " +
				this.brojVrata +
				" a gorivo " +
				this.gorivo
		);
	}
}

let auto = new Automobil(
	"Mercedes",
	"G-class",
	3,
	"dizel",
	"automobil",
	"plava",
	"300km/h",
	"1900kg"
);
console.log(auto);

const vrstaSelect = document.getElementById("vrsta");
Vozilo.VRSTE_VOZILA.forEach(function (vrsta) {
	let option = document.createElement("option");
	option.text = vrsta;
	option.value = vrsta;
	console.log(option);
	vrstaSelect.append(option);
});

const vrataSelect = document.getElementById("vrata");
Automobil.BROJ_VRATA.forEach(function (vrata) {
	let option = document.createElement("option");
	option.text = vrata;
	option.value = vrata;
	vrataSelect.append(option);
});

const gorivoSelect = document.getElementById("gorivo");
Automobil.GORIVO.forEach(function (gorivo) {
	let option = document.createElement("option");
	option.text = gorivo;
	option.value = gorivo;
	gorivoSelect.append(option);
});

document.getElementById("napraviVozilo").addEventListener("click", function () {
	let izabranaVrsta = document.getElementById("vrsta").value;
	let brojVrata = document.getElementById("vrata").value;
	let gorivo = document.getElementById("gorivo").value;
	vozila.push(new Vozilo("plava", izabranaVrsta));
	console.log(vozila);
});
