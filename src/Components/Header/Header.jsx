import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
export const Header = ({ type }) => {
  const [destination, setdestination] = useState("");
  const [opendate, setopendate] = useState(false);
  const [openoptions, setopenoptions] = useState();
  const [options, setoptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  let handleOption = (name, oparation) => {
    setoptions((prev) => {
      return {
        ...prev,
        [name]: oparation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <>
      <div className="header bg-themeblue text-white flex justify-center flex-wrap relative ">
        <div
          className={
            type === "list"
              ? "headercontainer listmode w-full"
              : "w-full headercontainer"
          }
        >
          <div className="HeaderList flex gap-8 flex-wrap ml-2">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle text-4xl font-bold my-4 pl-2">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDescrit my-6 pl-2">
                Get rewarded for travels unlock instant saving of 10% or more
                with free LaMaBooking account
              </p>
              <button className="headerbtn bg-white py-2 px-3 text-black ml-2">
                Sign In / Registered
              </button>
              <div className="HeaderSearch p-3 w-full ">
                <div className="HeaderSearchItem">
                  <FontAwesomeIcon icon={faBed} />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="HeaderSearchInput border-0 outline-none"
                    name=""
                    onChange={(e) => setdestination(e.target.value)}
                  />
                </div>
                <div className="HeaderSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <span
                    className="headerSearchText"
                    onClick={() => setopendate(!opendate)}
                  >
                    {format(date[0].startDate, "dd/MM/yyyy")} to
                    {format(date[0].endDate, "dd/MM/yyyy")}
                  </span>
                  {opendate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setdate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date absolute top-14 "
                    />
                  )}
                </div>
                <div className="HeaderSearchItem">
                  <FontAwesomeIcon icon={faPerson} />
                  <span onClick={() => setopenoptions(!openoptions)}>
                    {options.adult} adults . {options.children} . children{" "}
                    {options.room} . room
                  </span>
                  {openoptions && (
                    <div className="options">
                      <div className="optionItem flex">
                        <div className="optionText">Adult</div>
                        <div className="optionCounter">
                          <button
                            className="optionCounterBtn"
                            disabled={options.adult <= 1}
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem flex">
                        <div className="optionText">Children</div>
                        <div className="optionCounter">
                          <button
                            className="optionCounterBtn"
                            disabled={options.children <= 0}
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem flex">
                        <div className="optionText">Room</div>
                        <div className="optionCounter">
                          <button
                            className="optionCounterBtn"
                            disabled={options.room <= 1}
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="HeaderSearchItem">
                  <button
                    className="headerBtn p-2 bg-sky-700 text-white"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
