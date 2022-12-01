import { Button, Card, Grid } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { contexts } from "../../Contexts/ContextsExports";
import GenericDialog from "../Global/GenericDialog";
import Input from "../Global/Input";
import SelectInput from "../Global/Select";
import TextAreaInputRef from "../Global/TextArea";
import SubPagesTitle from "./SubPageTitle";
import SummaryVisit from "./SummaryVisit";
import { Summary } from "../../Data/Builders/Visit";
import { VisitContextType } from "../../Data/Types/Visit";
import convertClassToPostRequest from "../../Utils/ConvertClassToPostReq";

interface ISummary {
  label: string;
  keyName: keyof Summary;
  inputType: "select" | "input" | "textArea";
}
const demo: ISummary[] = [
  {
    label: "שינויים בהרכב המשפחה",
    keyName: "familyTenantsChanges",
    inputType: "select",
  },
  {
    label: "האם גר/ה בגפו/ה",
    keyName: "isLiveAlone",
    inputType: "select",
  },
  {
    label: "חתם על תצהיר גר בגפו",
    keyName: "isSignLiveAlone",
    inputType: "select",
  },
  {
    label: "הסכמה לעבור לדירה קטנה",
    keyName: "isAgreeSmallApartment",
    inputType: "select",
  },
  {
    label: "מעבר אזרח ותיק",
    keyName: "isTransitionalOldTenant",
    inputType: "select",
  },
  {
    label: "שפת הביקור",
    keyName: "visitLanguage",
    inputType: "select",
  },
  {
    label: "נכח מתרגם",
    keyName: "isTranslatorPresent",
    inputType: "select",
  },
  {
    label: "שם הדייר החותם",
    keyName: "signsTenantName",
    inputType: "input",
  },
  {
    label: "מהות הדייר הנוכח בדירה",
    keyName: "signsTenantEssence",
    inputType: "select",
  },
  {
    label: "תעודת זהות מתרגם",
    keyName: "translatorId",
    inputType: "input",
  },
  {
    label: "הערות לביקור",
    keyName: "comments",
    inputType: "textArea",
  },
];

const list = [
  {
    label: "כן",
    value: "1",
  },
  {
    label: "לא",
    value: "0",
  },
];

export default function LastStep() {
  const { visitState } = useContext(contexts.Visit) as VisitContextType;
  // const save = () => {
  //   const results = convertClassToPostRequest(visitState);
  //   console.log(results);
  // };

  return (
    <div className="section-general">
      <SubPagesTitle title="סיכום הביקור" fontSize="32" />
      <Card className="white-box">
        <Grid container spacing={1} className="mb-20 mt-10">
          {demo.map((item, key) => (
            <Grid item sm={item.inputType === "textArea" ? 12 : 2.4} key={key}>
              {item.inputType === "select" ? (
                <SelectInput
                  disabled={
                    item.keyName === "isTransitionalOldTenant"
                      ? !visitState.summary[item.keyName]
                      : false
                  }
                  required={
                    (item.keyName === "isTransitionalOldTenant" &&
                      visitState.summary[item.keyName]) ??
                    false
                  }
                  list={list}
                  value={visitState.summary[item.keyName] ? "כן" : "לא"}
                  name={item.keyName}
                  label={item.label}
                  style={{ background: "white" }}
                />
              ) : item.inputType === "textArea" ? (
                <TextAreaInputRef
                  title={item.label}
                  value={visitState.summary[item.keyName] ? "true" : "false"}
                  name={item.keyName}
                  minRow={5}
                  required={false}
                />
              ) : (
                <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    console.log("omer")
                  }
                  label={item.label}
                  isShowLabel={false}
                  readOnly={false}
                  variant={"outlined"}
                  value={visitState.summary[item.keyName] ? "true" : "false"}
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
