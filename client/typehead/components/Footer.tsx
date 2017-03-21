import * as React from 'react';
import * as classNames from 'classnames';

import {
  SHOW_ACTIVE,
  SHOW_ALL
} from '../../constants/UserFilters';

const FILTER_TITLES = {
  [SHOW_ACTIVE]: 'Active',
  [SHOW_ALL]: 'All',
};


interface FooterProps {
  filter: string;
  onShow: (filter:string)=>void;
}

class Footer extends React.Component<FooterProps, void> {
  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a className={classNames({ selected: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    );
  }

  render() {
    return (
      <footer className="footer">
        <ul className="filters">
          {[SHOW_ALL, SHOW_ACTIVE].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
      </footer>
    );
  }
}

export default Footer;