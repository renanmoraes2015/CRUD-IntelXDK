/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #salvar */
    $(document).on("click", "#salvar", function(evt)
    {
        var codigo = $("#cod_pesso").val(),
            nome = $("#nm_pesso").val(),
            apelido = $("#ape_pesso").val(),
            data = [],
            transacao = db.transaction("tbl_PESSOAS", "readwrite"),
            store = transacao.objectStore("tbl_PESSOAS");
        
            data.COD_IDENT_PESSO = codigo;
            data.TXT_NOMEX_PESSO = nome;
            data.TXT_APELI_PESSO = apelido;
        
        var request= store.put(data);
        
        request.onsuccess = function(event){
            console.log("Sucesso ao salvar");
            listaPessoas();
        }
        
        request.onerror = function(event){
            console.log("Erro ao salvar");
        }
    });
     
          /* button  #salvar */
    $(document).on("click", "#listar", function(evt)
    {
        listaPessoas();
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

function listaPessoas(){
    $("#listaPessoa").html(""); //zerar o html da lista sempre que entra na função listaPessoas
    var array = [];
    var objectStore = db.transaction("tbl_PESSOAS").objectStore("tbl_PESSOAS");
    objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;
      if (cursor) {
          array.push(cursor.value);
        cursor.continue();
      }else{
           var tamanho = array.length;
          for(var i = 0; i < tamanho; i++){
              $("#listaPessoa").append('<ion-item class="item widget uib_w_9" data-uib="ionic/list_item" data-ver="0">'+array[i].TXT_NOMEX_PESSO+'</ion-item>');
          }
      }
    };
}
