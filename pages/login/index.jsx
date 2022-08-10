import Form from "../../components/layout/Form/Form";
import styles from "./Login.module.scss";
import Modal from "../../components/UI/Modal/Modal";
import { useRouter } from "next/router";
import LoginSection from "../../components/layout/LoginSection/LoginSection";
import { useEffect, useState } from "react";

//forms
import loginForm from "./loginForm.json";

const LoginPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const [showModal, setShowModal] = useState(page !== undefined);
  let modalContent;

  useEffect(() => {
    setShowModal(page !== undefined);
  }, [page]);

  function closeModal() {
    router.back();
    setShowModal(false);
  }

  switch (page) {
    case "forgot-password":
      modalContent = <div>Forgot</div>;
      break;
    default:
      break;
  }

  return (
    <div className={styles["page"]}>
      <LoginSection
        classes={`${styles["login-section"]}`}
        title={loginForm.title}
        subtitle={loginForm.subtitle}
        button={loginForm.submitButton}
        link={loginForm.link}
        url={loginForm.url}
        linkOnclick={() => {}}
      >
        <Form data={loginForm.fields}></Form>
      </LoginSection>
      <span className={styles["vertical-line"]} />
      <LoginSection
        title={"REGISTRACIJA NALOGA"}
        subtitle={
          'Klikom na dugme "napravi nalog" ulazite u proces registracije'
        }
        classes={`${styles["login-section"]} ${styles["login-section-right"]}`}
        button={"Napravi nalog"}
      >
        <p className={styles["signup-description"]}>
          Kreiranje naloga omogućava brže zaključivanje narudžbina, kreiranje
          više adresa za isporuku kao i mogućnost praćenja narudžbina.
        </p>
      </LoginSection>
      {showModal && <Modal onClose={closeModal}>{modalContent}</Modal>}
    </div>
  );
};

export default LoginPage;
