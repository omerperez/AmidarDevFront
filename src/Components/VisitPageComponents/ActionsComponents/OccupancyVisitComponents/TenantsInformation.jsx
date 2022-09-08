import { useState } from "react";
import { Grid, Button } from "@mui/material";
import GenericInputForm from "../../FieldsTypes/GenericInputForm";

export default function TenantsInformation({ tenantsInfo, isFirstTenant }) {
  const [edit, setEdit] = useState(false);
  
  return (
    <Grid container>
      <Grid
        item
        xs={1}
        className="d-flex jc-center m-auto mb-20"
      >
        <Button onClick={() => setEdit(!edit)} variant="contained">
          עדכון
        </Button>
      </Grid>
      <Grid item xs={2.5}>
        <GenericInputForm
          cancelLabel={true}
          title={isFirstTenant ? "תעודת זהות" : null}
          readOnly={!edit}
          variant={!edit ? "filled" : null}
          value={"209543214"}
        />
      </Grid>
      <Grid item xs={2.5}>
        <GenericInputForm
          cancelLabel={true}
          title={isFirstTenant ? "שם מלא" : null}
          readOnly={!edit}
          variant={!edit ? "filled" : null}
          value={"עומר פרץ"}
        />
      </Grid>
      <Grid item xs={2}>
        <GenericInputForm
          cancelLabel={true}
          title={isFirstTenant ? "מין" : null}
          readOnly={!edit}
          variant={!edit ? "filled" : null}
          value={"זכר"}
        />
      </Grid>
      <Grid item xs={2}>
        <GenericInputForm
          cancelLabel={true}
          title={isFirstTenant ? "תאריך לידה" : null}
          readOnly={!edit}
          variant={!edit ? "filled" : null}
          value={"20/01/1998"}
        />
      </Grid>
      <Grid item xs={2}>
        <GenericInputForm
          cancelLabel={true}
          title={isFirstTenant ? "מצב משפחתי" : null}
          readOnly={!edit}
          variant={!edit ? "filled" : null}
          value={"רווק"}
        />
      </Grid>
    </Grid>
  );
}
