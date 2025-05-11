export const Article = ({ image, number, title, description }) => {
  return (
    <article className="flex md:w-[343px] h-[162px] md:flex-grow my-2 items-center">
      <div className="w-[100px]  flex-none">
        <img src={image} alt={title} />
      </div>
      <div className="pl-6">
        <p className="text-Soft-orange font-bold text-3xl mb-[18px]">
          {number}
        </p>
        <h2 className="font-bold mb-[18px] hover:text-Soft-orange cursor-pointer">
          {title}
        </h2>
        <p className="text-Grayish-blue">{description}</p>
      </div>
    </article>
  );
};
