import React, { Children, cloneElement } from "react";
import COLORS from "styles/colors";
import { ReactComponent as ArrowLeft } from "assets/calendar-arrow-left.svg";
import { ReactComponent as ArrowRight } from "assets/calendar-arrow-right.svg";

export const onSelectSlot = ({ action, slots /*, ...props */ }) => {
  if (action === "click") {
    console.log("click");
    // alert("click");
  }
  return false;
};

export const eventStyleGetter = function(event, start, end, isSelected) {
  const backgroundColor = ["#FEF3E4", "#FDEDED", "#DFEBFB", "#F0F9F2"];
  const style = {
    backgroundColor: backgroundColor[(Math.random() * backgroundColor.length) | 0],
    borderRadius: "0px",
    opacity: 0.8,
    color: `${COLORS.darkBlue}`,
    border: "0px",
    display: "block",
    fontSize: "10px"
  };
  return {
    style: style
  };
};

export const handleSelectEvent = (event, setEvent, openModal) => {
  console.log(event);
  setEvent(event);
  openModal();
};

export const TouchCellWrapper = ({ children, value, onSelectSlot }) =>
  cloneElement(Children.only(children), {
    onTouchEnd: () => onSelectSlot({ action: "click", slots: [value] }),
    style: {
      className: `${children}`
    }
  });

const navigate = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE",
  MONTH: "MONTH",
  WEEK: "WEEK"
};

const views = {
  MONTH: "month",
  WEEK: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  AGENDA: "agenda"
};

export class CustomToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeButton: "month" };
  }
  render() {
    let {
      //   localizer: { messages },
      label
    } = this.props;

    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button type="button" onClick={this.navigate.bind(null, navigate.PREVIOUS)}>
            <ArrowLeft />
          </button>
          <span className="rbc-toolbar-label">{label}</span>
          <button type="button" onClick={this.navigate.bind(null, navigate.NEXT)}>
            <ArrowRight />
          </button>
        </span>
        <button
          className={`rbc-btn-group-view ${this.state.activeButton === "month" ? "active" : ""}`}
          name="month"
          type="button"
          onClick={this.views.bind(null, views.MONTH)}
        >
          MONTH
        </button>
        <button
          className={`rbc-btn-group-view ${this.state.activeButton === "week" ? "active" : ""}`}
          type="button"
          name="week"
          onClick={this.views.bind(null, views.WEEK)}
        >
          WEEK
        </button>
      </div>
    );
  }
  navigate = action => {
    this.props.onNavigate(action);
  };
  views = view => {
    this.setState({ activeButton: view });
    this.props.onView(view);
  };
}
