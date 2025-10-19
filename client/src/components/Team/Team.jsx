import React from "react";
import './Team.css'

const Team = () => {
  return (
    <section className="t-wrapper" id="team">
      <div className="paddings innerWidth flexCenter t-container">
        {/*left side*/}
        <div className="paddings innerWidth flexColStart t-left">
          <span className="orangeText">מי אנחנו</span>
          <span className="primaryText">תכירו את הצוות של</span>
          <span className="primaryText"> EquityNest</span>{" "}
          <span className="flexCenter">Website Made By <br/> ___Waseem___</span>
        </div>
        {/*right side*/}
        <div className="t-right">
          <div className="team-member">
          <img src="./person.png" alt="Omar" />
            <span className="flexCenter secondaryText">XXXXXXX<br/> מנכ"ל</span>
          </div>
          <div className="team-member">
          <img src="./Waseem.png" alt="Waseem" />
          <span className="flexCenter secondaryText">וסים סעדי <br/> סמנכ"ל טכנולוגיה</span>

          </div>
          <div className="team-member">
          <img src="./person.png" alt="Bashar" />
          <span className="flexCenter secondaryText">XXXXXXX<br/> סמנכ"ל כספים</span>
          </div>
          <div className="team-member">
          <img src="./person.png" alt="Abed" />

            <span className="flexCenter secondaryText">XXXXXXX<br/> סמנכ"ל שיווק ומכירות</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;