import React, { useState } from "react";
import {
  TextField,
  Autocomplete,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import "../App.css";
import img from "../assets/sample1.jpg";

const Expensive = () => {
  const options = ["Madhan", "Alex", "Thennarasi", "Shahul"];
  const travelReasons = ["Business", "Personal", "Family", "Friends"];
  const [formData, setFormData] = useState({
    name: "",
    project: "",
    fromDate: "",
    toDate: "",
    travelReason: "",
    travelType: "",
    modeOfTransport: "",
    fuelCost: "",
    tollCharges: "",
    driverCost: "",
    foodCost: "",
    accommodationCost: "",
    durationOfStay: "",
    hospitalCharges: "",
    documentationFees: "",
    visaCharges: "",
    flightTicketCost: "",
    shuttleCost: "",
    governmentServiceCost: "",
    numberOfPersons: "",
  });
  const baseURL = "https://tracker-server-m9vs.onrender.com"
  const baseURL1="http://localhost:5000"
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${baseURL}/api/v1/expenses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Form Submitted Successfully:", result);
      alert("Form Submitted Successfully");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form");
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="background">
      <div className="image">
        <img src={img} alt="Background" />
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Expense Tracker</h2>
          <div className="form-section">
            <Autocomplete
              options={options}
              value={formData.name}
              onChange={(event, newValue) => {
                setFormData({ ...formData, name: newValue });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Name of the Person"
                  variant="outlined"
                  className="form-field"
                />
              )}
            />

            <div className="form-row">
              <TextField
                label="From Date"
                type="date"
                value={formData.fromDate}
                onChange={handleInputChange}
                name="fromDate"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                className="form-field"
              />

              <TextField
                label="To Date"
                type="date"
                value={formData.toDate}
                onChange={handleInputChange}
                name="toDate"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                className="form-field"
              />
            </div>

            <TextField
              label="Name of the Project"
              variant="outlined"
              value={formData.project}
              onChange={handleInputChange}
              name="project"
              className="form-field"
            />

            <Autocomplete
              options={travelReasons}
              value={formData.travelReason}
              onChange={(event, newValue) => {
                setFormData({ ...formData, travelReason: newValue });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Travel Reason"
                  name="travelReason"
                  variant="outlined"
                  className="form-field"
                />
              )}
            />

            <TextField
              select
              label="Travel Type"
              variant="outlined"
              className="form-field"
              value={formData.travelType}
              onChange={handleInputChange}
              name="travelType"
            >
              <MenuItem value="domestic">Domestic</MenuItem>
              <MenuItem value="international">International</MenuItem>
            </TextField>

            {/* Domestic and International Forms */}
            {formData.travelType === "domestic" && (
              <>
                <h3 className="section-title">Domestic Travel</h3>
                <FormControl variant="outlined" className="form-field">
                  <InputLabel>Mode of Transport</InputLabel>
                  <Select
                    name="modeOfTransport"
                    value={formData.modeOfTransport}
                    onChange={handleInputChange}
                    label="Mode of Transport"
                  >
                    <MenuItem value="car">Car</MenuItem>
                    <MenuItem value="bus">Bus</MenuItem>
                    <MenuItem value="train">Train</MenuItem>
                  </Select>
                </FormControl>

                {formData.modeOfTransport === "car" && (
                  <>
                    <TextField
                      label="Fuel Cost"
                      variant="outlined"
                      className="form-field"
                      value={formData.fuelCost}
                      onChange={handleInputChange}
                      name="fuelCost"
                    />
                    <TextField
                      label="driverCost"
                      variant="outlined"
                      className="form-field"
                      value={formData.driverCost}
                      onChange={handleInputChange}
                      name="driverCost"
                    />
                    <TextField
                      label="Toll Charges"
                      variant="outlined"
                      className="form-field"
                      value={formData.tollCharges}
                      onChange={handleInputChange}
                      name="tollCharges"
                    />
                  </>
                )}

                {formData.modeOfTransport === "bus" && (
                  <>
                    <TextField
                      label="Fuel Cost"
                      variant="outlined"
                      className="form-field"
                      value={formData.fuelCost}
                      onChange={handleInputChange}
                      name="fuelCost"
                    />
                    <TextField
                      label="Toll Charges"
                      variant="outlined"
                      className="form-field"
                      value={formData.tollCharges}
                      onChange={handleInputChange}
                      name="tollCharges"
                    />
                  </>
                )}
                {formData.modeOfTransport === "train" && (
                  <>
                    <TextField
                      label="foodCost"
                      variant="outlined"
                      className="form-field"
                      value={formData.foodCost}
                      onChange={handleInputChange}
                      name="foodCost"
                    />
                    <TextField
    
                      label="governmentServiceCost"
                      variant="outlined"
                      className="form-field"
                      value={formData.governmentServiceCost}
                      onChange={handleInputChange}
                      name="governmentServiceCost"
                    />
                  </>
                )}
              </>
            )}

            {formData.travelType === "international" && (
              <div className="flex flex-col gap-4 justify-center align-center items-center">
                <h3 className="section-title">International Travel</h3>
                <TextField
                  label="visaCharges"
                  variant="outlined"
                  className="form-field"
                  value={formData.visaCharges}
                  onChange={handleInputChange}
                  name="visaCharges"
                />

                <TextField
                  label="shuttleCost"
                  variant="outlined"
                  className="form-field"
                  value={formData.shuttleCost}
                  onChange={handleInputChange}
                  name="shuttleCost"
                />
                <TextField
                  label="governmentServiceCost"
                  variant="outlined"
                  className="form-field"
                  value={formData.governmentServiceCost}
                  onChange={handleInputChange}
                  name="governmentServiceCost"
                />

                <TextField
                  label="numberOfPersons"
                  variant="outlined"
                  className="form-field"
                  value={formData.numberOfPersons}
                  onChange={handleInputChange}
                  name="numberOfPersons"
                />
              </div>
            )}
            <Button variant="contained" type="submit" className="submit-button">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Expensive;
