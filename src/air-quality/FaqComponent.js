import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 function SimpleAccordion() {
  return (
    <div>
      <h3 className="faq">FAQ</h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>How are air pollution indicators calculated?</h4></Typography>
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
          <Typography><h4>Why is it important to monitor air quality?</h4></Typography>
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
export default SimpleAccordion;
