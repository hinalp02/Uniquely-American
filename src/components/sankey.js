import * as d3 from 'd3';
import { SingleContainer, Sankey, Tooltip } from '@unovis/ts';
import { SankeyData } from './sankeyData.js'

export default function (element) {
  const dataModel = new SankeyData();
  const chart = new SingleContainer(element, {
    height: 500,
    width: '100%',
    margin: { top: 20, bottom: 20 },
    // tooltip: new Tooltip({
    //   triggers: {
    //     // [Sankey.selectors.node]: d => `node ${d.value}`,
    //     // [Sankey.selectors.link]: d => `link ${d.value}`,
    //   },
    // }),
    component: new Sankey({
      /* Labels */
      label: n => n.isRootNode ? '' : n.label,
      subLabel: n => n.isRootNode ? '' : n.percentage,
      nodeIcon: n => n.expandable ? (n.expanded ? '-' : '+') : '',
      nodeCursor: n => n.expandable ? 'pointer' : 'no-drop',
      nodeAlign: 'left',
      labelMaxWidth: 250,
      labelVerticalAlign: 'middle',
      nodeColor: n => n.nodeColor,
      nodeIconColor: 'black',
      onmouseover: console.log("dfadddddsdfadf"),
      events: {
        [Sankey.selectors.node]: {
          click: toggleState,
          //mouseover: console.log("dfasdfa"),
        }
      },

      nodeSort: (a, b) => {
        const diff = b.sourceGroup?.value - a.sourceGroup?.value
        if (diff === 0) {
          let i = 0
          while (i < a.path.length
            && i < b.path.length
            && a.path[i].value === b.path[i].value
          ) {
            i++;
          }
          if (i === a.path.length) return 1
          if (i === b.path.length) return -1
          return b.path[i].value - a.path[i].value
        }
        return diff
      },
      highlightSubtreeOnHover: true,
      heightNormalizationCoeff: 0.5,
      nodePadding: 22,
      iterations: 200,
    }),
  }, dataModel.data());

  function toggleState(n) {
    if (!n.expandable) return;
    if (n.expanded) {
      dataModel.collapse(n);
    } else {
      dataModel.expand(n);
    }
    const updatedData = dataModel.data()
    chart.setData(updatedData);
  }
}


