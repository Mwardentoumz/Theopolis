import univers from '../assets/univers.jpg';
import tokens from '../assets/tokens.png';
import example1 from '../assets/example1.png';
import cardexample from '../assets/cardexample.PNG';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';








export default function Game() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Acheter');
    }

    return (

        <>
            <Navbar />

            <section className="md:flex-row max-w-5xl w-full rounded-xl shadow-xl md:max-h-96 md:flex flex flex-col-reverse items-center mx-auto border-theoblue border-2 p-6">
                <div className="w-2/3 flex flex-col">
                    <div className=" flex flex-col flex-start items-center text-center">
                        <h1 className='text-theoblue text-6xl mt-3'>THEOPOLIS</h1>
                        <p className='text-theoblue text-2xl mb-20 font-mono'>Les bâtisseurs du ciel</p>
                        <p className='text-xl font-serif'>Véritable jeu de stratégie, THEOPOLIS vous plonge dans la dimension la plus exaltante du l'univers chrétien : la quête du Ciel.
                            <br />
                            Le but? Bâtir le plus rapidement possible sa cité sainte avant l'avènement de l'Apocalypse.
                        </p>
                    </div>
                </div>
                <div className="w-1/3 flex">
                    <img src={univers} alt='univers' className='rounded-xl object-fit max-h-[99%] md:max-h-[380px] flex justify-center mx-auto' />
                </div>

                
            </section>

            <section className='w-full max-w-5xl rounded-xl shadow-xl border-theoblue border-2 mx-auto mt-20 font-serif p-6 flex text-center flex-col'>
                <div className="">
                    <p>Fruit de plus de 3 années de travail, le jeu a déjà été testé par plusieurs centaines de joueurs issus d'horizons différents.

                        <br />
                        Les multiples retours sont venus renforcer notre conviction initiale : le caractère épique et convivial de THEOPOLIS est un véritable atout pour partager au plus grand nombre une partie du contenu et des enjeux de la foi chrétienne.
                    </p>

                    <ul className="list-inside list-disc">
                        <li className=''>THEOPOLIS se joue de 2 à 4 joueurs</li>
                        <li>Une partie dure environ 40 minutes</li>
                        <li>A partir de 10 ans</li>
                    </ul>
                </div>

                <div>
                    <img src={tokens} alt='tokens' className='mx-auto' />
                </div>

                <div>
                        <button className='rounded-xl shadow-xl mt-5 px-5 bg-theoblue cursor-pointer' onClick={handleClick}>
                            Je veux jouer!
                        </button>
                </div>
            </section>

            <section className='w-full max-w-5xl rounded-xl shadow-xl border-theoblue border-2 mx-auto mt-20 font-serif p-6 flex text-center flex-col'>
                <div className='flex flex-col mx-auto items-center'>
                    <h1 className='text-theoblue text-2xl mt-3'>UNIVERS DU JEU</h1>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='w-1/2'>
                            <p>Au cœur d’une aventure située entre Terre et Ciel, THEOPOLIS vous invite à construire votre cité en érigeant des lieux de sanctification, en vous appuyant sur le labeur et la prière des hommes et en vivant des sacrements.</p>
                        </div>
                        <div className='w-1/2'>
                            <img src={example1} alt="exemple" className='mx-auto' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='w-1/2'>
                            <img src={cardexample} alt="exemple" className='mx-auto' />
                        </div>
                        <div className='w-1/2'>
                            <p>Vous pourrez adopter plusieurs stratégies de gagne, mais il faudra composer avec des désastres qui perturberont vos plans et l’avènement imprévisible de l’Apocalypse dont « nul ne connaît ni le jour ni l’heure » qui mettra un terme à la partie.</p>
                        </div>

                    </div>
                    <div className='flex items-center mt-5 md:mt-2'>
                        <p>Quel que soit votre âge, votre expérience des jeux ou votre culture religieuse, vous rentrerez rapidement dans l’univers de THEOPOLIS et apprécierez ce jeu équilibré, stratégique et ludique, complet sans être complexe.</p>
                    </div>
                    <div>
                        <button className='rounded-xl shadow-xl mt-5 px-5 bg-theoblue cursor-pointer' onClick={handleClick}>
                            Je veux jouer!
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}

