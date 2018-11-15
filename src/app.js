import DIRECTIONS from './constants/directions';
import {arraysEqual, existsRight, notExistsRight, existsLeft, notExistsLeft, existsAtPosition} from './util/utils.js';
import style from './app.css';

document.getElementById('button').addEventListener('click', () => {
    const arrayOfLines = document.getElementById('textArea').value.split('\n').map((oneLine) => oneLine.split('')).filter((item) => item.length);
    const path = getPath(arrayOfLines);
    document.getElementById('resultPath').innerHTML = path;
    document.getElementById('resultLetters').innerHTML = path.replace(/[^A-Z]+/g, '');
});

function getPath(arrayOfLines) {
    const startingLineIndex = arrayOfLines.findIndex((line) => line.some((char) => char === '@'));
    const firstLine = arrayOfLines[startingLineIndex];
    const startingCharIndex = firstLine.findIndex((char) => char === '@');

    let direction;

    if (existsRight(firstLine, startingCharIndex)) {
        direction = DIRECTIONS.TO_RIGHT;
    } else if (existsLeft(firstLine, startingCharIndex)) {
        direction = DIRECTIONS.TO_LEFT;
    } else if (existsAtPosition(arrayOfLines[startingLineIndex + 1], startingCharIndex)) {
        direction = DIRECTIONS.TO_BOTTOM;
    }

    return recursiveSearch({lastLine: firstLine, lastDirection: direction, lastPosition: startingCharIndex, accumulatedPath: '@'}).trim();

    function recursiveSearch(currentState) {
        const {lastLine, lastDirection, lastPosition} = currentState;
        let {accumulatedPath} = currentState;

        if (lastLine[lastPosition] === 'x') { return accumulatedPath; }

        const lineIndexInArray = arrayOfLines.findIndex((line) => arraysEqual(line, lastLine));

        if ((lastDirection === DIRECTIONS.TO_BOTTOM || (lastDirection === DIRECTIONS.TO_LEFT && notExistsLeft(lastLine, lastPosition)) || (lastDirection === DIRECTIONS.TO_RIGHT && notExistsRight(lastLine, lastPosition)))
            && lastDirection !== DIRECTIONS.TO_UP && existsAtPosition(arrayOfLines[lineIndexInArray + 1], lastPosition)) {
            accumulatedPath += arrayOfLines[lineIndexInArray + 1][lastPosition];
            return recursiveSearch({lastLine: arrayOfLines[lineIndexInArray + 1], lastPosition, lastDirection: DIRECTIONS.TO_BOTTOM, accumulatedPath});
        }
        else if ((notExistsRight(lastLine, lastPosition) || ((lastDirection === DIRECTIONS.TO_LEFT) && notExistsLeft(lastLine, lastPosition)))
            && lastDirection !== DIRECTIONS.TO_BOTTOM && existsAtPosition(arrayOfLines[lineIndexInArray - 1], lastPosition)) {
            accumulatedPath += arrayOfLines[lineIndexInArray - 1][lastPosition];
            return recursiveSearch({lastLine: arrayOfLines[lineIndexInArray - 1], lastPosition, lastDirection: DIRECTIONS.TO_UP, accumulatedPath});
        } else if (lastDirection !== DIRECTIONS.TO_LEFT && existsRight(lastLine, lastPosition)) {
            accumulatedPath += lastLine[lastPosition + 1];
            return recursiveSearch({lastLine, lastPosition: lastPosition + 1, lastDirection: DIRECTIONS.TO_RIGHT, accumulatedPath});
        } else if (lastDirection !== DIRECTIONS.TO_RIGHT && existsLeft(lastLine, lastPosition)) {
            accumulatedPath += lastLine[lastPosition - 1];
            return recursiveSearch({lastLine, lastPosition: lastPosition - 1, lastDirection: DIRECTIONS.TO_LEFT, accumulatedPath});
        }
    }
}

