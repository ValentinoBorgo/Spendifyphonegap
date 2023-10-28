class DtoPublicacion {
	constructor(setId = 0, setNombre = '', setMail = '', setFecha = '', setTelefono = '',
				setTipo = 0, setAnimal = 0, setImagen = '', setInfo = '') {
		this.id = setId;
		this.nombre = setNombre;
		this.mail = setMail;
		this.fecha = setFecha;
		this.telefono = setTelefono;
		this.tipo = setTipo;
		this.animal = setAnimal;
		this.imagen = setImagen;
		this.info = setInfo;
	}	
	
	set setId(id) {
		this.id = id;
	}	
	
	set setNombre(nombre) {
		this.nombre = nombre;
	}	

	set setMail(mail) {
		this.mail = mail;
	}	
	
	set setFecha(fecha) {
		this.fecha = fecha;
	}	

	set setTelefono(telefono) {
		this.telefono = telefono;
	}	
	
	set setTipo(tipo) {
		this.tipo = tipo;
	}	

	set setAnimal(animal) {
		this.animal = animal;
	}	
	
	set setImagen(imagen) {
		this.imagen = imagen;
	}	

	set setInfo(info) {
		this.info = info;
	}	

	
	get getId() {
		return this.id;
	}

	get getNombre() {
		return this.nombre;
	}

	get getMail() {
		return this.mail;
	}
	
	get getFecha() {
		return this.fecha;
	}

	get getTelefono() {
		return this.telefono;
	}

	get getTipo() {
		return this.tipo;
	}

	get getAnimal() {
		return this.animal;
	}
	
	get getImagen() {
		return this.imagen;
	}

	get getInfo() {
		return this.info;
	}	
}	