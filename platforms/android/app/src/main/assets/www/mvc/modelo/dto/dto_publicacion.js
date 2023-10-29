class DtoPublicacion {
	constructor(setId = 0, setTipo = 0, setInfo = '') {
		this.id = setId;
		this.tipo = setTipo;
		this.info = setInfo;
	}	
	
	set setId(id) {
		this.id = id;
	}		
	
	set setTipo(tipo) {
		this.tipo = tipo;
	}	

	set setInfo(info) {
		this.info = info;
	}	

	
	get getId() {
		return this.id;
	}

	
	get getTipo() {
		return this.tipo;
	}

	get getInfo() {
		return this.info;
	}	
}	