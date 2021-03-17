import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { calculateTotalNumberOfPages } from '../../utils/calculateTotalNumberOfPages';
import * as actions from '../../store/actions/dataTable';
import Pagination from '../../components/Pagination/Pagination'
import Row from '../../components/TableRow/TableRow'
import Search from '../../components/Search/Search'

const INITIAL_ROWS_PER_PAGE = 40;

const DataTable = ({ rowsPerPage = INITIAL_ROWS_PER_PAGE }) => {
  const userData = document.getElementById('user-data') ? JSON.parse(document.getElementById('user-data').dataset.users) : [];
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(calculateTotalNumberOfPages(userData, rowsPerPage));
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.dataTable);

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }

  const rowsToRender = data
    .map(row => <Row key={row.per_id} row={row} />)
    .slice(...rowsInPageNumber(currentPageNumber))

  const changeToPageNumber = (pageNumber) => {
    setCurrentPageNumber(pageNumber)
  }

  const handleSearch = (e) => {
    const text = e.target.value;
    let rowsFound = userData;

    if (text) {
      rowsFound = userData.filter((row) => {
        return row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
      })
    }

    setCurrentPageNumber(0);
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound, rowsPerPage))
    dispatch(actions.setDataTable(rowsFound))
  }

  return <div className="container mt-3">
    <Search onSearch={handleSearch} />
    <table>
      <tbody>
        {rowsToRender}
      </tbody>
    </table>
    <Pagination
      currentPageNumber={currentPageNumber}
      totalNumberOfPages={totalNumberOfPages}
      onChange={changeToPageNumber} />
  </div>;
}

export default DataTable
