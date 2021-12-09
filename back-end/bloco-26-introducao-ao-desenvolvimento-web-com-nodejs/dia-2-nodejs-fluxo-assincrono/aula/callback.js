function batatinha() {
  frita();
}

function frita() {
  console.log("Fritou");
}

function main() {

  batatinha();

  setTimeout( () => {
    console.log("Fim callback");
  }, 3000);

  frita(); 
}

main();