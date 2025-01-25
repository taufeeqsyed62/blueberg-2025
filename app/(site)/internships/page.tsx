import internshipData from "../internships/internshipData.json";

export const metadata = {
  title: "blueberg.tech",
  description: "Explore available internships",
  icons: {
    icon: "/images/logo/circle.png", 
    
  },
  
};

const BlogPage = () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="text-center mb-10">
            <br />
          <h3 className="text-xl font-bold text-gray-600">
          We have limited referrals through our company, so apply as soon as possible.
          </h3>
        </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {internshipData.map((internship, key) => (
              <div
                key={key}
                className="border rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold">{internship.company}</h3>
                <p className="text-sm text-gray-600">{internship.role}</p>
                <p className="text-sm text-gray-600">{internship.batch}</p>
                <a
                  href={internship.apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
