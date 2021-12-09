var btnDat = document.getElementsByClassName('artdeco-button__text');
//set limit for how many times you want to click
var limit = 2;
const Max_Connections = 2;
var connection =0;

    setInterval(function () {
  for (var i = 0; i < btnDat.length; i++) {
    if (btnDat[i].innerText === 'Connect') {
      btnDat[i].click();
    }
    else if (btnDat[i].innerText === 'Send') {
      btnDat[i].click();
    }
  }

}
  , 3000)