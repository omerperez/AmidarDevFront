import { ApartmentGeneralDetails } from "../../Builders/Visit";
import CostumerDetails from "./CostumerDetails";

interface SubPagesProps {
  apartment: ApartmentGeneralDetails;
}

export default function SubPages({ apartment }: SubPagesProps) {
  const SubPages = [
    <div className="mb-20 maintenance-layout">
      <CostumerDetails apartment={apartment} />
    </div>,
  ];
  return SubPages;
}
