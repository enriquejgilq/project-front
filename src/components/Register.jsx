import React, { useState } from "react";
import * as Yup from "yup";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Autocomplete,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Formik, Form, Field, ErrorMessage } from "formik";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../context/AuthContext";

const steps = ["Paso 1", "Paso 2", "Paso 3"];

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("El nombre es requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es requerida"),
  nickName: Yup.string().required("El nickName es requerido"),
  works: Yup.array().of(Yup.string()),
});

const StepForm = ({ step, onSubmit, setFieldValue }) => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    nickName: "",
    works: [],
  };

  return (
    <Paper style={{ display: "flex" }} elevation={3}>
      <Formik
        style={{ backgroundColor: "red" }}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        setFieldValue={setFieldValue}
      >
        {({ isSubmitting, errors, touched, setFieldValue }) => (
          <Form className="flex flex-1 p-1">
            {step === 0 && (
              <div className=" rounded-lg mb-4 max-h-80 overflow-auto">
                <Typography variant="h5" gutterBottom>
                  Registro
                </Typography>
                <Field
                  name="userName"
                  as={TextField}
                  label="Nombre"
                  error={touched.userName && Boolean(errors.userName)}
                  helperText={<ErrorMessage name="userName" />}
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="email"
                  as={TextField}
                  label="Correo Electrónico"
                  error={touched.email && Boolean(errors.email)}
                  helperText={<ErrorMessage name="email" />}
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="password"
                  as={TextField}
                  label="Contraseña"
                  type={showPassword ? "text" : "password"}
                  error={touched.password && Boolean(errors.password)}
                  helperText={<ErrorMessage name="password" />}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Field
                  name="nickName"
                  as={TextField}
                  label="Nickname"
                  type="text"
                  error={touched.nickName && Boolean(errors.nickName)}
                  helperText={<ErrorMessage name="nickName" />}
                  fullWidth
                  margin="normal"
                />
              </div>
            )}
            {step === 1 && (
              <div className="p-4 rounded-lg mb-4 max-h-80 overflow-auto">
                <Typography variant="h5" gutterBottom>
                  Redes sociales
                </Typography>
                <Field
                  name="instagram"
                  as={TextField}
                  label="Instagram"
                  type="text"
                  error={touched.instagram && Boolean(errors.instagram)}
                  helperText={<ErrorMessage name="instagram" />}
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="facebook"
                  as={TextField}
                  label="Facebook"
                  type="text"
                  error={touched.facebook && Boolean(errors.facebook)}
                  helperText={<ErrorMessage name="facebook" />}
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="twitter"
                  as={TextField}
                  label="Twitter"
                  type="text"
                  error={touched.twitter && Boolean(errors.twitter)}
                  helperText={<ErrorMessage name="twitter" />}
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="linkedin"
                  as={TextField}
                  label="Linkedin"
                  type="text"
                  error={touched.linkedin && Boolean(errors.linkedin)}
                  helperText={<ErrorMessage name="instagram" />}
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="github"
                  as={TextField}
                  label="Github"
                  type="text"
                  error={touched.github && Boolean(errors.github)}
                  helperText={<ErrorMessage name="github" />}
                  fullWidth
                  margin="normal"
                />
              </div>
            )}
            {step === 2 && (
              <div className="p-4 rounded-lg mb-4 max-h-80 h-72 w-96 overflow-auto">
                <Autocomplete
                  autoSelect
                  freeSolo={[]}
                  id="works"
                  multiple
                  onChange={(_, value) => setFieldValue("works", value)}
                  options={[]}
                  getOptionLabel={(option) =>
                    [] > 0 ? (option.label ? option.label : option) : option
                  }
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} name={"works"} />
                  )}
                />
              </div>
            )}
            {step === steps.length - 1 && (
              <Button type="submit">{"Guardar"}</Button>
            )}
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

const StepsForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { singUp } = useAuth();

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleSubmit = (values, actions) => {
    //  singUp(values);
    const socialMediaProperties = [
      "instagram",
      "facebook",
      "twitter",
      "linkedin",
      "github",
    ];
    const socialMediaArray = socialMediaProperties
      .filter((property) => values[property] !== "")
      .map((property) => ({ [property]: values[property] }));
    const newValuesWithoutSocialMedia = { ...values };
    socialMediaProperties.forEach((property) => {
      delete newValuesWithoutSocialMedia[property];
    });
    newValuesWithoutSocialMedia.socialMedia = socialMediaArray;
    singUp(newValuesWithoutSocialMedia);
  };

  return (
    <div className="p-14">
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <StepForm step={activeStep} onSubmit={handleSubmit} />
      <div>
        {activeStep === steps.length ? (
          <div className="p-4 rounded-lg mb-4 max-h-80 h-72 overflow-auto z-10">
            <Typography variant="h6">Formulario completado</Typography>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center">
            {activeStep > 0 && <Button onClick={handleBack}>Atrás</Button>}
            {activeStep < 2 && <Button onClick={handleNext}>Siguiente</Button>}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepsForm;
