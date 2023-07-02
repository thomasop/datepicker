import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import "./main.css"

function DatePicker({
  cssClass,
  nameElement,
  labelElement,
  setterValueInput,
  valueInput,
  type,
}) {
  return (
    <Modal
      cssClass={cssClass}
      labelElement={labelElement}
      nameElement={nameElement}
      setterValueInput={setterValueInput}
      valueInput={valueInput}
      type={type}
    />
  );
}

const month = {
  0: "Janvier",
  1: "Février",
  2: "Mars",
  3: "Avril",
  4: "Mai",
  5: "Juin",
  6: "Juillet",
  7: "Aout",
  8: "Septembre",
  9: "Octobre",
  10: "Novembre",
  11: "Décembre",
};

const year = {
  0: "1950",
  1: "1951",
  2: "1952",
  3: "1953",
  4: "1954",
  5: "1955",
  6: "1956",
  7: "1957",
  8: "1958",
  9: "1959",
  10: "1960",
  11: "1961",
  12: "1962",
  13: "1963",
  14: "1964",
  15: "1965",
  16: "1966",
  17: "1967",
  18: "1968",
  19: "1969",
  20: "1970",
  21: "1971",
  22: "1972",
  23: "1973",
  24: "1974",
  25: "1975",
  26: "1976",
  27: "1977",
  28: "1978",
  29: "1979",
  30: "1980",
  31: "1981",
  32: "1982",
  33: "1983",
  34: "1984",
  35: "1985",
  36: "1986",
  37: "1987",
  38: "1988",
  39: "1989",
  40: "1990",
  41: "1991",
  42: "1992",
  43: "1993",
  44: "1994",
  45: "1995",
  46: "1996",
  47: "1997",
  48: "1998",
  49: "1999",
  50: "2000",
  51: "2001",
  52: "2002",
  53: "2003",
  54: "2004",
  55: "2005",
  56: "2006",
  57: "2007",
  58: "2008",
  59: "2009",
  60: "2010",
  61: "2011",
  62: "2012",
  63: "2013",
  64: "2014",
  65: "2015",
  66: "2016",
  67: "2017",
  68: "2018",
  69: "2019",
  70: "2020",
  71: "2021",
  72: "2022",
  73: "2023",
  74: "2024",
  75: "2025",
  76: "2026",
  77: "2027",
  78: "2028",
  79: "2029",
  80: "2030",
  81: "2031",
  82: "2032",
  83: "2033",
  84: "2034",
  85: "2035",
  86: "2036",
  87: "2037",
  88: "2038",
  89: "2039",
  90: "2040",
  91: "2041",
  92: "2042",
  93: "2043",
  94: "2044",
  95: "2045",
  96: "2046",
  97: "2047",
  98: "2048",
  99: "2049",
  100: "2050",
};

