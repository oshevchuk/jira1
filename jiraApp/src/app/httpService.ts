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

    public CreateIssue(){
        return this.http.post(this.ApiUrl, {});
    }
}