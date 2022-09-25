module.exports = (limit, offset, filter, condition, query, sort, sortType) => {
  return `SELECT * FROM list 
      ${
        condition === 'ILIKE'
          ? `WHERE ${filter} ILIKE '%${query}%'`
          : `WHERE ${filter} ${condition} ${query}`
      }
      ORDER BY ${sort} ${sortType}
      OFFSET ${offset} 
      LIMIT ${limit}`
}
