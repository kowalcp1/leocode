import React from 'react'

const TableRow = ({ row }) => {
  return (
    <tr className="table-row">
      <td className="table-row__cell">
        <a href={row.edit_path}>
          {row.name1}
        </a>
        <span className="table-row__cell--email">{row.email}</span>
      </td>
    </tr>
  )
}

export default TableRow
