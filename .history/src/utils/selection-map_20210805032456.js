export default function selectionMap({ series, films }) {
  return state.selection.map(function (range) {
    return {
     series: [
       { 
         title: 'Documentries', data: series.filter((item) => item.genre === 'documentaries')
       },
       {
          title: 'Comedies', data: series.filter((item) => item.genre === 'comedies')
       },
     ]
    }
    }
  };
};
