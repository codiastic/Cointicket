"use client";
import { useState, useRef, useEffect } from "react";
import Select from "react-select";
import "./numberPicker.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const NumberPicker = () => {
  const [value, setValue] = useState(null);
  //   const numbers = Array.from({ length: 31 }, (_, i) => i + 1);
  //   const periods = [
  //     { value: "days", label: "Days" },
  //     { value: "weeks", label: "Weeks" },
  //     { value: "months", label: "Months" },
  //   ];

  //   const [selectedIndex, setSelectedIndex] = useState(2);
  //   const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  //   const containerRef = useRef(null);
  //   let isScrolling = false;

  //   useEffect(() => {
  //     if (containerRef.current) {
  //       containerRef.current.scrollTop = selectedIndex * 50; // Set initial position
  //     }
  //   }, []);

  //   const handleScroll = () => {
  //     if (isScrolling) return; // Prevent rapid state updates

  //     isScrolling = true;
  //     setTimeout(() => {
  //       if (containerRef.current) {
  //         const scrollTop = containerRef.current.scrollTop;
  //         const index = Math.round(scrollTop / 50);
  //         setSelectedIndex(index);
  //         containerRef.current.scrollTo({
  //           top: index * 50,
  //           behavior: "smooth",
  //         });
  //       }
  //       isScrolling = false;
  //     }, 200); // Add delay to smooth out scrolling
  //   };

  return (
    //     <div className="scroller-container">
    //       <div
    //         className="scroll-wrapper"
    //         ref={containerRef}
    //         onScroll={handleScroll}
    //       >
    //         {numbers.map((num, index) => (
    //           <div
    //             key={num}
    //             className={`number-item ${
    //               index === selectedIndex ? "selected" : ""
    //             }`}
    //             style={{ opacity: 1 - Math.abs(selectedIndex - index) * 0.3 }}
    //           >
    //             {num}
    //           </div>
    //         ))}
    //       </div>

    //       {/* Dropdown Selector */}
    //       <Select
    //         className="dropdown"
    //         value={selectedPeriod}
    //         onChange={setSelectedPeriod}
    //         options={periods}
    //         styles={{
    //           control: (styles) => ({
    //             ...styles,
    //             backgroundColor: "#222",
    //             color: "#fff",
    //             border: "1px solid #555",
    //           }),
    //           singleValue: (styles) => ({ ...styles, color: "#fff" }),
    //           menu: (styles) => ({ ...styles, backgroundColor: "#333" }),
    //           option: (styles, { isFocused }) => ({
    //             ...styles,
    //             backgroundColor: isFocused ? "#444" : "#333",
    //             color: "#fff",
    //           }),
    //         }}
    //       />
    //     </div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select a Date"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default NumberPicker;
