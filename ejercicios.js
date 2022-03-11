const {clients,banks,accounts} = require('./dataSet');

function exercise0() {
  
    return clients?.map(client =>client.id);
}
function exercise1() {
   const ordenCliente= clients.sort((uncliente, otrocliente) => uncliente.rut.localeCompare(otrocliente.rut));
   return  soloId = ordenCliente.map(cliente => cliente.id)
}

function exercise2() {
    resultado = [];
    accounts.forEach(function (a) {  
       if (!this[a.clientId]) {
            this[a.clientId] = { id: a.clientId, balance: 0 };
            resultado.push(this[a.clientId]);
        }
      this[a.clientId].balance += a.balance;
    }, []);
    return resultado
}

function exercise3() {
    resultado=[]
    accounts.map(ac =>{
        clients.map(cl =>{
            banks.map(ba =>{
                if (!this[ac.clientId]) {
                    if(ac.clientId == cl.id && ac.bankId== ba.id){
                        this[cl.id]={banco: ba.name , rut:cl.rut};
                        resultado.push(this[cl.id]);
                    }
                }
            })
        })
    }, []);
    return resultado
}
function exercise4() {
    //no se especifico si era el monto sumado o el monto individual de accounts asi que
    //asumi que es monto individual ya que su lo sumo todos dan mas de 25.000
    resultado=[]
    accounts.map(ac =>{
            banks.map(ba =>{
                    if(ba.id==1 && ac.balance > 25000){
                        this[ba.id]={banco: ba.name , saldo:ac.balance};
                        resultado.push(this[ba.id]);
                    }
            })
    }, []);
    return resultado
}
function exercise5() {
    resultado = [];
    accounts.forEach(function (a) {  
       if (!this[a.clientId]) {
            this[a.clientId] = { bankId: a.bankId, balance: 0 };
            resultado.push(this[a.clientId]);
        }
      this[a.clientId].balance += a.balance;
    }, []);
    return resultado
}
function exercise6() {

    let obj_accounts = new Map();
    // verificamos si la cuenta esta repetida en el caso de esatar repetida 
    // no cumple la condicion de ser una cuenta unica
    accounts.forEach(account => {
        if(obj_accounts.has(account.clientId)){
            obj_accounts.set(account.clientId, 0);
        }else{
            obj_accounts.set(account.clientId, 1);
        }		
    });
    
    let obj_banck = new Map();
    banks.forEach(banck => { 
        accounts.forEach(account => {
            if(banck.id==account.bankId){
                // pregutanamos si el map del objeto tiene el id pedido 
                if(obj_accounts.has(account.clientId)){
                    // pregutanamos si el map del objeto banco tiene ya el nombre  
                    if(obj_banck.has(banck.name)){
                    //    agregamos el objeto con el nombre del banco y le sumamos la cantidad 
                        obj_banck.set(banck.name, 1+obj_banck.get(banck.name));
                        
                    }else{
                        // en caso de que el objeto no tenga el nombre aun guardado ese lo crea con un contador de 1 
                        obj_banck.set(banck.name, 1);
                    }
                }
            }
        })
    });
    return obj_banck
}
function exercise7() {
    let min = Infinity ,banco
    let nombreBanco
    accounts.forEach(function (a){
        // identicamos el balance minimo y ek ud dek vabci 
        if(a.balance < min ) min=a.clientId, banco=a.bankId
    })
    banks.map(b => {
        // con el id obtenido arriba buscaremos el nombre asignado a ese id 
        if(banco = b.id)nombreBanco=b.name
    })  
        // mostramos el valor minimo y el nombre obtenido anteriormente para mostrarlo en el objeto 
        persona=({
            "key":nombreBanco,
            "valor": min
         })
         return persona
}

console.log("Ejercicio 0 --> ", exercise0() || "Ejercicio no resuelto");
console.log("Ejercicio 1 --> ", exercise1() || "Ejercicio no resuelto");
console.log("Ejercicio 2 --> ", exercise2() || "Ejercicio no resuelto");
console.log("Ejercicio 3 --> ", exercise3() || "Ejercicio no resuelto");
console.log("Ejercicio 4 --> ", exercise4() || "Ejercicio no resuelto");
console.log("Ejercicio 5 --> ", exercise5() || "Ejercicio no resuelto");
console.log("Ejercicio 6 --> ", exercise6() || "Ejercicio no resuelto");
console.log("Ejercicio 7 --> ", exercise7() || "Ejercicio no resuelto");
process.exit();