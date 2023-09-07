import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Grid,
  Input,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Autocomplete } from "@mui/material";
import styles from "./styles.module.css";
import { useAuth } from "../context/AuthContext";

function AboutMeRegister() {
  const { createAboutme } = useAuth();
  const initialValues = {
    description: "",
    images: [],
    other: "",
  };
  const validationSchema = Yup.object().shape({
    description: Yup.string().required("Required"),
    other: Yup.string().required("Required"),
  });

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("description", values.description);
    formData.append("other", values.technologies);
    for (let i = 0; i < values.images.length; i++) {
      formData.append(`images`, values.images[i]);
    }
    createAboutme(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h2 className={styles.formTitle}>Crear una nueva descripción</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form className="w-full p-3">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Field
                    name="description"
                    as={TextField}
                    label="Description"
                    fullWidth
                    multiline
                    rows={4}
                    helperText={touched.description && errors.description}
                    error={touched.description && Boolean(errors.description)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    name="other"
                    as={TextField}
                    label="Otros"
                    fullWidth
                    multiline
                    helperText={touched.other && errors.other}
                    error={touched.other && Boolean(errors.other)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <Input
                      type="file"
                      inputProps={{ multiple: true }}
                      onChange={(event) => {
                        setFieldValue("images", event.currentTarget.files);
                      }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12}>
                <Button
                  className="m-2"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Guardar
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>{" "}
    </div>
  );
}

export default AboutMeRegister;
