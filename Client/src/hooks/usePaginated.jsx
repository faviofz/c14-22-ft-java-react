import { useEffect, useState } from 'react';

export const usePaginated = ({ data, numItems = 5 }) => {
  const itemsPerPage = numItems;
  const [currentPage, setCurrentPage] = useState(1);
  const [filtered, setFiltered] = useState(data);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayed = filtered.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  useEffect(() => {
    setFiltered(data);
  }, [data]);

  return {
    setFiltered,
    displayed,
    currentPage,
    totalPages,
    setCurrentPage,
  };
};
