import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Grid, IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { contexts } from "../../../Contexts/ContextsExports";
import useForm from "../../../Hooks/useForm";
import { INismach } from "../../../Data/Interfaces/Visit";
import GenericDialog from "../../Global/GenericDialog";
import EditNismach from "./EditNismach";
import { VisitContextType } from "../../../Data/Types/Visit";

const nismachLabelsProps = [
  {
    label: "תעודת זהות",
    name: "id",
  },
  {
    label: "שם מלא",
    name: "fullName",
  },
  {
    label: "סוג קרבה",
    name: "kindOfFamilyRelationship",
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

interface NismachInfoProps {
  nismachIndex: number;
}
export default function NismachInfo({ nismachIndex }: NismachInfoProps) {
  const [edit, setEdit] = useState<Boolean>(false);
  const [formValues, changeFormValues, changeState] = useForm();
  const { visitState, setOccupancy } = useContext(
    contexts.Visit
  ) as VisitContextType;
  const [currentNismach, setCurrentNismach] = useState<INismach[]>(
    visitState.occupancyVisit.otherTenants
  );

  useEffect(() => {
    setCurrentNismach(visitState.occupancyVisit.otherTenants);
  }, [visitState.occupancyVisit.otherTenants]);

  const handleClickSave = () => {
    const otherTenants: INismach[] = visitState.occupancyVisit.otherTenants;
    let updateNismach: INismach =
      visitState.occupancyVisit.otherTenants[nismachIndex];
    Object.keys(formValues).map((key) => {
      return (updateNismach = {
        ...updateNismach,
        [key]: formValues[key],
      });
    });
    updateNismach.fullName = `${updateNismach.firstName} ${updateNismach.lastName}`;
    otherTenants[nismachIndex] = updateNismach;
    setCurrentNismach(otherTenants);
    setOccupancy({
      ...visitState.occupancyVisit,
      otherTenants: otherTenants,
    });
  };

  const handleClickCancel = () => {
    Object.keys(formValues).map((key) => {
      return changeState(key);
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item sm={0.8} className="text-start">
        <GenericDialog
          saveEdit={handleClickSave}
          cancelEdit={handleClickCancel}
          isEditBtn={true}
          children={
            <IconButton
              onClick={() => setEdit(!edit)}
              aria-label="edit"
              size="medium"
            >
              <ModeEditIcon fontSize="inherit" />
            </IconButton>
          }
          title={currentNismach[nismachIndex].fullName}
          closeBtn={false}
          content={
            <EditNismach
              changeFormValues={changeFormValues}
              formValues={formValues}
              nismachDetails={currentNismach[nismachIndex]}
              changeState={changeState}
            />
          }
        />
      </Grid>
      {nismachLabelsProps.map((item, key) => (
        <Grid item sm={2.2} key={`tenant-info-${key}`}>
          <div className="label-pos">
            <span className="card-body-text-label">{item.label}</span>
          </div>
          <span className="card-body-text-value">
            {`${currentNismach[nismachIndex][item.name as keyof INismach]}`}
          </span>
        </Grid>
      ))}
    </Grid>
  );
}
