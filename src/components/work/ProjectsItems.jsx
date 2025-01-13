import React from 'react';
import PropTypes from 'prop-types';

const ProjectsItems = ({ item }) => {
    return (
        <div className="work__card">
            <img src={item.image} alt={item.title} className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <a href={item.demoLink} className="work__button" target="_blank" rel="noopener noreferrer">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    );
};

ProjectsItems.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        demoLink: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectsItems;