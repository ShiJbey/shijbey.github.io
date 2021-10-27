import * as React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({
  image,
  imageAlt,
  title,
  description,
  links,
}) => (
  <Card style={{ height: 'fit-content' }} className="shadow">
    <Card.Img variant="top" src={image} alt={imageAlt} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      {links.map((link, index) => (
        <div key={`project_${title}_${index}`} className="my-2">
          <a href={link.url} style={{ color: 'white', textDecoration: 'none' }}>
            <Button
              variant="primary"
              style={{ width: '100%', color: 'white', margin: 'auto' }}
              className="m-auto"
            >
              <i className={`${link.icon} mx-2`} />
              {link.text}
            </Button>
          </a>
        </div>
      ))}
    </Card.Footer>
  </Card>
);

ProjectCard.defaultProps = {
  image: '',
  imageAlt: '',
  links: [],
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default ProjectCard;
