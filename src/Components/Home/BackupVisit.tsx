import { IconButton } from "@mui/material";
import {
  Add,
  CloudDownload,
  Save,
  CheckCircleOutline,
} from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";
import { getVisitDetails } from "../../Services/Visit";
import { IRepresentativeApartment } from "../../Data/Interfaces/Home";
import { VisitState } from "../../Data/Builders/VisitHomeDemo";
import LoadingButton from "@mui/lab/LoadingButton";
import IndexDatabaseService from "../../db/localforage";
import ThemeRightToLeft from "../../Assets/ThemeRightToLeft";

interface BackupVisitProps {
  representativeApartment: IRepresentativeApartment;
}
export default function BackupVisit({
  representativeApartment,
}: BackupVisitProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [isBackup, setIsBackup] = useState<boolean>(false);

  const handleClickBackup = async () => {
    setLoading(true);
    const response = await getVisitDetails(representativeApartment);
    const [element] = await response;
    if (element) {
      const currentData = new VisitState(element);
      IndexDatabaseService.storeToDataDb(currentData, representativeApartment);
      setIsBackup(true);
      setLoading(false);
    }
  };

  useMemo(() => {
    IndexDatabaseService.getFromDataDbById(representativeApartment).then(
      (value) => {
        if (value !== null) setIsBackup(true);
      }
    );
  }, [representativeApartment]);

  if (loading) {
    return (
      <ThemeRightToLeft>
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<Save />}
          variant="text"
        >
          <span className="loading-backup-btn">מגבה</span>
        </LoadingButton>
      </ThemeRightToLeft>
    );
  }
  return (
    <IconButton onClick={handleClickBackup}>
      {isBackup ? (
        <CheckCircleOutline className="backup-done-icon" />
      ) : (
        <CloudDownload className="backup-cloud-icon" />
      )}
    </IconButton>
  );
}
