import { logo } from "../assets";

import { AiFillGithub } from "react-icons/ai";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/AbirDoesFrontend/ai-summarizer")
          }
          className="black_btn flex items-center"
        >
          <AiFillGithub className="mr-2" size={25} />
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Tired of spending countless hours reading lengthy articles? Look no
        further! SummarAIze is your ultimate solution for extracting the essence
        of any text, providing you with concise and accurate summaries in a
        matter of seconds.
      </h2>
    </header>
  );
};

export default Hero;
