const prefilledFormulaire = {
    nom: 'Formulaire Pré-rempli',
    dateCreation: new Date().toISOString().slice(0, 10),
    version: 1,
    societe: { id: 1 },
    processusUPs: [
      {
        nom: 'Services aux entreprises',
        processusPeres: [
          {
            nom: 'Gestion des courriers entrants',
            processusFils: [
              {
                nom: 'Décharge',
                scoreMax: 7,
                score: 4.9,
                observation: '',
                pourcentage: 70,
                digital: true,
                importance: '7',
                applicable: true,
                userDefinedFields: []
              },
              {
                nom: 'Archivage',
                scoreMax: 10,
                score: 4,
                observation: '',
                pourcentage: 40,
                digital: false,
                importance: '10',
                applicable: true,
                userDefinedFields: []
              }
            ]
          },
          {
            nom: 'Gestion des courriers sortants',
            processusFils: [
              {
                nom: 'Décharge',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              },
              {
                nom: 'Archivage',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              }
            ]
          }
        ]
      },
      {
        nom: 'Services aux entreprises',
        processusPeres: [
          {
            nom: 'Gestion des contrats et des avenants',
            processusFils: [
              {
                nom: 'Création / Production',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              },
              {
                nom: 'Partage / Diffusion',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              },
              {
                nom: 'Archivage / Classement',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              }
            ]
          },
          {
            nom: 'Gestion de dossier juridique de la société',
            processusFils: [
              {
                nom: 'Numérisation / Acquisition',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              },
              {
                nom: 'Archivage / Classement',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              }
            ]
          }
        ]
      },
      {
        nom: 'Commerce / Négoce / Distribution',
        processusPeres: [
          {
            nom: 'Gestion de l\'équipe commerciale',
            processusFils: [
              {
                nom: 'Suivi des objectifs commerciaux',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              }
            ]
          },
          {
            nom: 'Gestion des clients',
            processusFils: []
          },
          {
            nom: 'Gestion du processus de la vente',
            processusFils: []
          }
        ]
      },
      {
        nom: 'Commerce / Négoce / Distribution',
        processusPeres: []
      },
      {
        nom: 'Commerce / Négoce / Distribution',
        processusPeres: [
          {
            nom: 'Gestion des dépôts',
            processusFils: [
              {
                nom: 'Gestion de dépôt',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              }
            ]
          },
          {
            nom: 'Gestion de mouvement de stock',
            processusFils: [
              {
                nom: 'Entrée / sortie',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              },
              {
                nom: 'Etat de stock',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              },
              {
                nom: 'Inventaire',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              }
            ]
          }
        ]
      },
      {
        nom: 'Services aux entreprises',
        processusPeres: []
      },
      {
        nom: 'Services aux entreprises',
        processusPeres: []
      },
      {
        nom: 'Machines et équipements / Automobile',
        processusPeres: []
      },
      {
        nom: 'Services aux entreprises',
        processusPeres: [
          {
            nom: 'Gestion des dossiers du personnel',
            processusFils: [
              {
                nom: 'Constitution de dossier',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              },
              {
                nom: 'Archivage / Classement',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              }
            ]
          },
          {
            nom: 'Gestion des congés',
            processusFils: [
              {
                nom: 'Demande de congé',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              }
            ]
          },
          {
            nom: 'Gestion de la paie',
            processusFils: [
              {
                nom: 'Pointage',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              },
              {
                nom: 'Bulletin de paie',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              }
            ]
          },
          {
            nom: 'Gestion de carrière',
            processusFils: [
              {
                nom: 'Gestion de la formation',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              },
              {
                nom: 'Gestion de la promotion',
                scoreMax: null,
                score: null,
                observation: '',
                pourcentage: null,
                digital: null,
                importance: null,
                applicable: null,
                userDefinedFields: []
              }
            ]
          }
        ]
      }
    ]
  };
  
  export default prefilledFormulaire;
  