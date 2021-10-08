"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const login_1 = require("./login");
const perfil_1 = require("./perfil");
const filme_1 = require("./filme");
let login1 = new login_1.Login("gtomasini", "****");
let login2 = new login_1.Login("vbergamini", "****");
let perfil1 = new perfil_1.Perfil('Gabriela', "Tomasini", "gabriela_tomasini@hotmail.com", "Perfil Padrão");
let perfil2 = new perfil_1.Perfil("Vitor", "Bergamini", "vitorbergamini@hotmail.com", "Perfil Infantil");
const filme1 = new filme_1.Filme("Boyhood", "Drama", 2014, "Richard Linklater");
const filme2 = new filme_1.Filme("Bohemian Rhapsody", "Musical", 2018, "Dexter Fletcher");
const filme3 = new filme_1.Filme("Pets - A Vida Secreta dos Bichos", "Animação", 2016, "Eric Stonestreet");
const filme4 = new filme_1.Filme("Shrek", "Animação", 2001, "Mike Myers");
const filme5 = new filme_1.Filme("Django Livre", "Action", 2013, "Quentin Tarantino");
const filme6 = new filme_1.Filme("Matilda", "Fantasia", 1996, "Danny DeVito");
const filme7 = new filme_1.Filme("Harry Potter e o Prisioneiro de Azkaban", "Fantasia", 2004, "Alfonso Cuarón");
const filme8 = new filme_1.Filme("Marley e Eu", "Romance", 2008, "David Frankel");
const filme9 = new filme_1.Filme("Ilha do Medo", "Suspense", 2010, "Martin Scorsese");
const filme10 = new filme_1.Filme("Midsommar", "Horror/Drama", 2019, "Ari Aster");
let fav1 = `Os favoritos de ${perfil1.nome} são: ${filme2.nomeFilme}, ${filme7.nomeFilme}, ${filme4.nomeFilme}`;
let fav2 = `Os favoritos de ${perfil2.nome} são: ${filme4.nomeFilme}, ${filme3.nomeFilme}, ${filme6.nomeFilme}`;
let teclado = (0, prompt_sync_1.default)();
let option = 0;
while (option != 9) {
    console.log('+==================== Bem-vindo(a) à Typeflix ====================+');
    console.log('|                                                                 |');
    console.log('|   1. Perfil de Gabriela                                         |');
    console.log('|   2. Favoritos de Gabriela                                      |');
    console.log('|   3. Perfil de Vitor                                            |');
    console.log('|   4. Favoritos de Vitor                                         |');
    console.log('|   9. Sair                                                       |');
    console.log('|                                                                 |');
    console.log('+=================================================================+');
    option = +teclado('Escolha uma ação: ');
    switch (option) {
        case 1:
            console.log(login1, perfil1);
            break;
        case 2:
            console.log(fav1);
            break;
        case 3:
            console.log(login2, perfil2);
            break;
        case 4:
            console.log(fav2);
            break;
        default:
            break;
    }
}
