import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getJobRequest, deleteJobRequest } from "../api/crud";

const JobList = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const [dataJobs, setdataJobs] = useState([]);

  const handleAccordionClick = (link) => {
    navigate(link);
  };
  const handleDeleteJob = async (jobId) => {
    try {
      await deleteJobRequest(jobId); // Realiza la petición de eliminación
      getJobs(); // Actualiza la lista de trabajos después de eliminar
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };
  useEffect(() => {
    if (isAuth) {
      getJobs();
    }
  }, [isAuth]);

  async function getJobs() {
    try {
      const res = await getJobRequest();
      if (!res.data) {
        return;
      }
      setdataJobs(res.data);
    } catch (error) {}
  }
  if (dataJobs.length === 0) {
    return (
      <div className="max-w-3xl mx-auto text-center py-8">
        <Typography variant="h6">
          No hay trabajos creados. Agrega nuevos trabajos.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/jobs")}>
          Crear nuevos trabajos
        </Button>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto">
      {dataJobs.map((item, index) => (
        <Accordion key={index} className="mb-4 shadow-md">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="bg-gray-100 cursor-pointer"
          >
            <Typography
              variant="h7"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-200">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>{item.description}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Technologies: {item.technologies.join(", ")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  onClick={() =>
                    handleAccordionClick(`/detail-jobs/${item._id}`)
                  }
                >
                  Ver detalles
                </Button>
                {isAuth && (
                  <IconButton
                    onClick={() => handleDeleteJob(item._id)}
                    color="secondary"
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

const AllJobs = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-300 p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Mi lista de trabajos
        </h1>
        <JobList />
      </div>
    </div>
  );
};
export default AllJobs;
