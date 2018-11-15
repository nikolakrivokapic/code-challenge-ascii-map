import {TEST_HTML, MAP_1, MAP_2, MAP_3, MAP_4, MAP_5} from './constants.js';

test('calculate paths', () => {
    document.body.innerHTML = TEST_HTML;

    require('../src/app.js');

    let $textArea = document.getElementById('textArea'),
        $button =  document.getElementById('button'),
        $result = document.getElementById('resultPath'),
        $resultLetters = document.getElementById('resultLetters');

    $textArea.innerHTML = MAP_1;
    $button.click();
    expect($result.innerHTML).toEqual('@|A+---B--+|+----C|-||+---D--+|x');
    expect($resultLetters.innerHTML).toEqual('ABCD');

    $textArea.innerHTML = MAP_2;
    $button.click();
    expect($result.innerHTML).toEqual('@---+B||E--+|E|+--F--+|C|||A--|-----K|||+--E--Ex');
    expect($resultLetters.innerHTML).toEqual('BEEFCAKEE');

    $textArea.innerHTML = MAP_3;
    $button.click();
    expect($result.innerHTML).toEqual('@---A---+|C|+---+|+-B-x');
    expect($resultLetters.innerHTML).toEqual('ACB');

    $textArea.innerHTML = MAP_4;
    $button.click();
    expect($result.innerHTML).toEqual('@A+---B--+|+----C|-||+---D-----------+|x');
    expect($resultLetters.innerHTML).toEqual('ABCD');

    $textArea.innerHTML = MAP_5;
    $button.click();
    expect($result.innerHTML).toEqual('@-A--+|C|+---+|+-B-x');
    expect($resultLetters.innerHTML).toEqual('ACB');
});
