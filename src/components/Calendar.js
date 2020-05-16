import React from "react";
import Moment from "moment";
import '../css/calendar.css';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      dateObject: Moment()
    }
    this.weekdayshort = Moment.weekdaysShort();

    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novembner', 'December'];

    this.weekdayshortname = this.weekdayshort.map(day => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });

    this.firstDayOfMonth = () => {
      let dateObject = this.state.dateObject;
      let firstDay = Moment(dateObject).startOf("month").format("d");
      return firstDay;
    }

    this.currentDay = () => {
       return parseInt(this.state.dateObject.format("D"), 10);
    };

    this.currentMonth = () => {
      return this.months[this.state.dateObject.month()]
    }

    this.days = [];
    this.generateBlanks();
    this.generateDays();

    this.rows = [];
    this.cells = [];

    this.generateTotalSlots();

    this.daysInMonth = this.rows.map((d, i) => {
      return <tr key={"week "+i}>{d}</tr>;
    })
  }

  generateBlanks() {
    for (let i = 0; i < this.firstDayOfMonth(); i++ ) {
      this.days.push(
        <td key={"blank "+i} className="calendar-day empty">{""}</td>
      );
    }
  }

  generateDays() {
    for (let d = 1; d < this.state.dateObject.daysInMonth(); d++ ) {
      let currentDay = (d === this.currentDay()) ? " today" : "";
      this.days.push(
        <td key={d} className={`calendar-day${currentDay}`}>{d}</td>
      );
    }
  }

  generateTotalSlots() {
    this.days.forEach((row, i) => {
      if (i % 7 !== 0) {
        this.cells.push(row);
      } else {
        this.rows.push(this.cells);
        this.cells = [];
        this.cells.push(row);
      }
      if (i === this.days.length - 1) {
        this.rows.push(this.cells);
      }
    })
  }

  monthHeader() {
    return <tr><th></th><th></th><th></th><th class="current-month">{this.currentMonth()}</th><th></th><th></th><th></th></tr>;
  }

  render() {
    return (
      <div className="calendar">
        <h1>Calendar</h1>
        <h2 class="current-month">{this.monthHeader()}</h2>
        <table>
          <thead>
            <tr>{this.weekdayshortname}</tr>
          </thead>
          <tbody>{this.daysInMonth}</tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
