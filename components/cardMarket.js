import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

import AvatarChip from "./avatarChip";
import UsedInTasks from "./usedInTask";
import UsedInCraft from "./usedInCraft";
import UsedInBarter from "./usedInBarter";

export default function CardMarket({ items }) {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {items.map(
        ({
          name,
          iconLink,
          sellFor,
          craftsUsing,
          bartersUsing,
          usedInTasks,
          description,
        }) => (
          <Grid item xs={4}>
            <Card variant="outlined">
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography
                      sx={{ fontSize: 16 }}
                      color="text.primary"
                      gutterBottom
                    >
                      {name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 12 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {description}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" justifyContent="flex-end">
                      <img src={iconLink}></img>
                    </Box>
                  </Grid>
                  {sellFor.map(({ price, source }) => (
                    <Grid item xs={4}>
                      <AvatarChip
                        trader={source}
                        price={price.toLocaleString()}
                      />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
            {usedInTasks.length > 0 ? (
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Quest</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <UsedInTasks tasks={usedInTasks} />
                </AccordionDetails>
              </Accordion>
            ) : (
              ""
            )}
            {craftsUsing.length > 0 ? (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Craft</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <UsedInCraft craftsUsing={craftsUsing} />
                </AccordionDetails>
              </Accordion>
            ) : (
              ""
            )}
            {bartersUsing.length > 0 ? (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Trade</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <UsedInBarter bartersUsing={bartersUsing} />
                </AccordionDetails>
              </Accordion>
            ) : (
              ""
            )}
          </Grid>
        )
      )}
    </>
  );
}
