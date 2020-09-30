const knex = require('../database/index');

module.exports = {
    async create(req, res, next) {
        try {
            const {nome, autor, valor, caminho_imagem} = req.body
            const [id] = await knex('tblGames').insert({
                nome, 
                autor,
                valor,
                caminho_imagem,
            })
            
            return res.json({id}).sendStatus(201);
        } catch (err) {
            next(err);
        }
    },

    async index(req, res, next) {
        try {
            const { page = 1 } = req.query;

            const [count] = await knex('tblGames').count();

            const games = await knex('tblGames')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*')

            res.header('X-Total-Count', count['count(*)']);

            return res.json({games}).sendStatus(200);
        } catch (err) {
            next(err)
        }
    }
}