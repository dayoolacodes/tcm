import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Container } from "./styles";
import {
  CustomToolbar,
  eventStyleGetter,
  handleSelectEvent,
  onSelectSlot,
  TouchCellWrapper
} from "./utils";
import dummyEventsList from "./dummyEventsList";
import BookAppointment from "../../Modals/BookAppointment";
import { useDisclosure } from "@chakra-ui/react";
import SelectCategory from "pages/Appointments/SelectCategory";
const localizer = momentLocalizer(moment);

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clickedEvent, setClickedEvent] = React.useState();
  //   const [
  //     symptomCategory,
  //     setSymptomCategory
  //   ] = React.useState({});

  //   const handleChange = e => {
  //     setSymptomCategory(e);
  //   };

  return (
    <Container>
      <BookAppointment
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        eventDetails={clickedEvent}
      />
      <SelectCategory />
      <div className="calander-wrapper">
        <Calendar
          localizer={localizer}
          events={dummyEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          popup
          selectable
          onSelectEvent={event => handleSelectEvent(event, setClickedEvent, onOpen)}
          onSelectSlot={onSelectSlot}
          eventPropGetter={eventStyleGetter}
          components={{
            // event: myEventsList,
            toolbar: CustomToolbar,
            dateCellWrapper: props => <TouchCellWrapper {...props} onSelectSlot={onSelectSlot} />
          }}
        />
      </div>
    </Container>
  );
}

export default Index;
