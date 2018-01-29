import React from 'react';

const Skills = () => {
    let data = [{
        title: 'Frontend',
        image: "client/components/images/frontEnd.png",
        summary: 'Implement responsive designs for web applications.I have experience with Adobe Products: Photoshop, Illistrator',
        tech:'Javascript, React.Js, Redux.Js, CSS3, HTML5, JQuery, Adobe Photoshop,  Adobe Illistrator'
    },
    {
        title: 'Backend',
        image: 'client/components/images/backEnd.png',
        summary: 'Create models.',
        tech:'Node.js,Python, SQL, PostgreSQL, MongoDB, Sockets, Mocha'
    }
        ];
    return (
        <div className="flex-it">
            {
                data.map(info => {
                    return (
                        <div key={info.title} className= "half">
                            <h2>{info.title}</h2>
                            <img className="min-image center" src= {info.image} />
                            <p>{info.summary}</p>
                            <p>Tech:
                                <br />
                                {info.tech}
                            </p>
                        </div>
                    )
                })
            }
        </div>
        );
};
export default Skills;