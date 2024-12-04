// src/components/Table.jsx
const Table = ({ headers, data, actions }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="py-3 px-6 text-left font-medium text-gray-600 border-b"
                >
                  {header}
                </th>
              ))}
              {actions && (
                <th className="py-3 px-6 text-left font-medium text-gray-600 border-b">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                {Object.values(row).map((value, idx) => (
                  <td key={idx} className="py-3 px-6 border-b">
                    {value}
                  </td>
                ))}
                {actions && (
                  <td className="py-3 px-6 border-b">
                    <div className="flex space-x-2">{actions(row)}</div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  