import { useEffect , useState} from 'react';
import Mridpic from '../assets/Mridpic.jpg';
import "./Mrid.css"; 
function Mrid() {
  const vidwans = [
    {name: "Palghat Mani Iyer", href: "/Users/vatsa/Mridwebsite/Mridwebsite/src/assets/ManiIyer.jpeg" ,brief: "Tanjore Style"},
    {name: "Palani Subramanya Pillai", href: "/Users/vatsa/Mridwebsite/Mridwebsite/src/assets/Palani.jpeg", brief: "Pudukotai Style"},
    {name: "CS Murugabhoopathy", href: "/Users/vatsa/Mridwebsite/Mridwebsite/src/assets/CSM.png", brief: "Pudukottai Style"},
    {name: "Mullapudi Srirama Murty", href:"/Users/vatsa/Mridwebsite/Mridwebsite/src/assets/Mullapudi.jpeg", brief:"Andra style"},
    {name:" 'PadmaVibhushan' Dr. Yella Venkateshwara Rao", href:"/Users/vatsa/Mridwebsite/Mridwebsite/src/assets/Yella.jpeg", brief:"Tajore Style"},
    {name: " 'Sangeeta Nataka Academy Awardee' Dr. Patri Satish Kumar", href:"/Users/vatsa/Mridwebsite/Mridwebsite/src/assets/Patri.jpeg", brief: "Andra Style"}

  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevIndex) => 
                (prevIndex === vidwans.length - 1 ? 0 : prevIndex + 1)
            );
        }, 5000);
        return () => clearInterval(intervalId);
    }, [vidwans.length]);

    const goToNext = () => {
      setCurrentSlide((prevIndex) =>
      (prevIndex === vidwans.length -1 ? 0 : prevIndex + 1)
      );
    };
    const goToPrev = () => {
      setCurrentSlide((prevIndex) => 
      (prevIndex === 0 ? vidwans.length - 1 : prevIndex - 1)
    );
    };
    return (
        <div>
          <section className = "hero-section-mrid">
            <div className='hero-image-container'>
                <img src = {Mridpic} alt="Mridanga pic" className = "hero-img-fill"></img>
                {/* Overlay Title Text - Centered on the Image */}
              <div className="hero-title-overlay">
                <h1 className="hero-main-title">Mridanga</h1>
                <p className="hero-subtitle">The King of Percussion</p>
              </div>
            </div>

            {/* 2. Floating Short Intro Text Box (Right Column) */}
            <div className="hero-intro-box-floating">
              <h2 className="intro-title">Eternal Rhythm</h2>
              <p className="intro-text">It is one of the 3 Divine instruments along with veena and Venu(Flute)</p>
            </div>
          </section>
          <section className = "making-section">
            <h2 className ="section-title"> Why King of instruments?</h2>
            <p className='section-paragraph'> It is the only percussion instrument that is one among the 3 divine instruments.<br></br>
            It is the only percussion instrument that has a reference of being played by Nandi and Lord Vishnu<br></br>
            It is regarded as the King also due to its majestic Naada(divine sound) that includes the treble and the bass sides of the instrument.
            It includes intricate rhythmic patterns and concepts that are not found in any other genre of music. <br></br>
            It has the capability to produce sounds that can be suitable for any type of Rasa(Mood) like Shānta (Calm), Raudra (Anger), Hāsya(Comedy). <br></br>
            It is can also be used for any genre of music like Hindustani, Jazz,Pop, rock ,etc<br></br>
            Learning to play this can open the doors for collaboration with any other world percussion which no other instrument offers<br></br>
            </p>
            </section>
            <section className = "Styles of playing">
              <h2 className = "styles-heading"> Styles of playing</h2>
              <p className="styles-para"> There are various Bani(Styles) of playing.<br></br>
              Srivatsa beongs to the Andra style of Mridanga.<br></br> The Tanjavur, the Pudukottai and the Andra styles are the 3 main styles of mridanga.</p>
            </section>
            <section className="prominent-vidwans">
              <h2 className = "vidwans-title"> Prominent Vidwans</h2>
              <div className="slideshow-container">
                    
                    {/* 1. Slides (Map through data) */}
                    {vidwans.map((vidwan, index) => (
                        <div 
                            key={index} 
                            // Only show the slide that matches the currentSlide index
                            className={`vidwan-slide ${index === currentSlide ? 'active' : ''}`}>
                            <img 
                                src={vidwan.href} 
                                alt={vidwan.name} 
                                className="vidwan-image" 
                            />
                            <div className="vidwan-info">
                                <h3>{vidwan.name}</h3>
                                <p>{vidwan.brief}</p>
                            </div>
                        </div>
                    ))}

                    {/* 2. Navigation Arrows */}
                    <button className="prev-button" onClick={goToPrev}>&#10094;</button>
                    <button className="next-button" onClick={goToNext}>&#10095;</button>

                    {/* 3. Dot Indicators */}
                    <div className="slideshow-dots">
                        {vidwans.map((_, index) => (
                            <span 
                                key={index} 
                                className={`dot ${index === currentSlide ? 'active-dot' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>

            </section>
        </div>
  );
}

export default Mrid;

            