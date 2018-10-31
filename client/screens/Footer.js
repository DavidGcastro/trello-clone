import React from 'react';
import { Link } from 'react-router-dom';
let data = [
  {
    title: 'Using NAME',
    links: ['Features', 'Enterprise', 'Pricing', 'Support', 'Status']
  },
  { title: 'Legal', links: ['Privacy', 'Terms Of Service'] },
  { title: 'Company', links: ['About', 'Blog', 'CA Accelerator'] },
  { title: 'Compare', links: ['Jira', 'Waffle', 'Trello'] }
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--content wrapper">
        <div className="links">
          {data.map((x, y) => {
            return (
              <div key={y + 'inner'} className="filter--inner">
                <span className="footer--title">{x.title}</span>
                <div>
                  {x.links.map(x => (
                    <Link
                      key={x + 'Link'}
                      to={`/info/${x}`}
                      className="footer--link">
                      {x}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
