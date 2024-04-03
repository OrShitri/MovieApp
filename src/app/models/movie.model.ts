class Movie {

    id:number = 1;
    name:string = "";
    year:number = 0;
    description:string = "";
    image:string = "";
    watched:boolean = false;

    constructor(id:number = 1,name:string = "", year:number = 0, description:string = "", image:string = "", watched:boolean = false){
        this.id = id;
        this.name = name;
        this.year = year;
        this.description = description;
        this.image = image;
        this.watched = watched;
    }
}

export default Movie;