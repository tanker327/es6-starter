console.log("hello world");


class User{
	
	constructor(name){
		this.name = name;
	}
	
	showName(){
		console.log(this.name);
	}
}

let user = new User("eric");

user.showName();