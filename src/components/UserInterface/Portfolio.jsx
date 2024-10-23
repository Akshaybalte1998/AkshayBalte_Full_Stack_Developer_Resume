import React, { useState, useEffect } from 'react';
import data from "../../assets/dada/portfolioData";
import Modal from './Modal';

const Portfolio = () => {
    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('ALL');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const loadMoreHandler = () => {
        setNextItems(prev => prev + 6);
    };

    const showModalHandler = id => {
        setShowModal(true);
        setActiveID(id);
    };

    useEffect(() => {
        if (selectTab === 'ALL') {
            setPortfolios(data);
        } else if (selectTab === 'Web Design') {
            const filteredData = data.filter(item => item.category === 'Web Design');
            setPortfolios(filteredData);
        } else if (selectTab === 'Ux Design') {
            const filteredData = data.filter(item => item.category === 'Ux');
            setPortfolios(filteredData);
        }
    }, [selectTab]);

    return (
        <div id="Portfolio">
            <div className="container">
                <div className="header">
                    <h3 className='title'>Certification</h3>
                </div>
                <div className='portfolio-grid'>
                    {
                        portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                            <div
                                key={index}
                                className='portfolio-item'>
                                <figure>
                                    <img className="portfolio-img" src={portfolio.imgUrl} alt="" />
                                </figure>
                                <div className='overlay'>
                                    <div className='overlay-content'>
                                        <button onClick={() => showModalHandler(portfolio.id)} className='details-button'>
                                            See details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
            }
            <style jsx>{`
                #Portfolio {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5dc ; /* Changed background color to #d3d3d3 */
                    padding: 2rem 0;
                }

                .container {
                    width: 90%;
                    margin: 0 auto;
                    text-align: center; /* Center content */
                }

                .header {
                    margin-bottom: 2rem;
                }

                .title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #007bff; /* Updated color */
                }

                .portfolio-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.5rem; /* Increase gap */
                    justify-content: center; /* Center items */
                }

                .portfolio-item {
                    position: relative;
                    width: calc(33.333% - 1rem);
                    max-width: 300px;
                    overflow: hidden;
                    border-radius: 12px; /* Make borders rounder */
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow */
                    transition: transform 0.3s, box-shadow 0.3s;
                }

                .portfolio-item:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }

                .portfolio-img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 123, 255, 0.7); /* Update overlay color */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                .portfolio-item:hover .overlay {
                    opacity: 1;
                }

                .overlay-content {
                    text-align: center;
                    color: #fff;
                }

                .details-button {
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    padding: 0.7rem 1.2rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .details-button:hover {
                    background-color: #0056b3;
                }

                .load-more {
                    text-align: center;
                    margin-top: 1.5rem;
                }

                .load-more-button {
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    padding: 0.7rem 1.2rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .load-more-button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
};

export default Portfolio;
