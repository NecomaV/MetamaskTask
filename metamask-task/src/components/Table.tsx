import React from 'react'

interface TableProps {
  tableData: {
    name: string;
    email: string;
    profile: string;
  }[];
}

const Table: React.FC<TableProps> = ({ tableData }) => {
  return (
    <div className="table-wrapper">
        <table className="fl-table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Profile</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, index) => {
                return (
                    <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.profile}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
    </div>
    
  );
};

export default Table;
