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
  komanduSkaicius: number | "" = "";
  komandos: string[][] = [];

  onInput(member: string) {
    this.naujasNarys = member;
  }

  pridetiNari(narys: any) {

    if (!this.naujasNarys) {
      this.klaidosPranesimas = "Neivestas vardas"
      return;

    }
    this.nariai.push(this.naujasNarys);
    this.naujasNarys = "";
    this.klaidosPranesimas = "";
  }
  onKomanduSkaiciusInput(value: string) {

    this.komanduSkaicius = Number(value);
  }

  generuotiKomandas() {

    if (!this.komanduSkaicius || this.komanduSkaicius <= 0) {
      this.klaidosPranesimas = "Blogas komandu skaicius"
      return;
    }
    if (this.nariai.length < this.komanduSkaicius) {
      this.klaidosPranesimas = "Nepakankamas nariu skaicius"
      return;
    }
    this.klaidosPranesimas = "";

    const nariai = [...this.nariai]
    for (let index = 0; index < this.komanduSkaicius; index++) {
      const randomIndex = Math.floor(Math.random() * nariai.length)
      const narys = nariai.splice(randomIndex, 1)[0];
      if (!narys) break;

      if (this.komandos[index]) {
        this.komandos[index].push(narys);
      }
      else {
        this.komandos[index] = [narys];
      }
    }
    this.nariai = [];
    this.komanduSkaicius = "";
    
  }
}
