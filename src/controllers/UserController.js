const { validationResult } = require("express-validator");
const repository = require("../repositories/UserRepository");

// listagem de contato(s)
exports.listUsers = async (req, res) => {
  try {
    const data = await repository.listUsers();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Falha ao carregar contatos." });
  }
};

// criação de um contato
exports.createUser = async (req, res) => {
  const { errors } = validationResult(req);

  if (errors.length > 0) {
    return res.status(400).send({ message: errors });
  }

  try {
    await repository.createUser({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company,
      role: req.body.role,
      type: req.body.type,
      subject: req.body.subject
    });

    res.status(201).send({ message: "Contato cadastrado com sucesso!" });
  } catch (e) {
    res.status(500).send({ message: "Falha ao cadastrar o contato." });
  }
};

// atualização de um contato
exports.updateUser = async (req, res) => {
  const { errors } = validationResult(req);

  if (errors.length > 0) {
    return res.status(400).send({ message: errors });
  }

  try {
    await repository.updateUser(req.params.id, req.body);
    res.status(200).send({
      message: "Contato atualizado com sucesso!"
    });
  } catch (e) {
    res.status(500).send({ message: "Falha ao atualizar o contato." });
  }
};

// exclusão de um contato
exports.deleteUser = async (req, res) => {
  try {
    await repository.deleteUser(req.params.id);
    res.status(200).send({
      message: "Contato removido com sucesso!"
    });
  } catch (e) {
    res.status(500).send({ message: "Falha ao remover o usuário." });
  }
};

// detalhes do contato
exports.viewUser = async (req, res) => {
  try {
    const data = await repository.viewUser(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Falha ao carregar contato." });
  }
};
