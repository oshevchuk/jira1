/**
 * Created by megad on 12.11.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class HttpService{
    private ApiUrl;

    constructor(private http:Http){
        this.ApiUrl="http://localhost:8080/rest/api/2/issue/";
    }

    public CreateIssue(userpwd:string, summary:string, description:string, type:string){
        let headers=new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic '+userpwd);

        let options = new RequestOptions({headers: headers});

        let data={
            project: { key : "test" },
            summary: summary,
            description: description,
            issuetype: {
                name: type
            }
        };

        let j_data={
            fields: data
        };


        // console.log(JSON.stringify(j_data));

        return this.http.post(this.ApiUrl, JSON.stringify(j_data), options);
    }
}