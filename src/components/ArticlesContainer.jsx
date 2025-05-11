import imgArticle01 from "/images/image-retro-pcs.jpg";
import imgArticle02 from "/images/image-top-laptops.jpg";
import imgArticle03 from "/images/image-gaming-growth.jpg";
import { Article } from "./Article";

export const ArticlesContainer = () => {
  return (
    <section className="md:flex md:justify-between md:flex-wrap md:gap-10 mt-6">
      <Article
        image={imgArticle01}
        number={"01"}
        title={"Reviving Retro PCs"}
        description={"What happens when old PCs are given modern upgrades?"}
      />
      <Article
        image={imgArticle02}
        number={"02"}
        title={"Top 10 Laptops of 2022"}
        description={"Our best picks for various needs and budgets."}
      />
      <Article
        image={imgArticle03}
        number={"03"}
        title={"The Growth of Gaming"}
        description={"How the pandemic has sparked fresh opportunities."}
      />
    </section>
  );
};
