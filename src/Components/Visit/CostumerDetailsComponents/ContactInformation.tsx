import { Edit } from "@mui/icons-material";
import { Card, Fab, Grid } from "@mui/material";
import { Fragment, useContext } from "react";
import { TITLES } from "../../../Assets/Constants/VisitConstants";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { contactInfoLabels } from "../../../Assets/Visit";
import {
  ContactInformation,
  VisitGeneralDetails,
} from "../../../Data/Builders/Visit";
import { contexts } from "../../../Contexts/ContextsExports";
import useForm from "../../../Hooks/useForm";
import "../../../Layouts/Style/CSS/Visit.css";
import GenericDialog from "../../Global/GenericDialog";
import SubPagesTitle from "../SubPageTitle";
import EditContactInformation from "./EditContactInformation";
import { VisitContextType } from "../../../Data/Types/Visit";

interface ContactInformationProps {
  apartment: VisitGeneralDetails;
}

export default function ContactInformations({
  apartment,
}: ContactInformationProps) {
  const [formValues, changeFormValues, changeState] = useForm();
  const { visitState, setIdentifyingInfo } = useContext(
    contexts.Visit
  ) as VisitContextType;

  const handleCancelChanges = () => {
    Object.keys(formValues).map((key) => {
      return changeState(key);
    });
  };

  const handleSaveChanges = () => {
    let update = apartment.contactInformation;
    Object.keys(formValues).map((key) => {
      return (update = {
        ...update,
        [key]: formValues[key],
      });
    });
    const updateProp = {
      ...visitState.identifyingInformation,
      contactInformation: update,
    };
    setIdentifyingInfo(updateProp);
  };

  return (
    <ThemeRightToLeft>
      <div className="section-general">
        <SubPagesTitle title={`פרטי התקשרות`} />
        <Card className="white-box">
          <Grid container spacing={2.5}>
            {contactInfoLabels.map((occupancyItem, index) => (
              <Fragment key={`ContactInformationFragment-${index}`}>
                <Grid
                  item
                  sm={occupancyItem.gridSize ?? 4}
                  key={`ContactInformationGrid-${index}`}
                >
                  <div className="label-pos">
                    <span className="card-body-text-label">
                      {occupancyItem.isDynamicLabel
                        ? `${
                            apartment.contactInformation[
                              occupancyItem.label as keyof ContactInformation
                            ] ?? occupancyItem.defLabel
                          }`
                        : occupancyItem.label}
                    </span>
                  </div>
                  <span
                    className={
                      occupancyItem.gridSize === 9
                        ? "contact-details-text-value"
                        : "card-body-text-value"
                    }
                  >
                    {`${apartment.contactInformation[occupancyItem.name]}`}
                  </span>
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
