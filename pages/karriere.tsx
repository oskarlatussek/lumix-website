import type { NextPage } from 'next'
import { IoIosRocket } from 'react-icons/io';
import {BsQuestionLg} from "react-icons/bs"

import Contact from '../components/general/Contact';
import TeamCard from '../components/section-element/TeamCard';
import ImageSection from '../components/section/ImageSection';


const Team: NextPage = () => {

    return (
        <>
            <div className="flex bg-black flex-col items-center max-w-full">
                <div className="w-full h-full flex flex-col space-y-10 justify-center items-center text-center pt-56 sm:pt-56 pb-20 sm:pb-20 p-5 sm:p-10">
                    <h3 className="animate__animated animate__fadeIn">Entdecke deine berufliche Energie und starte jetzt deine Karriere bei Lumix Solar</h3>
                    <p className="pb-10 text-lg sm:text-xl lg:text-3xl leading-tight sm:leading-tight lg:leading-tight text-gray-300 font-medium max-w-5xl animate__animated animate__fadeIn animate__delay-1s">Bist auch du elektrisiert von der Sonne? Dann werde Sonnenheld:in und unterstütze uns dabei, unsere Kunden mit erneuerbaren Energien eine unabhängige und nachhaltige Stromerzeugung zu ermöglichen.</p>
                    <a href='https://join.com/companies/lumix' target="_blank" className="rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 flex items-center space-x-2 bg-yellow-400 text-black text-base sm:text-xl font-medium max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                        <span>Offene Stellen</span>
                        <IoIosRocket />
                    </a>
                </div>

                <div className='w-full z-10 flex flex-col items-center p-0 sm:p-10 pt-24 sm:pt-24 md:pt-44'>

                    <div className={`image-section-left -mt-44`}>
                        <ImageSection image='/Images/karriere-1.jpg' />

                        <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                            <p className='text-white text-2xl font-bold'><span className='text-5xl'>Willkommen bei Lumix Solar</span><br /><br /> - dem Ort, an dem wir die Welt ein bisschen grüner machen!</p>

                            <p className='text-justfy text-white'>
                                Wir sind ein dynamisches und leidenschaftliches Team von engagierten Expert:innen, die sich für nachhaltige Energie einsetzen. Mit Stolz können wir auf über 500 erfolgreich abgeschlossene Projekte und zahlreiche zufriedene Kund:innen zurückblicken.<br /><br />
                                Bei Lumix Solar dreht sich alles um Teamwork und Zusammenarbeit. Mit unseren vielfältigen Fähigkeiten und unserem geballten Know-how in den Bereichen Photovoltaik, erneuerbare Energien und nachhaltige Technologien arbeiten wir daran, die Grenzen der Solarenergie zu erweitern und innovative Lösungen zu entwickeln.<br /><br />
                                Wir legen großen Wert auf eine inspirierende und freundliche Arbeitsatmosphäre, in der sich jeder Einzelne entfalten und wachsen kann. Wenn du die Welt nachhaltiger gestalten und Teil eines Teams sein möchtest, das mit Begeisterung an einer grünen Zukunft arbeitet, dann bist du bei uns genau richtig. Wir suchen engagierte Talente, die unsere Leidenschaft für erneuerbare Energien teilen und die Chance ergreifen möchten, gemeinsam mit uns Großes zu bewirken.<br /><br />
                                Bist du schon elektrisiert? Wir wollend ich als Held:in der Energiewende ganz weit nach oben bringen.<br /><br />
                                Entdecke spannende Möglichkeiten, um bei Lumix Solar durchzustarten. Wir können es kaum erwarten, dich kennen zu lernen!<br /><br />
                            </p>
                        </div>
                    </div>

                </div>

                <a href='https://join.com/companies/lumix' target="_blank" className="mb-20 lg:mb-0 rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 flex items-center space-x-2 bg-yellow-400 text-black text-base sm:text-xl font-medium max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                    <span>Offene Stellen</span>
                    <IoIosRocket />
                </a>

                <div className='w-full z-10 flex flex-col items-center p-0 sm:p-10 pt-24 sm:pt-24 md:pt-44'>

                    <div className={`image-section-right -mt-44`}>
                        <div className='flex flex-col space-y-16 max-w-3xl self-center'>
                            <h3 className='text-4xl xl:text-5xl'>Deine Benefits</h3>
                            {/* <p className='text-white text-2xl font-bold'><span className='text-5xl'>Willkommen bei Lumix Solar</span><br /><br /> - dem Ort, an dem wir die Welt ein bisschen grüner machen!</p> */}

                            <div className='flex space-x-5 items-center'>
                                <IoIosRocket className='text-yellow-400 text-2xl flex-none' />
                                <p className='text-white text-base'><b className='text-xl'>Festanstellung in einem zukunftsorientierten Unternehmen:<br /> </b>Bei Lumix Solar bieten wir langfristige Festanstellungen und die Sicherheit, Teil eines Unternehmens zu sein, das die Energiewende vorantreibt.</p>
                            </div>

                            <div className='flex space-x-5 items-center'>
                                <IoIosRocket className='text-yellow-400 text-2xl flex-none' />
                                <p className='text-white text-base'><b className='text-xl'>Flache Hierarchien und schnelle Entscheidungswege:<br /> </b>Wir schätzen kurze Kommunikationswege und ermöglichen unseren Teammitgliedern, Ideen einzubringen und schnell Entscheidungen zu treffen.</p>
                            </div>
                            <div className='flex space-x-5 items-center'>
                                <IoIosRocket className='text-yellow-400 text-2xl flex-none' />
                                <p className='text-white text-base'><b className='text-xl'>Interessante und abwechslungsreiche Projekte:<br /> </b>Bei Lumix Solar arbeitest du an spannenden Projekten in der Solarbranche, die jeden Tag neue Herausforderungen und Möglichkeiten bieten.</p>
                            </div>
                            <div className='flex space-x-5 items-center'>
                                <IoIosRocket className='text-yellow-400 text-2xl flex-none' />
                                <p className='text-white text-base'><b className='text-xl'>Perspektiven zur persönlichen Entwicklung:<br /> </b>Wir unterstützen die individuelle Weiterentwicklung unserer Mitarbeiterinnen und Mitarbeiter durch regelmäßiges Feedback, Mentoring und gezielte Entwicklungsmöglichkeiten.</p>
                            </div>
                            <div className='flex space-x-5 items-center'>
                                <IoIosRocket className='text-yellow-400 text-2xl flex-none' />
                                <p className='text-white text-base'><b className='text-xl'>Offene Arbeitskultur eines jungen Unternehmens:<br /> </b>Wir pflegen eine offene und dynamische Arbeitskultur, in der frische Ideen willkommen sind und ein Raum für Austausch und Kreativität geschaffen wird.</p>
                            </div>
                        </div>
                        <ImageSection image='/Images/karriere-2.jpg' />
                    </div>

                </div>

                <a href='https://join.com/companies/lumix' target="_blank" className="mb-40 rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 flex items-center space-x-2 bg-yellow-400 text-black text-base sm:text-xl font-medium max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                    <span>Offene Stellen</span>
                    <IoIosRocket />
                </a>

                <div className='flex flex-col space-y-16 max-w-4xl self-center px-5 sm:px-10'>
                    <h3 className='text-4xl xl:text-5xl'>Häufig gestelle Fragen</h3>
                    {/* <p className='text-white text-2xl font-bold'><span className='text-5xl'>Willkommen bei Lumix Solar</span><br /><br /> - dem Ort, an dem wir die Welt ein bisschen grüner machen!</p> */}

                    <div className='flex space-x-5 items-center'>
                        <BsQuestionLg className='text-yellow-400 text-2xl flex-none' />
                        <p className='text-white text-base'><b className='text-xl'>Wen suchen wir?<br /> </b>Wir suchen engagierte und talentierte Mitarbeitende, die sich für erneuerbare Energien und die Gestaltung einer nachhaltigen Zukunft begeistern. Vorkenntnisse sind toll, aber nicht zwingend erforderlich.</p>
                    </div>

                    <div className='flex space-x-5 items-center'>
                        <BsQuestionLg className='text-yellow-400 text-2xl flex-none' />
                        <p className='text-white text-base'><b className='text-xl'>Kann ich mich auch initiativ bewerben?<br /> </b>Ja, wir freuen uns über Initiativbewerbungen. Sende uns deine Bewerbungsunterlagen an <span className='text-yellow-500'>bewerbung@lumix.solar</span> und lass uns wissen, für welche Art von Position du dich interessierst. Wir prüfen dann, ob es passende Möglichkeiten für dich gibt.</p>
                    </div>

                    <div className='flex space-x-5 items-center'>
                        <BsQuestionLg className='text-yellow-400 text-2xl flex-none' />
                        <p className='text-white text-base'><b className='text-xl'>Welche Bewerbungsunterlagen werden von mir benötigt?<br /> </b>In der Regel benötigen wir nur deinen Lebenslauf und prüfen in einem persönlichen Gespräch ob du zu uns passt. Über ein Anschreiben freuen wir uns natürlich auch!</p>
                    </div>

                </div>

                <a href='https://join.com/companies/lumix' target="_blank" className="my-40 rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 flex items-center space-x-2 bg-yellow-400 text-black text-base sm:text-xl font-medium max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                    <span>Offene Stellen</span>
                    <IoIosRocket />
                </a>

                <div className='w-full flex justify-center h-full bg-white'>
                    <Contact />
                </div>

            </div>
        </>
    )
}


export default Team
