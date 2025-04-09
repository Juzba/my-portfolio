import img1 from "./images/Sudoku.png";
import img2 from "./images/firebase1.png";
import img3 from "./images/Advenced-slider.png";
import img4 from "./images/faq.png";
import img5 from "./images/snake.png";
import img6 from "./images/iss-image.png";
import img7 from "./images/email-form.png";

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
	playable: boolean;
}

const ProjectData: type[] = [
	{
		id: 0,
		name: "Sudoku solver",
		image: img1,
		created: ["C#", "Web Api", "TS", "React"],
		description:
			"Vytvářím inovativní aplikaci, která se zaměřuje na řešení sudoku. Jakmile zadám hodnoty do sudoku a stisknu tlačítko „Solve“, aplikace vytvoří trojrozměrné pole. Toto pole je následně odesláno na server, kde je zpracováno pomocí webového API v C#. Na serverové straně se nejprve ověří vstupní parametry a poté se algoritmus pustí do vyřešení sudoku prostřednictvím různých metod.",
		description2:
			"Díky svému sofistikovanému algoritmu dokáže můj sudoku solver zvládnout i ty nejkomplexnější úlohy pomocí techniky zvané „pokus-omyl“. Tato metoda, známá svou efektivností, se osvědčila i u těch nejsložitějších variant sudoku.",
		description3:
			"Pro zobrazení a uživatelské rozhraní jsem zvolil moderní přístup s využitím SCSS grid pro responzivní design. Kromě samotného sudoku je zahrnuta i funkce pro poznámky, která mi umožňuje zapisovat si vedlejší myšlenky a strategie přímo do aplikace. Tento projekt je navržen s cílem přinést uživatelům nejen zábavu, ale také praktické nástroje pro zlepšení jejich dovedností v řešení sudoku.",
		playable: true,
		url1: "https://github.com/Juzba/MyPortfolioBackend/blob/master/MyPortfolioBackend/SudokuSolver/SudokuMain.cs",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/sudoku-solver/SudokuSolver.tsx",
	},
	{
		id: 1,
		name: "FirebaseDB project",
		image: img2,
		created: ["React", "Firebase", "Scss", "TS"],
		description:
			"Vytvořil jsem aplikaci, která pracuje s Google Firebase. V této aplikaci ukládám data pomocí hooku useState v Reactu. Uživatel zadává potřebné parametry, a po kliknutí na tlačítko se tyto údaje odesílají do databáze pomocí funkce addDoc, která zajišťuje, že se všechna data správně ukládají. Implementoval jsem také funkci pro zpracování chyb připojení k databázi, která upozorní uživatele, pokud dojde k nějakému problému při pokusu o odeslání dat.",
		description2:
			"Aplikace obsahuje funkci onSnapshot, která neustále monitoruje aktuální stav databáze. Tato funkce umožňuje automaticky aktualizovat uživatelské rozhraní a zobrazuje aktuální údaje v reálném čase. Při načítání dat uživatel vidí indikátor načítání, který signalizuje, že aplikace získává nejnovější informace z databáze, což zajišťuje lepší uživatelský zážitek.",
		description3:
			"Pro větší interaktivitu je také implementována možnost mazání jednotlivých položek a jejich detailního zobrazení. Uživatelé mohou kliknout na konkrétní položku, aby získali další informace, nebo ji kdykoliv smazat, pokud již není potřeba. Tento systém zajišťuje, že aplikace je přehledná a uživatelsky přívětivá, což přispívá k její efektivitě a využitelnosti.",
		playable: true,
		url1: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/firebase/AddMovie.tsx",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/firebase/Movies.tsx",
	},
	{
		id: 2,
		name: "Advenced Slider",
		image: img3,
		created: ["React", "Scss", "TS"],
		description:
			"Toto je pokročilejší slider, který jsem vytvořil v Reactu s použitím TypeScriptu (TSX) a stylování pomocí SCSS. Slider je navržen tak, aby efektivně zobrazoval data, která jsou uložena v souboru data.ts.",
		description2:
			"Pro zajištění správné funkčnosti slideru využívám základní funkce, jako je useEffect, která se stará o sledování a spravování vedlejších účinků komponenty. Dále implementuji cleanup funkci, která se postará o úklid efektů při odpojení komponenty od DOMu, a také využívám setInterval pro automatické posouvání slideru.",
		description3:
			"Slider se automaticky posouvá po stanoveném časovém intervalu, což uživatelům umožňuje prohlížet jednotlivé položky bez nutnosti dalšího zásahu. Když však uživatel s sliderem aktivně nemanipuluje, automaticky se vrátí do původního stavu a opět začne s posunem. Tento design zajišťuje plynulé a intuitivní uživatelské prostředí, které zjednodušuje interakci a zvyšuje zážitek při prohlížení obsahu.",
		playable: true,
		url1: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/advenced-slider/AdvencedSlider.tsx",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/advenced-slider/AdvencedSlider.scss",
	},
	{
		id: 3,
		name: "Otázky a odpovědi",
		image: img4,
		created: ["React", "Scss", "TS"],

		description:
			"Toto je jednoduchá aplikace typu FAQ, inspirovaná stylem Netflixu. Je navržena tak, aby uživatelům usnadnila hledání odpovědí na často kladené otázky. Data jsou uložena v souboru data.ts jako pole objektů, což umožňuje efektivní manipulaci a přehledný přístup k informacím.",
		description2:
			"Jednotlivé otázky a odpovědi jsou zobrazeny v tabulkách pomocí funkce map, která iteruje přes každou položku v poli a generuje konkrétní komponenty pro každou položku. Tento způsob zobrazení zajišťuje, že jsou všechny informace prezentovány přehledně a srozumitelně.",
		description3:
			"Tyto informace jsou poté přeposlány do nejnižší komponenty, kde se finálně zobrazují uživatelům. Takto je zaručeno, že mají přístup k důležitým údajům na jednom místě, což přispívá k lepší uživatelské zkušenosti a snadnější navigaci v aplikaci.",
		playable: true,
		url1: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/faq/FaqOneCard.tsx",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/faq/Faq.scss",
	},
	{
		id: 4,
		name: "Had",
		image: img5,
		created: ["React", "Scss", "TS"],
		description:
			"Jedná se o klasickou hru had, která je primárně určena pro PC a zobrazuje se pouze na obrazovkách s minimálním rozlišením 1200 px. Hra je vyvinuta v Reactu a TypeScriptu a grafika je zobrazena na ploše canvas, což umožňuje plynulé animace a interakci.",
		description2:
			"Had je uložen jako pole objektů třídy, která obsahuje pozice X a Y. Hráči ovládají pohyb hada pomocí klávesových šipek, přičemž se posouvá pomocí funkcí unshift a pop spravovaných funkcí setInterval.",
		description3:
			"Dále hra obsahuje funkce pro detekci kolizí, takže se hráč musí vyhýbat stěnám a sám sobě. Kromě toho se na obrazovce náhodně objevuje jídlo pro hada, které se nikdy nevytváří na pozici samotného hada. Tato hra je skvělým způsobem, jak si procvičit reflexy a strategické myšlení.",
		playable: true,
		url1: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/snake/Snake.tsx",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/snake/SnakeFunc.tsx",
	},
	{
		id: 5,
		name: "Iss-Coordinates Api ",
		image: img6,
		created: ["React", "Scss", "TS"],
		description:
			"Tato aplikace zobrazuje aktuální souřadnice polohy vesmírné stanice ISS v reálném čase. Po otevření stránky aplikace okamžitě vyšle požadavek pomocí vlastního hooku useFetch. Během načítání dat se na obrazovce zobrazuje indikátor načítání, což informuje uživatele, že aplikace pracuje na získání potřebných informací.",
		description2:
			"Jakmile jsou data úspěšně načtena, automaticky se zobrazí na obrazovce. Aplikace je navržena tak, aby pravidelně aktualizovala zobrazené informace o poloze stanice. To se provádí pomocí funkce setInterval, která odesílá nové požadavky na server v pravidelných intervalech, čímž zajišťuje, že uživatel vždy vidí aktuální polohu ISS. Tato funkčnost přispívá k interaktivnímu a dynamickému uživatelskému zážitku, díky čemuž se uživatelé mohou snadno a rychle dozvědět o aktuální situaci vesmírné stanice.",
		description3:
			"Celkově je aplikace užitečným nástrojem nejen pro nadšence do astronautiky a vesmíru, ale také pro každého, kdo má zájem sledovat pohyb naší orbitální stanice v reálném čase.",
		playable: true,
		url1: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/issCoordinates/Coordinates.tsx",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/components/hooks/useFetch.ts",
	},
	{
		id: 6,
		name: "Email Form",
		image: img7,
		created: ["C#", "Web Api", "React", "Scss"],
		description:
			"Jedná se o e-mailový formulář pro kontakt, který jsem navrhl tak, aby uživatelům usnadnil zasílání dotazů a požadavků. Tento formulář obsahuje robustní funkce pro hlídání chyb, jež uživatelům pomáhají vyplnit formulář správně. Také zahrnuje sledování připojení se serverem, což zajišťuje, že uživatelé budou informováni o úspěšném nebo neúspěšném odeslání dat. Můj cíl je poskytnout uživatelsky přívětivé rozhraní, které minimalizuje frustraci a maximalizuje efektivitu při vyplňování formuláře.",
		description2:
			"Formulář je vytvořen v Reactu s TypeScriptem a stylizován pomocí SASS, což umožňuje snadnou správu stylů a přehlednou strukturu kódu. Při odesílání dat využívám svůj vlastní hook useAxios, který efektivně zpracovává HTTP požadavky a zajišťuje plynulou komunikaci s backendem. Data jsou poté odesílána do controlleru ve webovém API napsaném v C#, což mi umožňuje mít plnou kontrolu nad zpracováním a validací dat na serverové straně.",
		description3:
			"Při odesílání e-mailů využívám svůj e-mail vytvořený speciálně pro tyto účely, a veškeré zprávy jsou doručovány na můj oficiální e-mail. Celkově je formulář plně funkční, a já jsem spokojený s tím, jak se mi podařilo důkladně implementovat všechny potřebné funkce. Doufám, že tento e-mailový formulář bude užitečný jak pro mě, tak pro uživatele, kteří se chtějí se mnou spojit.",
		playable: true,
		url1: "https://github.com/Juzba/MyPortfolioBackend/blob/master/MyPortfolioBackend/Controllers/EmailController.cs",
		url2: "https://github.com/Juzba/my-portfolio/blob/main/src/pages/Projects/assets/email-form/EmailProject.tsx",
	},
];

export default ProjectData;
