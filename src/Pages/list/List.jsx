import React, { useState } from "react";
import "./List.scss";
import { Navbar } from "../../Components/navbar/Navbar";
import { Header } from "../../Components/Header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SearchItem } from "../../Components/SearchItem/SearchItem";
export const List = () => {
  let location = useLocation();
  const [destination, setdestination] = useState(location.state.destination);
  const [date, setdate] = useState(location.state.date);
  const [opendate, setopendate] = useState(false);
  const [options, setoptions] = useState(location.state.options);
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="listContainer flex justify-center mt-5">
        <div className="listWrapper w-full flex gap-5">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="Destination">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="Destination">Check-in Date</label>
              <span onClick={() => setopendate(!opendate)}>
                {format(date[0].startDate, "dd/MM/yyyy")} to{" "}
                {format(date[0].endDate, "dd/MM/yyyy")}
              </span>
              {opendate && (
                <DateRange
                  onChange={(item) => setdate([item.selecton()])}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
                <div className="listOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="text" className="lsOptionInput" />
                </div>

                <div className="listOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="text" className="lsOptionInput" />
                </div>

                <div className="listOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={1}
                    placeholder={options.adult}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="lsOptionText">children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={0}
                    placeholder={options.children}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={1}
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};
