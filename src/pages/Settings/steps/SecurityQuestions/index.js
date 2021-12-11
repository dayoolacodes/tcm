import { SelectInput3, TextInput } from "components/inputs";
import { Form, Formik } from "formik";
import React from "react";
import { Container } from "./styles";
import { ReactComponent as DropDIcon } from "assets/select-dropdown-icon.svg";

const PasswordSetting = ({ title, subtitle, inputArray }) => {
  const defaultValues = {
    securityQuestion: "",
    answer: ""
  };

  const handleSubmit = e => {
    console.log(e);
  };

  return (
    <Container>
      <div className="wrapper">
        <div className="header">
          <h1 className="title">{title}</h1>
          <span className="subtitle">{subtitle}</span>
        </div>
        <Formik
          initialValues={defaultValues}
          // validate={patientValidation}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form>
              {inputArray?.map((e, i) => {
                return e?.inputtype === "select" ? (
                  <SelectInput3 {...e} key={e + i} icon={<DropDIcon />}>
                    {e?.children.map((e, i) => (
                      <option value={e} key={e + i}>
                        {e}
                      </option>
                    ))}
                  </SelectInput3>
                ) : (
                  <TextInput {...e} key={e + i} />
                );
              })}
              <button type="submit">Save Changes</button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="section-divider"></div>
    </Container>
  );
};

function Index() {
  const setPasswordSection = [
    {
      title: "Security Question",
      subtitle: "Select a security question",
      inputArray: [
        {
          label: "Question",
          name: "securityQuestion",
          placeholder: "Select a security question",
          inputtype: "select",
          children: [
            "What is your mother’s maiden name?",
            "What was your first address?",
            "What was the name of your first pet?",
            "What was the name of your first pet?",
            "What is your mother’s maiden name?"
          ]
        },
        {
          label: "Answer",
          name: "answer",
          placeholder: "Type your answer",
          type: "text"
        }
      ]
    }
  ];

  return (
    <>
      {setPasswordSection.map((props, i) => {
        return <PasswordSetting key={props.title + i} {...props} />;
      })}
    </>
  );
}

export default Index;
