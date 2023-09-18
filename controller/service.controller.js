const db = require('../db')

class ServiceController {
    async createService (req, res) {
        const {title, date, request_id} = req.body
        const newService = await db.query('INSERT INTO service (title, date, request_id) VALUES ($1, $2, $3) RETURNING *', [title, date, request_id])
        res.json(newService.rows[0])
    }
    async getServices (req, res) {
        const services = await db.query('SELECT * FROM service')
        res.json(services.rows)
    }
    async getOneService (req, res) {
        const id = req.params.id
        const services = await db.query('SELECT * FROM service where request_id = $1', [id])
        res.json(services.rows[0])
    }
    async updateService (req, res) {
        const {id, title, date, request_id} = req.body
        const services = await db.query('UPDATE service SET title = $2, date = $3, request_id = $4 WHERE id = $1 RETURING *', [id, title, date, request_id])
        res.json(services.rows[0])
    }
    async deleteService (req, res) {
        const id = req.params.id
        const services = await db.query('DELETE FROM service WHERE id = $1', [id])
        res.json(clients.rows[0])
    }
}

module.exports = new ServiceController()