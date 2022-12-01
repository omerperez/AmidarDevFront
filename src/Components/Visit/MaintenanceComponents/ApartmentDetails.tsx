import { Card, Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { apartmentDetailsLabels } from "../../../Assets/Visit/Maintenance";
import { MaintenanceVisit } from "../../../Data/Builders/VisitHomeDemo";
import { contexts } from "../../../Contexts/ContextsExports";
import useForm from "../../../Hooks/useForm";
import Input from "../../Global/Input";
import Select from "../../Global/Select";
import { VisitContextType } from "../../../Data/Types/Visit";

interface ApartmentDetailsProps {
  maintenanceVisit: MaintenanceVisit;
}
export default function ApartmentDetail({
  maintenanceVisit,
}: ApartmentDetailsProps) {
  const { setMaintenance } = useContext(contexts.Visit) as VisitContextType;
  const [formValues, handleChange] = useForm();
  const apartmentMaintenanceDetails = maintenanceVisit.apartmentDetails;
  useEffect(() => {
    if (formValues) {
      let apartmentDetails = apartmentMaintenanceDetails;
      apartmentDetailsLabels.map((item) => {
        if (formValues[item.values.name]) {
          return (apartmentDetails = {
            ...apartmentDetails,
            [item.values.name]: formValues[item.values.name],
          });
        }
      });
      const updateMaintenanceVisit = {
        ...maintenanceVisit,
        apartmentDetails: apartmentDetails,
      };
      setMaintenance(updateMaintenanceVisit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues]);

  return (
    <ThemeRightToLeft>
      <Card className="apartment-details-box">
        <div className="pl-20">
          <h3 className="mb-none qr-title">פרטי הנכס</h3>
          <Grid container spacing={2} className="mtb-10">
            {apartmentDetailsLabels.map((item, index) => (
              <Grid
                item
                sm={item.gridSize}
                key={`ApartmentDetails-Grid-${index}`}
              >
                <span className="card-body-text-label">{item.label}</span>
                <br />
                <span className="card-body-text-value">
                  {item.type === "select" ? (
                    <Select
                      list={item.values.list}
                      name={item.values.name}
                      value={`${apartmentMaintenanceDetails[item.values.name]}`}
                      onChange={handleChange}
                    />
                  ) : (
                    <Input
                      onChange={handleChange}
                      isShowLabel={item.values.isShowLabel}
                      readOnly={item.values.readOnly}
                      sx={item.values.sx}
                      name={item.values.name}
                      variant={item.values.variant}
                      value={
                        formValues[item.values.name] ??
                        apartmentMaintenanceDetails[item.values.name]
                      }
                      validation={item.validation}
                      type="number"
                    />
                  )}
                </span>
              </Grid>
            ))}
          </Grid>
        </div>
      </Card>
    </ThemeRightToLeft>
  );
}
