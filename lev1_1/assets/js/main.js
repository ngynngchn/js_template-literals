/*  Aufgabenstellung

Bitte erstelle Variablen mit deinen persönlichen Daten (Name, Nachname, Alter, Geburtsort, Größe, Gewicht, Hobbys, Computerspiele, Lieblingsessen, Lieblingssport, Lieblingsmodemarke, Lieblingsjahreszeit, Lieblingsurlaubsort). Bilde einen Satz mit Hilfe von: 

String Concatenation: "string text " + let + " string text"
Template Literals: `string text ${expression} string text`


Gib mit Hilfe von String Concatenation oder Template Literals einen Satz in der Konsole und in der HTML aus, der diese Variablen nutzt.


  */

const fname = "Ngoc Han";
const lname = "Nguyen";
const birthplace = "Berlin";
const height = "156cm";
const weight = "47kg";
const hobbies = "backen";
const games = "none";
const favFood = "Hotpot";
const favSport = "none";
const favBrand = "&otherStories";
const favSeason = "Spring";
const favVacDest = "Austria";

console.log(
	"Hi, ich heiße " + fname + lname + " und wurde in " + birthplace + " geboren."
);

document.write(
	`Ich bin ${height} groß und wiege momentan ${weight}. Ich mag es zu ${hobbies} und esse am liebsten ${favFood}. `
);
