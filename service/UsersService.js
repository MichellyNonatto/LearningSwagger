'use strict';


/**
 * Deleta um Usuário
 * Este endpoint **deleta** um usuário do sistema. O ID do usuário deve ser informado.
 *
 * id Long ID do usuário a ser deletado
 * returns inline_response_200
 **/
exports.deleteUserById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Usuário deletado com sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Detalhe do Usuário
 * Este endpoint retorna **apenas o usuário especificado pelo ID**
 *
 * id Long ID do usuário
 * returns User
 **/
exports.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telephone" : "(11) 4002-8922",
  "id" : 10,
  "email" : "george@yahoo.com",
  "username" : "George"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista dos Usuários
 * Este endpoint retorna **todos** os usuários cadastrados no sistema
 *
 * returns List
 **/
exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "telephone" : "(11) 4002-8922",
  "id" : 10,
  "email" : "george@yahoo.com",
  "username" : "George"
}, {
  "telephone" : "(11) 4002-8922",
  "id" : 10,
  "email" : "george@yahoo.com",
  "username" : "George"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar um Usuário
 * Este endpoint **atualiza** um usuário do sistema. O ID do usuário deve ser informado.
 *
 * body User Usuário a ser atualizado
 * returns User
 **/
exports.patchUsers = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telephone" : "(11) 4002-8922",
  "id" : 10,
  "email" : "george@yahoo.com",
  "username" : "George"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Criar um Usuário
 * Este endpoint **cria** um novo usuário no sistema
 *
 * body User Usuário a ser criado
 * returns User
 **/
exports.postUsers = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telephone" : "(11) 4002-8922",
  "id" : 10,
  "email" : "george@yahoo.com",
  "username" : "George"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar um Usuário
 * Este endpoint **atualiza** um usuário do sistema. O ID do usuário deve ser informado.
 *
 * body User Usuário a ser atualizado
 * returns User
 **/
exports.putUsers = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telephone" : "(11) 4002-8922",
  "id" : 10,
  "email" : "george@yahoo.com",
  "username" : "George"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

