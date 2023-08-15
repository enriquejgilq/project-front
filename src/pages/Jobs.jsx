import React from "react";
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

import { useAuth } from "../context/AuthContext";

function Jobs() {
  const { createJobs } = useAuth();

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
  ];
  const handleSubmit = (values) => {
    createJobs(values);
    console.log(values);
  };
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Submit Project</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  name="title"
                  as={TextField}
                  label="Title"
                  fullWidth
                  helperText={touched.title && errors.title}
                  error={touched.title && Boolean(errors.title)}
                />
              </Grid>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Images</InputLabel>
                  <Input
                    type="file"
                    inputProps={{ multiple: true }}
                    onChange={(event) => {
                      setFieldValue("images", event.currentTarget.files);
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Technologies</InputLabel>
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
                        helperText={touched.technologies && errors.technologies}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
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
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Jobs;
