const NewArticle = ({ title, text }) => {
  return (
    <article className="text-white h-[140px] sm:h-auto overflow-hidden sm:overflow-visible border-b-2 border-Grayish-blue py-7 last:border-none ">
      <h2 className="font-bold text-xl mb-2 cursor-pointer hover:text-Soft-orange">
        {title}
      </h2>
      <p className="text-[15px]">{text}</p>
    </article>
  );
};

export default NewArticle;
