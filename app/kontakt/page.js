import ContactPage from "@/app/kontakt/contactPage";
import { Suspense } from "react";

const Contact = () => {
  return (
    <Suspense>
      <ContactPage />
    </Suspense>
  );
};

export default Contact;
