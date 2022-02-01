import React from "react";
import { NextPage } from "next";
import Head from "next/head";


import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import Question from "../components/Question";
import faqJson from "../data/faq.json"


const FAQPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lumix Solar FAQ</title>
        <meta name="description" content="" />
      </Head>


      <main className="flex flex-col items-center bg-gray-50 pt-20 lg:pt-32 pb-20">
        <Toolbar dark={false} />

        <div className="flex flex-col items-center text-black opacity-90 p-2 sm:p-10 w-full 2xl:max-w-screen-2xl">
          <h1 className="text-gray-800 text-4xl mb-10 sm:mb-20 mt-4 sm:mt-0">Häufig gestellte Fragen | FAQ</h1>
          

          <div className="flex flex-col divide-y divide-gray-300 w-full lg:w-3/5 items-center min-h-screen">

            {faqJson.map((element, key) => {
              return (
                <Question key={key} question={element.question} answer={element.answer} />
              );
            })}

          </div>

        </div>

      </main>

      <Footer />


    </>
  )
};

export default FAQPage;
