import LightBall from "@/components/shared/Light";
import Title from "@/components/shared/Title";
import React from "react";
import Card from "./card";
import HorizontalScrollCarousel from "@/components/shared/ScrollableCarosule";
import { blogList } from "@/constants/blogList";

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="relative min-h-screen flex flex-col overflow-visible"
    >
      <LightBall
        height="h-[150px] sm:h-[200px]"
        width="w-[150px] sm:w-[200px]"
        blur="blur-[100px] sm:blur-[130px]"
        positionClass="left-0"
      />
      <Title heading="Blogs" />
      <div className="flex gap-6 my-auto px-6 sm:px-12 flex-col md:flex-row  md:px-15">
        {blogList?.map((blog) => (
          <Card key={blog.id} data={blog} />
        ))}
      </div>

      {/* <div className="flex h-48 items-center justify-center">
        <HorizontalScrollCarousel>
          {[1, 2, 3].map((card) => {
            return <Card />;
          })}
        </HorizontalScrollCarousel>
      </div> */}
    </section>
  );
};

export default Blogs;
