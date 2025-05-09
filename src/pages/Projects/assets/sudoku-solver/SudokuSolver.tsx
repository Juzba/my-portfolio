import { useEffect, useState } from "react";
import { dataArray, dataArray2 } from "./Data";
import "./SudokuSolver.scss";
import UseAxios from "../../../components/hooks/UseAxios";

interface SudokuResponse {
	statusText: string;
	infoMessage: string;
	success: boolean;
	returnedArray: number[][][];
}

interface CrossState {
	X: null | number;
	Y: null | number;
	FocusedNumber: number;
}

// const urlSolve = "https://localhost:7143/api/sudoku/solve";
const urlSolve = "https://portfolio-backend-juzba-h7dtdva0fvadach3.westeurope-01.azurewebsites.net/api/sudoku/solve";

const SudokuSolver = () => {
	const [sudokuArray, setSudokuArray] = useState<number[][][]>(dataArray);
	const [statusText, setStatusText] = useState<string | null>(null);
	const [infoMessage, setinfoMessage] = useState<string | null>(null);
	const { fetchData } = UseAxios(urlSolve);
	const [displayCross, setDisplayCross] = useState<CrossState>({ Y: null, X: null, FocusedNumber: 0 });

	
	

	const sendArray = async () => {
		const vysledek = await fetchData(sudokuArray);

		const typedResult = vysledek as SudokuResponse;
		const { infoMessage, statusText, success, returnedArray } = typedResult;

		if (success) {
			if (returnedArray.length === 9 && returnedArray[0].length === 9 && returnedArray[0][0].length === 10)
				setSudokuArray(returnedArray); // must be number [9][9][10]

			setStatusText(statusText);
			setinfoMessage(infoMessage);
		}
	};

	const addNumberToArray = (indexX: number, indexY: number, e: React.KeyboardEvent) => {
		const key = e.key;

		if (key >= "0" && key <= "9") {
			e.preventDefault(); // Zabránit výchozímu chování

			const newSudokuArray = sudokuArray.map((arr) => [...arr]);
			newSudokuArray[indexX][indexY][0] = parseInt(key, 10);
			setSudokuArray(newSudokuArray);
		}
		if (key == "Backspace" || key == "Delete") {
			e.preventDefault(); // Zabránit výchozímu chování

			const newSudokuArray = sudokuArray.map((arr) => [...arr]);
			newSudokuArray[indexX][indexY][0] = 0;
			setSudokuArray(newSudokuArray);
		}
	};

	const clear: number[][][] = new Array(9)
		.fill(null)
		.map(() => new Array(9).fill(null).map(() => new Array(10).fill(0)));

	useEffect(() => {
		if (infoMessage) {
			document.addEventListener("mousedown", () => setinfoMessage(""));
			return () => document.removeEventListener("mousedown", () => setinfoMessage(""));
		}
	});

	return (
		<div className="sudoku-solver">
			<h1>Extreme sudoku solver.</h1>
			<div className="buttons">
				<button onClick={() => sendArray()}>Solve</button>
				<button onClick={() => setSudokuArray(clear)}>Clear</button>
				<button onClick={() => setSudokuArray(dataArray)}>Memory 1</button>
				<button onClick={() => setSudokuArray(dataArray2)}>Memory 2</button>
			</div>

			<div className="sudoku">
				{sudokuArray.map((oneSection, indexY) =>
					oneSection.map((OneNumber, indexX) => {
						const index = indexX + indexY * 10;
						return (
							<div
								className={displayCross.X === indexX || displayCross.Y === indexY ? "pole active" : "pole"}
								key={index}>
								{/* {index} */}
								<input
									className={displayCross.FocusedNumber === OneNumber[0] ? "input-number" : ""}
									value={OneNumber[0] !== 0 ? OneNumber[0] : ""}
									onKeyDown={(e) => addNumberToArray(indexY, indexX, e)}
									onClick={() => setDisplayCross({ Y: indexY, X: indexX, FocusedNumber: OneNumber[0] })}
									type="number"
								/>

								{/* // Small numbers 9x */}
								<div className="small-numbers">
									{OneNumber.map((OneSmallNum, indexZ) => {
										// if (indexZ === 0 || OneNumber[0] ) return;
										if (indexZ === 0) return;
										return (
											<span className={displayCross.FocusedNumber === OneSmallNum ? "input-number" : ""} key={indexZ}>
												{OneSmallNum > 0 ? OneSmallNum : ""}
											</span>
										);
									})}
								</div>
							</div>
						);
					})
				)}
				{infoMessage && <p className="info-message">{infoMessage}</p>}
			</div>
			<p>{statusText ? statusText : "Žádný text!"}</p>
			{/* <p>{error ? error : "Spojení bez chyby."}</p> */}
		</div>
	);
};

export default SudokuSolver;
