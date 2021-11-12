let html5 = document.getElementsByTagName("website");
/*if (html5.length > 1){
    throw Error("No website tag fund!");
    
}*/


html5[0].innerHTML = <div>
    <p><b>Hallo</b> Welt!</p>
</div>;

class php{
    _vars_keys = []
    _vars_values = []
    echo(elment) {
        return html5[0].innerHTML += elment;
    }
    $(env) {
    for (let index = 0; index < this._vars_keys; index++) {
        if (this._vars_keys[index] == env){
            return this._vars_values[index];
        }
    }
    def(vname, value){
      if (this._vars_keys.length != this._vars_values.length){
          throw Error("Pares php not fund on roll_php@willdll.local.%localdomain%.orgsys.ghub");
      }
      this._vars_keys.push(vname);
      this._vars_values.push(value);
    }
}

let php = new php()