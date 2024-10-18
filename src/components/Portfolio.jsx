
import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    { id: 1, title: "Fishy Work", category: "branding", image: "images/portfolio/1-1.jpg" },
    { id: 2, title: "Wood Fire", category: "branding", image: "images/portfolio/1-2.jpg" },
    { id: 3, title: "Blind Makeup", category: "designing", image: "images/portfolio/1-3.jpg" },
    { id: 4, title: "Pink Flower", category: "development", image: "images/portfolio/1-4.jpg" },
    { id: 5, title: "Cutting Skills", category: "designing", image: "images/portfolio/1-5.jpg" },
    { id: 6, title: "Some Lights", category: "application", image: "images/portfolio/1-6.jpg" },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="section overflow-hidden" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center my-4 pb-2">
              <span className="sub-title text-uppercase">Project</span>
              <h3 className="title">My Portfolio</h3>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-12 text-center my-4 pt-2">
            <div className="filters-group">
              <ul className="container-filter mb-0 categories-filter list-unstyled filter-options h6">
                {['all', 'designing', 'branding', 'development', 'application'].map((filter) => (
                  <li
                    key={filter}
                    className={`filter-list list-inline-item categories fw-normal position-relative ${activeFilter === filter ? 'active' : ''}`}
                    onClick={() => handleFilterClick(filter)}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id="grid" className="row g-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
          {filteredItems.map((item) => (
            <div key={item.id} className="col picture-item">
              <div className="portfolio position-relative portfolio-standard overflow-hidden rounded">
                <div className="port-image">
                  <a href={item.image} className="lightbox tobii-zoom">
                    <img src={item.image} className="img-fluid" alt={item.title} />
                  </a>
                </div>
                <div className="overlay-content bg-white p-3 rounded text-center mb-2">
                  <h5 className="portfolio-title mb-1">
                    <a href="javascript:void(0)" className="text-dark">{item.title}</a>
                  </h5>
                  <span className="text-muted">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;