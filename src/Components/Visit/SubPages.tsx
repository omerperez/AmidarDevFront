import { VisitGeneralDetails } from "../../Types/Visit";
import CostumerDetails from "./CostumerDetails";

interface SubPagesProps {
  apartment: VisitGeneralDetails;
}

export default function SubPages({ apartment }: SubPagesProps) {
  const SubPages = [
    <div className="mb-20 maintenance-layout">
      <CostumerDetails />
      {/* apartment={apartment} */}
    </div>,
  ];
  return SubPages;
}
