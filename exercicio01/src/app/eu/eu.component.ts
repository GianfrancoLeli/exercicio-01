import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  nome: string = 'Gianfranco';
  idade: string = '34';
  pais: string = 'Venezuela';
  cidade: string = 'Rio de Janeiro';
  gosto: string = 'Filmes, Anime, Manga, Pizza, Malta e jogar Futebol';
  img: string = './assets/Eu.jpeg'




  constructor() { }

  ngOnInit(): void {
  }

}
