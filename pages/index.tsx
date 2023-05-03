// React, Next js packages
import React, { useState, useEffect } from "react";
// Third party packages
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import InfiniteScroll from "react-infinite-scroll-component";
// Custom packages
import Layout from "@/features/common/Layout";
import JobsCard from "@/features/jobs/JobsCard";
import CardSkeleton from "@/features/common/CardSkeleton";

export default function Home() {
  const [jobsData, setJobsData] = useState<any[]>([]);
  const [loader, setLoader] = useState(false);

  //** api integration */
  const getData = async () => {
    setLoader(true);
    const pageNumber = Math.ceil(jobsData.length / 9) + 1;
    const res = await fetch(
      `https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=${pageNumber}`
    );
    const resData = await res.json();
    const apiRes = resData?.data?.recruits;
    const mergeData = [...jobsData, ...apiRes];
    // console.log(data)
    setJobsData(mergeData);
    setLoader(false);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(jobsData);

  const fetchMoreData = () => {
    getData();
  };

  return (
    <div>
      <Layout title="채용 정보와 기업 리뷰를 한 번에! | 잡플래닛">
        {/* main section */}
        <div className=" container  desktop:container desktop:mx-auto laptop:container laptop:mx-auto tablet:container tablet:mx-auto my-10 mx-auto">
          {/* list of jobs */}
          <InfiniteScroll
            dataLength={jobsData.length}
            next={fetchMoreData}
            hasMore={jobsData.length < 36} // removed has===true condition for set up infinite scroll limit
            loader={loader === true ? <CardSkeleton /> : null}
          >
            <JobsCard jobsData={jobsData} fetchData={getData} />
          </InfiniteScroll>
        </div>
      </Layout>
    </div>
  );
}
