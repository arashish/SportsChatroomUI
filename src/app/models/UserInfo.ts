export class UserInfo {

    private id: string;
    private username: string;
    private sportName: string;
    private createdDate: string;

    constructor (id: string, username: string, sportName: string, createdDate: string) {
        this.id = id;
        this.username = username;
        this.sportName = sportName;
        this.createdDate = createdDate;
    }
}