// React, Next js packages
import React, { useState, useEffect } from "react";
// Third party packages
import { slice } from "lodash";
// Custom packages
import Layout from "@/features/common/Layout";
import JobsCard from "@/features/jobs/JobsCard";

export default function Home() {
  const [jobsData, setJobsData] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(5);
  // const initialPosts = slice(post, 0, index);
  //** api integration */
  const getData = () => {
    fetch(`https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest`)
      .then((res) => res.json())
      .then((json) => setJobsData(json))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(jobsData, "check post data");

  return (
    <div>
      <Layout title="채용 정보와 기업 리뷰를 한 번에! | 잡플래닛">
        {/* main section */}
        <div className=" container  desktop:container desktop:mx-auto laptop:container laptop:mx-auto tablet:container tablet:mx-auto my-10 mx-auto">
          {/* list of jobs */}
          <JobsCard jobsData={jobsData} fetchData={getData} />
        </div>
      </Layout>
    </div>
  );
}
