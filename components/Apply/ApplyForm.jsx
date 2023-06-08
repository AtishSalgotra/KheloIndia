import { app, db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import FormOne from "./FormOne";
import FromTwo from "./FromTwo";
import { data } from "@/data";
import { Router, useRouter } from "next/router";

export default function ApplyForm() {
  const router = useRouter();

  const [step, setStep] = React.useState(1);

  const [longitude, setLongitude] = React.useState("");
  const [latitude, setLatitude] = React.useState("");

  const { data: session, status } = useSession();

  const [applicationData, setApplicationData] = React.useState({});
  let [applicationStatus, setApplicationStatus] = React.useState("waiting");

  let [hasStadium, setHasStadium] = React.useState(false);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    const loadMapScript = () => {
      const googleMapsScript = document.createElement("script");
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      window.document.body.appendChild(googleMapsScript);
      googleMapsScript.addEventListener("load", initializeMap);
    };

    const initializeMap = () => {
      const mapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 12,
      };
      const map = new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );

      const service = new window.google.maps.places.PlacesService(map);

      const request = {
        location: new window.google.maps.LatLng(latitude, longitude),
        radius: 5000,
        type: "stadium",
      };

      service.nearbySearch(request, (results, status) => {
        console.log(results);
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          if (results.length > 0) {
            hasStadium = false;
            setHasStadium(hasStadium);
          }
        }
      });
    };

    loadMapScript();
  }, [latitude]);

  async function formSubmit(e) {
    e.preventDefault();

    await e.target.querySelectorAll("input[name]").forEach((tag) => {
      let key = tag.getAttribute("name");
      let value = tag.value;

      applicationData[key] = value;
    });

    await e.target.querySelectorAll("select[name]").forEach((tag) => {
      let key = tag.getAttribute("name");
      let value = tag.value;

      applicationData[key] = value;
    });

    let state = applicationData.state;
    let sport = applicationData.sport;
    let sportCount = 0;

    for (const key in data) {
      if (data[key].state == state) {
        if (sport == data[key].priority1) {
          sportCount = 0.15 * 1;
        } else if (sport == data[key].priority2) {
          sportCount = 0.15 * 0.7;
        } else if (sport == data[key].priority3) {
          sportCount = 0.15 * 0.5;
        } else {
          sportCount = 0.15 * 0.2;
        }

        // console.log(sportCount);
      }
    }

    let landClearance = parseFloat(applicationData.landClearance);
    let accessibility = parseFloat(applicationData.accessibility) * 0.07;
    let communitySupport = parseFloat(applicationData.communitySupport) * 0.05;
    let costEffectiveness = parseFloat(applicationData.costEffectiveness) * 0.07;
    let currentInfrastructure = parseFloat(applicationData.currentInfrastructure) * 0.05;
    let environmentalImpact = parseFloat(applicationData.environmentalImpact) * 0.06;
    let facilitySize = parseFloat(applicationData.facilitySize) * 0.04;
    let futureNeeds = parseFloat(applicationData.futureNeeds) * 0.06;
    let location = parseFloat(applicationData.location) * 0.09;
    let longTermSustainability = parseFloat(applicationData.longTermSustainability) * 0.05;
    let multiSportFacility = parseFloat(applicationData.multiSportFacility) * 0.04;
    let overdueProject = parseFloat(applicationData.overdueProject) * 0.20;
    let safetyMeasures = parseFloat(applicationData.safetyMeasures) * 0.04;
    let technologyIntegration = parseFloat(applicationData.technologyIntegration) * 0.03;
    let players = parseInt(applicationData.players);
    if (players < 5) {
      players = 0.6;
    } else if (players < 5 && players < 10) {
      players = 0.7;
    } else if (players > 10 && players < 15) {
      players = 0.8;
    } else {
      players = 1;
    }

    applicationData.totalScore = 0;

    if (hasStadium == false && landClearance === 0.2) {
      applicationData.totalScore =
        accessibility +
        communitySupport +
        costEffectiveness +
        currentInfrastructure +
        environmentalImpact +
        facilitySize +
        futureNeeds +
        location +
        longTermSustainability +
        multiSportFacility +
        overdueProject +
        safetyMeasures +
        technologyIntegration +
        sportCount;

      setApplicationData(applicationData);

      applicationStatus = "waiting";
      setApplicationStatus(applicationStatus);

      // console.log("accept");
    } else {
      applicationStatus = "rejected";
      setApplicationStatus(applicationStatus);
      // console.log("reject");
    }

    setApplicationData(applicationData);

    // console.log(applicationStatus);

    await addDoc(collection(db, "applications"), {
      applicant: session.user.email,
      status: applicationStatus,
      admin: "kheloindiaproject@gmail.com",
      applicationData,
    }).then(() => {
      alert("submitted Successfully");
      router.push("/");
    });
  }

  return (
    <form
      className="container mx-auto"
      onSubmit={(e) => {
        formSubmit(e);
      }}
    >
      <div id="map" className="absolute hidden"></div>
      <FormOne
        latitude={latitude}
        longitude={longitude}
        step={step}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
      />
      <FromTwo step={step} />

      <div className="w-full py-4 flex gap-4 flex-wrap items-center justify-center">
        {step === 2 ? (
          <button
            className="btn btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              if (step === 2) {
                setStep(1);
              }
            }}
          >
            Back
          </button>
        ) : (
          ""
        )}
        <button
          className="btn btn-primary"
          onClick={(e) => {
            if (step === 1) {
              e.preventDefault();
              // console.log(2);
              setStep(2);
            } else if (step === 2) {
              return true;
            }
          }}
        >
          {step === 1 ? "Next" : "Submit"}
        </button>
      </div>
    </form>
  );
}
