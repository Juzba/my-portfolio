import img1 from "../../../images/cards-images/Sudoku.jpg";
import img2 from "../../../images/cards-images/firebase.jpg";
import img3 from "../../../images/cards-images/Advenced-slider.jpg";
import img4 from "../../../images/cards-images/faq.png";
import img5 from "../../../images/cards-images/snake.jpg";
import img6 from "../../../images/cards-images/iss.jpg";
import img7 from "../../../images/cards-images/email-form.jpg";
import img8 from "../../../images/cards-images/netflix.jpg";

interface type {
	id: number;
	name: string;
	image: string;
	created: string[];
	description: string;
	description2: string;
	description3: string;
	url1: string;
	url2: string;
}

const ProjectData: type[] = [
	{
		id: 0,
		name: "Sudoku solver",
		image: img1,
		created: ["C#", "Web Api", "TS", "React"],
		description:
			"Vytvářím inovativní aplikaci zaměřenou na řešení sudoku. Po zadání hodnot a stisknutí tlačítka „Solve“ aplikace vytvoří trojrozměrné pole, které se odešle na server pro zpracování pomocí webového API v C#. Na serverové straně se nejprve ověří vstupní parametry, a poté se aplikují různé metody pro vyřešení sudoku.",
		description2:
			"Můj sofistikovaný algoritmus dokáže pomocí techniky „pokus-omyl“ zvládnout i ty nejkomplexnější úlohy. Pro uživatelské rozhraní jsem zvolil moderní přístup s využitím SCSS grid pro responzivní design. Aplikace zahrnuje také funkci pro poznámky, která umožňuje uživatelům zapisovat si strategie a myšlenky přímo při řešení sudoku, čímž jim poskytuje praktické nástroje pro zlepšení jejich dovedností.",
		description3: "",
		url1: "https://github.com/Juzba/MyPortfolioBackend/blob/master/MyPortfolioBackend/SudokuSolver/SudokuMain.cs",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/sudoku-solver/SudokuSolver.tsx",
	},
	{
		id: 1,
		name: "FirebaseDB project",
		image: img2,
		created: ["React", "Firebase", "Scss", "TS"],
		description:
			"Vytvořil jsem aplikaci využívající Google Firebase, kde se data ukládají pomocí hooku useState v Reactu. Uživatel zadává parametry a kliknutím na tlačítko se údaje odesílají do databáze funkcí addDoc, která zajišťuje správné uložení dat. Implementoval jsem také funkci pro zpracování chyb, která upozorňuje uživatele na problémy s připojením k databázi.",
		description2:
			"Aplikace obsahuje funkci onSnapshot, jež neustále monitoruje stav databáze a automaticky aktualizuje uživatelské rozhraní v reálném čase. Uživatelé vidí indikátor načítání při získávání nejnovějších informací, což zlepšuje uživatelský zážitek. Dále je zde možnost mazání jednotlivých položek a jejich detailního zobrazení, čímž se zajišťuje přehlednost a uživatelská přívětivost aplikace.",
		description3: "",
		url1: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/firebase/AddMovie.tsx",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/firebase/Movies.tsx",
	},
	{
		id: 2,
		name: "Advenced Slider",
		image: img3,
		created: ["React", "Scss", "TS"],
		description:
			"Vytvořil jsem pokročilý slider v Reactu, který využívá TypeScript (TSX) a SCSS pro stylování. Slider efektivně zobrazuje data uložená v souboru data.ts a zahrnuje klíčové funkce, jako je useEffect, která spravuje vedlejší účinky komponenty. Implementoval jsem cleanup funkci pro úklid efektů při odpojení komponenty od DOMu a setInterval pro automatické posouvání slideru.",
		description2:
			"Slider se automaticky posouvá po předem stanoveném časovém intervalu, což uživatelům umožňuje snadno prohlížet položky. Když uživatel s sliderem aktivně nemanipuluje, vrací se do původního stavu a pokračuje v posuvu. Tímto designem jsem zajistil plynulé a intuitivní uživatelské prostředí, které zjednodušuje interakci a zvyšuje celkový zážitek při prohlížení obsahu.",
		description3: "",
		url1: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/advenced-slider/AdvencedSlider.tsx",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/advenced-slider/AdvencedSlider.scss",
	},
	{
		id: 3,
		name: "Otázky a odpovědi",
		image: img4,
		created: ["React", "Scss", "TS"],

		description:
			"Tato jednoduchá FAQ aplikace, inspirovaná stylem Netflixu, usnadňuje uživatelům hledání odpovědí na časté otázky. Data jsou uložena v souboru data.ts jako pole objektů, což umožňuje efektivní manipulaci a přehledný přístup k informacím.",
		description2:
			"Jednotlivé otázky a odpovědi se zobrazují pomocí funkce map, která iteruje přes položky v poli a generuje komponenty pro každou z nich. Tyto informace jsou následně předávány do nejnižší komponenty, kde se finálně zobrazují uživatelům. Tímto způsobem mají uživatelé přístup ke všem důležitým údajům na jednom místě, což zlepšuje uživatelskou zkušenost a usnadňuje navigaci v aplikaci.",
		description3: "",
		url1: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/faq/FaqOneCard.tsx",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/faq/Faq.scss",
	},
	{
		id: 4,
		name: "Had",
		image: img5,
		created: ["React", "TS"],
		description:"Jedná se o klasickou hru had, která byla vyvinuta v Reactu a TypeScriptu, a je určena pro PC s minimálním rozlišením 1200 px. Grafika hry je zobrazena na plochém canvasu, což umožňuje plynulé animace a interakci. Hráči ovládají pohyb hada pomocí klávesových šipek. Had je uložen jako pole objektů, které obsahují pozice X a Y, a pohyb se spravuje pomocí funkcí unshift a pop.",
		description2:"Hra obsahuje také funkce pro detekci kolizí, takže se hráč musí vyhýbat stěnám a svému vlastnímu tělu. Na obrazovce se náhodně objevuje jídlo pro hada, které se nikdy nevytváří na pozici samotného hada. Tato hra je skvělým způsobem, jak procvičit reflexy a strategické myšlení.",
		description3:"",
		url1: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/snake/Snake.tsx",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/snake/SnakeFunc.tsx",
	},
	{
		id: 5,
		name: "Iss-Coordinates Api ",
		image: img6,
		created: ["Web Api","React"],
		description:
			"Tato aplikace zobrazuje aktuální souřadnice polohy vesmírné stanice ISS v reálném čase. Po otevření stránky React využívá vlastní hook useFetch, který vyvolá požadavek na webové API C# kontroleru. Ten zajišťuje získávání informací ze serveru o ISS. Během načítání dat se na obrazovce zobrazuje indikátor načítání, který uživatelům signalizuje, že aplikace pracuje na načtení potřebných informací.",
		description2:
			"Jakmile jsou data úspěšně načtena, okamžitě se zobrazí na obrazovce. Aplikace využívá funkci setInterval pro pravidelnou aktualizaci zobrazených informací o poloze stanice, čímž odesílá nové požadavky na server v pravidelných intervalech. Tato funkčnost přispívá k dynamickému a interaktivnímu uživatelskému zážitku, protože uživatelé mohou snadno sledovat aktuální polohu ISS. Celkově je aplikace skvělým nástrojem pro nadšence do astronautiky i pro každého, kdo chce sledovat pohyb naší orbitální stanice v reálném čase.",
		description3: "",
		url1: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/issCoordinates/Coordinates.tsx",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/components/hooks/useFetch.ts",
	},
	{
		id: 6,
		name: "Email Form",
		image: img7,
		created: ["C#", "Web Api", "React", "Scss"],
		description:"Vyvinul jsem e-mailový formulář pro kontakt, který usnadňuje uživatelům zasílání dotazů a požadavků. Formulář má pokročilé funkce hlídání chyb, které zajišťují správné vyplnění, a zahrnuje sledování připojení se serverem, aby uživatelé byli informováni o úspěšném nebo neúspěšném odeslání dat. Mým cílem je vytvořit uživatelsky přívětivé rozhraní, které maximalizuje efektivitu a minimalizuje frustraci.",
		description2:"Formulář je implementován pomocí Reactu a TypeScriptu, se styly řízenými SASS pro přehlednost kódu. K odesílání dat využívám vlastní hook useAxios, což zajišťuje plynulou komunikaci s backendem. Data se posílají do C# API, kde je zajištěna kontrola a validace. Všechny zprávy jsou směrovány na můj oficiální e-mail, což činí formulář plně funkční a efektivní pro komunikaci se mnou.",
		description3:"",
		url1: "https://github.com/Juzba/MyPortfolioBackend/blob/master/MyPortfolioBackend/Controllers/EmailController.cs",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/email-form/EmailProject.tsx",
	},
	{
		id: 7,
		name: "Film finder",
		image: img8,
		created: ["React","TS", "Scss"],
		description:"Tato React aplikace je navržena tak, aby uživatelům umožnila vyhledávat filmy podle zadaného textu. Parametry každého filmu jsou uloženy v objektu, což usnadňuje manipulaci s daty. Pro zobrazení filmů využívám funkci map, která generuje jednotlivé karty s informacemi o filmech. Díky funkci filter pak vyhledávám filmy, které odpovídají zadaným parametrům ve vyhledávání, takže uživatelé mohou snadno najít přesně to, co hledají.",
		description2:"Styl aplikace je inspirován designem platformy Netflix, což mi umožňuje vytvořit moderní a atraktivní uživatelské rozhraní. SCSS používám k dosažení modulárních a přehledných stylů, které odrážejí estetiku oblíbené streamovací služby. Díky tomu je aplikace nejen vizuálně příjemná, ale také responzivní a intuitivní. Pracuji na vylepšení uživatelského zážitku, abych zajistil, že uživatelé budou mít snadný a pohodlný přístup k filmům, které hledají. Těším se na další rozvoj tohoto projektu a plánování nových funkcí, které by mohly zvýšit jeho užitečnost a příjemnost pro uživatele.",
		description3:"",
		url1: "https://github.com/Juzba/MyPortfolioBackend/blob/master/MyPortfolioBackend/Controllers/EmailController.cs",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/email-form/EmailProject.tsx",
	},
];

export default ProjectData;
