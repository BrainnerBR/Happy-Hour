import React from "react";
import { IoIosBeer } from "react-icons/io";
import { FaUserSecret } from "react-icons/fa";
import { FaHandFist } from "react-icons/fa6";
import { MdHeartBroken } from "react-icons/md";
import { IoFootsteps } from "react-icons/io5";
import { GiClown } from "react-icons/gi";
import { FaHandPointLeft } from "react-icons/fa";
import { GiHastyGrave } from "react-icons/gi";
import { FaBabyCarriage } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { GiChainedHeart } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineVapingRooms } from "react-icons/md";
import { BiSolidParty } from "react-icons/bi";
import { TiWorld } from "react-icons/ti";
import { MdPhonelinkErase } from "react-icons/md";
import { GiHobbitDwelling } from "react-icons/gi";

export const RandomData = [
  {
    title: '1, 2, 3, 4 y 5',
    description: 'Todos cierran las manos, luego muestran un número; las personas con el mismo número beben.',
    type: 'neverNever',
    icon: <FaHandFist />,
  },
  {
    title: 'Forever Alone',
    description: 'Los que han estado más de 1 año solteros, beben.',
    type: 'neverNever',
    icon: <MdHeartBroken />,
  },
  {
    title: 'Pie Grande',
    description: 'La persona con la talla de zapato más grande bebe.',
    type: 'neverNever',
    icon: <IoFootsteps />,
  },
  {
    title: 'El Payaso',
    description: 'Cuenta un chiste, si los demás deciden que es malo, bebes.',
    type: 'neverNever',
    icon: <GiClown />,
  },
  {
    title: 'El Elegido',
    description: 'Elige una persona para que beba.',
    type: 'neverNever',
    icon: <FaHandPointLeft />,
  },
  {
    title: 'Asalta Tumbas',
    description: 'Entre todos los presentes, elijan quién es más probable que se meta con alguien mayor.',
    type: 'neverNever',
    icon: <GiHastyGrave />,
  },
  {
    title: 'Asalta Cunas',
    description: 'Entre todos los presentes, elijan quién es más probable que se meta con alguien menor.',
    type: 'neverNever',
    icon: <FaBabyCarriage />,
  },
  {
    title: 'El Enamoradizo',
    description: 'Entre todos los presentes, elijan a la persona que más fácil se enamora.',
    type: 'neverNever',
    icon: <GiLovers />,
  },
  {
    title: 'Ya Solté!',
    description: 'Entre todos los presentes, elijan quién es el más probable de volver con el/la ex.',
    type: 'neverNever',
    icon: <GiChainedHeart />,
  },
  {
    title: 'Hola, me Presento',
    description: 'Si hay personas que se conocieron hoy, beban.',
    type: 'neverNever',
    icon: <FaHandshake />,
  },
  {
    title: 'Amigos por Siempre',
    description: 'Elige a alguien para tomarse el mismo número de shots.',
    type: 'drink',
    icon: <IoIosBeer />,
  },
  {
    title: 'Siempre Yo',
    description: 'Solo tú bebes 1 shot.',
    type: 'drink',
    icon: <IoIosBeer />,
  },
  {
    title: 'Salud',
    description: 'Tómate lo que te queda restante de tu trago.',
    type: 'drink',
    icon: <IoIosBeer />,
  },
  {
    title: 'Líder',
    description: 'Todos tienen que tomarse la misma cantidad de shots que tú te tomas.',
    type: 'drink',
    icon: <IoIosBeer />,
  },
  {
    title: 'Jirafa',
    description: 'La persona más alta toma 1 shot.',
    type: 'drink',
    icon: <IoIosBeer />,
  },
  {
    title: 'Trabalenguas',
    description: 'Elige un trabalenguas; si te trabas, tomas 1 shot.',
    type: 'drink',
    icon: <IoIosBeer />,
  },
  {
    title: 'Sin Ideas?',
    description: 'Todos tienen 5 segundos para decir algún nombre que empiece con la letra F; el que se quede sin ideas toma 1 shot.',
    type: 'drink',
    icon: <IoIosBeer />,
  },
  {
    title: 'Voy de Frente',
    description: 'La persona al frente tuyo toma 1 shot.',
    type: 'drink',
    icon: <IoIosBeer />,
  },
  {
    title: 'El Hobbit',
    description: 'El más pequeño del grupo bebe 1 shot.',
    type: 'drink',
    icon: <GiHobbitDwelling />,
  },
  {
    title: 'Zurdo',
    description: 'Las personas zurdas toman 1 shot.',
    type: 'drink',
    icon: <IoIosBeer />,
  },
  {
    title: 'Chico Vape',
    description: 'Si alguien está con un vape, bebe.',
    type: 'challenge',
    icon: <MdOutlineVapingRooms />,
  },
  {
    title: 'El Más Pegado',
    description: 'Entre todos los presentes, elijan al/el más borracho.',
    type: 'challenge',
    icon: <IoIosBeer />,
  },
  {
    title: 'El Alma de la Fiesta',
    description: 'Entre todos los presentes, escogan quién es el más fiestero/a.',
    type: 'challenge',
    icon: <BiSolidParty />,
  },
  {
    title: 'El Mochilero',
    description: 'La persona que más países conoce bebe.',
    type: 'challenge',
    icon: <TiWorld />,
  },
  {
    title: 'Cuentanos...',
    description: 'Cuéntanos el nombre de la persona que te gusta, o toma 1 shot.',
    type: 'gossip',
    icon: <FaUserSecret />,
  },
  {
    title: 'Cuentanos...',
    description: 'Cuéntanos quién fue tu último beso.',
    type: 'gossip',
    icon: <FaUserSecret />,
  },
  {
    title: 'Cuentanos...',
    description: 'Quién fue tu primer beso.',
    type: 'gossip',
    icon: <FaUserSecret />,
  },
  {
    title: 'Cuentanos...',
    description: 'De quién te arrepientes haber besado.',
    type: 'gossip',
    icon: <FaUserSecret />,
  },
  {
    title: 'Cuentanos...',
    description: 'Para ti, ¿cuál es una red flag en alguien?',
    type: 'gossip',
    icon: <FaUserSecret />,
  },
  {
    title: 'Cuentanos...',
    description: 'Cuál es tu mayor red flag.',
    type: 'gossip',
    icon: <FaUserSecret />,
  },
  {
    title: 'Cuentanos...',
    description: 'Quién crees que sería un buen novio/novia.',
    type: 'gossip',
    icon: <FaUserSecret />,
  },
  {
    title: 'Cuentanos...',
    description: 'Si la raza humana dependiera de que le dieras un beso a alguien hoy, a quién sería... o 1 shot.',
    type: 'gossip',
    icon: <FaUserSecret />,
  },
  {
    title: 'Juventud de Hoy en Día',
    description: 'Todos los que estén viendo el celular, beban.',
    type: 'gossip',
    icon: <MdPhonelinkErase />,
  },
  {
    title: 'Cuentanos...',
    description: 'Cuéntanos cuándo fue tu último beso.',
    type: 'gossip',
    icon: <FaUserSecret />,
  },
];
