/**
 * Created by megad on 12.11.2017.
 */
import {Component} from "@angular/core";
import {HttpService} from "../httpService";

declare var $:any;

@Component({
    selector: 'createIssue',
    templateUrl: './CreateIssue.component.html',
    styleUrls: ['./CreateIssue.component.css'],
    providers: [HttpService]
})

export class CreateIssue {
    public projectName:string = 'TS';
    public summary:string = 'test';
    public description:string = 'test';
    public issueType:string = 'test';
    public user:string = 'admin';
    public password:string = "admin";
    public resp="";

    constructor(private httpService:HttpService) {

    }

    public createIssue(){
        let self=this;
        this.httpService.CreateIssueS(this.user, this.password, this.summary, this.description, this.issueType, this.projectName)
            .subscribe(data => {
                console.log(data);
                self.resp=data["_body"].toString();
            })
    }

}