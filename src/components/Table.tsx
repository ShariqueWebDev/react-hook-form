// pages/projectTable.tsx
import React from "react";
import parse from "html-react-parser";

const ProjectTable = () => {
  const htmlContent = `
  <p>Components Key</p>
  <p>&nbsp;</p>
  <table class="min-w-full border-collapse border border-gray-300">
    <thead>
      <tr>
        <th class="border border-gray-300 px-4 py-2">Sl. No.</th>
        <th class="border border-gray-300 px-4 py-2">Description</th>
        <th class="border border-gray-300 px-4 py-2">Material</th>
        <th class="border border-gray-300 px-4 py-2">Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">1</td>
        <td class="border border-gray-300 px-4 py-2">Valve Body</td>
        <td class="border border-gray-300 px-4 py-2">SS 316</td>
        <td class="border border-gray-300 px-4 py-2">1</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">2</td>
        <td class="border border-gray-300 px-4 py-2">End Connector</td>
        <td class="border border-gray-300 px-4 py-2">SS 316</td>
        <td class="border border-gray-300 px-4 py-2">1</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">3</td>
        <td class="border border-gray-300 px-4 py-2">Body Gasket</td>
        <td class="border border-gray-300 px-4 py-2">PTFE</td>
        <td class="border border-gray-300 px-4 py-2">1</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">4</td>
        <td class="border border-gray-300 px-4 py-2">Seat</td>
        <td class="border border-gray-300 px-4 py-2">PEEK</td>
        <td class="border border-gray-300 px-4 py-2">2</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">5</td>
        <td class="border border-gray-300 px-4 py-2">Ball</td>
        <td class="border border-gray-300 px-4 py-2">SS 316</td>
        <td class="border border-gray-300 px-4 py-2">1</td>
      </tr>
      <!-- Add more rows as needed -->
    </tbody>
  </table>
  `;

  const tableData: any = [
    { column: "Part Number", data: "IVFF -1" },
    { column: "Part Number", data: "IVFF -2" },
    { column: "Part Number", data: "IVFF -4" },
    { column: "Part Number", data: "IVFF -5" },
    { column: "Part Number", data: "IVFF -6" },
    { column: "Part Number", data: "IVFF -8" },
    { column: "Part Number", data: "IVFF -14" },
    { column: "Inch", data: "1/16" },
    { column: "Inch", data: "1/8" },
    { column: "Inch", data: "1/4" },
    { column: "Inch", data: "5/16" },
    { column: "Inch", data: "3/8" },
    { column: "Inch", data: "1/2" },
    { column: "Inch", data: "7/8" },
    { column: "mm", data: "1.58" },
    { column: "mm", data: "3.17" },
    { column: "mm", data: "6.35" },
    { column: "mm", data: "7.93" },
    { column: "mm", data: "9.52" },
    { column: "mm", data: "12.70" },
    { column: "mm", data: "22.22" },
  ];

  const groupedData = tableData.reduce((acc: any, item: any) => {
    if (!acc[item.column]) {
      acc[item.column] = [];
    }
    acc[item.column].push(item.data);
    return acc;
  }, {});

  const columns = Object.keys(groupedData);
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Project Components</h1>
      <div className="overflow-x-auto">
        <div>{parse(htmlContent)}</div>
      </div> */}

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-left"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Find the maximum number of rows for rendering */}
            {Array.from({
              length: Math.max(
                ...Object.values(groupedData).map((arr:any) => arr.length)
              ),
            }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={column} className="border border-gray-300 px-4 py-2">
                    {groupedData[column][rowIndex] || "-"}{" "}
                    {/* Show '-' if no data available for that row */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
