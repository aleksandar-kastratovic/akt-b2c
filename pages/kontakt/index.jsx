import styles from '../../styles/Contact.module.scss';

function Contact() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.leftSide}>
          <h5>Pošaljite poruku</h5>
          <p>Popunite formu i kontaktiraćemo vas u najkraćem mogućem roku.</p>
          <div className="row">
            <div className={' col-sm-6 form-floating mb-3 px-2'}>
              <input
                className="form-control"
                id="name"
                type="text"
                name="first_name"
              />
              <label htmlFor="name">Ime i prezime*</label>
              {/* {errors.includes('first_name') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )} */}
            </div>
            <div className={' col-sm-6 form-floating mb-3 px-2'}>
              <input
                className="form-control"
                id="name"
                type="text"
                name="first_name"
              />
              <label htmlFor="name">E-mail*</label>
              {/* {errors.includes('first_name') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )} */}
            </div>
            <div className={' col-sm-6 form-floating mb-3 px-2'}>
              <input
                className="form-control"
                id="name"
                type="text"
                name="first_name"
              />
              <label htmlFor="name">Za šta ste zainteresovani?*</label>
              {/* {errors.includes('first_name') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )} */}
            </div>
            <div className={' col-sm-6 form-floating mb-3 px-2'}>
              <input
                className="form-control"
                id="name"
                type="text"
                name="first_name"
              />
              <label htmlFor="name">Broj telefona*</label>
              {/* {errors.includes('first_name') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )} */}
            </div>
            <div className={' col-sm-12 form-floating mb-3 px-2'}>
              <textarea
                rows="5"
                placeholder="Šta možemo učiniti za Vas?*"
              ></textarea>
              {/* {errors.includes('first_name') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )} */}
            </div>

            <button
              type="button"
              className={' basic-button-black'}
              // onClick={formSubmitHandler}
            >
              Posalji poruku.
            </button>
          </div>
        </div>
        <div className={styles.border}></div>
        <div className={styles.rightSide}>
          <div>
            <h5>Pozovite nas</h5>
            <p>Popunite formu i kontaktiraćemo vas u najkraćem mogućem roku.</p>
            <div>pozovite nas</div>
          </div>
          <div>
            <h5>Posetite nas</h5>
            <p>Popunite formu i kontaktiraćemo vas u najkraćem mogućem roku.</p>
            <div>posetite nas</div>
          </div>
          <div>
            <h5>Chat uzivo</h5>
            <p>Popunite formu i kontaktiraćemo vas u najkraćem mogućem roku.</p>
            <div>Chatujemo</div>
          </div>
        </div>
      </div>
      {/* <div className={styles.page}>
        <div className={styles.leftSide}>bla</div>
        <div className={styles.rightSide}>bla</div>
      </div> */}
    </>
  );
}

export default Contact;
