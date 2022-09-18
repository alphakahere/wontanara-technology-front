import ds1 from "../../assets/images/DS/ds1.jpeg";
import ds2 from "../../assets/images/DS/ds2.jpeg";
import ds3 from "../../assets/images/DS/ds3.jpeg";
import ds4 from "../../assets/images/DS/ds4.jpeg";

import jc1 from "../../assets/images/jc/jc1.jpeg";
import jc2 from "../../assets/images/jc/jc2.jpeg";

import d1 from "../../assets/images/debat/d1.jpeg";
import d2 from "../../assets/images/debat/d2.jpeg";
import d3 from "../../assets/images/debat/d3.jpeg";
import d4 from "../../assets/images/debat/d4.jpeg";

import tv1 from "../../assets/images/tv/tv1.jpeg";
import tv2 from "../../assets/images/tv/tv2.jpeg";
import tv3 from "../../assets/images/tv/tv3.jpeg";
import tv4 from "../../assets/images/tv/tv4.jpeg";
import tv5 from "../../assets/images/tv/tv5.jpeg";

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
			"<p>Partant du fait que la femme occupe une place importante au sein de la société en général et de l’Amicale en particulier, considérant que la femme représente un vecteur clé de l’épanouissement dans le milieu éducatif et scientifique et que ses droits doivent être connus de tous, que le respect de la femme doit être le reflet de notre vivre ensemble, cette activité représente l’occasion de renforcer l’autonomisation de la femme.</p> <p>L'objectif de cette activité est de valoriser les femmes en leur donnant l’occasion de s’exprimer à travers des thématiques dédiées à cet effet.</p>",
		images: [jc1, jc2],
	},
	{
		title: "AEESGS Vélo Tour",
		date: "27 Mars 2022",
		author: "AEESGS",
		description:
			"<p>l’activité a eu lieu DIMANCHE 27 MARS 2022. Itinéraire : marché fass – Monument de la Renaissance (ouakam) – marché fass.</p><p> Au total 44 personnes ont participé à l’activité.</p>",
		images: [tv1, tv2, tv3, tv4, tv5],
	},
	{
		title: "Débattons",
		date: "24 Avril au 05 Juillet 2022",
		author: "AEESGS",
		description:
			"<p>Dans la réflexion de son plan d’action annuel, l’amicale a décidé de mettre en place le débattons qui est un concours de débat d’échange et de partage d’idées au tour d’un thème scientifique culturel et politique.</p> <p> Les objectifs de L’AEESGS sont de permettre à tous les étudiants de ses différentes antennes d’échanger, de donner leurs avis au milieu d’autres voix dissidentes selon un thème précis afin de promouvoir des compétences allocutives et l’excellence au sein des milieux scolaire et estudiantin de la communauté guinéenne.</p><p>La finale de ce tournoi opposa l’antenne d’ IMAN face à celle d’IPD Thomas Sankara, IMAN sorti vainqueur.</p>",
		images: [d1, d2, d3, d4],
	},
	{
		title: "Journée don de sang",
		date: "25 juin 2022",
		author: "AEESGS",
		description:
			"<p>Dans le souci de sauver des vies et d’apporter son aide aux personnes en besoin de sang, l’AEESGS avec la collaboration avec d’autres associations a organisé une journée de Don de sang le 25 Juin 2022 au centre national de transfusion sanguine (CNTS).</p><p>Objectif réalisé : 50 poches de sang collecté</p>",
		images: [ds1, ds2, ds3, ds4],
	},
];

// {
//     title: "Formation des membres du bureau",
//     date: "06/03/2022",
//     description:
//         "L’Amicale des étudiants élèves et stagiaires Guinéens au Sénégal est une association qui regroupe l’ensemble de ces différentes couches sociaux éducatifs ; chaque année  une nouvelle équipe dirigeante est mise en place et c’est dans ce contexte qu’une formation a été initié par le bureau à travers la commission pédagogique pour l’ensemble des membres du bureau. Cette formation a pour objectif le renforcement de capacité des membres en matière  administrative et procédurale pour un meilleur exercice des différentes fonctions. La formation a eu lieu dans l’enceinte de l’école ISM sise à point E le dimanche 06 Mars 2022. présente formation portait sur les thématiques suivantes Une heure pour convaincre Le berger ou comment gérer les membres difficiles Rédaction de TDR et Rapport  Team Building. Elles ont étés animée par les formateurs Maimouna Sidibé et Adama Sidibé tous de la Jeune Chambre Internationale U-Cesag",
//     images: [],
// },
