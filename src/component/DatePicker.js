import React, { useEffect, useState } from "react";

function DatePicker() {
  const [today, setToday] = useState("");

  useEffect(() => {
    function fetchData() {
      var currentDate = new Date();
      var day = ("0" + currentDate.getDate()).slice(-2);
      var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
      var year = currentDate.getFullYear();
      setToday(year + "-" + month + "-" + day);
    }
    fetchData();
  });

  return (
    <div className="container">
      <div className="date">
          <input
            className="date_hidden"
            type="date"
            name="date"
            dateFormat="DD/MM/YYYY"
            defaultValue={today}
            max={today}
          />
      </div>
    </div>
  );
}

export default DatePicker;
