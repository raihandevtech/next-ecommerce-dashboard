import type { NextPage } from "next";
import EarningCard from "../components/EarningCard";
import Breadcrumbs from "../smallComponents/Breadcrumbs";
import Button from "../smallComponents/Button";
import ExportDate from "../smallComponents/ExportDate";
import PageTop from "../smallComponents/PageTop";

interface ContentType {
  title: string;
  total: string;
  delta: string;
  caption: string;
}

const cardContent: ContentType[] = [
  {
    title: "Total Sells",
    total: "$4431.21",
    delta: "43.3",
    caption: "Compared to April 2021",
  },
  {
    title: "Average order value",
    total: "$2931.21",
    delta: "13.3",
    caption: "Compared to April 2021",
  },
  {
    title: "Total Sells",
    total: "43102",
    delta: "23.3",
    caption: "Compared to April 2022",
  },
];


const Home: NextPage = () => {
  return (
    <main>
      <PageTop>
        <Breadcrumbs />
        <div className="_date_and_btn">
          <ExportDate />
          <Button txt="Export" url="/" color="primary" />
        </div>
      </PageTop>
      <div className="_main_section">
        <div className="_dashboard_card_wrap">
          <div className="row">
            <div className="col-lg-4">
              <EarningCard
                title={cardContent[0].title}
                total={cardContent[0].total}
                delta={cardContent[0].delta}
                caption={cardContent[0].caption}
              />
            </div>
            <div className="col-lg-4">
              <EarningCard
                title={cardContent[1].title}
                total={cardContent[1].total}
                delta={cardContent[1].delta}
                caption={cardContent[1].caption}
              />
            </div>
            <div className="col-lg-4">
              <EarningCard
                title={cardContent[2].title}
                total={cardContent[2].total}
                delta={cardContent[2].delta}
                caption={cardContent[2].caption}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
