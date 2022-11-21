/* The File name: COMP2112-F2022-Assignment2
   Author's name: Xinyu Zhu
   web site name: Assignment2
   file description: the services page of the website */
   
import React from "react";

function Services() {
  return (

<div className="middle-container">
      <div className="skills">
        <h2>My Services.</h2>
        <div className="skill-row">
          <img
            className="codinggif"
            src="https://media2.giphy.com/media/765ccrAiB0g9z6EApL/giphy.gif?cid=ecf05e47vk0wksxyduyp7oyc12fnjbpgfgxzz73m7kijte18&rid=giphy.gif&ct=g"
            alt="Coding.gif"
          />
          <h3>Webpage Designing</h3>
          <p className="skill-desc-1">
            I started learning to code when I was 24 years old because after my
            past working experience in different kinds of career I found that I
            wanted to make something I like my future career. I continue gaining
            a wealth of experience in designing and developing.
          </p>
        </div>
        <div className="skill-row">
          <img
            className="goalimg"
            src="https://media0.giphy.com/media/g4zphWz4eiPsYMB0Gv/giphy.gif?cid=ecf05e47sga80y4tk03gzl9prsqgizdnmmlday15i1ct1dlb&rid=giphy.gif&ct=g"
            alt="goal.img"
          />
          <h3>Webpage Developing</h3>
          <p className="skill-desc-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
            mattis molestie a iaculis. Quis viverra nibh cras pulvinar mattis
            nunc sed blandit libero. Adipiscing diam donec adipiscing tristique
            risus. Tellus integer feugiat scelerisque varius morbi enim. Sed id
            semper risus in hendrerit gravida. Augue ut lectus arcu bibendum at
            varius. Tincidunt dui ut ornare lectus sit amet est. Libero enim sed
            faucibus turpis in eu mi. Mattis pellentesque id nibh tortor id. Sed
            pulvinar proin gravida hendrerit lectus a. Ut tortor pretium viverra
            suspendisse potenti.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default Services;