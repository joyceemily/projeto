import React from "react";
import "./Home.css"
 import img from "./img/Design sem nome.png"
export const Home = () => {
    return (
        <div className="body">
        <h1>Conheça nossas músicas</h1>
        <h2>Sweater Weather</h2>
     <a href="https://www.youtube.com/watch?v=GCdwKhTtNNw" className="SW">https://www.youtube.com/watch?v=GCdwKhTtNNw</a>
     <h2>Daddy Issues</h2>
     <a href="https://www.youtube.com/watch?v=_lMlsPQJs6U">https://www.youtube.com/watch?v=_lMlsPQJs6U</a>
        <img className="img" src='' alt="" />
        </div>
    );
}