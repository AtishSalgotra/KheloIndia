import React from "react";

export default function FormOne({
  longitude,
  latitude,
  step,
  setLatitude,
  setLongitude,
}) {
  return (
    <div
      style={{
        display: step === 1 ? "block" : "none",
      }}
    >
      <div className="">
        <h1 className="uppercase text-3xl font-bold w-full text-center py-4">
          user details
        </h1>
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              name of applicant
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="applicantName"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              postal address with pincode
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="applicantPincode"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              phone number
            </span>
          </label>

          <input
            type="tel"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="applicantPhone"
          />
        </div>
      </div>

      <div className="">
        <h1 className="uppercase text-3xl font-bold w-full text-center py-4">
          details of project
        </h1>
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Name of the Project i.e. details of Sports Infrastructure to be
              created
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectName"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              location where the Project is proposed to be executed. Full
              address with pin code
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectAddress"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Geo tagging coordinates i.e. Latitude and Longitude
            </span>
          </label>

          <div className="flex w-full gap-4 flex-wrap">
            <input
              type="number"
              value={longitude}
              onChange={(e) => {
                setLongitude(e.target.value);
              }}
              placeholder="longitude"
              className="input input-bordered input-primary w-full max-w-xs"
              name="projectLongitude"
            />
            <input
              type="number"
              value={latitude}
              onChange={(e) => {
                setLatitude(e.target.value);
              }}
              placeholder="latitude"
              className="input input-bordered input-primary w-full max-w-xs"
              name="projectLatitude"
            />
          </div>
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Name and address of nearest Air/Seaport, Railway Station, Bus
              Stand, and distance thereof. Is the location accessible by any
              other mode of transport? If so, specify.
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectNearestPort"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Details of similar Sports Infrastructure facilities available in
              the town/city
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectCityAvailableSports"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Details of Sports Infrastructure facilities available in the
              Sports Complex, where the proposed infrastructure is to be created
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectSports"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Details of Projects already sanctioned under erstwhile USIS and
              Khelo India Scheme and status of execution of those projects.
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectAlreadySantionedUnderUSIS"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Name of Executing Agency engaged for execution of the project
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectExecutingAgency"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Area of land, including the type of land based on land use. (Land
              for which title is not clear, such as forest land, swampy or
              low-lying land, etc., may not be defaultValue).
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectLandArea"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Land ownership (A land clearance certificate showing legal status
              shall be attached with this Application Form).
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectLandOwnership"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Whether the land is readily available for executing the project
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectIsLandReady"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Technical/Engineering aspects
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectTechnicalAspects"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              The proposal should contain a brief history of the project (The
              reason for conceptualization)
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectHistory"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              BOQ/Schedule of Quantity based on the authenticated Schedule of
              Rates applicable in the particular State/UT. All the Non-Schedule
              items must be analyzed on the current market rate authenticated by
              the competent authority of the state/UT (to be interlinked
              digitally with details of measurement)
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectItemRates"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Estimated cost of the project, including evidence of the project,
              costing, quotations, and site-specific schematic plans (developed
              with stakeholder inputs)
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectEstimatedCost"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Plan, Elevation, Section, Structural analysis of framed structure,
              roof, etc. on AUTOCAD system, strata distribution chart
              authenticated by competent authority (to be interlinked digitally
              with details of measurement).
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectStructure"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Details of measurements for all items taken in Schedule of
              Quantity (to be interlinked digitally with drawings, BOQ, etc.).
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectMeasurements"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Details of utilization certificate for all projects sanctioned by
              MYAS for the particular project
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectCertificationsByMYAS"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Information regarding funds sanctioned, released, utilized
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectFundInfo"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Details of the specification, mandatory guidelines regarding the
              environment, green energy utilization
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="ProjectSpecificationDetials"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              PERT chart for all detailing all activities involved in completion
              of the project and detailing Time Schedule for Completion
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectPERTChart"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Key milestones with timelines for completion of the project.
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectKeyMilestones"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Details of Centres for the training of National level Players in
              the town, if any.
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectCentersForNationalPlayers"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              No. of National and International level players from the State in
              disciplines included in the Asian Games/Commonwealth
              Games/Olympics
            </span>
          </label>

          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="players"
          />
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <label className="label w-full">
            <span className="label-text font-medium text-lg uppercase">
              Full justification for the project
            </span>
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            name="projectFullJustifiaction"
          />
        </div>
      </div>
    </div>
  );
}
