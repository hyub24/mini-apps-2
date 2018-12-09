const initialState = [];

for (let i = 0; i<10; i++) {
  initialState.push(Array(10).fill(0));
}

export default (state = initialState, action) => {
  if(action.type === 'setMines') {
    let mineField = state;
    let mines = 10;
    while(mines) {
      let i = Math.floor(Math.random()*10);
      let j = Math.floor(Math.random()*10);
      if(mineField !== 'X') {
        mineField[i][j] = 'X';
        mines -= 1;
      }
    }
    return mineField;
  }

  else if (action.type === 'setNumbers') {
    let newField = state;
    for(let i = 0; i<10; i++) {
      for(let j = 0; j<10; j++) {
        if(newField[i][j] === 'X') {
          if(j-1 >= 0 && i-1 >= 0 && newField[i-1][j-1] !== 'X') {
            newField[i-1][j-1] += 1;
          }
          if(i-1>= 0 && newField[i-1][j] !== 'X') {
            newField[i-1][j] += 1;
          }
          if(i-1>=0 && j+1<10 && newField[i-1][j+1] !== 'X') {
            newField[i-1][j+1] += 1;
          }
          if(j-1>=0 && newField[i][j-1] !== 'X') {
            newField[i][j-1] += 1;
          }
          if(j+1<10 && newField[i][j+1] !== 'X') {
            newField[i][j+1] += 1;
          }
          if(i+1<10 && j-1>=0 && newField[i+1][j-1] !== 'X') {
            newField[i+1][j-1] += 1;
          }
          if(i+1<10 && newField[i+1][j] !== 'X') {
            newField[i+1][j] += 1;
          }
          if(i+1<10 && j+1<10 && newField[i+1][j+1] !== 'X') {
            newField[i+1][j+1] += 1;
          }
        }
      }
    }
    return newField;
  }
}