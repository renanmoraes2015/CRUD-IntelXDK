window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
if(!window.indexedDB)
{
  console.log("Seu navegador não suporta o recurso IndexedDB");
}

var request = indexedDB.open("DB_CRUDMobile", 1);
var db = null;


request.onupgradeneeded = function(){
    db = request.result;

        var pessoa = db.createObjectStore("tbl_PESSOAS", {autoIncrement : true});

    pessoa.createIndex("COD_IDENT_PESSO", "COD_IDENT_PESSO", {unique: false});
    pessoa.createIndex("TXT_NOMEX_PESSO", "TXT_NOMEX_PESSO", {unique: false});
    pessoa.createIndex("TXT_APELI_PESSO", "TXT_APELI_PESSO", {unique: false});
    
    var mobile = db.createObjectStore("tbl_MOBILEZONE", {autoIncrement : true});

    mobile.createIndex("COD_IDENT_FORUM", "COD_IDENT_FORUM", {unique: true});
    mobile.createIndex("TXT_NOMEX_FORUM", "TXT_NOMEX_FORUM", {unique: false});
    mobile.createIndex("TXT_APELI_FORUM", "TXT_APELI_FORUM", {unique: false});

    }

request.onsuccess = function(){
    //database connection established 
    db = request.result;
    console.log(db);
    console.log("Conectado corretamente");
}

request.onerror = function(event){
    console.log("Error " + event.target.errorCode);
}

function DeletaBanco(){    
    var bdDeleta = indexedDB.deleteDatabase("DB_CRUDMobile");
    bdDeleta.onerror = function(event) {
        console.log("Error " + event.target.errorCode);
    };
    bdDeleta.onsuccess = function(event) {
        console.log("Deletado com sucesso!");
    };
}