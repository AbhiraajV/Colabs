import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
type Props = {
  formType: "REG" | "LOG";
};
type FillFormType = {
  LOG: { [k: string]: any };
  REG: { [k: string]: any };
};
const fillForm: FillFormType = {
  LOG: {
    Username: {
      svg: <FaUserAlt />,
      type: "text",
    },
    Password: {
      svg: <FaLock />,
      type: "password",
    },
  },
  REG: {
    Email: {
      svg: <MdEmail />,
      type: "email",
    },
    Username: {
      svg: <FaUserAlt />,
      type: "text",
    },
    Password: {
      svg: <FaLock />,
      type: "password",
    },
    "Confirm Password": {
      svg: <GiConfirmed />,
      type: "password",
    },
  },
};
export default fillForm;
