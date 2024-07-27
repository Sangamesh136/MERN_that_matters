function genNum() {
  return Math.floor(Math.random() * 100) + 1;
}
function celTofar(cel) {
  return (cel * 9) / 5 + 32;
}
module.exports = {
  genNum,
  celTofar,
};
