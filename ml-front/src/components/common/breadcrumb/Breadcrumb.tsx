import React from 'react';
import {breadcrumbProps} from '../../../type';
import ChevronRight from '../../../assets/chevron-right';
import { Link } from 'react-router-dom';
import { normalizeUrl } from '../../../_helpers/formatting';

const Breadcrumb = (props:breadcrumbProps) => {

  if( props.categories ){
    return (
      <div className="breadcrumb">
        {props.categories.map((item:string, index:number) => {

          if( index !== 0 ){
            return (
              <React.Fragment key={index}>
                <div className="separator">
                  <ChevronRight />
                </div>
                <div className="itemBreadcrumb" >
                { item && 
                    <Link to={`/items?search=${normalizeUrl(item)}`}>
                      {item}
                    </Link>
                }
                </div>
              </React.Fragment>
            )
          } else {
            return (
              <div className="itemBreadcrumb" key={index}>
                { item && 
                    <Link to={`/items?search=${normalizeUrl(item)}`}>
                      {item}
                    </Link>
                }
              </div>
            );
          }
        })
        }
      </div>
    )
  } else {
    return null;
  }
}

export default Breadcrumb;