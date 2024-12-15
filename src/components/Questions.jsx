import React, { useState } from "react";
import "./question.css";

const Questions = () => {
  const [questions, setQuestions] = useState(false);
  const [questions1, setQuestions1] = useState(false);
  const [questions2, setQuestions2] = useState(false);
  const [questions3, setQuestions3] = useState(false);
  const [questions4, setQuestions4] = useState(false);
  const [questions5, setQuestions5] = useState(false);
  return (
    <div className="questions">
      <button className="btn2" onClick={() => setQuestions(!questions)}>
        {" "}
        What Is Netflix? <h3>{questions ? "x" : "+"}</h3>
        {questions && (
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices.
            <br /> <br />
            You can watch as much as you want, whenever you want, without a
            single ad – all for one low monthly price. There's always something
            new to discover, and new TV shows and movies are added every week!
          </p>
        )}
      </button>

      <button className="btn2" onClick={() => setQuestions1(!questions1)}>
        How much does Netflix cost? <h3>{questions1 ? "x" : "+"}</h3>
        {questions1 && (
          <p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            ₹149 to ₹649 a month. No extra costs, no contracts.
          </p>
        )}
      </button>

      <button className="btn2" onClick={() => setQuestions2(!questions2)}>
        Where can I watch? <h3>{questions2 ? "x" : "+"}</h3>
        {questions2 && (
          <p>
            {" "}
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles.
            <br /> <br />
            You can also download your favourite shows with the iOS or Android
            app. Use downloads to watch while you're on the go and without an
            internet connection. Take Netflix with you anywhere.
          </p>
        )}
      </button>
      <button className="btn2" onClick={() => setQuestions3(!questions3)}>
        {" "}
        How do I cancel? <h3>{questions3 ? "x" : "+"}</h3>
        {questions3 && (
          <p>
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </p>
        )}
      </button>
      <button className="btn2" onClick={() => setQuestions4(!questions4)}>
        {" "}
        What can I watch an Netflix? <h3>{questions4 ? "x" : "+"}</h3>
        {questions4 && (
          <p>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </p>
        )}
      </button>
      <button className="btn2" onClick={() => setQuestions5(!questions5)}>
        {" "}
        Is Netflix good for kids?<h3>{questions5 ? "x" : "+"}</h3>
        {questions5 && (
          <p>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and films
            in their own space.<br/><br/> Kids profiles come with PIN-protected parental
            controls that let you restrict the maturity rating of content kids
            can watch and block specific titles you don’t want kids to see.
          </p>
        )}
      </button>
    </div>
  );
};

export default Questions;
