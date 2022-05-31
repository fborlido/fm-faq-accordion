import React, { useState } from "react";
import pic from "./images/illustration-woman-online-mobile.svg";
import icon from "./images/icon-arrow-down.svg";
import data from "./data.json";
import "./App.scss";

const Question = ({ q, a }) => {
    const [opened, setOpened] = useState(false);
    return (
        <div className={`item ${opened && "item-opened"}`}>
            <div className="apart" onClick={() => setOpened(!opened)}>
                <p className={opened ? "open-question" : ""}>{q}</p>
                <img
                    src={icon}
                    className={`icon ${opened && "icon-opened"}`}
                    alt=""
                />
            </div>
            <p className={`answer`}>{a}</p>
        </div>
    );
};

const App = () => {
    return (
        <main>
            <div className="card">
                <img src={pic} className="pic" alt="" />
                <h1>FAQ</h1>
                <div className="faq">
                    {data.map((item) => (
                        <>
                            <Question q={item.q} a={item.a} />
                            <div className="divider"></div>
                        </>
                    ))}
                </div>
            </div>
            <div class="attribution">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="#">Fred Borlido</a>.
            </div>
        </main>
    );
};

export default App;
