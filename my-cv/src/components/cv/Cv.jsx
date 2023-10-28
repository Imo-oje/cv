import "./cv.css";

function Cv() {
  return (
    <>
      <div className="cv">
        <header>
          <div>
            <h1 className="name">John Doe</h1>
            <h3 className="profession">Professional Web developer</h3>
          </div>
          <ul>
            <li className="phone">phone (123) 4567899</li>
            <li className="phone">Email: info@mycv.com</li>
            <li className="phone">Website: www.mycv.com</li>
            <li className="phone">LinkedIn: linkedin.com/mycv</li>
            <li className="phone">
              Address: <address>1287 Marshville Road, Alabama</address>
            </li>
          </ul>
        </header>
        {/* summary */}
        <section className="about">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            molestiae at eaque harum culpa magni, ratione est deleniti aliquam
            quasi omnis doloribus minima quia quod veritatis iure perferendis
            voluptatem, maxime veniam nesciunt itam dolor cumque cum facilis
            corporis magnam debitis. Recusandae.
          </p>
        </section>
        <section className="experience">
          <h2>Work Experience</h2>
          <div>
            <h3>Professional Engineer</h3>
            <span className="tag-line">Google, 6yrs of experience</span>
            <span className="muted">Feb 2022 - Apr 2023 . 1yr 3 mos</span>
            <span className="muted">United States . remote</span>
            <ul>
              <li>
                &#8226; Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Totam nobis dicta nihil asperiores recusandae repellendus dolor
                quo blanditiis dolorum architecto!
              </li>
              <li>
                &#8226; Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Dolorum debitis atque consequatur deleniti consectetur et
                quia aspernatur quasi eius!
              </li>
            </ul>
          </div>
          <div>
            <h3>Professional Engineer</h3>
            <span className="tag-line">Google, 6yrs of experience</span>
            <span className="muted">Feb 2022 - Apr 2023 . 1yr 3 mos</span>
            <span className="muted">United States . remote</span>
            <ul>
              <li>
                &#8226; Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Totam nobis dicta nihil asperiores recusandae repellendus dolor
                quo blanditiis dolorum architecto!
              </li>
              <li>
                &#8226; Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Dolorum debitis atque consequatur deleniti consectetur et
                quia aspernatur quasi eius!
              </li>
            </ul>
          </div>
        </section>
        {/* skills */}
        <section className="skills">
          <h2>skills</h2>
          <ul>
            <li>marketing</li>
            <li>github</li>
            <li>marketing</li>
            <li>selling</li>
            <li>mentorship</li>
            <li>mentorship</li>
            <li>javaScript</li>
            <li>ngyujky</li>
            <li>javaScript</li>
            <li>sdcsd</li>
            <li>javaScript</li>
            <li>mentorship</li>
            <li>dsfvdc </li>
            <li>mentorship</li>
            <li>asdc</li>
            <li>mentorship</li>
            <li>javaScript</li>
            <li>mentorship</li>
            <li>asdc as</li>
            <li>mentorship</li>
            <li>yio,jh</li>
            <li>dghndg</li>
            <li>javaScript</li>
          </ul>
        </section>
        {/* Education */}
        <section className="education">
          <h2>Education</h2>
          <div>
            <h3>University of Benin, Benin city</h3>
            <span className="course">
              Bachelor of Technology - BTech, Computer Science
            </span>
            <span className="muted">2022</span>
          </div>
          <div>
            <h3>University of Benin, Benin city</h3>
            <span className="course">
              Bachelor of Technology - BTech, Computer Science
            </span>
            <span className="muted">2022</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cv;
