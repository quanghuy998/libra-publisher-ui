import React, { useState, useEffect, JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons"; // Sorting icons

export interface TableColumn {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => JSX.Element; // Optional custom renderer for cell data
  sort?: "asc" | "desc" | "none"; // Optional sort property: determines if the column is sortable
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  // Set default sort to 'none' if not provided
  const columnsWithDefault = columns.map((col) => ({
    ...col,
    sort: col.sort || "none", // Default sort to "none" if not specified
  }));

  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc" | null;
  }>({
    key: "",
    direction: null,
  });
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    const sorted = [...data];
    if (sortConfig.key) {
      sorted.sort((a, b) => {
        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];

        if (typeof valueA === "string" && typeof valueB === "string") {
          return sortConfig.direction === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        }

        if (typeof valueA === "number" && typeof valueB === "number") {
          return sortConfig.direction === "asc"
            ? valueA - valueB
            : valueB - valueA;
        }

        if (
          typeof valueA === "string" &&
          typeof valueB === "string" &&
          Date.parse(valueA) &&
          Date.parse(valueB)
        ) {
          const dateA = new Date(valueA);
          const dateB = new Date(valueB);
          return sortConfig.direction === "asc"
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
        }

        return 0;
      });
    }

    setSortedData(sorted);
  }, [sortConfig, data]);

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });
  };

  return (
    <table className="table table-hover table-bordered">
      <thead className="table-light">
        <tr>
          {columnsWithDefault.map((col, index) => (
            <th
              key={index}
              className="p-3"
              onClick={() => col.sort !== "none" && handleSort(col.accessor)} // Only sort if column is not marked as 'none'
              style={{ cursor: col.sort !== "none" ? "pointer" : "default" }}
            >
              {col.header}
              {sortConfig.key === col.accessor && (
                <FontAwesomeIcon
                  icon={sortConfig.direction === "asc" ? faSortUp : faSortDown}
                  style={{ marginLeft: "8px", cursor: "pointer" }}
                />
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columnsWithDefault.map((col, colIndex) => (
              <td key={colIndex} className="p-3">
                {col.render
                  ? col.render(row[col.accessor], row)
                  : row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
