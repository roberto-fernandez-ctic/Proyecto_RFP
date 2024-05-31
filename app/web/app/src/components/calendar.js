import { React, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import DatePicker from "react-datepicker";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";

export function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(),5);

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return (
    <div className="mainContent">
      <Header/>
        <div className="bg-translucent text-center">
        <DatePicker
        selected={startDate}
        minDate={new Date()}
        maxDate={(new Date(), 5)}
        startDate={startDate}
        timeClassName={handleColor}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        selectsRange
        inline
        showDisabledMonthNavigation
      />
        </div>
      <Footer/>
    </div>
  );
}
