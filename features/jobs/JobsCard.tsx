// React , Next js packages
import React from "react";
// Third party packages
import InfiniteScroll from "react-infinite-scroll-component";
// Custom packages
// import jobsData from "@/data/jobsData";

function JobsCard(props: any) {
  //** props --- components */
  const { jobsData } = props;
  return (
    <div>
      <div className="grid desktop:grid-cols-3 gap-6 mx-4 sm:mx-0 desktop:mx-0 laptop:mx-0 cursor-pointer   ">
        {jobsData.map((data: any, index: number) => (
          <div
            className="rounded-xl border-[1px] border-solid border-[#E5E6E9] relative hover:scale-95 transition duration-100 ease-out hover:ease-out  overflow-hidden shadow-[0_1px 4px rgba(30, 40, 58, 0.04)]"
            key={index}
          >
            <img
              className="object-cover"
              src={data.image === null ? "/images/jobs.jpg" : data.image}
              alt="recruits_image"
            />
            {/* bookmark icon */}
            <div className="absolute top-5 right-4">
              {data.bookmark === false ? (
                <img src="/images/bookmark_light.svg" alt="bookmark_icon" />
              ) : (
                <img src="/images/bookmark.svg" alt="bookmark_icon" />
              )}
            </div>
            <div className="px-5 pt-[10px] flex flex-col divide-y">
              <div className="pb-3">
                <h4 className="font-bold text-xl text-gray1 ">
                  {data.title.length > 17
                    ? data.title.slice(0, 17) + "..."
                    : data.title}
                </h4>
                <p className="text-gray2 text-xs">{data.appeal}</p>
              </div>

              <div className="flex flex-col py-3">
                <div className="flex flex-row justify-between ">
                  {/* company name */}
                  <div className="flex flex-row items-center">
                    <img
                      src={data.company.logo}
                      className="h-6 w-6 object-cover border-[1px] border-solid border-[#E5E6E9] rounded"
                      alt="company_logo"
                    />
                    <div className="text-base font-bold text-gray1 ml-2">
                      {data.company.name}
                    </div>
                  </div>
                  {/* rating */}
                  <div className="flex flex-row items-center">
                    {data.company.grade > 0 ? (
                      <img
                        src="/images/icon_star.svg"
                        className="h-3 w-3 ml-[10px]"
                        alt="ratings"
                      />
                    ) : (
                      <img
                        src="/images/icon_star_light.svg"
                        className="h-3 w-3 ml-[10px]"
                        alt="ratings"
                      />
                    )}

                    <div className="text-base font-bold text-gray1 ml-1">
                      {data.company.grade}({data.company.grade_count})
                    </div>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-gray2 pt-2">
                  {data.review.length > 26
                    ? data.review.slice(0, 25) + "..."
                    : data.review}
                </h4>
              </div>
              <div className="flex flex-row items-center py-3">
                <img src="/images/icon-won.svg" />
                <p className="text-sm font-bold text-gray1 ml-2">
                  취업 축하금: 200만원{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsCard;
