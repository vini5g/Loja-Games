const knex = require('../database/index');

module.exports = {
    async create(req, res, next) {
        try {
            const {nome, email, senha} = req.body;

            const verificaEmail = await knex('tblUsuarios').select('*')
            .where({email});

            if (verificaEmail && verificaEmail.length != 0) {
                return res.json({message:"Este e-mail pertence a outro usuário"}).sendStatus(200)
            }

            const [id] = await knex('tblUsuarios').insert({
                nome,
                email,
                senha
            })

            return res.json({id}).sendStatus(201);

        } catch (err) {
            next(err);
        }
    },

    async index(req, res, next) {
        try {
            const {email, senha} = req.body;

            const usuario = await knex('tblUsuarios').select('*')
                .where({
                    email,
                    senha
                });
            
            if (!usuario || usuario == undefined || usuario.length == 0) 
            return res.json({message:"E-mail ou senha incorretos"}).sendStatus(200);

            return res.json({usuario}).sendStatus(200);

        } catch (err) {
            next(err)
        }
    }
}