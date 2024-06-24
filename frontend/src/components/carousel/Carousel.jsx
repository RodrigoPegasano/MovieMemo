
// IMPORTS
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselImage1 from '../../assets/carousel-img-1.png'
import carouselImage2 from '../../assets/carousel-img-2.png'
import carouselImage3 from '../../assets/carousel-img-3.png'

// CSS
import './Carousel.css'
import { useTranslation } from 'react-i18next';

function CarouselHome() {
    const { t, i18n } = useTranslation();

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='carousel' activeIndex={index} onSelect={handleSelect} controls={false}>
            <div className='carousel-item'>
                <section className='carousel-display'>
                    <div className='section-left'>
                        <h3>{t('Organiza tus películas y series favoritas')}</h3>
                        <p>{t('Crea listas con películas y series que has visto o quieres ver.')}</p>
                    </div>
                    <div className='section-right'>
                        <img src={carouselImage1}></img>
                    </div>
                </section>
            </div>
            <div className='carousel-item'>
                <section className='carousel-display'>
                    <div className='section-left'>
                        <h3>{t('Califica y describe cada sentimiento')}</h3>
                        <p>{t('Puedes poner notas entre 0 y 5 a cada serie y película.')}</p>
                    </div>
                    <div className='section-right'>
                        <img src={carouselImage2}></img>
                    </div>
                </section>
            </div>
            <div className='carousel-item'>
                <section className='carousel-display'>
                    <div className='section-left'>
                        <h3>{t('Comparte con tus amigos!')}</h3>
                        <p>{t('Comparte memórias y recuerdos con tus amigos.')}</p>
                    </div>
                    <div className='section-right'>
                        <img src={carouselImage3}></img>
                    </div>
                </section>
            </div>
        </Carousel >
    );
}

export default CarouselHome;