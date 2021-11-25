import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-app';

naujasNarys = "";
nariai: string[] = [];
klaidosPranesimas = "";
komanduSkaicius = 0;

onInput (member: string) {
  this.naujasNarys = member;
}

pridetiNari(narys:any) {

  if(!this.naujasNarys) {
    this.klaidosPranesimas = "Neivestas vardas"
    return;

  }
this.nariai.push(this.naujasNarys);
this.naujasNarys="";
this.klaidosPranesimas="";

}



}
