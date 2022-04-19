export class Bulletin {
    id: string;
    sportName: string;
    message: string;

    constructor(id: string, sportName: string, message: string){
        this.id = id;
        this.sportName = sportName;
        this.message = message;
    }

}