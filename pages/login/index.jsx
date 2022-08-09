import Form from "../../components/layout/Form/Form";
import styles from "./Login.module.scss";

import LoginSection from "../../components/layout/LoginSection/LoginSection";

const test = [
  {
    type: "text",
    placeholder: "AAAAAAA",
    required: false,
    value: "",
    name: "email",
    width: "100%",
  },
  {
    type: "password",
    placeholder: "Šifra",
    required: true,
    value: "",
    name: "password",
    width: "100%",
  },
];

const LoginPage = () => {
  return (
    <div className={styles["page"]}>
      <LoginSection
        classes={`${styles["login-section"]}`}
        title={"POSEDUJETE PROFIL?"}
        subtitle={"Ulogujte se"}
        button={"Prijavi se"}
        link={"Zaboravili ste lozinku?"}
      >
        <Form data={test}></Form>
      </LoginSection>
      <span className={styles["vertical-line"]} />
      <LoginSection
        title={"REGISTRACIJA NALOGA"}
        subtitle={
          'Klikom na dugme "napravi nalog" ulazite u proces registracije'
        }
        classes={`${styles["login-section"]}`}
        button={"Napravi nalog"}
      >
        <p>
          Kreiranje naloga omogućava brže zaključivanje narudžbina, kreiranje
          više adresa za isporuku kao i mogućnost praćenja narudžbina.
        </p>
      </LoginSection>
    </div>
  );
};

export default LoginPage;
