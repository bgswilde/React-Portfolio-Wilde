import React from "react";

function ProjectCard(props) {
    const {
        name,
        image,
        description,
        skills,
        deployed,
        github
    } = props;
    return (
        <div className='card my-3'> 
            <div className='row'>
                <div className='col-md-6 col-lg-5 p-4'>
                    <img src={`./assets/images/${image}`} className='img-fluid rounded' alt='...'/>
                    <div className='d-flex justify-content-center'>
                        <a href='https://github.com/bgswilde/thisthat' target='_blank' className='btn btn-primary card-btn my-3'> <i className='devicon-github-original'></i> Check it out on GitHub</a>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <a href='https://this--that.herokuapp.com/' target='_blank' className='btn btn-primary card-btn'><i className='devicon-chrome-plain'></i> Visit Deployed App</a>
                    </div>
                </div>
                <div className='col-md-6 col-lg-7'>
                    <div className='card-body'>
                        <h4 className='card-title'>{`${name}`}</h4>
                        <p className='card-text'>A thought-provoking choice app, displaying THIS or THAT questions for a user to choose from and discuss amongst their friends or debate internally. Built with a team, on which I had the role of concept, design, api routes, and javascript functionality for UX.</p>
                        <h5 className='card-title'>Technologies Used:</h5>
                        <h1 className='fs-1'><i className='devicon-html5-plain'></i> <i className='devicon-css3-plain'></i> <i className='devicon-bootstrap-plain'></i> <i className='devicon-javascript-plain'></i> <i className='devicon-nodejs-plain'></i> <i className='devicon-express-original-wordmark'></i> <i className='devicon-mysql-plain-wordmark'></i> <i className='devicon-sequelize-plain-wordmark'></i> <i className='devicon-handlebars-plain'></i></h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;