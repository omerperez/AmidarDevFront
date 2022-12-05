import { AddCircleOutline } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { contexts } from "../../../Contexts/ContextsExports";
import { INismach } from "../../../Data/Interfaces/Visit";
import { VisitContextType } from "../../../Data/Types/Visit";
import "../../../Layouts/Style/CSS/Visit.css";
import GenericDialog from "../../Global/GenericDialog";
import Input from "../../Global/Input";

const tenantDemoRowInfo = [
  {
    label: "תעודת זהות",
    name: "id",
    type: "id",
  },
  {
    label: "שם פרטי",
    name: "firstName",
    type: "text",
  },
  {
    label: "שם משפחה",
    name: "lastName",
    type: "text",
  },
  {
    label: "תאריך לידה",
    name: "birthdate",
    type: "date",
  },
  {
    label: "סוג קרבה",
    name: "kindOfFamilyRelationship",
    type: "select",
  },
  {
    label: "מצב משפחתי",
    name: "maritalStatus",
    type: "select",
  },
  {
    label: "אחוז נכות",
    name: "disabilityPercentage",
    type: "number",
  },
  {
    label: "תאריך תחילת נכות",
    name: "disabilityStartDate",
    type: "date",
  },
  {
    label: "תאריך הגבלת נכות",
    name: "disabilityEndDate",
    type: "date",
  },
  {
    label: `תאריך תחילת שרות סדיר בצה"ל`,
    name: "militaryServiceStartDate",
    type: "date",
  },
  {
    label: `תאריך סיום שרות סדיר בצה"ל`,
    name: "militaryServiceEndDate",
    type: "date",
  },
];

export default function AddNismach() {
  const [createTenant, setCreateTenant] = useState<INismach>({
    id: "",
    firstName: "",
    lastName: "",
    fullName: "",
    birthdate: "",
    kindOfFamilyRelationship: "",
    maritalStatus: "",
    disabilityPercentage: null,
    disabilityStartDate: "",
    disabilityEndDate: "",
    militaryServiceStartDate: "",
    militaryServiceEndDate: "",
  });

  const handleChange = (e: ChangeEvent<any>) => {
    setCreateTenant({
      ...createTenant,
      [e.target.name]: e.target.value,
    });
  };

  const { visitState, setOccupancy } = useContext(
    contexts.Visit
  ) as VisitContextType;
  const handleClickSave = () => {
    const otherTenants = visitState.occupancyVisit.otherTenants;
    const otherTenantsWithNewNismach: INismach[] =
      otherTenants.length > 0 ? otherTenants : [];
    setCreateTenant({
      ...createTenant,
      fullName: `${createTenant.firstName} ${createTenant.lastName}`,
    });
    otherTenantsWithNewNismach.push(createTenant);

    const updateOccupancy = {
      ...visitState.occupancyVisit,
      otherTenants: otherTenantsWithNewNismach,
    };
    setOccupancy(updateOccupancy);
  };

  return (
    <div style={{ paddingTop: 8 }}>
      <GenericDialog
        isEditBtn={true}
        closeBtn={false}
        saveEdit={handleClickSave}
        cancelEdit={() => {}}
        children={
          <Button className="neg-mt-10">
            <AddCircleOutline />
          </Button>
        }
        content={
          <ThemeRightToLeft>
            <Grid container spacing={3}>
              {tenantDemoRowInfo.map((tenant, index) => {
                return (
                  <Grid item md={4} key={`tenantDemoRowInfo-label-${index}`}>
                    <Input
                      label={tenant.label}
                      value={createTenant[tenant.name as keyof INismach] ?? ""}
                      onChange={handleChange}
                      variant={"outlined"}
                      readOnly={false}
                      name={tenant.name}
                      isShowLabel={true}
                      style={{ marginBottom: 20 }}
                      sx={{ height: 35 }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </ThemeRightToLeft>
        }
      />
    </div>
  );
}
