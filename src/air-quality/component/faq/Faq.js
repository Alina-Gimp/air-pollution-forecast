import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";

function Faq() {
  return (
    <div>
      <h3 className="faq">FAQ</h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight: "bold"}}>How are air pollution indicators calculated?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Indicators display the average value per day.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: "bold"}}>Why is it important to monitor air quality?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Air quality directly affects health. If regularly breathe polluted air, diseases of the cardiovascular, respiratory and nervous systems can exacerbate, the risk of diabetes and cancer increases.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Faq;