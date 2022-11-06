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
import ThemeStyleRTL from "../../../../Assets/Style/ThemeStyleRTL";
import { Button, Fab, Grid } from "@mui/material";
import "../../Visit.css";
import {
  identifyingInformationInputs,
  occupancyInformationLabels,
} from "../../Assets";
import SectionTitle from "../../../../Components/VisitPageComponents/VisitPageLayout/SectionTitle";
import { Edit } from "@mui/icons-material";

export default function TenantCard({ apartment }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeStyleRTL>
      <div className="section-general">
        <SectionTitle title="פרטי הלקוח" />
        <Card className="white-box">
          <Grid container spacing={3}>
            {identifyingInformationInputs.map((item, index) => {
              return (
                <>
                  <Grid item md={item.md} key={`label-${index}`}>
                    <div className="label-pos">
                      <b className="card-body-text-label">{item.label}</b>
                    </div>
                    <b className="card-body-text-value">
                      {item.name === "fullName"
                        ? `${apartment?.firstName} ${apartment?.lastName}`
                        : apartment[item.name]}
                    </b>
                  </Grid>
                  {index === 1 && (
                    <Grid
                      item
                      md={1.5}
                      key={`label-${index}`}
                      className="text-end"
                    >
                      <Fab className="edit-fab" aria-label="edit">
                        <Edit />
                      </Fab>
                    </Grid>
                  )}
                </>
              );
            })}

            {/* {index === 1 && (
                  <Grid item sm={3.5}>
                    <div className="label-pos">
                      <b className="card-body-text-label">פרטי הדירה</b>
                    </div>
                    <b className="card-body-text-value">2040-8005-1-010</b>
                  </Grid>
                )} */}
          </Grid>
          <CardActions></CardActions>
        </Card>
      </div>
    </ThemeStyleRTL>
  );
}
