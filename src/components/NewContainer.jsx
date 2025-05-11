import NewArticle from "./NewArticle";

const NewContainer = () => {
  return (
    <aside className="bg-Very-dark-blue px-[20px] py-[28px] sm:flex  sm:flex-col sm:justify-between lg:h-auto">
      <h1 className="text-Soft-orange font-bold text-4xl">New</h1>
      <NewArticle
        title={"Hydrogen VS Electric Cars"}
        text={"Will hydrogen-fueled cars ever catch up to EVs?"}
      />
      <NewArticle
        title={"The Downsides of AI Artistry"}
        text={
          "What are the possible adverse effects of on-demand AI image generation?"
        }
      />
      <NewArticle
        title={"Is VC Funding Drying Up?"}
        text={
          "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
      />
    </aside>
  );
};

export default NewContainer;
