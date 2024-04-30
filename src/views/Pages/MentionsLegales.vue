<script>
export default {
  name: "MentionsLegales"
}
</script>

<template>
 <div class="globale">
   <div class="titre">
        <h1>Mentions légales</h1>
   </div>
    <div class="containeur">
      <div class="text">
        <p><strong>1 – Édition du site</strong></p>
        <p>En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique,
          il est précisé aux utilisateurs du site internet https://www.neofutur.com l’identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi :</p>
        <p><strong>Propriétaire du site</strong> : Société NEOFUTUR <br><strong>Adresse</strong> :21, avenue
          Saint-Fiacre – 78100 Saint-Germain-en-Laye. <br><strong>Email</strong> :info@neofutur.com <br><strong>Téléphone</strong>:
          01 34 74 11 11</p>
        <p><strong>Identification de l’entreprise</strong> :NEOFUTUR SAS  au capital social de 10000.00 € – SIREN
          : 424186450 - RCS Versailles - <strong>Adresse postale</strong> : 21, avenue Saint-Fiacre – 78100
          Saint-Germain-en-Laye.</p>
        <p><strong>Directeur de la publication</strong> : Matthieu Dubreuil</p>
        <p><strong>Hébergeur</strong> : OVH SAS – 2 rue Kellermann – BP 80157 – 59053 Roubaix Cedex 1 – Téléphone : 1007
        </p>
        <p><strong>2 – Propriété intellectuelle et contrefaçons.</strong></p>
        <p>NEOFUTUR est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les
          éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos,
          architecture, icônes et sons. <br>Toute reproduction, représentation, modification, publication, adaptation de
          tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf
          autorisation écrite préalable de NEOFUTUR. <br>Toute exploitation non autorisée du site ou de l’un quelconque
          des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément
          aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
        <p><strong>3 – Limitations de responsabilité.</strong></p>
        <p>NEOFUTUR ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de
          l’utilisateur, lors de l’accès au site https://www.neofutur.com. <br>NEOFUTUR décline toute responsabilité
          quant à l’utilisation qui pourrait être faite des informations et contenus présents sur
          https://www.neofutur.com. <br>NEOFUTUR s’engage à sécuriser au mieux le site https://www.neofutur.com,
          cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et
          installées sur son site à son insu. <br>Des espaces interactifs (espace contact ou commentaires) sont à la
          disposition des utilisateurs. <br>NEOFUTUR se réserve le droit de supprimer, sans mise en demeure préalable,
          tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier
          aux dispositions relatives à la protection des données. <br>Le cas échéant, NEOFUTUR se réserve également la
          possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de
          message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte,
          photographie …).</p>
        <p><strong>4 – CNIL et gestion des données personnelles.</strong></p>
        <p>Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site
          https://www.neofutur.com dispose d’un droit d’accès, de modification et de suppression des informations
          collectées. Pour exercer ce droit, envoyez un message à info@neofutur.com <br>Pour plus d’informations sur la
          façon dont nous traitons vos données (type de données, finalité, destinataire…), lisez notre politique de
          confidentialité : https://www.neofutur.com/confidentialite/</p>
        <p><strong>5 – Liens hypertextes et cookies</strong></p>
        <p>Le site https://www.neofutur.com contient des liens hypertextes vers d’autres sites et dégage toute
          responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers
          https://www.neofutur.com. <br>La navigation sur le site https://www.neofutur.com est susceptible de provoquer
          l’installation de cookie(s) sur l’ordinateur de l’utilisateur. <br>Un «&nbsp;cookie&nbsp;» est un fichier de
          petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les
          données ainsi obtenues permettent d’obtenir des mesures de fréquentation, par exemple. <br>Vous avez la
          possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie
          ne sera déposé sans votre consentement. <br>Les cookies sont enregistrés pour une durée maximale de 12 mois.
          <br>Pour plus d’informations sur la façon dont nous faisons usage des cookies, lisez notre politique de
          confidentialité https://www.neofutur.com/confidentialite/</p>
        <p><strong>6 – Droit applicable et attribution de juridiction.</strong></p>
        <p>Tout litige en relation avec l’utilisation du site https://www.neofutur.com est soumis au droit français. En
          dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux
          compétents de Versailles.</p></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .globale {
    padding: 80px 0;
  }
  .titre{
    text-align: center;
    h1 {
      font-family: "Roboto Thin", sans-serif;
      color: #12426E;
      padding: 20px 0;
    }
  }

  .containeur {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Thin", sans-serif;
    flex-direction: column;
    width: 80%;
    margin: auto;
    strong{
      color: #12426E;
    }
    .text {
      width: 100%;
      p {
        margin-bottom: 20px;
      }
    }
  }

</style>