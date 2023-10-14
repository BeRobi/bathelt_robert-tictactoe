class Elem {
  // az osztályban az adattagokon végezzük a műveleteket
  // megjelenítse az oldalon az elemet
  constructor(szuloElem) {
    // beállítja az adattagokat
    this.szuloElem = szuloElem;
    this.htmlOsszeallit(); // a this - konkrét osztálypéldányra mutat
    // megfogjuk a html elemekhez
    this.divElem = this.szuloElem.children("div")
    this.pElem = this.divElem.children("p")
    console.log(this.divElem)
    console.log(this.pElem)
    this.divElem.on("click",()=>{
        this.pElem.html("X")
    })
  }

  htmlOsszeallit() {
    let txt = "<div class='elem'><p></p></div>";
    this.szuloElem.append(txt);
  }
}

export default Elem;
