import { useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { BsArrowReturnLeft } from "react-icons/bs";

const Demo = () => {

  const [article, setArticle] = useState({
    url : '',
    summary : ''
  })

  const handleSubmit = async(event) => {
    alert('Submitted')
  }

  return (
    <section className="w-full mt-16 max-w-xl">
      <div className="w-full flex flex-col gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({
              ...article , url : e.target.value
            })}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <BsArrowReturnLeft />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
