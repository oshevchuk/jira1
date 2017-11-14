/**
 * Created by megad on 12.11.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class HttpService{
    private ApiUrl;
    public static api:string;

    constructor(private http:Http){
        this.ApiUrl="http://jira/jira1/php/jiraapi.php";
    }

    public CreateIssueS(user, password, summary, description, type, projectName){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let data={
            user: user,
            pass: password,
            summary: summary,
            description: description,
            type: type
        };

        var body="user="+user+"&pass="+password+"&summary="+summary+"&description="+description+"&type="+type+"&projectName="+projectName;
        return this.http.post(this.ApiUrl, body, {headers: headers});
    }
}