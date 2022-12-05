import { Button, Card, Grid } from "@mui/material";
import { useContext } from "react";
import {
  basicList,
  summaryFields,
  tenantEssence,
} from "../../Assets/Visit/SummaryVisit";
import { contexts } from "../../Contexts/ContextsExports";
import { VisitContextType } from "../../Data/Types/Visit";
import useForm from "../../Hooks/useForm";
import { convertTableCodeToSelectListFormat } from "../../Services/Visit";
import GenericDialog from "../Global/GenericDialog";
import Input from "../Global/Input";
import SelectInput from "../Global/Select";
import TextAreaInputRef from "../Global/TextArea";
import SubPagesTitle from "./SubPageTitle";
import SummaryVisit from "./SummaryVisit";

export default function LastStep() {
  const { visitState } = useContext(contexts.Visit) as VisitContextType;
  const [values, handleChange, changeValues] = useForm();

  // const save = () => {
  //   const results = convertClassToPostRequest(visitState);
  //   console.log(results);
  // };

  const getTableCode = (tableName: string) => {
    const results = convertTableCodeToSelectListFormat(
      visitState.tableCode.get(tableName),
    );
    if (results.length === 0) {
      return tenantEssence;
    }
    return results;
  };

  const isReadOnly = (name: string) => {
    return name === "translatorId" && values.isTranslatorPresent === "0";
  };

  const getValue = (name: string) => {
    if (values[name]) {
      return values[name];
    }
    if (name === "signsTenantName") {
      return visitState.identifyingInformation.mainTenantDetails.fullName;
    }
    return "";
  };

  const getVariant = (name: string) => {
    if (name === "translatorId" && values.isTranslatorPresent === "0") {
      return "filled";
    }
    return "outlined";
  };

  const isDisabled = (name: string) => {
    if (name === "isTransitionalOldTenant") {
      return !visitState.summary[name];
    }
    return false;
  };

  const isRequiredField = (name: string) => {
    if (name === "isTransitionalOldTenant") {
      return visitState.summary.isTransitionalOldTenant;
    }
    if (name === "isSignLiveAlone") {
      return values.isLiveAlone === "1";
    }
    if (name === "translatorId") {
      return values.isTranslatorPresent === "1";
    }
    return false;
  };

  return (
    <div className="section-general">
      <SubPagesTitle title="סיכום הביקור" fontSize="32" />
      <Card className="white-box">
        <Grid container spacing={3} className="mb-20 mt-10">
          {summaryFields.map((item, key) => (
            <Grid item sm={item.gridSize} key={key}>
              {item.type === "select" ? (
                <SelectInput
                  disabled={isDisabled(item.name)}
                  required={isRequiredField(item.name)}
                  list={item.list ? getTableCode(item.list) : basicList}
                  value={values[item.name] ?? ""}
                  onChange={handleChange}
                  name={item.name}
                  label={item.label}
                />
              ) : item.type === "textArea" ? (
                <TextAreaInputRef
                  title={item.label}
                  value={values[item.name]}
                  name={item.name}
                  minRow={5}
                  required={false}
                />
              ) : (
                <Input
                  onChange={handleChange}
                  label={item.label}
                  readOnly={isReadOnly(item.name)}
                  name={item.name}
                  isShowLabel={false}
                  variant={getVariant(item.name)}
                  value={getValue(item.name)}
                  required={isRequiredField(item.name)}
                />
              )}
            </Grid>
          ))}
          <div style={{ margin: "30px auto 0 auto ", marginTop: 10 }}>
            <GenericDialog
              children={
                <Button className="paymant-btn" variant="contained">
                  סיים ביקור
                </Button>
              }
              closeBtn={true}
              fullSize={true}
              content={<SummaryVisit />}
            />
          </div>
        </Grid>
      </Card>
    </div>
  );
}
