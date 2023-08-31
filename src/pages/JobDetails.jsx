import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Link,
  TextField,
  Button,
  Grid,
  FormControl,
  Input,
} from "@mui/material";
import { Autocomplete } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { getJobDetailsRequest, updateJobRequest } from "../api/crud";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const JobDetails = ({
  title,
  description,
  technologies,
  link,
  createdAt,
  onEdit,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <CardContent>
        <Typography variant="h7" className="mb-2 font-bold">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" className="mb-2">
          Created at: {new Date(createdAt).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" className="mb-4">
          {description}
        </Typography>
        <Typography variant="subtitle2" className="mb-2">
          Technologies:
        </Typography>
        <div className="flex flex-wrap mb-4">
          {technologies?.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              className="mr-2 mb-2"
              color="primary"
            />
          ))}
        </div>
        <Typography variant="subtitle2" className="mb-2">
          Link:{" "}
          <Link
            href={link}
            target="_blank"
            rel="noopener"
            className="text-blue-500"
          >
            {link}
          </Link>
        </Typography>
        <div className="flex flex-col">
          <button onClick={onEdit} className="text-blue-500 hover:underline">
            Editar
          </button>
          <button
            onClick={() => navigate("/all-jobs")}
            className="mb-4 text-blue-500 hover:underline"
          >
            Ir a todos los trabajos
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const EditableJobDetails = ({ title, description, technologies, link, id }) => {
  const navigate = useNavigate();
  const initialValues = {
    title: title,
    description: description,
    images: [],
    technologies: technologies,
    link: link,
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
  const handleSubmit = async (values) => {
    try {
      const res = await updateJobRequest(id, values);
      if (!res.data) {
        return;
      }

      setdata(res.data);
    } catch (error) {}
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Editar trabajo</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className={styles.form}>
            <Grid
              container
              spacing={3}
              className="justify-center"
              maxWidth="md"
            >
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
              <Grid item xs={12}>
                <Button
                  className={styles.submitButton}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Guardar
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={styles.submitButton}
                  onClick={() => navigate("/all-jobs")}
                  variant="contained"
                  color="primary"
                >
                  Ir a todos los trabajos
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const JobDetailsPage = () => {
  const { isAuth } = useAuth();
  const { id } = useParams();
  const [data, setdata] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  async function getMyJobs() {
    try {
      const res = await getJobDetailsRequest(id);
      if (!res.data) {
        return;
      }

      setdata(res.data);
    } catch (error) {}
  }
  useEffect(() => {
    if (isAuth) {
      getMyJobs();
    }
  }, [isAuth]);

  return (
    <div className="flex justify-center min-h-screen bg-gray-300 p-6">
      {isEditing ? (
        <EditableJobDetails
          title={data.title}
          description={data.description}
          technologies={data.technologies}
          link={data.link}
          createdAt={data.createdAt}
          id={id}
          // addToast={addToast}
        />
      ) : (
        <JobDetails
          title={data.title}
          description={data.description}
          technologies={data.technologies}
          link={data.link}
          createdAt={data.createdAt}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  );
};

export default JobDetailsPage;
