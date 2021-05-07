    //Template Method
    //Método de Plantilla


let datastore = {
    process: function() {
        this.connect();
        this.select();
        this.disconnect();
        return true;
    }
};
 
function inherit(proto) {
    var F = function() { };
    F.prototype = proto;
    return new F();
}
 
// Registro para el Alert
 
let log = (function() {
    let log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
    let mySql = inherit(datastore);
 
    // implement template steps
 
    mySql.connect = function() {
        log.add("MySQL: connect step");
    };
 
    mySql.select = function() {
        log.add("MySQL: select step");
    };
 
    mySql.disconnect = function() {
        log.add("MySQL: disconnect step");
    };
 
    mySql.process();
 
    log.show();
}

run();

