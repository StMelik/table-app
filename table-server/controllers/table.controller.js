const db = require('../db')
const getQuery = require('../utils/getQuery')
const getTotal = require('../utils/getTotal')

class TableController {
  async getList(req, res) {
    const {
      limit = 10,
      page = 1,
      filter = 'id',
      condition = '>',
      query = 0,
      sort = 'id',
      sortType = 'ASC',
    } = req.query

    const offset = (page - 1) * limit

    try {
      const total = await db.query(
        getTotal(filter, condition, query, sort, sortType)
      )
      const list = await db.query(
        getQuery(limit, offset, filter, condition, query, sort, sortType)
      )

      res.send({ total: total.rowCount, list: list.rows })
    } catch (e) {
      console.log(e)
      res.status(400).send({ message: 'Ошибка' })
    }
  }
}

module.exports = new TableController()
