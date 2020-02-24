export const TEST_HTML = `
    <html>
    <head></head>
    <body>
        <textarea id="textArea" rows="12" cols="50"></textarea>
        <button id="button">Calculate</button>
        <code id="resultLetters"></code>
        <code id="resultPath"></code>
    </body>
    </html>
    `;

export const MAP_1 = '\n' + `  
  @
  | C----+
  A |    |
  +---B--+
    |      x
    |      |
    +---D--+
    ` + '\n';

export const MAP_2 = '\n' + `  
  @---+
      B
K-----|--A
|     |  |
|  +--E  |
|  |     |
+--E--Ex C
   |     |
   +--F--+
   ` + '\n';

export const MAP_3 = '\n' + ` 
  @---A---+
          |
  x-B-+   C
      |   |
      +---+`
    + '\n';

export const MAP_4 = '\n' + `  
  |
  @ C----+
  A |    |          +
  +---B--+          +
    |               x
    |               |
    +---D-----------+
    ` + '\n';

export const MAP_5 = '\n' + `  
  +--@-A--+
          |
  x-B-+   C
  +   |   |
      +---+
    ` + '\n';

export const MAP_6 = '\n' + `  
++@
  +       x
  +-B-+   C
      |   |
      +---+
    ` + '\n';
