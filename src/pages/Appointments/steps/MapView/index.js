import { DateInput } from "components/inputs";
import SelectCategory from "pages/Appointments/SelectCategory";
import React from "react";
import { Container } from "./styles";
import { ReactComponent as CalendarIcon } from "assets/calendarInput.svg";
import { ReactComponent as Arrow } from "assets/find-appointment-arrow.svg";
import { Formik } from "formik";
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

function mapOptionsCreator(map) {
  return {
    // scrollwheel: false,
    zoomControlOptions: {
      position: map.ControlPosition.RIGHT_TOP, // as long as this is not set it works
      style: map.ZoomControlStyle.SMALL
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: map.ControlPosition.TOP_LEFT, // this makes the map type control disappear
      style: map.MapTypeControlStyle.HORIZONTAL_BAR
    }
    // draggable: false,
    // rotateControl: false,
    // scaleControl: false,
    // streetViewControl: false,
    // panControl: false
  };
}

function Index() {
  const defaultValues = {
    appointmentDate: ""
  };

  return (
    <Container>
      <Formik
        initialValues={defaultValues}
        // validate={patientValidation}
        // onSubmit={values => handleSubmit(values)}
      >
        {({ isSubmitting, values, handleSubmit, setFieldValue }) => (
          <Box className="form">
            <SelectCategory />
            <div className="date-n-select">
              <DateInput
                name="appointmentDate"
                label="Appointment Date"
                type="date"
                placeholder=""
                icon={<CalendarIcon />}
                style={{ marginTop: "0", width: "224px", marginLeft: "5px" }}
              />
              <button>
                Find Appointment <Arrow />{" "}
              </button>
            </div>
          </Box>
        )}
      </Formik>
      <div className="map-wrapper">
        <GoogleMapReact
          options={mapOptionsCreator}
          bootstrapURLKeys={process.env.REACT_APP_GOOGLE_MAP_KEY}
          defaultCenter={{
            lat: 49.166592,
            lng: -123.133568
          }}
          defaultZoom={15}
        ></GoogleMapReact>
      </div>
    </Container>
  );
}

export default Index;
