import { useNavigate } from "react-router-dom";
import "./About.css";

export default function About() {
  const navigateTo = useNavigate();

  const navToHome = function () {
    navigateTo("/");
  };

  const navToTech = function () {
    navigateTo("/tech-about");
  };

  return (
    <div className="about-main">
      <div className="about-controls">

      <button onClick={navToHome} className="btn btn__back">
        Back to Home
      </button>
      <button onClick={navToTech} className="btn btn__back">
        Tech Info
      </button>
      </div>
      <h1 className="about-title">About this Project</h1>
      <div className="flex-cards">
        <div className="idea flex-card">
          <h2 className="card-title">Project Idea</h2>
          <p className="card-text">
            The idea is to repeat as much as possible the functionality of the
            well-known Monobank. But mainly it is for learning and mastering new
            technologies
          </p>
        </div>
        <div className="idea flex-card">
          <h2 className="card-title">Author</h2>
          <p className="card-text">
            <b>Vitaliy Havrona</b>
            <br />
            <span>How You Can Contact me?</span> <br />
            <b style={{ fontWeight: 900, color: "#222" }}>Telegram:</b>
            <a href="https://t.me/v_havrona"> Message to me</a>
            <br />
            <b style={{ fontWeight: 900, color: "#222" }}>Gmail:</b>
            vitaliyhavrona@gmail.com
            <br />
            <b style={{ fontWeight: 900, color: "#222" }}>Phone:</b>
            <a href="tel: 093462774"> 093-462-77-74</a>
            <br />
          </p>
        </div>
        <div className="idea flex-card">
          <h2 className="card-title">Source</h2>
          <p className="card-text">
            <h4>GitHub Links</h4>

            <a href="https://github.com/Xavtso/mono-lite-front">
              Mono Lite (Frontentd)
            </a>
            <br />
            <a href="https://github.com/Xavtso/mono_lite_backend">
              Mono Lite (Backend)
            </a>
          </p>
        </div>

        <div className="idea flex-card">
          <h2 className="card-title">Client Technologies</h2>
          <p className="card-text">
            For client side i have used React.js,Jest, few helpfull npm packages
            and deploy it to Azure Static App
          </p>
        </div>
        <div className="idea flex-card">
          <h2 className="card-title">Backend Technologies</h2>
          <p className="card-text">
            For server side i have used Node.js framework - Nest.js, Azure SQL
            database and ORM for it - Sequelize. As main language i use
            TypeScript and in total i have deployed it to Azure web-app
          </p>
        </div>
        <div className="idea flex-card">
          <h2 className="card-title">Functionality</h2>
          <p className="card-text">
            In this mini app you can get loans or make deposits,simulate real
            actions like deposit or expense,for every expense you will have 2%
            cashback,make transfers between users, or collect money in piggy
            bank. Little more you can see in work with that
          </p>
        </div>
      </div>
   
    </div>
  );
}
