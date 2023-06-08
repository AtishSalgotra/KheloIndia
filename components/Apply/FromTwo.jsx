import React from "react";

export default function FromTwo({ step }) {
  const states = [
    "andaman&nicobar",
    "andhrapradesh",
    "arunachalpradesh",
    "assam",
    "bihar",
    "chandigarh",
    "chhattisgarh",
    "dadra&nagarhaveli",
    "delhi",
    "goa",
    "gujarat",
    "haryana",
    "himachalpradesh",
    "jammu&kashmir",
    "jharkhand",
    "karnataka",
    "kerala",
    "ladakh",
    "lakshadweep",
    "madhyapradesh",
    "maharashtra",
    "manipur",
    "meghalaya",
    "mizoram",
    "nagaland",
    "odisha",
    "puducherry",
    "punjab",
    "rajasthan",
    "sikkim",
    "tamilnadu",
    "telangana",
    "tripura",
    "uttarpradesh",
    "uttarakhand",
  ];

  const sports = [
    "rowing",
    "athletics",
    "cycling",
    "weightlifting",
    "archery",
    "judo",
    "boxing",
    "shooting",
    "wrestling",
    "hockey",
    "table tennis",
    "swimming",
    "badminton",
    "fencing",
  ];

  return (
    <div
      style={{
        display: step === 2 ? "block" : "none",
      }}
    >
      <h1 className="uppercase text-3xl font-bold w-full text-center py-4">
        Step-2
      </h1>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            Land Clearance
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="landClearance"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0.2">Land title is clear</option>
          <option value="0.0">Forest Land</option>
          <option value="0.0">Low lying land</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The state for which the infrastructure is proposed
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="state"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          {states.map((state, index) => {
            return (
              <option value={state} key={state + index}>
                {" "}
                {state}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The sport for which the infrastructure is proposed
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="sport"
        >
          <option defaultValue value="0">
            Select Option
          </option>

          {sports.map((sport, index) => {
            return (
              <option value={sport} key={sport + index}>
                {sport}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The status of the current infrastructure
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="currentInfrastructure"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0.3">Inadequate</option>
          <option value="0.6">Satisfactory</option>
          <option value="0.9">Excellent</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The anticipated future needs for infrastructure
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="futureNeeds"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0.4">Expansion Required</option>
          <option value="0.8">Upgradation Required</option>
          <option value="0.9">New Facilities Required</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The geographical location of the proposed project
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="location"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="1">City Center</option>
          <option value="0.7">Suburban Area</option>
          <option value="0.4">Rural Area</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The size or capacity of the proposed facility
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="facilitySize"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0.3">Small (up to 100 users)</option>
          <option value="0.7">Medium (100-500 users)</option>
          <option value="0.9">Large (500+ users)</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The accessibility of the facility for users
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="accessibility"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0.9">High</option>
          <option value="0.6">Medium</option>
          <option value="0.3">Low</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The potential environmental impact of the project
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="environmentalImpact"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0.9">Low</option>
          <option value="0.5">Moderate</option>
          <option value="0.2">High</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The level of support from the local community
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="communitySupport"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0.9">Strong</option>
          <option value="0.6">Moderate</option>
          <option value="0.3">Weak</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The sustainability of the proposed project
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="longTermSustainability"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0.9">High</option>
          <option value="0.6">Medium</option>
          <option value="0.2">Low</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The cost-effectiveness of the infrastructure
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="costEffectiveness"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0.9">Cost-effective</option>
          <option value="0.6">Moderately cost-effective</option>
          <option value="0.3">Not cost-effective</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The inclusion of safety measures in the proposal
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="safetyMeasures"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The ability to support multiple sports in the facility
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="multiSportFacility"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0.9">Yes</option>
          <option value="0.3">No</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            The integration of technology in the infrastructure
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="technologyIntegration"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0.8">High</option>
          <option value="0.6">Medium</option>
          <option value="0.4">Low</option>
        </select>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <label className="label w-full">
          <span className="label-text font-medium text-lg uppercase">
            Wehter the proponent has overdue projects
          </span>
        </label>
        <select
          type="number"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          name="overdueProject"
        >
          <option defaultValue value="0">
            Select Option
          </option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
      </div>
    </div>
  );
}
