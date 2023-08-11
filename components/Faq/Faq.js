import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FaqData from './Faq.json';

export default function SimpleAccordion() {
  return (
    <div style={{ width: '100%' }}>
      {FaqData.map((faq) => (
        <div key={faq.question} style={{ marginBottom: '20px', borderRadius: '10px' }}>
          <Accordion
            variant="outlined"
            elevation={0} // Remove the box shadow
            sx={{
              borderRadius: '3', // Add border radius
              '&:before': {
                display: 'none', // Remove the default border
              },
              '&.Mui-expanded': {
                margin: 0, // Remove margin when expanded
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                '&.Mui-expanded': {
         
                },
              }}
            >
              <Typography variant="h6"
                sx={{ fontWeight: 400,  }}
                gutterBottom
                component="div">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1"
                color="text.secondary"
                gutterBottom
                component="div">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
