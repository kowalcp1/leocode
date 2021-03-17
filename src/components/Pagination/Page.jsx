import React from 'react';

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const handleClick = (e) => {
    e.preventDefault()
    onChange(pageNumber)
  }

  return <li className="page-item mr-1">
    <button className={`page-link ${currentPageNumber === pageNumber ? "button-outline" : ''}`} onClick={handleClick} >{pageNumber + 1}</button>
  </li>
}

export default Page;