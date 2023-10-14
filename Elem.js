class Elem {

  // az osztályban az adattagokon végezzük a műveleteket
  // megjelenítse az oldalon az elemet
  
  constructor(szuloElem) {

    // beállítja az adattagokat

    this.szuloElem = szuloElem;
    this.htmlOsszeallit(); // a this - konkrét osztálypéldányra mutat
    // megfogjuk a html elemekhez
    this.divElem = this.szuloElem.children("div:last-child");
    this.pElem = this.divElem.children("p");
    console.log(this.divElem);
    console.log(this.pElem);
    this.divElem.on("click", () => {
      this.#esemenyTrigger("elemKivalaszt");
      //this.setErtek("X");
    });
  }
  setErtek(ertek) {
    this.pElem.html(ertek);
  }

  htmlOsszeallit() {
    let txt = "<div class='elem'><p></p></div>";
    this.szuloElem.append(txt);
  }
  // saját esemény létrehozása - az osztály tud elmondani magáról dolgokat
  // információkat ad át saját magáról

  #esemenyTrigger(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(esemenyem);
  }
}

export default Elem;
