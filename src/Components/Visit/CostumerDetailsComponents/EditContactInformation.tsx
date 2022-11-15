import { Fragment } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { Grid } from "@mui/material";
import { contactInfoLabels } from "../../../Assets/Visit";
import "../../../Layouts/Style/Visit.css";
import Input from "../../Global/Input";
import TextArea from "../../Global/TextArea";

export default function EditContactInformation() {
  return (
    <div style={{ minWidth: 900 }}>
      <ThemeRightToLeft>
        <Grid container spacing={3}>
          {contactInfoLabels.map((item, index) => {
            return (
              <Fragment key={`EditContactInformationFragment-${index}`}>
                {index === contactInfoLabels.length - 1 ? (
                  <Grid
                    item
                    md={12}
                    key={`EditContactInformationFragmentLabel-${index}`}
                  >
                    <TextArea
                      title={item.label}
                      value={item.value}
                      name={item.name}
                      minRow={5}
                      required={false}
                    />
                  </Grid>
                ) : item.name.includes("firstContactName") ? (
                  <Fragment
                    key={`EditContactInformationFragmentLabel-${index}`}
                  >
                    <Grid item md={3} key={`another-phone-label-${index}`}>
                      <Input
                        label={
                          item.name === "firstContactName"
                            ? "שם איש קשר"
                            : "שם איש קשר 2"
                        }
                        value={item.label}
                        onChange={() => console.log("omer")}
                        variant={"outlined"}
                        readOnly={false}
                        name={item.name}
                        isShowLabel={true}
                        style={{ marginBottom: 20 }}
                        sx={{ height: 35 }}
                      />
                    </Grid>
                    <Grid
                      item
                      md={3}
                      key={`EditContactInformationLabel-${index}`}
                    >
                      <Input
                        label={
                          item.name === "firstContactName"
                            ? "נייד איש קשר"
                            : "נייד איש קשר 2"
                        }
                        value={item.value}
                        onChange={() => console.log("omer")}
                        variant={"outlined"}
                        readOnly={false}
                        name={item.name}
                        isShowLabel={true}
                        style={{ marginBottom: 20 }}
                        sx={{ height: 35 }}
                      />
                    </Grid>
                  </Fragment>
                ) : (
                  <Grid
                    item
                    md={3}
                    key={`EditContactInformationLabel-${index}`}
                  >
                    <Input
                      label={item.label}
                      value={item.value}
                      onChange={() => console.log("omer")}
                      variant={"outlined"}
                      readOnly={false}
                      name={item.name}
                      isShowLabel={true}
                      style={{ marginBottom: 20 }}
                      sx={{ height: 35 }}
                    />
                  </Grid>
                )}
              </Fragment>
            );
          })}
        </Grid>
      </ThemeRightToLeft>
    </div>
  );
}
