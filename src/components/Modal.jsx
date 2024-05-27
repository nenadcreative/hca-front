import React, { Children } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import CalendarForm from "./CalendarForm.jsx";
import ApplyForm from "./ApplyForm.jsx";

const Modal = ({ buttonText, navButton = false }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button
        className={
          navButton
            ? " px-7 py-2 rounded-lg max-w-[140px]  justify-center font-semibold text-body-md hidden xl:inline-flex   bg-brand-blue hover:bg-brand-blue2 text-white"
            : "px-8 py-4 rounded-lg min-w-[200px]  justify-center font-semibold text-body-md  inline-block  bg-brand-blue hover:bg-brand-blue2 text-white"
        }
      >
        {buttonText}
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed z-50 top-[50%] left-[50%] max-h-[85vh] w-[50vw] max-w-[1120px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        {/*}
        <ApplyForm></ApplyForm>
      */}
        <div id="form-widget-container "></div>
        <script
          src="https://verity.hcas.edu/FormCustomer/GetCustomerFormWidget
?buttonBackground=%230395CE
&buttonFontColor=%23FFFFFF
&formInputBackground=%23FFFFFF
&formInputColor=white
&IsFirstNameRequired=true
&IsLastNameRequired=true
&IsPhoneRequired=true
&IsEmailRequired=true
&IsCampusRequired=true
&IsProgramOfInterestRequired=true
&IsAppointmentDateRequired=false
&campaignCodeField=school
&campaignTypeField=school
&showPlaceholders=true
&showLabels=false
&isFirstNameShown=true
&isLastNameShown=true
&isPhoneShown=true
&isEmailShown=true
&isCampusShown=true
&isProgramOfInterestShown=true
&isAppointmentDateShown=false
&referrerGuid=433A485E-CF1F-49B1-B111-37969EAABB3C
&schoolId=1
&leadSourceId=1
&backgroundImage=null
&logoUrl=https%3A%2F%2Fhca-front.vercel.app%2F_astro%2Flogo.no13WfKI_1BBLK0.svg"
          id="verity-form-snippet"
        ></script>

        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
