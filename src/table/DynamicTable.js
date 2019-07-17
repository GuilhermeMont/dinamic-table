import React from 'react';
import classes from './DynamicTable.css'

const dynamicTable = (props) => {

  const heads = props.heads.map(head => {
      return <th>{head}</th>;
  });

  const column = (data) => {
      return props.tags.map(tag => {
          return <td>{data[tag]}</td>
      })
  };

  const body = props.data.map ( d => {
     return (
         <tr>
             {column(d)}
         </tr>
     );
  });

  return (
      <div className={classes.DynamicTable}>
          <table>
              <thead>
                  <tr>
                      {heads}
                  </tr>
              </thead>
              <tbody>
              {body}
              </tbody>
          </table>
      </div>
  );
};

export default dynamicTable;