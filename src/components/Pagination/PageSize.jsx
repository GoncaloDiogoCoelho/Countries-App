import React from 'react'

const PageSize = () => {
  return (
    <select id="page-size" className="page-size">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
    </select>
  )
}

export default PageSize