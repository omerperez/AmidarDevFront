import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThemeStyleRTL from "../../Assets/Style/ThemeStyleRTL";
import { Button, Grid } from "@mui/material";
import "./Visit.css";
import { occupancyInformationLabels } from "./Assets";
import SectionTitle from "../../Components/VisitPageComponents/VisitPageLayout/SectionTitle";

export default function OccuancyInfoCard({ apartment }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeStyleRTL>
      <SectionTitle title={`${apartment.firstName} ${apartment.lastName}`} />
      <Card className="white-box">
        <Grid container spacing={1.35}>
          {occupancyInformationLabels.map((item, index) => {
            <Grid item sm={4} key={item.lable}>
              <div className="label-pos">
                <b className="card-body-text-label">{item.label}</b>
              </div>
              <b className="card-body-text-value">
                {apartment[item.name]}{" "}
                {item.name === "area" && <span> מ"ר</span>}
              </b>
            </Grid>;
          })}
        </Grid>
        {/* <CardContent>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent> */}
        <CardActions>
          {/* <Grid container spacing={2}>
            <Grid item sm={6}>
              <Button
                onClick={handleExpandClick}
                variant="contained"
                fullWidth
                sx={{
                  color: "#0087c7",
                  background: "white",
                  border: "solid 1px #0087c7",
                }}
              >
                עדכן פרטי דירה
              </Button>
            </Grid>
            <Grid item sm={6}>
              <Button
                onClick={handleExpandClick}
                variant="contained"
                fullWidth
                sx={{
                  color: "#0087c7",
                  background: "white",
                  border: "solid 1px #0087c7",
                }}
              >
                עדכן פרטי תקשורת
              </Button>
            </Grid>{" "}
          </Grid> */}

          {/* <ExpandMoreIcon /> */}
          {/* </ExpandMore> */}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeStyleRTL>
  );
}
