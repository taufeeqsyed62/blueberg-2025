// app/blog/page.tsx
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description: "Our Recent Projects",
};

interface Blog {
  _id: number;
  mainImage: string;
  title: string;
  metadata: string;
  link: string;
}

const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage: "/images/blog/im1.png",
    title: "Stocklink",
    metadata: "A portfolio website showcasing StockLink token details.",
    link: "https://stocklink.vercel.app/" // Add your URL here
  },
  {
    _id: 2,
    mainImage: "/images/blog/im2.png",
    title: "Global Public School",
    metadata: " A portfolio website presenting school information.",
    link: "https://globalpublicschoolhingoli.vercel.app/" // Add your URL here
  },
  {
    _id: 3,
    mainImage: "/images/blog/im4.png",
    title: "AIT R&D Cell ",
    metadata: "A portfolio website highlighting research and development.",
    link: "https://aitrndcell.vercel.app/" // Add your URL here
  },
  {
    _id: 3,
    mainImage: "/images/blog/im3.png",
    title: "Swiss CBSE School",
    metadata: "A portfolio website featuring school curriculum details.",
    link: "http://swisscbse.com/" // Add your URL here
  },
  {
    _id: 3,
    mainImage: "/images/blog/im7.png",
    title: "StockLinkInvest ",
    metadata: "An investment dashboard for users and administrators.",
    link: "https://stocklinkinvest.vercel.app/login" // Add your URL here
  },
  {
    _id: 3,
    mainImage: "/images/blog/im+.png",
    title: "BlueBerg ",
    metadata: "A portfolio website for a business specializing in website development.",
    link: "https://blueberg.tech/" // Add your URL here
  }
  // Add more blog entries with their respective links...
];

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:shadow-solid-4 transition-all duration-300"
    >
      <div className="relative overflow-hidden rounded-lg shadow-solid-2 dark:shadow-none">
        <Image
          src={blog.mainImage}
          alt={blog.title}
          width={500}
          height={500}
          className="h-60 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
            {blog.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {blog.metadata}
          </p>
        </div>
      </div>
    </a>
  );
};

const BlogPage = async () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;