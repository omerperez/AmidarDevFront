import { Edit } from "@mui/icons-material";
import { Card, Fab, Grid } from "@mui/material";
import { Fragment, useContext } from "react";
import { TITLES } from "../../../Assets/Constants/VisitConstants";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { contactFields } from "../../../Assets/Visit/CostumerDetails";
import { contexts } from "../../../Contexts/ContextsExports";
import {
  ContactInformation,
  VisitGeneralDetails,
} from "../../../Data/Builders/Visit";
import { IContactFields } from "../../../Data/Interfaces/Visit";
import { VisitContextType } from "../../../Data/Types/Visit";
import useForm from "../../../Hooks/useForm";
import "../../../Layouts/Style/CSS/Visit.css";
import GenericDialog from "../../Global/GenericDialog";
import FieldValue from "../FiledValue";
import SubPagesTitle from "../SubPageTitle";
import EditContactInformation from "./EditContactInformation";

interface ContactInformationProps {
  apartment: VisitGeneralDetails;
}

export default function ContactInformations({
  apartment,
}: ContactInformationProps) {
  const [formValues, changeFormValues, changeState] = useForm();
  const { visitState, setIdentifyingInfo } = useContext(
    contexts.Visit,
  ) as VisitContextType;

  const handleCancelChanges = () => {
    Object.keys(formValues).forEach((key) => {
      changeState(key);
    });
  };

  const handleSaveChanges = () => {
    let update = apartment.contactInformation;
    Object.keys(formValues).forEach((key) => {
      update[key as keyof ContactInformation] = formValues[key];
    });
    const updateProp = {
      ...visitState.identifyingInformation,
      contactInformation: update,
    };
    setIdentifyingInfo(updateProp);
  };

  const getCurrentLabel = (item: IContactFields) => {
    if (item.isDynamic) {
      return (apartment.contactInformation[
        item.label as keyof ContactInformation
      ] ?? item.defaultLabel) as string;
    }
    return item.label;
  };

  return (
    <ThemeRightToLeft>
      <div className="section-general">
        <SubPagesTitle title={`פרטי התקשרות`} />
        <Card className="white-box">
          <Grid container spacing={2}>
            {contactFields.map((item, index) => (
              <Fragment key={`ContactInformationFragment-${index}`}>
                <Grid
                  item
                  sm={item.gridSize}
                  key={`ContactInformationGrid-${index}`}
                >
                  <FieldValue
                    label={getCurrentLabel(item)}
                    value={
                      apartment.contactInformation[
                        item.name as keyof ContactInformation
                      ] as string
                    }
                  />
                </Grid>
                {index === 2 && (
                  <Grid
                    item
                    md={1.5}
                    key={`ContactInformationDialog-${index}`}
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
                      title={TITLES.CONTACT_DETAILS}
                      content={
                        <EditContactInformation
                          changeFormValues={changeFormValues}
                          formValues={formValues}
                          apartment={apartment}
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
