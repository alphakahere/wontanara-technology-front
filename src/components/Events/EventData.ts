// import ds1 from "../../assets/images/DS/ds1.jpeg";
// import ds2 from "../../assets/images/DS/ds2.jpeg";
// import ds3 from "../../assets/images/DS/ds3.jpeg";
// import ds4 from "../../assets/images/DS/ds4.jpeg";

import jc1 from "../../assets/images/jc/jc1.jpeg";
import jc2 from "../../assets/images/jc/jc2.jpeg";

export interface IEvent {
	title: string;
	date: string;
	author: string;
	description: string;
	images: string[];
}
export const events: IEvent[] = [
	{
		title: "Journée des droits des femmes ",
		date: "20 Mars 2022",
		author: "AEESGS",
		description:
			"Partant du fait que la femme occupe une place importante au sein de la société en général et de l’Amicale en particulier, considérant que la femme représente un vecteur clé de l’épanouissement dans le milieu éducatif et scientifique et que ses droits doivent être connus de tous, que le respect de la femme doit être le reflet de notre vivre ensemble, cette activité représente l’occasion de renforcer l’autonomisation de la femme. L'objectif de cette activité est de valoriser les femmes en leur donnant l’occasion de s’exprimer à travers des thématiques dédiées à cet effet.",
		images: [jc1, jc2],
	},
];
// {
//     title: "Formation des membres du bureau",
//     date: "06/03/2022",
//     description:
//         "L’Amicale des étudiants élèves et stagiaires Guinéens au Sénégal est une association qui regroupe l’ensemble de ces différentes couches sociaux éducatifs ; chaque année  une nouvelle équipe dirigeante est mise en place et c’est dans ce contexte qu’une formation a été initié par le bureau à travers la commission pédagogique pour l’ensemble des membres du bureau. Cette formation a pour objectif le renforcement de capacité des membres en matière  administrative et procédurale pour un meilleur exercice des différentes fonctions. La formation a eu lieu dans l’enceinte de l’école ISM sise à point E le dimanche 06 Mars 2022. présente formation portait sur les thématiques suivantes Une heure pour convaincre Le berger ou comment gérer les membres difficiles Rédaction de TDR et Rapport  Team Building. Elles ont étés animée par les formateurs Maimouna Sidibé et Adama Sidibé tous de la Jeune Chambre Internationale U-Cesag",
//     images: [],
// },
