import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Grid, IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { TenantsOccupancyDetails } from "../../../Data/Builders/Visit";
import { contexts } from "../../../Contexts/ContextsExports";
import useForm from "../../../Hooks/useForm";
import { ITenant } from "../../../Data/Interfaces/Visit";
import GenericDialog from "../../Global/GenericDialog";
import EditTenant from "./EditTenant";
import { VisitContextType } from "../../../Data/Types/Visit";

const tenantDemoRowInfo = [
  {
    label: "תעודת זהות",
    name: "id",
  },
  {
    label: "שם מלא",
    name: "fullName",
  },
  {
    label: "מין",
    name: "gender",
  },
  {
    label: "תאריך לידה",
    name: "birthdate",
  },
  {
    label: "מצב משפחתי",
    name: "maritalStatus",
  },
];

interface TenantInfoProps {
  tenantDetails: ITenant;
  occupancyKey: keyof TenantsOccupancyDetails;
}
export default function TenantInfo({
  tenantDetails,
  occupancyKey,
}: TenantInfoProps) {
  const [edit, setEdit] = useState<Boolean>(false);

  const [formValues, changeFormValues, changeState] = useForm();
  const { visitState, setOccupancy } = useContext(
    contexts.Visit
  ) as VisitContextType;

  const handleCancelChanges = () => {
    Object.keys(formValues).map((key) => {
      return changeState(key);
    });
  };

  const handleSaveChanges = () => {
    let update = visitState.occupancyVisit[occupancyKey] as ITenant;

    Object.keys(formValues).map((key) => {
      return (update = {
        ...update,
        [key]: formValues[key],
      });
    });
    const updateProp = {
      ...visitState.occupancyVisit,
      [occupancyKey]: update,
    };
    setOccupancy(updateProp);
  };

  return (
    <Grid container spacing={3}>
      <Grid item sm={0.8} className="text-start">
        <GenericDialog
          children={
            <IconButton
              onClick={() => setEdit(!edit)}
              aria-label="edit"
              size="medium"
            >
              <ModeEditIcon fontSize="inherit" />
            </IconButton>
          }
          title={tenantDetails.fullName}
          closeBtn={false}
          isEditBtn={true}
          saveEdit={handleSaveChanges}
          cancelEdit={handleCancelChanges}
          content={
            <EditTenant
              changeFormValues={changeFormValues}
              formValues={formValues}
              tenantDetails={tenantDetails}
              changeState={changeState}
            />
          }
        />
      </Grid>
      {tenantDemoRowInfo.map((item, key) => (
        <Grid item sm={2.2} key={`tenant-info-${key}`}>
          <div className="label-pos">
            <span className="card-body-text-label">{item.label}</span>
          </div>
          <span className="card-body-text-value">
            {`${tenantDetails[item.name as keyof ITenant]}`}
          </span>
        </Grid>
      ))}
    </Grid>
  );
}
