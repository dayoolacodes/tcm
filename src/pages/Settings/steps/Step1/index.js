/* eslint-disable indent */
import React, { useContext } from "react";
import { Container } from "./styles";
import { ReactComponent as NoProfilePic } from "assets/no-profile-pic.svg";
import { ReactComponent as Tick } from "assets/tick.svg";
import { ReactComponent as NotifyIcon } from "assets/notify-icon.svg";
import { ReactComponent as LinkMailIcon } from "assets/link-phone-mail.svg";
import { ReactComponent as SecurityQuestionIcon } from "assets/security-question-icon.svg";
import { ReactComponent as Passwords } from "assets/passwords-icon.svg";
import { Formik } from "formik";
import { TextInput } from "components/inputs";
import { Spinner } from "components/loaders";
import { SettingsContext } from "pages/Settings";
import doToast from "components/doToast/doToast";

const defaultValues = {};

function Index() {
  const { dispatch } = useContext(SettingsContext);
  const notification =
    "You need to complete your mobile and email verification before you can edit your settings";
  const avatarInfo = [
    {
      value: "Image dimensions should be 180*180"
    },
    {
      value: "Maximum size should not exceed 50kb"
    },
    {
      value: "Allowed formats: jpg, png, gif"
    }
  ];
  const settingsForm = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username"
    },
    {
      name: "displayName",
      label: "Display Name",
      type: "text",
      placeholder: "Enter display name here"
    }
  ];
  const verifySection = [
    {
      icon: <LinkMailIcon />,
      header: "Verification",
      desc: "Link your mobile number and email address here to verify your account",
      btnText: "Link Account",
      isActive: true,
      clickAction: () => dispatch({ type: "VERIFY" })
    },
    {
      icon: <Passwords />,
      header: "Passwords",
      desc: "Set your login and payment passwords here",
      btnText: "Change Passwords",
      isActive: false,
      clickAction: () => dispatch({ type: "PASSWORDS" })
    },
    {
      icon: <SecurityQuestionIcon />,
      header: "Security Question",
      desc: "Set up a security question to further secure your account",
      btnText: "Set up Security Question",
      isActive: true,
      clickAction: () => dispatch({ type: "SECURITYQUESTIONS" })
    }
  ];

  return (
    <Container>
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <NoProfilePic />
            <div className="btn-n-pic-rules">
              <button>
                <span>Upload Avatar</span>
                <input
                  type="file"
                  name="file"
                  title=""
                  // onChange={props?.onChange}
                  accept="image/*"
                  // {...props}
                  // {...field}
                  // id={props.id}
                  // icon={props.icon}
                />
              </button>
              <span className="rule">
                {avatarInfo.map((e, index) => {
                  return (
                    <span key={e.value + index}>
                      <Tick />
                      {e.value}
                    </span>
                  );
                })}
              </span>
            </div>
          </div>
          <div className="spacer" />
          <div className="col">
            <Formik
              initialValues={defaultValues}
              //   validate={loginValidation}
              //   onSubmit={values => handleSubmit(values)}
            >
              {({ isSubmitting, values, handleSubmit }) => (
                <>
                  <form className="settings-form" onSubmit={handleSubmit}>
                    {settingsForm.map((e, index) => {
                      return <TextInput {...e} key={e.name + index} />;
                    })}
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? <Spinner /> : <span>Save Changes</span>}
                    </button>
                  </form>
                </>
              )}
            </Formik>
          </div>
        </div>

        <div className="row">
          <div className="notification">
            <NotifyIcon />
            <span>{notification}</span>
          </div>
          <div className="verify-section">
            {verifySection.map((e, index) => {
              return (
                <div className="verify-col" key={e.header + index}>
                  {e.icon}
                  <h1>{e.header}</h1>
                  <p>{e.desc}</p>
                  <button
                    className={e.isActive ? "" : "disabled"}
                    onClick={
                      e.isActive
                        ? e?.clickAction
                        : () =>
                            doToast(
                              "Complete Verification",
                              "error",
                              "Link your phone number and email first to verify your account"
                            )
                    }
                  >
                    {e?.btnText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Index;
