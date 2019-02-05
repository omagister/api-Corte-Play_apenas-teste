exports.post = (req, res, next) => {
    res.status(201).send({ 'JobId':1, 'status':'Informações para o corte recebidas com sucesso!' });
};
exports.get = (req, res, next) => {
    let id = req.params.JobId;
    res.status(201).send({ 'JobId':id, 'status':'Tarefa de Corte está na fila' });
};
