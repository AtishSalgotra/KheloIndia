import { db } from "@/config/firebase";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
// import FormOne from "../Apply/FormOne";
// import FromTwo from "../Apply/FromTwo";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function ViewForm({ applicationId }) {
  const [totalScore, setTotalScore] = React.useState(0);

  const [isAdmin, setAdmin] = useState(false);

  const [parameteres, setParameters] = React.useState([]);
  const [loaded, setLoaded] = useState(false);

  const { data: session, status } = useSession();

  let count = 0;

  const stepTwoParameters = [
    "costEffectiveness",
    "environmentalImpact",
    "communitySupport",
    "landClearance",
    "state",
    "technologyIntegration",
    "multiSportFacility",
    "safetyMeasures",
    "currentInfrastructure",
    "accessibility",
    "futureNeeds",
    "overdueProject",
    "facilitySize",
    "totalScore",
    "longTermSustainability",
    "sport",
    "location",
  ];

  useEffect(() => {
    async function getdata() {
      await getDoc(doc(db, "applications", applicationId))
        .then((doc) => doc.data())
        .then((data) => {
          if (
            session.user.email === data.admin ||
            session.user.email === data.applicant
          ) {
            setLoaded(true);

            if (session.user.email === data.admin) {
              setAdmin(true);
            }

            let applicationData = data.applicationData;

            setTotalScore(applicationData.totalScore || 0);

            console.log(applicationData.totalScore);

            // console.log("asdfa", applicationData);

            for (const key in applicationData) {
              document.querySelectorAll(`[name=${key}]`).forEach((tag) => {
                tag.value = applicationData[key];
              });
            }
            let tempArray = [];
            for (const key in applicationData) {
              tempArray.push({
                parameter: key,
                value: applicationData[key],
              });
            }
            setParameters(tempArray);
            // console.log(parameteres);
          } else {
            // alert("please sign in as admin");
            console.log("hello dost nahi chal raha");
          }
        });
      // .then((applicationData) => {});
    }

    getdata();
  }, []);

  async function acceptApplication(e) {
    e.preventDefault();
    await setDoc(
      doc(db, "applications", applicationId),
      { status: "accepted" },
      { merge: true }
    ).then(alert("accepted"));
  }
  async function rejectApplication(e) {
    e.preventDefault();
    await setDoc(
      doc(db, "applications", applicationId),
      { status: "rejected" },
      { merge: true }
    ).then(alert("rejected"));
  }

  return (
    <form
      className="container mx-auto"
      onSubmit={(e) => {
        formSubmit(e);
      }}
    >
      {loaded && (
        <div className="">
          {isAdmin && (
            <div className="flex w-full flex-wrap items-center gap-12 mt-4">
              <div className="flex items-center font-bold text-xl">
                {!loaded ? "total Score" : "total Score = " + totalScore + ""}
              </div>
              <button
                className="btn btn-success"
                onClick={(e) => {
                  acceptApplication(e);
                }}
              >
                {" "}
                Accept
              </button>
              <button
                className="btn btn-error"
                onClick={(e) => {
                  rejectApplication(e);
                }}
              >
                {" "}
                Reject
              </button>
            </div>
          )}
          {/* {applicationData ? (
          <FormOne latitude={latitude} longitude={longitude} step={1} />
        ) : (
          "Loading.........."
        )}
        {applicationData ? <FromTwo step={2} /> : ""} */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>SR</th>
                  <th>Parameter Name</th>
                  <th>Parameter Value</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {isAdmin &&
                  loaded &&
                  parameteres.map((parameter, index) => {
                    console.log(index);
                    return (
                      <tr key={parameter + index}>
                        <th> {index + 1} </th>
                        <td>{parameter.parameter}</td>
                        <td>{parameter.value}</td>
                      </tr>
                    );
                  })}

                {/* if not admin */}
                {loaded &&
                  parameteres.map((parameter, index) => {
                    if (stepTwoParameters.indexOf(parameter.parameter) >= 0) {
                      console.log("hello");
                      return null;
                    } else {
                      return (
                        <tr key={parameter + index}>
                          <th> {(count += 1)} </th>
                          <td>{parameter.parameter}</td>
                          <td>{parameter.value}</td>
                        </tr>
                      );
                    }
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </form>
  );
}
