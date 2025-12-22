export class SnUser {
    get username(): string {
        return this._username;
    }

    isAuthenticated() : boolean {
        return this._username != "";
    }

    private _username: string = "";

}