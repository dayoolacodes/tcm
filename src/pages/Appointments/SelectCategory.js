import styled from "@emotion/styled";
import { SelectInputNoFomik } from "components/inputs";
import React from "react";
import COLORS from "styles/colors";

export default function SelectCategory() {
  const symptomCat = [
    {
      value: "nervousSystem",
      label: "Nervous System"
    },
    { value: "respiratorySystem", label: "Respiratory System" },
    { value: "cardiovascularSystem", label: "Cardiovascular System" },
    { value: "oralCavity", label: "Oral Cavity" },
    { value: "eyes", label: "Eyes" }
  ];

  return (
    <Container>
      <div className="sub-select">
        <p className="subtitle">Symptom Category</p>
        <div className="select-wrapper">
          <SelectInputNoFomik
            options={symptomCat}
            // onChange={handleChange}
            defaultValue={symptomCat[0]}
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 472px;
  margin-right: 20px;
  flex: 6;
  @media all and (max-width: 1024px) {
    padding: 1rem;
  }
  .sub-select {
    @media all and (max-width: 1024px) {
      margin: 0 auto;
    }
  }

  .subtitle {
    color: ${COLORS.primaryOrange};
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    margin: 5px 0;
  }

  .select-wrapper {
  }
`;
