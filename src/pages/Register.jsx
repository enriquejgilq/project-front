import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { singUp, isAuth } = useAuth();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
  });
  const initialValues = {
    userName: "",
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    singUp(values);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/jobs");
    }
  }, [isAuth]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                Registro
              </Typography>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit} // Agrega esta línea
              >
                {({ errors, touched }) => (
                  <Form>
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
                      type="password"
                      error={touched.password && Boolean(errors.password)}
                      helperText={<ErrorMessage name="password" />}
                      fullWidth
                      margin="normal"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      //onClick={() => console.log("aqui??")}
                      style={{ marginTop: "10px" }}
                    >
                      Registrarse
                    </Button>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Register;
