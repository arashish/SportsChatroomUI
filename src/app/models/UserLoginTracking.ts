export class UserLoginTracking {

    private userId: string= ""
    private loginDate: string =""
    private logintime: string=""

    constructor (userId: string, loginDate: string, logintime:string){
        this.userId = userId;
        this.loginDate = loginDate;
        this.logintime = logintime;
    }


}