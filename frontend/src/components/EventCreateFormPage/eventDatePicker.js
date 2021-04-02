// import React, { useState } from "react";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import styled from "styled-components";

// const Styles = styled.div`
//  .react-datepicker-wrapper,
//  .react-datepicker__input-container,
//  .react-datepicker__input-container input {
//    width: 175px;
//  }

//  .react-datepicker__close-icon::before,
//  .react-datepicker__close-icon::after {
//    background-color: grey;
//  }
// `;

// export function DatePickerRange() {
//  const [startDate, setStartDate] = useState(null);
//  const [endDate, setEndDate] = useState(null);

//  return (
//    <div style={{ display: "flex" }}>
//      <DatePicker
//        isClearable
//        filterDate={d => {
//          return new Date() > d;
//        }}
//        placeholderText="Select Start Date"
//        showTimeSelect
//        dateFormat="MMMM d, yyyy h:mmaa"
//        selected={startDate}
//        selectsStart
//        startDate={startDate}
//        endDate={endDate}
//        onChange={date => setStartDate(date)}
//      />
//      <DatePicker
//        isClearable
//        filterDate={d => {
//          return new Date() > d;
//        }}
//        placeholderText="Select End Date"
//        showTimeSelect
//        dateFormat="MMMM d, yyyy h:mmaa"
//        selected={endDate}
//        selectsEnd
//        startDate={startDate}
//        endDate={endDate}
//        minDate={startDate}
//        onChange={date => setEndDate(date)}
//      />
//    </div>
//  );
// }

// export default function TableDatePicker() {
//  return (
//    <Styles>
//      <DatePickerRange />
//    </Styles>
//  );
// }