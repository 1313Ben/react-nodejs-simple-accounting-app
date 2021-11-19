import React from 'react'
import { useForm } from "react-hook-form";
import './NewEntryForm.scss';


const NewEntryForm = (props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => {
    // To Do: get the last entry ID from the server and count + 1 and add to data

    // To Do: Post data to server in async modus

    console.log(data);

    // reset form values
    reset();

    // close the form
    props.setTriggerDisplayForm(false);
  };
  return (props.triggerDisplayForm) ? (
    <div className="container">
      <div className="form-main">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container form-inner">
         
            <p className="close-btn" onClick={() =>
            {
              props.setTriggerDisplayForm(false) // close form popup
              reset() // reset form values
            }}><i className="bi bi-x-circle"></i></p>

            <h1>Neuer Eintrag</h1>

            <div className="row margin-b">
              <div className="six columns">
                <label htmlFor="date">Datum</label>
                <input className="u-full-width date-field" type="date" placeholder="" id="" {...register("date", { required: true })} />
                <div className="error-message">{errors.date && "Bitte ein Datum wählen"}</div>
              </div>
              <div className="six columns">
                <label htmlFor="exampleRecipientInput">Typ</label>
                <select className="u-full-width" {...register("type")} >
                  <option value="expense">Ausgaben</option>
                  <option value="income">Einkommen</option>
                </select>
              </div>
            </div>

            <div className="row margin-b">
              <div className="six columns">
                <label htmlFor="comment">Kommentar</label>
                <input className="u-full-width" type="text" {...register("comment", { required: true })} />
                <div className="error-message">{errors.comment && "Kommentar darf nicht leer sein"}</div>
              </div>
              <div className="three columns">
                <label htmlFor="comment">Betrag</label>
                <input className="u-full-width" type="number" {...register("amount", { required: true })} />
                <div className="error-message">{errors.amount && "Bitte ein Betrag eingeben"}</div>
              </div>
              <div className="three columns">
                <label htmlFor="currency">Währung</label>
                <select className="u-full-width"  {...register("currency")} >
                  <option value="CHF">CHF</option>
                  <option value="EURO">EURO</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            </div>

            <div className="row margin-b">
              <div className="six columns">
                <label htmlFor="account">Konto</label>
                <select className="u-full-width"  {...register("accountName")} >
                  <option value="Raiffeisen">Raiffeisen</option>
                  <option value="Migros Bank">Migros Bank</option>
                  <option value="Mastercard Cembra">Mastercard Cembra</option>
                  <option value="Portmonnaie">Portmonnaie</option>
                </select>
              </div>
              <div className="six columns">
                <label htmlFor="category">Kategory</label>
                <select className="u-full-width"  {...register("category")} >
                  <option value="Haushalt">Haushalt</option>
                  <option value="Gesundheit">Gesundheit</option>
                  <option value="Transport">Transport</option>
                  <option value="Bekleidung">Bekleidung</option>
                  <option value="Versicherungen">Versicherungen</option>
                  <option value="Wohnen">Wohnen</option>
                  <option value="Electronic">Electronic</option>
                  <option value="Freizeit">Freizeit</option>
                  <option value="Geschenke">Geschenke</option>
                  <option value="Bank">Bank</option>
                  <option value="Verschiedenes">Verschiedenes</option>
                </select>
              </div>

            </div>
            <div className="u-full-width">
              <input className="button-primary u-full-width" type="submit" value="Speichern" />
            </div>
          </div>
        </form>
      </div>
    </div>
  ) : " " ;
}

export default NewEntryForm
