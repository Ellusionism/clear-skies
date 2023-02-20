import React from 'react';

function AboutPage() {
  return (
    <div className="form text-center">
      <div className="card">
          <div className="card-body">
            <h5 className="card-title"
            >About ClearSkies</h5>
            <p className="card-text"
            >ClearSkies is a mindfulness and wellness app that encourages users to be more aware of their physical, mental, and emotional health.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title"
            >Technologies used</h5>
            <p className="card-text"
            >HTML, CSS, JavaScript, Express.js, Node.js, React.js, Redux-Sagas, MDBootstrap, Moment.js, Chart.js </p>
            <p className="card-text"
            ></p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title"
            >Created by Mike Schwartz</h5>
            <img src="/images/avatar.jpg" class="rounded-circle mb-3 avatar"
            alt="Avatar" />
          <p class="text-muted">Full-Stack Web Developer</p>
            <a class="btn text-white github-link" href="https://github.com/Ellusionism" role="button">
              <i class="fab fa-github"></i>
            </a>
            <a class="btn text-white linkedin-link" href="https://www.linkedin.com/in/michael-schwartz001/" role="button">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
    </div>
  );
}

export default AboutPage;
