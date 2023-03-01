import { useState } from "react";
import img1 from "../../public/assets/img/blog/blog-post-1.jpg";
import img2 from "../../public/assets/img/blog/blog-post-2.jpg";
import img3 from "../../public/assets/img/blog/blog-post-3.jpg";
import img4 from "../../public/assets/img/blog/blog-post-4.jpg";
import img5 from "../../public/assets/img/blog/blog-post-5.jpg";
import img6 from "../../public/assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "我决定放弃Tailwind css,磨刀霍霍向headless UI",
      commentor: "LI ",
      date: "21 April 2022",
      tag: `Tailwind css, headless UI, 前端, design`,
      description1:
        "按照事情的发展顺序来说应该先有Tailwind css然事实上确实如此,前端走过了内联css到组件样式分离再到内联css,.",
      description2:
        "作为后端开发人员，bootstrap可以退休了. ",
      description3:
        `从组件视觉上看，headless UI确实有优势，headless UI将组件与样式解耦，增加了颗粒度，
        从代码整洁度上看，headless UI和Tailwind css样式的确非常臃肿，
        从开发成本上看，无疑增加了开发成本，需要ui设计师和前端打灰师合作完成，
        从用户体验上看，1，需要封装，2，通宵都写不完
        `,
      description4:
        "为了增加用户体验，实现创意组件，冲了.",
    },
    {
      id: 2,
      img: img2,
      title: "我决定保留headless UI,将主力部队转向Chakra-UI",
      commentor: "LI ",
      date: "13 June 2022",
      tag: `Tailwind css, headless UI, 前端, Chakra-UI`,
      description1:
        "不说了啊，Chakra-UI太香了，小产品还得Chakra-UI",
      description2:
        "作为前端开发人员，headless UI可以撤退到后方休整了. ",
      description3:
        `组件化，非常适合低代码开发UI技术选型，API查找方便，开箱即用，响应式就不说这年头没响应式就别选了`,
      description4:
        "冲了.",
    },
    // {
    //   id: 3,
    //   img: img3,
    //   title: "我决定保留headless UI,将主力部队转向Chakra-UI",
    //   commentor: "LI ",
    //   date: "26 July 2022",
    //   tag: `Tailwind css, headless UI, 前端, Chakra-UI`,
    //   description1:
    //     "不说了啊，Chakra-UI太香了，小产品还得Chakra-UI",
    //   description2:
    //     "作为前端开发人员，headless UI可以撤退到后方休整了. ",
    //   description3:
    //     `组件化，非常适合低代码开发UI技术选型，API查找方便，开箱即用，响应式就不说这年头没响应式就别选了`,
    //   description4:
    //     "冲了.",
    // },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
