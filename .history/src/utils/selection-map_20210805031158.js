export default function selectionMap(state) {
  return state.selection.map(function (range) {
    return {
      start: range.start,
      end: range.end,
      text: state.doc.getRange(range.start, range.end)
    };
  });
}