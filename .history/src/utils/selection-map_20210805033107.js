export default function selectionMap({ series, films }) {
  return {
    series: [
      { 
        title: 'Documentries', data: series.filter((item) => item.genre === 'documentaries')
      },
      {
        title: 'Comedies', data: series.filter((item) => item.genre === 'comedies')
      },
      {
        title: 'Children', data: series.filter((item) => item.genre === 'children')
      },
      {
        title: 'Crime', data: series.filter((item) => item.genre === 'crime')
      },
      {
        title: 'Feel Good', data: series.filter((item) => item.genre === 'feel-good')
      },
    ]
  }
}
 