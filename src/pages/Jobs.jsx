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

function Jobs() {
  const { createJobs } = useAuth();
  const [base64Image, setBase64Image] = useState("");

  const initialValues = {
    title: "",
    description: "",
    images: [],
    technologies: [],
    link: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    link: Yup.string().url("Invalid URL").required("Required"),
  });
  const technologiesOptions = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Redux",
    "Material-UI",
    "Yup",
    "JavaScript",
    "GraphQL",
    "CSS",
  ];

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("technologies", values.technologies);
    formData.append("link", values.link);
    for (let i = 0; i < values.images.length; i++) {
      formData.append(`images`, values.images[i]);
    }
    createJobs(formData);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h2 className={styles.formTitle}>Crear un nuevo trabajo</h2>
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
                    name="title"
                    as={TextField}
                    label="Title"
                    fullWidth
                    helperText={touched.title && errors.title}
                    error={touched.title && Boolean(errors.title)}
                  />
                </Grid>
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
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <Autocomplete
                      name="technologies"
                      multiple
                      options={technologiesOptions}
                      value={values.technologies}
                      onChange={(event, newValue) => {
                        setFieldValue("technologies", newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={
                            touched.technologies && Boolean(errors.technologies)
                          }
                          helperText={
                            touched.technologies && errors.technologies
                          }
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    name="link"
                    as={TextField}
                    label="Link"
                    fullWidth
                    helperText={touched.link && errors.link}
                    error={touched.link && Boolean(errors.link)}
                  />
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

export default Jobs;
