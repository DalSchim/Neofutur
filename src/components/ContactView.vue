<script>
import {Icon} from "@iconify/vue";
import emailjs from '@emailjs/browser';
export default {
  name: "ContactView",
  components: {Icon},
  methods: {
    sendEmail() {
      emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.$refs.form, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
          );
    },
  },
}
</script>

<template>
  <section class="contact" id="contact">
    <div class="contact-titre">
      <h2>Contactez-nous</h2>
    </div>
    <div class="wrapper">
      <div class="information">
        <div class="container-inf">
          <div class="section-info">
            <div class="icon-container">
              <Icon class="icon" icon="cil:building"/>
            </div>
            <div>
              <h3>Adresse</h3>
              <p>21, Avenue Saint-Fiacre, 78100 Saint-Germain-en-Laye</p>
            </div>
          </div>
          <div class="section-info">
            <div class="icon-container">
              <Icon class="icon" icon="bx:bxs-phone-call"/>
            </div>
            <div>
              <h3>Téléphone</h3>
              <p>01 34 74 11 11 </p>
            </div>
          </div>
          <div class="section-info">
            <div class="icon-container">
              <Icon class="icon" icon="fa6-solid:handshake"/>
            </div>
            <div>
              <h3>Recrutement</h3>
              <p>recrutement@neofutur.com </p>
            </div>
          </div>
          <div class="section-info">
            <div class="icon-container">
              <Icon class="icon" icon="bx:bxs-envelope"/>
            </div>
            <div>
              <h3>Email</h3>
              <p>info@neofutur.com </p>
            </div>
          </div>
        </div>


      </div>
      <div class="contact-form">

        <form ref="form" @submit.prevent="sendEmail" >
          <div class="groupe">
            <div class="form-group">
              <input type="text" id="prenom" name="prenom"
                     placeholder="Prénom"
                     required>
            </div>
            <div class="form-group">
              <input type="text" id="nom" name="nom"
                     placeholder="Nom"
                     required>
            </div>
          </div>

          <div class="groupe">
            <div class="form-group">
              <input type="tel" id="phone" name="phone"
                     placeholder="Téléphone"
                     required>
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email"
                     placeholder="Email"
                     required>
            </div>
          </div>

          <div class="form-group objet">
            <input type="text" id="objet" name="objet"
                   placeholder="Objet"
                   required>
          </div>

          <div class="groupe">
            <div class="form-group">
              <select name="select" id="select" placeholder="Vous êtes">
                <option value="Adhérent">Adhérent</option>
                <option value="établisement">Établisement</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div class="form-group">
              <input type="text" id="numero-d'adherant" name="n-aderant" required
                     placeholder="Numéro d'adhérent">
            </div>
          </div>
          <textarea name="message" id="message" cols="30" rows="10" required
                    placeholder="Votre message"
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  padding: 32px 0;
  .contact-titre {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

    h2 {
      font-size: 36px;
      font-family: "Roboto Thin", sans-serif;
      color: #12426E;
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 64px;


    .information {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 16px;

      &::before {
        position: absolute;
        align-self: flex-end;
        top: 0;
        right:  0;
        content: "";
        width: 95%;
        height: 64px;
        border-top: 3px solid#12426E;
        border-right: 3px solid#12426E;
      }
      &::after {
        position: absolute;
        align-self: flex-end;
        bottom: 0;
        left: 0;
        content: "";
        width: 95%;
        height: 64px;
        border-bottom: 3px solid#12426E;
        border-left: 3px solid#12426E;
      }

      .container-inf {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 32px;
      }

      .section-info {
        display: flex;
        gap: 16px;
        margin-bottom: 16px;
        align-items: center;
        .icon-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #12426E;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin-right: 16px;

          .icon {
            color: white;
            font-size: 24px;
          }
        }


        h3 {
          font-size: 24px;
          font-family: "Roboto Thin", sans-serif;
          color: #12426E;
        }

        p {
          font-size: 12px;
          font-family: "Roboto Thin", sans-serif;
          color: #12426E;
        }
      }

    }

    .contact-form {
      form {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .groupe {
          display: flex;
          gap: 16px;

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;

            input {
              padding: 8px;
              border: 1px solid #12426E;
              background: #FFFFFF;
              border-radius: 8px;
              font-family: "Roboto Thin", sans-serif;
            }

            select {
              padding: 8px;
              border: 1px solid #12426E;
              background: #FFFFFF;
              border-radius: 8px;
              font-family: "Roboto Thin", sans-serif;
            }
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;

          input {
            padding: 8px;
            border: 1px solid #12426E;
            border-radius: 8px;
            font-family: "Roboto Thin", sans-serif;
          }

          select {
            padding: 8px;
            border: 1px solid #12426E;
            border-radius: 8px;
            font-family: "Roboto Thin", sans-serif;
          }
        }

        .objet {
          input {
            padding: 8px;
            border: 1px solid #12426E;
            border-radius: 8px;
            font-family: "Roboto Thin", sans-serif;
          }
        }

        textarea {
          padding: 8px;
          border: 1px solid #12426E;
          border-radius: 8px;
          font-family: "Roboto Thin", sans-serif;
        }

        button {
          padding: 8px;
          border: 1px solid #12426E;
          border-radius: 8px;
          font-family: "Roboto Thin", sans-serif;
          background-color: #12426E;
          color: white;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 920px) {
    .wrapper {
      flex-direction: column-reverse;
      gap: 32px;
      align-items: center;
      justify-content: start;

      .information {
        &::before {
          display: none;
        }

        &::after {
          display: none;
        }
      }

      .contact-form {
        form {
          .groupe {
            flex-direction: column;
          }
        }
      }
    }
  }
}

</style>