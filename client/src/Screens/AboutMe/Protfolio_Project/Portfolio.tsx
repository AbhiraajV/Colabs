import React, { ReactElement } from "react";
import "./Portfolio.css";
import { AiOutlineClose } from "react-icons/ai";
import python from "../../../Utils/SVGs/python.svg";
import react from "../../../Utils/SVGs/react.svg";
import node from "../../../Utils/SVGs/node.svg";
import express from "../../../Utils/SVGs/express.svg";
import typegraphql from "../../../Utils/SVGs/typegraphql1.svg";
import typenode from "../../../Utils/SVGs/typenode.svg";
import typescript from "../../../Utils/SVGs/typescript.svg";
import typegoose from "../../../Utils/SVGs/typegoose.svg";
// import apolloclient from "../../../Utils/SVGs/apolloclient.svg";
import mongodb from "../../../Utils/SVGs/mongodb.svg";
import TechStackStructure from "./techStackStructure/TechStackStructure";
interface Props {
  showProj: "NO" | "KW_EXP" | "CO_LABS";
  setShowProj: React.Dispatch<
    React.SetStateAction<"NO" | "KW_EXP" | "CO_LABS">
  >;
}

function Portfolio({ showProj, setShowProj }: Props): ReactElement {
  const ProjectTechs = {
    NO: [
      {
        img: "",
        desc: "",
      },
    ],
    KW_EXP: [
      {
        img: python,
        desc: "Used Python's BeutifulSoup4 for Web-Scrapping data from various sites like Google, Yahoo, Google Play, Youtube, Reddit, Quora, Twitter,Instagram, Facebook, LinkdIn, Bing,Duck Duck Go From Over 20 Countries in Multiple Languages in addition to using paid and free APIs to refine and polish scrapped data.",
      },
      {
        img: react,
        desc: "React's Popularity comes with pre made modules and alot of support online which helps alot in fixing bugs and optimizing the entire process",
      },
      {
        img: node,
        desc: "Made REST APIs using Node's child process to use python for http requests as needed for all the webscrapping models. Advantage of doing this is rather than using the client side for scrapping I was able to take advantage of python's high speed http requests ",
      },
    ],
    CO_LABS: [
      {
        img: typescript,
        desc: "Typescript",
      },
      {
        img: react,
        desc: "React with Typescript",
      },
      {
        img: typenode,
        desc: "Apollo server and client to create and connect to the graphql servers ",
      },
      {
        img: typegoose,
        desc: "Mongoose with Typesafety using typegoose",
      },
      {
        img: typegraphql,
        desc: "GraphQL with Typesafety using type-graphql",
      },
      {
        img: express,
        desc: "ExpressJs",
      },
      {
        img: node,
        desc: "NodeJs with Typesafety using type-node",
      },
      {
        img: mongodb,
        desc: "MongoDb Database",
      },
    ],
  };
  return (
    <div
      className={
        showProj !== "NO"
          ? "ProjectPortfolioContainer-Up"
          : "ProjectPortfolioContainer"
      }
    >
      <div
        onClick={() => {
          setShowProj("NO");
        }}
        className="closePortfolio"
      >
        <AiOutlineClose />
      </div>

      <TechStackStructure curTechStack={ProjectTechs[showProj]} />
    </div>
  );
}

export default Portfolio;
