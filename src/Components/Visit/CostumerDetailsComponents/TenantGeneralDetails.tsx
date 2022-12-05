import { Edit } from "@mui/icons-material";
import { Card, Fab, Grid } from "@mui/material";
import { Fragment, useContext } from "react";
import { TITLES } from "../../../Assets/Constants/VisitConstants";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { generalDetailsFields } from "../../../Assets/Visit/CostumerDetails";
import { contexts } from "../../../Contexts/ContextsExports";
import {
  MainTenantDetails,
  VisitGeneralDetails,
} from "../../../Data/Builders/Visit";
import { VisitContextType } from "../../../Data/Types/Visit";
import useForm from "../../../Hooks/useForm";
import "../../../Layouts/Style/CSS/Visit.css";
import GenericDialog from "../../Global/GenericDialog";
import FieldValue from "../FiledValue";
import SubPageTitle from "../SubPageTitle";
import EditGeneralDetails from "./EditGeneralDetails";

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
    Object.keys(formValues).forEach((key) => {
      return changeState(key);
    });
  };

  const handleSaveChanges = () => {
    let currentDetails = apartment.mainTenantDetails;
    Object.keys(formValues).forEach((key) => {
      if (key === "number") {
        currentDetails.number = formValues.number as number;
      } else {
        currentDetails.street = formValues.street;
      }
    });
    const updateProp = {
      ...visitState.identifyingInformation,
      mainTenantDetails: currentDetails,
    };
    setIdentifyingInfo(updateProp);
  };

  return (
    <ThemeRightToLeft>
      <div className="section-general">
        <SubPageTitle title={TITLES.CLIENT_DETAILS} />
        <Card className="white-box">
          <Grid container spacing={2.5} className="mb-10">
            {generalDetailsFields.map((item, index) => (
              <Fragment key={`tenant-general-details-${index}`}>
                <Grid
                  item
                  sm={item.gridSize}
                  key={`TenantGeneralDetailsLabel-${index}`}
                >
                  <FieldValue
                    label={item.label}
                    value={
                      apartment.mainTenantDetails[
                        item.name as keyof MainTenantDetails
                      ] as string
                    }
                  />
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
                        <Fab className="edit-fab">
                          <Edit />
                        </Fab>
                      }
                      saveEdit={handleSaveChanges}
                      cancelEdit={handleCancelChanges}
                      closeBtn={false}
                      isEditBtn={true}
                      title={apartment.mainTenantDetails.fullName}
                      content={
                        <EditGeneralDetails
                          mainTenantDetails={apartment.mainTenantDetails}
                          changeFormValues={changeFormValues}
                          formValues={formValues}
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
