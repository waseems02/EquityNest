import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
const data = [
  {
    icon: <HiShieldCheck/>,
    heading: "תל אביב",
    detail:
      " כדאי להשקיע שם מכייון שיש רכבת קלה תתקיים באיזור , השפעה אפשרית: הפרויקט ישפר את הנגישות והתחבורה הציבורית בעיר, דבר שצפוי להעלות את מחירי הדירות באזורים הסמוכים לתחנות הרכבת הקלה",
  },
  {
    icon: <MdCancel />,
    heading: "ירושלים",
    detail:
      "כדאי להשקיע שם מכיוון שיש חיבור ירושלים למרכז הארץ באמצעות רכבת מהירה מעלה את הביקוש למגורים בעיר, במיוחד באזורים הקרובים לתחנות הרכבת"
  },
  {
    icon: <MdAnalytics />,
    heading: "חיפה-מפרץ",
    detail:
      "כדאי להשקיע שם מכיוון שפיתוח מתחם הייטק באזור מפרץ חיפה.",
  },
];
export default data;