import { Edit } from "@mui/icons-material";
import { Card, Fab, Grid } from "@mui/material";
import { Fragment, useContext, useEffect } from "react";
import { TITLES } from "../../../Assets/Constants/VisitConstants";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { identifyingInformationInputs } from "../../../Assets/Visit";
import {
  MainTenantDetails,
  VisitGeneralDetails,
} from "../../../Data/Builders/Visit";
import { contexts } from "../../../Contexts/ContextsExports";
import useForm from "../../../Hooks/useForm";
import "../../../Layouts/Style/CSS/Visit.css";
import GenericDialog from "../../Global/GenericDialog";
import SubPageTitle from "../SubPageTitle";
import EditGeneralDetails from "./EditGeneralDetails";
import { VisitContextType } from "../../../Data/Types/Visit";

interface TenantGeneralDetailsProps {
  apartment: VisitGeneralDetails;
}

export default function TenantGeneralDetails({
  apartment,
}: TenantGeneralDetailsProps) {
  const [formValues, changeFormValues, changeState] = useForm();
  const { visitState, setIdentifyingInfo } = useContext(
    contexts.Visit,
  ) as VisitContextType;

  const handleCancelChanges = () => {
    Object.keys(formValues).map((key) => {
      return changeState(key);
    });
  };

  const handleSaveChanges = () => {
    let update = apartment.mainTenantDetails;
    Object.keys(formValues).map((key) => {
      return (update = {
        ...update,
        [key]: formValues[key],
      });
    });
    const updateProp = {
      ...visitState.identifyingInformation,
      mainTenantDetails: update,
    };
    setIdentifyingInfo(updateProp);
  };

  return (
    <ThemeRightToLeft>
      <div className="section-general">
        <SubPageTitle title={TITLES.CLIENT_DETAILS} />
        <Card className="white-box">
          <Grid container spacing={2.5} className="mb-10">
            {identifyingInformationInputs.map((item, index) => (
              <Fragment key={`tenant-general-details-${index}`}>
                <Grid
                  item
                  md={item.md}
                  key={`TenantGeneralDetailsLabel-${index}`}
                >
                  <div className="label-pos">
                    <span className="card-body-text-label">{item.label}</span>
                  </div>
                  <span className="card-body-text-value">
                    {item.name === "firstName"
                      ? `${apartment.mainTenantDetails.firstName} ${apartment.mainTenantDetails.lastName}`
                      : apartment.mainTenantDetails[
                          item.name as keyof MainTenantDetails
                        ]}
                  </span>
                </Grid>
                {index === 1 && (
                  <Grid
                    item
                    md={1.5}
                    key={`label-dialog-${index}`}
                    className="text-end"
                  >
                    <GenericDialog
                      children={
                        <Fab className="edit-fab" aria-label="edit">
                          <Edit />
                        </Fab>
                      }
                      saveEdit={handleSaveChanges}
                      cancelEdit={handleCancelChanges}
                      closeBtn={false}
                      isEditBtn={true}
                      title={
                        apartment.mainTenantDetails.firstName +
                        " " +
                        apartment.mainTenantDetails.lastName
                      }
                      content={
                        <EditGeneralDetails
                          changeFormValues={changeFormValues}
                          formValues={formValues}
                          mainTenantDetails={apartment.mainTenantDetails}
                        />
                      }
                    />
                  </Grid>
                )}
              </Fragment>
            ))}
          </Grid>
        </Card>
      </div>
    </ThemeRightToLeft>
  );
}
