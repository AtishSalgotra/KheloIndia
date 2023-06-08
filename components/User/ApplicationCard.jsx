import Link from "next/link";
import React from "react";

export default function ApplicationCard(props) {
  const bg = (status) => {
    if (status === "accepted") {
      return "success";
    } else if (status === "rejected") {
      return "error";
    } else {
      return "";
    }
  };

  return (
    <div className={`card w-96 shadow-xl ${bg(props.status)}`}>
      <div className="card-body">
        <h2 className="card-title">status : {props.status}</h2>
        <p>{props.applicationID ? props.applicationID : "Application ID"}</p>
        <p> {props.applicantName ? props.applicantName : "Application ID"} </p>
        <div className="card-actions justify-end">
          <Link
            href={`/viewApplication/${props.applicationID}`}
            className="btn btn-secondary"
          >
            View Application
          </Link>
        </div>
      </div>
    </div>
  );
}
