import { useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { BsArrowReturnLeft } from "react-icons/bs";

import {useLazyGetSummaryQuery} from '../services/article'

const Demo = () => {

  const [article, setArticle] = useState({
    url : '',
    summary : ''
  })

  const [getSummary , { error , isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async(event) => {

    event.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      // update state and local storage
      setArticle(newArticle);
      console.log(newArticle)
    }
    
    console.log(article)
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
