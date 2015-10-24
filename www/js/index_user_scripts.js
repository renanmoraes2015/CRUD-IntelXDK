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
        }
        
        request.onerror = function(event){
            console.log("Erro ao salvar");
        }
    
        
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
