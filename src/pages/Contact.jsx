import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import CustomModal from "../components/CustomModal";

const Contact = () => {
  const { nickname } = useParams();
  const [open, setopen] = useState(true);
  const handleClose = () => {
    setopen(false);
  };
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nombre es requerido"),
    email: Yup.string()
      .email("Formato de correo inválido")
      .required("Correo es requerido"),
    message: Yup.string().required("Mensaje es requerido"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
    resetForm();
  };

  return (
    <div id="aboutme" className="animate-fade-in">
      <div className="w-full h-screen bg-gradient-to-bl from-green-900 via-green-800 to-black  " />
      <div className="w-full h-screen flex items-center justify-center absolute top-0 left-0  ">
        <div className="max-w-[700px] m-auto h-screen md:h-[600px] w-full flex flex-col justify-center lg:items-start lg:justify-start items-center">
          <div className="flex justify-center space-x-5 pt-6  w-full">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="bg-white bg-opacity-50 p-8 rounded shadow-md md:w-[600px] sm:w-[300px]">
                  <div className="mb-4">
                    <Field
                      name="name"
                      as={TextField}
                      label="Nombre"
                      variant="outlined"
                      fullWidth
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      name="email"
                      as={TextField}
                      label="Correo Electrónico"
                      variant="outlined"
                      fullWidth
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      name="message"
                      as={TextField}
                      label="Mensaje"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button type="submit" variant="contained" color="primary">
                      Enviar
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <CustomModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Contact;
