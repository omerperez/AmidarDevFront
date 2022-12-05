import { CheckCircleOutline, CloudDownload, Save } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { IconButton } from "@mui/material";
import { useMemo, useState } from "react";
import ThemeRightToLeft from "../../Assets/ThemeRightToLeft";
import { IRepresentativeApartment } from "../../Data/Interfaces/Home";
import IndexDatabaseService from "../../db/localforage";
import { getVisitDetails } from "../../Services/Visit";

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
    const currentVisit = await getVisitDetails(representativeApartment);
    if (currentVisit) {
      IndexDatabaseService.storeToDataDb(currentVisit, representativeApartment);
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