function Modal({
  cssClass,
  nameElement,
  labelElement,
  setterValueInput,
  valueInput,
  type,
}) {
  const [inputValue, setInputValue] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [displayDay, setDisplayDay] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalMonth, setOpenModalMonth] = useState(false);
  const [openModalYear, setOpenModalYear] = useState(false);

  const modalMonthRef = useRef(null);
  const modalYearRef = useRef(null);

  // Open Modal and set currentDate and pickDate to now - if user have already pick a date pickDate set to pick date
  const handlerOpen = () => {
    setOpenModal(true);
    if (valueInput[0].length > 0) {
      let split = valueInput[0].split("/");
      let date = new Date(
        Number(split[0]).toString() + "/" + split[1] + "/" + split[2]
      );
      setPickDate(date);
    } else {
      setPickDate(new Date());
    }
  };

  // Close modal if user click other place
  document.addEventListener("click", (e) => {
    let htmlElement = e.target;
    if (!htmlElement.classList.contains(cssClass)) {
      if (openModal === true) {
        if (inputValue.length > 1) {
          setInputValue("");
        }
        closeModalSelect();
        setOpenModal(false);
      }
    }
  });

  const closeModalSelect = () => {
    if (openModalMonth === true) {
      setOpenModalMonth(false);
    }
    if (openModalYear === true) {
      setOpenModalYear(false);
    }
  };

  // Function when user click on previous - get pickDate and remove 1 month
  const previous = () => {
    if (type === "after") {
      if (pickDate.getMonth() !== new Date().getMonth()) {
        let previous = new Date(pickDate);
        previous.setMonth(previous.getMonth() - 1);
        setPickDate(previous);
        closeModalSelect();
      } else {
        if (new Date().getFullYear() !== pickDate.getFullYear()) {
          let previous = new Date(pickDate);
          previous.setMonth(previous.getMonth() - 1);
          setPickDate(previous);
          closeModalSelect();
        }
      }
      closeModalSelect();
    } else {
      let previous = new Date(pickDate);
      previous.setMonth(previous.getMonth() - 1);
      setPickDate(previous);
      closeModalSelect();
    }
  };

  // Function when user click on next - get pickDate and add 1 month
  const next = () => {
    if (type === "before") {
      if (pickDate.getMonth() !== new Date().getMonth()) {
        let next = new Date(pickDate);
        next.setMonth(next.getMonth() + 1);
        setPickDate(next);
        closeModalSelect();
      } else {
        if (new Date().getFullYear() !== pickDate.getFullYear()) {
          let next = new Date(pickDate);
          next.setMonth(next.getMonth() + 1);
          setPickDate(next);
          closeModalSelect();
        }
      }
      closeModalSelect();
    } else {
      let next = new Date(pickDate);
      next.setMonth(next.getMonth() + 1);
      setPickDate(next);
      closeModalSelect();
    }
  };

  // Function when user click on home - go to current date
  const goCurrent = () => {
    setPickDate(new Date());
    closeModalSelect();
  };

  // Get all days in current month
  function getAllDaysInMonth(month, year) {
    var date = new Date(Date.UTC(year, month, 1));
    var days = [];
    while (date.getUTCMonth() === month) {
      days.push(new Date(date));
      date.setUTCDate(date.getUTCDate() + 1);
    }
    return days;
  }

  useEffect(() => {
    // if user click on input
    if (pickDate !== "") {
      let arDay = [];

      //create to array (ar, newAr) whith all day on current month
      let ar = getAllDaysInMonth(pickDate.getMonth(), pickDate.getFullYear());
      let newAr = getAllDaysInMonth(
        pickDate.getMonth(),
        pickDate.getFullYear()
      );

      // Adds all days missing from the day of the week (start month)
      // For example if July 1 starts on a Thursday then it will be necessary to add 4 days
      for (let i = 0; i < ar[0].getDay(); i++) {
        let date = new Date(ar[0]);
        date.setDate(date.getDate() - (i + 1));
        newAr.unshift(date);
      }

      // Adds all days missing from the day of the week (end month)
      for (let i = 0; i < 6 - ar[ar.length - 1].getDay(); i++) {
        let date = new Date(ar[0]);
        date.setUTCDate(date.getUTCDate() + i);
        date.setUTCMonth(date.getUTCMonth() + 1);
        newAr.push(date);
      }

      let arRow = [];
      //Loop for all days with start and end month day
      for (let i = 0; i < newAr.length; i++) {
        arRow.push([
          newAr[i].getDate(),
          newAr[i].getMonth(),
          newAr[i].getFullYear(),
        ]);
        //If i + 1 multiple of 7 (end of week) so push arRow in arDay and clear arRow and repeat
        if ((i + 1) % 7 === 0 && i !== 0) {
          arDay.push(arRow);
          arRow = [];
        }
      }
      setDisplayDay(arDay);
    }
  }, [pickDate]);

  //Fill input when user click on one date
  const fillInput = (day, month, year) => {
    if (type === "after") {
      let datePick = new Date(year, month, day);
      if (
        datePick.getDate() === new Date().getDate() &&
        datePick.getMonth() === new Date().getMonth() &&
        datePick.getFullYear() === new Date().getFullYear()
      ) {
        let formatDateMonth;
        (month + 1).toString().length === 1
          ? (formatDateMonth = "0" + (month + 1).toString())
          : (formatDateMonth = month + 1);
        let formatDateDay;
        day.toString().length === 1
          ? (formatDateDay = "0" + day.toString())
          : (formatDateDay = day);
        setterValueInput([
          formatDateMonth + "/" + formatDateDay + "/" + year,
          nameElement,
        ]);
        setOpenModal(false);
      }
      if (datePick.getTime() >= new Date().getTime()) {
        let formatDateMonth;
        (month + 1).toString().length === 1
          ? (formatDateMonth = "0" + (month + 1).toString())
          : (formatDateMonth = month + 1);
        let formatDateDay;
        day.toString().length === 1
          ? (formatDateDay = "0" + day.toString())
          : (formatDateDay = day);
        setterValueInput([
          formatDateMonth + "/" + formatDateDay + "/" + year,
          nameElement,
        ]);
      }
    } else if (type === "before") {
      let datePick = new Date(year, month, day);
      if (
        datePick.getDate() === new Date().getDate() &&
        datePick.getMonth() === new Date().getMonth() &&
        datePick.getFullYear() === new Date().getFullYear()
      ) {
        let formatDateMonth;
        (month + 1).toString().length === 1
          ? (formatDateMonth = "0" + (month + 1).toString())
          : (formatDateMonth = month + 1);
        let formatDateDay;
        day.toString().length === 1
          ? (formatDateDay = "0" + day.toString())
          : (formatDateDay = day);
        setterValueInput([
          formatDateMonth + "/" + formatDateDay + "/" + year,
          nameElement,
        ]);
        setOpenModal(false);
      }
      if (datePick.getTime() <= new Date().getTime()) {
        let formatDateMonth;
        (month + 1).toString().length === 1
          ? (formatDateMonth = "0" + (month + 1).toString())
          : (formatDateMonth = month + 1);
        let formatDateDay;
        day.toString().length === 1
          ? (formatDateDay = "0" + day.toString())
          : (formatDateDay = day);
        setterValueInput([
          formatDateMonth + "/" + formatDateDay + "/" + year,
          nameElement,
        ]);
        setOpenModal(false);
      }
    } else {
      let formatDateMonth;
      (month + 1).toString().length === 1
        ? (formatDateMonth = "0" + (month + 1).toString())
        : (formatDateMonth = month + 1);
      let formatDateDay;
      day.toString().length === 1
        ? (formatDateDay = "0" + day.toString())
        : (formatDateDay = day);
      setterValueInput([
        formatDateMonth + "/" + formatDateDay + "/" + year,
        nameElement,
      ]);
      setOpenModal(false);
    }
  };

  const changeMonth = (p) => {
    let year = pickDate.getFullYear();
    let createNewDate = new Date(year, p[0], 1);
    if (type === "after") {
      if (createNewDate.getTime() > new Date().getTime()) {
        setPickDate(createNewDate);
      } else {
        if (createNewDate.getMonth() === new Date().getMonth()) {
          setPickDate(createNewDate);
        }
      }
    } else if (type === "before") {
      if (createNewDate.getTime() < new Date().getTime()) {
        setPickDate(createNewDate);
      }
    } else {
      setPickDate(createNewDate);
    }
  };

  const changeYear = (p) => {
    let month = pickDate.getMonth();
    let createNewDate = new Date(p[1], month, 1);
    if (type === "after") {
      if (createNewDate.getTime() > new Date().getTime()) {
        setPickDate(createNewDate);
      } else {
        if (createNewDate.getFullYear() === new Date().getFullYear()) {
          setPickDate(createNewDate);
        }
      }
    } else if (type === "before") {
      if (createNewDate.getTime() < new Date().getTime()) {
        setPickDate(createNewDate);
      }
    } else {
      setPickDate(createNewDate);
    }
  };

  useEffect(() => {
    if (openModalYear === true) {
      let nb;
      Object.keys(year).forEach(function eachKey(key) {
        if (year[key].toString() === pickDate.getFullYear().toString()) {
          nb = key;
        }
      });
      let start = 22 * nb;
      if (modalYearRef && modalYearRef.current) {
        modalYearRef.current.scrollTop = start;
      }
      
    }
    if (openModalMonth === true) {
      let nb;
      Object.keys(month).forEach(function eachKey(key) {
        if (key.toString() === pickDate.getMonth().toString()) {
          nb = key;
        }
      });
      let start = 22 * nb;

      if (modalMonthRef && modalMonthRef.current) {
        modalMonthRef.current.scrollTop = start;
      }
    }
  }, [openModalMonth, openModalYear, pickDate]);

  return (
    <>
      <div className={styles.main}>
        <label className={`${cssClass} ${styles.main__label}`} htmlFor={nameElement}>{labelElement}</label>
        <input
          className={`${cssClass} ${styles.main__input}`}
          onFocus={() => {
            handlerOpen();
          }}
          type="text"
          name={nameElement}
          id={nameElement}
          value={valueInput[0]}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>

      {openModal === true && (
        <div className={styles.datepicker}>
          <div className={`${cssClass} ${styles.datepicker__modal}`}>
            <div className={`${cssClass} ${styles.datepicker__modal__header}`}>
              <div
                onClick={() => {
                  previous();
                }}
                className={`${cssClass} ${styles.datepicker__modal__header__previous}`}
              ></div>
              <svg
                onClick={() => {
                  goCurrent();
                }}
                className={`${cssClass} ${styles.datepicker__modal__header__home}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  className={`${cssClass} ${styles.datepicker__modal__header__home}`}
                  fill="#999"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
              <div
                className={`${cssClass} ${styles.datepicker__modal__header__div}`}
              >
                <div
                  onClick={() => {
                    if (openModalYear === true) {
                      setOpenModalYear(false);
                    }
                    setOpenModalMonth(!openModalMonth);
                  }}
                  className={`${cssClass} ${styles.datepicker__modal__header__div__div} ${styles.datepicker__modal__header__div__div__month}`}
                >
                  <p
                    className={`${cssClass} ${styles.datepicker__modal__header__div__div__p} ${styles.datepicker__modal__header__div__div__month__p}`}
                  >
                    {month[pickDate.getMonth()]}
                  </p>
                  <i
                    className={`${cssClass} ${styles.datepicker__modal__header__div__div__i}`}
                  ></i>
                  {openModalMonth === true && (
                    <div
                      ref={modalMonthRef}
                      className={`${cssClass} ${styles.datepicker__modal__header__div__div__modal}`}
                    >
                      <div
                        className={`${cssClass} ${styles.datepicker__modal__header__div__div__modal__div}`}
                      >
                        {Object.entries(month).map((p, index) => {
                          let currentMonth = pickDate.getMonth();

                          if (p[0].toString() === currentMonth.toString()) {
                            return (
                              <div
                                key={index}
                                onClick={() => changeMonth(p)}
                                className={`${cssClass} ${styles.datepicker__modal__header__div__div__modal__div__div__current}`}
                              >
                                {p[1]}
                              </div>
                            );
                          }
                          return (
                            <div
                              key={index}
                              onClick={() => changeMonth(p)}
                              className={`${cssClass} ${styles.datepicker__modal__header__div__div__modal__div__div}`}
                            >
                              {p[1]}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`${cssClass} ${styles.datepicker__modal__header__div__div} ${styles.datepicker__modal__header__div__div__year}`}
                  onClick={() => {
                    if (openModalMonth === true) {
                      setOpenModalMonth(false);
                    }
                    setOpenModalYear(!openModalYear);
                  }}
                >
                  <p
                    className={`${cssClass} ${styles.datepicker__modal__header__div__div__p} ${styles.datepicker__modal__header__div__div__year__p}`}
                  >
                    {pickDate.getFullYear()}
                  </p>
                  <i
                    className={`${cssClass} ${styles.datepicker__modal__header__div__div__i}`}
                  ></i>
                  {openModalYear === true && (
                    <div
                      ref={modalYearRef}
                      className={`${cssClass} ${styles.datepicker__modal__header__div__div__modal}`}
                    >
                      <div
                        className={`${cssClass} ${styles.datepicker__modal__header__div__div__modal__div}`}
                      >
                        {Object.entries(year).map((p, index) => {
                          let currentYear = pickDate.getFullYear();

                          if (p[1].toString() === currentYear.toString()) {
                            return (
                              <div
                                key={index}
                                onClick={() => changeYear(p)}
                                className={`${cssClass} ${styles.datepicker__modal__header__div__div__modal__div__div__current}`}
                              >
                                {p[1]}
                              </div>
                            );
                          }
                          return (
                            <div
                              key={index}
                              onClick={() => changeYear(p)}
                              className={`${cssClass} ${styles.datepicker__modal__header__div__div__modal__div__div}`}
                            >
                              {p[1]}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div
                onClick={() => {
                  next();
                }}
                className={`${cssClass} ${styles.datepicker__modal__header__next}`}
              ></div>
            </div>
            <table className={`${cssClass} ${styles.datepicker__modal__table}`}>
              <thead className={`modal`}>
                <tr className={`modal`}>
                  <th
                    className={`${cssClass} ${styles.datepicker__modal__table__head__tr__th}`}
                  >
                    Dim
                  </th>
                  <th
                    className={`${cssClass} ${styles.datepicker__modal__table__head__tr__th}`}
                  >
                    Lun
                  </th>
                  <th
                    className={`${cssClass} ${styles.datepicker__modal__table__head__tr__th}`}
                  >
                    Mar
                  </th>
                  <th
                    className={`${cssClass} ${styles.datepicker__modal__table__head__tr__th}`}
                  >
                    Mer
                  </th>
                  <th
                    className={`${cssClass} ${styles.datepicker__modal__table__head__tr__th}`}
                  >
                    Jeu
                  </th>
                  <th
                    className={`${cssClass} ${styles.datepicker__modal__table__head__tr__th}`}
                  >
                    Ven
                  </th>
                  <th
                    className={`${cssClass} ${styles.datepicker__modal__table__head__tr__th}`}
                  >
                    {" "}
                    Sam
                  </th>
                </tr>
              </thead>
              <tbody className={`modal`}>
                {displayDay?.map((y, index) => {
                  return (
                    <tr className={`modal`} key={index}>
                      {displayDay[index].map((i, index) => {
                        // Display day other month
                        if (i[1] !== pickDate.getMonth()) {
                          return (
                            <td
                              className={`${cssClass} ${styles.datepicker__modal__table__body__tr__td__other}`}
                              key={index}
                              onClick={() => {
                                fillInput(i[0], i[1], i[2]);
                              }}
                            >
                              {i[0]}
                            </td>
                          );
                        }
                        if (valueInput[0].length > 0) {
                          let choiceDate = valueInput[0].split("/");
                          if (
                            (choiceDate[0] - 1).toString() === i[1].toString()
                          ) {
                            if (
                              (choiceDate[1] - 0).toString() ===
                                i[0].toString() &&
                              i[2].toString() === choiceDate[2].toString()
                            ) {
                              // Display choice date
                              return (
                                <td
                                  className={`${cssClass} ${styles.datepicker__modal__table__body__tr__td__current}`}
                                  key={index}
                                  onClick={() => {
                                    fillInput(i[0], i[1], i[2]);
                                  }}
                                >
                                  {i[0]}
                                </td>
                              );
                            }
                          }
                        }
                        if (pickDate.getMonth() === new Date().getMonth()) {
                          if (new Date().getDate() === i[0]) {
                            if (valueInput[0].length > 0) {
                              if (
                                i[1].toString() ===
                                  new Date().getMonth().toString() &&
                                i[2].toString() ===
                                  new Date().getFullYear().toString()
                              ) {
                                return (
                                  <td
                                    className={`${cssClass} ${styles.datepicker__modal__table__body__tr__td__current__back}`}
                                    key={index}
                                    onClick={() => {
                                      fillInput(i[0], i[1], i[2]);
                                    }}
                                  >
                                    {i[0]}
                                  </td>
                                );
                              }
                            } else {
                              if (
                                i[1].toString() ===
                                  new Date().getMonth().toString() &&
                                i[2].toString() ===
                                  new Date().getFullYear().toString()
                              ) {
                                return (
                                  <td
                                    className={`${cssClass} ${styles.datepicker__modal__table__body__tr__td__current}`}
                                    key={index}
                                    onClick={() => {
                                      fillInput(i[0], i[1], i[2]);
                                    }}
                                  >
                                    {i[0]}
                                  </td>
                                );
                              }
                            }
                          }
                        }

                        // Display default
                        return (
                          <td
                            className={`${cssClass} ${styles.datepicker__modal__table__body__tr__td}`}
                            key={index}
                            onClick={() => {
                              fillInput(i[0], i[1], i[2]);
                            }}
                          >
                            {i[0]}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default DatePicker;
