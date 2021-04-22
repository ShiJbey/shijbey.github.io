import React from 'react';
import PropType from 'prop-types';
import { Table, Button } from 'react-bootstrap';

const PublicationTable = ({ publications }) => (
  <Table striped bordered hover className="bg-white shadow">
    <thead>
      <tr>
        <th>Year</th>
        <th>Title</th>
        <th>Download</th>
      </tr>
    </thead>
    <tbody>
      {publications.map((pub, index) => (
        <tr key={`pub_entry_${index}`}>
          <td>{pub.year}</td>
          <td>{pub.title}</td>
          <td>
            <a href={pub.url} style={{ color: 'white', textDecoration: 'none' }}>
              <Button
                variant="primary"
                style={{ width: '100%', color: 'white', margin: 'auto' }}
                className="m-auto"
              >
                <i className="fas fa-download" />
                Download
              </Button>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

PublicationTable.propTypes = {
  publications: PropType.arrayOf(PropType.object).isRequired,
};

export default PublicationTable;
