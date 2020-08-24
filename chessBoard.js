let chessBoard = function (size) {
  let result = "";
  let space = " ";
  for (let i = 0; i < size; i++) {
    result += "\n";

    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 == 0) {
        result += space;
      } else {
        result += "#";
      }
    }
  }
  console.log(result);
};
chessBoard(8);

// function chess_Board(size) {
//   let result = "",
//     space = " ";
//   for (let i = 0; i < size; i++) {
//     result += "\n";
//     for (let j = 0; j < size; j++) {
//       if ((i + j) % 2 === 0) {
//         result += space;
//       } else {
//         result += "#";
//       }
//     }
//     console.log(result);
//   }
// }
// chess_Board(8);
