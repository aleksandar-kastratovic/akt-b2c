import { Suspense } from "react";
import ContactPage from "@/app/kontakt/contactPage";

const Contact = () => {
  return (
    <Suspense>
      <ContactPage />
    </Suspense>
  );
};

export default Contact;
