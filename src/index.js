import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";

function App({
  cssClass,
  nameElement,
  labelElement,
  returnValueSetter
}) {
  return (
    <Modal
      cssClass={cssClass}
      labelElement={labelElement}
      nameElement={nameElement}
      returnValueSetter={returnValueSetter}
    />
  );
}

function Modal({
  cssClass,
  nameElement,
  labelElement,
  returnValueSetter
}) {
  const [inputValue, setInputValue] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [displayDay, setDisplayDay] = useState(null);
  const [openModal, setOpenModal] = useState(false);

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

  // Open Modal and set currentDate and pickDate to now - if user have already pick a date pickDate set to pick date
  const handlerOpen = () => {
    setOpenModal(true);
    setCurrentDate(new Date());
    if (inputValue.length > 0) {
      let split = inputValue.split("/");
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
        setOpenModal(false);
      }
    }
  });

  // Function when user click on previous - get pickDate and remove 1 month
  const previous = () => {
    if (pickDate.getMonth() !== currentDate.getMonth()) {
      let previous = new Date(pickDate);
      previous.setMonth(previous.getMonth() - 1);
      setPickDate(previous);
    } else {
      if (currentDate.getFullYear() !== pickDate.getFullYear()) {
        let previous = new Date(pickDate);
        previous.setMonth(previous.getMonth() - 1);
        setPickDate(previous);
      }
    }
  };

  // Function when user click on next - get pickDate and add 1 month
  const next = () => {
    let next = new Date(pickDate);
    next.setMonth(next.getMonth() + 1);
    setPickDate(next);
  };

  // Function when user click on home - go to current date
  const goCurrent = () => {
    setPickDate(currentDate);
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
    if (currentDate !== "") {
      let arDay = [];

      //create to array (ar, newAr) whith all day on current month
      let ar = getAllDaysInMonth(pickDate.getMonth(), pickDate.getFullYear());
      let newAr = getAllDaysInMonth(
        pickDate.getMonth(),
        pickDate.getFullYear()
      );

      // Adds all days missing from the day of the week (start month)
      // For example if July 1 starts on a Thursday then it will be necessary to add 4 days
      console.log(ar[0].getDay());
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
  }, [currentDate, pickDate]);

  //Fill input when user click on one date
  const fillInput = (day, month, year) => {
    setInputValue(month + 1 + "/" + day + "/" + year);
    setOpenModal(false);
    returnValueSetter([month + 1 + "/" + day + "/" + year, nameElement])
  };

  return (
    <>
    <label htmlFor={nameElement}>{labelElement}</label>
    <input
          className={`modal ${styles.datepicker__input}`}
          onFocus={() => {
            handlerOpen();
          }}
          type="text"
          name={nameElement}
          id={nameElement}
          value={inputValue}
          onChange={() => {
            setInputValue(inputValue);
          }}
        />
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
              <img
                onClick={() => {
                  goCurrent();
                }}
                className={`${cssClass} ${styles.datepicker__modal__header__home}`}
                src="../img/home.png"
                alt=""
              />
              <p
                className={`${cssClass} ${styles.datepicker__modal__header__p}`}
              >
                {month[pickDate.getMonth()]}
              </p>
              <p
                className={`${cssClass} ${styles.datepicker__modal__header__p}`}
              >
                {pickDate.getFullYear()}
              </p>
              <div
                onClick={() => {
                  next();
                }}
                className={`${cssClass} ${styles.datepicker__modal__header__next}`}
              ></div>
            </div>
            <table className={`${cssClass} ${styles.datepicker__modal__table}`}>
              <thead className={`${cssClass} `}>
                <tr className={`${cssClass} `}>
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
              <tbody className={`${cssClass}`}>
                {displayDay?.map((y, index) => {
                  return (
                    <tr className={`${cssClass}`} key={index}>
                      {displayDay[index].map((i, index) => {
                        if (inputValue.length > 0) {
                          let choiceDate = inputValue.split("/");
                          if (
                            (choiceDate[0] - 1).toString() === i[1].toString()
                          ) {
                            if (
                              choiceDate[1].toString() === i[0].toString() &&
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
                        if (pickDate.getMonth() === currentDate.getMonth()) {
                          if (currentDate.getDate() === i[0]) {
                            if (inputValue.length > 0) {
                              let choiceDate = inputValue.split("/");
                              if (
                                choiceDate[1].toString() !==
                                currentDate.getDate().toString()
                              ) {
                                // Display current date if user have select date
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
                            }

                            // Display current date
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
                        if (i[1] !== pickDate.getMonth()) {
                          // Display day other month
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

export default App;
