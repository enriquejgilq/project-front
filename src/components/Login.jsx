import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { isAuth, singIn } = useAuth();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    singIn(values);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/jobs");
    }
  }, [isAuth]);

  return (
    <div className="flex justify-center items-center p-28">
      <div className="p-4 rounded-lg mb-4 max-h-80  ">
        <Paper className="p-6 w-96" elevation={3}>
          <Typography variant="h5" gutterBottom>
            Inicio de sesión
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
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
                  className="mt-4"
                >
                  Iniciar sesión
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </div>
    </div>
  );
}

export default Login;
