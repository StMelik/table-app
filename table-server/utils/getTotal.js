module.exports = (filter, condition, query, sort, sortType) => {
  return `SELECT id FROM list
      ${
        condition === 'ILIKE'
          ? `WHERE ${filter} ILIKE '%${query}%'`
          : `WHERE ${filter} ${condition} ${query}`
      }
      ORDER BY ${sort} ${sortType}
`
}
