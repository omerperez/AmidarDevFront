import { Card, Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { apartmentDetailsFields } from "../../../Assets/Visit/Maintenance";
import { contexts } from "../../../Contexts/ContextsExports";
import { MaintenanceVisit } from "../../../Data/Builders/Visit";
import { IApartmentDetailsFields } from "../../../Data/Interfaces/Visit";
import { VisitContextType } from "../../../Data/Types/Visit";
import useForm from "../../../Hooks/useForm";
import { ApartmentDetailsInputMui } from "../../../Layouts/Style/MUI/VisitStyle";
import { convertTableCodeToSelectListFormat } from "../../../Services/Visit";
import Input from "../../Global/Input";
import Select from "../../Global/Select";

interface ApartmentDetailsProps {
  maintenanceVisit: MaintenanceVisit;
}

export default function ApartmentDetail({
  maintenanceVisit,
}: ApartmentDetailsProps) {
  const { visitState, setMaintenance } = useContext(
    contexts.Visit,
  ) as VisitContextType;
  const [formValues, handleChange] = useForm();
  const apartmentMaintenanceDetails = maintenanceVisit.apartmentDetails;

  useEffect(() => {
    if (formValues) {
      let apartmentDetails = apartmentMaintenanceDetails;
      apartmentDetailsFields.map((item) => {
        if (formValues[item.name]) {
          return (apartmentDetails = {
            ...apartmentDetails,
            [item.name]: formValues[item.name],
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

  const getDefaultValue = (value: string, name: string) => {
    console.log(visitState.tableCode.get(name));
    const list = convertTableCodeToSelectListFormat(
      visitState.tableCode.get(name),
    );
    for (let i = 0; i < list.length; i++) {
      if (list[i].label === value) {
        return list[i].value;
      }
    }
    return value;
  };

  const getTableCode = (item: IApartmentDetailsFields) => {
    const table = convertTableCodeToSelectListFormat(
      visitState.tableCode.get(item.name),
    );
    if (table.length > 0) {
      return table;
    }
    return [];
  };

  return (
    <ThemeRightToLeft>
      <Card className="apartment-details-box">
        <div className="pl-20">
          <h3 className="mb-none qr-title">פרטי הנכס</h3>
          <Grid container spacing={2} className="mtb-10">
            {apartmentDetailsFields.map((item, index) => (
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
                      list={getTableCode(item)}
                      name={item.name}
                      value={getDefaultValue(
                        `${apartmentMaintenanceDetails[item.name]}`,
                        item.name,
                      )}
                      onChange={handleChange}
                      disabled={getTableCode(item).length === 0}
                    />
                  ) : (
                    <Input
                      onChange={handleChange}
                      isShowLabel={false}
                      readOnly={false}
                      sx={ApartmentDetailsInputMui}
                      name={item.name}
                      variant={"outlined"}
                      value={
                        formValues[item.name] ??
                        apartmentMaintenanceDetails[item.name]
                      }
                      validation={item.validation}
                      type={item.type}
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
