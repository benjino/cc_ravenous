import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
      {
        this.props.businesses.map(value => {
          return <Business key={business.id} business={value} />
        })
      }
      </div>
    )
  }
}

export default BusinessList;
